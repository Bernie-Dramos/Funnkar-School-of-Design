"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-background to-background/95">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        >
          <source src="/cyberpunk-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        
        <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 sm:mb-6 text-balance leading-tight font-poppins">
          Unlock Your <span className="text-primary whitespace-nowrap">Design Potential</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 sm:mb-12 text-pretty leading-relaxed font-light">
          Our design programs offer free consultation, career support, free trial access, and job placement assistance.
          Transform your creative journey with expert guidance.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
          <Link href="#courses" className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 text-sm sm:text-base md:text-lg w-full sm:w-auto text-center">
            Explore Courses
          </Link>
          <Link href="https://drive.google.com/drive/folders/1wQoB3ZE5nJu9UR24QhMWpPNj8NMszD4H?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border-2 border-foreground/40 rounded-full font-bold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all text-sm sm:text-base md:text-lg w-full sm:w-auto text-center">
            Get Brochure
          </Link>
        </div>
      </div>
    </section>
  )
}
