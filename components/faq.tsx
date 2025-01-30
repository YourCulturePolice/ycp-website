"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const FAQ_ITEMS = [
  {
    question: "What kind of content can we supply?",
    answer:
      "We work with: Archived video libraries, Repurposed short-form and long-form video, Exclusive or proprietary content, Audio, podcasts, and even talent-led video IPs. Our goal is to make your existing content work harder for you.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "While results vary based on your content and audience, most of our partners see: Increased revenue from previously dormant content, New audiences on niche or emerging platforms, Streamlined processes for repurposing and distribution.",
  },
  {
    question: "What if I don't have the time to manage the process?",
    answer:
      "That's exactly why we exist! We handle everything—from content analysis to uploading—so you can focus on what you do best.",
  },
  {
    question: "How does Your Culture Police make money?",
    answer:
      "We work on a revenue-sharing fee model. This ensures our incentives align with yours—we only succeed when you do.",
  },
  {
    question: "Who can partner with Your Culture Police?",
    answer:
      "Our ideal partners include: Legacy Media Houses, Publishers & Broadcasters, OTTs, A-List Influencers, New Media Houses, Multi-Channel Networks (MCNs), Telecom Networks, Talent Agencies, Brands, Individual Creators. If you have a library of underutilized content, we'd love to work with you.",
  },
  {
    question: "What does Your Culture Police do?",
    answer:
      "We specialize in helping content owners monetize their archived library by distributing it across multiple platforms. From broadcasters to creators, we enable you to earn more revenue and reach new audiences with your existing content.",
  },
  {
    question: "How does Your Culture Police work?",
    answer:
      "YCP uses AI to analyze your existing content, identify optimization opportunities, and implement changes that drive higher conversion rates.",
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see significant improvements within 14 days of implementation.",
  },
  {
    question: "Is there a minimum contract period?",
    answer: "No, we believe in earning your trust month by month. There are no lock-in contracts.",
  },
]

export function FAQ({ id }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id={id} className="px-4 py-20 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 bg-zinc-900 px-4 py-2 text-white">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold">
            <span contentEditable suppressContentEditableWarning>
              Common Questions
            </span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* FAQ Column */}
          <div className="flex-1 space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-zinc-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="font-medium pr-8">
                    <span contentEditable suppressContentEditableWarning>
                      {item.question}
                    </span>
                  </span>
                  <Plus className={`h-1.25 w-1.25 transition-transform ${openIndex === i ? "rotate-45" : ""}`} />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 text-zinc-400">
                    <span contentEditable suppressContentEditableWarning>
                      {item.answer}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="lg:w-80">
            <div className="bg-[#db4a2b] rounded-2xl p-6 text-center">
              <div className="mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-pic-min-1c2FNLqbq5Bfo5mtF4Ybn62beFzmmJ.png"
                  alt="Profile Picture"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                <span contentEditable suppressContentEditableWarning>
                  Have more questions?
                </span>
              </h3>
              <p className="text-black mb-4">
                <span contentEditable suppressContentEditableWarning>
                  Book a FREE intro call.
                </span>
              </p>
              <Link
                href="https://calendly.com/ksrana-yourculturepolice/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black text-white py-3 rounded-xl hover:bg-zinc-900 transition-colors"
              >
                Claim Your Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

