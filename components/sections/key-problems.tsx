import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor } from "lucide-react"
import Image from "next/image"

export function KeyProblems() {
  return (
    <section id="key-problems" className="px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 bg-zinc-900 px-6 py-3 text-white inline-flex items-center gap-2">
            Key Partner Problems
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span contentEditable suppressContentEditableWarning>
              You don't have a creation limitation... you're just failing to distribute that existing library
              wider.🤷🏻‍♀️
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">
            <span contentEditable suppressContentEditableWarning>
              The REAL challenge isn't creating more content. It's making your existing content earn more $$.
            </span>
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Forgotten Content",
              description: "You've made tons of great content over the years that's just sitting there.",
              icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/confusion-cfcAqNFfGzdDh7G3cq6Vwfuj7snDU5.png",
            },
            {
              title: "Same Old Platforms",
              description: "Your content is stuck on the usual platforms, competing with millions of others.",
              icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/same%20old%20platforms-1vzGC9xC0BPdmwh0KYtSLHGNxTJKPf.png",
            },
            {
              title: "No Time to Explore",
              description: "Managing content across different platforms feels like a second job.",
              icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/No%20time-SiyHEgR36IySHScLpPCygjIi5vZQXD.png",
            },
          ].map((feature, i) => (
            <Card key={i} className="bg-zinc-900 p-6 border-2 border-[#db4a2b] rounded-[32px]">
              <div className="mb-4">
                <Image
                  src={feature.icon || "/placeholder.svg"}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="text-[#db4a2b]"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#db4a2b]">
                <span contentEditable suppressContentEditableWarning>
                  {feature.title}
                </span>
              </h3>
              <p className="text-zinc-400">
                <span contentEditable suppressContentEditableWarning>
                  {feature.description}
                </span>
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

