"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { subscribeToNewsletter } from "@/app/actions/newsletter"
import type { NewsletterResponse } from "@/types/newsletter"

export function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData()
    formData.append("email", email)

    try {
      const result = await subscribeToNewsletter(formData)
      if (result.success) {
        setStatus("success")
        setMessage("Successfully subscribed to newsletter!")
        setEmail("")
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : "Failed to subscribe. Please try again.")
    }
  }

  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="relative w-48 h-48 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Transparent%20Stacked%20Black%20Bg-dV5OfqaFtsFBFw0N6WnmRZnfHDeAcO.png"
                alt="Your Culture Police"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-zinc-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/privacy" className="block text-zinc-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-zinc-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/brands" className="block text-zinc-400 hover:text-white transition-colors">
                For Brands
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-zinc-400 mb-4">Stay up to date with us.</p>
            <Link
              href="https://yourculturepolice-newsletter.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Subscribe
            </Link>
            <p className="text-zinc-400 text-sm mt-4">
              By signing up you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-white">
                privacy policy
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-zinc-800">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="https://www.linkedin.com/in/kshitijrana1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In-White-14-G4qcvKaXvuSvkHn7HCt6KmNU7cKA9y.png"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61563239372696"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facebook_Logo_Secondary-UpWbjYT165WlfVKZqqIs3K1UTG61c8.png"
                alt="Facebook"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://www.instagram.com/yourculturepolice/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Instagram_Glyph_White-Z4kF9ec5VhyMQap9hzkDpih0uJ3b4L.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://x.com/yourculture101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/X%20logo-white-Asun3rkIdYiRyzNadamZ86RufvOp3W.png"
                alt="X"
                width={20}
                height={20}
              />
            </Link>
          </div>
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Your Culture Police. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

