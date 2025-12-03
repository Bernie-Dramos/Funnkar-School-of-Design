import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Funnkar School of Design | Design Courses & Mini Degrees",
  description:
    "Learn design, branding, and UX/UI from industry experts. Explore courses and mini degrees at Funnkar School of Design.",
  icons: {
    icon: "/LOGO.png",
    apple: "/LOGO.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
