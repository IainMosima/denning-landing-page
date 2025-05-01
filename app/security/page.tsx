import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Security & Compliance</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We understand the sensitive nature of legal work. Your data security and client confidentiality are our
              top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Your Client's Confidentiality is Our Priority</h2>
            <p className="text-muted-foreground mb-6">
              As legal professionals, you handle sensitive client information daily. Denning is built from the ground up
              with security and confidentiality as core principles.
            </p>
            <p className="text-muted-foreground mb-6">
              Our platform adheres to the highest security standards and is fully compliant with Kenya's Data Protection
              Act and international security frameworks.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-muted rounded-full px-4 py-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <span className="text-sm">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center bg-muted rounded-full px-4 py-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <span className="text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center bg-muted rounded-full px-4 py-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <span className="text-sm">Kenya DPA Compliant</span>
              </div>
              <div className="flex items-center bg-muted rounded-full px-4 py-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <span className="text-sm">SOC 2 Type II</span>
              </div>
            </div>
            <Button asChild>
              <Link href="/security/whitepaper">
                Download Security Whitepaper <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div>
            <img
              src="/placeholder.svg?height=500&width=700&text=Denning+Security+Infrastructure"
              alt="Denning Security Infrastructure"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Additional sections would continue here */}
    </div>
  )
}
