import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { Clock, Bell } from "lucide-react"

type Product = {
  id: string
  name: string
  price: number
  image: string
}

export default async function CategoryPage({
  params,
}: {
  params: { name: string }
}) {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL|| 'http://localhost:3000'}/api/collections/products/${params.name}`,
    { cache: "no-store" }
  )

  if (!res.ok) notFound()

  const { collection, products } = await res.json()

  if (!collection) notFound()

     
    
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div>
        COLLECTION: {params.name}
      </div>
      {/* Hero */}
      <section className="pt-15 bg-[#9b7558] text-background py-10 text-center">
        <h1 className="font-serif text-5xl">{collection.name}</h1>
        <p className="mt-4 max-w-xl mx-auto text-lg">
          Explore our handcrafted {collection.name.toLowerCase()} collection
        </p>
      </section>

      {/* 🔹 PRODUCTS AVAILABLE */}
      {products.length > 0 ? (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product: Product) => (
              <Link
                key={product.id}
                href={`/products/${product.name}`}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <h3 className="mt-3 font-medium">{product.name}</h3>
                <p className="text-primary font-semibold">
                  PKR {product.price}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        /* 🔹 COMING SOON (Tumhara Existing UI) */
        <section className="py-24 text-center">
          <div className="relative w-72 h-72 mx-auto mb-10">
            <Image
              src="/images/coming-soon.png"
              alt="Coming soon"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl">
              <div className="bg-white/20 backdrop-blur px-8 py-4 rounded-full">
                <Clock className="mx-auto mb-2 text-white" />
                <span className="text-white uppercase text-sm tracking-wide">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          <p className="max-w-lg mx-auto text-muted-foreground mb-8">
            We’re crafting something special for our{" "}
            {collection.name.toLowerCase()} collection.
          </p>

          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/custom-orders">Request Custom Order</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/collections">
                <Bell className="mr-2 h-4 w-4" />
                Other Collections
              </Link>
            </Button>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
