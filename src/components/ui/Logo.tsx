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
      {/* Monogram Box / Letters matching reference 'SH.' style */}
      <div className="flex items-center">
        <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-[#0F172A] dark:text-white font-sans transition-colors">
          SV
        </span>
        <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500 ml-0.5 group-hover:scale-125 transition-transform" />
      </div>

      {withText && (
        <div className="flex flex-col text-left pl-2 sm:pl-2.5 border-l border-slate-300 dark:border-slate-700 transition-colors">
          <span className="font-bold text-xs sm:text-sm md:text-base text-[#0F172A] dark:text-white leading-tight font-sans tracking-tight transition-colors">
            Suraj Vishwakarma
          </span>
          <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide transition-colors">
            Full-Stack Developer
          </span>
        </div>
      )}
    </Link>
  );
}
