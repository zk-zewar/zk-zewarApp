"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    content:
      "ZK Zewar created the most beautiful engagement ring for my fiancée. The attention to detail and the personal touch made the experience unforgettable. She cries every time she looks at it!",
    author: "Sarah M.",
    location: "New York",
    rating: 5,
  },
  {
    content:
      "I've been collecting jewelry for years, and ZK Zewar pieces are by far the most elegant and well-crafted. The personalized necklace with my children's initials is my most treasured possession.",
    author: "Amina K.",
    location: "Dubai",
    rating: 5,
  },
  {
    content:
      "The custom order process was seamless. They understood exactly what I wanted and delivered beyond my expectations. The quality is exceptional, and their customer service is outstanding.",
    author: "Priya S.",
    location: "London",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Testimonials</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
            Words from Our Clients
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 text-center px-4">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="font-serif text-xl sm:text-2xl text-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="mt-8">
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-border hover:bg-muted bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-border hover:bg-muted bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
