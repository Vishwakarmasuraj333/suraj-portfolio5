"use client";

import React, { useState } from "react";
import { skillsList } from "@/lib/skills";
import {
  Code2,
  Server,
  Wrench,
  Sparkles,
  CheckCircle2,
  Cpu,
} from "lucide-react";

// Professional Tech Icons mapping
function TechIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  switch (name) {
    case "ReactJS":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#06B6D4" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#06B6D4" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#06B6D4" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#06B6D4" />
        </svg>
      );
    case "JavaScript (ES6+)":
      return (
        <div className="w-7 h-7 rounded-lg bg-[#F7DF1E] text-black font-black flex items-center justify-center text-xs shadow-xs font-mono">
          JS
        </div>
      );
    case "HTML5":
      return (
        <div className="w-7 h-7 rounded-lg bg-[#E34F26] text-white font-black flex items-center justify-center text-[10px] shadow-xs font-mono">
          HTML
        </div>
      );
    case "CSS3":
      return (
        <div className="w-7 h-7 rounded-lg bg-[#1572B6] text-white font-black flex items-center justify-center text-[10px] shadow-xs font-mono">
          CSS
        </div>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#38BDF8">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      );
    case "Bootstrap":
      return (
        <div className="w-7 h-7 rounded-lg bg-[#7952B3] text-white font-black flex items-center justify-center text-xs shadow-xs font-mono">
          B
        </div>
      );
    case "Next.js":
      return (
        <div className="w-7 h-7 rounded-lg bg-black text-white font-black flex items-center justify-center text-[10px] border border-slate-700 shadow-xs">
          N
        </div>
      );
    case "TypeScript":
      return (
        <div className="w-7 h-7 rounded-lg bg-[#3178C6] text-white font-black flex items-center justify-center text-xs shadow-xs font-mono">
          TS
        </div>
      );
    case "Git & GitHub":
      return (
        <div className="w-7 h-7 rounded-lg bg-[#F05032] text-white font-black flex items-center justify-center text-xs shadow-xs">
          <Code2 className="w-4 h-4 text-white" />
        </div>
      );
    case "AI Debugging & Workflow Tools":
      return (
        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-rose-500 text-white flex items-center justify-center shadow-xs">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      );
    case "REST APIs":
      return (
        <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center text-[9px] shadow-xs">
          API
        </div>
      );
    case "VS Code & DevTools":
      return (
        <div className="w-7 h-7 rounded-lg bg-[#007ACC] text-white flex items-center justify-center shadow-xs">
          <Cpu className="w-4 h-4 text-white" />
        </div>
      );
    default:
      return (
        <div className="w-7 h-7 rounded-lg bg-rose-500 text-white flex items-center justify-center shadow-xs">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      );
  }
}

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "All", icon: Sparkles },
    { label: "Frontend", icon: Code2 },
    { label: "Backend", icon: Server },
    { label: "Tools", icon: Wrench },
  ];

  const filteredSkills = skillsList.filter((s) => {
    if (selectedCategory === "All") return true;
    return s.category === selectedCategory;
  });

  return (
    <section id="tech-stack" className="py-20 sm:py-24 relative overflow-hidden bg-[#FAF7F2] dark:bg-[#0E1528] transition-colors duration-200">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-rose-300/20 dark:bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-300/20 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest mb-2 block font-sans">
              Tech Stack & Mastery
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2]">
              Skills & Technologies ⚡
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md font-normal leading-relaxed">
            Frontend specialized skills: HTML, CSS, JavaScript (ES6+), ReactJS, Bootstrap, and Tailwind CSS.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setSelectedCategory(cat.label)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#0F172A] dark:bg-rose-500 text-white shadow-md scale-105"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-rose-300 dark:hover:border-rose-500 hover:text-rose-500"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid with Hover Shine ("jamak") & Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-rose-400 dark:hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* ✨ "Hover Shine Jamak" - Shimmer light sweep on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent skew-x-12" />

              <div>
                {/* Header with Professional Tech Icon & Category Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-750 border border-slate-100 dark:border-slate-700 group-hover:scale-110 group-hover:shadow-sm transition-transform duration-300">
                    <TechIcon name={skill.name} className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/60 border border-rose-100 dark:border-rose-900/40">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-white mb-1.5 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal mb-3">
                  {skill.description}
                </p>
              </div>

              {/* Bottom level bar & status */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/80">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {skill.level}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    {skill.level === "Expert" ? "95%" : "88%"}
                  </span>
                </div>
                {/* Visual Level Progress Bar */}
                <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-500 group-hover:brightness-110"
                    style={{ width: skill.level === "Expert" ? "95%" : "85%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
