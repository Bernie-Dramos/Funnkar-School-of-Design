"use client"

const teamMembers = [
  {
    name: "Arry Kinglee",
    role: "Founder & Creative Director",
    description:
      "Visionary designer with 8+ years of experience creating impactful brand identities. Specializes in strategic brand positioning and creative direction for diverse industries.",
    tools: ["Figma", "Adobe Suite", "Framer"],
    image: "/professional-designer-founder.jpg",
  },
  {
    name: "Joseph Geyevu",
    role: "Brand Strategist",
    description:
      "Expert in brand positioning and consumer psychology. Develops comprehensive brand strategies that resonate with target audiences and drive business growth.",
    tools: ["Miro", "Adobe XD", "Analytics Tools"],
    image: "/brand-strategist-professional.jpg",
  },
  {
    name: "Lennox Galanje",
    role: "UI/UX Designer",
    description:
      "Digital design specialist creating intuitive interfaces and compelling user experiences. Passionate about translating brand vision into pixel-perfect designs.",
    tools: ["Figma", "Protopie", "CSS/Tailwind"],
    image: "/ui-ux-designer-professional.jpg",
  },
  {
    name: "Mirza Zainab",
    role: "Content Creator Specialist",
    description:
      "Dedicated to empowering content creators with custom visual identities. Combines trending aesthetics with authentic brand storytelling for digital platforms.",
    tools: ["Canva", "DaVinci Resolve", "Adobe Premiere"],
    image: "/content-creator-specialist-professional.jpg",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Our Coaches</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Meet the Team</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A diverse group of talented designers, strategists, and creators dedicated to bringing your brand vision to
            life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-border bg-card/40 overflow-hidden hover:border-accent/50 hover:bg-card/60 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-linear-to-br from-accent/20 to-accent/5">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">{member.description}</p>

                {/* Tools Section */}
                <div>
                  <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-2">Top Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {member.tools.map((tool, toolIdx) => (
                      <span
                        key={toolIdx}
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
