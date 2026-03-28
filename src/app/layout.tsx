import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beny Zion | Full-Stack Developer",
  description: "Full-Stack Developer specializing in React, Next.js & Node.js. Building production systems with AI-driven development.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://beny-zion-dev.vercel.app"),
  openGraph: {
    title: "Beny Zion | Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js & Node.js. Building production systems with AI-driven development.",
    url: "https://beny-zion-dev.vercel.app",
    siteName: "Beny Zion Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beny Zion - Full-Stack Developer Portfolio",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beny Zion | Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js & Node.js. Building production systems with AI-driven development.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
