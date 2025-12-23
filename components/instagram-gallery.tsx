import Link from "next/link"
import { Instagram } from "lucide-react"

const images = [
  "/elegant-gold-bracelet-on-wrist-soft-lighting-insta.jpg",
  "/diamond-engagement-ring-in-velvet-box-romantic-ins.jpg",
  "/layered-gold-necklaces-on-model-neck-close-up-inst.jpg",
  "/pearl-drop-earrings-elegant-woman-instagram-style.jpg",
  "/custom-engraved-gold-pendant-heart-shape-instagram.jpg",
  "/jewelry-collection-flat-lay-on-marble-instagram-ae.jpg",
]

export function InstagramGallery() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-primary">Follow Us</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">@zkzewar</h2>
          <p className="mt-4 text-foreground/70">Join our community and get inspired by our latest creations</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <Link
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
