"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ShoppingBag, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useCart } from "@/contexts/cart-context"
import { useRouter } from "next/navigation"

const navigation = [
  { name: "Collections", href: "/collections" },
  { name: "Custom Orders", href: "/collections/custom-designs" },
]

type Product = {
  id: string
  name: string
  slug: string
  price: number
  images: string[]
  main_collection: {
    name: string
  } | null
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"
        const res = await fetch(`${baseUrl}/api/products`)
        const data = await res.json()
        if (res.ok && data.products) {
          setProducts(data.products)
        }
      } catch (error) {
        console.error("Failed to fetch products", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = searchQuery.trim()
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.main_collection?.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : []

  const handleProductClick = (slug: string) => {
    setIsSearchOpen(false)
    setSearchQuery("")
    router.push(`/products/${slug}`)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="flex lg:hidden mr-2">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 bg-background">
                  <div className="mt-8 flow-root">
                    <div className="flex flex-col space-y-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="font-serif text-lg text-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <Link href="/" className="flex items-center">
              <Image
                src="/icon.png"
                alt="ZK Zewar Logo"
                width={80}
                height={80}
                className="h-14 w-14 object-cover rounded-full"
              />
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-0 ml-auto lg:ml-0">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/80 hover:text-primary"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/80 hover:text-primary relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </nav>

      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-lg p-0 gap-0">
          <DialogTitle className="sr-only">Search Products</DialogTitle>
          <div className="flex items-center border-b border-border px-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 focus-visible:ring-0 text-lg py-6"
              autoFocus
            />
            {searchQuery && (
              <Button variant="ghost" size="icon" onClick={() => setSearchQuery("")}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="max-h-[80vh] overflow-y-auto">
            {searchQuery.trim() === "" ? (
              <div className="p-6 text-center text-muted-foreground">
                <p>Start typing to search for jewelry...</p>
              </div>
            ) : loading ? (
              <div className="p-6 text-center text-muted-foreground">
                <p>Loading products...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="py-2">
                {filteredProducts.slice(0, 10).map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.slug)}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted transition-colors text-left"
                  >
                    {product.images && product.images[0] && (
                      <div className="relative w-12 h-12 shrink-0 bg-muted rounded overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {product.main_collection?.name || "Uncategorized"}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-primary whitespace-nowrap">
                      PKR {product.price.toLocaleString()}
                    </p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-muted-foreground">
                <p>No products found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}
