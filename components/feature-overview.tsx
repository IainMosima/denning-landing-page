import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, FileText, BarChart3, Briefcase } from "lucide-react"

const FeatureOverview = () => {
  const features = [
    {
      title: "AI Legal Research",
      description:
        "Intelligent search across Kenyan case law, statutes, and legal documents with contextual understanding.",
      icon: <Search className="h-10 w-10 text-blue-400" />,
      link: "/features/ai-legal-research",
    },
    {
      title: "Document Drafting",
      description:
        "Automated generation of contracts, pleadings, and legal documents tailored to Kenyan legal standards.",
      icon: <FileText className="h-10 w-10 text-blue-400" />,
      link: "/features/document-drafting",
    },
    {
      title: "Case Management",
      description: "Organize client files, case timelines, and tasks in one secure, accessible platform.",
      icon: <Briefcase className="h-10 w-10 text-blue-400" />,
      link: "/features/case-management",
    },
    {
      title: "Legal Analytics",
      description: "Predict case outcomes and identify legal trends based on historical Kenyan court data.",
      icon: <BarChart3 className="h-10 w-10 text-blue-400" />,
      link: "/features/legal-analytics",
    },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful tools designed specifically for the Kenyan legal context
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
            >
              <div className="bg-blue-900/20 p-4 rounded-full w-fit mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{feature.description}</p>
              <Button
                asChild
                variant="outline"
                className="mt-auto w-full border-blue-400 text-blue-400 hover:bg-gray-700"
              >
                <Link href={feature.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/features">View All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeatureOverview
