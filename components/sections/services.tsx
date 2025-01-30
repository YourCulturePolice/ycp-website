"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"

interface Service {
  title: string
  description: string
  icon: string
}

const DEFAULT_SERVICES: Service[] = [
  {
    title: "Facebook Management",
    description:
      "We use the latest strategies to maximize your exposure and revenue on Facebook while protecting your content.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facebook_Symbol_0-zHSt82qVnPBtMJEB2vDPqoNSXErOmZ.svg",
  },
  {
    title: "Snapchat Management",
    description:
      "Let us help you make the most of what Snapchat has to offer while connecting directly with your audience.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snapchat_Logo_0-z6cmmlZbe07mYPzyFE3sP6mXogqoSl.svg",
  },
  {
    title: "MSN Management",
    description:
      "Expand your reach on MSN through our partnerships and distribution network, while securing backend claims.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSN_Logo_0-lscj06US5qjRofAvc6ix2E0xRXYjbs.svg",
  },
  {
    title: "Rights Management",
    description:
      "Control re-uploaded content, generate revenue, and gain insights into your audience on Facebook and YouTube.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rights%20Management-8w2X6RJ5N55r18OZiOPtAXLUeJ1ubI.png",
  },
  {
    title: "Sponsorships",
    description:
      "Unlock sponsorship opportunities, generate revenue, and reach new audiences with strategic brand partnerships.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sponsorship-qCKVKL3PdckpOA49Pu14zLuwvnuxAj.png",
  },
  {
    title: "Exclusive Opportunities",
    description:
      "Access exclusive opportunities through unique platform advantages, and maximize your revenue and reach.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exclusive-CRbKtZehGgo25nyh7md7bwfJDs5mmE.png",
  },
]

export function Services() {
  const [services, setServices] = useState<Service[]>(DEFAULT_SERVICES)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingField, setEditingField] = useState<"title" | "description" | null>(null)

  const handleEdit = (index: number, field: "title" | "description", value: string) => {
    const newServices = [...services]
    newServices[index] = { ...newServices[index], [field]: value }
    setServices(newServices)
  }

  return (
    <section id="services" className="px-4 py-20 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-zinc-900 px-4 py-2 text-white">
            Services
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            <span contentEditable suppressContentEditableWarning>
              A deeper look!
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            <span contentEditable suppressContentEditableWarning>
              Our services are designed around a revenue-sharing model, helping you grow effortlessly at no extra cost.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-zinc-900 rounded-[32px] p-6 border-2 border-[#db4a2b]">
              <div className="mb-4 h-16 relative">
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <div className="mb-2">
                {editingIndex === i && editingField === "title" ? (
                  <input
                    type="text"
                    value={service.title}
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
                      {service.title}
                    </span>
                  </h3>
                )}
              </div>

              <div>
                {editingIndex === i && editingField === "description" ? (
                  <textarea
                    value={service.description}
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
                      {service.description}
                    </span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

