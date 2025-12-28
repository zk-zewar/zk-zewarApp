import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Gem, Heart, Sparkles, Users } from "lucide-react"
import { WhyChooseUs } from "@/components/why-choose-us"
import { BrandIntro } from "@/components/brand-intro"

const values = [
  {
    icon: Gem,
    title: "Quality Craftsmanship",
    description:
      "Every piece is meticulously handcrafted using premium materials and traditional techniques.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "We pour our passion into every design, ensuring each piece carries a piece of our heart.",
  },
  {
    icon: Sparkles,
    title: "Unique Designs",
    description:
      "Our collections feature original designs that you won't find anywhere else.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We're here to help you find or create the perfect piece.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Intro Sections */}
      <BrandIntro />
      <WhyChooseUs />

      {/* Values */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-muted to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="uppercase tracking-widest text-sm text-muted-foreground">
              Our Values
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-foreground">
              What We Stand For
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border p-8 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers / Stats */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { value: "500+", label: "Happy Customers" },
              { value: "200+", label: "Unique Designs" },
              { value: "100+", label: "Custom Orders" },
              { value: "4.7★", label: "Star Reviews" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="font-serif text-4xl sm:text-5xl text-primary">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/10 to-muted">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
            Let’s Create Something Beautiful
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Whether you’re searching for the perfect gift or dreaming of a custom
            piece, we’d love to create something meaningful with you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="inline-flex items-center justify-center px-10 py-3 bg-[#9b7558] text-white hover:bg-[#b89478]  transition"
            >
              Shop Collection
            </a>
            <a
              href="/custom-orders"
              className="inline-flex items-center justify-center px-10 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition"
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
