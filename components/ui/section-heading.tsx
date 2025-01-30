import { Badge } from "@/components/ui/badge"

interface SectionHeadingProps {
  badge: string
  title: string
  className?: string
}

export function SectionHeading({ badge, title, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <div className="inline-block px-6 py-3 bg-zinc-900 rounded-full text-white mb-6">
        {badge}
      </div>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  )
}

