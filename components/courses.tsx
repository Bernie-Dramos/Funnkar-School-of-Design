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
    image: "/sketching-2d-art.png",
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
    image: "/3d-modelling.png",
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
    image: "/interior-design.png",
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
    image: "/game-design.png",
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
    image: "/3d-animation.png",
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
    image: "/vfx-animation.png",
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
    image: "/fine-arts.png",
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
    image: "/graphics-design.png",
  },
]

export default function Courses() {
  const [open, setOpen] = useState(false)
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [flippedCards, setFlippedCards] = useState<number[]>([])
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

  const toggleFlip = (courseId: number) => {
    setFlippedCards(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    )
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
      
      googleFormData.append('entry.822288240', fullName)
      googleFormData.append('entry.61734640', formData.email)
      googleFormData.append('entry.1888045156', formData.phone)
      googleFormData.append('entry.2139661344_year', year || '')
      googleFormData.append('entry.2139661344_month', month || '')
      googleFormData.append('entry.2139661344_day', day || '')
      googleFormData.append('entry.772600549', formData.selectedCourse)
      googleFormData.append('entry.772600549_sentinel', '')
      googleFormData.append('fvv', '1')
      googleFormData.append('partialResponse', '[null,null,"8810687125528681974"]')
      googleFormData.append('pageHistory', '0')
      googleFormData.append('fbzx', '8810687125528681974')
      
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSe7Fjiba9pZB3S6s2N_64xvT9J1MrkK_ftXsTiEtqVHCIMzmg/formResponse', {
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
          {courses.map((course) => {
            const isFlipped = flippedCards.includes(course.id)
            
            return (
              <div
                key={course.id}
                className="w-[24rem] h-[400px] perspective-1000 hover:-translate-y-2 transition-transform duration-300"
                style={{ perspective: '1000px' }}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Back of card - Visual/Image side (shown initially) */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
                    style={{ backfaceVisibility: 'hidden' }}
                    onClick={() => toggleFlip(course.id)}
                  >
                    <div 
                      className="w-full h-full border border-foreground/15 rounded-xl sm:rounded-2xl p-6 flex flex-col items-center justify-center relative bg-cover bg-center"
                      style={{ backgroundImage: `url(${course.image})` }}
                    >
                      {/* Badge at top */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-[#071727] px-3 py-1 rounded">
                          {course.level}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-10">
                        <span className="text-xs text-black font-medium bg-white px-3 py-1 rounded">
                          {course.duration}
                        </span>
                      </div>

                      {/* Visual content - gradient badge at bottom */}
                      <div className="absolute bottom-6 left-0 right-0 z-10">
                        <div className="text-center px-6">
                          <div className="inline-block px-6 py-3 bg-linear-to-r from-[#071727] to-[#19538D] border border-primary/30 rounded-lg">
                            <span className="text-sm sm:text-base font-semibold uppercase tracking-wider text-white">
                              Learn {course.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Front of card - Course details (shown when flipped) */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-xl sm:rounded-2xl"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className={`w-full h-full bg-linear-to-br ${course.accentColor} border border-foreground/15 rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col`}>
                      <div 
                        className="flex-1 cursor-pointer"
                        onClick={(e) => {
                          // Don't flip if clicking on a button element
                          if ((e.target as HTMLElement).tagName === 'BUTTON') {
                            return
                          }
                          toggleFlip(course.id)
                        }}
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
                      </div>

                      {/* Footer with tools */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-foreground/10">
                        <div className="flex gap-2">
                          {course.tools.map((tool, idx) => (
                            <div key={idx} className="px-2 py-1 bg-background/50 rounded text-xs font-bold">
                              {tool}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Apply Now Section */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setFormData({ ...formData, selectedCourse: "" })
              setOpen(true)
            }}
            className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-white/20 transition-all shadow-lg text-base border border-border/20"
          >
            Apply Now
          </button>
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
                  <Label>Select Course</Label>
                  <Select 
                    value={formData.selectedCourse} 
                    onValueChange={(value) => setFormData({ ...formData, selectedCourse: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a course" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px]">
                      {courses.map((course) => (
                        <SelectItem key={course.id} value={course.title}>
                          {course.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
