import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About Denning</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to transform legal practice in Kenya through innovative AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Denning was founded in 2022 by a team of legal professionals and technology experts who recognized the
              unique challenges faced by Kenyan legal practitioners.
            </p>
            <p className="text-muted-foreground mb-6">
              We saw that while AI was transforming legal practice globally, there was a lack of solutions specifically
              designed for the Kenyan legal context. Our team set out to build a platform that would address the
              specific needs of legal professionals in Kenya.
            </p>
            <p className="text-muted-foreground">
              Named after Lord Denning, one of history's most influential jurists known for his forward-thinking
              approach to law, our platform embodies the same spirit of innovation and excellence in the legal field.
            </p>
          </div>
          <div>
            <img
              src="/placeholder.svg?height=500&width=700&text=Denning+Founding+Team"
              alt="Denning founding team"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-muted/50 section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To empower Kenyan legal professionals with AI-driven tools that enhance efficiency, accuracy, and access
                to justice.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <p>Make legal research faster and more accurate</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <p>Streamline document creation and management</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <p>Reduce costs and increase access to legal services</p>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-6">
                To create a future where every legal professional in Kenya has access to world-class AI tools tailored
                to their specific needs and context.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <p>Become the leading legal technology provider in East Africa</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <p>Transform how legal services are delivered in Kenya</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <p>Contribute to a more efficient and accessible justice system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="container-custom section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Denning is built by a diverse team of legal experts, technologists, and business professionals committed to
            transforming legal practice in Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "David Mwangi",
              title: "CEO & Co-Founder",
              bio: "Former advocate with 15 years of experience in Kenyan courts. LLB from University of Nairobi.",
            },
            {
              name: "Sarah Ochieng",
              title: "CTO & Co-Founder",
              bio: "AI specialist with background in legal tech. MSc in Computer Science from MIT.",
            },
            {
              name: "James Kimani",
              title: "Chief Legal Officer",
              bio: "Former High Court judge with expertise in Kenyan constitutional law and legal research.",
            },
            {
              name: "Elizabeth Wanjiku",
              title: "Head of Product",
              bio: "Product leader with experience building legal tech solutions across Africa.",
            },
            {
              name: "Michael Otieno",
              title: "Head of AI Research",
              bio: "PhD in Machine Learning with focus on natural language processing for legal documents.",
            },
            {
              name: "Grace Njeri",
              title: "Customer Success Director",
              bio: "Former legal practice manager with expertise in legal operations and technology adoption.",
            },
          ].map((member, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-sm">
              <div className="h-32 w-32 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">{member.name.charAt(0)}</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.title}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full bg-muted/50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">These core principles guide everything we do at Denning.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with AI in the legal field.",
              },
              {
                title: "Integrity",
                description:
                  "We uphold the highest ethical standards in all our operations and technology development.",
              },
              {
                title: "Local Context",
                description:
                  "We build solutions specifically designed for the Kenyan legal system and its unique needs.",
              },
              {
                title: "Accessibility",
                description:
                  "We strive to make advanced legal technology accessible to all legal professionals in Kenya.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-sm text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="container-custom section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Partners</h2>
          <p className="text-lg text-muted-foreground">
            We collaborate with leading organizations in the legal and technology sectors to deliver the best solutions
            for Kenyan legal professionals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
            <div key={partner} className="bg-background rounded-xl p-6 shadow-sm flex items-center justify-center h-32">
              <div className="text-center">
                <div className="h-16 w-16 bg-muted rounded-md mx-auto flex items-center justify-center">
                  <span className="text-xl font-bold text-muted-foreground">P{partner}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Transforming Legal Practice in Kenya</h2>
            <p className="text-lg text-white/80 mb-8">
              Whether you're a legal professional looking to enhance your practice or interested in partnering with us,
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
