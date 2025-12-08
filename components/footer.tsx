"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0A1F2E] border-t border-border/20 py-12 sm:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Left Column - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/fsd-logo.png" alt="Funnkar School of Design" width={32} height={24} className="h-6 w-auto"/>
              <h3 className="text-[15px] font-medium text-white font-poppins">Funnkar School of Design</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Creating exceptional designers for the modern world through expert instruction and industry experience.
            </p>
          </div>

          {/* Middle Column - Quick Links (Centered) */}
          <div className="shrink-0 md:mx-auto">
            <h4 className="text-base font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="#hero" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white transition">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-white transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Follow Us (Right aligned) */}
          <div className="shrink-0 md:ml-60">
            <h4 className="text-base font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4 items-center">
              <Link href="https://www.linkedin.com/company/funnkarschoolofdesign/" aria-label="LinkedIn" className="hover:opacity-80 transition">
                <Image src="/linkedin.svg" alt="LinkedIn" width={15} height={15} />
              </Link>
              <Link href="https://wa.me/9325167605" aria-label="WhatsApp" className="hover:opacity-80 transition">
                <Image src="/whatsapp.svg" alt="WhatsApp" width={15} height={15} />
              </Link>
              <Link href="https://www.instagram.com/funnkar.school.of.design?igsh=OXhmdnZqcXdxemho" aria-label="Instagram" className="hover:opacity-80 transition">
                <Image src="/instagram.svg" alt="Instagram" width={15} height={15} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-foreground/60">
            © 2025 Funnkar School of Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
