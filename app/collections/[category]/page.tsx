import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const categoryData: Record<
  string,
  {
    title: string
    description: string
    products: Array<{ id: number; name: string; price: string; image: string; isNew: boolean }>
  }
> = {
  rings: {
    title: "Rings",
    description: "Discover our collection of elegant rings, from minimalist bands to statement pieces.",
    products: [
      { id: 1, name: "Minimalist Gold Band", price: "Rs. 1,800", image: "/minimalist-gold-band-ring-elegant.jpg", isNew: false },
      {
        id: 2,
        name: "Pearl Statement Ring",
        price: "Rs. 2,400",
        image: "/placeholder.svg?height=400&width=400",
        isNew: true,
      },
      { id: 3, name: "Birthstone Ring", price: "Rs. 2,800", image: "/birthstone-gold-ring-elegant-feminine.jpg", isNew: false },
      {
        id: 4,
        name: "Stackable Thin Ring",
        price: "Rs. 1,200",
        image: "/placeholder.svg?height=400&width=400",
        isNew: true,
      },
      {
        id: 5,
        name: "Twisted Band Ring",
        price: "Rs. 1,600",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
      {
        id: 6,
        name: "Initial Signet Ring",
        price: "Rs. 2,200",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
    ],
  },
  necklaces: {
    title: "Necklaces",
    description: "Timeless necklaces that tell your story, from delicate chains to personalized pendants.",
    products: [
      {
        id: 1,
        name: "Custom Name Necklace",
        price: "Rs. 2,500",
        image: "/placeholder.svg?height=400&width=400",
        isNew: true,
      },
      { id: 2, name: "Layered Chain Set", price: "Rs. 3,000", image: "/layered-gold-chain-necklace-elegant.jpg", isNew: false },
      { id: 3, name: "Pearl Pendant", price: "Rs. 2,200", image: "/placeholder.svg?height=400&width=400", isNew: true },
      {
        id: 4,
        name: "Initial Charm Necklace",
        price: "Rs. 1,800",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
      {
        id: 5,
        name: "Moon Phase Necklace",
        price: "Rs. 2,400",
        image: "/placeholder.svg?height=400&width=400",
        isNew: true,
      },
      {
        id: 6,
        name: "Birthstone Pendant",
        price: "Rs. 2,600",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
    ],
  },
  earrings: {
    title: "Earrings",
    description: "From everyday studs to elegant drop earrings, find your perfect pair.",
    products: [
      { id: 1, name: "Pearl Stud Earrings", price: "Rs. 1,600", image: "/pearl-stud-earrings-classic-elegant.jpg", isNew: true },
      { id: 2, name: "Crystal Drop Earrings", price: "Rs. 2,200", image: "/crystal-drop-earrings-elegant-feminine.jpg", isNew: false },
      {
        id: 3,
        name: "Gold Hoop Earrings",
        price: "Rs. 1,800",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
      {
        id: 4,
        name: "Minimalist Bar Studs",
        price: "Rs. 1,200",
        image: "/placeholder.svg?height=400&width=400",
        isNew: true,
      },
      {
        id: 5,
        name: "Moon Charm Earrings",
        price: "Rs. 1,400",
        image: "/placeholder.svg?height=400&width=400",
        isNew: true,
      },
      {
        id: 6,
        name: "Tassel Drop Earrings",
        price: "Rs. 2,000",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
    ],
  },
  bracelets: {
    title: "Bracelets",
    description: "Handcrafted bracelets that add elegance to your everyday style.",
    products: [
      { id: 1, name: "Pearl Initial Bracelet", price: "Rs. 1,500", image: "/pearl-bracelet-with-gold-initial-charm-elegant.jpg", isNew: true },
      {
        id: 2,
        name: "Chain Link Bracelet",
        price: "Rs. 1,800",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
      {
        id: 3,
        name: "Charm Bracelet",
        price: "Rs. 2,200",
        image: "/placeholder.svg?height=400&width=400",
        isNew: true,
      },
      { id: 4, name: "Bangle Set", price: "Rs. 2,800", image: "/placeholder.svg?height=400&width=400", isNew: false },
      {
        id: 5,
        name: "Beaded Bracelet",
        price: "Rs. 1,200",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
      {
        id: 6,
        name: "Tennis Bracelet",
        price: "Rs. 3,500",
        image: "/placeholder.svg?height=400&width=400",
        isNew: true,
      },
    ],
  },
  anklets: {
    title: "Anklets",
    description: "Delicate anklets perfect for summer days and beach vibes.",
    products: [
      { id: 1, name: "Moon Charm Anklet", price: "Rs. 1,200", image: "/silver-moon-charm-anklet-delicate-feminine.jpg", isNew: true },
      {
        id: 2,
        name: "Pearl Chain Anklet",
        price: "Rs. 1,400",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
      {
        id: 3,
        name: "Layered Anklet Set",
        price: "Rs. 1,800",
        image: "/placeholder.svg?height=400&width=400",
        isNew: true,
      },
      {
        id: 4,
        name: "Initial Anklet",
        price: "Rs. 1,500",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }))
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const data = categoryData[category]

  if (!data) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Collection</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">{data.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{data.description}</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {data.products.map((product) => (
              <Link key={product.id} href={`/shop/${product.id}`} className="group">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 uppercase tracking-wider">
                      New
                    </span>
                  )}
                  <button className="absolute top-3 right-3 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
                    <Heart className="h-4 w-4 text-foreground" />
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-foreground font-medium">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Back Link */}
          <div className="mt-12 text-center">
            <Link href="/collections">
              <Button variant="outline" className="rounded-none px-8 bg-transparent">
                View All Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
