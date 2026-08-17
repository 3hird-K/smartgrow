"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Droplets,
  Layers,
  Leaf,
  PackageCheck,
  Sprout,
  Sun,
  Thermometer,
  Timer,
  Wind,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const stages = [
  {
    n: "01",
    name: "Inoculation",
    duration: "Day 0",
    description: "Grain spawn is introduced into pasteurized substrate bags under sterile conditions.",
    icon: Layers,
    temp: "24 – 26°C",
    humidity: "65 – 70%",
    co2: "Ambient",
    light: "Darkness",
    action: "Substrate prep & spawn introduction",
  },
  {
    n: "02",
    name: "Incubation",
    duration: "Days 1–14",
    description: "White mycelium colonizes the substrate matrix, generating internal metabolic heat.",
    icon: Timer,
    temp: "24 – 27°C",
    humidity: "75 – 80%",
    co2: "> 5,000 ppm",
    light: "0 Lux (Dark)",
    action: "ESP32 monitors bag core temperature",
  },
  {
    n: "03",
    name: "Pinning",
    duration: "Days 15–17",
    description: "Fresh air exchange and high humidity shock trigger miniature pinheads to form.",
    icon: Sprout,
    temp: "20 – 24°C",
    humidity: "90 – 95%",
    co2: "< 1,200 ppm",
    light: "800 – 1,000 Lux",
    action: "Foggers initiate high humidity cycle",
  },
  {
    n: "04",
    name: "Fruiting",
    duration: "Days 18–22",
    description: "Mushroom caps expand into dense clusters; rapid water and oxygen uptake occurs.",
    icon: Leaf,
    temp: "24 – 28°C",
    humidity: "85 – 92%",
    co2: "< 1,000 ppm",
    light: "1,000 Lux cycle",
    action: "Automated cooling & misting loop",
  },
  {
    n: "05",
    name: "Harvest",
    duration: "Days 23–25",
    description: "Clusters reach peak harvest weight before caps uncurl and drop spores.",
    icon: PackageCheck,
    temp: "22 – 25°C",
    humidity: "80 – 85%",
    co2: "Standard",
    light: "Standard",
    action: "Batch yield logging in dashboard",
  },
  {
    n: "06",
    name: "Completed",
    duration: "Cycle Close",
    description: "Yields, flush counts, and energy usage are permanently archived in MySQL.",
    icon: CheckCircle2,
    temp: "Archived",
    humidity: "Archived",
    co2: "Archived",
    light: "Archived",
    action: "Comparative historical analytics",
  },
];

export function CultivationLifecycle() {
  const [selectedStage, setSelectedStage] = useState(3); // Default to Fruiting

  const active = stages[selectedStage];

  return (
    <section
      id="cultivation"
      aria-labelledby="cultivation-heading"
      className="py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Cultivation Tracking"
          title="From inoculation to harvest."
          description="Track every oyster mushroom batch through its developmental lifecycle with automated climate target adaptation."
        />

        {/* 6-Stage Stepper Selector Grid */}
        <Reveal delay={100} direction="none" className="mt-12">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
            {stages.map((stage, i) => {
              const isSelected = selectedStage === i;
              return (
                <button
                  key={stage.name}
                  type="button"
                  onClick={() => setSelectedStage(i)}
                  className={cn(
                    "group relative flex flex-col items-start rounded-2xl border p-3 text-left transition-all duration-200 cursor-pointer",
                    isSelected
                      ? "border-primary bg-primary/10 shadow-xs ring-1 ring-primary/30"
                      : "border-border/70 bg-card hover:border-primary/40 hover:bg-muted/20",
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={cn(
                        "text-[10px] font-mono font-bold tracking-wider uppercase transition-colors",
                        isSelected ? "text-primary font-extrabold" : "text-muted-foreground",
                      )}
                    >
                      STAGE {stage.n}
                    </span>
                    <span
                      className={cn(
                        "flex size-6.5 items-center justify-center rounded-lg font-bold transition-colors",
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "bg-muted text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      <stage.icon className="size-3.5" strokeWidth={2.2} />
                    </span>
                  </div>

                  <h3 className="mt-2 text-xs font-bold text-foreground">
                    {stage.name}
                  </h3>
                  <span className="mt-0.5 text-[10px] font-semibold text-primary">
                    {stage.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active Stage Detailed Inspector */}
        <Reveal delay={160} direction="none" className="mt-6">
          <div className="overflow-hidden rounded-3xl border border-border/80 bg-card p-5 sm:p-7 shadow-xs">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 items-center">
              
              {/* Left Column: Stage Targets & Automated Action */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                    Phase {active.n} · {active.name}
                  </span>
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase text-primary">
                    Duration: {active.duration}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-extrabold text-foreground sm:text-lg">
                  {active.name} Phase Overview
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {active.description}
                </p>

                {/* 4-Stat Microclimate Target Grid */}
                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <div className="rounded-2xl border border-border/70 bg-muted/20 p-2.5">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Thermometer className="size-3 text-primary" />
                      <span className="text-[9px] font-bold uppercase tracking-wider">Target Temp</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-foreground tabular-nums">{active.temp}</p>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-muted/20 p-2.5">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Droplets className="size-3 text-teal-500" />
                      <span className="text-[9px] font-bold uppercase tracking-wider">Target RH</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-foreground tabular-nums">{active.humidity}</p>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-muted/20 p-2.5">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Wind className="size-3 text-primary" />
                      <span className="text-[9px] font-bold uppercase tracking-wider">Target CO₂</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-foreground tabular-nums">{active.co2}</p>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-muted/20 p-2.5">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Sun className="size-3 text-amber-500" />
                      <span className="text-[9px] font-bold uppercase tracking-wider">Lighting</span>
                    </div>
                    <p className="mt-1 text-xs font-bold text-foreground tabular-nums">{active.light}</p>
                  </div>
                </div>

                {/* Automated Hardware Loop Action */}
                <div className="mt-4 flex items-center gap-2 rounded-2xl border border-primary/20 bg-primary/10 p-3 text-xs">
                  <span className="font-bold text-primary shrink-0">SmartGrow Automation:</span>
                  <span className="text-muted-foreground text-[11px] truncate">{active.action}</span>
                </div>
              </div>

              {/* Right Column: Visual Stage Graphic */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/80 shadow-md">
                <Image
                  src="/images/oyster-substrate-macro.jpg"
                  alt="Pristine oyster mushroom cluster fruiting from substrate bag with fine mist"
                  fill
                  className="object-cover object-center brightness-95 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-400">
                    Pleurotus Ostreatus
                  </p>
                  <p className="text-xs font-bold sm:text-sm">
                    Pearl Oyster Mushroom Development
                  </p>
                  <p className="text-[10px] text-zinc-300 mt-0.5">
                    Substrate: Hardwood sawdust + wheat bran spawn
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
