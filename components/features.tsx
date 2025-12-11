"use client"

import { CheckCircle2 } from "lucide-react"

const features = [
  {
    title: "Free Consultation",
    description: "Get expert advice and guidance before you start your design journey",
  },
  {
    title: "Career Support",
    description: "Professional career counseling and mentorship throughout your learning",
  },
  {
    title: "Free Trial Access",
    description: "Try our courses before committing with full trial access",
  },
  {
    title: "Job Placement",
    description: "Connect with industry partners and secure your dream design job",
  },
]

export default function Features() {
  return (
    <section id="features" className="sticky top-0 py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-card/30 min-h-screen flex flex-col justify-center scroll-mt-20">
      <div className="mx-auto max-w-6xl w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 md:mb-6 text-balance tracking-tight">
            Why <span className="text-primary">Choose Us</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
            Our design programs offer comprehensive support to help you succeed in your creative career
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-background border border-foreground/10 rounded-xl p-5 sm:p-6 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="mb-3 sm:mb-4">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>        
      </div>
    </section>
  )
}
