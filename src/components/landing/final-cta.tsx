"use client";

import Link from "next/link";
import Image from "next/image";
import { Cpu, Leaf, ShieldCheck, Sparkles, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal direction="none">
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card px-6 py-16 text-center shadow-2xl shadow-black/15 sm:px-14 sm:py-20">
            
            {/* Background High-Tech Greenhouse Editorial Image with Atmospheric Gradient Overlay */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <Image
                src="/images/greenhouse-commercial-wide.jpg"
                alt="SmartGrow automated greenhouse"
                fill
                className="object-cover object-center brightness-[0.25] contrast-[1.1] transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-background/80" />
            </div>

            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/20 text-primary shadow-sm shadow-primary/20 backdrop-blur-md border border-primary/30">
              <Sprout className="size-6" strokeWidth={2.2} />
            </div>

            <h2
              id="final-cta-heading"
              className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[40px] leading-[1.12]"
            >
              Grow with better visibility.
            </h2>
            
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              Bring environmental monitoring, autonomous climate control, and oyster mushroom cultivation tracking into one connected greenhouse platform.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Button className="h-10 px-6 text-xs font-bold uppercase tracking-wider shadow-xl shadow-primary/30 rounded-full" asChild>
                <Link href="/dashboard">
                  Open SmartGrow Dashboard
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-xs font-bold uppercase tracking-wider text-white border-white/20 bg-black/40 hover:bg-white/10 backdrop-blur-md"
                asChild
              >
                <Link href="#how-it-works">Learn How It Works</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Cpu className="size-3.5 text-emerald-400" />
                ESP32 Hardware Compatible
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                Real-Time MySQL Telemetry
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-emerald-400" />
                Multi-Zone Support
              </span>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
