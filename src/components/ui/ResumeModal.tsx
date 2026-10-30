"use client";

import React, { useEffect } from "react";
import {
  X,
  Download,
  CheckCircle2,
  GraduationCap,
  Award,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  FolderGit2,
  Printer,
} from "lucide-react";
import { Button } from "./Button";
import { siteConfig } from "@/lib/site-config";
import { certifications } from "@/lib/skills";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl text-slate-800 dark:text-slate-200 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close resume preview"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 pr-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-xs font-bold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Resume • Official Profile
            </div>
            <h2 id="resume-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white">
              Suraj Vishwakarma
            </h2>
            <p className="text-sm font-semibold text-rose-500 mt-0.5">
              Frontend Developer • B.Sc. IT (9.04 CGPA - A Grade)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/resume.pdf"
              download="Suraj_Vishwakarma_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-button transition-all"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> View PDF
            </a>
            <button
              onClick={handlePrint}
              type="button"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
              aria-label="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6 text-sm">
          {/* Contact summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-750 text-xs text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-rose-500 shrink-0" />
              <a href={siteConfig.links.email} className="truncate hover:text-rose-500 font-medium">
                {siteConfig.links.rawEmail}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-rose-500 shrink-0" />
              <a href={siteConfig.links.phone} className="hover:text-rose-500 font-medium">
                {siteConfig.links.rawPhone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-rose-500 shrink-0" />
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 dark:text-rose-400 hover:underline font-semibold"
              >
                GitHub: Vishwakarmasuraj333
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-rose-500 shrink-0" />
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 dark:text-rose-400 hover:underline font-semibold"
              >
                LinkedIn: suraj-vishwakarma
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30">
            <h3 className="font-bold text-xs uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1.5">
              Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {siteConfig.description}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-bold text-base text-[#0F172A] dark:text-white mb-3 flex items-center gap-2">
              Technical Skills
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-slate-800 dark:text-slate-200 min-w-20">Frontend:</span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-semibold">
                  HTML5
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-semibold">
                  CSS3
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-semibold">
                  JavaScript (ES6+)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-semibold">
                  ReactJS
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-slate-800 dark:text-slate-200 min-w-20">Libraries:</span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold">
                  Bootstrap
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 font-semibold">
                  Tailwind CSS
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-slate-800 dark:text-slate-200 min-w-20">Tools & Workflow:</span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                  Git / GitHub
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-semibold">
                  AI Debugging & Optimization Tools
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                  REST APIs
                </span>
              </div>
            </div>
          </div>

          {/* Projects from Resume */}
          <div>
            <h3 className="font-bold text-base text-[#0F172A] dark:text-white mb-3 flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-rose-500" /> Featured Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Portfolio Website</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Responsive personal portfolio showcasing skills, achievements, and projects.
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">ReactJS</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">Tailwind CSS</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">ToDo List App</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Task management app built using JavaScript and React fundamentals.
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">JavaScript</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">ReactJS</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Weather App</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Real-time weather and forecast app using live weather API.
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">Live API</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">ReactJS</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Admin Dashboard</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Responsive dashboard with metrics, charts, and UI components.
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">Charts</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">Tailwind CSS</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 sm:col-span-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Mini E-commerce UI</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Frontend product layout and interactive shopping UI with fluid catalog and cart drawer.
                </p>
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">Product UI</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">Cart Flow</span>
                </div>
              </div>
            </div>

            {/* Project Accomplishments bullet points */}
            <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-xs space-y-1.5">
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                Project Accomplishments:
              </span>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                <li>Built and deployed real-world web projects using HTML, CSS, JavaScript, ReactJS.</li>
                <li>Created responsive UI and improved performance across devices.</li>
                <li>Used Git/GitHub for version control and project management.</li>
                <li>Experienced with AI tools for debugging and workflow optimization.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-bold text-base text-[#0F172A] dark:text-white mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-rose-500" /> Education
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl border-2 border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      B.Sc. Information Technology
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      University of Mumbai • 2022 – 2025
                    </p>
                  </div>
                  <span className="inline-block self-start sm:self-auto text-xs font-black px-3 py-1 rounded-full bg-rose-500 text-white shadow-xs">
                    CGPA: 9.04 (A Grade)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-750 bg-white dark:bg-slate-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Higher Secondary Certificate (12th)</h4>
                      <p className="text-slate-500 text-[11px]">IT–Maths • 2021 – 2022</p>
                    </div>
                    <span className="font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                      55%
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-750 bg-white dark:bg-slate-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">Secondary School Certificate (10th)</h4>
                      <p className="text-slate-500 text-[11px]">General • 2019 – 2020</p>
                    </div>
                    <span className="font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                      66%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-bold text-base text-[#0F172A] dark:text-white mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-rose-500" /> Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {certifications.map((c, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/40 dark:bg-amber-950/20"
                >
                  <div className="font-bold text-slate-900 dark:text-white">{c.title}</div>
                  <div className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold">{c.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <a
            href="/resume.pdf"
            download="Suraj_Vishwakarma_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-button transition-all"
          >
            <Download className="w-4 h-4" /> Download Official Resume (PDF)
          </a>

          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Preview
          </Button>
        </div>
      </div>
    </div>
  );
}
