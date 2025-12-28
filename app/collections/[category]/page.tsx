import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { Clock, Bell } from "lucide-react"

const categoryData: Record<
  string,
  {
    title: string
    description: string
    image: string
  }
> = {
  rings: {
    title: "Rings",
    description: "Discover our collection of elegant rings, from minimalist bands to statement pieces.",
    image: "/images/ring.png",
  },
  necklaces: {
    title: "Necklaces",
    description: "Timeless necklaces that tell your story, from delicate chains to personalized pendants.",
    image: "/images/necklace.png",
  },
  earrings: {
    title: "Earrings",
    description: "From everyday studs to elegant drop earrings, find your perfect pair.",
    image: "/images/earrings.png",
  },
  bracelets: {
    title: "Bracelets",
    description: "Handcrafted bracelets that add elegance to your everyday style.",
    image: "/images/bracelet.png",
  },
  anklets: {
    title: "Anklets",
    description: "Delicate anklets perfect for summer days and beach vibes.",
    image: "/images/anklet.png",
  },
}

export function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }))
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const data = categoryData[category]

  if (!data) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
    <Header />
  
    {/* Hero Section */}
    <section className="pt-15">
      <div className="bg-[#9b7558] text-background py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl drop-shadow-lg animate-fade-in delay-200">
            {data.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  
    {/* Category Image Section */}
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="relative w-full max-w-md aspect-square mb-12 overflow-hidden rounded-2xl shadow-2xl transform transition-transform hover:scale-105">
          <Image
            src={data.image || "/images/coming-soon.png"}
            alt={data.title}
            fill
            className="object-cover rounded-2xl"
          />
          {/* Coming Soon Badge */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-md px-10 py-5 rounded-full flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
              <Clock className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-semibold uppercase tracking-wider text-white">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
  
        {/* Coming Soon Text */}
        <div className="max-w-lg">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4 drop-shadow-md">
            Coming Soon
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We're carefully crafting our {data.title.toLowerCase()} collection. Each piece will be
            handmade with love and attention to detail. Stay tuned for something beautiful!
          </p>
  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-full px-10 py-3 hover:scale-105 transition-transform shadow-md"
            >
              <Link href="/custom-orders">Request Custom Order</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full px-10 py-3 border border-primary bg-transparent hover:bg-white/10 transition"
            >
              <Link href="/collections">
                <Bell className="mr-2 h-4 w-4" />
                Browse Other Collections
              </Link>
            </Button>
          </div>
        </div>
  
        {/* Decorative Element */}
        <div className="mt-16 flex items-center gap-4 opacity-70">
          <div className="h-px w-16 bg-border" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground animate-pulse">
            ZK Zewar
          </span>
          <div className="h-px w-16 bg-border" />
        </div>
      </div>
    </section>
  
    <Footer />
  </main>
  
  )
}
