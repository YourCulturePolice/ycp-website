import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDownRight } from "lucide-react"
import Image from "next/image"
import { BrandTicker } from "./brand-ticker"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-32 px-4 pb-20 text-center">
      <div className="container mx-auto max-w-4xl">
        <Badge variant="outline" className="mb-4 bg-zinc-900 px-4 py-2 text-[#db4a2b]">
          10x Your content earnings over time!
        </Badge>
        <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          <span contentEditable suppressContentEditableWarning>
            Make Your Content Pay You Twice
          </span>{" "}
          <span className="text-orange-500" contentEditable suppressContentEditableWarning>
            — Using Only What You Already Have!💁🏻‍♀️
          </span>
        </h1>
        <div className="flex flex-col items-center text-center">
          <p className="text-[calc(1.25rem-10px)] md:text-[calc(1.5rem-10px)] font-medium text-white font-['Verdana']">
            <span contentEditable suppressContentEditableWarning>
              We help creators/publishers grow their audience and maximize their earnings.
            </span>
          </p>
          <p className="mt-2 text-[calc(1.25rem-10px)] md:text-[calc(1.5rem-10px)] font-medium text-orange-500 font-['Verdana']">
            <span contentEditable suppressContentEditableWarning>
              Turning your Old Content = New{" "}
            </span>
            <span className="text-green-500" contentEditable suppressContentEditableWarning>
              $$$$
            </span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center mt-8 mb-8">
            <Link href="https://calendly.com/ksrana-yourculturepolice/30min" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#cb6ce6] text-black hover:bg-[#cb6ce6]/90 transition-all duration-300 flex items-center gap-3 px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg"
              >
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-pic-min-1c2FNLqbq5Bfo5mtF4Ybn62beFzmmJ.png"
                    alt="Profile Picture"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span contentEditable suppressContentEditableWarning>
                  Claim Your Free Strategy Call, Now!
                </span>
              </Button>
            </Link>
          </div>
          <p className="text-zinc-400 text-sm mb-8">
            <span contentEditable suppressContentEditableWarning>
              Simple terms. No lock-ins. Clear deliverables.
            </span>
          </p>
        </div>

        <BrandTicker />

        <div className="flex justify-center mt-24">
          <Badge variant="outline" className="mb-4 bg-zinc-900 px-6 py-3 text-white flex items-center gap-2">
            Previously worked with
            <ArrowDownRight className="w-4 h-4 text-zinc-400" />
          </Badge>
        </div>
      </div>
    </section>
  )
}

