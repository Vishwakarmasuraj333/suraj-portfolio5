"use client";

import React from "react";
import { HighFiveIllustration } from "../illustrations/HighFiveIllustration";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function ContactCtaBanner() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Pink Wavy Banner matching reference */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#FFEAEF] dark:bg-[#18233D] border border-rose-200/70 dark:border-slate-800 p-6 sm:p-10 lg:p-16 overflow-hidden shadow-soft transition-colors duration-200">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-300/30 dark:bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest mb-2 font-sans">
                Collaboration & Inquiries
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.15] mb-6">
                Have an idea? <br />
                Let&apos;s build <span className="text-rose-500 brush-underline">something great together!</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg font-normal leading-relaxed mb-8">
                Whether you have an exciting project, want to discuss modern full-stack architectures, or have an engineering role to fill — my inbox is always open.
              </p>

              <Button
                variant="dark"
                size="md"
                href="#contact"
                className="shadow-md"
              >
                Start a Project <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Right: High-Five Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <HighFiveIllustration className="w-full max-w-sm sm:max-w-md lg:max-w-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
