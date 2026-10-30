import { EducationItem, JourneyMilestone } from "@/types";

export const educationList: EducationItem[] = [
  {
    degree: "Master of Science in Information Technology (M.Sc. IT)",
    institution: "Abhinav College",
    location: "Bhayandar, Maharashtra, India",
    period: "2025 — Present",
    status: "Pursuing",
    cgpa: "Ongoing",
    description:
      "Advanced postgraduate study concentrating on distributed software systems, enterprise full-stack architectures, advanced database engineering, and machine-learning integrations.",
    highlights: [
      "Specializing in modern full-stack web and cloud architectures",
      "Investigating scalable microservice design patterns and real-time data pipelines",
      "Hands-on research in algorithm efficiency and production web reliability",
    ],
  },
  {
    degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
    institution: "Abhinav College",
    location: "Bhayandar, Maharashtra, India",
    period: "2022 — 2025",
    status: "Completed",
    cgpa: "9.0 CGPA (Outstanding Grade)",
    description:
      "Rigorous undergraduate program encompassing computer science fundamentals, data structures & algorithms, web technologies, software engineering, and database management systems.",
    highlights: [
      "Achieved an exceptional 9.0 CGPA reflecting deep academic and practical rigor",
      "Graduated with top honors in Information Technology coursework",
      "Spearheaded technical development in laboratory capstone software projects",
      "Built production-ready MERN stack applications with clean code standards",
    ],
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2025 — Present",
    title: "Postgraduate M.Sc. IT & Advanced Distributed Systems",
    category: "Full Stack Milestone",
    description:
      "Pursuing M.Sc. in Information Technology at Abhinav College. Engineering scalable full-stack web applications with Next.js, FastAPI, and machine learning explainability pipelines.",
    keyLearnings: [
      "Translating complex microservice architectures into intuitive user interfaces",
      "High performance asynchronous API design with Python & Node.js",
      "Advanced database optimization and document modeling",
    ],
    technologies: ["Next.js", "React", "Node.js", "Python", "FastAPI", "MongoDB"],
  },
  {
    year: "2022 — 2025",
    title: "B.Sc. Information Technology (9.0 CGPA) & Certification",
    category: "Foundations",
    description:
      "Graduated with top honors (9.0 CGPA) from Abhinav College, Bhayandar. Earned the Simplilearn JavaScript and Web Development certification.",
    keyLearnings: [
      "Core computer science algorithms, data structures, and relational databases",
      "Modern JavaScript (ES6+), DOM architecture, and full-stack component systems",
      "Production-ready MERN applications with defensive error handling",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
];
