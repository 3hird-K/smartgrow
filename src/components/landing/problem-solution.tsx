"use client";

import { XCircle, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const manualSummary = [
  {
    title: "Intermittent Spot Checks",
    desc: "Manual handheld thermometers miss critical temperature and humidity spikes between rounds.",
  },
  {
    title: "Delayed Hardware Response",
    desc: "Fans and misters must be switched on manually after conditions have already drifted.",
  },
  {
    title: "Multi-Zone Blind Spots",
    desc: "Single door readings mask hot or dry microclimates across distant substrate rows.",
  },
  {
    title: "No Data Trail for Diagnosis",
    desc: "Stalled mycelial growth or aborted pinheads lack telemetry logs to diagnose the cause.",
  },
];

const automatedSummary = [
  {
    title: "Continuous 24/7 Telemetry",
    desc: "Calibrated DHT22, CO₂, and substrate probes stream microclimate readings uninterrupted.",
  },
  {
    title: "Instant Sub-Second Automation",
    desc: "ESP32 microcontrollers engage cooling fans and ultrasonic foggers the moment thresholds cross.",
  },
  {
    title: "Dedicated Multi-Zone Profiles",
    desc: "Customized setpoints isolated for fruiting bays, pinning chambers, and incubation rooms.",
  },
  {
    title: "Full Relational Audit Logs",
    desc: "Every environmental reading, rule trigger, and batch timeline is logged into MySQL.",
  },
];

export function ProblemSolution() {
  return (
    <section id="why-smartgrow" aria-labelledby="problem-solution-heading" className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why SmartGrow"
          title="Less guesswork. More control."
          description="Oyster mushroom cultivation requires strict climate stability. Here is how SmartGrow replaces manual routines with autonomous precision."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          
          {/* Left Column: Traditional Manual Routine */}
          <Reveal delay={80}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-destructive/25 bg-destructive/[0.02] dark:bg-destructive/[0.04] p-6 sm:p-8 shadow-xs">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-destructive/15 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                      <XCircle className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Traditional Manual Routine
                    </span>
                  </div>
                  <span className="rounded-full border border-destructive/20 bg-destructive/10 px-2.5 py-0.5 text-[10px] font-bold uppercase text-destructive">
                    High Labor &amp; Drift Risk
                  </span>
                </div>

                {/* Summary List */}
                <div className="mt-5 space-y-3">
                  {manualSummary.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/60 p-3.5 transition-colors"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive text-[11px] font-bold">
                        ✕
                      </span>
                      <div>
                        <h3 className="text-xs font-bold text-foreground">{item.title}</h3>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Outcome Strip */}
              <div className="mt-6 rounded-2xl border border-dashed border-destructive/30 bg-destructive/[0.05] p-3.5 text-center">
                <p className="text-xs text-muted-foreground font-medium">
                  Outcome: <span className="font-bold text-foreground">Constant manual checking, crop stress, and unpredictable batch yields.</span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: SmartGrow Autonomous System */}
          <Reveal delay={160}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-primary/30 bg-primary/[0.02] dark:bg-primary/[0.04] p-6 sm:p-8 shadow-xs">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-primary/20 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 className="size-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      SmartGrow Autonomous System
                    </span>
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase text-primary">
                    Continuous IoT Precision
                  </span>
                </div>

                {/* Summary List */}
                <div className="mt-5 space-y-3">
                  {automatedSummary.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-2xl border border-primary/25 bg-card/80 p-3.5 shadow-xs transition-colors hover:border-primary/40"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[11px] font-bold">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-xs font-bold text-foreground">{item.title}</h3>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Outcome Strip */}
              <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-3.5 text-center">
                <p className="text-xs text-primary font-medium">
                  Outcome: <span className="font-bold text-foreground">Autonomous climate stability, pinhead protection, and complete visibility.</span>
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
