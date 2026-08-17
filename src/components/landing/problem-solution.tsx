"use client";

import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Droplets,
  History,
  Layers,
  Thermometer,
  XCircle,
  Zap,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const manualPoints = [
  {
    title: "Spot Checking with Hand Tools",
    desc: "Growers walk between bays with handheld thermometers, missing fluctuations between check-ins.",
  },
  {
    title: "Unnoticed Midday Temperature Spikes",
    desc: "Midday sun pushes room temps past 28°C, stalling mycelial growth before anyone notices.",
  },
  {
    title: "Fluctuating Relative Humidity",
    desc: "Manual spraying lets humidity dip below 80% RH, drying out vulnerable oyster mushroom pinheads.",
  },
  {
    title: "Multi-Zone Blind Spots",
    desc: "A single reading near the door masks hot or dry conditions in rear substrate rows.",
  },
  {
    title: "No Data Trail for Diagnosis",
    desc: "When a batch produces lower yields or aborts, cultivators lack telemetry logs to diagnose the cause.",
  },
];

const automatedPoints = [
  {
    title: "Continuous 24/7 Sensor Telemetry",
    desc: "Calibrated DHT22, CO₂, and substrate probes transmit microclimate data every second.",
  },
  {
    title: "Instant Sub-Second Cooling Action",
    desc: "The ESP32 microcontroller triggers cooling fans immediately whenever temperature crosses 28°C.",
  },
  {
    title: "Locked 80–95% RH Microclimate",
    desc: "Ultrasonic foggers and misting relays engage automatically the moment humidity drops below threshold.",
  },
  {
    title: "Dedicated Multi-Zone Tracking",
    desc: "Zones A through D are monitored independently with customized environmental setpoints.",
  },
  {
    title: "Full Relational Audit Trail",
    desc: "Every sensor reading, rule execution, and harvest weight is safely logged into MySQL.",
  },
];

export function ProblemSolution() {
  return (
    <section id="why-smartgrow" aria-labelledby="problem-solution-heading" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why SmartGrow"
          title="Less guesswork. More control."
          description="Oyster mushroom cultivation requires uninterrupted climate stability. Manual spot-checking leaves room for costly microclimate drift — SmartGrow automates the entire control loop."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          
          {/* Left Column: Manual Routine Fragility */}
          <Reveal delay={80} direction="right">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-destructive/25 bg-destructive/[0.02] p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between border-b border-border/80 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                      <XCircle className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Traditional Manual Routine
                    </span>
                  </div>
                  <span className="rounded-md border border-destructive/20 bg-destructive/10 px-2 py-0.5 text-[10px] font-bold uppercase text-destructive">
                    High Labor &amp; Drift Risk
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {manualPoints.map((p, idx) => (
                    <div
                      key={p.title}
                      className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/50 p-3.5 transition-colors hover:border-destructive/30"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive text-[11px] font-bold">
                        ✕
                      </span>
                      <div>
                        <h3 className="text-xs font-bold text-foreground">{p.title}</h3>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-dashed border-destructive/30 bg-destructive/[0.04] p-3.5 text-center">
                <p className="text-xs font-semibold text-muted-foreground">
                  Outcome: <span className="text-foreground font-bold">Constant manual checking, crop stress, and unpredictable batch yields.</span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Central Connective Indicator */}
          <Reveal delay={160} direction="none" className="hidden items-center justify-center lg:flex">
            <div className="flex flex-col items-center gap-2">
              <span className="h-16 w-px bg-gradient-to-b from-transparent via-border to-primary/40" />
              <div className="flex size-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary shadow-lg shadow-primary/10">
                <ArrowRight className="size-4" strokeWidth={2.5} />
              </div>
              <span className="h-16 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />
            </div>
          </Reveal>

          {/* Right Column: SmartGrow Autonomous Precision */}
          <Reveal delay={240} direction="left">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.04] via-emerald-500/[0.02] to-transparent p-6 sm:p-8 shadow-sm">
              <div>
                <div className="flex items-center justify-between border-b border-primary/20 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      SmartGrow Autonomous System
                    </span>
                  </div>
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase text-primary">
                    Continuous IoT Precision
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {automatedPoints.map((p, idx) => (
                    <div
                      key={p.title}
                      className="flex items-start gap-3 rounded-xl border border-primary/20 bg-card p-3.5 shadow-sm transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[11px] font-bold">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-xs font-bold text-foreground">{p.title}</h3>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-3.5 text-center">
                <p className="text-xs font-semibold text-primary">
                  Outcome: <span className="text-foreground font-bold">Autonomous climate stability, pinhead protection, and complete visibility.</span>
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
