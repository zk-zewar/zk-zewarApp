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
    image: "/elegant-gold-rings-collection-jewelry-display.jpg",
  },
  necklaces: {
    title: "Necklaces",
    description: "Timeless necklaces that tell your story, from delicate chains to personalized pendants.",
    image: "/elegant-gold-necklaces-collection-jewelry-display.jpg",
  },
  earrings: {
    title: "Earrings",
    description: "From everyday studs to elegant drop earrings, find your perfect pair.",
    image: "/elegant-earrings-collection-jewelry-display-pearls.jpg",
  },
  bracelets: {
    title: "Bracelets",
    description: "Handcrafted bracelets that add elegance to your everyday style.",
    image: "/elegant-pearl-bracelets-collection-jewelry-display.jpg",
  },
  anklets: {
    title: "Anklets",
    description: "Delicate anklets perfect for summer days and beach vibes.",
    image: "/elegant-gold-anklets-collection-jewelry-display.jpg",
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

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Collection</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">{data.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{data.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Category Image */}
            <div className="relative w-full max-w-md aspect-square mb-12 overflow-hidden rounded-lg">
              <Image src={data.image || "/placeholder.svg"} alt={data.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
                <div className="bg-background/90 px-8 py-4 rounded-full">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium uppercase tracking-wider">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Coming Soon Content */}
            <div className="max-w-lg">
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Coming Soon</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're carefully crafting our {data.title.toLowerCase()} collection. Each piece will be handmade with
                love and attention to detail. Stay tuned for something beautiful!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8">
                  <Link href="/custom-orders">Request Custom Order</Link>
                </Button>
                <Button variant="outline" className="rounded-none px-8 bg-transparent" asChild>
                  <Link href="/collections">
                    <Bell className="mr-2 h-4 w-4" />
                    Browse Other Collections
                  </Link>
                </Button>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="mt-16 flex items-center gap-4">
              <div className="h-px w-12 bg-border" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">ZK Zewar</span>
              <div className="h-px w-12 bg-border" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
