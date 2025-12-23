import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { AddToCartButton } from "@/components/add-to-cart-button"

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
      {
        id: 101,
        name: "Minimalist Gold Band",
        price: "Rs. 1,800",
        image: "/minimalist-gold-band-ring-elegant.jpg",
        isNew: false,
      },
      {
        id: 102,
        name: "Pearl Statement Ring",
        price: "Rs. 2,400",
        image: "/pearl-statement-ring-gold-elegant.jpg",
        isNew: true,
      },
      {
        id: 103,
        name: "Birthstone Ring",
        price: "Rs. 2,800",
        image: "/birthstone-gold-ring-elegant-feminine.jpg",
        isNew: false,
      },
      {
        id: 104,
        name: "Stackable Thin Ring",
        price: "Rs. 1,200",
        image: "/stackable-thin-gold-ring.jpg",
        isNew: true,
      },
      {
        id: 105,
        name: "Twisted Band Ring",
        price: "Rs. 1,600",
        image: "/twisted-band-gold-ring-elegant.jpg",
        isNew: false,
      },
      {
        id: 106,
        name: "Initial Signet Ring",
        price: "Rs. 2,200",
        image: "/initial-signet-gold-ring.jpg",
        isNew: false,
      },
    ],
  },
  necklaces: {
    title: "Necklaces",
    description: "Timeless necklaces that tell your story, from delicate chains to personalized pendants.",
    products: [
      {
        id: 201,
        name: "Custom Name Necklace",
        price: "Rs. 2,500",
        image: "/gold-custom-name-necklace-elegant-script.jpg",
        isNew: true,
      },
      {
        id: 202,
        name: "Layered Chain Set",
        price: "Rs. 3,000",
        image: "/layered-gold-chain-necklace-elegant.jpg",
        isNew: false,
      },
      { id: 203, name: "Pearl Pendant", price: "Rs. 2,200", image: "/pearl-pendant-gold-necklace.jpg", isNew: true },
      {
        id: 204,
        name: "Initial Charm Necklace",
        price: "Rs. 1,800",
        image: "/initial-charm-gold-necklace.jpg",
        isNew: false,
      },
      {
        id: 205,
        name: "Moon Phase Necklace",
        price: "Rs. 2,400",
        image: "/moon-phase-gold-necklace.jpg",
        isNew: true,
      },
      {
        id: 206,
        name: "Birthstone Pendant",
        price: "Rs. 2,600",
        image: "/birthstone-pendant-gold-necklace.jpg",
        isNew: false,
      },
    ],
  },
  earrings: {
    title: "Earrings",
    description: "From everyday studs to elegant drop earrings, find your perfect pair.",
    products: [
      {
        id: 301,
        name: "Pearl Stud Earrings",
        price: "Rs. 1,600",
        image: "/pearl-stud-earrings-classic-elegant.jpg",
        isNew: true,
      },
      {
        id: 302,
        name: "Crystal Drop Earrings",
        price: "Rs. 2,200",
        image: "/crystal-drop-earrings-elegant-feminine.jpg",
        isNew: false,
      },
      {
        id: 303,
        name: "Gold Hoop Earrings",
        price: "Rs. 1,800",
        image: "/gold-hoop-earrings-elegant.jpg",
        isNew: false,
      },
      {
        id: 304,
        name: "Minimalist Bar Studs",
        price: "Rs. 1,200",
        image: "/minimalist-bar-stud-earrings-gold.jpg",
        isNew: true,
      },
      {
        id: 305,
        name: "Moon Charm Earrings",
        price: "Rs. 1,400",
        image: "/moon-charm-earrings-gold.jpg",
        isNew: true,
      },
      {
        id: 306,
        name: "Tassel Drop Earrings",
        price: "Rs. 2,000",
        image: "/tassel-drop-earrings-gold-elegant.jpg",
        isNew: false,
      },
    ],
  },
  bracelets: {
    title: "Bracelets",
    description: "Handcrafted bracelets that add elegance to your everyday style.",
    products: [
      {
        id: 401,
        name: "Pearl Initial Bracelet",
        price: "Rs. 1,500",
        image: "/pearl-bracelet-with-gold-initial-charm-elegant.jpg",
        isNew: true,
      },
      {
        id: 402,
        name: "Chain Link Bracelet",
        price: "Rs. 1,800",
        image: "/chain-link-gold-bracelet.jpg",
        isNew: false,
      },
      {
        id: 403,
        name: "Charm Bracelet",
        price: "Rs. 2,200",
        image: "/charm-bracelet-gold-elegant.jpg",
        isNew: true,
      },
      { id: 404, name: "Bangle Set", price: "Rs. 2,800", image: "/gold-bangle-set-elegant.jpg", isNew: false },
      {
        id: 405,
        name: "Beaded Bracelet",
        price: "Rs. 1,200",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
      {
        id: 406,
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
      {
        id: 501,
        name: "Moon Charm Anklet",
        price: "Rs. 1,200",
        image: "/silver-moon-charm-anklet-delicate-feminine.jpg",
        isNew: true,
      },
      {
        id: 502,
        name: "Pearl Chain Anklet",
        price: "Rs. 1,400",
        image: "/placeholder.svg?height=400&width=400",
        isNew: false,
      },
      {
        id: 503,
        name: "Layered Anklet Set",
        price: "Rs. 1,800",
        image: "/placeholder.svg?height=400&width=400",
        isNew: true,
      },
      {
        id: 504,
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
              <div key={product.id} className="group">
                <Link href={`/shop/${product.id}`}>
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
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-background/80 rounded-full hover:bg-background">
                        <Heart className="h-4 w-4 text-foreground" />
                      </button>
                      <AddToCartButton product={{ ...product, category: data.title }} variant="icon" />
                    </div>
                  </div>
                </Link>
                <div className="mt-4 text-center">
                  <Link href={`/shop/${product.id}`}>
                    <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="mt-1 text-foreground font-medium">{product.price}</p>
                  <AddToCartButton product={{ ...product, category: data.title }} className="mt-3 w-full text-sm" />
                </div>
              </div>
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
