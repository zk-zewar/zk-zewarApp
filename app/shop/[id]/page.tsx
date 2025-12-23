"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Share2, Minus, Plus, MessageCircle, Truck, RefreshCw, Shield, ShoppingBag, Check } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"

// Sample product data - in production, this would come from a database
const product = {
  id: 1,
  name: "Pearl Initial Bracelet",
  price: "Rs. 1,500",
  priceNumber: 1500,
  description:
    "A beautiful handcrafted bracelet featuring genuine freshwater pearls with your choice of gold-plated initial charm. Perfect for everyday elegance or as a meaningful gift.",
  details: [
    "Freshwater pearls (6-7mm)",
    "Gold-plated brass initial charm",
    'Adjustable length: 6.5" - 8"',
    "Lobster clasp closure",
    "Hypoallergenic materials",
  ],
  images: [
    "/pearl-bracelet-with-gold-initial-charm-elegant.jpg",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  category: "Bracelets",
  isNew: true,
  inStock: true,
}

const relatedProducts = [
  {
    id: 2,
    name: "Moon Charm Anklet",
    price: "Rs. 1,200",
    priceNumber: 1200,
    image: "/silver-moon-charm-anklet-delicate-feminine.jpg",
    category: "Anklets",
  },
  {
    id: 3,
    name: "Custom Name Necklace",
    price: "Rs. 2,500",
    priceNumber: 2500,
    image: "/gold-custom-name-necklace-elegant-script.jpg",
    category: "Necklaces",
  },
  {
    id: 4,
    name: "Minimalist Gold Ring",
    price: "Rs. 1,800",
    priceNumber: 1800,
    image: "/minimalist-gold-stacking-ring-elegant.jpg",
    category: "Rings",
  },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'd like to order:\n\nProduct: ${product.name}\nPrice: ${product.price}\nQuantity: ${quantity}\n\nPlease confirm availability.`
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        priceNumber: product.priceNumber,
        image: product.images[0],
        category: product.category,
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/shop" className="hover:text-primary">
                  Shop
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/collections/bracelets" className="hover:text-primary">
                  {product.category}
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground">{product.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1.5 uppercase tracking-wider">
                    New
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square overflow-hidden bg-muted border-2 transition-colors ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{product.category}</p>
              <h1 className="font-serif text-3xl sm:text-4xl text-foreground">{product.name}</h1>
              <p className="mt-4 text-2xl text-foreground font-medium">{product.price}</p>

              <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-3">Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <label className="text-sm font-medium text-foreground uppercase tracking-wider">Quantity</label>
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 py-3 text-foreground font-medium">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-muted transition-colors">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground">{product.inStock ? "In Stock" : "Out of Stock"}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 space-y-4">
                <Button onClick={handleAddToCart} size="lg" className="w-full rounded-none" disabled={added}>
                  {added ? (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Add to Cart
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleWhatsAppOrder}
                  size="lg"
                  variant="outline"
                  className="w-full rounded-none bg-[#25D366] hover:bg-[#25D366]/90 text-white border-[#25D366]"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order via WhatsApp
                </Button>
                <div className="flex gap-4">
                  <Button variant="outline" size="lg" className="flex-1 rounded-none bg-transparent">
                    <Heart className="mr-2 h-5 w-5" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-none h-12 w-12 bg-transparent">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-border grid grid-cols-3 gap-4 text-center">
                <div>
                  <Truck className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
                  <p className="text-xs text-muted-foreground">
                    Free Shipping
                    <br />
                    Over Rs. 3,000
                  </p>
                </div>
                <div>
                  <RefreshCw className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
                  <p className="text-xs text-muted-foreground">
                    7 Day
                    <br />
                    Returns
                  </p>
                </div>
                <div>
                  <Shield className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
                  <p className="text-xs text-muted-foreground">
                    Quality
                    <br />
                    Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-24">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {relatedProducts.map((item) => (
                <Link key={item.id} href={`/shop/${item.id}`} className="group">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-foreground font-medium">{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
