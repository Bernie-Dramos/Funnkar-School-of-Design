"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/LOGO.png"
              alt="Funnkar School of Design"
              width={40}
              height={30}
              className="h-6 w-8 sm:h-10 sm:w-12"
              style={{ borderRadius: 5 }}
            />
            <span className="text-base sm:text-lg font-bold tracking-tight text-foreground hidden sm:inline" style={{ fontFamily: 'Tonus Contrast, sans-serif' }}>
              Funnkar School of Design
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 space-y-3 md:hidden pb-4">
            <Link href="#courses" className="block text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="#contact" className="block text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
