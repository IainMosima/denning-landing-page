import { ArrowRight, BookOpen, FileText, BarChart3, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const FeatureShowcase = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-blue-400" />,
      title: "AI Legal Research",
      description:
        "Instantly search and analyze Kenyan case law, statutes, and legal documents with AI-powered insights.",
      link: "/features/ai-legal-research",
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-400" />,
      title: "Document Drafting",
      description: "Generate and customize legal documents with Kenya-specific templates and AI assistance.",
      link: "/features/document-drafting",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-blue-400" />,
      title: "Case Management",
      description:
        "Streamline your practice with integrated case tracking, deadline management, and client communication.",
      link: "/features/case-management",
    },
    {
      icon: <Scale className="h-10 w-10 text-blue-400" />,
      title: "Compliance Tools",
      description: "Stay up-to-date with Kenyan legal requirements and automatically check documents for compliance.",
      link: "/features/compliance-tools",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Powerful tools for modern legal practice</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Denning combines AI technology with Kenya-specific legal knowledge to transform how legal professionals
            work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:shadow-blue-900/10"
            >
              <div className="bg-blue-900/10 rounded-xl p-4 inline-block mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              <Button
                asChild
                variant="ghost"
                className="p-0 h-auto text-blue-400 hover:text-blue-300 hover:bg-transparent"
              >
                <Link href={feature.link} className="flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase
