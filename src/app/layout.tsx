import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurav Kathiriya - Full Stack Developer",
  description: "Full-Stack Developer specializing in React, NestJS, GraphQL, and PostgreSQL. Building high-performance web applications with modern technologies.",
  keywords: ["Full Stack Developer", "React", "NestJS", "GraphQL", "PostgreSQL", "Next.js", "TypeScript"],
  authors: [{ name: "Gaurav Kathiriya" }],
  openGraph: {
    title: "Gaurav Kathiriya - Full Stack Developer",
    description: "Full-Stack Developer specializing in React, NestJS, GraphQL, and PostgreSQL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
