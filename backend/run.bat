@echo off
echo ========================================================
echo        Starting Solar-AI-Chatbot Backend...
echo ========================================================

:: 1. Handle Environment Variables (.env)
if not exist ".env" (
    echo [INFO] .env file not found. Creating from .env.example...
    if exist ".env.example" (
        copy .env.example .env >nul
        echo [SUCCESS] .env file created successfully!
    ) else (
        echo [WARNING] .env.example not found. Please create .env manually.
    )
) else (
    echo [INFO] .env file found.
)

:: 2. Handle Python Virtual Environment (.venv)
if not exist ".venv\" (
    echo [INFO] Virtual environment not found. Creating one now...
    python -m venv .venv
    echo [SUCCESS] Virtual environment created successfully!
) else (
    echo [INFO] Virtual environment found.
)

:: 3. Activate Virtual Environment
echo [INFO] Activating virtual environment...
call .venv\Scripts\activate.bat

:: 4. Install Dependencies
echo [INFO] Installing required dependencies...
python -m pip install --upgrade pip >nul
pip install -r requirements.txt

:: 5. Run the Server
echo ========================================================
echo        Starting Server (uvicorn main:app)...
echo ========================================================
uvicorn main:app --host 0.0.0.0 --port 8000
