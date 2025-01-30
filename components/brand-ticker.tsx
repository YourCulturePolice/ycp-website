"use client"

import Image from "next/image"

export function BrandTicker() {
  const brands = [
    {
      name: "Reddit",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reddit_Symbol_Alternative_3_0-eCJtQonVq5TckpuTDaKuRpZRSR6hqz.svg",
      width: 52,
      height: 52,
    },
    {
      name: "Snapchat",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snapchat_Logo_0-z6cmmlZbe07mYPzyFE3sP6mXogqoSl.svg",
      width: 48,
      height: 48,
    },
    {
      name: "Pinterest",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pinterest_Symbol_0-XE3u6prLazAF179Ft4JzN6Pn6wnJxu.svg",
      width: 48,
      height: 48,
    },
    {
      name: "MSN",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSN_Logo_0-lscj06US5qjRofAvc6ix2E0xRXYjbs.svg",
      width: 74,
      height: 28,
    },
    {
      name: "YouTube",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YouTube_Symbol_0-j1vZn08fpS1LFVzRkUtF9FPefzK4Bk.svg",
      width: 48,
      height: 48,
    },
    {
      name: "Facebook",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Facebook_Symbol_0-zHSt82qVnPBtMJEB2vDPqoNSXErOmZ.svg",
      width: 48,
      height: 48,
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto mb-12 py-8 overflow-hidden">
      <div className="ticker-container">
        <div className="ticker-wrapper">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center justify-around w-full min-w-full gap-8">
              {brands.map((brand) => (
                <div key={brand.name} className="flex items-center justify-center w-16 h-16">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    width={brand.width}
                    height={brand.height}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-container {
          width: 100%;
          overflow: hidden;
        }
        
        .ticker-wrapper {
          display: flex;
          animation: ticker 22.5s linear infinite;
          width: fit-content;
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .ticker-wrapper:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

