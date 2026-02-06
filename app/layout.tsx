import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Xeeniq — Premium Digital Products (Coming Soon)",
  description:
    "Xeeniq builds premium digital products for modern teams: micro-SaaS tools, automation workflows, compliance kits, and homologation checklists.",
  metadataBase: new URL("https://xeeniq.com"),
  alternates: {
    canonical: "https://xeeniq.com",
  },
  openGraph: {
    title: "Xeeniq — Premium Digital Products (Coming Soon)",
    description:
      "Premium SaaS tools, automation workflows, compliance kits, and templates for modern teams.",
    url: "https://xeeniq.com",
    siteName: "Xeeniq",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xeeniq — Premium Digital Products (Coming Soon)",
    description:
      "Premium SaaS tools, automation workflows, compliance kits, and templates for modern teams.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: "#FF6B35",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
