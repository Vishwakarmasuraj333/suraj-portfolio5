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
    default: "Suraj Vishwakarma | Frontend Developer",
    template: "%s | Suraj Vishwakarma",
  },
  description:
    "Motivated Frontend Developer skilled in HTML, CSS, JavaScript (ES6+), ReactJS, and Tailwind CSS. B.Sc. IT (9.04 CGPA - A Grade) | University of Mumbai.",
  keywords: [
    "Suraj Vishwakarma",
    "Frontend Developer",
    "ReactJS Developer",
    "Tailwind CSS",
    "JavaScript Developer",
    "Next.js Developer",
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
    title: "Suraj Vishwakarma | Frontend Developer",
    description:
      "I build digital products that people love. Frontend Developer crafting clean, responsive & user-friendly interfaces.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Suraj Vishwakarma — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Vishwakarma | Frontend Developer",
    description:
      "I build digital products that people love. Frontend Developer crafting clean, responsive & user-friendly interfaces.",
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
    jobTitle: "Frontend Developer",
    url: siteConfig.url,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Mumbai",
      location: "Mumbai, Maharashtra, India",
    },
    knowsAbout: [
      "Frontend Web Development",
      "ReactJS",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Next.js",
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
