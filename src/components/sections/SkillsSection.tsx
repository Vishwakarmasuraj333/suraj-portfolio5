"use client";

import React, { useState } from "react";
import { skillsList } from "@/lib/skills";
import { Code2, Server, Database, Wrench, Sparkles, CheckCircle2 } from "lucide-react";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { label: "All", icon: Sparkles },
    { label: "Frontend", icon: Code2 },
    { label: "Backend", icon: Server },
    { label: "Databases", icon: Database },
    { label: "Tools", icon: Wrench },
  ];

  const filteredSkills = skillsList.filter((s) => {
    if (selectedCategory === "All") return true;
    return s.category === selectedCategory;
  });

  return (
    <section id="tech-stack" className="py-20 sm:py-24 relative overflow-hidden bg-[#FAF7F2] dark:bg-[#0E1528] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest mb-2 block font-sans">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2]">
              Skills & Technologies ⚡
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md font-normal leading-relaxed">
            Modern, production-grade frontend frameworks, backend microservices, and reliable database architectures.
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
                    ? "bg-[#0F172A] dark:bg-rose-500 text-white shadow-md"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400 px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/60">
                    {skill.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-white mb-1.5">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Proficient
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
