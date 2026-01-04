"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { ShoppingBag } from "lucide-react"
import { useState } from "react"

type Product = {
  id: string
  name: string
  price: number
  images: string[]
  stock_quantity: number
  main_collection: {
    name: string
  } | null
}

export function ProductClient({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  // Convert UUID to number for cart (simple hash)
  const cartId = product.id.split("-").reduce((acc, part) => acc + part.charCodeAt(0), 0)

  const handleAddToCart = () => {
    if (product.stock_quantity === 0) return

    addToCart({
      id: cartId,
      name: product.name,
      price: `PKR ${product.price.toLocaleString()}`,
      priceNumber: product.price,
      image: product.images?.[0] || "/placeholder.svg",
      category: product.main_collection?.name || "Uncategorized",
    })
  }

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Quantity:</span>
        <div className="flex items-center border border-border">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 hover:bg-muted transition-colors"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span className="px-6 py-2 border-x border-border min-w-[60px] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
            className="px-4 py-2 hover:bg-muted transition-colors"
            disabled={quantity >= product.stock_quantity}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        disabled={product.stock_quantity === 0}
        className="w-full h-12 text-lg rounded-none"
        size="lg"
      >
        <ShoppingBag className="h-5 w-5 mr-2" />
        {product.stock_quantity > 0 ? "Add to Cart" : "Out of Stock"}
      </Button>
    </div>
  )
}

