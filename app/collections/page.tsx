import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const collections = [
  {
    name: "Necklaces",
    description: "Timeless pieces that tell your story",
    image: "/elegant-gold-necklaces-collection-jewelry-display.jpg",
    href: "/collections/necklaces",
  },
  {
    name: "Bracelets",
    description: "Handcrafted with love and care",
    image: "/elegant-pearl-bracelets-collection-jewelry-display.jpg",
    href: "/collections/bracelets",
  },
  {
    name: "Custom Orders",
    description: "Design your dream piece",
    image: "/custom-jewelry-design-workspace-elegant.jpg",
    href: "/custom-orders",
  },
]

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">Our Collections</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collections, each piece handcrafted to celebrate your unique elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.name}
                href={collection.href}
                className="group relative aspect-[5/6] overflow-hidden bg-muted"
              >
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <h2 className="font-serif text-2xl sm:text-3xl text-background">{collection.name}</h2>
                  <p className="mt-2 text-background/80">{collection.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm text-background font-medium uppercase tracking-wider group-hover:text-primary transition-colors">
                    Explore Collection
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
