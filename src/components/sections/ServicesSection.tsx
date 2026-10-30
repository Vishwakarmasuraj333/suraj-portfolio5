"use client";

import React, { useState } from "react";
import { services } from "@/lib/services";
import { ServiceItem } from "@/types";
import {
  Smartphone,
  LayoutGrid,
  Cloud,
  Bug,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
} from "lucide-react";

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (type: ServiceItem["iconType"]) => {
    switch (type) {
      case "mobile":
        return Smartphone;
      case "uiux":
        return LayoutGrid;
      case "backend":
        return Cloud;
      case "testing":
        return Bug;
    }
  };

  const getThemeClasses = (color: ServiceItem["pastelColor"]) => {
    switch (color) {
      case "purple":
        return {
          iconBg: "bg-purple-100 dark:bg-purple-950/70",
          iconColor: "text-purple-600 dark:text-purple-400",
          hoverBorder: "hover:border-purple-300 dark:hover:border-purple-500",
        };
      case "pink":
        return {
          iconBg: "bg-rose-100 dark:bg-rose-950/70",
          iconColor: "text-rose-600 dark:text-rose-400",
          hoverBorder: "hover:border-rose-300 dark:hover:border-rose-500",
        };
      case "yellow":
        return {
          iconBg: "bg-amber-100 dark:bg-amber-950/70",
          iconColor: "text-amber-600 dark:text-amber-400",
          hoverBorder: "hover:border-amber-300 dark:hover:border-amber-500",
        };
      case "green":
        return {
          iconBg: "bg-emerald-100 dark:bg-emerald-950/70",
          iconColor: "text-emerald-600 dark:text-emerald-400",
          hoverBorder: "hover:border-emerald-300 dark:hover:border-emerald-500",
        };
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest mb-2 block font-sans">
              What I do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2] flex items-center gap-2">
              Services I provide <span className="text-rose-500 font-serif">✻</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md font-normal leading-relaxed">
            I help startups and businesses build powerful digital products from concept to launch.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {services.map((service) => {
            const Icon = getIcon(service.iconType);
            const styling = getThemeClasses(service.pastelColor);

            return (
              <div
                key={service.id}
                className={`bg-white dark:bg-slate-800/90 rounded-3xl p-7 border border-slate-200/80 dark:border-slate-700/80 shadow-soft hover-lift flex flex-col justify-between transition-all duration-300 ${styling.hoverBorder}`}
              >
                <div>
                  {/* Pastel Icon Box */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${styling.iconBg} ${styling.iconColor} flex items-center justify-center mb-6 shadow-xs`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Read more Link */}
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F172A] dark:text-slate-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors pt-2 group"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-750 shadow-2xl text-slate-800 dark:text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="p-3 rounded-2xl bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400">
                <Sparkles className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-[#0F172A] dark:text-white">
                  {selectedService.title}
                </h3>
                <span className="text-xs text-rose-500 font-bold uppercase tracking-wider">
                  Service Overview
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                Key Deliverables
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Badges */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
              {selectedService.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
