"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Cpu,
  Droplets,
  Fan,
  Gauge,
  Leaf,
  ShieldCheck,
  SprayCan,
  Thermometer,
  Wind,
  Activity,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { AreaChart } from "./spark-area";
import { cn } from "@/lib/utils";

const metrics = [
  {
    label: "Temperature",
    value: "26.4",
    unit: "°C",
    icon: Thermometer,
    target: "24–28°C",
    status: "Optimal",
    statusColor: "text-emerald-500",
  },
  {
    label: "Humidity",
    value: "88",
    unit: "% RH",
    icon: Droplets,
    target: "80–95%",
    status: "Optimal",
    statusColor: "text-emerald-500",
  },
  {
    label: "CO₂ Level",
    value: "620",
    unit: "ppm",
    icon: Wind,
    target: "< 1000 ppm",
    status: "Safe",
    statusColor: "text-emerald-500",
  },
  {
    label: "Moisture",
    value: "74",
    unit: "%",
    icon: Gauge,
    target: "70–80%",
    status: "Ideal",
    statusColor: "text-emerald-500",
  },
];

const actuators = [
  { label: "Cooling Fan", state: "Active", active: true, icon: Fan, speed: "1,450 RPM" },
  { label: "Ultrasonic Fogger", state: "Standby", active: false, icon: SprayCan, speed: "Standby" },
  { label: "Misting Sprinkler", state: "Standby", active: false, icon: Droplets, speed: "Standby" },
];

const trustItems = [
  { label: "ESP32 Controller", icon: Cpu },
  { label: "Continuous Telemetry", icon: Activity },
  { label: "Multi-Zone Isolation", icon: ShieldCheck },
  { label: "Oyster Mushroom Specific", icon: Leaf },
];

export function Hero() {
  const [liveTemp, setLiveTemp] = useState(26.4);
  const [liveHumidity, setLiveHumidity] = useState(88);

  useEffect(() => {
    const interval = setInterval(() => {
      const tempDelta = (Math.random() - 0.5) * 0.2;
      const humDelta = (Math.random() - 0.5) * 0.4;
      setLiveTemp((prev) => +(prev + tempDelta).toFixed(1));
      setLiveHumidity((prev) => Math.round(prev + humDelta));
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40">
      {/* Background fine grid & atmospheric gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)] opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/20 via-emerald-500/10 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          
          {/* Left Column: Hero Editorial Copy */}
          <div className="flex flex-col items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary shadow-sm shadow-primary/5">
                <span className="flex size-2 rounded-full bg-primary animate-pulse" />
                <span className="tracking-widest uppercase text-[11px]">SMART GREENHOUSE AUTOMATION</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.08]">
                Smarter growing starts
                <br />
                with{" "}
                <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  better control
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                SmartGrow connects environmental sensors, automated climate control, and
                cultivation tracking to help oyster mushroom growers manage their greenhouse with
                greater visibility and less manual intervention.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
                <Button size="lg" className="h-12 px-7 text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/25" asChild>
                  <Link href="/dashboard">
                    Open Dashboard
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-7 text-xs font-bold uppercase tracking-wider hover:bg-accent"
                  asChild
                >
                  <Link href="#how-it-works">Explore the Platform</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2 border-t border-border/80 pt-6">
                {trustItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <item.icon className="size-3.5 text-primary shrink-0" strokeWidth={2.2} />
                    <span className="text-xs font-medium text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Visual Anchor with Real Greenhouse Photography & HUD Overlay */}
          <Reveal delay={200} direction="none" className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 via-teal-500/10 to-transparent blur-2xl"
            />

            {/* Main Visual Frame */}
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-2xl shadow-black/25 backdrop-blur-md">
              
              {/* High-Resolution Commercial Greenhouse Photography */}
              <div className="relative h-52 sm:h-60 w-full overflow-hidden border-b border-border/80">
                <Image
                  src="/images/greenhouse-commercial-wide.jpg"
                  alt="Modern commercial oyster mushroom greenhouse with hanging substrate bags, atmospheric mist, and automated climate control"
                  fill
                  priority
                  className="object-cover object-center brightness-[0.9] transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 580px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                
                {/* Floating Image Status Badges */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md shadow-sm">
                  <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Zone A · Fruiting Bay 1</span>
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold text-emerald-400 backdrop-blur-md shadow-sm">
                  <Cpu className="size-3.5" />
                  <span>ESP32 Node 01</span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-primary/90 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                      Batch #M-204
                    </span>
                    <span className="text-xs font-semibold text-white/95 drop-shadow">
                      Pearl Oyster · Day 18
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-300 drop-shadow">
                    ● 94% Optimum
                  </span>
                </div>
              </div>

              {/* HUD Live Header */}
              <div className="flex items-center justify-between border-b border-border/70 bg-muted/40 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-foreground">
                    Live Telemetry Console
                  </span>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">
                  Cycle Rate: 1.0s
                </span>
              </div>

              {/* Live Telemetry Sensor Grid */}
              <div className="p-4 space-y-3.5">
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {metrics.map((m) => {
                    const displayVal =
                      m.label === "Temperature"
                        ? liveTemp
                        : m.label === "Humidity"
                        ? liveHumidity
                        : m.value;
                    return (
                      <div
                        key={m.label}
                        className="rounded-xl border border-border/80 bg-muted/20 p-2.5 transition-all hover:bg-muted/40 hover:border-primary/30"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            {m.label}
                          </p>
                          <m.icon className="size-3.5 text-primary" strokeWidth={2.2} />
                        </div>
                        <p className="mt-1 text-lg font-extrabold tabular-nums tracking-tight text-foreground">
                          {displayVal}
                          <span className="text-[11px] font-medium text-muted-foreground ml-0.5">
                            {m.unit}
                          </span>
                        </p>
                        <div className="mt-0.5 flex items-center justify-between text-[9px]">
                          <span className="text-muted-foreground/80">{m.target}</span>
                          <span className={cn("font-bold", m.statusColor)}>{m.status}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 24-Hour Trend Micro-Chart */}
                <div className="rounded-xl border border-border/80 bg-muted/20 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Temperature &amp; Humidity Dynamics
                      </p>
                      <p className="text-xs font-semibold text-foreground">
                        Calibrated DHT22 Stream
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-bold">
                      <span className="flex items-center gap-1 text-primary">
                        <span className="size-1.5 rounded-full bg-primary" />
                        Temp ({liveTemp}°C)
                      </span>
                      <span className="flex items-center gap-1 text-teal-400">
                        <span className="size-1.5 rounded-full bg-teal-400" />
                        RH ({liveHumidity}%)
                      </span>
                    </div>
                  </div>
                  <AreaChart
                    values={[25.8, 25.4, 25.1, 24.8, 25.2, 25.9, 26.8, 27.4, 27.1, 26.5, 26.2, liveTemp]}
                    className="mt-2 h-20"
                  />
                </div>

                {/* Connected ESP32 Actuator Relays */}
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    ESP32 Actuator Relays
                  </p>
                  <div className="grid grid-cols-3 gap-2.5">
                    {actuators.map((a) => (
                      <div
                        key={a.label}
                        className={cn(
                          "flex flex-col rounded-xl border p-2.5 transition-all",
                          a.active
                            ? "border-emerald-500/40 bg-emerald-500/10 shadow-sm shadow-emerald-500/10"
                            : "border-border/80 bg-muted/20",
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <a.icon
                            className={cn(
                              "size-3.5",
                              a.active ? "text-emerald-500 animate-spin" : "text-muted-foreground",
                            )}
                            style={{ animationDuration: a.active ? "3s" : "0s" }}
                            strokeWidth={2.2}
                          />
                          <span
                            className={cn(
                              "size-1.5 rounded-full",
                              a.active ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground/40",
                            )}
                          />
                        </div>
                        <p className="mt-1 truncate text-[11px] font-bold text-foreground">
                          {a.label}
                        </p>
                        <p className="text-[10px] font-medium text-muted-foreground">
                          {a.speed}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Ambient Floating Callout Badges */}
            <div className="absolute -left-4 -top-4 hidden items-center gap-2 rounded-xl border border-border bg-card/95 px-3 py-2 shadow-lg shadow-black/10 backdrop-blur-md sm:flex">
              <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 className="size-4" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-foreground leading-tight">Climate Loop Stable</p>
                <p className="text-[9px] font-medium text-muted-foreground">0 manual overrides needed</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 hidden items-center gap-2 rounded-xl border border-border bg-card/95 px-3 py-2 shadow-lg shadow-black/10 backdrop-blur-md sm:flex">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="size-4" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-foreground leading-tight">Harvest Readiness</p>
                <p className="text-[9px] font-bold text-primary">Predicted in 3 days</p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
