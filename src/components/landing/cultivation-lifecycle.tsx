"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Clock,
  Droplets,
  FlaskConical,
  PackageCheck,
  Sparkles,
  Sprout,
  Sun,
  Syringe,
  Thermometer,
  Wind,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useInView, Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const stages = [
  {
    n: "01",
    name: "Inoculation",
    duration: "Day 0",
    description: "Grain spawn is introduced into pasteurized substrate bags under sterile conditions.",
    icon: Syringe,
    temp: "24 – 26°C",
    humidity: "65 – 70%",
    co2: "Normal",
    light: "Darkness",
    action: "Bag sterilization & spawn mixing",
  },
  {
    n: "02",
    name: "Incubation",
    duration: "Days 1–14",
    description: "White mycelium colonizes the substrate matrix, generating internal metabolic heat.",
    icon: FlaskConical,
    temp: "24 – 27°C",
    humidity: "75 – 80%",
    co2: "> 5,000 ppm",
    light: "0 Lux (Dark)",
    action: "ESP32 monitors bag core temperature",
  },
  {
    n: "03",
    name: "Primordia Pinning",
    duration: "Days 15–17",
    description: "Fresh air exchange and high humidity shock trigger miniature pinheads to form.",
    icon: Sparkles,
    temp: "20 – 24°C",
    humidity: "90 – 95%",
    co2: "< 1,200 ppm",
    light: "800 – 1,000 Lux",
    action: "Foggers initiate high humidity cycle",
  },
  {
    n: "04",
    name: "Fruiting Growth",
    duration: "Days 18–22",
    description: "Mushroom caps expand into dense clusters; rapid water and oxygen uptake occurs.",
    icon: Sprout,
    temp: "24 – 28°C",
    humidity: "85 – 92%",
    co2: "< 1,000 ppm",
    light: "1,000 Lux cycle",
    action: "Automated cooling & misting loop",
  },
  {
    n: "05",
    name: "Harvest Window",
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
    name: "Batch Completed",
    duration: "Cycle Close",
    description: "Yields, flush counts, and energy usage are permanently archived in MySQL.",
    icon: CheckCircle2,
    temp: "Archived",
    humidity: "Archived",
    co2: "Archived",
    light: "Complete",
    action: "Comparative historical analytics",
  },
];

export function CultivationLifecycle() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const [selectedStage, setSelectedStage] = useState(3); // Default to Fruiting

  const active = stages[selectedStage];

  return (
    <section
      id="cultivation"
      aria-labelledby="cultivation-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Cultivation Tracking"
          title="From inoculation to harvest."
          description="SmartGrow tracks every oyster mushroom batch through its developmental lifecycle, automatically adapting climate targets and forecasting harvest windows."
        />

        {/* Interactive Lifecycle Timeline */}
        <div ref={ref} className="mt-16">
          {/* Progress Timeline Tracker */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {stages.map((stage, i) => {
              const isSelected = selectedStage === i;
              return (
                <button
                  key={stage.name}
                  type="button"
                  onClick={() => setSelectedStage(i)}
                  className={cn(
                    "group relative flex flex-col items-start rounded-2xl border p-4 text-left transition-all duration-300",
                    isSelected
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/10 scale-[1.02]"
                      : "border-border/70 bg-card hover:border-primary/40 hover:bg-muted/30",
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={cn(
                        "text-xs font-black tabular-nums transition-colors",
                        isSelected ? "text-primary" : "text-muted-foreground/60",
                      )}
                    >
                      STAGE {stage.n}
                    </span>
                    <span
                      className={cn(
                        "flex size-7 items-center justify-center rounded-lg font-bold transition-colors",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      <stage.icon className="size-3.5" strokeWidth={2.2} />
                    </span>
                  </div>

                  <h3 className="mt-3 text-sm font-bold tracking-tight text-foreground">
                    {stage.name}
                  </h3>
                  <span className="mt-0.5 text-[10px] font-semibold text-primary">
                    {stage.duration}
                  </span>

                  {isSelected && (
                    <span className="absolute -bottom-2 left-1/2 size-3 -translate-x-1/2 rotate-45 border-b border-r border-primary bg-primary/10" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Inspector */}
          <Reveal delay={120} direction="none" className="mt-8">
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-xl shadow-black/10 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                
                {/* Left side: Stage Details & Environmental Requirements */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-black uppercase tracking-wider text-primary">
                      Phase 0{selectedStage + 1} of 06
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      Typical Duration: <strong className="text-foreground">{active.duration}</strong>
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {active.name} Phase
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {active.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="rounded-xl border border-border/70 bg-muted/20 p-3">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Thermometer className="size-3.5 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Target Temp</span>
                      </div>
                      <p className="mt-1 text-sm font-bold text-foreground">{active.temp}</p>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-muted/20 p-3">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Droplets className="size-3.5 text-teal-400" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Target RH</span>
                      </div>
                      <p className="mt-1 text-sm font-bold text-foreground">{active.humidity}</p>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-muted/20 p-3">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Wind className="size-3.5 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Target CO₂</span>
                      </div>
                      <p className="mt-1 text-sm font-bold text-foreground">{active.co2}</p>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-muted/20 p-3">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Sun className="size-3.5 text-amber-400" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Lighting</span>
                      </div>
                      <p className="mt-1 text-sm font-bold text-foreground">{active.light}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/[0.04] p-3.5 text-xs text-foreground">
                    <span className="font-bold text-primary">SmartGrow Automation:</span>
                    <span className="text-muted-foreground">{active.action}</span>
                  </div>
                </div>

                {/* Right side: High-Tech Cultivation Image Card */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl border border-border/80 shadow-lg">
                  <Image
                    src="/images/oyster-substrate-macro.jpg"
                    alt="Pristine oyster mushroom cluster fruiting from substrate bag with fine mist"
                    fill
                    className="object-cover object-center brightness-95 transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                      Pleurotus Ostreatus
                    </p>
                    <p className="text-sm font-bold">
                      Pearl Oyster Mushroom Pin &amp; Cap Development
                    </p>
                    <p className="text-[11px] text-white/80 mt-0.5">
                      Substrate: Hardwood sawdust + wheat bran spawn
                    </p>
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
