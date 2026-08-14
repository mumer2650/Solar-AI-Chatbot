from __future__ import annotations

import json
from contextlib import asynccontextmanager
from typing import Any

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from config import settings
from utils import calculate_solar_recommendation, load_knowledge_base, load_system_prompt, TOOL_SCHEMA


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.knowledge_base = load_knowledge_base()
    app.state.system_prompt = load_system_prompt()
    yield


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Solari backend for solar consultation and sizing in Pakistan.",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/knowledge_base", StaticFiles(directory="knowladge_base"), name="knowledge_base")


class RecommendationRequest(BaseModel):
    monthly_units: float = Field(..., gt=0, description="Average monthly electricity usage in kWh")
    backup_hours: float = Field(default=0.0, ge=0, description="Required backup window in hours")


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, description="User question or request")
    system_type: str = Field(default="on-grid", description="Preferred system type")


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok", "service": settings.APP_NAME}


@app.get("/")
def root() -> dict[str, str]:
    return {"status": "The application is running", "service": settings.APP_NAME}


@app.post("/api/recommend")
def recommend_system(payload: RecommendationRequest) -> dict[str, Any]:
    try:
        recommendation = calculate_solar_recommendation(
            monthly_units=payload.monthly_units,
            backup_hours=payload.backup_hours,
        )
        return {"success": True, "data": recommendation}
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc


@app.post("/api/chat")
async def chat_with_ai(payload: ChatRequest) -> dict[str, Any]:
    if not settings.GEMINI_API_KEY:
        return {
            "success": False,
            "message": "Gemini API key is not configured. Set GEMINI_API_KEY in your environment and restart the server.",
            "fallback": True,
        }

    try:
        from google import genai
        from google.genai import types

        client = genai.Client(api_key=settings.GEMINI_API_KEY)
        
        system_instruction = (
            f"{app.state.system_prompt}\n\n"
            f"Knowledge Base:\n{app.state.knowledge_base}\n\n"
            f"User preferred system type: {payload.system_type}.\n"
            "Use the provided knowledge base as the primary source of truth; do not invent missing specs."
        )
        
        config = types.GenerateContentConfig(
            system_instruction=system_instruction,
            tools=[TOOL_SCHEMA],
        )

        response = client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=payload.message,
            config=config,
        )

        function_call = None
        if response.function_calls:
            function_call = response.function_calls[0]

        if function_call is not None:
            args = function_call.args if function_call.args else {}
            if "monthly_units" not in args:
                answer = response.text or (
                    "I can help with solar sizing. Please share your monthly electricity units"
                    " (kWh) and optional backup hours."
                )
                return {"success": True, "message": answer}

            try:
                tool_result = calculate_solar_recommendation(**args)
                tool_result_json = json.loads(json.dumps(tool_result))
            except ValueError as ve:
                return {"success": False, "message": f"Invalid input: {ve}"}
            
            contents = [
                types.Content(role="user", parts=[types.Part.from_text(text=payload.message)]),
                response.candidates[0].content,
                types.Content(role="user", parts=[
                    types.Part.from_function_response(
                        name="calculate_solar_recommendation",
                        response=tool_result_json
                    )
                ])
            ]
            
            follow_up = client.models.generate_content(
                model=settings.GEMINI_MODEL,
                contents=contents,
                config=config,
            )
            answer = follow_up.text or "I calculated the recommendation and attached the result."
            return {"success": True, "message": answer, "tool_result": tool_result}

        answer = response.text or "I could not generate a response from Gemini."
        return {"success": True, "message": answer}
    except Exception as exc:  # pragma: no cover - defensive boundary
        error_msg = str(exc)
        if "429" in error_msg or "RESOURCE_EXHAUSTED" in error_msg:
            return {"success": False, "message": "I am currently receiving too many requests. Please wait a moment and try again!"}
        raise HTTPException(status_code=500, detail=f"Gemini request failed: {exc}") from exc


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)