import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { ArrowLeft, ShoppingBag, Heart, Share2 } from "lucide-react"
import { ProductClient } from "./product-client"

type Product = {
  id: string
  name: string
  price: number
  images: string[]
  slug: string
  description: string | null
  stock_quantity: number
  main_collection: {
    id: string
    name: string
  } | null
  sub_collection: {
    id: string
    name: string
  } | null
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"}/api/products/slug/${slug}`,
    { cache: "no-store" }
  )

  if (!res.ok) notFound()

  const { product } = await res.json()

  if (!product) notFound()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Collections</span>
          </Link>
        </div>

        {/* Product Details */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={product.images?.[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {product.images && product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.slice(1, 5).map((image: string, index: number) => (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-lg bg-muted"
                      >
                        <Image
                          src={image}
                          alt={`${product.name} ${index + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                {/* Breadcrumb */}
                {product.main_collection && (
                  <div className="text-sm text-muted-foreground mb-4">
                    <Link
                      href={`/collections/${product.main_collection.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {product.main_collection.name}
                    </Link>
                    {product.sub_collection && (
                      <>
                        <span className="mx-2">/</span>
                        <span>{product.sub_collection.name}</span>
                      </>
                    )}
                  </div>
                )}

                {/* Title */}
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-3xl font-semibold text-primary">
                    PKR {product.price.toLocaleString()}
                  </p>
                </div>

                {/* Description */}
                {product.description && (
                  <div className="mb-8">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>
                )}

                {/* Stock Status */}
                <div className="mb-8">
                  {product.stock_quantity > 0 ? (
                    <p className="text-sm text-green-600 dark:text-green-400">
                      ✓ In Stock ({product.stock_quantity} available)
                    </p>
                  ) : (
                    <p className="text-sm text-destructive">Out of Stock</p>
                  )}
                </div>

                {/* Add to Cart Component */}
                <ProductClient product={product} />

                {/* Additional Actions */}
                <div className="flex gap-4 mt-6">
                  <Button variant="outline" className="flex-1" size="lg">
                    <Heart className="h-4 w-4 mr-2" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" className="flex-1" size="lg">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>

                {/* Additional Info */}
                <div className="mt-12 pt-8 border-t border-border space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Free Shipping</h3>
                    <p className="text-sm text-muted-foreground">
                      Free shipping on orders over PKR 3,000
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Secure Packaging</h3>
                    <p className="text-sm text-muted-foreground">
                      Premium gift-ready packaging included
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Easy Returns</h3>
                    <p className="text-sm text-muted-foreground">
                      7-day return window for unused items
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

