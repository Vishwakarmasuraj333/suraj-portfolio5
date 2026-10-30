import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { ThemeProvider } from "@/components/layout/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Suraj Vishwakarma | Full Stack Developer",
    template: "%s | Suraj Vishwakarma",
  },
  description:
    "Motivated Full Stack Developer skilled in React, Next.js, Node.js, JavaScript (ES6+), and modern web architectures. B.Sc. IT (9.04 CGPA - A Grade) | University of Mumbai.",
  keywords: [
    "Suraj Vishwakarma",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "MERN Stack Developer",
    "Mumbai Developer",
    "University of Mumbai",
  ],
  authors: [{ name: "Suraj Vishwakarma", url: siteConfig.links.github }],
  creator: "Suraj Vishwakarma",
  publisher: "Suraj Vishwakarma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Suraj Vishwakarma | Full Stack Developer",
    description:
      "I build digital products that people love. Full Stack Developer crafting fast, scalable & user-friendly web applications.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Suraj Vishwakarma — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Vishwakarma | Full Stack Developer",
    description:
      "I build digital products that people love. Full Stack Developer crafting fast, scalable & user-friendly web applications.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suraj Vishwakarma",
    jobTitle: "Full Stack Developer",
    url: siteConfig.url,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Mumbai",
      location: "Mumbai, Maharashtra, India",
    },
    knowsAbout: [
      "Full Stack Web Development",
      "ReactJS",
      "Next.js",
      "Node.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Git & GitHub",
      "RESTful APIs",
    ],
  };

  return (
    <html lang="en" className={fontSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        {/* Anti-flash inline script to instantly apply stored theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('sv_theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans bg-[#FCFAF8] dark:bg-[#0B1120] text-[#111827] dark:text-[#F8FAFC] antialiased selection:bg-rose-200 selection:text-rose-900 min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-200">
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
