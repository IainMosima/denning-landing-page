import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

const benefits = [
  "Exclusive updates and early feature access",
  "Direct influence on platform roadmap",
  "Premium support and onboarding",
  "Locked-in preferential pricing",
]

const EarlyAdopters = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-amber-400 fill-amber-400 mr-2" />
                <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">Early Adopters Program</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Be Part of the Future of Legal Tech in Kenya
              </h2>

              <p className="text-gray-300 mb-8 text-lg">
                Join Denning at the ground floor and help shape the future of legal technology in Kenya. As an early
                adopter, you'll get exclusive benefits and the opportunity to influence our roadmap.
              </p>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mr-3 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-14 text-base font-medium"
              >
                <Link href="/contact">
                  Join Early Adopters <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="md:w-1/3 flex flex-col items-center">
              <div className="bg-blue-900/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-white mb-2">50+</div>
                <p className="text-gray-400">Kenyan legal professionals already registered</p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {["Law Firms", "Corporate Counsel", "Judiciary", "Academia"].map((category, index) => (
                  <div key={index} className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EarlyAdopters
