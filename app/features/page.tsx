import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, BarChart4, Users, Scale, Briefcase, Clock, Shield } from "lucide-react"

const mainFeatures = [
  {
    name: "AI Legal Research",
    description:
      "Instantly search and analyze Kenyan case law, statutes, and legal resources with AI-powered precision.",
    icon: BookOpen,
    href: "/features/ai-legal-research",
  },
  {
    name: "Automated Document Drafting",
    description: "Generate legally sound documents tailored to Kenyan legal standards in minutes, not hours.",
    icon: FileText,
    href: "/features/document-drafting",
  },
]

const otherFeatures = [
  {
    name: "Case Management",
    description: "Organize client files, case timelines, and tasks in one secure, accessible platform.",
    icon: Users,
    href: "/features/case-management",
  },
  {
    name: "Legal Analytics",
    description: "Gain insights into case outcomes, legal trends, and practice patterns specific to Kenyan courts.",
    icon: BarChart4,
    href: "/features/legal-analytics",
  },
  {
    name: "Legal Compliance Tools",
    description: "Stay updated with changing Kenyan legal requirements and ensure compliance in all your work.",
    icon: Scale,
    href: "/features/compliance-tools",
  },
  {
    name: "Client Portal",
    description: "Provide your clients with secure access to case updates, documents, and communication.",
    icon: Briefcase,
    href: "/features/client-portal",
  },
  {
    name: "Time & Billing",
    description: "Track time, generate invoices, and manage payments with our integrated billing system.",
    icon: Clock,
    href: "/features/time-billing",
  },
  {
    name: "Secure Collaboration",
    description: "Collaborate securely with colleagues and clients on cases and documents.",
    icon: Shield,
    href: "/features/secure-collaboration",
  },
]

export default function FeaturesPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Powerful Features for Kenyan Legal Professionals</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Denning combines cutting-edge AI technology with deep understanding of Kenyan legal practice to deliver
              tools that transform how you work.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="container-custom section-padding">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {mainFeatures.map((feature) => (
            <div key={feature.name} className="bg-background rounded-xl p-8 shadow-md border border-muted">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.name}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <div className="mb-8">
                <ul className="space-y-2">
                  {feature.name === "AI Legal Research" ? (
                    <>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-sm">Kenyan case law database</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-sm">Natural language search</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-sm">AI-powered legal summaries</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-sm">Kenyan legal templates</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-sm">Automated contract generation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3 h-3"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-sm">Document review and analysis</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <Button asChild>
                <Link href={feature.href}>
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Other Features */}
      <section className="w-full bg-muted/50 section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherFeatures.map((feature) => (
              <div
                key={feature.name}
                className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href={feature.href} className="group flex items-center text-primary">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom section-padding">
        <div className="bg-primary text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Power of Denning</h2>
            <p className="text-lg text-white/80 mb-8">
              Schedule a personalized demo to see how Denning can transform your legal practice in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
