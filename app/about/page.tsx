import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Gem, Heart, Sparkles, Users } from "lucide-react"

const values = [
  {
    icon: Gem,
    title: "Quality Craftsmanship",
    description: "Every piece is meticulously handcrafted using premium materials and traditional techniques.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "We pour our passion into every design, ensuring each piece carries a piece of our heart.",
  },
  {
    icon: Sparkles,
    title: "Unique Designs",
    description: "Our collections feature original designs that you won't find anywhere else.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We're here to help you find or create the perfect piece.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-20">
        <div className="relative h-[50vh] min-h-[400px]">
          <Image src="/placeholder.svg?height=800&width=1600" alt="About ZK Zewar" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-background px-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl">Our Story</h1>
              <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-background/90">
                Timeless Elegance, Crafted for You
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=640"
                alt="Founder of ZK Zewar"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-sm uppercase tracking-wider text-primary">The Beginning</span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-foreground">A Passion Turned Into Purpose</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  ZK Zewar began as a small dream in a tiny room, where a love for beautiful jewelry and meaningful
                  designs came together. What started as creating pieces for friends and family soon blossomed into
                  something much bigger.
                </p>
                <p>
                  We believe that jewelry is more than just an accessory – it's a way to express your personality,
                  commemorate special moments, and carry meaningful symbols close to your heart. Every piece we create
                  is designed with this philosophy in mind.
                </p>
                <p>
                  Today, ZK Zewar is known for its handcrafted designs, personalized pieces, and commitment to quality.
                  From delicate initial bracelets to custom statement pieces, we take pride in creating jewelry that our
                  customers treasure for years to come.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-serif text-xl text-foreground italic">
                  "Every piece tells a story. Let us help you tell yours."
                </p>
                <p className="mt-2 text-muted-foreground">— Founder, ZK Zewar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground">What We Stand For</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from design to delivery.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl sm:text-5xl text-primary">500+</p>
              <p className="mt-2 text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl text-primary">200+</p>
              <p className="mt-2 text-muted-foreground">Unique Designs</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl text-primary">100+</p>
              <p className="mt-2 text-muted-foreground">Custom Orders</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl text-primary">5</p>
              <p className="mt-2 text-muted-foreground">Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">Let's Create Something Beautiful</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking for the perfect gift or a custom piece for yourself, we're here to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Shop Collection
            </a>
            <a
              href="/custom-orders"
              className="inline-flex items-center justify-center px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Custom Order
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
