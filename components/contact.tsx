"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields")
      return
    }
    
    // Submit to Google Form
    try {
      const googleFormData = new FormData()
      
      googleFormData.append('entry.70361504', formData.name)
      googleFormData.append('entry.1967203626', formData.email)
      googleFormData.append('entry.754594676', formData.subject)
      googleFormData.append('entry.1917029081', formData.message)
      
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfLx07W9TrvjnkqKzvp5iPTX7oL_26hYZKFjq67gHOmcYns6Q/formResponse', {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors'
      })
      
      alert("Message sent successfully!")
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Submission error:", error)
      alert("There was an error sending your message. Please try again.")
    }
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
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
          />
          <textarea
            placeholder="Tell us what we can help you with..."
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
