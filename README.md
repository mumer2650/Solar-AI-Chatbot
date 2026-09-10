# Solari: Intelligent Solar PV Sizing and Consultation Assistant

## 1. Title & Abstract
**Solari** is a domain-specific conversational AI system engineered to address the complexities of sizing photovoltaic (PV) arrays and battery backup systems for residential and commercial energy profiles. The proposed solution bridges deterministic engineering models with generative large language models (LLMs) through a function-calling paradigm, ensuring accurate, standards-compliant recommendations. The primary technical achievement is the integration of an in-memory domain-grounded knowledge base alongside constant-time deterministic safety constraints, which mitigates LLM hallucinations and provides reliable, actionable solar estimates for end-users.

## 2. System Architecture
The system employs a decoupled, asynchronous client-server architecture to ensure high responsiveness and maintainability.
- **Frontend Layer:** Implemented in Vanilla HTML, CSS, and JavaScript, providing a modular interface for both direct parameter input (calculator) and natural language interactions.
- **Backend Layer (API Gateway):** Built on **FastAPI** utilizing an ASGI event loop to handle concurrent client requests efficiently.
- **Data Flow & LLM Integration:** User queries map to a REST endpoint (`/api/chat` or `/api/recommend`). For LLM queries, the system retrieves a statically-loaded, in-memory Markdown knowledge base and dynamically synthesizes the context. The context is routed to the **Gemini 3.1** model using native function calling (`types.GenerateContentConfig`). If mathematical parameterization is required, the LLM emits a tool call which is synchronously resolved by the backend engineering model, and the resultant structured data is appended to the context window to generate the final response.

## 3. Methodology & Algorithmic Implementation
The system explicitly avoids overly complex non-linear data structures in favor of highly optimized, deterministic computational paths:
- **Retrieval-Augmented Generation (RAG):** Due to the focused scope of the domain constraints, the system bypasses traditional vector database retrieval in favor of an **In-Memory Context Injection** paradigm. The knowledge base files (`hardware_research.md`, etc.) are preloaded and concatenated during application startup, maintaining an $O(N)$ string concatenation complexity where $N$ is the total character length of the corpus.
- **Deterministic Sizing Algorithms:** The core sizing logic operates in strict constant time $O(1)$ and space $O(1)$. Given a target average monthly energy consumption ($E_m$) and required backup hours ($H_b$), the preliminary PV array capacity is bounded by localized constants (Peak Sun Hours, Performance Ratio).
- **Function Calling & Orchestration:** The orchestration layer leverages a stateless functional callback mechanism. A Pydantic schema maps the `calculate_solar_recommendation` signature directly to a Gemini native tool declaration, ensuring rigid payload parsing and deterministic outputs.

## 4. Evaluation & Performance Metrics
- **Concurrency & Latency:** By utilizing FastAPI's asynchronous routing and Uvicorn's ASGI server, the application concurrently manages multiple incoming TCP connections, exhibiting negligible baseline latency prior to external API egress.
- **Hallucination Mitigation:** Grounding the LLM directly on the full concatenated domain knowledge base—while explicitly forcing the LLM to yield calculations to the deterministic functional tools—substantially minimizes calculation drift and output hallucinations.
- **Safety Invariants:** Hard bounds on the deterministic output (e.g., enforcing `MIN_SYSTEM_SIZE_KW = 3.0` and strict input bounds) guarantee structural safety and prevent the model from suggesting sub-standard or physically impossible configurations.

## 5. Security & Data Integrity
- **Deterministic Safety Rails:** All incoming payloads are subjected to strict type and boundary validation using **Pydantic** models (e.g., verifying `monthly_units > 0`). Malformed inputs are rejected at the edge layer with 400 Bad Request responses before triggering any LLM processing.
- **Privacy & Key Management:** The system handles external LLM API tokens via isolated environment files (`.env`), ensuring that sensitive keys (like `GEMINI_API_KEY`) are never exposed in source control or the frontend payload. 
- **Stateless Execution:** The backend does not persist identifiable user telemetry across sessions, operating entirely amnesiac beyond the active request lifecycle, which inherently secures user query data against cross-session contamination.

## 6. Reproducibility (Quick Start)
To instantiate the Solari backend locally, ensure you have Python 3.10+ installed.

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   cd Solar-AI-Chatbot/backend
   ```

2. **Environment Configuration:**
   Copy the example environment template and configure your API key.
   ```bash
   cp .env.example .env
   # Edit .env and set your GEMINI_API_KEY
   ```

3. **Dependency Installation:**
   Initialize a virtual environment and install the required dependencies.
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   pip install -r requirements.txt
   ```

4. **Launch the Server:**
   Execute the backend application using the Uvicorn ASGI server.
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   # Alternatively, on Windows, use the provided script:
   # run.bat
   ```

The API will now be available at `http://localhost:8000`. You can access the automatic documentation at `http://localhost:8000/docs`. To use the frontend, open `frontend/index.html` in your preferred web browser.
