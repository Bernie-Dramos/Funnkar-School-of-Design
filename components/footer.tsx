"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <Image src="/fsd-logo.png" alt="Funnkar School of Design" width={40} height={40}/>
              <span className="text-base font-bold tracking-tight text-foreground" style={{ fontFamily: 'Tonus Contrast, sans-serif' }}>Funnkar School of Design</span>
            </Link>
            <p className="text-sm text-foreground/70">
              Creating exceptional designers for the modern world through expert instruction and industry experience.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Courses</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="#courses" className="hover:text-accent transition">
                  Sketching and 2D Art
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-accent transition">
                  3D Modelling
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-accent transition">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-accent transition">
                  Game Design
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-accent transition">
                  3D Animation
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-accent transition">
                  VFX Animation Diploma
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-accent transition">
                  Fine Arts
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-accent transition">
                  Graphics Design
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="#hero" className="hover:text-accent transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-accent transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-4 items-center">
              <Link href="https://www.instagram.com/funnkar.school.of.design?igsh=OXhmdnZqcXdxemho" aria-label="Instagram" className="hover:opacity-80 transition">
                <Image src="/instagram.svg" alt="Instagram" width={26} height={26} />
              </Link>
              <Link href="https://www.linkedin.com/company/funnkarschoolofdesign/" aria-label="LinkedIn" className="hover:opacity-80 transition">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="https://wa.me/9325167605" aria-label="WhatsApp" className="hover:opacity-80 transition">
                <Image src="/whatsapp.svg" alt="WhatsApp" width={22} height={22} />
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
