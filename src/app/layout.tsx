import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer Portfolio",
  description: "Passionate full-stack developer specializing in Next.js, React, Angular, Svelte, and modern web technologies. Building responsive, high-performance web applications with clean code and scalable architecture.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Angular", "Svelte", "Tailwind CSS", "Firebase", "MySQL", "Web Development"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Your Name - Full Stack Developer Portfolio",
    description: "Passionate full-stack developer building innovative web solutions",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Full Stack Developer Portfolio",
    description: "Passionate full-stack developer building innovative web solutions",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
