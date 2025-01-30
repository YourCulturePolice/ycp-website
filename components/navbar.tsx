"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

const NAV_ITEMS = [
  { label: "Home", href: "hero" },
  { label: "How It Works", href: "key-problems" },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "partnership" },
  { label: "Testimonials", href: "testimonials" },
  { label: "FAQ", href: "faq" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("/")) {
      if (sectionId === "/") {
        window.location.href = "/"
      } else {
        window.location.href = sectionId
      }
      return
    }

    if (sectionId === "hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`fixed top-4 left-1/2 z-50 w-10/12 max-w-5xl -translate-x-1/2 transform rounded-full border border-zinc-800 px-4 py-3 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Transparent%20Horizontal%20Black%20Bg-s8jQicajBxQ4dLaQ2nNbZfG4DNBry7.png"
            alt="Your Culture Police"
            width={120}
            height={30}
            className="mr-8 cursor-pointer"
            onClick={() => scrollToSection("/")}
          />
          <div className="hidden md:flex items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <Link
          href="https://calendly.com/ksrana-yourculturepolice/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#cb6ce6] text-black hover:bg-[#cb6ce6]/90 transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:scale-105 hover:shadow-lg"
        >
          <div className="w-4 h-4 rounded-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-pic-min-1c2FNLqbq5Bfo5mtF4Ybn62beFzmmJ.png"
              alt="Profile Picture"
              width={16}
              height={16}
              className="w-full h-full object-cover"
            />
          </div>
          Book Your Call with Kshitij, Now!
        </Link>
      </div>
    </nav>
  )
}

