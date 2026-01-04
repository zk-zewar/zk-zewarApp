import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Truck, RefreshCw, Package, Shield } from "lucide-react"

export default function ShippingReturnsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section>
        <div className="relative overflow-hidden bg-[#9b7558] text-background py-25 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="uppercase tracking-widest text-sm ">
              Policies & Information
            </span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl ">
              Shipping & Returns
            </h1>
            <p className="mt-6 text-lg  max-w-2xl mx-auto">
              Everything you need to know about deliveries, returns, and exchanges.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                desc: "On orders over Rs. 3,000",
              },
              {
                icon: Package,
                title: "Secure Packaging",
                desc: "Gift-ready premium boxes",
              },
              {
                icon: RefreshCw,
                title: "Easy Returns",
                desc: "7-day return window",
              },
              {
                icon: Shield,
                title: "Quality Guarantee",
                desc: "100% satisfaction promise",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-6 bg-card border border-border shadow-sm hover:shadow-md transition"
              >
                <item.icon className="h-9 w-9 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Shipping Information */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Shipping Information
            </h2>

            <h3 className="font-serif text-lg text-foreground mt-6">
              Domestic Shipping (Pakistan)
            </h3>
            <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-5">
              <li>Standard Shipping: 3–5 business days (Rs. 200)</li>
              <li>Express Shipping: 1–2 business days (Rs. 400)</li>
              <li>Free shipping on orders over Rs. 3,000</li>
              <li>Cash on Delivery available (additional Rs. 50)</li>
            </ul>

            <h3 className="font-serif text-lg text-foreground mt-8">
              International Shipping
            </h3>
            <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-5">
              <li>Standard International: 10–15 business days</li>
              <li>Shipping costs calculated at checkout</li>
              <li>Customs duties & taxes are buyer’s responsibility</li>
              <li>Tracking provided for all international orders</li>
            </ul>

            <h3 className="font-serif text-lg text-foreground mt-8">
              Order Processing
            </h3>
            <p className="mt-4 text-muted-foreground">
              Orders are processed within 1–2 business days. Custom orders require
              7–14 days before shipping. You’ll receive a WhatsApp notification once
              your order is shipped.
            </p>
          </div>

          {/* Returns & Exchanges */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Returns & Exchanges
            </h2>

            <h3 className="font-serif text-lg text-foreground mt-6">
              Return Policy
            </h3>
            <p className="mt-4 text-muted-foreground">
              We want you to love your jewelry. If you’re not completely satisfied,
              unworn items may be returned within 7 days of delivery for a refund
              or exchange.
            </p>

            <h3 className="font-serif text-lg text-foreground mt-8">
              Return Conditions
            </h3>
            <ul className="mt-4 space-y-2 text-muted-foreground list-disc pl-5">
              <li>Items must be unworn and in original condition</li>
              <li>Original packaging must be included</li>
              <li>Return request must be made within 7 days</li>
              <li>Custom & personalized items are non-returnable</li>
              <li>Sale items are final sale</li>
            </ul>

            <h3 className="font-serif text-lg text-foreground mt-8">
              How to Return
            </h3>
            <ol className="mt-4 space-y-2 text-muted-foreground list-decimal pl-5">
              <li>Contact us via WhatsApp or email with order number</li>
              <li>Receive return authorization & instructions</li>
              <li>Ship item back in original packaging</li>
              <li>Refund processed within 3–5 business days</li>
            </ol>

            <h3 className="font-serif text-lg text-foreground mt-8">
              Exchanges
            </h3>
            <p className="mt-4 text-muted-foreground">
              Need a different size or style? Contact us within 7 days of delivery.
              Exchange shipping is free for domestic orders.
            </p>

            <h3 className="font-serif text-lg text-foreground mt-8">
              Damaged or Defective Items
            </h3>
            <p className="mt-4 text-muted-foreground">
              If your item arrives damaged or defective, contact us immediately
              with photos. We’ll arrange a replacement or full refund.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-lg border border-border bg-linear-to-br from-muted to-background p-10 text-center">
            <h2 className="font-serif text-3xl text-foreground mb-4">
              Need More Help?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Our team is always here to assist you with shipping, returns, or exchanges.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-none bg-[#9b7558] text-background hover:bg-[#9b7558]/70 hover:text-foreground border border-border px-8 py-3 text-sm font-medium transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
