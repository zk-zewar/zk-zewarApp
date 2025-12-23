export function BrandIntro() {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm uppercase tracking-[0.3em] text-primary">Our Story</span>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground text-balance">
          Where Artistry Meets Emotion
        </h2>
        <div className="mt-8 space-y-6 text-foreground/80 text-lg leading-relaxed">
          <p>
            At ZK Zewar, we believe that jewelry is more than an accessory—it's a reflection of your story, your
            milestones, and the moments that matter most. Each piece in our collection is meticulously handcrafted by
            skilled artisans who pour their passion into every detail.
          </p>
          <p>
            From personalized engravings to custom designs, we specialize in creating meaningful pieces that become
            treasured heirlooms, passed down through generations.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-px bg-primary/40" />
        </div>
      </div>
    </section>
  )
}
