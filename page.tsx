import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, MessageCircle, Zap, Target, CheckCircle } from 'lucide-react'
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 px-4 pb-20 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="outline" className="mb-4 bg-zinc-900 px-4 py-2 text-orange-500">
            10x Your Content Earnings Over Time!
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Make Every Post Pay You Twice!{" "}
            <span className="text-orange-500">— Using Only What You Already Have.</span>
          </h1>
          <div className="flex flex-col items-center text-center">
            <p className="text-[calc(1.25rem-10px)] md:text-[calc(1.5rem-10px)] font-medium text-white font-['Verdana']">
              <span>(Analysis</span>
              <span className="text-yellow-400"> + </span>
              <span>Optimization</span>
              <span className="text-yellow-400"> + </span>
              <span>Distribution)</span>
              <span className="ml-2">Strategy,</span>
            </p>
            <p className="mt-2 text-[calc(1.25rem-10px)] md:text-[calc(1.5rem-10px)] font-medium text-yellow-400 font-['Verdana']">
              That Turns Your Old Content = New $$$$
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center mt-8 mb-8">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image src="/your-icon.svg" alt="CTA icon" width={24} height={24} className="w-full h-full object-cover" />
                </div>
                Claim Your Free Strategy Call, Now!
              </Button>
            </div>
            <p className="text-zinc-400 text-sm mb-8">
              Simple terms. No lock-ins. Clear deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Client Cards Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 bg-zinc-900 px-4 py-2 text-white">
              Key Features
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">Our Trusted Partners</h2>
          </div>
          <div className="ticker-container-horizontal">
            <div className="ticker-wrapper-horizontal">
              {[...Array(12)].map((_, index) => (
                <div key={index} className="inline-block w-72 p-4">
                  <div className="relative h-80 bg-zinc-900 rounded-xl border-2 border-orange-500 overflow-hidden group perspective-1000">
                    <div className="absolute inset-0 transform-style-preserve-3d transition-transform duration-1000 group-hover:rotate-y-180">
                      <div className="absolute inset-0 backface-hidden">
                        <div className="flex flex-col h-full p-6 justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-zinc-800 rounded-full"></div>
                            <h3 className="text-lg font-bold">Client {index + 1}</h3>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-orange-500">↑ 198%</p>
                            <p className="text-sm text-zinc-400">Conversion Rate</p>
                          </div>
                          <div className="mt-4">
                            <p className="text-sm text-zinc-300">
                              "ContentPro transformed our content strategy, delivering exceptional results."
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 h-full w-full bg-black backface-hidden rotate-y-180">
                        <div className="flex items-center justify-center h-full">
                          <div className="w-48 h-48 bg-zinc-800 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500">179%</div>
              <p className="mt-2 text-zinc-400">Average Conversion Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500">2.5x</div>
              <p className="mt-2 text-zinc-400">Revenue Growth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500">14 Days</div>
              <p className="mt-2 text-zinc-400">Average Implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 bg-zinc-900 px-4 py-2 text-white">
              Key Features
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl">Transform Your Content Into Revenue</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "AI-Powered Analysis",
                description: "Our AI analyzes your content to identify high-conversion opportunities.",
                icon: <Zap className="h-6 w-6 text-yellow-500" />
              },
              {
                title: "Smart Optimization",
                description: "Automatically optimize your content for maximum engagement and conversion.",
                icon: <Target className="h-6 w-6 text-orange-500" />
              },
              {
                title: "Real-Time Tracking",
                description: "Monitor your content performance with detailed analytics and insights.",
                icon: <MessageCircle className="h-6 w-6 text-yellow-500" />
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-zinc-900 p-6 border-zinc-800">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-zinc-900 px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 bg-black px-4 py-2 text-white">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold">Three Steps to Success</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect",
                description: "Link your content sources and let our AI analyze your archive."
              },
              {
                step: "02",
                title: "Optimize",
                description: "We identify and implement high-impact optimization opportunities."
              },
              {
                step: "03",
                title: "Convert",
                description: "Watch your optimized content drive more conversions and revenue."
              }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 text-2xl font-bold text-orange-500">{step.step}</div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 bg-zinc-900 px-4 py-2 text-white">
              Benefits
            </Badge>
            <h2 className="text-3xl font-bold">Why Choose ContentPro?</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              "Increase revenue from existing content",
              "Save time with AI-powered optimization",
              "Get detailed conversion analytics",
              "Improve user engagement",
              "Scale your content strategy",
              "24/7 expert support"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-orange-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-zinc-900 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 bg-black px-4 py-2 text-white">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold">Loved by businesses worldwide</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-black p-6 border-zinc-800">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-zinc-800">
                    <Image src={`/placeholder.svg?height=48&width=48`} alt="Avatar" width={48} height={48} />
                  </div>
                  <div>
                    <h3 className="font-bold">Client Name</h3>
                    <p className="text-sm text-zinc-400">Position, Company</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300">
                  "ContentPro helped us unlock the true potential of our content. Our conversion rates have increased significantly!"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 bg-zinc-900 px-4 py-2 text-white">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold">Common Questions</h2>
          </div>
          <Accordion type="single" collapsible>
            {[
              {
                question: "How does ContentPro work?",
                answer: "ContentPro uses AI to analyze your existing content, identify optimization opportunities, and implement changes that drive higher conversion rates."
              },
              {
                question: "How long until I see results?",
                answer: "Most clients see significant improvements within 14 days of implementation."
              },
              {
                question: "Is there a minimum contract period?",
                answer: "No, we believe in earning your trust month by month. There are no lock-in contracts."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-zinc-900">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 bg-black px-4 py-2 text-white">
            Get Started
          </Badge>
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
            Ready to Transform Your Content?
          </h2>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg">
            <span>Schedule Your Free Strategy Call</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
