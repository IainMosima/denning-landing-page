import { BookOpen, ShieldCheck, Clock, Lock } from "lucide-react"

const reasons = [
  {
    icon: <BookOpen className="h-10 w-10 text-blue-400" />,
    title: "Built for Kenyan Law",
    description:
      "100% localized case library, compliance updates, and document templates tailored to Kenyan legal practice.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-400" />,
    title: "AI You Can Trust",
    description:
      "Transparent, explainable AI built specifically for legal workflows with clear reasoning behind every suggestion.",
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-400" />,
    title: "Save Time, Increase Billables",
    description:
      "Complete research and drafting tasks in minutes, not hours. Focus on high-value client work instead of routine tasks.",
  },
  {
    icon: <Lock className="h-10 w-10 text-blue-400" />,
    title: "Secure by Design",
    description: "Enterprise-grade encryption and compliance from day one. Your client data never leaves your control.",
  },
]

const WhyDenning = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-3">Why Denning?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Leading Law Firms Choose Denning</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Designed specifically for Kenyan legal professionals, Denning delivers value from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:shadow-blue-900/10 hover:translate-y-[-4px]"
            >
              <div className="bg-blue-900/10 rounded-xl p-4 inline-block mb-6">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyDenning
