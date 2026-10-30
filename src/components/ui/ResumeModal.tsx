"use client";

import React, { useEffect } from "react";
import { X, Download, CheckCircle2, GraduationCap, Award, ExternalLink, Mail, MapPin } from "lucide-react";
import { Button } from "./Button";
import { siteConfig } from "@/lib/site-config";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 dark:text-slate-200 max-h-[90vh] overflow-y-auto"
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 pr-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-xs font-bold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Profile
            </div>
            <h2 id="resume-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white">
              Suraj Vishwakarma
            </h2>
            <p className="text-sm font-semibold text-rose-500 mt-0.5">
              Full Stack Developer • B.Sc. IT (9.0 CGPA)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={handlePrint}
              className="gap-1.5"
            >
              <Download className="w-4 h-4" /> Save / Print
            </Button>
          </div>
        </div>

        {/* Details Grid */}
        <div className="py-6 space-y-6 text-sm">
          {/* Contact summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-750 text-xs text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-rose-500" />
              <span>{siteConfig.links.rawEmail}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>{siteConfig.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-rose-500" />
              <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">
                GitHub: Vishwakarmasuraj333
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-rose-500" />
              <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline">
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-bold text-base text-[#0F172A] dark:text-white mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-rose-500" /> Education
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-750 bg-white dark:bg-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Master of Science in Information Technology (M.Sc. IT)</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Abhinav College, Bhayandar</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                    2025 — Present (Pursuing)
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/30">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Bachelor of Science in Information Technology (B.Sc. IT)</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Abhinav College, Bhayandar</p>
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-rose-500 text-white shadow-sm">
                    9.0 CGPA
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 font-medium">
                  Completed in 2025 with Outstanding Academic Performance and practical leadership in full-stack project implementations.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Certification */}
          <div>
            <h3 className="font-bold text-base text-[#0F172A] dark:text-white mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-rose-500" /> Verified Certification
            </h3>
            <div className="p-4 rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/30">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Simplilearn JavaScript and Web Development Certificate</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Issued by Simplilearn</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  Certified
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                Covers modern JavaScript (ES6+), DOM architecture, asynchronous APIs, responsive web design, and full-stack integration.
              </p>
            </div>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h3 className="font-bold text-base text-[#0F172A] dark:text-white mb-3">Core Technical Skills</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript (ES6+)",
                "Node.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "Tailwind CSS",
                "RESTful APIs",
                "Git & GitHub",
                "Postman",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Preview
          </Button>
        </div>
      </div>
    </div>
  );
}
