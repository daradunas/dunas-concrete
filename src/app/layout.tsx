import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { siteConfig } from "@/config/site";
import { ToasterProvider } from "@/app/(home)/_components/provider/toaster-provider"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/manifest.json" },
      { rel: "android-chrome", url: "/web-app-manifest-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/web-app-manifest-512x512.png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${inter.variable} antialiased relative min-w-72 font-main`}
      >
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
