import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-muted py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground">Privacy Policy</h1>
            <p className="mt-4 text-lg text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              At ZK Zewar, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, and safeguard your information when you visit our website or make a purchase.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as:</p>
            <ul className="space-y-2">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Order history and preferences</li>
              <li>Communications with us (messages, custom order requests)</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about orders, products, and promotions</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Prevent fraud and ensure security</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8">Information Sharing</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul className="space-y-2">
              <li>Shipping carriers to deliver your orders</li>
              <li>Payment processors to handle transactions</li>
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of
              transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8">Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and
              personalize content. You can control cookies through your browser settings.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8">Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our practices, please contact us at:</p>
            <ul className="space-y-2">
              <li>Email: hello@zkzewar.com</li>
              <li>WhatsApp: +92 XXX XXXXXXX</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
