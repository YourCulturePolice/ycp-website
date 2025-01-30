import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function AboutUs() {
  const timelineEvents = [
    {
      date: "June 2016",
      title: "The Beginning",
      description:
        "I started my first gig with MTV & Vh1 fresh out of college. This is where it all started.",
    },
    {
      date: "January 2017",
      title: "The First Start-Up",
      description:
        "Soon after Incredible Inclusions (the 1st company) emerged with a college friend. We began disrupting the university marketing segment and worked with the likes of Red Bull, Tinder, Ray-Ban etc. across 400+ colleges.",
    },
    {
      date: "June 2019",
      title: "Back in Corporate-ish Action?",
      description:
        "Post a successful exit, I figured my way back to work at NH7 Weekender to curate 10+ brand partnerships, create + scale the university marketing division to $1M+ business through 10+ creator led branded IPs @ OML.",
    },
    {
      date: "May 2021",
      title: "Facebook Gaming Happens!",
      description: "Back when it was Facebook, I joined them as the 2nd hire to build & scale Facebook Gaming's video business in India. Developed 5+ programs, acquired 700+ creators & communities to generate $300M+ in revenue.",
    },
    {
      date: "January 2023",
      title: "MSN turns to video, globally!",
      description:
        "Microsoft came to the party and handed me the job to transform their age-old news product MSN into a diverse multimedia video product. As their 1st employee, led product & partnerships strategy across 8+ markets. Concluded my gig with the platform standing at 5000+ partners and generates >$1B in total revenue.",
    },
    {
      date: "January 2025",
      title: "Your Culture Police.",
      description:
        "Launched Your Culture Police to help creators and publishers maximize their earnings through strategic content distribution across platforms they never really knew about.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 px-4 pb-20 text-center">
        <Badge variant="outline" className="mb-4 bg-zinc-900 px-4 py-2 text-white">
          ABOUT US
        </Badge>
        <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-7xl">
          Innovating,
          <br />
          Overcoming, and
          <br />
          <span className="text-orange-500">Succeeding</span>
        </h1>
      </section>

     {/* Founder Section */}
<section className="py-20 px-4">
  <div className="container mx-auto max-w-6xl">
    <div className="grid gap-8 md:grid-cols-1 max-w-4xl mx-auto">
      <div className="bg-zinc-900 rounded-[32px] p-12 border-2 border-orange-500">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-pic-min-1c2FNLqbq5Bfo5mtF4Ybn62beFzmmJ.png"
                alt="Founder"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-3xl font-bold">KSHITIJ RANA</h2>
            <p className="text-zinc-400">CREATOR</p>
            <p className="text-lg text-zinc-300">
              Hi, I'm Kshitij!
              I was the 1st hire @ Microsoft (MSN + Bing) & the 2nd hire @ Meta (FB Gaming) leading their video business strategy, globally. I've acquired and scaled over 2500+ content owners across platforms to generate $10B+ views & $1B+ in revenue for my partners and the platforms alike. With 8+yrs of experience I've curated and executed over 100+ branded campaigns and managed the likes of Tanmay Bhat, Samay Raina & Zakir Khan. :)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-16 text-center">The Journey</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-orange-500" />

            {/* Timeline Events */}
            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-zinc-900 p-6 rounded-xl border border-orange-500">
                      <p className="text-orange-500 font-bold mb-2">{event.date}</p>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-zinc-400">{event.description}</p>
                    </div>
                  </div>

                  {/* Circle on Timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full" />

                  {/* Empty space for alignment */}
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

