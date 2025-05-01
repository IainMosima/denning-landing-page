import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, HelpCircle } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Transparent Pricing for Kenyan Legal Professionals</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that's right for your practice. All plans include our core AI-powered features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Individual Plan */}
          <div className="bg-background rounded-xl border border-muted p-8 flex flex-col">
            <div>
              <h3 className="text-2xl font-bold mb-2">Individual</h3>
              <p className="text-muted-foreground mb-6">Perfect for solo practitioners</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">KSh 5,000</span>
                <span className="text-muted-foreground"> / month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>1 user</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>AI Legal Research</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Document Drafting (50 docs/month)</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Basic Case Management</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Email Support</span>
              </li>
            </ul>

            <div className="mt-auto">
              <Button className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Small Firm Plan */}
          <div className="bg-background rounded-xl border-2 border-primary p-8 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
              Most Popular
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Small Firm</h3>
              <p className="text-muted-foreground mb-6">Ideal for small law firms</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">KSh 15,000</span>
                <span className="text-muted-foreground"> / month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Up to 5 users</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Advanced AI Legal Research</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Document Drafting (200 docs/month)</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Full Case Management</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Client Portal</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Priority Email & Phone Support</span>
              </li>
            </ul>

            <div className="mt-auto">
              <Button className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-background rounded-xl border border-muted p-8 flex flex-col">
            <div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">For large firms and organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-muted-foreground"> pricing</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Unlimited users</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Premium AI Legal Research</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Unlimited Document Drafting</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Advanced Analytics & Reporting</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Custom Integrations</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>Dedicated Account Manager</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <span>24/7 Premium Support</span>
              </li>
            </ul>

            <div className="mt-auto">
              <Button className="w-full" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="w-full bg-muted/50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Compare Features</h2>
            <p className="text-lg text-muted-foreground">A detailed breakdown of what's included in each plan.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-xl shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Feature</th>
                  <th className="p-4 text-center">Individual</th>
                  <th className="p-4 text-center bg-primary/5">Small Firm</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Users</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center bg-primary/5">Up to 5</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">AI Legal Research</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-primary/5">Advanced</td>
                  <td className="p-4 text-center">Premium</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Document Drafting</td>
                  <td className="p-4 text-center">50/month</td>
                  <td className="p-4 text-center bg-primary/5">200/month</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Case Management</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-primary/5">Full</td>
                  <td className="p-4 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Client Portal</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-primary/5">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Legal Analytics</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-primary/5">Basic</td>
                  <td className="p-4 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Custom Templates</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-primary/5">Limited</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">API Access</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-primary/5">—</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Support</td>
                  <td className="p-4 text-center">Email</td>
                  <td className="p-4 text-center bg-primary/5">Email & Phone</td>
                  <td className="p-4 text-center">24/7 Premium</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Dedicated Account Manager</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center bg-primary/5">—</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container-custom section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Have questions about our pricing? Find answers to common questions below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: "Can I change plans later?",
              answer:
                "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
            },
            {
              question: "Is there a free trial?",
              answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.",
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, M-Pesa, and bank transfers for annual plans.",
            },
            {
              question: "Are there any long-term contracts?",
              answer:
                "No, all our plans are month-to-month with no long-term commitment. We also offer annual plans with a 15% discount.",
            },
            {
              question: "Can I get a custom plan for my organization?",
              answer:
                "Yes, our Enterprise plan is fully customizable to meet the specific needs of your organization. Contact our sales team to discuss your requirements.",
            },
            {
              question: "Is my data secure?",
              answer:
                "Yes, we take data security very seriously. All your data is encrypted and stored securely in compliance with Kenya's Data Protection Act.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions about our pricing?</p>
          <Button asChild>
            <Link href="/contact">Contact Our Sales Team</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Legal Practice?</h2>
            <p className="text-lg text-white/80 mb-8">
              Join hundreds of Kenyan legal professionals who are already experiencing the benefits of AI-powered legal
              tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
