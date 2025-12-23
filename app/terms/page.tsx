import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">Terms of Service</h1>
            <p className="mt-4 text-lg text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Welcome to ZK Zewar. By accessing our website and making purchases, you agree to be bound by these Terms
              of Service. Please read them carefully.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8">1. General Terms</h2>
            <p>
              By using our website, you confirm that you are at least 18 years old or have parental consent to make
              purchases. You agree to provide accurate and complete information when placing orders.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8">2. Products and Pricing</h2>
            <ul className="space-y-2">
              <li>All prices are listed in Pakistani Rupees (PKR) unless otherwise stated</li>
              <li>Prices are subject to change without notice</li>
              <li>We reserve the right to modify or discontinue products at any time</li>
              <li>Product images are for illustration purposes; actual items may vary slightly</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8">3. Orders and Payment</h2>
            <ul className="space-y-2">
              <li>Orders are confirmed upon successful payment</li>
              <li>We reserve the right to refuse or cancel any order</li>
              <li>Payment information is processed securely through our payment partners</li>
              <li>COD orders require verification before processing</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8">4. Custom Orders</h2>
            <ul className="space-y-2">
              <li>Custom orders require full payment before production begins</li>
              <li>Design changes must be requested before production starts</li>
              <li>Custom and personalized items are non-refundable unless defective</li>
              <li>Production times are estimates and may vary</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8">5. Shipping and Delivery</h2>
            <p>
              Please refer to our Shipping & Returns page for detailed information about shipping methods, delivery
              times, and costs. We are not responsible for delays caused by shipping carriers or customs.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8">6. Returns and Refunds</h2>
            <p>
              Our return policy allows returns within 7 days of delivery for unworn items in original condition. Custom
              and sale items are final sale. Please see our Shipping & Returns page for complete details.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8">7. Intellectual Property</h2>
            <p>
              All content on this website, including images, text, designs, and logos, is the property of ZK Zewar and
              is protected by copyright laws. You may not use, reproduce, or distribute our content without written
              permission.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8">8. Limitation of Liability</h2>
            <p>
              ZK Zewar shall not be liable for any indirect, incidental, or consequential damages arising from the use
              of our products or services. Our liability is limited to the purchase price of the product.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8">9. Privacy</h2>
            <p>
              Your use of our website is also governed by our Privacy Policy. Please review it to understand how we
              collect and use your information.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
              upon posting. Continued use of our website constitutes acceptance of the updated terms.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8">11. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
            <ul className="space-y-2">
              <li>Email: hello@zkzewar.com</li>
              <li>WhatsApp: +92 XXX XXXXXXX</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
