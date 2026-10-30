"use client";

import React, { useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterTabs = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching reference screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest mb-2 block font-sans">
              My Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2]">
              <span className="brush-underline">Selected Work</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md font-normal leading-relaxed">
            Here are some projects I&apos;m proud of. Each one is built with ❤️ and lots of coffee.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#0F172A] dark:bg-rose-500 text-white shadow-sm"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-14">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom CTA: See All Projects */}
        <div className="flex justify-center items-center">
          <Button
            variant="primary"
            size="md"
            href={siteConfig.links.github}
            isExternal
            className="shadow-button"
          >
            See All Projects <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
