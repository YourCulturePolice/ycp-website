import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Culture Police - Turn Your Content Into Revenue",
  description:
    "Transform your existing content into a revenue-generating machine with AI-powered optimization and analytics.",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32-xR6sOk4WMJhgQv6q7VQMwDuAyINf3T.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16-OhgdgBXsjJ86fpx4LDpMhJuM2Yy49f.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-Fjc8LNn6a0gACHIK4eEjo6ZyjBNJqV.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192-2WH9z5rwVYD4VDOykhyoeeOnTdcciq.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome-512x512",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512-RnHB01ttkY7xCkGUeB4IOzUZtstgsB.png",
        sizes: "512x512",
      },
    ],
  },
  openGraph: {
    title: "Your Culture Police - Turn Your Content Into Revenue",
    description:
      "Transform your existing content into a revenue-generating machine with AI-powered optimization and analytics.",
    url: "https://www.yourculturepolice.com",
    siteName: "Your Culture Police",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Culture Police - Turn Your Content Into Revenue",
    description:
      "Transform your existing content into a revenue-generating machine with AI-powered optimization and analytics.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'