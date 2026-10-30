"use client";

import React, { useEffect } from "react";
import { X, Github, Linkedin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "../ui/Button";
import { ThemeToggle } from "./ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
}

export function MobileMenu({
  isOpen,
  activeSection,
  onClose,
}: MobileMenuProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#FCFAF8] dark:bg-[#0B1120] border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center">
            <span className="font-extrabold text-2xl tracking-tight text-[#0F172A] dark:text-white">
              SV
            </span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500 ml-0.5" />
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              type="button"
              aria-label="Close navigation menu"
              className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Links List */}
        <nav className="flex flex-col py-6 space-y-3.5">
          {siteConfig.navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className={`text-base font-bold transition-all py-1.5 flex items-center justify-between ${
                  isActive
                    ? "text-rose-500 pl-3 border-l-4 border-rose-500"
                    : "text-slate-700 dark:text-slate-200 hover:text-rose-500 dark:hover:text-rose-400 hover:pl-2"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <Button
            variant="primary"
            size="md"
            href="#contact"
            className="w-full flex items-center justify-center gap-2"
            onClick={onClose}
          >
            Let&apos;s Talk <ArrowRight className="w-4 h-4 ml-0.5" />
          </Button>

          <div className="flex items-center justify-center gap-4 text-slate-600 dark:text-slate-400">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-300 bg-white dark:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 hover:border-rose-300 bg-white dark:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
