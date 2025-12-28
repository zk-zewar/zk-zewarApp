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
    details: ["+92 319 5459398"],
    action: { label: "Call Now", href: "tel:+923195459398" },
    color: "#c9a88e",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["zkzewar02@gmail.com"],
    action: { label: "Send Email", href: "mailto:zkzewar02@gmail.com" },
    color: "#6b8fd6",
  },
  {
    icon: Instagram,
    title: "Instagram",
    details: ["@zkzewar"],
    action: { label: "Follow Us", href: "https://www.instagram.com/zkzewar" },
    color: "#dd4ebe",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sun: 11 AM - 11 PM"],
    action: null,
    color: "#4caf50",
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
    const message = `Hi! I'm ${formData.name}.\n\nSubject: ${formData.subject}\n\n${formData.message}\n\nEmail: ${formData.email}`
    window.open(
      `https://wa.me/+923195459398?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-14 bg-[#c9a88e] text-white">
        <div className=" py-16 border-b">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg">
              Have a question or want to place a custom order? We’d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => {
              return (
                <div
                style={{
                  background: `linear-gradient(135deg, ${item.color}, #ffffff)`,
                }}
                 key={item.title} className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1`}>
                  <div 
                    style={{ backgroundColor: item.color }}

                  className={`w-12 h-12 rounded-full  flex items-center justify-center mb-4`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-medium text-lg text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.details.join(", ")}
                  </p>
                  {item.action && (
                    <a
                      href={item.action.href}
                      className="inline-block mt-2 text-sm font-medium text-[#8b6f5c] hover:underline"
                    >
                      {item.action.label}
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* Contact Form */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
            <h2 className="font-serif text-2xl sm:text-3xl mb-8 text-center">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Your Name</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="rounded-lg mt-2"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="rounded-lg mt-2"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <Label>Subject</Label>
                <Input
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="rounded-lg mt-2"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <Label>Message</Label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="rounded-lg mt-2 min-h-[150px]"
                  placeholder="Tell us more..."
                  required
                />
              </div>

              <Button size="lg" className="w-full rounded-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
