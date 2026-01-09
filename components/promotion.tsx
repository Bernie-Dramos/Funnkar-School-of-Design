"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const courses = [
  "Sketch and 2D Art",
  "3D Modelling",
  "Interior Design",
  "Game Design",
  "3D Animation",
  "VFX Animation",
  "Fine Arts",
  "Graphics Design",
]

export default function Promotion() {
  const [open, setOpen] = useState(false)
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedCourse: "Promotion",
    sex: "",
    education: "",
    city: "",
    country: "",
    schoolName: "",
    fatherName: "",
    fatherEmail: "",
    fatherContact: "",
    fatherOccupation: "",
    motherName: "",
    motherEmail: "",
    motherContact: "",
    motherOccupation: "",
    combinedIncome: "",
  })

  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'))
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ]
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 76 }, (_, i) => String(currentYear - i))

  const resetForm = () => {
    setDay("")
    setMonth("")
    setYear("")
    setFormData({
      name: "",
      email: "",
      phone: "",
      selectedCourse: "Promotion",
      sex: "",
      education: "",
      city: "",
      country: "",
      schoolName: "",
      fatherName: "",
      fatherEmail: "",
      fatherContact: "",
      fatherOccupation: "",
      motherName: "",
      motherEmail: "",
      motherContact: "",
      motherOccupation: "",
      combinedIncome: "",
    })
  }

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (!isOpen) {
      resetForm()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all required fields
    if (!formData.name || !formData.email || !formData.phone || 
        !formData.sex || !formData.education || !formData.city || 
        !formData.country || !formData.schoolName || !formData.fatherName || 
        !formData.fatherContact || !formData.fatherOccupation || !formData.motherName || 
        !formData.motherContact || !formData.motherOccupation || 
        !formData.combinedIncome) {
      alert("Please fill in all required fields")
      return
    }

    if (!day || !month || !year) {
      alert("Please select your complete date of birth")
      return
    }

    const dateOfBirth = `${day}/${month}/${year}`
    const fullName = formData.name.trim()

    setIsSubmitting(true)

    // Submit to Google Forms
    try {
      const formId = "1FAIpQLSd7QKpQfHG0r4VBbUDVQjZq-YqsDmxRRcz0Bg7Bpao2yjLVrQ"
      const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`

      const formDataToSubmit = new URLSearchParams({
        "entry.2134664567": fullName,
        "entry.656690501": formData.email,
        "entry.1222458846": formData.phone,
        "entry.617136688": formData.education,
        "entry.1709172798": dateOfBirth,
        "entry.1310055712": formData.sex,
        "entry.141020201": formData.city,
        "entry.1470708005": formData.country,
        "entry.2130250785": formData.schoolName,
        "entry.474092962": formData.fatherName,
        "entry.1609196587": formData.fatherContact,
        "entry.1926062604": formData.fatherEmail || "",
        "entry.880683016": formData.fatherOccupation,
        "entry.1010915843": formData.motherName,
        "entry.1265443974": formData.motherContact,
        "entry.864749557": formData.motherEmail || "",
        "entry.1460277532": formData.motherOccupation,
        "entry.1144848104": formData.combinedIncome,
      })

      await fetch(formUrl, {
        method: "POST",
        body: formDataToSubmit,
        mode: "no-cors",
      })

      alert("Application submitted successfully!")
      resetForm()
      setOpen(false)
    } catch (error) {
      console.error("Submission error:", error)
      alert("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-background flex flex-col items-center justify-center min-h-[40vh] sm:min-h-[48vh]">
      <div className="mx-auto max-w-4xl w-full flex flex-col items-center justify-center gap-8">
        {/* Animated Floating Image */}
        <div className="relative w-full max-w-4xl h-100 sm:h-120 md:h-120">
          <style>{`
            @keyframes floating {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-20px);
              }
            }
            .floating-image {
              animation: floating 3s ease-in-out infinite;
            }
          `}</style>
          <Image
            src="/jan2026-promotion.png"
            alt="Promotion"
            fill
            className="floating-image object-contain"
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 28rem"
          />
        </div>

        {/* Apply Now Button */}
        <button
          onClick={() => setOpen(true)}
          className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-primary rounded-full font-bold hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-white/20 transition-all shadow-lg text-sm sm:text-base border border-border/20"
        >
          Apply Now
        </button>
      </div>

      {/* Application Form Dialog */}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1100px] max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-poppins">Apply for a Course</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6 mt-4 w-full px-2 sm:px-4">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Personal Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Info *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="education">Education *</Label>
                  <Input
                    id="education"
                    placeholder="e.g., High School, Bachelor's"
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-start">
                <div className="space-y-2">
                  <Label>Date of Birth *</Label>
                  <div className="flex gap-2 flex-wrap">
                    <Select value={day} onValueChange={setDay} required>
                      <SelectTrigger className="w-20">
                        <SelectValue placeholder="DD" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[200px]">
                        {days.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={month} onValueChange={setMonth} required>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[200px]">
                        {months.map((m) => (
                          <SelectItem key={m.value} value={m.value}>
                            {m.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={year} onValueChange={setYear} required>
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="YYYY" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[200px]">
                        {years.map((y) => (
                          <SelectItem key={y} value={y}>
                            {y}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sex">Sex *</Label>
                  <Select
                    value={formData.sex}
                    onValueChange={(value) => setFormData({ ...formData, sex: value })}
                    required
                  >
                    <SelectTrigger className="max-w-[200px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="city">City/Village/State *</Label>
                  <Input
                    id="city"
                    placeholder="e.g., Nashik, Maharashtra"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    placeholder="e.g., India"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="schoolName">School/College Name *</Label>
                <Input
                  id="schoolName"
                  placeholder="Your institution name"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className="w-full"
                  required
                />
              </div>
            </div>

            {/* Father's Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Father's Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="fatherName">Father's Name *</Label>
                  <Input
                    id="fatherName"
                    placeholder="Full name"
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fatherContact">Father's Contact *</Label>
                  <Input
                    id="fatherContact"
                    type="tel"
                    placeholder="Phone number"
                    value={formData.fatherContact}
                    onChange={(e) => setFormData({ ...formData, fatherContact: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="fatherEmail">Father's Email</Label>
                  <Input
                    id="fatherEmail"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.fatherEmail}
                    onChange={(e) => setFormData({ ...formData, fatherEmail: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fatherOccupation">Father's Occupation *</Label>
                  <Input
                    id="fatherOccupation"
                    placeholder="Occupation"
                    value={formData.fatherOccupation}
                    onChange={(e) => setFormData({ ...formData, fatherOccupation: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Mother's Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Mother's Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="motherName">Mother's Name *</Label>
                  <Input
                    id="motherName"
                    placeholder="Full name"
                    value={formData.motherName}
                    onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motherContact">Mother's Contact *</Label>
                  <Input
                    id="motherContact"
                    type="tel"
                    placeholder="Phone number"
                    value={formData.motherContact}
                    onChange={(e) => setFormData({ ...formData, motherContact: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <Label htmlFor="motherEmail">Mother's Email</Label>
                  <Input
                    id="motherEmail"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.motherEmail}
                    onChange={(e) => setFormData({ ...formData, motherEmail: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motherOccupation">Mother's Occupation *</Label>
                  <Input
                    id="motherOccupation"
                    placeholder="Occupation"
                    value={formData.motherOccupation}
                    onChange={(e) => setFormData({ ...formData, motherOccupation: e.target.value })}
                    className="w-full"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Financial Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Financial Information</h3>
              
              <div className="space-y-2">
                <Label>Parents' Combined Monthly Income (₹) *</Label>
                <Select
                  value={formData.combinedIncome}
                  onValueChange={(value) => setFormData({ ...formData, combinedIncome: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="₹1 - ₹9,999">₹0 - ₹9,999</SelectItem>
                    <SelectItem value="₹10,000 - ₹19,999">₹10,000 - ₹19,999</SelectItem>
                    <SelectItem value="₹20,000 - ₹29,999">₹20,000 - ₹29,999</SelectItem>
                    <SelectItem value="₹30,000 - ₹39,999">₹30,000 - ₹39,999</SelectItem>
                    <SelectItem value="₹40,000 - ₹49,999">₹40,000 - ₹49,999</SelectItem>
                    <SelectItem value="₹50,000 - ₹59,999">₹50,000 - ₹59,999</SelectItem>
                    <SelectItem value=">₹60,000">₹60,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Course Selection removed for promotion flow; backend receives 'Promotion' */}

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}
