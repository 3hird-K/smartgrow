"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  CloudFog,
  Cpu,
  Droplets,
  Fan,
  Gauge,
  Radio,
  SlidersHorizontal,
  Thermometer,
  TrendingUp,
  Wind,
} from "lucide-react";

export function AuthTelemetryShowcase() {
  const [temp, setTemp] = useState(26.4);
  const [humidity, setHumidity] = useState(88.2);
  const [co2, setCo2] = useState(925);
  const [tick, setTick] = useState(0);

  // Live fluctuating telemetry simulation to make the HUD feel alive and dynamic
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
      // Subtle realistic microclimate sensor fluctuations
      setTemp((prev) => {
        const delta = (Math.random() - 0.5) * 0.2;
        return Number(Math.max(25.8, Math.min(26.9, prev + delta)).toFixed(1));
      });
      setHumidity((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        return Number(Math.max(86.5, Math.min(89.5, prev + delta)).toFixed(1));
      });
      setCo2((prev) => {
        const delta = Math.floor((Math.random() - 0.5) * 8);
        return Math.max(890, Math.min(960, prev + delta));
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col justify-between overflow-hidden border-r border-border/80 bg-gradient-to-b from-emerald-50/70 via-background to-teal-50/40 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 p-8 xl:p-12 text-foreground dark:text-white transition-colors duration-300">
      
      {/* ── Background Photography & Scrim ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/greenhouse-commercial-wide.jpg"
          alt="SmartGrow Commercial Oyster Greenhouse"
          fill
          priority
          sizes="50vw"
          className="object-cover object-center opacity-30 dark:opacity-100 brightness-[1.02] dark:brightness-[0.32] contrast-[1.05] dark:contrast-[1.15] scale-105 transition-all duration-300"
        />
        {/* Responsive Atmospheric Scrims & Glowing Mesh */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/40 dark:from-zinc-950 dark:via-zinc-950/60 dark:to-zinc-950/80 transition-colors duration-300" />
        <div className="absolute top-0 right-0 size-96 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 size-80 rounded-full bg-teal-500/10 dark:bg-teal-500/15 blur-3xl pointer-events-none" />
        
        {/* Reticle / Dot Texture */}
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* ── Top Bar: Hardware Stream Status & Chamber Info ── */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2.5 rounded-full border border-emerald-500/20 dark:border-white/15 bg-card/85 dark:bg-black/40 px-3.5 py-1.5 backdrop-blur-xl shadow-xs transition-colors">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Live Stream
          </span>
          <span className="text-muted-foreground/60 text-xs">·</span>
          <span className="font-mono text-[11px] text-foreground/80 dark:text-zinc-300">
            ESP32 Node #01
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border/80 dark:border-white/10 bg-card/75 dark:bg-white/5 px-3.5 py-1.5 text-[11px] font-medium text-foreground/80 dark:text-zinc-300 backdrop-blur-md shadow-xs transition-colors">
          <Radio className="size-3 text-emerald-600 dark:text-emerald-400" />
          <span>Zone A · Fruiting Chamber</span>
        </div>
      </div>

      {/* ── Center: Floating Control Console HUD ── */}
      <div className="relative z-10 my-auto py-6 space-y-4">
        
        {/* Glassmorphism Control Unit */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-950/10 dark:border-white/15 bg-card/90 dark:bg-black/55 p-6 backdrop-blur-2xl shadow-xl dark:shadow-2xl shadow-emerald-950/5 space-y-5 transition-colors">
          {/* Top Emerald Accent Glow */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 dark:via-emerald-400/60 to-transparent" />

          {/* HUD Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex size-7 items-center justify-center rounded-xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                <SlidersHorizontal className="size-3.5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground dark:text-white">
                  Environmental Stabilization
                </h3>
                <p className="text-[10px] text-muted-foreground font-mono">
                  Autonomous closed-loop microclimate
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold text-emerald-800 dark:text-emerald-300">
              <CheckCircle2 className="size-3 text-emerald-600 dark:text-emerald-400" />
              <span>OPTIMAL TARGET</span>
            </div>
          </div>

          {/* 3 Core Sensor Metric Tiles */}
          <div className="grid grid-cols-3 gap-3">
            {/* Air Temperature */}
            <div className="group rounded-2xl border border-border/70 dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] p-3.5 transition-all hover:bg-muted/70 dark:hover:bg-white/[0.08] hover:border-emerald-500/40">
              <div className="flex items-center justify-between text-muted-foreground mb-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider">Air Temp</span>
                <Thermometer className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-xl font-black text-foreground dark:text-white tabular-nums tracking-tight">
                {temp}°C
              </p>
              <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-muted-foreground">
                <span>Target: 24-28°C</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
              </div>
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted dark:bg-white/10">
                <div className="h-full bg-emerald-500 dark:bg-emerald-400 transition-all duration-700" style={{ width: "72%" }} />
              </div>
            </div>

            {/* Relative Humidity */}
            <div className="group rounded-2xl border border-border/70 dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] p-3.5 transition-all hover:bg-muted/70 dark:hover:bg-white/[0.08] hover:border-teal-500/40">
              <div className="flex items-center justify-between text-muted-foreground mb-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider">Humidity</span>
                <Droplets className="size-3.5 text-teal-600 dark:text-teal-400 animate-bounce duration-1000" />
              </div>
              <p className="text-xl font-black text-foreground dark:text-white tabular-nums tracking-tight">
                {humidity}%
              </p>
              <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-muted-foreground">
                <span>Target: 85-92%</span>
                <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
              </div>
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted dark:bg-white/10">
                <div className="h-full bg-teal-500 dark:bg-teal-400 transition-all duration-700" style={{ width: "88%" }} />
              </div>
            </div>

            {/* CO2 Concentration */}
            <div className="group rounded-2xl border border-border/70 dark:border-white/10 bg-muted/40 dark:bg-white/[0.04] p-3.5 transition-all hover:bg-muted/70 dark:hover:bg-white/[0.08] hover:border-cyan-500/40">
              <div className="flex items-center justify-between text-muted-foreground mb-1.5">
                <span className="text-[9px] font-bold uppercase tracking-wider">CO₂ Level</span>
                <Wind className="size-3.5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <p className="text-xl font-black text-foreground dark:text-white tabular-nums tracking-tight">
                {co2} <span className="text-[10px] font-normal text-muted-foreground">ppm</span>
              </p>
              <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-muted-foreground">
                <span>Target: &lt;1000</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">✓</span>
              </div>
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted dark:bg-white/10">
                <div className="h-full bg-cyan-500 dark:bg-cyan-400 transition-all duration-700" style={{ width: "65%" }} />
              </div>
            </div>
          </div>

          {/* Active Relays Status Row */}
          <div className="rounded-2xl border border-border/80 dark:border-white/10 bg-muted/30 dark:bg-white/[0.03] p-3.5 space-y-2.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold text-foreground/90 dark:text-zinc-300 flex items-center gap-1.5">
                <Cpu className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                Active Actuator Relays
              </span>
              <span className="font-mono text-[9px] text-muted-foreground">
                Cycle #{tick * 2 + 140}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-2">
                <Fan className="size-4 text-emerald-600 dark:text-emerald-400 animate-spin duration-3000 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-emerald-950 dark:text-emerald-300 leading-tight">Exhaust Fan</p>
                  <p className="text-[9px] text-emerald-700/80 dark:text-emerald-400/80 font-mono">Running · 65% PWM</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 px-3 py-2">
                <CloudFog className="size-4 text-teal-600 dark:text-teal-400 animate-pulse shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-teal-950 dark:text-teal-300 leading-tight">Ultrasonic Fogger</p>
                  <p className="text-[9px] text-teal-700/80 dark:text-teal-400/80 font-mono">Pulsing · 15s Interval</p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Batch Progress */}
          <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t border-border/80 dark:border-white/10">
            <span className="flex items-center gap-2 font-medium text-foreground/80 dark:text-zinc-200">
              <span className="size-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              Batch #08 · Pearl Oyster Mushroom
            </span>
            <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">Day 12 of 18 · Fruiting</span>
          </div>
        </div>

        {/* Agronomy Highlights Banner */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-start gap-3 rounded-2xl border border-border/80 dark:border-white/10 bg-card/80 dark:bg-black/40 p-3.5 backdrop-blur-md shadow-xs transition-colors">
            <div className="rounded-xl bg-emerald-500/15 p-2 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Gauge className="size-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground dark:text-white">99.8% Automation Uptime</p>
              <p className="text-[10px] text-muted-foreground leading-snug mt-0.5">Continuous sensor stream with failsafe relay fallback</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-border/80 dark:border-white/10 bg-card/80 dark:bg-black/40 p-3.5 backdrop-blur-md shadow-xs transition-colors">
            <div className="rounded-xl bg-teal-500/15 p-2 text-teal-600 dark:text-teal-400 shrink-0">
              <TrendingUp className="size-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground dark:text-white">+34% Yield Consistency</p>
              <p className="text-[10px] text-muted-foreground leading-snug mt-0.5">Precision humidity eliminates pinhead abortion</p>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom Quote / Trust Bar ── */}
      <div className="relative z-10 border-t border-border/80 dark:border-white/10 pt-4">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">
          <span className="font-semibold text-foreground dark:text-white">SmartGrow Autonomous System:</span> Synchronizing ESP32 microcontrollers, DHT22 sensors, and high-load relay modules for high-yield oyster cultivation.
        </p>
      </div>

    </div>
  );
}
