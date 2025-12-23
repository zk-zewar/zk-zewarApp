"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Sparkles, Heart, Clock, Shield } from "lucide-react"

const processSteps = [
  {
    step: "01",
    title: "Share Your Vision",
    description: "Tell us about your dream piece - the design, materials, and any personalization you'd like.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Design Consultation",
    description: "We'll discuss your ideas, suggest refinements, and provide a detailed quote.",
    icon: Heart,
  },
  {
    step: "03",
    title: "Crafting",
    description: "Our artisans bring your vision to life with meticulous attention to detail.",
    icon: Clock,
  },
  {
    step: "04",
    title: "Delivery",
    description: "Your unique piece arrives beautifully packaged and ready to treasure.",
    icon: Shield,
  },
]

export default function CustomOrdersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jewelryType: "",
    description: "",
    budget: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - integrate with WhatsApp
    const message = `Hi! I'd like to place a custom order:\n\nName: ${formData.name}\nJewelry Type: ${formData.jewelryType}\nBudget: ${formData.budget}\n\nDescription: ${formData.description}`
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-20">
        <div className="relative h-[60vh] min-h-[400px]">
          <Image src="/placeholder.svg?height=800&width=1600" alt="Custom Orders" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-background px-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl">Custom Orders</h1>
              <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-background/90">
                Create something uniquely yours. From personalized initials to bespoke designs, we bring your vision to
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground">How It Works</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Your journey to a one-of-a-kind piece is simple and enjoyable.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="block text-sm text-primary font-medium mb-2">Step {step.step}</span>
                <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Form */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Start Your Custom Order</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss your dream piece.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="rounded-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone number"
                      className="rounded-none"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="rounded-none"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="jewelryType">Jewelry Type</Label>
                    <Select
                      value={formData.jewelryType}
                      onValueChange={(value) => setFormData({ ...formData, jewelryType: value })}
                    >
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ring">Ring</SelectItem>
                        <SelectItem value="necklace">Necklace</SelectItem>
                        <SelectItem value="bracelet">Bracelet</SelectItem>
                        <SelectItem value="earrings">Earrings</SelectItem>
                        <SelectItem value="anklet">Anklet</SelectItem>
                        <SelectItem value="set">Jewelry Set</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    >
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-2000">Under Rs. 2,000</SelectItem>
                        <SelectItem value="2000-5000">Rs. 2,000 - 5,000</SelectItem>
                        <SelectItem value="5000-10000">Rs. 5,000 - 10,000</SelectItem>
                        <SelectItem value="above-10000">Above Rs. 10,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Describe Your Vision</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about your dream piece - design details, materials, personalization, occasion, etc."
                    className="rounded-none min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-none">
                  Submit Request
                </Button>
              </form>
            </div>

            {/* Side Content */}
            <div className="space-y-8">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Custom jewelry crafting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-muted p-6 sm:p-8">
                <h3 className="font-serif text-xl text-foreground mb-4">Prefer to Chat Directly?</h3>
                <p className="text-muted-foreground mb-4">
                  Send us a message on WhatsApp and we'll help you design your perfect piece.
                </p>
                <Button asChild className="rounded-none bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-foreground">Popular Custom Requests</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Name & Initial Jewelry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Birthstone Pieces
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Matching Sets for Special Occasions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Bridal & Wedding Jewelry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Gift Pieces with Engravings
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
