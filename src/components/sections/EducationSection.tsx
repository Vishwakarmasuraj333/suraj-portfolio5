"use client";

import React, { useState } from "react";
import { certifications } from "@/lib/skills";
import { CertificateItem } from "@/types";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  X,
  Sparkles,
} from "lucide-react";

export function EducationSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="education" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest mb-2 block font-sans">
              Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2]">
              Education & Certifications 🎓
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md font-normal leading-relaxed">
            Formal technical foundations, academic honors, and verified industry credentials.
          </p>
        </div>

        {/* Education & Certification Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
          {/* Degree 1: B.Sc. IT (Topper / 9 CGPA) */}
          <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-7 border-2 border-rose-200/90 dark:border-rose-900/60 shadow-soft hover-lift flex flex-col justify-between relative overflow-hidden">
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-rose-500 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-bl-2xl shadow-xs">
              9.0 CGPA Score
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">
                Completed 2025 • Graduated
              </span>

              <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2 leading-snug">
                Bachelor of Science in Information Technology (B.Sc. IT)
              </h3>

              <div className="flex flex-col gap-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Abhinav College, Bhayandar</span>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" /> Bhayandar, Mumbai
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-rose-500" /> 2022 — 2025
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
                Completed with an outstanding <strong>9.0 CGPA</strong>, mastering software engineering, algorithms, data structures, and relational database systems.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-3 py-1.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-rose-500" /> Academic Excellence Honor
              </span>
            </div>
          </div>

          {/* Degree 2: M.Sc. IT (Pursuing) */}
          <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-7 border border-slate-200/80 dark:border-slate-700/80 shadow-soft hover-lift flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-1">
                2025 — Present • Currently Pursuing
              </span>

              <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2 leading-snug">
                Master of Science in Information Technology (M.Sc. IT)
              </h3>

              <div className="flex flex-col gap-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Abhinav College, Bhayandar</span>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-500" /> Bhayandar, Mumbai
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-500" /> Post-Graduate
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
                Advancing research in distributed systems, advanced full-stack enterprise architecture, real-time microservices, and modern web application security.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-3 py-1.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-purple-500" /> Enrolled Postgraduate Scholar
              </span>
            </div>
          </div>

          {/* Certification Card: Simplilearn */}
          {certifications.map((cert) => (
            <div
              key={cert.credentialId}
              className="bg-white dark:bg-slate-800/90 rounded-3xl p-7 border border-amber-200/80 dark:border-amber-900/60 shadow-soft hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                  Industry Credential • Verified
                </span>

                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                <div className="flex flex-col gap-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Issuer: {cert.issuer}</span>
                  <span className="text-slate-400">ID: {cert.credentialId}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold text-xs transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> View Credential Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-750 shadow-2xl text-slate-800 dark:text-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="p-3 rounded-2xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400">
                <Award className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-[#0F172A] dark:text-white">
                  Verified Certificate
                </h3>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                  Simplilearn Certification
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-slate-800/60 border border-amber-200 dark:border-amber-900/50 mb-5">
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                {selectedCert.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                Issued to: <strong>Suraj Vishwakarma</strong>
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <div>Credential ID: <span className="font-mono font-bold text-slate-700 dark:text-slate-200">{selectedCert.credentialId}</span></div>
                <div>Issued Year: <span className="font-semibold text-slate-700 dark:text-slate-200">{selectedCert.issueDate}</span></div>
                <div>Status: <span className="text-emerald-600 dark:text-emerald-400 font-bold">Active & Verified</span></div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
              {selectedCert.description}
            </p>

            <div className="mb-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
                Core Competencies Tested
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="w-full py-2.5 rounded-xl bg-[#0F172A] dark:bg-rose-500 text-white font-bold text-sm hover:bg-[#1E293B] dark:hover:bg-rose-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
