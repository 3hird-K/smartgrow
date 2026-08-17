"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Platform", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Monitoring", href: "#monitoring" },
  { label: "Automation", href: "#automation" },
  { label: "Cultivation", href: "#cultivation" },
  { label: "Zones", href: "#zones" },
];

function Brand() {
  return (
    <Link
      href="#home"
      className="group flex items-center gap-2.5 transition-opacity hover:opacity-95 shrink-0"
      aria-label="SmartGrow home"
    >
      <div className="relative flex size-8 sm:size-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 font-black text-white shadow-md shadow-emerald-500/20 transition-transform group-hover:scale-105">
        <Sprout className="size-4.5 sm:size-5" />
        <span className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full border-2 border-background bg-emerald-400 animate-pulse" />
      </div>
      <div className="flex flex-col">
        <span className="text-[13px] sm:text-sm font-extrabold tracking-tight text-foreground leading-none">
          SMARTGROW
        </span>
        <span className="mt-0.5 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-primary leading-none">
          Greenhouse IoT
        </span>
      </div>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "how-it-works", "monitoring", "automation", "cultivation", "zones"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-3.5 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
      <div className="pointer-events-auto w-full max-w-6xl">
        <nav
          className={cn(
            "flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl md:rounded-full border transition-all duration-300",
            scrolled
              ? "border-border/90 bg-background/90 dark:bg-card/90 shadow-xl shadow-black/5 dark:shadow-black/30 backdrop-blur-xl"
              : "border-border/60 bg-background/75 dark:bg-card/75 shadow-lg shadow-black/[0.03] dark:shadow-black/20 backdrop-blur-lg",
          )}
          aria-label="Primary navigation"
        >
          <Brand />

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 md:flex rounded-full bg-muted/50 dark:bg-muted/30 p-1 border border-border/50">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-tight transition-all duration-200",
                    isActive
                      ? "bg-background text-emerald-700 dark:text-emerald-300 dark:bg-accent shadow-sm shadow-black/10 font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50 dark:hover:bg-accent/40",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-accent rounded-full px-3.5"
              asChild
            >
              <Link href="/dashboard">Sign In</Link>
            </Button>
            <Button
              size="sm"
              className="text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20 rounded-full px-4.5 py-1.5"
              asChild
            >
              <Link href="/dashboard">
                Open Dashboard
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="size-8.5 rounded-xl text-foreground hover:bg-accent"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Drawer (Floating card below navbar) */}
        {open && (
          <div className="mt-2 rounded-2xl border border-border bg-background/95 dark:bg-card/95 backdrop-blur-2xl p-4 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors",
                    activeSection === link.href.replace("#", "")
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-foreground hover:bg-accent",
                  )}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-border mt-3">
                <Button variant="outline" size="sm" className="w-full text-xs font-semibold rounded-xl" asChild>
                  <Link href="/dashboard" onClick={() => setOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button size="sm" className="w-full text-xs font-bold uppercase tracking-wider rounded-xl shadow-md shadow-primary/20" asChild>
                  <Link href="/dashboard" onClick={() => setOpen(false)}>
                    Open Dashboard
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
