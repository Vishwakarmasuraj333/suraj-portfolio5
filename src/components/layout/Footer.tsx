"use client";

import React from "react";
import { siteConfig } from "@/lib/site-config";
import { Github, Linkedin, Mail, Phone, ArrowUp, Heart, FileText } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0C162C] text-slate-300 overflow-hidden">
      {/* Top subtle organic wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 text-[#FAF7F2] dark:text-[#0E1528] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,30 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Monogram & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 border border-slate-700">
                <span className="font-black text-base text-white font-sans">
                  SV
                </span>
              </div>
              <div className="flex flex-col text-left pl-2 border-l border-slate-700">
                <span className="font-bold text-base text-white leading-tight">
                  Suraj Vishwakarma
                </span>
                <span className="text-xs text-rose-400 font-medium">
                  Frontend Developer • ReactJS Specialist
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal pt-2">
              Building clean, responsive, and user-friendly web interfaces. Focused on performance optimization, clean code, and fast web experiences.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub: Vishwakarmasuraj333"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-rose-500 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn: suraj-vishwakarma"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-[#0077B5] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.links.email}
                aria-label="Email"
                title="Email: itxsurajofficial@gmail.com"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-rose-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.links.phone}
                aria-label="Phone"
                title="Phone: +91 93709 44696"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.links.resume}
                download="Suraj_Vishwakarma_Resume.pdf"
                aria-label="Download Resume"
                title="Download Official Resume PDF"
                className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-rose-600 transition-colors"
              >
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-rose-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Projects */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Projects
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#projects" className="hover:text-rose-400 transition-colors">
                  Portfolio Website
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-rose-400 transition-colors">
                  ToDo List App
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-rose-400 transition-colors">
                  Weather App
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-rose-400 transition-colors">
                  Admin Dashboard
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-rose-400 transition-colors">
                  Mini E-commerce UI
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div>
                <span className="block text-[11px] text-slate-500 font-semibold uppercase">Email</span>
                <a
                  href={`mailto:${siteConfig.links.rawEmail}`}
                  className="hover:text-rose-400 transition-colors break-all"
                >
                  {siteConfig.links.rawEmail}
                </a>
              </div>
              <div className="pt-1">
                <span className="block text-[11px] text-slate-500 font-semibold uppercase">Phone</span>
                <a
                  href={`tel:${siteConfig.links.rawPhone.replace(/\s+/g, '')}`}
                  className="hover:text-rose-400 transition-colors"
                >
                  {siteConfig.links.rawPhone}
                </a>
              </div>
              <div className="pt-1">
                <span className="block text-[11px] text-slate-500 font-semibold uppercase">Location</span>
                <span>{siteConfig.location}</span>
              </div>
              <div className="pt-1">
                <span className="block text-[11px] text-slate-500 font-semibold uppercase">Availability</span>
                <span className="text-emerald-400 font-medium">Open to frontend roles & projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {siteConfig.name}. Built with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> & Next.js.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
