"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, Clock, MessageCircle, Instagram } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    details: ["+92 XXX XXXXXXX"],
    action: { label: "Call Now", href: "tel:+92XXXXXXXXXX" },
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@zkzewar.com"],
    action: { label: "Send Email", href: "mailto:hello@zkzewar.com" },
  },
  {
    icon: Instagram,
    title: "Instagram",
    details: ["@zkzewar"],
    action: { label: "Follow Us", href: "https://instagram.com/zkzewar" },
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 10 AM - 8 PM", "Sunday: Closed"],
    action: null,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const message = `Hi! I'm ${formData.name}.\n\nSubject: ${formData.subject}\n\n${formData.message}\n\nEmail: ${formData.email}`
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">Get in Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to place a custom order? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Send Us a Message</h2>
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
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="rounded-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more..."
                    className="rounded-none min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-none">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                        {info.action && (
                          <a
                            href={info.action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline mt-1 inline-block"
                          >
                            {info.action.label}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-muted p-6 sm:p-8">
                <h3 className="font-serif text-xl text-foreground mb-2">Quick Response on WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Get faster responses by messaging us directly on WhatsApp. We typically respond within a few hours.
                </p>
                <Button asChild size="lg" className="rounded-none bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
