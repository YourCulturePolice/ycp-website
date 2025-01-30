import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { KeyProblems } from "@/components/sections/key-problems"
import { SolutionSteps } from "@/components/sections/solution-steps"
import { Partnership } from "@/components/partnership"
import { SuccessStories } from "@/components/sections/success-stories"
import { Services } from "@/components/sections/services"
import { Numbers } from "@/components/sections/numbers"
import dynamic from "next/dynamic"

const DynamicTestimonials = dynamic(() => import("@/components/testimonials").then((mod) => mod.Testimonials))
const DynamicFAQ = dynamic(() => import("@/components/faq").then((mod) => mod.FAQ))

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <SuccessStories />
      <KeyProblems />
      <SolutionSteps />
      <Services />
      <Partnership id="partnership" />
      <DynamicTestimonials id="testimonials" />
      <Numbers />
      <DynamicFAQ id="faq" />
      <Footer />
    </div>
  )
}

