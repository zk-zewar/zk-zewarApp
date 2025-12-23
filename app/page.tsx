import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BrandIntro } from "@/components/brand-intro"
import { FeaturedCollections } from "@/components/featured-collections"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CustomOrderProcess } from "@/components/custom-order-process"
import { Testimonials } from "@/components/testimonials"
import { InstagramGallery } from "@/components/instagram-gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BrandIntro />
      <FeaturedCollections />
      <WhyChooseUs />
      <CustomOrderProcess />
      <Testimonials />
      <InstagramGallery />
      <Footer />
    </main>
  )
}
