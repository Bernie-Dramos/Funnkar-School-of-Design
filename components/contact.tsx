"use client"

import type React from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 bg-card/30 flex flex-col">
      <div className="mx-auto max-w-4xl w-full">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Ready to Learn Something Amazing?
          </h2>
          <p className="text-sm sm:text-base text-foreground/60 px-2">
            Get in contact with us about any questions or inquiries you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="text-center">
            <div className="inline-block p-2 sm:p-3 rounded-xl bg-accent/10 mb-3 sm:mb-4">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <h3 className="font-bold mb-2 text-sm sm:text-base">Email</h3>
            <p className="text-foreground/70 text-xs sm:text-sm break-all">funnkar.schoolofdesign@gmail.com</p>
          </div>
          <div className="text-center">
            <div className="inline-block p-2 sm:p-3 rounded-xl bg-accent/10 mb-3 sm:mb-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <h3 className="font-bold mb-2 text-sm sm:text-base">Phone</h3>
            <p className="text-foreground/70 text-xs sm:text-sm">+91 9325167605 | +91 9209165351</p>
          </div>
          <div className="text-center">
            <div className="inline-block p-2 sm:p-3 rounded-xl bg-accent/10 mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <h3 className="font-bold mb-2 text-sm sm:text-base">Location</h3>
            <p className="text-foreground/70 text-xs sm:text-sm">Nashik, MH</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6 bg-background/50 p-4 sm:p-8 rounded-lg sm:rounded-2xl border border-border"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
          />
          <textarea
            placeholder="Tell us what we can help you with..."
            rows={5}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none text-sm sm:text-base"
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
