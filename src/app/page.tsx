import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactCtaBanner } from "@/components/sections/ContactCtaBanner";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section matching reference composition */}
      <HeroSection />

      {/* 2. About Me Wavy Section with Developer Illustration & 4 Stat Badges */}
      <AboutSection />

      {/* 3. Services I Provide (What I do) */}
      <ServicesSection />

      {/* 4. Selected Work (Foodly, Shopio, WalletWise, FitTrack + Modals) */}
      <ProjectsSection />

      {/* 5. "Have an idea? Let's build something great together!" CTA Banner with High-Five Illustration */}
      <ContactCtaBanner />

      {/* 6. Technical Stack & Categorized Skills */}
      <SkillsSection />

      {/* 7. Education & Certifications (Abhinav College, 9 CGPA, M.Sc. IT, Simplilearn) */}
      <EducationSection />

      {/* 8. Interactive Contact Section */}
      <ContactSection />
    </>
  );
}
