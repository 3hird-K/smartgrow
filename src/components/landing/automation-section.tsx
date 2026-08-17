"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Cpu,
  Droplets,
  Fan,
  Power,
  Settings2,
  ShowerHead,
  Sliders,
  Sparkles,
  SprayCan,
  Thermometer,
  Wind,
  Zap,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const equipmentList = [
  {
    label: "High-Efficiency Cooling Fans",
    desc: "Lowers chamber temperature when heat builds up during midday.",
    icon: Fan,
    relay: "Relay #1",
  },
  {
    label: "Ultrasonic Misting Foggers",
    desc: "Maintains optimal 80–95% RH microclimate for delicate pinheads.",
    icon: SprayCan,
    relay: "Relay #2",
  },
  {
    label: "Substrate Irrigation Sprinklers",
    desc: "Prevents grow bags and substrate beds from dehydrating.",
    icon: ShowerHead,
    relay: "Relay #3",
  },
  {
    label: "Fresh Air Damper & Exhaust",
    desc: "Flushes excessive CO₂ out to prevent mushroom stem elongation.",
    icon: Wind,
    relay: "Relay #4",
  },
];

export function AutomationSection() {
  const [tempInput, setTempInput] = useState(28.8);
  const [humidityInput, setHumidityInput] = useState(76);

  const isFanActive = tempInput > 28.0;
  const isFoggerActive = humidityInput < 80;

  return (
    <section
      id="automation"
      aria-labelledby="automation-heading"
      className="border-y border-border/80 bg-muted/20 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Climate Automation"
          title="Let your greenhouse respond."
          description="SmartGrow watches microclimate thresholds around the clock and triggers equipment the second conditions drift out of spec — protecting mushroom pins from heat and dehydration."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          
          {/* Left Column: The Loop in Action Narrative + Hardware Relays */}
          <Reveal delay={80}>
            <div className="flex flex-col justify-between h-full space-y-6">
              
              {/* Visual System State Cycle Demonstrations */}
              <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 border-b border-border/70 pb-3">
                  <Zap className="size-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Closed-Loop State Transitions
                  </span>
                </div>

                <div className="mt-4 space-y-4">
                  {/* Temperature State Flow */}
                  <div className="rounded-xl border border-border/70 bg-muted/20 p-3.5">
                    <div className="flex items-center justify-between text-xs font-bold text-foreground">
                      <span className="flex items-center gap-1.5 text-primary">
                        <Thermometer className="size-3.5" />
                        Temperature Recovery Loop
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">Setpoint: 28.0°C</span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-center text-[10px] font-mono">
                      <div className="rounded-lg bg-background px-2 py-1 border border-border/60">
                        <p className="text-muted-foreground">Normal</p>
                        <p className="font-bold text-foreground">26.8°C</p>
                      </div>
                      <span className="text-primary font-bold">&rarr;</span>
                      <div className="rounded-lg bg-destructive/10 px-2 py-1 border border-destructive/20 text-destructive">
                        <p>Threshold Hit</p>
                        <p className="font-bold">28.4°C</p>
                      </div>
                      <span className="text-primary font-bold">&rarr;</span>
                      <div className="rounded-lg bg-emerald-500/10 px-2 py-1 border border-emerald-500/20 text-emerald-500">
                        <p>Fan Active</p>
                        <p className="font-bold">1,450 RPM</p>
                      </div>
                      <span className="text-primary font-bold">&rarr;</span>
                      <div className="rounded-lg bg-background px-2 py-1 border border-border/60">
                        <p className="text-muted-foreground">Recovered</p>
                        <p className="font-bold text-foreground">26.5°C</p>
                      </div>
                    </div>
                  </div>

                  {/* Humidity State Flow */}
                  <div className="rounded-xl border border-border/70 bg-muted/20 p-3.5">
                    <div className="flex items-center justify-between text-xs font-bold text-foreground">
                      <span className="flex items-center gap-1.5 text-teal-400">
                        <Droplets className="size-3.5" />
                        Humidity Stabilization Loop
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">Setpoint: 80% RH</span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-center text-[10px] font-mono">
                      <div className="rounded-lg bg-amber-500/10 px-2 py-1 border border-amber-500/20 text-amber-500">
                        <p>Dry Drift</p>
                        <p className="font-bold">76% RH</p>
                      </div>
                      <span className="text-primary font-bold">&rarr;</span>
                      <div className="rounded-lg bg-background px-2 py-1 border border-border/60">
                        <p className="text-muted-foreground">Trigger</p>
                        <p className="font-bold text-foreground">&lt; 80% RH</p>
                      </div>
                      <span className="text-primary font-bold">&rarr;</span>
                      <div className="rounded-lg bg-teal-500/10 px-2 py-1 border border-teal-500/20 text-teal-400">
                        <p>Fogger Active</p>
                        <p className="font-bold">Relay 2</p>
                      </div>
                      <span className="text-primary font-bold">&rarr;</span>
                      <div className="rounded-lg bg-background px-2 py-1 border border-border/60">
                        <p className="text-muted-foreground">Stabilized</p>
                        <p className="font-bold text-foreground">90% RH</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connected Hardware Overview */}
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  Automated Actuator Relays
                </p>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {equipmentList.map((e) => (
                    <div
                      key={e.label}
                      className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-3 transition-all hover:border-primary/40"
                    >
                      <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <e.icon className="size-3.5" strokeWidth={2.2} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-foreground truncate">{e.label}</h4>
                          <span className="text-[9px] font-mono font-bold text-muted-foreground">
                            {e.relay}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">
                          {e.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>

          {/* Right Column: Live Interactive Rule Trigger Simulator */}
          <Reveal delay={160} direction="left">
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-xl shadow-black/10">
              
              <div className="flex items-center justify-between border-b border-border/70 pb-4">
                <div className="flex items-center gap-2">
                  <Sliders className="size-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Interactive Automation Simulator
                  </span>
                </div>
                <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase text-primary">
                  Live Test
                </span>
              </div>

              <p className="mt-3 text-xs text-muted-foreground">
                Adjust simulated sensor values to test how SmartGrow’s ESP32 microcontroller triggers relays in real time:
              </p>

              {/* Simulation 1: Temperature Rule */}
              <div className="mt-5 rounded-xl border border-border/70 bg-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Thermometer className="size-4 text-primary" />
                    <span className="text-xs font-bold text-foreground">Rule: Temperature &gt; 28.0°C</span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">Zone A</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">Simulated Temp:</span>
                  <span className="text-sm font-extrabold tabular-nums text-foreground">{tempInput}°C</span>
                </div>

                <input
                  type="range"
                  min="22.0"
                  max="32.0"
                  step="0.1"
                  value={tempInput}
                  onChange={(e) => setTempInput(parseFloat(e.target.value))}
                  className="mt-2 w-full accent-primary cursor-pointer"
                  aria-label="Adjust temperature input"
                />

                <div className="mt-3 flex items-center justify-between rounded-lg border border-border/60 bg-background p-2.5">
                  <div className="flex items-center gap-2">
                    <Fan
                      className={cn(
                        "size-4",
                        isFanActive ? "text-emerald-500 animate-spin" : "text-muted-foreground",
                      )}
                      style={{ animationDuration: isFanActive ? "1.5s" : "0s" }}
                    />
                    <span className="text-xs font-bold text-foreground">Relay 1 (Cooling Fan)</span>
                  </div>
                  <span
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                      isFanActive
                        ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/30"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        isFanActive ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground/40",
                      )}
                    />
                    {isFanActive ? "ACTIVATED" : "STANDBY"}
                  </span>
                </div>
              </div>

              {/* Simulation 2: Humidity Rule */}
              <div className="mt-4 rounded-xl border border-border/70 bg-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets className="size-4 text-teal-400" />
                    <span className="text-xs font-bold text-foreground">Rule: Humidity &lt; 80% RH</span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">Zone A</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">Simulated Humidity:</span>
                  <span className="text-sm font-extrabold tabular-nums text-foreground">{humidityInput}% RH</span>
                </div>

                <input
                  type="range"
                  min="65"
                  max="98"
                  step="1"
                  value={humidityInput}
                  onChange={(e) => setHumidityInput(parseInt(e.target.value, 10))}
                  className="mt-2 w-full accent-teal-400 cursor-pointer"
                  aria-label="Adjust humidity input"
                />

                <div className="mt-3 flex items-center justify-between rounded-lg border border-border/60 bg-background p-2.5">
                  <div className="flex items-center gap-2">
                    <SprayCan
                      className={cn(
                        "size-4",
                        isFoggerActive ? "text-teal-400 animate-pulse" : "text-muted-foreground",
                      )}
                    />
                    <span className="text-xs font-bold text-foreground">Relay 2 (Ultrasonic Fogger)</span>
                  </div>
                  <span
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                      isFoggerActive
                        ? "bg-teal-500/10 text-teal-400 border border-teal-500/30"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        isFoggerActive ? "bg-teal-400 animate-pulse" : "bg-muted-foreground/40",
                      )}
                    />
                    {isFoggerActive ? "ACTIVATED" : "STANDBY"}
                  </span>
                </div>
              </div>

              {/* Interactive Preset Buttons */}
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border/70 pt-4">
                <span className="text-[11px] font-semibold text-muted-foreground self-center mr-1">
                  Preset Tests:
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[11px] h-7 px-2.5"
                  onClick={() => {
                    setTempInput(29.4);
                    setHumidityInput(72);
                  }}
                >
                  Hot &amp; Dry Midday Spike
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[11px] h-7 px-2.5"
                  onClick={() => {
                    setTempInput(25.5);
                    setHumidityInput(90);
                  }}
                >
                  Optimal Fruiting Climate
                </Button>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
