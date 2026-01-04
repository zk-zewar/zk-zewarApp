import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturedCollections } from "@/components/featured-collections"



export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section>
        <div className="bg-[#9b7558] text-background mt-5 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-10">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl ">Our Collections</h1>
            <p className="mt-4 text-lg  max-w-2xl mx-auto">
              Explore our carefully curated collections, each piece handcrafted to celebrate your unique elegance.
            </p>
          </div>
        </div>
      </section>

      <FeaturedCollections />

      <Footer />
    </main>
  )
}
