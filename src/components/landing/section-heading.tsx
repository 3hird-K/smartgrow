import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center flex flex-col items-center",
        align === "left" && "flex flex-col items-start",
        className,
      )}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm shadow-primary/5">
        <span className="size-1.5 rounded-full bg-primary animate-pulse" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </Reveal>
  );
}
