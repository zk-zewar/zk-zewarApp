import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    name: "Necklaces",
    description: "Grace your neckline",
    image: "/delicate-gold-chain-necklace-with-pendant-on-cream.jpg",
    href: "/collections/necklaces",
  },
  {
    name: "Bracelets",
    description: "Elegance for your wrist",
    image: "/elegant-pearl-bracelets-collection-jewelry-display.jpg",
    href: "/collections/bracelets",
  },
  {
    name: "Custom Orders",
    description: "Your vision, our craft",
    image: "/jewelry-artisan-crafting-gold-piece-with-tools-war.jpg",
    href: "/custom-orders",
  },
]

export function FeaturedCollections() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Discover</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
            Our Collections
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link key={collection.name} href={collection.href} className="group relative overflow-hidden bg-muted">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
                <h3 className="font-serif text-xl text-white">{collection.name}</h3>
                <p className="mt-1 text-sm text-white/80">{collection.description}</p>
                <div className="mt-3 flex items-center gap-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
