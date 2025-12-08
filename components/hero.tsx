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
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        >
          <source src="/cyberpunk-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 sm:mb-6 text-balance leading-tight font-poppins">
          Unlock Your <span className="text-primary">Design Potential</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 sm:mb-12 text-pretty leading-relaxed font-light">
          Our design programs offer free consultation, career support, free trial access, and job placement assistance.
          Transform your creative journey with expert guidance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#courses" className="px-8 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 text-base sm:text-lg w-full sm:w-auto text-center">
            Explore Courses
          </Link>
          <button className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-foreground/40 rounded-full font-bold hover:border-primary hover:text-primary transition-all text-base sm:text-lg w-full sm:w-auto">
            Get Brochure
          </button>
        </div>
      </div>
    </section>
  )
}
