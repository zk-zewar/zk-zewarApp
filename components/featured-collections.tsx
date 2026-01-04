"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

type Collection = {
  id: string
  name: string
  description: string | null
  image_url: string | null
  slug?: string
}

export function FeaturedCollections() {
  const [collections, setCollections] = useState<Collection[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'

        const res = await fetch(`${baseUrl}/api/collections`)

        const data = await res.json()

        if (res.ok) {
          // sirf MAIN collections show karni hain
          setCollections(data.collections.filter((c: any) => c.type === "main"))
        }
      } catch (error) {
        console.error("Failed to fetch collections", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCollections()
  }, [])

  if (loading) {
    return (
      <section className="py-10 text-center text-muted-foreground">
        Loading collections...
      </section>
    )
  }

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
            Our Collections
          </h2>
        </div>

        {/* Collections */}
        <div
          className="
            flex gap-6
            overflow-x-auto lg:overflow-visible
            snap-x snap-mandatory
            scrollbar-hide
            justify-start lg:justify-center
            px-1
          "
        >
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.name === 'Custom Designs' ?'/collections/custom-designs':`/collections/${collection.name.toLowerCase().replace(/ /g, '-')}`}
              className="
                group relative
                shrink-0
                snap-center
                rounded-full
                overflow-hidden
                bg-muted
                shadow-sm hover:shadow-lg
                transition-all duration-300

                w-[65vw] h-[65vw]
                sm:w-[40vw] sm:h-[40vw]
                md:w-[30vw] md:h-[30vw]
                lg:w-[18rem] lg:h-72
              "
            >
              {/* Image */}
              <img
                src={collection.image_url || "/placeholder.svg"}
                alt={collection.name}
                className="
                  h-full w-full object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />

              {/* Text */}
              <div
                className="
                  absolute inset-0
                  flex flex-col items-center justify-end
                  p-4 text-center
                  bg-linear-to-t from-black/70 via-black/20 to-transparent
                "
              >
                <h3 className="font-serif text-lg sm:text-xl text-white">
                  {collection.name}
                </h3>

                {collection.description && (
                  <p className="text-sm text-white/80 line-clamp-2">
                    {collection.description}
                  </p>
                )}

                <div
                  className="
                    mt-2 flex items-center gap-1
                    text-white text-xs
                    opacity-0 group-hover:opacity-100
                    transition-opacity
                  "
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
