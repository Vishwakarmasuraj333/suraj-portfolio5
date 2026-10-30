import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "foodly",
    title: "Foodly",
    subtitle: "Real-time Food Delivery Platform",
    category: "Food & Delivery",
    tagline: "A food delivery app with real-time tracking and secure payments.",
    description:
      "A fast, responsive food ordering application featuring live driver tracking, interactive menus, customizable food preferences, and instant checkout.",
    longDescription:
      "Foodly solves local dining logistics with a smooth, modern full-stack web and mobile interface. Built with Next.js, Node.js, and MongoDB, it features real-time geolocation tracking, instant cart synchronization, Stripe/Razorpay payment flows, and an intuitive restaurant dashboard for order dispatching.",
    technologies: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Socket.io"],
    features: {
      implemented: [
        "Live order status and real-time delivery map updates",
        "Dynamic cart management with modifiers & coupon discounts",
        "Secure Stripe payment processing with webhook confirmations",
        "Restaurant management portal with instant menu item toggling",
        "Mobile-first responsive interface with buttery smooth drawer transitions",
      ],
      planned: [
        "AI-driven dish recommendation based on previous taste profiles",
        "Voice-assisted search & ordering",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333",
    liveDemo: "https://foodly-demo.vercel.app",
    architectureHighlights: [
      "Real-time WebSocket event pipeline for order state transitions",
      "Optimistic UI updates for cart items guaranteeing zero tap latency",
      "MongoDB aggregation pipeline for nearby restaurant radius queries",
    ],
    role: "Lead Full Stack Developer",
    status: "Completed",
    pastelTheme: "green",
    stats: {
      metric: "<1.2s",
      label: "Average Page Load Time",
    },
  },
  {
    id: "shopio",
    title: "Shopio",
    subtitle: "Modern Cross-Platform Shopping App",
    category: "E-Commerce",
    tagline: "A cross-platform shopping app with smooth checkout flow.",
    description:
      "An e-commerce experience engineered for conversion, with instantaneous product filtering, multi-variant selection, and a single-step checkout flow.",
    longDescription:
      "Shopio was engineered to eliminate e-commerce friction. Featuring server-rendered Next.js catalog pages, lightning-fast instant search with debounced typing, responsive image CDNs, and seamless cart persistence across devices, Shopio delivers a fluid consumer experience that drives higher checkout conversions.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Stripe API"],
    features: {
      implemented: [
        "Instant search and multi-facet filtering (price, category, rating)",
        "Persistent cart and wishlist across sessions via localStorage & API sync",
        "Single-page multi-step checkout with address autocompletion",
        "Order receipt generation and shipment notification webhooks",
        "Comprehensive admin panel with inventory threshold alerts",
      ],
      planned: [
        "Augmented Reality 3D product preview directly in the browser",
        "Multi-currency conversion with automatic geo-detection",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333",
    liveDemo: "https://shopio-store.vercel.app",
    architectureHighlights: [
      "Hybrid Static Site Generation (SSG) with on-demand Incremental Static Regeneration (ISR)",
      "Strict TypeScript typings across cart, product schemas, and checkout payload",
      "Accessible modal checkout dialogs with zero focus traps",
    ],
    role: "Full Stack Developer & UI Architect",
    status: "Completed",
    pastelTheme: "pink",
    stats: {
      metric: "98/100",
      label: "Lighthouse Performance Score",
    },
  },
  {
    id: "walletwise",
    title: "WalletWise",
    subtitle: "Personal Finance & Budget Tracker",
    category: "Finance",
    tagline: "Personal finance tracker with insights and budget planning.",
    description:
      "A smart financial companion that categorizes expenses, forecasts monthly cash flow, and offers actionable budgeting advice through interactive data charts.",
    longDescription:
      "WalletWise empowers individuals to take control of their finances with clean visual analytics, recurring expense trackers, automated monthly budget calculators, and bank-grade data security. Built with a clean MERN stack architecture, it renders responsive, touch-friendly financial charts.",
    technologies: ["React", "Next.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    features: {
      implemented: [
        "Visual expense breakdown with interactive donut & line charts",
        "Custom budget thresholds with instant overspending warnings",
        "Recurring subscription manager with billing reminder notifications",
        "CSV & PDF transaction export for tax and record keeping",
        "Encrypted database storage and secure session tokens",
      ],
      planned: [
        "Plaid API integration for automatic bank feed synchronization",
        "Predictive savings goal forecasting using trend regression",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333",
    liveDemo: "https://walletwise-app.vercel.app",
    architectureHighlights: [
      "Custom lightweight SVG/Canvas visualization module for rapid rendering",
      "Client-side caching layer for instant month-to-month period switching",
      "Defensive server validation ensuring financial decimals never lose precision",
    ],
    role: "Full Stack Engineer",
    status: "Completed",
    pastelTheme: "yellow",
    stats: {
      metric: "100%",
      label: "Data Encryption & Privacy",
    },
  },
  {
    id: "fittrack",
    title: "FitTrack",
    subtitle: "Daily Workout & Wellness Companion",
    category: "Health & Fitness",
    tagline: "Workout tracker and health companion for everyday goals.",
    description:
      "A habit-forming fitness and workout companion featuring routine builders, milestone streaks, caloric burn calculators, and progress timeline visuals.",
    longDescription:
      "FitTrack turns personal wellness into an engaging, milestone-driven daily routine. Users can build customized exercise splits, log sets, reps, and weights with single taps during active workouts, and view historical strength progressions through clean pastel visual graphs.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Framer Motion"],
    features: {
      implemented: [
        "Active workout companion mode with integrated rest timer & audible cues",
        "Comprehensive exercise library with form guides and muscle group tags",
        "Streak tracker with celebratory micro-animations on completed milestones",
        "Personal record (PR) milestone logger and visual progress timeline",
        "Offline-capable data sync when training in gyms with low connectivity",
      ],
      planned: [
        "Social workout sharing with friends and community challenge leaderboards",
        "Smart wearable health sync via Apple Health & Google Fit APIs",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333",
    liveDemo: "https://fittrack-health.vercel.app",
    architectureHighlights: [
      "IndexedDB local persistence with background server synchronization",
      "Haptic-style micro-interactions designed for gym phone use",
      "Responsive layout adapted for one-handed thumb navigation",
    ],
    role: "Full Stack Developer",
    status: "Completed",
    pastelTheme: "purple",
    stats: {
      metric: "15k+",
      label: "Logged Exercises in Staging",
    },
  },
  {
    id: "intellitwin-ai",
    title: "IntelliTwin AI",
    subtitle: "Cybersecurity Anomaly Detection & ML Platform",
    category: "AI & Cloud",
    tagline: "Proactive network anomaly detection with explainable ML predictions.",
    description:
      "A cybersecurity telemetry analysis platform featuring machine-learning predictions, explainability metrics, and an asynchronous API architecture.",
    longDescription:
      "IntelliTwin AI delivers proactive threat hunting and network telemetry analysis. Built with an asynchronous FastAPI backend and a Next.js interface, it utilizes XGBoost classification algorithms paired with SHAP (SHapley Additive exPlanations) values to clarify why a specific anomaly is flagged, bridging the gap between automated ML alerts and actionable SOC analyst workflows.",
    technologies: ["Python", "FastAPI", "Next.js", "PostgreSQL", "XGBoost", "SHAP", "Tailwind CSS"],
    features: {
      implemented: [
        "FastAPI REST endpoints for network telemetry ingestion",
        "XGBoost-powered anomaly scoring pipeline",
        "SHAP-based decision breakdown for ML explainability",
        "Relational event storage with PostgreSQL",
        "Responsive telemetry dashboards in Next.js",
      ],
      planned: [
        "Kafka stream ingestion for high-throughput enterprise logs",
        "Multi-tenant role-based access control (RBAC)",
      ],
    },
    repository: "https://github.com/Vishwakarmasuraj333/IntelliTwin-AI",
    liveDemo: undefined,
    architectureHighlights: [
      "Asynchronous Python ML inference worker",
      "Explainability pipeline converting raw feature vectors to human-readable SHAP insights",
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
      "Nexora Social addresses multi-platform fragmentation by unifying cross-channel content drafting, scheduling, and queue monitoring. Engineered with Next.js, Node.js, and clean UI engineering, it establishes structured draft review processes and modular channel connectors.",
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
