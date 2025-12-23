import { Gem, Heart, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Gem,
    title: "Master Craftsmanship",
    description:
      "Each piece is meticulously handcrafted by skilled artisans with decades of experience in fine jewelry making.",
  },
  {
    icon: Heart,
    title: "Personalization",
    description:
      "Add a personal touch with custom engravings, initials, or meaningful dates that make your piece truly yours.",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    description:
      "We use only the finest materials—ethically sourced gems and precious metals that stand the test of time.",
  },
  {
    icon: Sparkles,
    title: "Lifetime Care",
    description:
      "Every purchase includes complimentary cleaning and maintenance to keep your jewelry sparkling forever.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Why ZK Zewar</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
            The ZK Zewar Promise
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-background border border-border group-hover:border-primary transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-foreground">{feature.title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
