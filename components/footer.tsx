import Link from "next/link"
import { Instagram, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  shop: [
    { name: "All Jewelry", href: "/shop" },
    { name: "Rings", href: "/collections/rings" },
    { name: "Necklaces", href: "/collections/necklaces" },
    { name: "Earrings", href: "/collections/earrings" },
    { name: "Bracelets", href: "/collections/bracelets" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Custom Orders", href: "/custom-orders" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
  ],
  policies: [
    { name: "Shipping & Returns", href: "/shipping-returns" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl">Join Our Inner Circle</h3>
              <p className="mt-2 text-background/70">
                Subscribe for exclusive previews, special offers, and jewelry care tips.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-none"
              />
              <Button className="bg-primary text-foreground hover:bg-primary/90 rounded-none px-8">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl tracking-wider">ZK Zewar</span>
            </Link>
            <p className="mt-4 text-background/70 max-w-sm">
              Timeless elegance, crafted for you. Handmade jewelry that celebrates your unique story and most cherished
              moments.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider">Shop</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider">Policies</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.policies.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">© {new Date().getFullYear()} ZK Zewar. All rights reserved.</p>
          <p className="text-sm text-background/60">Handcrafted with ♥ for jewelry lovers</p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <Link
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>
    </footer>
  )
}
