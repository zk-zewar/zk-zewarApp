import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/contexts/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import "./globals.css"
import { Playfair_Display } from "next/font/google"

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})


export const metadata: Metadata = {
  title: "ZK Zewar | Timeless Elegance, Crafted for You",
  description:
    "Discover handcrafted and personalized jewelry at ZK Zewar. Elegant rings, necklaces, earrings, and custom pieces designed to celebrate your unique story.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
