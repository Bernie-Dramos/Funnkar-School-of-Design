import Hero from "@/components/hero"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Courses from "@/components/courses"
import Features from "@/components/features"

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <div className="relative">
        <Features />
        <Courses />
      </div>
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}
