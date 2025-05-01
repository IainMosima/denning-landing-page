import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to transform your legal practice?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join leading Kenyan law firms already using Denning to streamline their work, reduce costs, and deliver
            better results for their clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-14 text-base font-medium"
            >
              <Link href="/contact">
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-700 text-white hover:bg-gray-900 rounded-full px-8 h-14 text-base font-medium"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
