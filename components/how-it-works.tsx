import { Search, Cpu, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: <Search className="h-10 w-10 text-blue-400" />,
    title: "Ask",
    description: "Search case law, draft a document, or manage a case using natural language or specific queries.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-blue-400" />,
    title: "Analyze",
    description: "Our AI reviews, suggests, and prepares content based on Kenyan legal context and best practices.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-blue-400" />,
    title: "Act",
    description: "Deliver results faster, file documents, or advise clients with confidence and precision.",
  },
]

const HowItWorks = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-3">Process</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How Denning Works</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A simple, powerful workflow designed for legal professionals.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 z-10 relative border-4 border-black">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600/20 rounded-full blur-xl opacity-70"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
