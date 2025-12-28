import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    name: "Necklaces",
    description: "Grace your neckline",
    image: "/images/necklace.png",
    href: "/collections/necklaces",
  },
  {
    name: "Bracelets",
    description: "Elegance for your wrist",
    image: "/images/bracelet.png",
    href: "/collections/bracelets",
  },
  {
    name: "Custom Orders",
    description: "Your vision, our craft",
    image: "/images/custom-design.png",
    href: "/custom-orders",
  },
]

export function FeaturedCollections() {
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
              key={collection.name}
              href={collection.href}
              className="
                group relative
                flex-shrink-0
                snap-center
                rounded-full
                overflow-hidden
                bg-muted
                shadow-sm hover:shadow-lg
                transition-all duration-300

                w-[65vw] h-[65vw]
                sm:w-[40vw] sm:h-[40vw]
                md:w-[30vw] md:h-[30vw]
                lg:w-[18rem] lg:h-[18rem]
              "
            >
              {/* Image */}
              <img
                src={collection.image || "/placeholder.svg"}
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
              <div className="
                absolute inset-0
                flex flex-col items-center justify-end
                p-4 text-center
                bg-gradient-to-t from-black/70 via-black/20 to-transparent
              ">
                <h3 className="font-serif text-lg sm:text-xl text-white">
                  {collection.name}
                </h3>

                <p className="text-sm text-white/80">
                  {collection.description}
                </p>

                <div className="
                  mt-2 flex items-center gap-1
                  text-white text-xs
                  opacity-0 group-hover:opacity-100
                  transition-opacity
                ">
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
