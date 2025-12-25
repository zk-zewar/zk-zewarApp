"use client"

import { useState } from "react"
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
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "Custom Orders", href: "/custom-orders" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const allProducts = [
  { id: 201, name: "Custom Name Necklace", price: "Rs. 2,500", category: "Necklaces" },
  { id: 202, name: "Layered Chain Set", price: "Rs. 3,000", category: "Necklaces" },
  { id: 203, name: "Pearl Pendant", price: "Rs. 2,200", category: "Necklaces" },
  { id: 401, name: "Pearl Initial Bracelet", price: "Rs. 1,500", category: "Bracelets" },
  { id: 402, name: "Chain Link Bracelet", price: "Rs. 1,800", category: "Bracelets" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { totalItems, setIsCartOpen } = useCart()
  const router = useRouter()

  const filteredProducts = searchQuery.trim()
    ? allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : []

  const handleProductClick = (productId: number) => {
    setIsSearchOpen(false)
    setSearchQuery("")
    router.push(`/shop/${productId}`)
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
                src="/images/untitled-20design-20-282-29.png"
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
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto lg:ml-0">
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
          <div className="max-h-[60vh] overflow-y-auto">
            {searchQuery.trim() === "" ? (
              <div className="p-6 text-center text-muted-foreground">
                <p>Start typing to search for jewelry...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="py-2">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted transition-colors text-left"
                  >
                    <div>
                      <p className="font-medium text-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <p className="text-sm font-medium text-primary">{product.price}</p>
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
