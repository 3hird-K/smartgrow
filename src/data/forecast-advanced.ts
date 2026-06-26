/**
 * SmartGrow — Actuator usage data for the IoT Smart Greenhouse System.
 *
 * System: DHT22 sensor → ESP32 → PHP backend → MySQL
 * Actuators: Fan, Fogger, Sprinkler, Exhaust Vent
 */

import { WEEK7_FORECAST_ROW } from "./resource-forecast";

/* ────────────────────────────────────────────────────────
   ACTUATOR RUNTIME vs. CAPACITY
   ──────────────────────────────────────────────────────── */

export type VaccineStockRow = {
  vaccine: string;
  forecastDoses: number;
  currentStock: number;
  color: string;
};

/**
 * Compares predicted actuator runtime demand against available daily capacity.
 * Managed by the ESP32 control system.
 */
export const VACCINE_STOCK_DATA: VaccineStockRow[] = [
  {
    vaccine: "Fan (Cooling)",
    forecastDoses: Math.round(WEEK7_FORECAST_ROW.fanRuntime * 6),
    currentStock: 48,
    color: "#38bdf8",
  },
  {
    vaccine: "Fogger (Humidity)",
    forecastDoses: Math.round(WEEK7_FORECAST_ROW.foggerRuntime * 5),
    currentStock: 40,
    color: "#10b981",
  },
  {
    vaccine: "Sprinkler (Watering)",
    forecastDoses: Math.round(WEEK7_FORECAST_ROW.fanRuntime * 2.5),
    currentStock: 24,
    color: "#a855f7",
  },
  {
    vaccine: "Exhaust Vent (CO₂)",
    forecastDoses: Math.round(WEEK7_FORECAST_ROW.fanRuntime * 3),
    currentStock: 30,
    color: "#f59e0b",
  },
];
