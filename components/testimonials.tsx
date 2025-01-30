import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

const TESTIMONIALS = [
  {
    name: "Emma McGuire",
    position: "CRO",
    company: "VideoElephant",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mcguire-4cJHP86unrvqvQfrHdCMHj3AqjSrrj.png",
    quote:
      "Kshitij consistently went above and beyond to ensure our needs were met. He demonstrated a deep understanding of our business goals and provided strategic advice that was both insightful and actionable!",
    rating: 5,
  },
  {
    name: "Ankit Dhadda",
    position: "SPM",
    company: "Facebook Gaming",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dhadda-aByufEh92HBe8xgy8uWWBYHLuKFPsy.jpeg",
    quote:
      "Kshitij consistently demonstrated a deep understanding of the industry and its key players. His insights and expertise were invaluable in helping us navigate the complex and rapidly evolving gaming landscape in India.",
    rating: 5,
  },
  {
    name: "Ashish Jaiman",
    position: "Director",
    company: "Bing & MSN",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ashish-PXRk9iAND9kIiXzfEbRJnxstd8K80E.jpeg",
    quote:
      "Kshitij proactively provided impressive insights that significantly influenced our strategy. His relentless focus on making our partners successful on our platform, contributed to a remarkable 10X growth in the business.",
    rating: 5,
  },
]

export function Testimonials({ id }: { id?: string }) {
  return (
    <section id={id} className="px-4 py-20 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 bg-zinc-900 px-4 py-2 text-white">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span contentEditable suppressContentEditableWarning>
              Loved by businesses worldwide
            </span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Card key={i} className="bg-zinc-900 p-6 border-2 border-[#db4a2b] rounded-[32px]">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-zinc-800">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">
                    <span contentEditable suppressContentEditableWarning>
                      {testimonial.name}
                    </span>
                  </h3>
                  <p className="text-sm text-zinc-400">
                    <span contentEditable suppressContentEditableWarning>
                      {testimonial.position}, {testimonial.company}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-zinc-300">
                <span contentEditable suppressContentEditableWarning>
                  "{testimonial.quote}"
                </span>
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

