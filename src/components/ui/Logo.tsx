"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

export function Logo({ className, size = "md", withText = true }: LogoProps) {
  return (
    <Link
      href="#home"
      className={cn(
        "group flex items-center gap-2.5 sm:gap-3 select-none transition-transform duration-200 active:scale-95 focus:outline-none",
        className
      )}
      aria-label="Suraj Vishwakarma - Home"
    >
      {/* Clean SV Monogram Badge - No red dot */}
      <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border border-slate-700/60 shadow-sm group-hover:border-rose-500/50 group-hover:shadow-md transition-all duration-200">
        <span className="font-black text-base sm:text-lg tracking-tight text-white font-sans">
          SV
        </span>
      </div>

      {withText && (
        <div className="flex flex-col text-left pl-2 sm:pl-2.5 border-l border-slate-300 dark:border-slate-700 transition-colors">
          <span className="font-bold text-xs sm:text-sm md:text-base text-[#0F172A] dark:text-white leading-tight font-sans tracking-tight transition-colors">
            Suraj Vishwakarma
          </span>
          <span className="text-[10px] sm:text-[11px] text-rose-500 dark:text-rose-400 font-semibold tracking-wide transition-colors">
            Full Stack Developer
          </span>
        </div>
      )}
    </Link>
  );
}
