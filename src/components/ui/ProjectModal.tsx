"use client";

import React, { useEffect } from "react";
import { Project } from "@/types";
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from "lucide-react";
import { Button } from "./Button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 dark:text-slate-200 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Status */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/50">
            {project.category}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white mb-1">
          {project.title}
        </h2>
        <p className="text-sm font-semibold text-rose-500 mb-6">
          {project.subtitle}
        </p>

        {/* Long Description */}
        <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
          <p>{project.longDescription}</p>
        </div>

        {/* Implemented Features */}
        <div className="mb-6 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-750">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-white mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Key Features & Capabilities
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {project.features.implemented.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Highlights */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3 flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-rose-500" /> Architectural Highlights
          </h3>
          <div className="space-y-2">
            {project.architectureHighlights.map((arch, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2.5"
              >
                <Layers className="w-4 h-4 text-rose-500 shrink-0" />
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Badges */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveDemo && (
              <Button
                variant="primary"
                size="sm"
                href={project.liveDemo}
                isExternal
                className="gap-1.5"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </Button>
            )}

            {project.repository && (
              <Button
                variant="secondary"
                size="sm"
                href={project.repository}
                isExternal
                className="gap-1.5"
              >
                <Github className="w-4 h-4" /> Source Code
              </Button>
            )}
          </div>

          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
