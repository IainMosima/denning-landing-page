import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Search,
  Clock,
  CheckCircle,
  ChevronRight,
  Filter,
  Download,
  Bookmark,
  Share2,
} from "lucide-react"

export default function AILegalResearchPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">AI-Powered Legal Research</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform how you research Kenyan law with our advanced AI technology that finds relevant cases, statutes,
              and legal resources in seconds.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Overview */}
      <section className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Revolutionize Your Legal Research</h2>
            <p className="text-muted-foreground mb-6">
              Denning's AI-powered legal research tool is specifically designed for Kenyan legal professionals. Our
              platform understands the nuances of Kenyan law and delivers precise, relevant results instantly.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Comprehensive Kenyan Legal Database</h4>
                  <p className="text-sm text-muted-foreground">
                    Access Kenya's most extensive collection of case law, statutes, and legal resources.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Natural Language Search</h4>
                  <p className="text-sm text-muted-foreground">
                    Ask questions in plain English and get precise legal answers specific to Kenyan law.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">AI-Generated Legal Summaries</h4>
                  <p className="text-sm text-muted-foreground">
                    Get concise summaries of complex legal documents and case law to save time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=700&text=AI+Legal+Research+Dashboard"
              alt="AI Legal Research Dashboard"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Save 70% of Research Time</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Find relevant Kenyan legal precedents in seconds, not hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Interface Showcase */}
      <section className="w-full bg-muted/30 section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">See Denning in Action</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Experience how Denning's intuitive interface makes legal research effortless for Kenyan legal professionals
          </p>

          <div className="bg-background rounded-xl shadow-lg overflow-hidden mb-16">
            <div className="border-b border-border p-4">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-sm text-muted-foreground">Denning Legal Research Platform</div>
              </div>
            </div>

            <div className="grid md:grid-cols-5 min-h-[600px]">
              {/* Sidebar */}
              <div className="md:col-span-1 border-r border-border p-4">
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Research History</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-primary">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>Employment Act Interpretation</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>Land Dispute Precedents</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>Contract Breach Cases</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Saved Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-muted-foreground">
                      <Bookmark className="h-4 w-4 mr-2" />
                      <span>Employment Act 2007</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Bookmark className="h-4 w-4 mr-2" />
                      <span>Civil Procedure Rules</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Bookmark className="h-4 w-4 mr-2" />
                      <span>Companies Act 2015</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-4 p-6">
                <div className="mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background"
                      placeholder="What are the requirements for terminating employment under Kenyan law?"
                      defaultValue="What are the requirements for terminating employment under Kenyan law?"
                    />
                    <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" size="sm">
                      Search
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm text-muted-foreground">Found 24 relevant results in 0.3 seconds</div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* AI Summary */}
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <h3 className="text-lg font-semibold mb-3">AI Summary</h3>
                    <p className="text-sm mb-4">
                      Under Kenyan law, specifically the Employment Act 2007, termination of employment requires:
                    </p>
                    <ul className="text-sm space-y-2 mb-4">
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Written notice or payment in lieu of notice (1 month for monthly contracts)</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Valid reason related to conduct, capacity, or operational requirements</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Fair procedure including opportunity for employee to defend themselves</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                        <span>Payment of all accrued benefits and entitlements</span>
                      </li>
                    </ul>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" className="mr-2">
                        <Download className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>

                  {/* Search Results */}
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors cursor-pointer">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-semibold">Employment Act 2007, Section 35-45</h4>
                        <span className="text-sm text-primary">Statute</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Comprehensive provisions on termination of employment contracts, including notice periods,
                        summary dismissal, and procedural requirements.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Last updated: 2023</span>
                        <Button variant="link" size="sm" className="h-auto p-0">
                          View full text
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections would continue here */}
    </div>
  )
}
