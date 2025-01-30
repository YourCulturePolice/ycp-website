'use client'

import { useEffect, useState } from "react"

interface ClientCard {
  id: number
  username: string
  stats: Array<{
    value: string
    label: string
  }>
}

const CLIENTS: ClientCard[] = [
  {
    id: 1,
    username: "@videoelephant",
    stats: [
      { value: "↑ 6.8x", label: "Earnings" },
      { value: "500K+", label: "New Followers" },
      { value: "4.82M", label: "Visits" },
      { value: "762M", label: "Reach" }
    ]
  },
  {
    id: 2,
    username: "@wildvision",
    stats: [
      { value: "↑ 8.5x", label: "Earnings" },
      { value: "200K+", label: "New Followers" },
      { value: "3.9M", label: "Visits" },
      { value: "180M", label: "Reach" }
    ]
  },
  {
    id: 3,
    username: "@mythical",
    stats: [
      { value: "↑ 3.1x", label: "Earnings" },
      { value: "980K+", label: "New Followers" },
      { value: "700K", label: "Visits" },
      { value: "120M", label: "Reach" }
    ]
  },
  {
    id: 4,
    username: "@jellysmack",
    stats: [
      { value: "↑ 7.4x", label: "Earnings" },
      { value: "560K+", label: "New Followers" },
      { value: "1.4M", label: "Visits" },
      { value: "400M", label: "Reach" }
    ]
  },
  {
    id: 5,
    username: "@thesoul",
    stats: [
      { value: "↑ 8.4x", label: "Earnings" },
      { value: "2.1M+", label: "New Followers" },
      { value: "7.8M", label: "Visits" },
      { value: "1.2B", label: "Reach" }
    ]
  }
]

export function SuccessStories() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => setIsVisible(true), 100)
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="success-stories" className="py-20 overflow-hidden bg-black">
      <div className="container mx-auto">
        {isVisible && (
          <div className="ticker-container-horizontal">
            <div className="ticker-wrapper-horizontal">
              {[...CLIENTS].map((client, index) => (
                <div key={`${client.id}-${index}`} className="inline-block w-[600px] p-4">
                  <div className="relative h-[120px] bg-zinc-900 rounded-[32px] overflow-hidden group border-2 border-orange-500">
                    <div className="flex h-full p-6">
                      <div className="flex items-center">
                        <h3 className="text-2xl font-bold text-white">
                          {client.username}
                        </h3>
                      </div>
                      <div className="flex-1 grid grid-cols-4 gap-4 ml-8">
                        {client.stats.map((stat, index) => (
                          <div key={index} className="text-center">
                            <p className="text-xl font-bold text-orange-500">{stat.value}</p>
                            <p className="text-xs text-zinc-400">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

