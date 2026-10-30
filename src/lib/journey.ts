import { EducationItem, JourneyMilestone } from "@/types";

export const educationList: EducationItem[] = [
  {
    degree: "Master of Science in Information Technology (M.Sc. IT)",
    institution: "Abhinav College, University of Mumbai",
    location: "Bhayandar, Mumbai, Maharashtra, India",
    period: "2025 — Present",
    status: "Pursuing",
    cgpa: "Currently Enrolled",
    description:
      "Advanced postgraduate study in Information Technology specializing in distributed architectures, modern full-stack web systems, and cloud integration.",
    highlights: [
      "Advanced research in distributed systems & microservices",
      "Specializing in modern full-stack web and cloud architectures",
      "Abhinav College, Bhayandar postgraduate scholar",
    ],
  },
  {
    degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
    institution: "Abhinav College, University of Mumbai",
    location: "Bhayandar, Mumbai, Maharashtra, India",
    period: "2022 — 2025",
    status: "Completed",
    cgpa: "CGPA: 9.04 (A Grade)",
    description:
      "Comprehensive undergraduate degree covering software engineering, frontend web technologies, core algorithms, data structures, and database systems. Graduated with top academic honors.",
    highlights: [
      "Graduated with top academic distinction scoring an impressive 9.04 CGPA (A Grade)",
      "Specialized in modern frontend web technologies, JavaScript (ES6+), and ReactJS",
      "Built real-world deployed web applications with Git/GitHub version control",
      "Studied at Abhinav College, Bhayandar (affiliated with University of Mumbai)",
    ],
  },
  {
    degree: "Higher Secondary Certificate (12th), IT–Maths",
    institution: "Maharashtra State Board",
    location: "Mumbai, Maharashtra, India",
    period: "2021 — 2022",
    status: "Completed",
    cgpa: "Percentage: 55%",
    description:
      "Higher Secondary Education with focus on Information Technology and Mathematics, building analytical thinking and computational fundamentals.",
    highlights: [
      "Focused on Information Technology (IT) and Mathematics",
      "Developed foundational programming and mathematical reasoning skills",
    ],
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "Maharashtra State Board",
    location: "Mumbai, Maharashtra, India",
    period: "2019 — 2020",
    status: "Completed",
    cgpa: "Percentage: 66%",
    description:
      "Secondary education covering core sciences, mathematics, and computer literacy.",
    highlights: [
      "Strong academic foundation across sciences and mathematics",
    ],
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2025 — Present",
    title: "Postgraduate M.Sc. in Information Technology",
    category: "Full Stack Milestone",
    description:
      "Pursuing M.Sc. in Information Technology at Abhinav College, Bhayandar, advancing skills in scalable web systems and modern frameworks.",
    keyLearnings: [
      "Enterprise full-stack engineering and distributed systems",
      "High performance web applications with modern React & Next.js",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    year: "2022 — 2025",
    title: "B.Sc. in Information Technology (9.04 CGPA - A Grade)",
    category: "Foundations",
    description:
      "Graduated with top honors (9.04 CGPA, A Grade) from Abhinav College, Bhayandar (University of Mumbai). Mastered ReactJS, JavaScript (ES6+), and earned verified certifications from FreeCodeCamp and Simplilearn.",
    keyLearnings: [
      "Building clean, responsive, and user-friendly web interfaces",
      "Component lifecycle, React fundamentals, hooks, and modern CSS3/Tailwind",
      "Git/GitHub version control, project management, and AI debugging workflows",
    ],
    technologies: ["ReactJS", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Git"],
  },
];
