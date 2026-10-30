"use client";

import React, { useState } from "react";
import { Project } from "@/types";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { ProjectModal } from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Pastel header styling based on theme
  const getThemeConfig = (theme: Project["pastelTheme"]) => {
    switch (theme) {
      case "green":
        return {
          bg: "bg-[#D1FAE5] dark:bg-emerald-950/40",
          cardBorder: "hover:border-emerald-300 dark:hover:border-emerald-500",
          tagColor: "text-emerald-700 dark:text-emerald-400",
        };
      case "pink":
        return {
          bg: "bg-[#FFE4E6] dark:bg-rose-950/40",
          cardBorder: "hover:border-rose-300 dark:hover:border-rose-500",
          tagColor: "text-rose-700 dark:text-rose-400",
        };
      case "yellow":
        return {
          bg: "bg-[#FEF3C7] dark:bg-amber-950/40",
          cardBorder: "hover:border-amber-300 dark:hover:border-amber-500",
          tagColor: "text-amber-700 dark:text-amber-400",
        };
      case "purple":
        return {
          bg: "bg-[#EDE9FE] dark:bg-purple-950/40",
          cardBorder: "hover:border-purple-300 dark:hover:border-purple-500",
          tagColor: "text-purple-700 dark:text-purple-400",
        };
      case "blue":
        return {
          bg: "bg-[#E0F2FE] dark:bg-sky-950/40",
          cardBorder: "hover:border-sky-300 dark:hover:border-sky-500",
          tagColor: "text-sky-700 dark:text-sky-400",
        };
    }
  };

  const themeConfig = getThemeConfig(project.pastelTheme);

  // Render delightful mini app UI screens inside the mockup
  const renderAppMockups = () => {
    switch (project.id) {
      case "foodly":
        return (
          <div className="flex items-center justify-center gap-3 w-full h-full pt-4">
            {/* Phone 1: Food menu card */}
            <div className="w-24 sm:w-28 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200/60 dark:border-slate-800 p-2 flex flex-col justify-between -rotate-3 transition-transform group-hover:-rotate-6">
              <div>
                <div className="w-full h-16 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center text-2xl">
                  🥗
                </div>
                <div className="w-16 h-2 bg-slate-800 dark:bg-slate-200 rounded mt-2" />
                <div className="w-10 h-1.5 bg-slate-300 dark:bg-slate-700 rounded mt-1" />
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">₹249</span>
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] flex items-center justify-center font-bold">
                  +
                </span>
              </div>
            </div>

            {/* Phone 2: Tracking map card */}
            <div className="w-24 sm:w-28 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200/60 dark:border-slate-800 p-2 flex flex-col justify-between rotate-3 transition-transform group-hover:rotate-6">
              <div>
                <div className="w-full h-16 bg-slate-100 dark:bg-slate-800 rounded-lg relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-emerald-50/70 dark:bg-emerald-950/40" />
                  <span className="text-xl relative z-10 animate-bounce">🛵</span>
                </div>
                <div className="w-14 h-2 bg-slate-800 dark:bg-slate-200 rounded mt-2" />
                <div className="w-12 h-1.5 bg-emerald-500 rounded mt-1" />
              </div>
              <span className="text-[9px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-center">
                18 mins away
              </span>
            </div>
          </div>
        );

      case "shopio":
        return (
          <div className="flex items-center justify-center gap-3 w-full h-full pt-4">
            {/* Phone 1: Product detail */}
            <div className="w-24 sm:w-28 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200/60 dark:border-slate-800 p-2 flex flex-col justify-between -rotate-3 transition-transform group-hover:-rotate-6">
              <div>
                <div className="w-full h-16 bg-rose-100 dark:bg-rose-900/40 rounded-lg flex items-center justify-center text-2xl">
                  👟
                </div>
                <div className="w-16 h-2 bg-slate-800 dark:bg-slate-200 rounded mt-2" />
                <div className="flex gap-1 mt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800 dark:bg-slate-400" />
                </div>
              </div>
              <div className="w-full py-1 bg-rose-500 text-white rounded text-[8px] font-bold text-center">
                Add to Cart
              </div>
            </div>

            {/* Phone 2: Checkout */}
            <div className="w-24 sm:w-28 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200/60 dark:border-slate-800 p-2 flex flex-col justify-between rotate-3 transition-transform group-hover:rotate-6">
              <div>
                <div className="w-12 h-2 bg-slate-800 dark:bg-slate-200 rounded mt-1" />
                <div className="w-full h-7 bg-slate-50 dark:bg-slate-800 rounded mt-2 p-1 flex items-center justify-between">
                  <span className="w-5 h-5 bg-rose-100 dark:bg-rose-950/60 rounded text-[9px] flex items-center justify-center">🛍️</span>
                  <div className="w-10 h-1.5 bg-slate-400 dark:bg-slate-500 rounded" />
                </div>
                <div className="w-full h-7 bg-slate-50 dark:bg-slate-800 rounded mt-1 p-1 flex items-center justify-between">
                  <span className="w-5 h-5 bg-rose-100 dark:bg-rose-950/60 rounded text-[9px] flex items-center justify-center">👕</span>
                  <div className="w-10 h-1.5 bg-slate-400 dark:bg-slate-500 rounded" />
                </div>
              </div>
              <div className="flex justify-between items-center text-[9px] font-bold text-slate-800 dark:text-slate-200 pt-1 border-t border-slate-100 dark:border-slate-800">
                <span>Total</span>
                <span>₹1,899</span>
              </div>
            </div>
          </div>
        );

      case "walletwise":
        return (
          <div className="flex items-center justify-center gap-3 w-full h-full pt-4">
            {/* Phone 1: Chart */}
            <div className="w-24 sm:w-28 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200/60 dark:border-slate-800 p-2 flex flex-col justify-between -rotate-3 transition-transform group-hover:-rotate-6">
              <div>
                <span className="text-[8px] text-slate-400 uppercase font-bold">Total Balance</span>
                <div className="text-xs font-black text-slate-900 dark:text-white">₹84,250</div>
                {/* Mini Bar Chart */}
                <div className="flex items-end gap-1 h-14 mt-2 px-1">
                  <div className="w-2.5 h-6 bg-amber-200 dark:bg-amber-600/50 rounded-t" />
                  <div className="w-2.5 h-10 bg-amber-400 dark:bg-amber-500 rounded-t" />
                  <div className="w-2.5 h-7 bg-amber-300 dark:bg-amber-600/70 rounded-t" />
                  <div className="w-2.5 h-12 bg-amber-500 dark:bg-amber-400 rounded-t" />
                  <div className="w-2.5 h-8 bg-amber-400 dark:bg-amber-500/80 rounded-t" />
                </div>
              </div>
              <span className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1 py-0.5 rounded text-center">
                +14.2% savings
              </span>
            </div>

            {/* Phone 2: Budget goals */}
            <div className="w-24 sm:w-28 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200/60 dark:border-slate-800 p-2 flex flex-col justify-between rotate-3 transition-transform group-hover:rotate-6">
              <div>
                <span className="text-[8px] text-slate-500 dark:text-slate-400 font-bold">Monthly Budget</span>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-1.5">
                  <div className="bg-amber-500 h-full w-[65%]" />
                </div>
                <div className="space-y-1.5 mt-3">
                  <div className="flex justify-between items-center text-[8px] text-slate-600 dark:text-slate-300">
                    <span>Rent</span>
                    <span className="font-bold">60%</span>
                  </div>
                  <div className="flex justify-between items-center text-[8px] text-slate-600 dark:text-slate-300">
                    <span>Food</span>
                    <span className="font-bold">25%</span>
                  </div>
                </div>
              </div>
              <div className="text-[9px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 rounded py-0.5 text-center">
                On Track
              </div>
            </div>
          </div>
        );

      case "fittrack":
        return (
          <div className="flex items-center justify-center gap-3 w-full h-full pt-4">
            {/* Phone 1: Activity Rings */}
            <div className="w-24 sm:w-28 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200/60 dark:border-slate-800 p-2 flex flex-col justify-between -rotate-3 transition-transform group-hover:-rotate-6">
              <div>
                <span className="text-[8px] font-bold text-slate-400 uppercase">Today&apos;s Burn</span>
                <div className="text-xs font-black text-slate-900 dark:text-white">620 kcal</div>
                {/* Visual Ring */}
                <div className="relative w-12 h-12 mx-auto my-2 rounded-full border-4 border-purple-200 dark:border-purple-900 border-t-purple-600 border-r-purple-500 flex items-center justify-center">
                  <span className="text-[9px] font-black text-purple-700 dark:text-purple-300">85%</span>
                </div>
              </div>
              <span className="text-[8px] font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 py-0.5 rounded text-center">
                12k Steps
              </span>
            </div>

            {/* Phone 2: Routine split */}
            <div className="w-24 sm:w-28 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200/60 dark:border-slate-800 p-2 flex flex-col justify-between rotate-3 transition-transform group-hover:rotate-6">
              <div>
                <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400">Day 4: Push Split</span>
                <div className="mt-1.5 space-y-1">
                  <div className="w-full bg-purple-50 dark:bg-purple-950/60 p-1 rounded text-[7px] text-purple-900 dark:text-purple-300 flex justify-between">
                    <span>Bench Press</span>
                    <span className="font-bold">4 × 10</span>
                  </div>
                  <div className="w-full bg-purple-50 dark:bg-purple-950/60 p-1 rounded text-[7px] text-purple-900 dark:text-purple-300 flex justify-between">
                    <span>Overhead Press</span>
                    <span className="font-bold">3 × 12</span>
                  </div>
                </div>
              </div>
              <div className="w-full py-1 bg-purple-600 text-white rounded text-[8px] font-bold text-center">
                Start Workout
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center w-full h-full pt-2">
            <div className="w-48 h-32 bg-slate-900 rounded-xl shadow-lg border border-sky-400/30 p-3 text-sky-300 font-mono text-[9px] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1 text-emerald-400">● LIVE_FEED</span>
                <span className="text-slate-400">99.4% ML ACCURACY</span>
              </div>
              <div className="space-y-1 text-[8px] text-slate-300">
                <div>&gt; Telemetry Stream ingested</div>
                <div>&gt; SHAP value calculation OK</div>
                <div className="text-sky-400">&gt; Zero anomalies flagged</div>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-sky-400 h-full w-[88%]" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className="group flex flex-col bg-white dark:bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-soft hover-lift transition-all duration-300">
        {/* Pastel Preview Header */}
        <div
          className={`relative w-full h-56 sm:h-64 ${themeConfig.bg} overflow-hidden flex items-center justify-center cursor-pointer`}
          onClick={() => setModalOpen(true)}
        >
          {renderAppMockups()}
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
          <div>
            {/* Category tag */}
            <span
              className={`text-xs font-bold uppercase tracking-wider ${themeConfig.tagColor} mb-2 block font-sans`}
            >
              {project.category}
            </span>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white tracking-tight mb-2">
              {project.title}
            </h3>

            {/* Tagline / Summary */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5 line-clamp-2">
              {project.tagline}
            </p>
          </div>

          {/* Action Link */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F172A] dark:text-slate-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors group-hover:translate-x-0.5"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="p-1.5 rounded-full text-slate-400 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={modalOpen ? project : null}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
