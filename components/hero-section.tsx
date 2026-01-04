import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[85vh] flex items-end justify-center pt-16">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-image.png"
          alt="ZK Zewar - Timeless Elegance, Crafted for You"
          className="h-full w-full object-contain sm:object-cover object-center sm:object-[center_33%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/70 via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 pb-6 sm:pb-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">

          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[#9b7558] text-white hover:bg-[#b89478] rounded-none px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-wider"
          >
            <Link href="/collections" className="flex items-center justify-center">
              Explore Collections
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-none px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-wider border-[#8b6f5c] text-[#8b6f5c] hover:bg-[#8b6f5c]/10 bg-white/90"
          >
            <Link href="/collections/custom-designs" className="flex items-center justify-center">Custom Orders</Link>
          </Button>

        </div>
      </div>
    </section>
  )
}
