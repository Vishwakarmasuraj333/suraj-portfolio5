import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Responsive Personal Portfolio",
    category: "Frontend",
    tagline: "Responsive personal portfolio showcasing skills, achievements, and projects.",
    description:
      "Responsive personal portfolio showcasing skills, achievements, and projects with clean design and fluid mobile responsiveness.",
    longDescription:
      "A high-performance personal portfolio built to showcase modern frontend engineering skills, interactive UI components, dark and light theme toggles, and responsive design across all devices. Engineered with Next.js, React, and Tailwind CSS.",
    technologies: ["ReactJS", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    features: {
      implemented: [
        "100% mobile-first responsive layout adapted for all screen sizes",
        "Dynamic dark and light theme switching with system preference detection",
        "Interactive project modals, credential viewers, and live contact form",
        "Verified resume preview and direct one-click PDF download",
        "Clean component architecture with TypeScript type safety",
      ],
      planned: [
        "Interactive 3D canvas enhancements for developer showcase",
        "Blog section for frontend engineering tutorials",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333/suraj-portfolio5",
    liveDemo: "https://suraj-portfolio5.vercel.app",
    architectureHighlights: [
      "Optimized Next.js static generation guaranteeing fast page loads",
      "Tailwind CSS utility styling with accessible color contrast ratios",
      "Git/GitHub version control with atomic commits",
    ],
    role: "Frontend Developer",
    status: "Completed",
    pastelTheme: "pink",
    stats: {
      metric: "100%",
      label: "Responsive & Accessible",
    },
  },
  {
    id: "todo-list-app",
    title: "ToDo List App",
    subtitle: "Task Management Application",
    category: "Web Application",
    tagline: "Task management app built using JavaScript and React fundamentals.",
    description:
      "Task management app built using JavaScript and React fundamentals with real-time status updates and local persistence.",
    longDescription:
      "A clean and intuitive task management application built using modern JavaScript and React fundamentals. Allows users to organize, filter, and track their daily tasks with local state persistence, priority flags, and smooth micro-interactions.",
    technologies: ["ReactJS", "JavaScript (ES6+)", "HTML5", "CSS3"],
    features: {
      implemented: [
        "Add, edit, toggle, and delete tasks with instant UI updates",
        "Categorization and status filtering (All, Active, Completed)",
        "Local storage synchronization to keep tasks across browser sessions",
        "Clear completed tasks and batch management actions",
        "Keyboard accessible inputs with quick-add shortcuts",
      ],
      planned: [
        "Drag and drop task reordering",
        "Tagging system with customizable color labels",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333",
    liveDemo: undefined,
    architectureHighlights: [
      "Pure React state management using custom hooks",
      "Optimistic UI updates with zero lag",
      "Modular component decomposition for task items and filter controls",
    ],
    role: "Frontend Developer",
    status: "Completed",
    pastelTheme: "blue",
    stats: {
      metric: "<50ms",
      label: "UI Interaction Latency",
    },
  },
  {
    id: "weather-app",
    title: "Weather App",
    subtitle: "Real-time Weather & Forecast",
    category: "Web Application",
    tagline: "Real-time weather and forecast app using live weather API.",
    description:
      "Real-time weather and forecast app using live weather API with location search and responsive forecast cards.",
    longDescription:
      "Real-time weather application connecting to live weather API endpoints to fetch accurate meteorological data, multi-day forecasts, temperature metrics, humidity, and location search across cities worldwide.",
    technologies: ["ReactJS", "JavaScript (ES6+)", "REST APIs", "Tailwind CSS"],
    features: {
      implemented: [
        "Live city search with debounced autocomplete and weather queries",
        "Detailed temperature, wind speed, humidity, and atmospheric conditions",
        "Dynamic weather condition icons and weather-themed card gradients",
        "Responsive grid presentation tailored for mobile and desktop screens",
        "Graceful error handling for invalid cities or network failures",
      ],
      planned: [
        "Automatic geolocation detection on user permission",
        "Hourly forecast carousel with visual precipitation graph",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333",
    liveDemo: undefined,
    architectureHighlights: [
      "Asynchronous fetch pipelines with defensive error boundaries",
      "Clean separation between API data mapper and UI presentation layers",
      "Responsive CSS grid layout with smooth loading skeletons",
    ],
    role: "Frontend Developer",
    status: "Completed",
    pastelTheme: "yellow",
    stats: {
      metric: "Live API",
      label: "Real-time Data Integration",
    },
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    subtitle: "Responsive Metrics & Analytics Hub",
    category: "Dashboard",
    tagline: "Responsive dashboard with metrics, charts, and UI components.",
    description:
      "Responsive dashboard with metrics, charts, and UI components built with modern frontend tools.",
    longDescription:
      "A comprehensive frontend administrative dashboard equipped with interactive data charts, key performance indicator cards, user analytics, and customizable UI components for streamlined administrative workflows.",
    technologies: ["ReactJS", "Tailwind CSS", "JavaScript (ES6+)", "HTML5"],
    features: {
      implemented: [
        "Executive KPI summary widgets with percentage growth trends",
        "Interactive chart representations for sales and user metrics",
        "Responsive sidebar navigation with collapsed state for mobile devices",
        "Data table with status badges and searchable column rows",
        "Accessible color palette with clean visual hierarchy",
      ],
      planned: [
        "Export dashboard metrics to CSV and PDF formats",
        "Customizable widget drag-and-drop dashboard layout",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333",
    liveDemo: undefined,
    architectureHighlights: [
      "Reusable card and metric component design system",
      "Fluid responsive layout adapting smoothly from mobile to widescreen monitors",
      "Strict layout containment to avoid layout shifts",
    ],
    role: "Frontend Developer",
    status: "Completed",
    pastelTheme: "purple",
    stats: {
      metric: "100%",
      label: "Mobile & Desktop Responsive",
    },
  },
  {
    id: "mini-ecommerce-ui",
    title: "Mini E-commerce UI",
    subtitle: "Frontend Product Layout & Shopping UI",
    category: "E-Commerce",
    tagline: "Frontend product layout and interactive shopping UI.",
    description:
      "Frontend product layout and interactive shopping UI with interactive catalog, cart drawer, and responsive cards.",
    longDescription:
      "Modern e-commerce frontend interface featuring interactive product catalogs, dynamic category filtering, responsive item cards, and smooth shopping cart interactions engineered for optimal conversion.",
    technologies: ["ReactJS", "Tailwind CSS", "JavaScript (ES6+)", "HTML5"],
    features: {
      implemented: [
        "Product catalog with high-resolution imagery and badge overlays",
        "Instant category filtering and sorting by price or rating",
        "Interactive slide-out shopping cart drawer with live subtotal calculation",
        "Quantity counter increment and decrement controls",
        "Mobile-first responsive checkout card layout",
      ],
      planned: [
        "Wishlist storage and quick view modal preview",
        "Customer reviews and star rating input component",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333",
    liveDemo: undefined,
    architectureHighlights: [
      "Lightweight state store for cart item calculations",
      "CSS Grid product catalog with fluid column recalculations",
      "Smooth drawer transitions with focus management",
    ],
    role: "Frontend Developer",
    status: "Completed",
    pastelTheme: "green",
    stats: {
      metric: "60 FPS",
      label: "Smooth UI Animations",
    },
  },
  {
    id: "intellitwin-ai",
    title: "IntelliTwin AI",
    subtitle: "Cybersecurity Anomaly Detection & ML Platform",
    category: "AI & Cloud",
    tagline: "Proactive network anomaly detection with explainable ML predictions.",
    description:
      "A cybersecurity telemetry analysis platform featuring machine-learning predictions, explainability metrics, and asynchronous APIs.",
    longDescription:
      "IntelliTwin AI delivers proactive threat hunting and network telemetry analysis. Built with an asynchronous FastAPI backend and a Next.js interface, it utilizes XGBoost classification algorithms paired with SHAP explainability.",
    technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "XGBoost", "Tailwind CSS"],
    features: {
      implemented: [
        "FastAPI REST endpoints for network telemetry ingestion",
        "XGBoost-powered anomaly scoring pipeline",
        "SHAP-based decision breakdown for ML explainability",
        "Relational event storage with PostgreSQL",
        "Responsive telemetry dashboards in Next.js",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333/IntelliTwin-AI",
    liveDemo: undefined,
    architectureHighlights: [
      "Asynchronous Python ML inference worker",
      "Modular client-side data visualizer with dynamic thresholding",
    ],
    role: "Full Stack & ML Integration Developer",
    status: "Active",
    pastelTheme: "blue",
    stats: {
      metric: "99.4%",
      label: "Detection Accuracy",
    },
  },
  {
    id: "nexora-social",
    title: "Nexora Social",
    subtitle: "Social Media Publishing & Workflow Management",
    category: "Developer Tools",
    tagline: "Centralized publishing workflows and cross-platform queueing.",
    description:
      "A social media workflow management application focused on post publishing pipelines, multi-channel account scheduling, and dashboarding.",
    longDescription:
      "Nexora Social addresses multi-platform fragmentation by unifying cross-channel content drafting, scheduling, and queue monitoring. Engineered with Next.js, Node.js, and clean UI engineering.",
    technologies: ["Next.js", "React", "Node.js", "Tailwind CSS", "TypeScript", "REST APIs"],
    features: {
      implemented: [
        "Centralized content composer with multi-account preview",
        "Post scheduling timeline with draft lifecycles",
        "Responsive interface engineered for desktop and tablet workflows",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333/-Nexora-Social",
    liveDemo: undefined,
    architectureHighlights: [
      "Optimistic UI updates for draft scheduling",
      "Modular connector architecture for social channel adapters",
    ],
    role: "Full Stack Developer",
    status: "Completed",
    pastelTheme: "blue",
  },
  {
    id: "se-ranking",
    title: "SE Ranking Research Studio",
    subtitle: "Keyword Intelligence & Competitor Analytics",
    category: "Developer Tools",
    tagline: "Real-time search engine rank monitoring and SEO insights.",
    description:
      "An SEO research and analytics studio that tracks SERP positions, analyzes keyword difficulty, and generates actionable competitive reports.",
    longDescription:
      "Built for web performance researchers and growth teams, SE Ranking Research Studio automates ranking data aggregation, SERP feature detection, and historical volatility trends using high-efficiency chart visualizations.",
    technologies: ["React", "Next.js", "Tailwind CSS", "REST APIs", "Node.js"],
    features: {
      implemented: [
        "Real-time SERP position tracking across mobile and desktop bots",
        "Competitor keyword gap analysis dashboard",
      ],
    },
    repository: "https://github.com/MamtaYdvTech1/SE-Ranking",
    liveDemo: undefined,
    architectureHighlights: [
      "Client-side caching layer for instant query performance",
    ],
    role: "Frontend Engineer",
    status: "Completed",
    pastelTheme: "green",
  },
];
