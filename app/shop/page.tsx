import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const products = [
  {
    id: 1,
    name: "Pearl Initial Bracelet",
    price: "Rs. 1,500",
    category: "Bracelets",
    image: "/pearl-bracelet-with-gold-initial-charm-elegant.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Moon Charm Anklet",
    price: "Rs. 1,200",
    category: "Anklets",
    image: "/silver-moon-charm-anklet-delicate-feminine.jpg",
    isNew: true,
  },
  {
    id: 3,
    name: "Custom Name Necklace",
    price: "Rs. 2,500",
    category: "Necklaces",
    image: "/gold-custom-name-necklace-elegant-script.jpg",
    isNew: false,
  },
  {
    id: 4,
    name: "Minimalist Gold Ring",
    price: "Rs. 1,800",
    category: "Rings",
    image: "/minimalist-gold-stacking-ring-elegant.jpg",
    isNew: false,
  },
  {
    id: 5,
    name: "Crystal Drop Earrings",
    price: "Rs. 2,200",
    category: "Earrings",
    image: "/crystal-drop-earrings-elegant-feminine.jpg",
    isNew: true,
  },
  {
    id: 6,
    name: "Layered Chain Necklace",
    price: "Rs. 3,000",
    category: "Necklaces",
    image: "/layered-gold-chain-necklace-elegant.jpg",
    isNew: false,
  },
  {
    id: 7,
    name: "Birthstone Ring",
    price: "Rs. 2,800",
    category: "Rings",
    image: "/birthstone-gold-ring-elegant-feminine.jpg",
    isNew: false,
  },
  {
    id: 8,
    name: "Pearl Stud Earrings",
    price: "Rs. 1,600",
    category: "Earrings",
    image: "/pearl-stud-earrings-classic-elegant.jpg",
    isNew: true,
  },
]

const categories = ["All", "Necklaces", "Rings", "Earrings", "Bracelets", "Anklets"]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="pt-20">
        <div className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">Shop All Jewelry</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of handcrafted pieces, each designed to celebrate your unique style.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-8 border-b border-border">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} className="rounded-none">
                  {category}
                </Button>
              ))}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-none bg-transparent">
                  Sort By <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Newest</DropdownMenuItem>
                <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                <DropdownMenuItem>Best Selling</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
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
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
                  <h3 className="mt-1 font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-foreground font-medium">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-none px-12 bg-transparent">
              Load More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
