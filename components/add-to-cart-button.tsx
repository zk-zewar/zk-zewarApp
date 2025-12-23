"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { ShoppingBag, Check } from "lucide-react"
import { useState } from "react"

interface AddToCartButtonProps {
  product: {
    id: number
    name: string
    price: string
    image: string
    category: string
  }
  variant?: "default" | "icon"
  className?: string
}

// Helper to extract price number from string like "Rs. 1,500"
function extractPrice(priceStr: string): number {
  return Number(priceStr.replace(/[^0-9]/g, ""))
}

export function AddToCartButton({ product, variant = "default", className }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      priceNumber: extractPrice(product.price),
      image: product.image,
      category: product.category,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  if (variant === "icon") {
    return (
      <button
        onClick={handleClick}
        className={`p-2 bg-background/80 rounded-full hover:bg-background transition-all ${className}`}
        title="Add to Cart"
      >
        {added ? <Check className="h-4 w-4 text-primary" /> : <ShoppingBag className="h-4 w-4 text-foreground" />}
      </button>
    )
  }

  return (
    <Button onClick={handleClick} className={`rounded-none ${className}`} disabled={added}>
      {added ? (
        <>
          <Check className="mr-2 h-4 w-4" /> Added to Cart
        </>
      ) : (
        <>
          <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
        </>
      )}
    </Button>
  )
}
