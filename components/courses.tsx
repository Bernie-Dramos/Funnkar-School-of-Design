"use client"

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
  return (
    <section id="courses" className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-background rounded-t-3xl shadow-2xl">
      <div className="mx-auto max-w-6xl">
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
          <button className="px-8 sm:px-12 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 text-base sm:text-lg">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  )
}
