"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormInput } from "@/lib/validation";
import { siteConfig } from "@/lib/site-config";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertTriangle,
  Github,
  Linkedin,
  MapPin,
  Loader2,
  Copy,
  Check,
  Phone,
  FileText,
} from "lucide-react";
import { Button } from "../ui/Button";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.rawEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.links.rawPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();

      if (response.ok && resJson.success) {
        setSubmitResult({
          success: true,
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.",
        });
        reset();
        try {
          confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.7 },
            colors: ["#F43F5E", "#10B981", "#3B82F6", "#F59E0B"],
          });
        } catch {
          // Ignore
        }
      } else {
        setSubmitResult({
          success: false,
          message: resJson.error || "Unable to send message right now. Please email directly.",
        });
      }
    } catch {
      setSubmitResult({
        success: false,
        message: "Network error occurred. Please contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden bg-[#FAF7F2] dark:bg-[#0E1528] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold text-rose-500 uppercase tracking-widest mb-2 block font-sans">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.2] mb-3">
            Let&apos;s Build Together ✉️
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Have a project in mind, a question about my work, or want to discuss full-stack opportunities? Drop a line below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct info & social cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick contact box: Email & Phone */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-soft space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-2">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-750">
                  <a
                    href={siteConfig.links.email}
                    className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate hover:text-rose-500"
                  >
                    {siteConfig.links.rawEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-white dark:hover:bg-slate-800 transition-all shrink-0"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-2">
                  Phone / WhatsApp
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-750">
                  <a
                    href={siteConfig.links.phone}
                    className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate hover:text-rose-500"
                  >
                    {siteConfig.links.rawPhone}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-white dark:hover:bg-slate-800 transition-all shrink-0"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  download="Suraj_Vishwakarma_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 font-bold text-xs transition-colors"
                >
                  <FileText className="w-4 h-4" /> Download Official Resume (PDF)
                </a>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-soft space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 dark:text-rose-400">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Location</div>
                  <div className="text-slate-500 dark:text-slate-400">{siteConfig.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/80">
                <span className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Status</div>
                  <div className="text-slate-500 dark:text-slate-400">{siteConfig.availability}</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-soft">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-3">
                Developer Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800/90 rounded-3xl p-6 sm:p-9 border border-slate-200/80 dark:border-slate-700/80 shadow-soft">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. John Doe"
                  {...register("name")}
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 transition-all ${
                    errors.name ? "border-rose-400 focus:ring-2 focus:ring-rose-200" : "border-slate-200 dark:border-slate-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-rose-500 font-semibold">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 transition-all ${
                    errors.email ? "border-rose-400 focus:ring-2 focus:ring-rose-200" : "border-slate-200 dark:border-slate-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-rose-500 font-semibold">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Project Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Full-Stack Web Application / Consulting"
                  {...register("subject")}
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 transition-all ${
                    errors.subject ? "border-rose-400 focus:ring-2 focus:ring-rose-200" : "border-slate-200 dark:border-slate-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950"
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-rose-500 font-semibold">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project, timeline, or requirements..."
                  {...register("message")}
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 transition-all resize-none ${
                    errors.message ? "border-rose-400 focus:ring-2 focus:ring-rose-200" : "border-slate-200 dark:border-slate-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:focus:ring-rose-950"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-500 font-semibold">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Feedback */}
              {submitResult && (
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm font-medium flex items-start gap-2.5 ${
                    submitResult.success
                      ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                      : "bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
                  }`}
                >
                  {submitResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                  )}
                  <span>{submitResult.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                className="w-full shadow-button"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" /> Sending message...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-1.5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
