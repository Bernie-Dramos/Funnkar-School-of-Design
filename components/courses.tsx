"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const courses = [
  {
    id: 1,
    title: "Graphics Design",
    description: "Master InDesign, Illustrator, Lightroom, and Photoshop. 1-3 months core course with 6 month specialization program available.",
    level: "All Levels",
    duration: "1-3 months",
    benefits: ["1-3 months core course", "6 month specialization program", "Exclusive e-books & learning Resources", "Enrollment Benefits"],
    tools: ["Id", "Ai", "Lr", "Ps"],
    accentColor: "from-primary/30 to-primary/10",
  },
  {
    id: 2,
    title: "2D Animation",
    description: "Learn professional 2D animation with Photoshop, After Effects, Premiere Pro, and Animate. Complete animation workflow training.",
    level: "Intermediate",
    duration: "1-3 months",
    benefits: ["1-3 months core course", "6 month specialization program", "Exclusive e-books & learning Resources", "Enrollment Benefits"],
    tools: ["Ps", "Ae", "Pr", "An"],
    accentColor: "from-primary/25 to-primary/8",
  },
  {
    id: 3,
    title: "3D Modelling",
    description: "Create stunning 3D models and renders with industry-standard Maya and 3ds Max software. Professional 3D workflow.",
    level: "Advanced",
    duration: "1-3 months",
    benefits: ["1-3 months core course", "6 month specialization program", "Exclusive e-books & learning Resources", "Enrollment Benefits"],
    tools: ["Maya", "3ds Max"],
    accentColor: "from-primary/20 to-primary/5",
  },
]

export default function Courses() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedCourse: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ ...formData, dateOfBirth: date })
    // Handle form submission here
    setOpen(false)
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-linear-to-br ${course.accentColor} border border-foreground/15 rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
                  {course.level}
                </span>
                <span className="text-xs text-foreground/50 font-medium">{course.duration}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors">
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
                <div className="flex gap-2 mt-4 pt-4 border-t border-foreground/10">
                  {course.tools.map((tool, idx) => (
                    <div key={idx} className="px-2 py-1 bg-background/50 rounded text-xs font-bold">
                      {tool}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="px-8 sm:px-12 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 text-base sm:text-lg">
                Apply Now
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Apply for Course</DialogTitle>
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
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Select Course</Label>
                  <Select
                    value={formData.selectedCourse}
                    onValueChange={(value) => setFormData({ ...formData, selectedCourse: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a course" />
                    </SelectTrigger>
                    <SelectContent>
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
        </div>
      </div>
    </section>
  )
}
