import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section>
        <div className="relative overflow-hidden bg-gradient-to-b from-[#9b7558] to-[#8a684e] text-background py-25 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="uppercase tracking-widest text-sm text-background/80">
              Legal
            </span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg text-background/90">
              Last updated: December 2024
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-px bg-background/20" />
        </div>
      </section>

      {/* Content */}
      <section className="py-5 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Intro */}
            <p className="text-foreground leading-relaxed font-medium text-2xl text-center">
              Welcome to <span className="font-semibold  text-3xl ">ZK Zewar</span>. By accessing our website and
              making purchases, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

          {/* 1. General Terms */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              1. General Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By using our website, you confirm that you are at least 18 years old or have parental consent to make
              purchases. You agree to provide accurate and complete information when placing orders.
            </p>
          </div>

          {/* 2. Products and Pricing */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              2. Products and Pricing
            </h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>All prices are listed in Pakistani Rupees (PKR) unless otherwise stated</li>
              <li>Prices are subject to change without notice</li>
              <li>We reserve the right to modify or discontinue products at any time</li>
              <li>Product images are for illustration purposes; actual items may vary slightly</li>
            </ul>
          </div>

          {/* 3. Orders and Payment */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              3. Orders and Payment
            </h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>Orders are confirmed upon successful payment</li>
              <li>We reserve the right to refuse or cancel any order</li>
              <li>Payment information is processed securely through our payment partners</li>
              <li>Cash on Delivery orders may require verification</li>
            </ul>
          </div>

          {/* 4. Custom Orders */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              4. Custom Orders
            </h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>Custom orders require full payment before production begins</li>
              <li>Design changes must be requested before production starts</li>
              <li>Custom and personalized items are non-refundable unless defective</li>
              <li>Production timelines are estimates and may vary</li>
            </ul>
          </div>

          {/* 5. Shipping and Delivery */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              5. Shipping and Delivery
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Please refer to our Shipping & Returns page for detailed information regarding shipping methods,
              delivery timelines, and costs. We are not responsible for delays caused by shipping carriers or customs.
            </p>
          </div>

          {/* 6. Returns and Refunds */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              6. Returns and Refunds
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our return policy allows returns within 7 days of delivery for unworn items in original condition.
              Custom and sale items are final sale. Please review our Shipping & Returns page for complete details.
            </p>
          </div>

          {/* 7. Intellectual Property */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including images, text, designs, and logos, is the property of ZK Zewar
              and is protected by copyright laws. Unauthorized use is strictly prohibited.
            </p>
          </div>

          {/* 8. Limitation of Liability */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              ZK Zewar shall not be liable for any indirect, incidental, or consequential damages arising from the
              use of our products or services. Liability is limited to the purchase price of the product.
            </p>
          </div>

          {/* 9. Privacy */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              9. Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of our website is also governed by our Privacy Policy. Please review it to understand how
              your personal information is collected and used.
            </p>
          </div>

          {/* 10. Changes to Terms */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will take effect immediately
              upon posting. Continued use of our website constitutes acceptance of the updated terms.
            </p>
          </div>

          {/* 11. Contact Information */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              11. Contact Information
            </h2>
            <p className="text-muted-foreground mb-4">
              For questions regarding these Terms of Service, please contact us:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: <span className="text-foreground">zkzewar02@gmail.com</span></li>
              <li>WhatsApp: <span className="text-foreground">+92 319 5459398</span></li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
