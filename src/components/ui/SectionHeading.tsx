"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  withUnderline?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  withUnderline = false,
  className,
}: SectionHeadingProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={cn("flex flex-col mb-10 md:mb-14", alignment, className)}>
      {badge && (
        <span className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest mb-2 font-sans">
          {badge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.2]">
        {withUnderline ? (
          <span className="brush-underline">{title}</span>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
