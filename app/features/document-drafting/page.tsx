import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  FileText,
  Clock,
  CheckCircle,
  ChevronRight,
  Save,
  Download,
  Check,
  X,
  AlertCircle,
  FileSearch,
} from "lucide-react"

export default function DocumentDraftingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Automated Document Drafting</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Generate legally sound documents tailored to Kenyan legal standards in minutes, not hours, with our
              AI-powered document drafting system.
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
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=700&text=Document+Drafting+Interface"
                alt="Document Drafting Interface"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Save 85% of Drafting Time</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Create Kenyan legal documents in minutes, not hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Create Perfect Legal Documents in Minutes</h2>
            <p className="text-muted-foreground mb-6">
              Denning's document drafting tool is specifically designed for Kenyan legal professionals. Our platform
              understands Kenyan legal standards and generates accurate, compliant documents instantly.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Kenyan Legal Templates</h4>
                  <p className="text-sm text-muted-foreground">
                    Access hundreds of templates tailored to Kenyan legal requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Automated Contract Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Create customized contracts with intelligent clause suggestions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Document Review and Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    AI-powered review to identify risks and ensure compliance.
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
          <h2 className="text-3xl font-bold mb-4 text-center">See Document Drafting in Action</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Experience how Denning's intuitive interface makes document creation effortless for Kenyan legal
            professionals
          </p>

          <div className="bg-background rounded-xl shadow-lg overflow-hidden mb-16">
            <div className="border-b border-border p-4">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-sm text-muted-foreground">Denning Document Drafting Platform</div>
              </div>
            </div>

            <div className="grid md:grid-cols-5 min-h-[600px]">
              {/* Sidebar */}
              <div className="md:col-span-1 border-r border-border p-4">
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Document Templates</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-primary">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Employment Contract</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Lease Agreement</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Sale of Goods Agreement</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Non-Disclosure Agreement</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Partnership Agreement</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Recent Documents</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-muted-foreground">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Kamau Employment Contract</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Nairobi Office Lease</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Tech Startup NDA</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-4 p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Employment Contract Generator</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Create a customized employment contract compliant with the Employment Act 2007 and Kenyan labor
                    laws.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Contract Details</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">Employer Name</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded-md border border-border bg-background"
                          defaultValue="ABC Company Limited"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">Employee Name</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded-md border border-border bg-background"
                          defaultValue="John Mwangi"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">Position/Title</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded-md border border-border bg-background"
                          defaultValue="Marketing Manager"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">Start Date</label>
                        <input
                          type="date"
                          className="w-full p-2 rounded-md border border-border bg-background"
                          defaultValue="2023-06-01"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3">Compensation & Terms</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">Salary (KES)</label>
                        <input
                          type="text"
                          className="w-full p-2 rounded-md border border-border bg-background"
                          defaultValue="120,000"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">Payment Frequency</label>
                        <select className="w-full p-2 rounded-md border border-border bg-background">
                          <option>Monthly</option>
                          <option>Bi-weekly</option>
                          <option>Weekly</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">Contract Type</label>
                        <select className="w-full p-2 rounded-md border border-border bg-background">
                          <option>Permanent</option>
                          <option>Fixed Term</option>
                          <option>Casual</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-1">Notice Period</label>
                        <select className="w-full p-2 rounded-md border border-border bg-background">
                          <option>1 Month</option>
                          <option>2 Months</option>
                          <option>3 Months</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-medium mb-3">Optional Clauses</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="probation" className="mr-2" defaultChecked />
                      <label htmlFor="probation" className="text-sm">
                        Probation Period (3 months)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="confidentiality" className="mr-2" defaultChecked />
                      <label htmlFor="confidentiality" className="text-sm">
                        Confidentiality Clause
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="noncompete" className="mr-2" />
                      <label htmlFor="noncompete" className="text-sm">
                        Non-Compete Clause
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="intellectual" className="mr-2" defaultChecked />
                      <label htmlFor="intellectual" className="text-sm">
                        Intellectual Property Rights
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="remote" className="mr-2" />
                      <label htmlFor="remote" className="text-sm">
                        Remote Work Provisions
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="benefits" className="mr-2" defaultChecked />
                      <label htmlFor="benefits" className="text-sm">
                        Benefits Package Details
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Button variant="outline">
                    <FileSearch className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <div>
                    <Button variant="outline" className="mr-2">
                      <Save className="h-4 w-4 mr-2" />
                      Save Draft
                    </Button>
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      Generate Document
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document Preview */}
          <div className="bg-background rounded-xl shadow-lg overflow-hidden">
            <div className="border-b border-border p-4">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-sm text-muted-foreground">Document Preview</div>
              </div>
            </div>

            <div className="p-8">
              <div className="max-w-3xl mx-auto bg-white p-8 shadow-sm rounded-md">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold uppercase">EMPLOYMENT CONTRACT</h3>
                  <p className="text-sm text-muted-foreground">Made pursuant to the Employment Act, 2007</p>
                </div>

                <div className="mb-6">
                  <p className="mb-4">
                    <span className="font-semibold">THIS AGREEMENT</span> is made on the 1st day of June, 2023
                  </p>

                  <p className="mb-4">
                    <span className="font-semibold">BETWEEN</span>
                  </p>

                  <p className="mb-4">
                    <span className="font-semibold">ABC COMPANY LIMITED</span>, a company incorporated in Kenya under
                    the Companies Act 2015 with its registered office at Nairobi (hereinafter referred to as "the
                    Employer")
                  </p>

                  <p className="mb-4">
                    <span className="font-semibold">AND</span>
                  </p>

                  <p className="mb-4">
                    <span className="font-semibold">JOHN MWANGI</span> of P.O. Box 12345-00100, Nairobi (hereinafter
                    referred to as "the Employee")
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-2">1. APPOINTMENT AND COMMENCEMENT</h4>
                  <p className="text-sm mb-2">
                    1.1 The Employer hereby employs the Employee and the Employee accepts employment as Marketing
                    Manager.
                  </p>
                  <p className="text-sm mb-2">
                    1.2 The employment shall commence on 1st June, 2023 and shall continue until terminated in
                    accordance with this Agreement.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-2">2. PROBATION</h4>
                  <p className="text-sm mb-2">
                    2.1 The Employee shall serve a probationary period of three (3) months from the commencement date.
                  </p>
                  <p className="text-sm mb-2">
                    2.2 During the probationary period, either party may terminate this Agreement by giving seven (7)
                    days' notice or payment in lieu of notice.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-2">3. REMUNERATION</h4>
                  <p className="text-sm mb-2">
                    3.1 The Employee shall be paid a gross monthly salary of Kenya Shillings One Hundred and Twenty
                    Thousand (KES 120,000).
                  </p>
                  <p className="text-sm mb-2">3.2 The salary shall be paid on or before the last day of each month.</p>
                </div>

                <div className="text-xs text-muted-foreground mt-8 text-center">
                  <p>Document preview - additional clauses and full contract will be generated upon completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container-custom section-padding">
        <h2 className="text-3xl font-bold mb-4 text-center">How Denning's Document Drafting Works</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Our AI-powered platform simplifies complex document creation into three easy steps
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm h-full border border-muted">
              <h3 className="text-xl font-semibold mb-4 mt-4">Select Your Template</h3>
              <p className="text-muted-foreground mb-4">
                Choose from hundreds of Kenyan legal templates, all drafted by experienced lawyers and compliant with
                current Kenyan law.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm">
                <p className="italic">Available template categories:</p>
                <ul className="mt-2 space-y-2">
                  <li>Employment contracts and HR documents</li>
                  <li>Commercial agreements and contracts</li>
                  <li>Property documents and leases</li>
                  <li>Corporate governance documents</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm h-full border border-muted">
              <h3 className="text-xl font-semibold mb-4 mt-4">Customize Your Document</h3>
              <p className="text-muted-foreground mb-4">
                Fill in your specific details and select optional clauses. Our AI suggests appropriate language and
                terms based on Kenyan legal practice.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm">
                <p className="italic">Customization features:</p>
                <ul className="mt-2 space-y-2">
                  <li>Smart forms with context-specific fields</li>
                  <li>AI-suggested clauses based on your inputs</li>
                  <li>Option to add firm branding and styling</li>
                  <li>Ability to save custom templates for future use</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm h-full border border-muted">
              <h3 className="text-xl font-semibold mb-4 mt-4">Generate & Review</h3>
              <p className="text-muted-foreground mb-4">
                Instantly generate your document in multiple formats. Our AI reviews it for legal issues and suggests
                improvements.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm">
                <p className="italic">Output features:</p>
                <ul className="mt-2 space-y-2">
                  <li>Export as Word, PDF, or editable formats</li>
                  <li>AI risk analysis and compliance check</li>
                  <li>Highlighting of potentially problematic clauses</li>
                  <li>Track changes for collaborative editing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Review Feature */}
      <section className="w-full bg-muted/30 section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">AI-Powered Document Review</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Ensure your documents are legally sound with our advanced AI review technology
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-background rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Document Risk Analysis</h3>

                <div className="space-y-4 mb-6">
                  <div className="p-3 rounded-md bg-yellow-50 border border-yellow-200">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800">Section 4.2: Non-Compete Clause</h4>
                        <p className="text-sm text-yellow-700">
                          The geographic scope of this non-compete clause may be too broad under Kenyan case law.
                          Consider limiting to specific counties.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-md bg-red-50 border border-red-200">
                    <div className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-red-800">Section 7.3: Termination Provisions</h4>
                        <p className="text-sm text-red-700">
                          This clause conflicts with the Employment Act 2007 requirements for notice periods. Minimum
                          one month notice is required.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-md bg-green-50 border border-green-200">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Section 5.1: Confidentiality Provisions</h4>
                        <p className="text-sm text-green-700">
                          This confidentiality clause is well-drafted and compliant with Kenyan law.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="text-sm text-muted-foreground">
                    3 issues found (1 critical, 1 warning, 1 compliant)
                  </div>
                  <Button variant="outline" size="sm">
                    View Full Report
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Ensure Legal Compliance</h3>
              <p className="text-muted-foreground mb-6">
                Our AI reviews your documents against current Kenyan laws, regulations, and case law to identify
                potential issues before they become problems.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Compliance Checking</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatically checks compliance with Kenyan statutes, including Employment Act, Companies Act, and
                      more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Risk Identification</h4>
                    <p className="text-sm text-muted-foreground">
                      Highlights potentially problematic clauses and suggests alternatives based on Kenyan legal
                      precedents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Language Improvement</h4>
                    <p className="text-sm text-muted-foreground">
                      Suggests clearer language and formatting to improve document readability and enforceability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="container-custom section-padding">
        <h2 className="text-3xl font-bold mb-4 text-center">Real-World Document Examples</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          See how Denning helps Kenyan legal professionals create various documents
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background rounded-xl overflow-hidden shadow-md">
            <div className="bg-primary/10 p-4 border-b border-primary/20">
              <h3 className="font-semibold">Example 1: Commercial Lease Agreement</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Client Needs:</h4>
                <p className="text-sm">
                  A commercial landlord in Nairobi needed a lease agreement for office space with specific provisions
                  for tenant improvements and service charges.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Denning Solution:</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Generated a commercial lease agreement compliant with Kenyan land laws</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Added custom clauses for tenant improvements and service charge calculations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Included specific provisions for Nairobi County regulations</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Time Saved:</h4>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Completed in 15 minutes vs. 3-4 hours manually</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl overflow-hidden shadow-md">
            <div className="bg-primary/10 p-4 border-b border-primary/20">
              <h3 className="font-semibold">Example 2: Shareholders' Agreement</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Client Needs:</h4>
                <p className="text-sm">
                  A tech startup in Nairobi needed a shareholders' agreement for three founders with different equity
                  stakes and vesting schedules.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Denning Solution:</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Generated a comprehensive shareholders' agreement under Kenyan Companies Act 2015</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Customized vesting schedules and equity provisions for each founder</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Added specific IP protection clauses for tech companies</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Time Saved:</h4>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">Completed in 25 minutes vs. 6-8 hours manually</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="w-full bg-muted/30 section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Document Types</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-xl p-6 shadow-sm border border-muted">
              <h3 className="text-xl font-semibold mb-4">Contracts & Agreements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Employment contracts</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Service agreements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Lease agreements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">NDAs and confidentiality agreements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Sales and purchase agreements</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm border border-muted">
              <h3 className="text-xl font-semibold mb-4">Court Documents</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Pleadings and motions</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Affidavits</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Witness statements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Legal opinions</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Settlement agreements</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm border border-muted">
              <h3 className="text-xl font-semibold mb-4">Corporate Documents</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Articles of association</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Board resolutions</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Shareholder agreements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Compliance policies</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Privacy notices</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm border border-muted">
              <h3 className="text-xl font-semibold mb-4">Property Documents</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Sale agreements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Lease agreements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Transfer documents</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Mortgage agreements</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm border border-muted">
              <h3 className="text-xl font-semibold mb-4">Estate Planning</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Wills</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Powers of attorney</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Trust documents</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Estate administration documents</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm border border-muted">
              <h3 className="text-xl font-semibold mb-4">Intellectual Property</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Trademark applications</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Copyright registrations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">IP licensing agreements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Patent applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container-custom section-padding">
        <div className="max-w-4xl mx-auto bg-background rounded-xl p-8 md:p-12 shadow-md">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                <span className="text-3xl font-bold">J</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg italic mb-6">
                "The document drafting feature has saved my firm countless hours. The templates are compliant with
                Kenyan legal standards, and the AI suggestions are remarkably helpful. What used to take us hours now
                takes minutes."
              </p>
              <div>
                <p className="font-semibold">James Odhiambo</p>
                <p className="text-sm text-muted-foreground">Managing Partner, Nairobi Legal Consultants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-muted/30 section-padding">
        <div className="container-custom">
          <div className="bg-primary text-white rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Document Drafting Today</h2>
              <p className="text-lg text-white/80 mb-8">
                Join hundreds of Kenyan legal professionals who are already experiencing the benefits of AI-powered
                document drafting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Start Drafting Documents Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
