export type Theme = "dark" | "light";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Food & Delivery" | "E-Commerce" | "Finance" | "Health & Fitness" | "AI & Cloud" | "Developer Tools";
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: {
    implemented: string[];
    planned?: string[];
  };
  repository: string;
  liveDemo?: string;
  architectureHighlights: string[];
  role: string;
  status: "Completed" | "Active" | "In Development";
  pastelTheme: "green" | "pink" | "yellow" | "purple" | "blue";
  stats?: {
    metric: string;
    label: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconType: "mobile" | "uiux" | "backend" | "testing";
  pastelColor: "purple" | "pink" | "yellow" | "green";
  skills: string[];
  deliverables: string[];
}

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "Tools";
  description: string;
  iconName: string;
  level: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: "Completed" | "Pursuing";
  cgpa?: string;
  description: string;
  highlights: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verificationUrl: string;
  skills: string[];
  description: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  category: "Full Stack Milestone" | "Foundations" | "Architecture";
  description: string;
  keyLearnings: string[];
  technologies: string[];
}

export interface GitHubStats {
  username: string;
  name: string;
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  profileUrl: string;
  bio: string;
  recentRepos: Array<{
    name: string;
    description: string | null;
    stars: number;
    forks: number;
    url: string;
    language: string | null;
    updatedAt: string;
  }>;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
