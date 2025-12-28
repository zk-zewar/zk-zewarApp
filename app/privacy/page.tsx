import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-10">
        <div className="relative overflow-hidden bg-gradient-to-b from-[#9b7558] to-[#8a684e] text-background py-25 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="uppercase tracking-widest text-sm text-background/80">
              Legal
            </span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-background/90">
              Last updated: December 2024
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-px bg-background/20" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Intro */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <p className="text-muted-foreground leading-relaxed">
              At <span className="font-medium text-foreground">ZK Zewar</span>, we are committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit
              our website or make a purchase.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Payment information (processed securely through our providers)</li>
              <li>Order history and preferences</li>
              <li>Communications with us (messages, custom order requests)</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">
              We use your information to:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about orders, products, and promotions</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Information Sharing
            </h2>
            <p className="text-muted-foreground mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>Shipping carriers to deliver your orders</li>
              <li>Payment processors to handle transactions</li>
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, no method of
              transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Your Rights
            </h2>
            <p className="text-muted-foreground mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and
              personalize content. You can control cookies through your browser settings.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or our practices, please contact us at:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: <span className="text-foreground">zkzewar02@gmail.com</span></li>
              <li>WhatsApp: <span className="text-foreground">+92 319 5459398</span></li>
            </ul>
          </div>

          {/* Changes */}
          <div className="bg-card border border-border p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page along with an
              updated “Last updated” date.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
