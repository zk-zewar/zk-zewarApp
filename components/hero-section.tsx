import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/handcrafted-20designs-20personalized-20pieces-20shop-20now-20-281-29.png"
          alt="ZK Zewar - Timeless Elegance, Crafted for You"
          className="h-full w-full object-cover object-[center_30%] sm:object-[center_40%]"
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content - positioned at bottom for call to action */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center mt-auto mb-24">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#c9a88e] text-white hover:bg-[#b89478] rounded-none px-8 py-6 text-sm uppercase tracking-wider"
          >
            <Link href="/collections">
              Explore Collections
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-none px-8 py-6 text-sm uppercase tracking-wider border-[#8b6f5c] text-[#8b6f5c] hover:bg-[#8b6f5c]/10 bg-white/80"
          >
            <Link href="/custom-orders">Custom Orders</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-[#8b6f5c]/60">Scroll</span>
          <div className="w-px h-12 bg-[#8b6f5c]/30" />
        </div>
      </div>
    </section>
  )
}
