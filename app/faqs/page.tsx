import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "How long does shipping take?",
        answer:
          "Standard shipping within Pakistan takes 3-5 business days. For custom orders, please allow 7-14 days for creation plus shipping time.",
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "Yes! We ship worldwide. International shipping typically takes 10-15 business days depending on the destination. Shipping costs are calculated at checkout.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order ships, you'll receive a WhatsApp message with tracking information. You can also reach out to us directly for updates.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers, EasyPaisa, JazzCash, and cash on delivery (for orders within Pakistan). For international orders, we accept PayPal.",
      },
    ],
  },
  {
    category: "Products & Quality",
    questions: [
      {
        question: "Are your jewelry pieces hypoallergenic?",
        answer:
          "Most of our pieces are made with hypoallergenic materials. If you have specific allergies, please let us know and we can recommend suitable options.",
      },
      {
        question: "What materials do you use?",
        answer:
          "We use high-quality materials including sterling silver, gold-plated brass, freshwater pearls, semi-precious stones, and premium beads. Each product description specifies the materials used.",
      },
      {
        question: "How do I care for my jewelry?",
        answer:
          "Store your jewelry in a dry place, avoid contact with water, perfumes, and lotions. Clean gently with a soft cloth. We include care instructions with every order.",
      },
      {
        question: "Do you offer repairs?",
        answer:
          "Yes! We offer repair services for jewelry purchased from us. Contact us with details and photos of the issue, and we'll guide you through the process.",
      },
    ],
  },
  {
    category: "Custom Orders",
    questions: [
      {
        question: "How do I place a custom order?",
        answer:
          "You can place a custom order through our Custom Orders page or message us directly on WhatsApp. Share your vision, and we'll work together to create your perfect piece.",
      },
      {
        question: "How long do custom orders take?",
        answer:
          "Custom orders typically take 7-14 days to create, depending on complexity. We'll provide a timeline when you place your order.",
      },
      {
        question: "Can I get a design mockup before production?",
        answer:
          "For complex custom orders, we can provide sketches or reference images for approval before we begin crafting your piece.",
      },
      {
        question: "What if I don't like my custom order?",
        answer:
          "We work closely with you throughout the process to ensure satisfaction. If there's an issue, we'll do our best to make it right.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "We accept returns within 7 days of delivery for unworn items in original condition. Custom and personalized items cannot be returned unless defective.",
      },
      {
        question: "How do I initiate a return?",
        answer:
          "Contact us via WhatsApp or email with your order details and reason for return. We'll guide you through the process.",
      },
      {
        question: "Can I exchange my item?",
        answer:
          "Yes! Exchanges are available within 7 days of delivery. Contact us to arrange an exchange for a different size or style.",
      },
    ],
  },
]

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section>
        <div className="relative overflow-hidden bg-[#9b7558] text-background py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <span className="uppercase tracking-widest text-sm ">
              Help Center
            </span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-background/70 max-w-2xl mx-auto">
              Everything you need to know about orders, shipping, custom jewelry, and more.
            </p>
          </div>

          {/* decorative line */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
        </div>
      </section>


      {/* FAQs */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category) => (
              <div
                key={category.category}
                className="bg-[#d7ad93] border border-border p-6 sm:p-8 shadow-sm transition hover:shadow-md"
              >
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  {category.category}
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="border border-border bg-background px-4"
                    >
                      <AccordionTrigger className="text-left py-4 text-base font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-20 rounded-lg border border-border bg-[#d7ad93] p-10 sm:p-14 text-center">
            <h2 className="font-serif text-3xl text-background mb-4">
              Still Have Questions?
            </h2>
            <p className="text-background max-w-xl mx-auto mb-8">
              Our team is always happy to help you with orders, custom designs, or anything else.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="rounded-none bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8"
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </Button>

              <Button asChild  className="rounded-none px-8 bg-[#9b7558] text-background hover:bg-[#9b7558]/60">
                <Link href="/contact">Visit Contact Page</Link>
              </Button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
