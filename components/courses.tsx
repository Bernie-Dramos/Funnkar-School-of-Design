"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const courses = [
  {
    id: 1,
    title: "Sketching and 2D Art",
    description: "Develop foundational drawing and sketching skills with digital 2D art techniques. Learn composition, perspective, and digital illustration.",
    level: "Beginner",
    duration: "1-3 months",
    benefits: ["1-3 months core course", "6 month specialization program", "Exclusive e-books & learning Resources", "Enrollment Benefits"],
    tools: ["Ps", "Ai", "Procreate"],
    accentColor: "from-primary/25 to-primary/8",
  },
  {
    id: 2,
    title: "3D Modelling",
    description: "Create stunning 3D models and renders with industry-standard Maya and 3ds Max software. Professional 3D workflow.",
    level: "Intermediate",
    duration: "1-3 months",
    benefits: ["1-3 months core course", "6 month specialization program", "Exclusive e-books & learning Resources", "Enrollment Benefits"],
    tools: ["Maya", "3ds Max"],
    accentColor: "from-primary/20 to-primary/5",
  },
  {
    id: 3,
    title: "Interior Design",
    description: "Design beautiful and functional spaces. Learn space planning, 3D visualization, and design principles for residential and commercial projects.",
    level: "Intermediate",
    duration: "3-6 months",
    benefits: ["Space planning", "3D visualization", "Exclusive e-books & learning Resources", "Real-world projects"],
    tools: ["SketchUp", "AutoCAD", "3ds Max"],
    accentColor: "from-primary/27 to-primary/11",
  },
  {
    id: 4,
    title: "Game Design",
    description: "Learn game development from concept to creation. Master game engines, level design, and interactive storytelling.",
    level: "Intermediate",
    duration: "3-6 months",
    benefits: ["Game engine training", "Level design", "Exclusive e-books & learning Resources", "Portfolio projects"],
    tools: ["Unity", "Unreal", "Blender"],
    accentColor: "from-primary/26 to-primary/9",
  },
  {
    id: 5,
    title: "3D Animation",
    description: "Master character animation, rigging, and motion dynamics. Create professional animated sequences for film and games.",
    level: "Advanced",
    duration: "3-6 months",
    benefits: ["Advanced animation techniques", "Character rigging", "Exclusive e-books & learning Resources", "Demo reel creation"],
    tools: ["Maya", "Blender", "MotionBuilder"],
    accentColor: "from-primary/22 to-primary/6",
  },
  {
    id: 6,
    title: "VFX Animation Diploma",
    description: "Comprehensive VFX training covering compositing, motion graphics, and visual effects. Industry-ready diploma program.",
    level: "Professional",
    duration: "6-12 months",
    benefits: ["Diploma certification", "Portfolio development", "Exclusive e-books & learning Resources", "Job placement assistance"],
    tools: ["Ae", "Nuke", "Houdini", "Pr"],
    accentColor: "from-primary/28 to-primary/12",
  },
  {
    id: 7,
    title: "Fine Arts",
    description: "Explore traditional and digital art techniques. Develop your artistic voice through painting, drawing, and mixed media.",
    level: "All Levels",
    duration: "3-6 months",
    benefits: ["Traditional & digital techniques", "Portfolio development", "Exclusive e-books & learning Resources", "Exhibition opportunities"],
    tools: ["Ps", "Procreate", "Traditional Media"],
    accentColor: "from-primary/24 to-primary/7",
  },
  {
    id: 8,
    title: "Graphics Design",
    description: "Master InDesign, Illustrator, Lightroom, and Photoshop. 1-3 months core course with 6 month specialization program available.",
    level: "All Levels",
    duration: "3-6 months",
    benefits: ["1-3 months core course", "6 month specialization program", "Exclusive e-books & learning Resources", "Enrollment Benefits"],
    tools: ["Id", "Ai", "Lr", "Ps"],
    accentColor: "from-primary/30 to-primary/10",
  },
]

export default function Courses() {
  const [open, setOpen] = useState(false)
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedCourse: "",
  })

  const openApplicationForm = (courseTitle: string) => {
    setFormData({ ...formData, selectedCourse: courseTitle })
    setOpen(true)
  }

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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      selectedCourse: "",
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
    
    // Validate all fields are filled
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.selectedCourse) {
      alert("Please fill in all fields")
      return
    }
    
    if (!day || !month || !year) {
      alert("Please select your complete date of birth")
      return
    }
    
    const dateOfBirth = `${day}/${month}/${year}`
    const fullName = `${formData.firstName} ${formData.lastName}`.trim()
    
    // Submit to Google Form
    try {
      const googleFormData = new FormData()
      
      googleFormData.append('entry.433936759', fullName)
      googleFormData.append('entry.1339288077', formData.email)
      googleFormData.append('entry.1494324912', formData.phone)
      googleFormData.append('entry.684334802', dateOfBirth)
      googleFormData.append('entry.550490451', formData.selectedCourse)
      
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfbj-NVyCmnsBQsxOValIxUxR9UK1jvSIrQUrF3r6RXHjXLXQ/formResponse', {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors'
      })
      
      alert("Application submitted successfully!")
      console.log("Form submitted successfully!")
      resetForm()
      setOpen(false)
    } catch (error) {
      console.error("Submission error:", error)
      alert("There was an error submitting your application. Please try again.")
    }
  }

  return (
    <section id="courses" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-background rounded-t-3xl shadow-2xl flex flex-col">
      <div className="mx-auto max-w-6xl w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 text-balance tracking-tight">
            Our Courses & <span className="text-primary">Programs</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            From beginner fundamentals to advanced professional certifications, we offer courses designed for every
            skill level.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-linear-to-br ${course.accentColor} border border-foreground/15 rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col w-[24rem]`}
            >
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
                  {course.level}
                </span>
                <span className="text-xs text-foreground/50 font-medium">{course.duration}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors font-poppins">
                Learn {course.title}
              </h3>
              <p className="text-foreground/70 text-sm mb-5 line-clamp-3">{course.description}</p>

              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2">Enrollment Benefits</h4>
                <ul className="space-y-1.5 text-xs text-foreground/70">
                  {course.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">◆</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {course.tools && (
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-foreground/10">
                  <div className="flex gap-2">
                    {course.tools.map((tool, idx) => (
                      <div key={idx} className="px-2 py-1 bg-background/50 rounded text-xs font-bold">
                        {tool}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => openApplicationForm(course.title)}
                    className="px-2 py-1 bg-white text-black rounded-md font-semibold hover:bg-white/90 transition-all text-xs border border-border/20"
                  >
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-poppins">Apply for a Course</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Date of Birth</Label>
                  <div className="flex gap-1">
                    <Select value={day} onValueChange={setDay}>
                      <SelectTrigger>
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
                    
                    <Select value={month} onValueChange={setMonth}>
                      <SelectTrigger>
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
                    
                    <Select value={year} onValueChange={setYear}>
                      <SelectTrigger>
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
                  <Label>Selected Course</Label>
                  <Input
                    value={formData.selectedCourse}
                    disabled
                    className="bg-muted"
                  />
                </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Application
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}
