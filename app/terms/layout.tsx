import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type React from "react" // Import React

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

