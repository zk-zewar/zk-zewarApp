import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Clock, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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

      {/* Coming Soon Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg bg-muted">
            <div className="aspect-[16/9] relative">
              <img src="/elegant-jewelry-collection-display-gold-pearls.jpg" alt="Shop Coming Soon" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-foreground/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-background/20 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-background" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-background mb-3">Coming Soon</h2>
                <p className="text-background/80 max-w-md mb-6">
                  We are curating our complete jewelry collection for you. In the meantime, explore our featured
                  collections or request a custom piece.
                </p>
                <div className="flex items-center gap-2 text-background/60 text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Something beautiful is on its way</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8"
            >
              <Link href="/custom-orders">
                Request Custom Order
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none px-8 bg-transparent">
              <Link href="/collections">Browse Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
