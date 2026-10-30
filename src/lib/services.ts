import { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "mobile-web-dev",
    title: "Mobile App & Web Development",
    description:
      "Cross-platform responsive apps using React, Next.js, React Native, and modern component architectures for seamless mobile & desktop experiences.",
    iconType: "mobile",
    pastelColor: "purple",
    skills: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "React Native"],
    deliverables: [
      "Responsive, mobile-first design with 60fps animations",
      "Progressive Web App (PWA) readiness & offline caching",
      "SEO & Core Web Vitals optimization (95+ Lighthouse)",
      "Accessible ARIA compliant user interfaces",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Prototyping",
    description:
      "Beautiful, intuitive and user-friendly designs that engage users, built with modern design systems and pixel-perfect attention to detail.",
    iconType: "uiux",
    pastelColor: "pink",
    skills: ["Figma to Code", "Design Systems", "Framer Motion", "Micro-interactions", "User Flows"],
    deliverables: [
      "Intuitive interaction patterns and joyful micro-animations",
      "Consistent typography, color tokens, and spacing grids",
      "Interactive wireframing & component library creation",
      "High usability and accessibility across all screen sizes",
    ],
  },
  {
    id: "backend-integration",
    title: "Backend & API Integration",
    description:
      "Scalable RESTful APIs, Node.js & Express architectures, secure JWT authentication, and structured database engineering with MongoDB & SQL.",
    iconType: "backend",
    pastelColor: "yellow",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "JWT Auth"],
    deliverables: [
      "Robust REST & GraphQL API endpoints with input validation",
      "Scalable database schema design & indexing",
      "Secure authentication, token rotation, and password hashing",
      "Webhook & third-party payment gateway integration",
    ],
  },
  {
    id: "testing-maintenance",
    title: "Testing & Maintenance",
    description:
      "Bug fixing, performance audits, Lighthouse optimization, automated testing, and ongoing maintenance to keep your applications running reliably.",
    iconType: "testing",
    pastelColor: "green",
    skills: ["Performance Profiling", "Lighthouse 95+", "Clean Code", "Bug Fixing", "CI/CD & Git"],
    deliverables: [
      "Zero layout shift (CLS) & rapid First Contentful Paint (FCP)",
      "Code refactoring & defensive error boundaries",
      "Continuous deployment pipelines on Vercel & cloud hosting",
      "Security patches, dependency upgrades & real-time monitoring",
    ],
  },
];
