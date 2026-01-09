import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
})
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "Funnkar School of Design | Design Courses & Mini Degrees",
  description:
    "Learn design, branding, and UX/UI from industry experts. Explore courses and mini degrees at Funnkar School of Design.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/fsd-logo.png", type: "image/png" },
    ],
    apple: "/fsd-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`font-sans antialiased ${poppins.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
