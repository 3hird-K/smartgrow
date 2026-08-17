"use client";

import { useState, useEffect } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Cpu,
  Database,
  Gauge,
  MonitorSmartphone,
  Radio,
  Sparkles,
  Thermometer,
  Wind,
  Workflow,
  Zap,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const pipelineStages = [
  {
    id: "sensors",
    number: "01",
    label: "IoT Environmental Sensors",
    subtitle: "Calibrated Hardware Telemetry",
    icon: Thermometer,
    badge: "Continuous Input",
    specs: "DHT22 (±0.5°C / ±2% RH) · CO₂ (0–5000 ppm) · Substrate Probes",
    summary: "Precision probes continuously measure air temperature, relative humidity, atmospheric carbon dioxide, and substrate core moisture across all bays.",
    flowItems: ["Temperature: 26.4°C", "Humidity: 88% RH", "CO₂: 620 ppm", "Moisture: 74%"],
  },
  {
    id: "esp32",
    number: "02",
    label: "ESP32 Embedded Logic",
    subtitle: "Sub-Second Microcontroller Loop",
    icon: Cpu,
    badge: "Edge Processing",
    specs: "Sub-second evaluation · Non-blocking async loop · Wi-Fi Telemetry",
    summary: "Onboard firmware evaluates live readings against custom threshold rules every second, deciding when to trigger equipment without internet latency.",
    flowItems: ["Rule: Temp > 28°C", "Rule: RH < 80%", "Hysteresis Window", "Relay Bus Comm"],
  },
  {
    id: "actuators",
    number: "03",
    label: "Automation Relays & Actuators",
    subtitle: "Instant Physical Response",
    icon: Zap,
    badge: "Hardware Action",
    specs: "4-Channel Isolated Relays · < 100ms Switching · Manual Overrides",
    summary: "Opto-isolated relays switch high-efficiency cooling fans, ultrasonic misting foggers, substrate irrigation, and motorized fresh-air dampers.",
    flowItems: ["Cooling Fans Active", "Foggers Standby", "Dampers Open", "Sprinklers Standby"],
  },
  {
    id: "storage",
    number: "04",
    label: "MySQL Relational Engine",
    subtitle: "Structured Telemetry Storage",
    icon: Database,
    badge: "Persistent Data",
    specs: "Indexed time-series · Batch milestone logs · Actuator runtime hours",
    summary: "Every sensor reading, rule execution, and manual override is indexed and archived into MySQL for historical batch auditing and export.",
    flowItems: ["Time-series Logs", "Event Audit Trail", "Batch Yields", "Power Tracking"],
  },
  {
    id: "dashboard",
    number: "05",
    label: "SmartGrow Web Platform",
    subtitle: "Real-Time Grower Interface",
    icon: MonitorSmartphone,
    badge: "Control & Analytics",
    specs: "Next.js 15 App Router · Responsive HUD · Multi-Zone View",
    summary: "Growers monitor live microclimates, customize rule setpoints, track batch lifecycles, and receive instant alert notifications from any browser.",
    flowItems: ["Live Telemetry Hub", "4-Zone Floorplan", "Batch Lifecycle", "Instant Alerts"],
  },
];

export function SystemFlow() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % pipelineStages.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const current = pipelineStages[activeStage];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="border-y border-border/80 bg-muted/20 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="System Architecture"
          title="From sensor probe to automated response."
          description="SmartGrow operates as an autonomous closed loop: it senses the environment, evaluates rules, triggers equipment, records telemetry, and presents actionable insight — all in real time."
        />

        {/* Interactive Architecture Flow Ribbon */}
        <Reveal delay={100} direction="none" className="mt-14">
          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
            
            {/* Header / Signal Indicator */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/70 pb-4">
              <div className="flex items-center gap-2">
                <Workflow className="size-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Interactive System Pipeline
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active ESP32 Telemetry Loop (~150ms latency)</span>
              </div>
            </div>

            {/* Interactive 5-Stage Step Selector */}
            <div className="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-5">
              {pipelineStages.map((stage, idx) => {
                const isSelected = activeStage === idx;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={cn(
                      "group relative flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-300",
                      isSelected
                        ? "border-primary bg-primary/10 shadow-md shadow-primary/10 scale-[1.02]"
                        : "border-border/70 bg-muted/20 hover:border-primary/40 hover:bg-muted/40",
                    )}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span
                        className={cn(
                          "flex size-9 items-center justify-center rounded-lg font-bold transition-colors",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground group-hover:text-foreground",
                        )}
                      >
                        <stage.icon className="size-4" strokeWidth={2.2} />
                      </span>
                      <span
                        className={cn(
                          "rounded-md px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider",
                          isSelected
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        {stage.badge}
                      </span>
                    </div>

                    <span className="mt-3 text-[10px] font-mono font-bold text-primary">
                      STAGE {stage.number}
                    </span>
                    <p className="text-sm font-bold text-foreground leading-tight">
                      {stage.label}
                    </p>
                    <p className="mt-0.5 truncate text-[11px] font-medium text-muted-foreground">
                      {stage.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Stage Live Inspector & Telemetry Data Packet Simulation */}
            <div className="mt-6 overflow-hidden rounded-xl border border-primary/25 bg-primary/[0.04] p-5 sm:p-6">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-primary px-2.5 py-0.5 text-xs font-black text-primary-foreground">
                      STAGE {current.number} · {current.label}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {current.subtitle}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
                    {current.summary}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-primary font-semibold">
                    <span>Hardware Specification:</span>
                    <span className="text-muted-foreground">{current.specs}</span>
                  </div>
                </div>

                {/* Live Data Packet Feed Simulation */}
                <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
                  <div className="flex items-center justify-between border-b border-border/70 pb-2.5">
                    <div className="flex items-center gap-1.5">
                      <Radio className="size-3.5 text-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Data Signal Bus
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground">ESP32 &bull; Zone A</span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {current.flowItems.map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/30 px-2.5 py-1.5 text-[11px] font-mono font-semibold text-foreground"
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Reveal>

        {/* 5-Step Explanatory Grid with Technical Specs */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pipelineStages.map((step, idx) => (
            <Reveal key={step.number} delay={idx * 70} className="h-full">
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black tabular-nums tracking-tight text-primary/30 group-hover:text-primary transition-colors">
                      {step.number}
                    </span>
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <step.icon className="size-4" strokeWidth={2.2} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-bold tracking-tight text-foreground">
                    {step.label}
                  </h3>
                  <p className="text-[11px] font-semibold text-primary">
                    {step.subtitle}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {step.summary}
                  </p>
                </div>
                <div className="mt-4 border-t border-border/60 pt-3">
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {step.specs}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
