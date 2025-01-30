import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen bg-black ${inter.className}`}>
      {children}
    </div>
  )
}

