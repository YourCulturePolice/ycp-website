import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Partnership({ id }: { id?: string }) {
  return (
    <section id={id} className="px-4 py-20">
      <div className="container mx-auto max-w-xl">
        {" "}
        {/* Reduced width */}
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 bg-zinc-900 px-4 py-2 text-white">
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl">Why we'd click?</h2>
        </div>
        <div className="bg-[#db4a2b] rounded-xl p-8 border-2 border-[#db4a2b]">
          {" "}
          {/* Updated background and border */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block px-4 py-1 bg-black text-white rounded-full text-sm mb-4">Transparent</span>
              <h3 className="text-4xl font-bold mb-2 text-black">
                Straight-Up<span className="text-xl font-normal">/Rev-Split</span>
              </h3>
              <p className="text-black mb-4">Smooth payments. Pause / Cancel anytime.</p>
            </div>
          </div>
          <p className="text-lg mb-6 text-black">We earn, only when you earn. :)</p>
          {/* Testimonial with profile picture */}
          <div className="bg-black rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nishant%20PFP-lB0UOmj6y1dIrjEFTxiLgAQ9M4evxL.png"
                alt="Nishant"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-white">Nishant</p>
                <p className="text-sm text-zinc-400">Co-Founder, AFK Gaming</p>
              </div>
            </div>
            <p className="text-zinc-300">"Phenomenal, fast & dependable."</p>
          </div>
          <Link
            href="https://calendly.com/ksrana-yourculturepolice/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#cb6ce6] text-black text-center py-4 rounded-xl mb-8 hover:bg-[#cb6ce6]/90 transition-colors hover:scale-105 duration-300"
          >
            Book Now →
          </Link>
          <div>
            <p className="font-semibold mb-4 text-black">What We Do:</p>
            <ul className="space-y-3">
              {[
                "Content Strategy",
                "Distribution Management",
                "Rights Protection",
                "Revenue Collection",
                "Performance Analytics",
                "Licensing Deals",
                "Platform Relations",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-black">
                  <Check className="h-5 w-5 text-black" /> {/* Updated check color */}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

