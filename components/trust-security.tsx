import { Card, CardContent } from "@/components/ui/card"
import { Lock, Shield, Server, FileCheck } from "lucide-react"

const trustFeatures = [
  {
    title: "End-to-End Encryption",
    description: "All your legal documents and client information are protected with enterprise-grade encryption.",
    icon: Lock,
  },
  {
    title: "Data Protection Compliance",
    description: "Fully compliant with Kenya's Data Protection Act and international security standards.",
    icon: Shield,
  },
  {
    title: "Secure Cloud Infrastructure",
    description: "Hosted on secure, redundant servers with 99.9% uptime guarantee.",
    icon: Server,
  },
  {
    title: "Regular Security Audits",
    description: "Our systems undergo regular security assessments by independent cybersecurity experts.",
    icon: FileCheck,
  },
]

export default function TrustSecurity() {
  return (
    <section className="container-custom section-padding bg-gray-950">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="mb-4 text-white">Trust & Security</h2>
        <p className="text-lg text-gray-400">
          We understand the sensitive nature of legal work. Your data security and client confidentiality are our top
          priorities.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustFeatures.map((feature, index) => (
          <Card key={index} className="border-none shadow-sm bg-gray-800">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 flex flex-col md:flex-row gap-8 items-center bg-gray-800 rounded-xl p-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-white">Your Client's Confidentiality is Our Priority</h3>
          <p className="text-gray-400 mb-6">
            As legal professionals, you handle sensitive client information daily. Denning is built from the ground up
            with security and confidentiality as core principles.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center bg-gray-900 rounded-full px-4 py-2">
              <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-300">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center bg-gray-900 rounded-full px-4 py-2">
              <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-300">GDPR Compliant</span>
            </div>
            <div className="flex items-center bg-gray-900 rounded-full px-4 py-2">
              <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-300">Kenya DPA Compliant</span>
            </div>
            <div className="flex items-center bg-gray-900 rounded-full px-4 py-2">
              <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-300">SOC 2 Type II</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/placeholder.svg?height=400&width=600&text=Security+Infrastructure"
            alt="Denning Security Infrastructure"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
