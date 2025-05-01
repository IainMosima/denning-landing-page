import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "Denning has revolutionized how I conduct legal research. What used to take hours now takes minutes, and the accuracy is impressive. It's specifically tailored for Kenyan law, which makes all the difference.",
    author: "Sarah Mwangi",
    title: "Senior Partner, Mwangi & Associates",
    rating: 5,
  },
  {
    content:
      "The document drafting feature has saved my firm countless hours. The templates are compliant with Kenyan legal standards, and the AI suggestions are remarkably helpful.",
    author: "James Odhiambo",
    title: "Managing Partner, Nairobi Legal Consultants",
    rating: 5,
  },
  {
    content:
      "As a judge, I appreciate how Denning helps me quickly review case precedents specific to Kenyan law. The platform is intuitive and the search functionality is exceptional.",
    author: "Hon. Elizabeth Wanjiku",
    title: "High Court Judge, Nairobi",
    rating: 5,
  },
  {
    content:
      "The customer support team at Denning understands the unique challenges of legal practice in Kenya. They've been responsive and helpful throughout our onboarding process.",
    author: "Daniel Kimani",
    title: "Legal Director, Corporate Law Department",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gray-900">
      <div className="container-custom section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-white">What Legal Professionals Say</h2>
          <p className="text-lg text-gray-400">
            Hear from Kenyan legal professionals who have transformed their practice with Denning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm bg-gray-800">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-white mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mr-4">
                    <span className="font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Featured Case Study</h3>
              <p className="text-gray-400 mb-6">
                Learn how one of Kenya's leading law firms increased productivity by 60% and expanded their client base
                using Denning's AI-powered platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mr-4">
                    <span className="font-bold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Muthaiga Law Associates</p>
                    <p className="text-sm text-gray-400">Full-service law firm in Nairobi</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-2xl font-bold text-blue-400">60%</p>
                    <p className="text-xs text-gray-400">Productivity Increase</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-400">40%</p>
                    <p className="text-xs text-gray-400">Cost Reduction</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-400">35%</p>
                    <p className="text-xs text-gray-400">Client Growth</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" asChild className="mt-6 border-blue-400 text-blue-400 hover:bg-gray-700">
                <Link href="/case-studies">Read Full Case Study</Link>
              </Button>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600&text=Muthaiga+Law+Associates+Case+Study"
                alt="Muthaiga Law Associates Case Study"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
