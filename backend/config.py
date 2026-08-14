from __future__ import annotations

import os
from pathlib import Path

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")


class Settings:
    APP_NAME = "SolarWise AI"
    APP_VERSION = "0.1.0"
    BACKEND_DIR = BASE_DIR
    DATA_DIR = BASE_DIR / "data"
    PROMPTS_DIR = BASE_DIR / "prompts"

    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "").strip()
    GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-3.1-flash-lite").strip()


settings = Settings()

__all__ = ["settings"]
