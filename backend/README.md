# SolarWise AI - Backend

This is the FastAPI backend for **SolarWise AI**, an expert Solar Industry Engineering Assistant specializing in residential, commercial, and industrial solar PV solutions in Pakistan under the 2026 NEPRA Net-Billing Regulatory Framework.

## 🚀 Features
- **Deterministic Sizing Engine:** Accurately calculates solar PV capacity, panel counts, and battery requirements based on user inputs.
- **AI Consultation Chat:** Powered by the new `google-genai` SDK and Gemini 3.1 Flash-Lite, strictly grounded using localized knowledge base files.
- **Native Tool Calling:** Seamlessly bridges natural language queries with programmatic sizing calculations.

---

## 📋 Prerequisites
- **Python 3.10+**
- A **Google Gemini API Key**

## 🛠️ Setup & Installation

**1. Navigate to the backend directory:**
```bash
cd backend
```

**2. Create and activate a Virtual Environment:**
```bash
# On Windows
python -m venv .venv
.venv\Scripts\activate

# On macOS/Linux
python3 -m venv .venv
source .venv/bin/activate
```

**3. Install Dependencies:**
```bash
pip install -r requirements.txt
```

**4. Configure Environment Variables:**
Create a `.env` file in the root of the `backend/` directory and add your Gemini API Key:
```env
GEMINI_API_KEY="your_api_key_here"
GEMINI_MODEL="gemini-3.1-flash-lite"
```

---

## 🏃 Running the Server

Start the Uvicorn ASGI server with the following command:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```
*The `--reload` flag enables auto-reloading upon code changes. Omit it for production environments.*

Once running, you can access the interactive API documentation at:
- **Swagger UI:** [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc:** [http://localhost:8000/redoc](http://localhost:8000/redoc)

---

## 📡 Core API Endpoints

### `GET /health`
Returns the health status of the API.

### `POST /api/recommend`
A deterministic endpoint for direct sizing calculations without invoking the AI.
**Request Body:**
```json
{
  "monthly_units": 200,
  "backup_hours": 0
}
```

### `POST /api/chat`
The main AI conversational endpoint. Automatically uses the `calculate_solar_recommendation` tool when a user asks for a system sizing.
**Request Body:**
```json
{
  "message": "My monthly units are 200, recommend me a solar system.",
  "system_type": "on-grid"
}
```

---

## 📁 Directory Structure
- `main.py` - FastAPI app initialization, routes, and AI orchestration.
- `utils.py` - Core logic for sizing formulas and Gemini native tool schema declaration.
- `config.py` - Environment configurations using `python-dotenv`.
- `data/` - Markdown files loaded into the AI's memory (Knowledge Base).
- `prompts/` - Contains the `system_prompt.txt` that strictly grounds the AI persona.
