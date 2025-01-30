"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface Step {
  step: string
  title: string
  description: string
  icon: string
}

const DEFAULT_STEPS: Step[] = [
  {
    step: "01",
    title: "Reach New Audiences",
    description:
      "We syndicate your content across platforms, partnering with networked channels to maximize exposure and drive revenue.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-I6WnHTYgp0dwUR0Pzgqk3JlbwYazk6.png",
  },
  {
    step: "02",
    title: "Increase Your Earnings",
    description:
      "Our strategies are designed to increase creators monthly revenue by optimizing monetization across platforms.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02-6IM95RVbJ4dPAXQhzu6aYOqjYRG3Y4.png",
  },
  {
    step: "03",
    title: "Unlock Opportunities",
    description:
      "Access exclusive opportunities and all the tools you need to expand your reach and boost your revenue.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03-lWhZvMSsyMo4UWBwQUQDwoV5CF044d.png",
  },
  {
    step: "04",
    title: "Zero Extra Effort",
    description: "We bring you passive, revenue split opportunities that require no extra workload on your end.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-NIy1KqoDuJT9FIN2ygpHgEobb9pd7v.png",
  },
]

export function SolutionSteps() {
  const [steps, setSteps] = useState<Step[]>(DEFAULT_STEPS)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingField, setEditingField] = useState<"title" | "description" | null>(null)

  const handleEdit = (index: number, field: "title" | "description", value: string) => {
    const newSteps = [...steps]
    newSteps[index] = { ...newSteps[index], [field]: value }
    setSteps(newSteps)
  }

  return (
    <section id="solution-steps" className="px-4 py-20 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-zinc-900 rounded-full text-white mb-4 border border-white">
            Simple Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span contentEditable suppressContentEditableWarning>
              What makes us different?
            </span>
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, i) => (
            <Card key={i} className="bg-zinc-900 p-6 border-2 border-[#db4a2b] rounded-[32px]">
              <div className="mb-4">
                <Image
                  src={step.icon || "/placeholder.svg"}
                  alt={`Step ${step.step}`}
                  width={48}
                  height={48}
                  className="text-[#db4a2b]"
                />
              </div>
              <div className="mb-2 relative">
                {editingIndex === i && editingField === "title" ? (
                  <input
                    type="text"
                    value={step.title}
                    onChange={(e) => handleEdit(i, "title", e.target.value)}
                    onBlur={() => {
                      setEditingIndex(null)
                      setEditingField(null)
                    }}
                    className="w-full bg-transparent text-xl font-bold text-white border-b border-[#db4a2b] outline-none focus:ring-2 focus:ring-[#db4a2b] px-2 py-1"
                    autoFocus
                  />
                ) : (
                  <h3
                    className="text-xl font-bold text-white cursor-pointer hover:text-[#db4a2b] transition-colors"
                    onClick={() => {
                      setEditingIndex(i)
                      setEditingField("title")
                    }}
                  >
                    <span contentEditable suppressContentEditableWarning>
                      {step.title}
                    </span>
                  </h3>
                )}
              </div>
              <div className="relative">
                {editingIndex === i && editingField === "description" ? (
                  <textarea
                    value={step.description}
                    onChange={(e) => handleEdit(i, "description", e.target.value)}
                    onBlur={() => {
                      setEditingIndex(null)
                      setEditingField(null)
                    }}
                    className="w-full bg-transparent text-zinc-400 border-b border-[#db4a2b] outline-none resize-none focus:ring-2 focus:ring-[#db4a2b] px-2 py-1"
                    autoFocus
                  />
                ) : (
                  <p
                    className="text-zinc-400 cursor-pointer hover:text-zinc-300 transition-colors"
                    onClick={() => {
                      setEditingIndex(i)
                      setEditingField("description")
                    }}
                  >
                    <span contentEditable suppressContentEditableWarning>
                      {step.description}
                    </span>
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

