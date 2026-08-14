from __future__ import annotations

import math
from pathlib import Path
from typing import Any

# ============================================================
# Engineering Constants (Pakistan 2026 Context)
# ============================================================
PEAK_SUN_HOURS = 4.5
PERFORMANCE_RATIO = 0.80
PANEL_WATTAGE = 550
INVERTER_EFFICIENCY = 0.95
BATTERY_DOD = 0.80
MIN_SYSTEM_SIZE_KW = 3.0
PANEL_AREA_SQFT = 30

DISCLAIMER = (
    "This is an initial estimate and does not replace a professional "
    "site survey or engineering design by an AEDB-certified installer."
)

# ============================================================
# 1. Knowledge Base Loaders
# ============================================================
def load_knowledge_base(data_dir: Path | str | None = None) -> str:
    """Read all markdown source files into an in-memory knowledge base."""
    base_dir = Path(data_dir) if data_dir is not None else Path(__file__).resolve().parent / "data"
    
    # We expect these 3 specific files based on the project structure
    expected_files = [
        "hardware_research.md",
        "operations_support.md",
        "systems_research.md"
    ]
    
    knowledge_parts: list[str] = []
    for file_name in expected_files:
        file_path = base_dir / file_name
        if file_path.exists():
            content = file_path.read_text(encoding="utf-8")
            knowledge_parts.append(content.strip())
            
    if not knowledge_parts:
        return "Knowledge Base is empty. Please check the data/ directory."

    return "\n\n---\n\n".join(knowledge_parts).strip()


def load_system_prompt(prompt_path: Path | str | None = None) -> str:
    """Load the system prompt used for domain grounding."""
    base_path = Path(prompt_path) if prompt_path is not None else Path(__file__).resolve().parent / "prompts" / "system_prompt.txt"
    try:
        return base_path.read_text(encoding="utf-8").strip()
    except OSError:
        return "You are Solari. Provide accurate solar guidance based on the knowledge base."


# ============================================================
# 2. Recommendation Engine
# ============================================================
def calculate_solar_recommendation(monthly_units: float, backup_hours: float = 0.0) -> dict[str, Any]:
    """
    Calculate a preliminary Solari system recommendation based on official constants.
    """
    try:
        monthly_units = float(monthly_units)
        backup_hours = float(backup_hours)
    except (TypeError, ValueError):
        raise ValueError("monthly_units and backup_hours must be numeric values.")

    if monthly_units <= 0:
        raise ValueError("monthly_units must be greater than 0.")
    if backup_hours < 0:
        raise ValueError("backup_hours must be 0 or greater.")

    # Formula 1: Daily Energy Consumption
    daily_energy_kwh = monthly_units / 30

    # Formula 2: Preliminary PV Array Sizing
    preliminary_pv_kw = daily_energy_kwh / (PEAK_SUN_HOURS * PERFORMANCE_RATIO)

    # Output requirement: minimum system size of 3.0 kW
    recommended_system_kw = max(preliminary_pv_kw, MIN_SYSTEM_SIZE_KW)
    recommended_system_kw = round(recommended_system_kw, 2)

    # Formula 3: Panel Count (Using the recommended system kw, NOT preliminary)
    panel_count = math.ceil((recommended_system_kw * 1000) / PANEL_WATTAGE)

    # Formula 4: Roof Area
    required_roof_area_sqft = int(panel_count * PANEL_AREA_SQFT)

    # Formula 5: Battery Capacity
    if backup_hours > 0:
        battery_capacity_kwh = ((daily_energy_kwh / 24) * backup_hours) / (INVERTER_EFFICIENCY * BATTERY_DOD)
        battery_capacity_kwh = round(battery_capacity_kwh, 2)
    else:
        battery_capacity_kwh = 0.0

    return {
        "monthly_units_input": monthly_units,
        "backup_hours_input": backup_hours,
        "recommended_system_kw": recommended_system_kw,
        "recommended_panels_count": int(panel_count),
        "panel_wattage": PANEL_WATTAGE,
        "required_roof_area_sqft": required_roof_area_sqft,
        "battery_capacity_kwh": battery_capacity_kwh,
        "disclaimer": DISCLAIMER,
    }


# ============================================================
# 3. Gemini Native Tool Schema
# ============================================================
TOOL_SCHEMA = {
    "function_declarations": [
        {
            "name": "calculate_solar_recommendation",
            "description": "Calculates the recommended solar PV system size in kW, the number of panels needed, the required roof area in square feet, and battery capacity based on monthly electricity units.",
            "parameters": {
                "type": "OBJECT",
                "properties": {
                    "monthly_units": {
                        "type": "NUMBER",
                        "description": "The user's average monthly electricity consumption in kWh or units.",
                    },
                    "backup_hours": {
                        "type": "NUMBER",
                        "description": "The number of hours of battery backup the user requires during load shedding. Defaults to 0 if not specified.",
                    }
                },
                "required": ["monthly_units"],
            },
        }
    ]
}


