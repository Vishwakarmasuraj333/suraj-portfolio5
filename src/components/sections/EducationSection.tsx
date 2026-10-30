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
  BookOpen,
} from "lucide-react";

export function EducationSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const education = [
    {
      degree: "B.Sc. Information Technology",
      institution: "University of Mumbai",
      location: "Mumbai, Maharashtra, India",
      period: "2022 — 2025",
      score: "9.04 CGPA (A Grade)",
      scoreBadge: "bg-rose-500 text-white",
      description:
        "Comprehensive undergraduate degree covering software engineering, data structures, algorithms, frontend frameworks, and database architecture. Completed with outstanding academic honors.",
      highlights: [
        "CGPA: 9.04 (A Grade Distinction)",
        "Specialized in Frontend Development & ReactJS",
        "Built production web applications with Git/GitHub",
      ],
      featured: true,
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "Maharashtra State Board",
      location: "Mumbai, Maharashtra, India",
      period: "2021 — 2022",
      score: "55% (IT–Maths Stream)",
      scoreBadge: "bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300",
      description:
        "Higher Secondary education with specialization in Information Technology and Mathematics, establishing algorithmic and logical thinking.",
      highlights: ["Information Technology (IT)", "Mathematics & Statistics"],
      featured: false,
    },
    {
      degree: "Secondary School Certificate (10th)",
      institution: "Maharashtra State Board",
      location: "Mumbai, Maharashtra, India",
      period: "2019 — 2020",
      score: "66%",
      scoreBadge: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
      description:
        "Secondary School Certificate with foundational training in general sciences, mathematics, and computer basics.",
      highlights: ["Science & Mathematics", "Foundational Computer Literacy"],
      featured: false,
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest mb-2 block font-sans">
              Credentials & Background
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2]">
              Education & Certifications 🎓
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md font-normal leading-relaxed">
            Formal technical degrees, academic distinction (9.04 CGPA), and verified certifications from FreeCodeCamp and Simplilearn.
          </p>
        </div>

        {/* Education Grid */}
        <div className="mb-14">
          <h3 className="text-xl font-extrabold text-[#0F172A] dark:text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-rose-500" /> Academic Qualifications
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-7 shadow-soft hover-lift flex flex-col justify-between relative overflow-hidden bg-white dark:bg-slate-800/90 border transition-all ${
                  edu.featured
                    ? "border-2 border-rose-300 dark:border-rose-900/60 ring-4 ring-rose-50 dark:ring-rose-950/20"
                    : "border-slate-200/80 dark:border-slate-700/80"
                }`}
              >
                {/* Top Badge */}
                <div className={`absolute top-0 right-0 text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-bl-2xl shadow-xs ${edu.scoreBadge}`}>
                  {edu.score}
                </div>

                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    edu.featured
                      ? "bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400"
                      : "bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300"
                  }`}>
                    {edu.featured ? <GraduationCap className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">
                    {edu.period} • {edu.institution}
                  </span>

                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-2 leading-snug">
                    {edu.degree}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" /> {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-rose-500" /> {edu.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80">
                  <div className="flex flex-wrap gap-1.5">
                    {edu.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/50 px-2.5 py-1 rounded-lg"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-xl font-extrabold text-[#0F172A] dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" /> Verified Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.credentialId}
                className="bg-white dark:bg-slate-800/90 rounded-3xl p-5 sm:p-6 border border-amber-200/80 dark:border-amber-900/50 shadow-soft hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                    {cert.issuer}
                  </span>

                  <h4 className="text-base font-bold text-[#0F172A] dark:text-white mb-2 leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4 line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/80">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold text-xs transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> View Credential
                  </button>
                </div>
              </div>
            ))}
          </div>
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
                <h3 className="text-xl font-extrabold text-[#0F172A] dark:text-white">
                  Verified Certificate
                </h3>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                  {selectedCert.issuer} Certification
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-slate-800/60 border border-amber-200 dark:border-amber-900/50 mb-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                {selectedCert.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                Awarded to: <strong>Suraj Vishwakarma</strong>
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                <div>Credential ID: <span className="font-mono font-bold text-slate-700 dark:text-slate-200">{selectedCert.credentialId}</span></div>
                <div>Status: <span className="text-emerald-600 dark:text-emerald-400 font-bold">Verified & Active</span></div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {selectedCert.description}
            </p>

            <div className="mb-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
                Core Competencies Covered
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
