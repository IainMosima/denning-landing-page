import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Search, Scale, Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react"

const ProductGallery = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-3">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Beautifully designed. <br />
            Incredibly powerful.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Denning combines elegant design with powerful AI capabilities
          </p>
        </div>

        {/* Main product showcase - Legal Research UI */}
        <div className="mb-24">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-gradient-to-b from-gray-800 to-gray-900 p-8">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-inner">
              {/* Top bar */}
              <div className="bg-gray-800 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Search className="h-5 w-5 text-blue-400" />
                  <div className="h-8 w-64 bg-gray-700 rounded-md"></div>
                </div>
                <div className="flex space-x-3">
                  <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    D
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex p-6 h-[400px]">
                {/* Left sidebar */}
                <div className="w-1/5 pr-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg mb-4 flex items-center">
                    <Search className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Legal Research</span>
                  </div>

                  <div className="bg-gray-800 text-gray-300 p-3 rounded-lg mb-3 flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    <span className="text-sm">Document Drafting</span>
                  </div>

                  <div className="bg-gray-800 text-gray-300 p-3 rounded-lg mb-3 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Case Management</span>
                  </div>

                  <div className="bg-gray-800 text-gray-300 p-3 rounded-lg mb-3 flex items-center">
                    <Scale className="h-4 w-4 mr-2" />
                    <span className="text-sm">Compliance</span>
                  </div>
                </div>

                {/* Main content area */}
                <div className="w-2/5 px-4">
                  <div className="bg-gray-800 p-4 rounded-lg h-full">
                    <h3 className="text-white font-medium mb-4">Kenya Employment Act Analysis</h3>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-6 bg-gray-700 rounded-md w-full"></div>
                      ))}
                      <div className="h-6 bg-gray-700 rounded-md w-4/5"></div>

                      <div className="h-12 bg-blue-900/30 rounded-md w-full mt-6 flex items-center px-3">
                        <div className="w-1 h-full bg-blue-500 mr-3"></div>
                        <span className="text-blue-400 text-sm">Key provision highlighted by AI</span>
                      </div>

                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-6 bg-gray-700 rounded-md w-full"></div>
                      ))}
                      <div className="h-6 bg-gray-700 rounded-md w-3/5"></div>
                    </div>
                  </div>
                </div>

                {/* Right sidebar - AI analysis */}
                <div className="w-2/5 pl-4">
                  <div className="bg-gray-800 p-4 rounded-lg h-full">
                    <h3 className="text-white font-medium mb-4">AI Analysis</h3>

                    <div className="bg-blue-900/20 p-3 rounded-lg mb-4">
                      <h4 className="text-blue-400 text-sm font-medium mb-2">Key Findings</h4>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-700 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-700 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-700 rounded-md w-4/5"></div>
                      </div>
                    </div>

                    <div className="bg-gray-900 p-3 rounded-lg mb-4">
                      <h4 className="text-gray-300 text-sm font-medium mb-2">Related Cases</h4>
                      <div className="space-y-3">
                        <div className="h-10 bg-gray-800 rounded-md w-full"></div>
                        <div className="h-10 bg-gray-800 rounded-md w-full"></div>
                        <div className="h-10 bg-gray-800 rounded-md w-full"></div>
                      </div>
                    </div>

                    <div className="bg-gray-900 p-3 rounded-lg">
                      <h4 className="text-gray-300 text-sm font-medium mb-2">Suggested Actions</h4>
                      <div className="space-y-3">
                        <div className="h-8 bg-gray-800 rounded-md w-full"></div>
                        <div className="h-8 bg-gray-800 rounded-md w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary features grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Document Drafting UI */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-6">
              <div className="bg-gray-900 rounded-xl p-4 shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white font-medium">Lease Agreement</h3>
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 bg-gray-800 rounded-md flex items-center justify-center">
                      <FileText className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="w-2/3">
                    <div className="bg-gray-800 p-3 rounded-lg h-[200px]">
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <div key={i} className="h-4 bg-gray-700 rounded-md w-full"></div>
                        ))}
                        <div className="h-4 bg-gray-700 rounded-md w-4/5"></div>
                        <div className="h-4 bg-blue-900/30 rounded-md w-full"></div>
                        {[1, 2].map((i) => (
                          <div key={i} className="h-4 bg-gray-700 rounded-md w-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="w-1/3">
                    <div className="bg-blue-900/20 p-3 rounded-lg h-[200px]">
                      <h4 className="text-blue-400 text-xs font-medium mb-3">AI Suggestions</h4>
                      <div className="space-y-3">
                        <div className="h-16 bg-gray-800 rounded-md w-full"></div>
                        <div className="h-16 bg-gray-800 rounded-md w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">Document Drafting</h3>
              <p className="text-gray-400 mb-4">Create flawless legal documents in minutes with AI assistance</p>
              <Button asChild variant="link" className="text-blue-400 p-0">
                <Link href="/features/document-drafting">Learn more →</Link>
              </Button>
            </div>
          </div>

          {/* Case Management UI */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-6">
              <div className="bg-gray-900 rounded-xl p-4 shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white font-medium">Case Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 bg-gray-800 rounded-md flex items-center justify-center">
                      <Clock className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="h-8 w-8 bg-gray-800 rounded-md flex items-center justify-center">
                      <AlertCircle className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-blue-900/20 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400">Active Cases</span>
                      <span className="text-lg font-bold text-blue-400">12</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400">Pending Review</span>
                      <span className="text-lg font-bold text-gray-300">5</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-gray-500 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-3 h-[150px]">
                  <h4 className="text-gray-300 text-xs font-medium mb-3">Recent Cases</h4>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 bg-blue-900/20 rounded-md">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-xs text-gray-300">Mwangi v. Kenya Power</span>
                      <span className="text-xs text-blue-400 ml-auto">Active</span>
                    </div>

                    <div className="flex items-center p-2 bg-gray-700 rounded-md">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                      <span className="text-xs text-gray-300">Odhiambo Estate Dispute</span>
                      <span className="text-xs text-amber-400 ml-auto">Pending</span>
                    </div>

                    <div className="flex items-center p-2 bg-gray-700 rounded-md">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-xs text-gray-300">Nairobi Heights Development</span>
                      <span className="text-xs text-red-400 ml-auto">Urgent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">Case Management</h3>
              <p className="text-gray-400 mb-4">Organize and track all your cases in one intuitive interface</p>
              <Button asChild variant="link" className="text-blue-400 p-0">
                <Link href="/features/case-management">Learn more →</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Clients section */}
        <div className="text-center mt-24">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-3">Trusted By</p>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-12">
            Leading legal institutions across Kenya
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-6 bg-gray-900/30 rounded-2xl">
              <div className="flex items-center">
                <Scale className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-lg font-semibold text-white">Law Society of Kenya</span>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-900/30 rounded-2xl">
              <div className="flex items-center">
                <Scale className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-lg font-semibold text-white">Kenyan Judiciary</span>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-900/30 rounded-2xl">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-lg font-semibold text-white">Corporate Legal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductGallery
