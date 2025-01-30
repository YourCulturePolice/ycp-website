"use client"

import { useState } from "react"

interface Stat {
  value: string
  label: string
}

const DEFAULT_STATS: Stat[] = [
  {
    value: "10B+",
    label: "Views Generated",
  },
  {
    value: "2500+",
    label: "Creators Helped",
  },
  {
    value: "$100M+",
    label: "Revenue Generated",
  },
]

export function Numbers() {
  const [stats, setStats] = useState<Stat[]>(DEFAULT_STATS)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingField, setEditingField] = useState<"value" | "label" | null>(null)

  const handleEdit = (index: number, field: "value" | "label", value: string) => {
    const newStats = [...stats]
    newStats[index] = { ...newStats[index], [field]: value }
    setStats(newStats)
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              {editingIndex === i && editingField === "value" ? (
                <input
                  type="text"
                  value={stat.value}
                  onChange={(e) => handleEdit(i, "value", e.target.value)}
                  onBlur={() => {
                    setEditingIndex(null)
                    setEditingField(null)
                  }}
                  className="w-full bg-transparent text-4xl font-bold text-center text-[#db4a2b] border-b border-[#db4a2b] outline-none focus:ring-2 focus:ring-[#db4a2b] px-2 py-1"
                  autoFocus
                />
              ) : (
                <div
                  className="text-4xl font-bold text-[#db4a2b] cursor-pointer hover:text-orange-400 transition-colors"
                  onClick={() => {
                    setEditingIndex(i)
                    setEditingField("value")
                  }}
                >
                  <span contentEditable suppressContentEditableWarning>
                    {stat.value}
                  </span>
                </div>
              )}

              {editingIndex === i && editingField === "label" ? (
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => handleEdit(i, "label", e.target.value)}
                  onBlur={() => {
                    setEditingIndex(null)
                    setEditingField(null)
                  }}
                  className="w-full bg-transparent text-zinc-400 text-center border-b border-[#db4a2b] outline-none focus:ring-2 focus:ring-[#db4a2b] px-2 py-1 mt-2"
                  autoFocus
                />
              ) : (
                <p
                  className="mt-2 text-zinc-400 cursor-pointer hover:text-zinc-300 transition-colors"
                  onClick={() => {
                    setEditingIndex(i)
                    setEditingField("label")
                  }}
                >
                  <span contentEditable suppressContentEditableWarning>
                    {stat.label}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

