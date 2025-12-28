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
    <section className="py-5 sm:py-5">
      <div className="mx-auto  px-2 sm:px-4 lg:px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our Collections
          </h2>
        </div>
        {/* Cards */}
        <div className="mt-5 mx-auto ">
          <div
            className="
      flex gap-4
      overflow-x-auto
      snap-x snap-mandatory
      scrollbar-hide
      justify-center
      px-2
    "
          >
            {collections.map((collection) => (
              <Link
                key={collection.name}
                href={collection.href}
                className="
          group relative
          h-[24vh] w-[24vh]
          min-w-[18vh]
          snap-center
          overflow-hidden
          rounded-full
          bg-muted
          shadow-sm
          hover:shadow-lg
          transition-all
          duration-300
        "
              >
                {/* Image */}
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 rounded-full bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />

                {/* Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center bg-linear-to-t from-foreground/70 to-transparent">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-white/80 font-medium">
                    {collection.description}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
