import { Clock, DollarSign, CheckSquare, Shield } from "lucide-react"

const Benefits = () => {
  const benefits = [
    {
      title: "Save Valuable Time",
      description:
        "Reduce research and document drafting time by up to 70%, allowing you to focus on higher-value legal work.",
      icon: <Clock className="h-12 w-12 text-blue-400" />,
    },
    {
      title: "Reduce Costs",
      description:
        "Lower operational costs by streamlining workflows and minimizing the need for extensive support staff.",
      icon: <DollarSign className="h-12 w-12 text-blue-400" />,
    },
    {
      title: "Improve Accuracy",
      description: "Minimize human error with AI-powered document generation and comprehensive legal research.",
      icon: <CheckSquare className="h-12 w-12 text-blue-400" />,
    },
    {
      title: "Ensure Compliance",
      description: "Stay up-to-date with the latest Kenyan legal requirements and standards automatically.",
      icon: <Shield className="h-12 w-12 text-blue-400" />,
    },
  ]

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Benefits for Your Practice</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Denning delivers measurable outcomes that transform how legal professionals work in Kenya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-900/20 rounded-full p-6 inline-flex mb-6 mx-auto">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Trusted by Legal Professionals Across Kenya</h3>
          <p className="text-lg text-gray-300 mb-6">
            Join hundreds of law firms, corporate legal departments, and individual practitioners who trust Denning
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits
