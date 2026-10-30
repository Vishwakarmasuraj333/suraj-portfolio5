"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Button } from "../ui/Button";
import { ResumeModal } from "../ui/ResumeModal";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
  Code2,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export function HeroSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Decorative ambient background blur lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-rose-200/40 dark:bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] sm:w-[450px] h-[300px] bg-amber-200/30 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Greeting, Main Headline, Description, CTAs & Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 order-2 lg:order-1">
            {/* Greeting pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold mb-6 shadow-xs backdrop-blur-sm">
              <span>Hi, I&apos;m Suraj Vishwakarma</span>
              <span className="text-base animate-bounce">👋</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-rose-500 mx-1" />
              <span className="hidden sm:inline-block text-rose-600 dark:text-rose-400 font-bold">Frontend Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.1] mb-6">
              I build digital <br />
              products <br />
              that <span className="text-rose-500 brush-underline">people love</span>
            </h1>

            {/* Description matching Resume */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed mb-8">
              Motivated Frontend Developer skilled in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript (ES6+)</strong>, <strong>ReactJS</strong>, and <strong>Tailwind CSS</strong>, focused on building clean, responsive, and user-friendly interfaces with fast, accessible web experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                href="#projects"
                className="w-full sm:w-auto shadow-button"
              >
                View My Work <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <button
                type="button"
                onClick={() => setResumeModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 font-bold text-sm shadow-soft transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-rose-500" /> View Resume
              </button>

              <a
                href={siteConfig.links.resume}
                download="Suraj_Vishwakarma_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-2xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                title="Download official PDF resume directly"
              >
                <Download className="w-4 h-4 text-rose-500" /> Download PDF
              </a>
            </div>

            {/* Let's connect Row with Real Profile Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200/70 dark:border-slate-800 w-full sm:w-auto">
              <span className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1 sm:mr-2">
                Let&apos;s connect
              </span>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                  className="p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-rose-500 hover:border-slate-900 dark:hover:border-rose-500 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                  className="p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0077B5] hover:border-[#0077B5] hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href={siteConfig.links.email}
                  aria-label="Send direct email"
                  title="Send Email: itxsurajofficial@gmail.com"
                  className="p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-rose-500 hover:border-rose-500 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href={siteConfig.links.phone}
                  aria-label="Phone contact"
                  title="Call: +91 93709 44696"
                  className="p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Section Image - Mast, Proper Bada & Fully Responsive */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[490px] xl:max-w-[530px] mx-auto group">
              {/* Layer 1: Vibrant Ambient Outer Glow */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-rose-500/30 via-pink-400/25 to-amber-300/30 rounded-[2.8rem] sm:rounded-[3.2rem] blur-2xl group-hover:blur-3xl transition-all duration-700 -z-20 opacity-80" />

              {/* Layer 2: Decorative Offset Pastel Card for Designer Depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-amber-100 dark:from-rose-950/40 dark:to-slate-800/60 rounded-[2.4rem] sm:rounded-[2.8rem] rotate-3 sm:rotate-4 scale-[1.02] -z-10 border-2 border-rose-200/70 dark:border-rose-900/50 transition-transform duration-500 group-hover:rotate-6" />

              {/* Layer 3: Main Image Card Container */}
              <div className="relative aspect-square w-full rounded-[2.2rem] sm:rounded-[2.6rem] overflow-hidden border-4 sm:border-8 border-white dark:border-slate-800 shadow-2xl shadow-rose-950/15 dark:shadow-black/60 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                {/* Hero Portrait Photo of Suraj Vishwakarma */}
                <Image
                  src="/images/suraj.jpg"
                  alt="Suraj Vishwakarma — Frontend Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 460px, 530px"
                  className="object-cover object-top sm:object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle bottom shadow vignette to enhance contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Top Right - "Available for Work" Status */}
              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20 backdrop-blur-md bg-white/95 dark:bg-slate-900/95 border border-white/80 dark:border-slate-700/80 rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-xl shadow-slate-900/10 flex items-center gap-2.5 hover:scale-105 transition-transform duration-300">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] sm:text-xs font-extrabold text-slate-900 dark:text-white leading-tight">
                    Available for Work
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                    Frontend Roles
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left - "Frontend Developer | React & Tailwind" */}
              <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 z-20 backdrop-blur-md bg-white/95 dark:bg-slate-900/95 border border-white/80 dark:border-slate-700/80 rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-xl shadow-slate-900/10 flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-xs">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                    Frontend Developer
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-rose-500 dark:text-rose-400">
                    ReactJS • Tailwind • JS
                  </span>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Right - "9.04 CGPA (A Grade)" Academic Honor */}
              <div className="hidden sm:flex absolute -bottom-3 -right-3 z-20 backdrop-blur-md bg-white/95 dark:bg-slate-900/95 border border-white/80 dark:border-slate-700/80 rounded-2xl px-3 sm:px-3.5 py-2 shadow-xl shadow-slate-900/10 items-center gap-2 hover:scale-105 transition-transform duration-300">
                <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-black text-slate-900 dark:text-white leading-tight">
                    9.04 CGPA
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                    University of Mumbai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
}
