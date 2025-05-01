import { Shield, Lock, Server, FileCheck, CheckCircle } from "lucide-react"

const securityFeatures = [
  {
    icon: <Shield className="h-8 w-8 text-blue-400" />,
    title: "GDPR Compliant",
    description:
      "Our platform adheres to global data protection standards, ensuring your client data is handled with care.",
  },
  {
    icon: <Lock className="h-8 w-8 text-blue-400" />,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
  },
  {
    icon: <Server className="h-8 w-8 text-blue-400" />,
    title: "Data Hosted in Kenya",
    description: "Your data stays in Kenya, ensuring compliance with local data sovereignty requirements.",
  },
  {
    icon: <FileCheck className="h-8 w-8 text-blue-400" />,
    title: "Regular Security Audits",
    description: "Our systems undergo regular security assessments by independent cybersecurity experts.",
  },
]

const SecuritySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-3">Security</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Security and Compliance</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We understand the sensitive nature of legal work. Your data security and client confidentiality are our top
            priorities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:shadow-blue-900/10"
            >
              <div className="bg-blue-900/10 rounded-xl p-4 inline-block mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Our Compliance Certifications</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Kenya Data Protection Act", "ISO 27001", "SOC 2 Type II", "GDPR"].map((cert, i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3" />
                  <span className="text-sm text-gray-300">{cert}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-900/20 rounded-xl">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-400 mr-3 mt-1" />
                <p className="text-gray-300 text-sm">
                  Denning employs a comprehensive security program that includes regular penetration testing,
                  vulnerability scanning, and security awareness training for all employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecuritySection
