"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ShoppingBag, Search, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "Custom Orders", href: "/custom-orders" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
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

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/untitled-20design-20-282-29.png"
                alt="ZK Zewar Logo"
                width={80}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.slice(3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex text-foreground/80 hover:text-primary">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
