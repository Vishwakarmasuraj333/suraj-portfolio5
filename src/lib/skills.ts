import { SkillItem, CertificateItem } from "@/types";

export const skillsList: SkillItem[] = [
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    description: "Component lifecycle, custom hooks, context API, and server components.",
    iconName: "React",
    level: "Advanced",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "App router, SSR, SSG, dynamic routing, and API routes.",
    iconName: "Next",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Type safety, generics, interfaces, and strict compiler configurations.",
    iconName: "TypeScript",
    level: "Proficient",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first design systems, responsive layouts, and custom themes.",
    iconName: "Tailwind",
    level: "Advanced",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    description: "Async/await, closures, promises, event loop, and modern browser APIs.",
    iconName: "JavaScript",
    level: "Expert",
  },
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    description: "Semantic elements, accessibility (WCAG), CSS grid, flexbox, and animations.",
    iconName: "HTML5",
    level: "Expert",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    description: "Event-driven runtime, streams, file system, and npm packaging.",
    iconName: "Node",
    level: "Advanced",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Middleware pipelines, RESTful routing, CORS, and request validation.",
    iconName: "Express",
    level: "Advanced",
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "API design, status codes, documentation, and error handling patterns.",
    iconName: "API",
    level: "Advanced",
  },
  {
    name: "Python",
    category: "Backend",
    description: "FastAPI endpoints, asynchronous processing, and scripting.",
    iconName: "Python",
    level: "Proficient",
  },
  {
    name: "FastAPI",
    category: "Backend",
    description: "High-performance Python API microservices, asynchronous routing, and OpenAPI specs.",
    iconName: "Zap",
    level: "Proficient",
  },
  {
    name: "JWT & Auth",
    category: "Backend",
    description: "Token-based authentication, password hashing with bcrypt, and session management.",
    iconName: "Shield",
    level: "Proficient",
  },

  // Databases
  {
    name: "MongoDB",
    category: "Databases",
    description: "NoSQL document store, aggregation pipelines, schema modeling, and indexing.",
    iconName: "MongoDB",
    level: "Advanced",
  },
  {
    name: "Mongoose",
    category: "Databases",
    description: "Object data modeling (ODM), validation schemas, and population hooks.",
    iconName: "Database",
    level: "Advanced",
  },
  {
    name: "PostgreSQL / SQL",
    category: "Databases",
    description: "Relational data modeling, ACID compliance, joins, and indexing strategies.",
    iconName: "PostgreSQL",
    level: "Proficient",
  },

  // Tools & Workflow
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Version control, branching workflows, pull requests, and commit discipline.",
    iconName: "Git",
    level: "Advanced",
  },
  {
    name: "Postman",
    category: "Tools",
    description: "API testing, automated collection runners, and endpoint documentation.",
    iconName: "Postman",
    level: "Advanced",
  },
  {
    name: "Vercel & Cloud",
    category: "Tools",
    description: "Production deployments, preview branches, and serverless hosting.",
    iconName: "Cloud",
    level: "Proficient",
  },
  {
    name: "VS Code & Tooling",
    category: "Tools",
    description: "Extensions, debugging configurations, ESLint, and Prettier automation.",
    iconName: "Code",
    level: "Expert",
  },
];

export const certifications: CertificateItem[] = [
  {
    title: "JavaScript and Web Development Certificate",
    issuer: "Simplilearn",
    issueDate: "2024",
    credentialId: "SL-JS-WD-2024-SV",
    verificationUrl: "https://www.simplilearn.com",
    skills: ["JavaScript ES6+", "DOM Manipulation", "Full-Stack Web Dev", "REST APIs", "Modern Tooling"],
    description:
      "Comprehensive industry certification demonstrating practical mastery in modern JavaScript, responsive web architectures, asynchronous programming, and full-stack web application development.",
  },
];
