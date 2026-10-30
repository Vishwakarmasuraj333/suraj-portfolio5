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

  // Render unique, custom-designed interactive app UI mockups for EVERY project
  const renderAppMockups = () => {
    switch (project.id) {
      // 1. Portfolio Website: Modern desktop browser mockup with SV monogram
      case "portfolio-website":
        return (
          <div className="flex items-center justify-center w-full h-full px-3 pt-3">
            <div className="w-56 sm:w-64 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-rose-200/80 dark:border-rose-900/60 p-2.5 flex flex-col justify-between transition-transform duration-300 group-hover:scale-105">
              {/* Browser top bar */}
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[8px] font-mono text-slate-500 dark:text-slate-400">
                  surajvishwakarma.dev
                </div>
                <span className="text-[9px]">⚡</span>
              </div>
              {/* Mini Hero layout */}
              <div className="flex items-center gap-2.5 py-1">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center text-white font-black text-xs shadow-xs">
                  SV
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-extrabold text-slate-800 dark:text-white leading-tight">Suraj Vishwakarma</div>
                  <div className="text-[8px] text-rose-500 font-bold">Frontend Developer</div>
                  <div className="flex gap-1 mt-1">
                    <span className="text-[7px] px-1 bg-rose-50 dark:bg-rose-950/60 text-rose-600 rounded">React</span>
                    <span className="text-[7px] px-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded">Tailwind</span>
                  </div>
                </div>
              </div>
              {/* Status footer */}
              <div className="flex items-center justify-between text-[8px] pt-1 border-t border-slate-100 dark:border-slate-800 text-slate-500">
                <span className="text-emerald-500 font-bold">● Available for Roles</span>
                <span className="font-semibold text-rose-500">9.04 CGPA</span>
              </div>
            </div>
          </div>
        );

      // 2. ToDo List App: Task checklist interface
      case "todo-list-app":
        return (
          <div className="flex items-center justify-center w-full h-full px-3 pt-3">
            <div className="w-56 sm:w-60 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-sky-200 dark:border-sky-900/60 p-2.5 flex flex-col justify-between transition-transform duration-300 group-hover:scale-105">
              <div className="flex justify-between items-center pb-1.5 border-b border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
                  📋 Daily Tasks
                </span>
                <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 font-bold">
                  3/4 Done
                </span>
              </div>
              <div className="space-y-1.5 py-1">
                <div className="flex items-center gap-1.5 p-1 rounded bg-emerald-50/70 dark:bg-emerald-950/40 text-[8px] text-emerald-800 dark:text-emerald-300">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="line-through">Deploy Portfolio Website</span>
                </div>
                <div className="flex items-center gap-1.5 p-1 rounded bg-slate-50 dark:bg-slate-800 text-[8px] text-slate-700 dark:text-slate-200 font-medium">
                  <span className="w-2 h-2 rounded border border-slate-400" />
                  <span>Weather App Live API test</span>
                </div>
                <div className="flex items-center gap-1.5 p-1 rounded bg-emerald-50/70 dark:bg-emerald-950/40 text-[8px] text-emerald-800 dark:text-emerald-300">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="line-through">Revise React Hooks & DSA</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-[8px] pt-1 border-t border-slate-100 dark:border-slate-800">
                <span className="text-slate-400">All • Active • Done</span>
                <span className="px-1.5 py-0.5 rounded bg-sky-500 text-white font-bold">+ New Task</span>
              </div>
            </div>
          </div>
        );

      // 3. Weather App: Weather forecast widget with sun & clouds
      case "weather-app":
        return (
          <div className="flex items-center justify-center w-full h-full px-3 pt-3">
            <div className="w-56 sm:w-60 h-36 sm:h-40 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 rounded-xl shadow-lg border border-amber-200 dark:border-amber-900/60 p-2.5 flex flex-col justify-between transition-transform duration-300 group-hover:scale-105">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[11px] font-extrabold text-slate-900 dark:text-white">Mumbai, IN</span>
                  <div className="text-[8px] text-amber-600 dark:text-amber-400 font-semibold">Sunny & Clear</div>
                </div>
                <span className="text-2xl animate-spin" style={{ animationDuration: "12s" }}>☀️</span>
              </div>
              <div className="flex items-baseline justify-between py-1">
                <span className="text-2xl font-black text-slate-900 dark:text-white">29°C</span>
                <div className="text-[8px] text-slate-500 dark:text-slate-400 text-right">
                  <div>Humidity: 65%</div>
                  <div>Wind: 14 km/h</div>
                </div>
              </div>
              {/* 3-day forecast pills */}
              <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-amber-200/60 dark:border-slate-700 text-center text-[7px] text-slate-600 dark:text-slate-300">
                <div className="bg-white/80 dark:bg-slate-800 p-0.5 rounded">Mon 29° ☀️</div>
                <div className="bg-white/80 dark:bg-slate-800 p-0.5 rounded">Tue 30° ⛅</div>
                <div className="bg-white/80 dark:bg-slate-800 p-0.5 rounded">Wed 28° 🌦️</div>
              </div>
            </div>
          </div>
        );

      // 4. Admin Dashboard: Charts & Metrics Dashboard
      case "admin-dashboard":
        return (
          <div className="flex items-center justify-center w-full h-full px-3 pt-3">
            <div className="w-56 sm:w-60 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-purple-200 dark:border-purple-900/60 p-2.5 flex flex-col justify-between transition-transform duration-300 group-hover:scale-105">
              <div className="flex justify-between items-center pb-1 border-b border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-black text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  📊 Analytics Hub
                </span>
                <span className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded">
                  +24.8% Growth
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 my-1">
                <div className="p-1 rounded bg-purple-50/70 dark:bg-purple-950/40">
                  <div className="text-[7px] text-slate-400 font-bold uppercase">Users</div>
                  <div className="text-xs font-black text-slate-900 dark:text-white">12.4k</div>
                </div>
                <div className="p-1 rounded bg-sky-50/70 dark:bg-sky-950/40">
                  <div className="text-[7px] text-slate-400 font-bold uppercase">Revenue</div>
                  <div className="text-xs font-black text-slate-900 dark:text-white">₹4.2L</div>
                </div>
              </div>
              {/* Mini Chart */}
              <div className="flex items-end gap-1 h-9 px-1 bg-slate-50 dark:bg-slate-800/60 rounded p-1">
                <div className="flex-1 h-3 bg-purple-300 rounded-t" />
                <div className="flex-1 h-5 bg-purple-400 rounded-t" />
                <div className="flex-1 h-7 bg-purple-500 rounded-t" />
                <div className="flex-1 h-4 bg-purple-400 rounded-t" />
                <div className="flex-1 h-8 bg-purple-600 rounded-t" />
                <div className="flex-1 h-6 bg-purple-500 rounded-t" />
              </div>
            </div>
          </div>
        );

      // 5. Mini E-commerce UI: Shopping card & drawer
      case "mini-ecommerce-ui":
        return (
          <div className="flex items-center justify-center w-full h-full px-3 pt-3">
            <div className="w-56 sm:w-60 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-900/60 p-2.5 flex flex-col justify-between transition-transform duration-300 group-hover:scale-105">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-extrabold text-slate-900 dark:text-white">👟 Sneaker Pro X</span>
                <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400">₹2,499</span>
              </div>
              <div className="flex items-center gap-2 py-1">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg flex items-center justify-center text-2xl">
                  👟
                </div>
                <div className="flex-1 space-y-1">
                  <div className="text-[8px] text-slate-500 dark:text-slate-400">Size: US 9 • In Stock</div>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white border border-slate-300" />
                  </div>
                  <div className="text-[8px] font-bold text-amber-500">⭐ 4.9 (128 reviews)</div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[8px] text-slate-400">Cart: 2 items</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[8px]">
                  Add to Cart 🛍️
                </span>
              </div>
            </div>
          </div>
        );

      // 6. IntelliTwin AI: ML Telemetry stream with distinct neural graph
      case "intellitwin-ai":
        return (
          <div className="flex items-center justify-center w-full h-full px-3 pt-3">
            <div className="w-56 sm:w-60 h-36 sm:h-40 bg-slate-950 rounded-xl shadow-lg border border-cyan-500/40 p-2.5 flex flex-col justify-between font-mono transition-transform duration-300 group-hover:scale-105">
              <div className="flex justify-between items-center text-[8px]">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">● ML ACTIVE</span>
                <span className="text-cyan-400 font-bold">99.4% ACCURACY</span>
              </div>
              <div className="space-y-1 text-[7px] text-slate-300 my-1 bg-slate-900/80 p-1.5 rounded border border-slate-800">
                <div className="text-cyan-300">&gt; XGBoost Anomaly Engine: ON</div>
                <div className="text-emerald-400">&gt; SHAP explainability vector OK</div>
                <div className="text-slate-400">&gt; Latency: 1.2ms (Zero False Pos)</div>
              </div>
              <div className="flex items-center justify-between text-[7px] text-slate-400 pt-1 border-t border-slate-800">
                <span>Threat Status</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">
                  SECURE (0 Flagged)
                </span>
              </div>
            </div>
          </div>
        );

      // 7. Nexora Social: Multi-platform publishing queue (Twitter, LinkedIn, Instagram)
      case "nexora-social":
        return (
          <div className="flex items-center justify-center w-full h-full px-3 pt-3">
            <div className="w-56 sm:w-60 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-sky-200 dark:border-sky-900/60 p-2.5 flex flex-col justify-between transition-transform duration-300 group-hover:scale-105">
              <div className="flex justify-between items-center pb-1 border-b border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
                  📢 Social Queue
                </span>
                <span className="text-[8px] font-bold text-sky-600 dark:text-sky-400">Scheduled 4:30 PM</span>
              </div>
              <div className="space-y-1.5 py-1">
                <div className="flex items-center justify-between p-1 rounded bg-sky-50 dark:bg-sky-950/40 text-[8px]">
                  <span className="font-bold text-sky-700 dark:text-sky-300">Twitter / X</span>
                  <span className="text-emerald-600 font-bold">✓ Ready</span>
                </div>
                <div className="flex items-center justify-between p-1 rounded bg-blue-50 dark:bg-blue-950/40 text-[8px]">
                  <span className="font-bold text-blue-700 dark:text-blue-300">LinkedIn Post</span>
                  <span className="text-emerald-600 font-bold">✓ Ready</span>
                </div>
                <div className="flex items-center justify-between p-1 rounded bg-pink-50 dark:bg-pink-950/40 text-[8px]">
                  <span className="font-bold text-pink-700 dark:text-pink-300">Instagram Reel</span>
                  <span className="text-amber-500 font-bold">⏳ Draft</span>
                </div>
              </div>
              <div className="text-[8px] text-center font-bold text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800">
                3 Channels Connected • Auto Sync
              </div>
            </div>
          </div>
        );

      // 8. SE Ranking: Real-time search engine rank monitoring & SEO studio
      case "se-ranking":
        return (
          <div className="flex items-center justify-center w-full h-full px-3 pt-3">
            <div className="w-56 sm:w-60 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-emerald-200 dark:border-emerald-900/60 p-2.5 flex flex-col justify-between transition-transform duration-300 group-hover:scale-105">
              <div className="flex justify-between items-center pb-1 border-b border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400">
                  🔍 SEO Rank Monitor
                </span>
                <span className="text-[8px] font-extrabold text-emerald-600 bg-emerald-100 dark:bg-emerald-950/70 px-1.5 py-0.5 rounded">
                  Rank #1 ▲ (+4)
                </span>
              </div>
              <div className="p-1.5 bg-slate-50 dark:bg-slate-800 rounded my-1 text-[8px] space-y-1">
                <div className="font-bold text-slate-800 dark:text-slate-200 truncate">
                  Keyword: &quot;Frontend React Developer&quot;
                </div>
                <div className="flex justify-between text-slate-500 dark:text-slate-400 text-[7px]">
                  <span>Volume: 45K / mo</span>
                  <span>CTR: 28.4%</span>
                  <span>Difficulty: Easy</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-[8px] text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800">
                <span>Google Top 10</span>
                <span className="text-emerald-600 font-bold">SERP Verified</span>
              </div>
            </div>
          </div>
        );

      // 9. Foodly: Food delivery tracking app
      case "foodly":
        return (
          <div className="flex items-center justify-center gap-3 w-full h-full pt-4">
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
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] flex items-center justify-center font-bold">+</span>
              </div>
            </div>
            <div className="w-24 sm:w-28 h-36 sm:h-40 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200/60 dark:border-slate-800 p-2 flex flex-col justify-between rotate-3 transition-transform group-hover:rotate-6">
              <div>
                <div className="w-full h-16 bg-slate-100 dark:bg-slate-800 rounded-lg relative overflow-hidden flex items-center justify-center">
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

      // Default fallback
      default:
        return (
          <div className="flex items-center justify-center w-full h-full px-3 pt-3">
            <div className="w-56 h-36 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-3 flex flex-col justify-between">
              <div className="text-xs font-bold text-slate-800 dark:text-white">{project.title}</div>
              <p className="text-[10px] text-slate-500 line-clamp-2">{project.description}</p>
              <div className="flex gap-1 flex-wrap">
                {project.technologies.slice(0, 3).map((t) => (
                  <span key={t} className="text-[8px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-medium">
                    {t}
                  </span>
                ))}
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

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Category tag */}
            <span className={`text-xs font-bold uppercase tracking-wider ${themeConfig.tagColor} mb-2 block`}>
              {project.category}
            </span>

            {/* Title */}
            <h3
              onClick={() => setModalOpen(true)}
              className="text-xl sm:text-2xl font-extrabold text-[#0F172A] dark:text-white mb-2 leading-tight cursor-pointer hover:text-rose-500 transition-colors"
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-700/70 text-slate-500 dark:text-slate-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="text-xs font-bold text-[#0F172A] dark:text-white hover:text-rose-500 dark:hover:text-rose-400 flex items-center gap-1 transition-colors"
            >
              View Case Study <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} Live demo`}
                  className="p-2 rounded-xl text-slate-500 hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
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
