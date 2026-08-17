"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Droplets,
  Gauge,
  Lightbulb,
  Sun,
  Thermometer,
  Wind,
  Layers,
  Activity,
  CheckCircle2,
  AlertCircle,
  Cpu,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { AreaChart } from "./spark-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const metricTabs = [
  {
    id: "temp",
    label: "Temperature",
    value: "26.4",
    unit: "°C",
    icon: Thermometer,
    target: "24.0 – 28.0°C",
    status: "Optimal",
    delta: "+0.3°C vs 1h ago",
    data: [25.6, 25.8, 26.1, 26.0, 26.3, 26.7, 27.2, 27.0, 26.6, 26.4, 26.3, 26.4],
    avg: "26.3°C avg",
  },
  {
    id: "humidity",
    label: "Humidity",
    value: "88",
    unit: "% RH",
    icon: Droplets,
    target: "80 – 95% RH",
    status: "Optimal",
    delta: "Steady microclimate",
    data: [86, 84, 83, 85, 87, 89, 91, 90, 88, 87, 88, 88],
    avg: "87.5% avg",
  },
  {
    id: "co2",
    label: "CO₂ Level",
    value: "620",
    unit: "ppm",
    icon: Wind,
    target: "< 1000 ppm",
    status: "Safe",
    delta: "Vent damper cycle normal",
    data: [780, 750, 710, 680, 650, 630, 610, 600, 615, 625, 620, 620],
    avg: "660 ppm avg",
  },
  {
    id: "moisture",
    label: "Substrate Moisture",
    value: "74",
    unit: "%",
    icon: Gauge,
    target: "70 – 80%",
    status: "Optimal",
    delta: "Bag sensor calibration OK",
    data: [76, 75, 75, 74, 74, 73, 75, 76, 75, 74, 74, 74],
    avg: "74.6% avg",
  },
];

const monitoredCapabilities = [
  { label: "Calibrated DHT22 Air Temp & RH", icon: Thermometer },
  { label: "CO₂ Atmospheric Concentration", icon: Wind },
  { label: "Substrate Bag Core Moisture", icon: Droplets },
  { label: "Photoperiod Lighting Timing", icon: Lightbulb },
  { label: "Zone-Specific Microclimate Alerts", icon: Activity },
  { label: "Historical 24-Hour Cycle Logs", icon: Cpu },
];

const zoneStatuses = [
  { name: "Zone A", role: "Fruiting Bay 1", temp: "26.4°C", rh: "88%", status: "Optimal", attention: false },
  { name: "Zone B", role: "Fruiting Bay 2", temp: "25.8°C", rh: "91%", status: "Optimal", attention: false },
  { name: "Zone C", role: "Incubation Bay", temp: "28.6°C", rh: "78%", status: "Attention", attention: true },
  { name: "Zone D", role: "Primordia Pinning", temp: "24.9°C", rh: "92%", status: "Optimal", attention: false },
];

export function MonitoringPreview() {
  const [selectedMetric, setSelectedMetric] = useState("temp");
  const currentMetric = metricTabs.find((m) => m.id === selectedMetric) || metricTabs[0];

  return (
    <section
      id="monitoring"
      aria-labelledby="monitoring-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Explanatory Content */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Real-Time Monitoring"
              title="Know what's happening inside your greenhouse."
              description="The SmartGrow live console turns raw sensor telemetry into instant microclimate visibility. Spot environmental drift before it stresses a mushroom batch."
            />

            <Reveal delay={100}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {monitoredCapabilities.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-3 rounded-xl border border-border/70 bg-muted/20 px-3.5 py-3 transition-colors hover:border-primary/30"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <m.icon className="size-3.5" strokeWidth={2.2} />
                    </span>
                    <span className="text-xs font-semibold text-foreground">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-7 flex items-center gap-2.5 rounded-xl border border-primary/20 bg-primary/[0.04] p-3.5 text-xs text-muted-foreground">
                <Sun className="size-4 text-primary shrink-0" />
                <span>
                  Telemetry is calibrated specifically for <strong>Pleurotus ostreatus</strong> (oyster mushroom) fruiting parameters.
                </span>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex items-center gap-4">
                <Button size="lg" className="h-11 px-6 text-xs font-bold uppercase tracking-wider" asChild>
                  <Link href="/dashboard">
                    Open Live Dashboard
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-11 px-6 text-xs font-bold uppercase tracking-wider" asChild>
                  <Link href="/dashboard/sensor-readings">
                    View Sensor Logs
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Browser-Grade Live Interactive Dashboard UI Preview */}
          <Reveal delay={140} direction="left" className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-teal-500/10 to-transparent blur-2xl"
            />
            
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl shadow-black/20">
              {/* Dashboard Preview Browser Chrome */}
              <div className="flex items-center justify-between border-b border-border/70 bg-muted/40 px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    SmartGrow Live Telemetry Hub
                  </span>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-500">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ESP32 Stream Active
                </span>
              </div>

              {/* Metric Selector Tabs */}
              <div className="border-b border-border/70 bg-muted/20 p-3">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {metricTabs.map((m) => {
                    const isTabSelected = selectedMetric === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSelectedMetric(m.id)}
                        className={cn(
                          "flex flex-col items-start rounded-xl border p-2.5 text-left transition-all",
                          isTabSelected
                            ? "border-primary bg-background shadow-sm"
                            : "border-border/60 bg-card/60 hover:bg-card hover:border-border",
                        )}
                      >
                        <div className="flex w-full items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            {m.label}
                          </span>
                          <m.icon
                            className={cn(
                              "size-3.5",
                              isTabSelected ? "text-primary" : "text-muted-foreground",
                            )}
                            strokeWidth={2.2}
                          />
                        </div>
                        <p className="mt-1 text-base font-black tabular-nums tracking-tight text-foreground">
                          {m.value}
                          <span className="text-[10px] font-medium text-muted-foreground ml-0.5">
                            {m.unit}
                          </span>
                        </p>
                        <span className="mt-0.5 text-[9px] font-bold text-emerald-500">
                          {m.status}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Interactive Chart Area */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      24-Hour Cycle · {currentMetric.label}
                    </h4>
                    <p className="text-xs font-semibold text-foreground">
                      Target Range: {currentMetric.target}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-primary">
                      {currentMetric.avg}
                    </span>
                    <p className="text-[10px] text-muted-foreground">
                      {currentMetric.delta}
                    </p>
                  </div>
                </div>

                <div className="mt-3 rounded-xl border border-border/70 bg-muted/10 p-3">
                  <AreaChart
                    key={currentMetric.id}
                    gradientId={`preview-chart-${currentMetric.id}`}
                    values={currentMetric.data}
                    className="h-32 w-full"
                  />
                </div>

                {/* Multi-Zone Quick Strip */}
                <div className="mt-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Greenhouse Zone Status
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {zoneStatuses.map((z) => (
                      <div
                        key={z.name}
                        className={cn(
                          "rounded-xl border p-2.5 transition-all",
                          z.attention
                            ? "border-amber-500/30 bg-amber-500/5"
                            : "border-border/70 bg-muted/20",
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-foreground">
                            {z.name}
                          </span>
                          <span
                            className={cn(
                              "flex items-center gap-1 text-[10px] font-bold",
                              z.attention ? "text-amber-500" : "text-emerald-500",
                            )}
                          >
                            <span
                              className={cn(
                                "size-1.5 rounded-full",
                                z.attention ? "bg-amber-500" : "bg-emerald-500",
                              )}
                            />
                            {z.status}
                          </span>
                        </div>
                        <p className="mt-1 text-[10px] text-muted-foreground">
                          {z.role}
                        </p>
                        <div className="mt-1 flex items-center justify-between text-[10px] font-mono">
                          <span>{z.temp}</span>
                          <span>{z.rh}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
