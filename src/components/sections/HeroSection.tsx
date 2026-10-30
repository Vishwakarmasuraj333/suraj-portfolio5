"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "../ui/Button";
import { HeroDeskIllustration } from "../illustrations/HeroDeskIllustration";
import { ResumeModal } from "../ui/ResumeModal";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";

export function HeroSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Greeting, Main Headline, Description, CTAs & Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Greeting pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span>Hi, I&apos;m Suraj</span>
              <span className="text-base animate-bounce">👋</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.1] mb-6">
              I build digital <br />
              products <br />
              that <span className="text-rose-500 brush-underline">people love</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed mb-8">
              {siteConfig.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                href="#projects"
                className="w-full sm:w-auto shadow-button"
              >
                View My Work <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={() => setResumeModalOpen(true)}
                className="w-full sm:w-auto"
              >
                Download CV <Download className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Let's connect Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1 sm:mr-2">
                Let&apos;s connect
              </span>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 sm:p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-300 dark:hover:border-rose-500 hover:shadow-sm transition-all"
                >
                  <Github className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </a>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 sm:p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-300 dark:hover:border-rose-500 hover:shadow-sm transition-all"
                >
                  <Linkedin className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </a>

                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="p-2 sm:p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-300 dark:hover:border-rose-500 hover:shadow-sm transition-all"
                >
                  <Twitter className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </a>

                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2 sm:p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-300 dark:hover:border-rose-500 hover:shadow-sm transition-all"
                >
                  <Instagram className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </a>

                <a
                  href={siteConfig.links.email}
                  aria-label="Send direct email"
                  className="p-2 sm:p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-300 dark:hover:border-rose-500 hover:shadow-sm transition-all"
                >
                  <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Illustration Desk Scene */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroDeskIllustration className="w-full max-w-md sm:max-w-lg lg:max-w-none" />
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
}
