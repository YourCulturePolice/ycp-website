import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

