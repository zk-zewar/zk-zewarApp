"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    content:
      "This is a very nice place to buy jewelry and related stuff. Prices are not very high but they have a very good variety.",
    author: "Faysal Ishrat",
    rating: 5,
  },
  {
    content:
      "Absolutely stunning and elegant jewellery. You can get festive and other events jewellery from there. Staff is cooperative as well.",
    author: "Fatima Syed",
    rating: 5,
  },
  {
    content:
      "I've bought a pair of earrings, its beautiful just as it exactly how it looked on the site. Highly recommend.",
    author: "Saiqa Noureen",
    rating: 5,
  },
  {
    content:
      "Beautiful craftsmanship and excellent service. I loved the detailing and finishing of my order.",
    author: "Ayesha Khan",
    rating: 5,
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const visibleCards = 3
  const maxIndex = testimonials.length - visibleCards

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex))
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0))

  return (
    <section className="py-24 bg-background/95">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-foreground">
          Our Client Reviews
        </h2>

        {/* Slider */}
        <div className="relative mt-16 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="
                  w-full
                  sm:w-1/2
                  lg:w-1/3
                  shrink-0
                  px-4
                "
              >
                <div
                  className="
                    bg-white
                    rounded-xl
                    p-8
                    text-center
                    shadow-[0_20px_40px_rgba(0,0,0,0.25)]
                    hover:-translate-y-2
                    transition-transform
                    duration-300
                    h-[40vh]
                  "
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#f5b301] text-[#f5b301]"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground/70 leading-relaxed">
                    {item.content}
                  </p>

                  {/* Author */}
                  <p className="mt-8 font-semibold text-foreground">
                    {item.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="mt-12 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={index === 0}
              className="rounded-full"
            >
              <ChevronLeft />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={index === maxIndex}
              className="rounded-full"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
