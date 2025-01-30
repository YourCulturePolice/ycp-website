import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Coming Soon, Stay Tuned</h1>
      <p className="text-zinc-400 text-lg mb-8 text-center max-w-2xl">
        We're working on something exciting for brands. Subscribe to our newsletter to be the first to know when we
        launch.
      </p>
      <Link
        href="https://yourculturepolice-newsletter.beehiiv.com/subscribe"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors text-lg font-medium"
      >
        Subscribe to Newsletter
      </Link>
    </div>
  )
}

