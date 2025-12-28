"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/contexts/cart-context"
import { CheckCircle2, Truck, CreditCard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const [step, setStep] = useState<"details" | "success">("details")
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  })

  const shippingCost = totalPrice >= 3000 ? 0 : 200
  const grandTotal = totalPrice + shippingCost

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend
    setStep("success")
    clearCart()
  }

  if (items.length === 0 && step !== "success") {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl text-foreground mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Add some items to your cart to proceed with checkout.</p>
            <Button asChild className="rounded-none">
              <Link href="/collections">Continue Shopping</Link>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  if (step === "success") {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card border border-border p-8 sm:p-12">
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="font-serif text-3xl text-foreground mb-4">Order Placed Successfully!</h1>
              <p className="text-muted-foreground mb-6">
                Thank you for your order, {formData.fullName}! We have received your order and will contact you shortly
                on {formData.phone} to confirm delivery details.
              </p>
              <div className="bg-muted p-4 mb-6 text-left">
                <p className="text-sm text-muted-foreground mb-1">Payment Method</p>
                <p className="font-medium text-foreground flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Cash on Delivery (COD)
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                A confirmation message will be sent to your WhatsApp number.
              </p>
              <Button asChild className="rounded-none">
                <Link href="/collections">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-card border border-border p-6">
                  <h2 className="font-serif text-xl text-foreground mb-6">Delivery Information</h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 rounded-none"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1 rounded-none"
                          placeholder="03XX-XXXXXXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email (Optional)</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1 rounded-none"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Delivery Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="mt-1 rounded-none min-h-[80px]"
                        placeholder="House/Flat No., Street, Area"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="mt-1 rounded-none"
                          placeholder="City name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code (Optional)</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="mt-1 rounded-none"
                          placeholder="XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes">Order Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="mt-1 rounded-none"
                        placeholder="Any special instructions for your order..."
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-card border border-border p-6">
                  <h2 className="font-serif text-xl text-foreground mb-4">Payment Method</h2>
                  <div className="flex items-center gap-3 p-4 bg-primary/10 border-2 border-primary">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Cash on Delivery (COD)</p>
                      <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-none">
                  Place Order - Rs. {grandTotal.toLocaleString()}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-card border border-border p-6 sticky top-24">
                <h2 className="font-serif text-xl text-foreground mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 bg-muted flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center rounded-full">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                        <p className="text-sm text-foreground mt-1">
                          Rs. {(item.priceNumber * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Truck className="h-4 w-4" /> Shipping
                    </span>
                    <span className="text-foreground">
                      {shippingCost === 0 ? <span className="text-primary">Free</span> : `Rs. ${shippingCost}`}
                    </span>
                  </div>
                  {shippingCost > 0 && (
                    <p className="text-xs text-muted-foreground">Free shipping on orders over Rs. 3,000</p>
                  )}
                  <div className="flex justify-between text-lg font-medium pt-3 border-t border-border">
                    <span>Total</span>
                    <span>Rs. {grandTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
