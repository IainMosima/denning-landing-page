import { CheckCircle, AlertTriangle } from "lucide-react"

const ProblemSolution = () => {
  const problems = [
    {
      title: "Time-Consuming Research",
      description: "Hours spent sifting through case law and statutes to find relevant precedents.",
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Document Drafting Inefficiency",
      description: "Repetitive drafting of similar legal documents with high risk of errors.",
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
    },
    {
      title: "Limited Access to Resources",
      description: "Difficulty accessing comprehensive Kenyan legal databases and resources.",
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" />,
    },
  ]

  const solutions = [
    {
      title: "AI-Powered Legal Research",
      description: "Instantly find relevant Kenyan case law, statutes, and legal precedents.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Automated Document Generation",
      description: "Create accurate legal documents in minutes, tailored to Kenyan legal standards.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    },
    {
      title: "Comprehensive Legal Database",
      description: "Access the most extensive collection of Kenyan legal resources in one platform.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    },
  ]

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transforming Legal Practice in Kenya</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Denning addresses the unique challenges faced by legal professionals in Kenya with innovative AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Problems */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-amber-900/30 p-2 rounded-full mr-3">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
              </span>
              Challenges Faced
            </h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{problem.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{problem.title}</h4>
                    <p className="text-gray-300">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-blue-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="bg-green-900/30 p-2 rounded-full mr-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </span>
              Denning Solutions
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{solution.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-100 mb-1">{solution.title}</h4>
                    <p className="text-gray-300">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
