import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Truck, RefreshCw, Package, Shield } from "lucide-react"

export default function ShippingReturnsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">Shipping & Returns</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about getting your jewelry to you and our return policies.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4 bg-muted">
              <Truck className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Free Shipping</p>
                <p className="text-sm text-muted-foreground">On orders over Rs. 3,000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted">
              <Package className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Secure Packaging</p>
                <p className="text-sm text-muted-foreground">Beautiful gift-ready boxes</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted">
              <RefreshCw className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Easy Returns</p>
                <p className="text-sm text-muted-foreground">7-day return window</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted">
              <Shield className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Quality Guarantee</p>
                <p className="text-sm text-muted-foreground">100% satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl text-foreground">Shipping Information</h2>

            <h3 className="font-serif text-xl text-foreground mt-8">Domestic Shipping (Pakistan)</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>Standard Shipping: 3-5 business days (Rs. 200)</li>
              <li>Express Shipping: 1-2 business days (Rs. 400)</li>
              <li>Free shipping on orders over Rs. 3,000</li>
              <li>Cash on Delivery available (additional Rs. 50)</li>
            </ul>

            <h3 className="font-serif text-xl text-foreground mt-8">International Shipping</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>Standard International: 10-15 business days</li>
              <li>Shipping costs calculated at checkout based on destination</li>
              <li>Customs duties and taxes may apply (buyer's responsibility)</li>
              <li>Tracking provided for all international orders</li>
            </ul>

            <h3 className="font-serif text-xl text-foreground mt-8">Order Processing</h3>
            <p className="text-muted-foreground">
              Orders are processed within 1-2 business days. Custom orders require 7-14 days for creation before
              shipping. You'll receive a WhatsApp notification when your order ships.
            </p>

            <hr className="my-12 border-border" />

            <h2 className="font-serif text-2xl text-foreground">Returns & Exchanges</h2>

            <h3 className="font-serif text-xl text-foreground mt-8">Return Policy</h3>
            <p className="text-muted-foreground">
              We want you to love your jewelry! If you're not completely satisfied, you may return unworn items within 7
              days of delivery for a full refund or exchange.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-8">Return Conditions</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>Items must be unworn and in original condition</li>
              <li>Original packaging must be included</li>
              <li>Return request must be made within 7 days of delivery</li>
              <li>Custom and personalized items cannot be returned (unless defective)</li>
              <li>Sale items are final sale</li>
            </ul>

            <h3 className="font-serif text-xl text-foreground mt-8">How to Return</h3>
            <ol className="text-muted-foreground space-y-2">
              <li>Contact us via WhatsApp or email with your order number</li>
              <li>Receive return authorization and shipping instructions</li>
              <li>Ship item back in original packaging</li>
              <li>Refund processed within 3-5 business days of receiving return</li>
            </ol>

            <h3 className="font-serif text-xl text-foreground mt-8">Exchanges</h3>
            <p className="text-muted-foreground">
              Want a different size or style? We're happy to help! Contact us within 7 days of delivery to arrange an
              exchange. Exchange shipping is free for domestic orders.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-8">Damaged or Defective Items</h3>
            <p className="text-muted-foreground">
              If your item arrives damaged or defective, please contact us immediately with photos. We'll arrange a
              replacement or full refund at no additional cost to you.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
