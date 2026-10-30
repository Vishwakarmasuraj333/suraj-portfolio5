"use client";

import React from "react";
import { DeveloperCodingIllustration } from "../illustrations/DeveloperCodingIllustration";
import { siteConfig } from "@/lib/site-config";
import {
  Award,
  GraduationCap,
  Sparkles,
  Coffee,
  CheckCircle2,
} from "lucide-react";

export function AboutSection() {
  const stats = [
    {
      value: "9.04",
      label: "CGPA (A Grade)",
      sub: "University of Mumbai",
      icon: Award,
      bg: "bg-rose-100 dark:bg-rose-950/60",
      border: "border-rose-200 dark:border-rose-900/40",
      text: "text-rose-600 dark:text-rose-400",
    },
    {
      value: "2025",
      label: "Grad Year",
      sub: "B.Sc. Information Tech",
      icon: GraduationCap,
      bg: "bg-emerald-100 dark:bg-emerald-950/60",
      border: "border-emerald-200 dark:border-emerald-900/40",
      text: "text-emerald-600 dark:text-emerald-400",
    },
    {
      value: "4+",
      label: "Certifications",
      sub: "FreeCodeCamp & Simplilearn",
      icon: Sparkles,
      bg: "bg-purple-100 dark:bg-purple-950/60",
      border: "border-purple-200 dark:border-purple-900/40",
      text: "text-purple-600 dark:text-purple-400",
    },
    {
      value: "5+",
      label: "Deployed Projects",
      sub: "ReactJS & Modern Web",
      icon: Coffee,
      bg: "bg-amber-100 dark:bg-amber-950/60",
      border: "border-amber-200 dark:border-amber-900/40",
      text: "text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Pink Wavy Container matching reference */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#FFF0F4] dark:bg-[#131D33] border border-rose-100 dark:border-slate-800 p-6 sm:p-10 lg:p-16 overflow-hidden shadow-soft transition-colors duration-200">
          {/* Subtle decorative background wave blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/40 dark:bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center relative z-10">
            {/* Left Column: Developer Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <DeveloperCodingIllustration className="w-full max-w-sm sm:max-w-md lg:max-w-none" />
            </div>

            {/* Right Column: Narrative, Education details & Stat Cards */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Tag */}
              <span className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest mb-2 font-sans">
                About me
              </span>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2] mb-5">
                Building apps <br />
                <span className="text-[#0F172A] dark:text-white">with clean code & purpose</span>
              </h2>

              {/* Bio Description with Real Details */}
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-8">
                <p>
                  I&apos;m <strong>Suraj Vishwakarma</strong>, a motivated Frontend Developer skilled in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript (ES6+)</strong>, <strong>ReactJS</strong>, and <strong>Tailwind CSS</strong>. I focus on building clean, responsive, and user-friendly interfaces.
                </p>
                <p>
                  Passionate about performance optimization, clean code, and transforming UI/UX concepts into fast, accessible web experiences. I have built and deployed multiple real-world web projects utilizing modern version control with Git/GitHub and leveraging AI tools for debugging and workflow optimization.
                </p>
                <p>
                  Graduated with a <strong>B.Sc. in Information Technology (2022 – 2025)</strong> from the <strong>University of Mumbai</strong> with an outstanding <strong>9.04 CGPA (A Grade)</strong>, backed by verified credentials from <strong>FreeCodeCamp</strong> and <strong>Simplilearn</strong>.
                </p>
              </div>

              {/* 4 Stat Badges matching the design */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-rose-100 dark:border-slate-700 rounded-2xl p-3.5 sm:p-4 flex flex-col items-start shadow-xs hover-lift transition-colors"
                    >
                      <div className={`p-2 rounded-xl ${stat.bg} ${stat.text} mb-3`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xl sm:text-2xl font-black text-[#0F172A] dark:text-white tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-0.5">
                        {stat.label}
                      </span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-400 font-medium">
                        {stat.sub}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
