"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 sm:h-12 lg:h-15">
          {/* Brand Name - Left side */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0 -ml-15">
            <Image
              src="/fsd-logo.png"
              alt="Funnkar School of Design"
              width={24}
              height={18}
              className="h-5 w-auto sm:h-6 lg:h-7"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-tight text-foreground">
              Funnkar School Of Design
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center gap-0.5 lg:gap-1 flex-1 mx-4 -ml-12">
            <Link 
              href="#hero" 
              className="px-2 lg:px-3 py-1 text-[10px] lg:text-xs font-semibold text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-md transition-all"
            >
              Home
            </Link>
            <Link 
              href="#features" 
              className="px-2 lg:px-3 py-1 text-[10px] lg:text-xs font-semibold text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-md transition-all whitespace-nowrap"
            >
              Why Choose Us
            </Link>
            <Link 
              href="#courses" 
              className="px-2 lg:px-3 py-1 text-[10px] lg:text-xs font-semibold text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-md transition-all"
            >
              Courses
            </Link>
          </div>

          {/* Desktop Contact Button - Right side */}
          <div className="hidden md:flex items-center shrink-0">
            <Link 
              href="#contact" 
              className="px-3 lg:px-4 py-1 lg:py-1.5 text-[10px] lg:text-xs font-semibold bg-white text-black rounded-full hover:bg-white/90 transition-all shadow-sm border border-border/20 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1.5 hover:bg-accent/10 rounded-md transition-colors shrink-0" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={16} className="sm:w-5 sm:h-5" /> : <Menu size={16} className="sm:w-5 sm:h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden py-3 sm:py-4 space-y-1.5 sm:space-y-2 border-t border-border/50">
            <Link 
              href="#hero" 
              className="block px-3 sm:px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-md transition-all"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#courses" 
              className="block px-3 sm:px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-md transition-all"
              onClick={() => setIsOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link 
              href="#courses" 
              className="block px-3 sm:px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/10 rounded-md transition-all"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link 
              href="#contact" 
              className="block mx-3 sm:mx-4 px-4 py-2 text-sm font-semibold text-center bg-white text-black rounded-full hover:bg-white/90 transition-all mt-2 sm:mt-3 border border-border/20"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
