import Hero from "@/components/hero"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Courses from "@/components/courses"
import Features from "@/components/features"
import Promotion from "@/components/promotion"

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Promotion />
      <Features />
      <Courses />
      <Contact />
      <Footer />
    </div>
  )
}
