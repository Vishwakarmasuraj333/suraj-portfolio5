import { SkillItem, CertificateItem } from "@/types";

export const skillsList: SkillItem[] = [
  // Frontend
  {
    name: "ReactJS",
    category: "Frontend",
    description: "Component lifecycle, state management, custom hooks, and virtual DOM architecture.",
    iconName: "React",
    level: "Advanced",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Server-side rendering (SSR), static site generation (SSG), routing, and optimized web performance.",
    iconName: "Next",
    level: "Proficient",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    description: "Modern ES6+ syntax, asynchronous programming, promises, closures, and DOM manipulation.",
    iconName: "JavaScript",
    level: "Expert",
  },
  {
    name: "HTML5",
    category: "Frontend",
    description: "Semantic web architecture, accessible markup (WCAG), and SEO best practices.",
    iconName: "HTML5",
    level: "Expert",
  },
  {
    name: "CSS3",
    category: "Frontend",
    description: "Flexbox, CSS Grid layouts, animations, transitions, and responsive design across all viewports.",
    iconName: "CSS3",
    level: "Expert",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first rapid styling, mobile-first design, theme customization, and responsive systems.",
    iconName: "Tailwind",
    level: "Advanced",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    description: "Responsive grid systems, utility classes, and pre-built interactive UI components.",
    iconName: "Bootstrap",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Type safety, typed interfaces, and clean component contracts.",
    iconName: "TypeScript",
    level: "Proficient",
  },

  // Backend & APIs
  {
    name: "REST APIs",
    category: "Backend",
    description: "Integrating real-time REST endpoints, API fetch calls, JSON parsing, and error handling.",
    iconName: "API",
    level: "Advanced",
  },
  {
    name: "FastAPI",
    category: "Backend",
    description: "High-performance Python API microservices, asynchronous routing, and schema validation.",
    iconName: "Zap",
    level: "Proficient",
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    description: "Relational data modeling, schema indexing, and structured SQL query management.",
    iconName: "PostgreSQL",
    level: "Proficient",
  },
  {
    name: "Node.js Basics",
    category: "Backend",
    description: "Basic runtime scripting, npm ecosystem, and asynchronous event loops.",
    iconName: "Node",
    level: "Proficient",
  },

  // Tools & Workflow
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Version control, commit hygiene, branch management, pull requests, and open-source collaboration.",
    iconName: "Git",
    level: "Advanced",
  },
  {
    name: "AI Debugging & Workflow Tools",
    category: "Tools",
    description: "Leveraging modern AI tools for rapid debugging, refactoring, performance analysis, and workflow optimization.",
    iconName: "Zap",
    level: "Advanced",
  },
  {
    name: "VS Code & DevTools",
    category: "Tools",
    description: "Chrome DevTools inspection, lighthouse audits, responsive emulation, and debugging tools.",
    iconName: "Code",
    level: "Expert",
  },
  {
    name: "Postman",
    category: "Tools",
    description: "API testing, checking status codes, inspecting payloads, and endpoint verification.",
    iconName: "Postman",
    level: "Proficient",
  },
];

export const certifications: CertificateItem[] = [
  {
    title: "Front End Development Libraries",
    issuer: "FreeCodeCamp",
    issueDate: "Verified",
    credentialId: "FCC-FEDL-REACT-REDUX",
    verificationUrl: "https://www.freecodecamp.org",
    skills: ["ReactJS", "Redux", "Bootstrap", "jQuery", "SASS"],
    description:
      "Comprehensive certification covering modern component architecture, state management with Redux, Bootstrap grids, and responsive styling libraries.",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    issueDate: "Verified",
    credentialId: "FCC-RWD-HTML-CSS",
    verificationUrl: "https://www.freecodecamp.org",
    skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design", "Accessibility"],
    description:
      "Mastery in designing responsive web layouts that seamlessly adapt across mobile, tablet, and desktop screens with modern CSS3 Flexbox and Grid.",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    issueDate: "Verified",
    credentialId: "FCC-JS-ALGO-DS",
    verificationUrl: "https://www.freecodecamp.org",
    skills: ["JavaScript (ES6+)", "Algorithms", "Data Structures", "OOP", "Functional Programming"],
    description:
      "In-depth verification of core JavaScript fundamentals, algorithm design, algorithmic complexity, object-oriented programming, and ES6+ features.",
  },
  {
    title: "Web Development for Beginners",
    issuer: "Simplilearn",
    issueDate: "Verified",
    credentialId: "SL-WDB-HTML-CSS-JS",
    verificationUrl: "https://www.simplilearn.com",
    skills: ["HTML5", "CSS3", "JavaScript", "DOM Architecture", "Web Fundamentals"],
    description:
      "Industry credential verifying practical understanding of foundational web technologies, client-side scripting, DOM manipulation, and responsive UI creation.",
  },
];
