const steps = [
  {
    number: "01",
    title: "Share Your Vision",
    description: "Tell us about your dream piece—share inspirations, sketches, or simply describe what you envision.",
  },
  {
    number: "02",
    title: "Design Consultation",
    description: "Our designers work with you to refine the concept, select materials, and create detailed renderings.",
  },
  {
    number: "03",
    title: "Artisan Crafting",
    description: "Watch your piece come to life as our master craftsmen meticulously bring your vision to reality.",
  },
  {
    number: "04",
    title: "Delivery & Delight",
    description: "Receive your one-of-a-kind creation in elegant packaging, ready to cherish forever.",
  },
]

export function CustomOrderProcess() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-primary">Custom Orders</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground text-balance">
              Your Vision, Brought to Life
            </h2>
            <p className="mt-6 text-foreground/70 text-lg leading-relaxed">
              Have something special in mind? Our bespoke service transforms your ideas into exquisite, one-of-a-kind
              jewelry pieces that tell your unique story.
            </p>

            <div className="mt-12 space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="font-serif text-3xl text-primary/40">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
                    <p className="mt-2 text-foreground/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/jewelry-designer-sketching-ring-design-on-paper-wi.jpg"
                alt="Custom jewelry design process"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
