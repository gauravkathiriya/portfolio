import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
// @ts-ignore
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/components/providers/query-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gauravkathiriya.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gaurav Kathiriya · Full Stack Developer",
    template: "%s · Gaurav Kathiriya",
  },
  description:
    "Senior-oriented full stack developer: React, Next.js, NestJS, React Native, GraphQL, PostgreSQL, MongoDB. Performance-first UI and robust APIs.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "NestJS",
    "React Native",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "TypeScript",
    "Gujarat",
  ],
  authors: [{ name: "Gaurav Kathiriya", url: "https://github.com/gauravkathiriya" }],
  creator: "Gaurav Kathiriya",
  openGraph: {
    title: "Gaurav Kathiriya · Full Stack Developer",
    description:
      "Full stack developer building scalable web & mobile products with React, Next.js, and NestJS.",
    type: "website",
    locale: "en_IN",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Kathiriya · Full Stack Developer",
    description:
      "React, Next.js, NestJS, performance-focused interfaces & APIs.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster richColors position="top-right" />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
