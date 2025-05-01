"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, FileText, BarChart3, Scale } from "lucide-react"

const tabs = [
  {
    id: "research",
    label: "Legal Research",
    icon: <Search className="h-5 w-5" />,
  },
  {
    id: "drafting",
    label: "Document Drafting",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    id: "case",
    label: "Case Management",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    id: "compliance",
    label: "Compliance",
    icon: <Scale className="h-5 w-5" />,
  },
]

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("research")

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-3">Product</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">See Denning in Action</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our intuitive interfaces designed specifically for legal professionals.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`rounded-full px-6 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border-gray-700 text-gray-400 hover:bg-gray-900 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-center">
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </div>
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {/* Legal Research UI */}
          {activeTab === "research" && (
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 p-6">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-inner">
                {/* Top bar */}
                <div className="bg-gray-800 p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Search className="h-5 w-5 text-blue-400" />
                    <div className="h-8 w-64 bg-gray-700 rounded-md flex items-center px-3">
                      <span className="text-xs text-gray-400">Search Kenyan case law...</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      D
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex p-6 h-[500px]">
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
                      <BarChart3 className="h-4 w-4 mr-2" />
                      <span className="text-sm">Case Management</span>
                    </div>

                    <div className="bg-gray-800 text-gray-300 p-3 rounded-lg mb-3 flex items-center">
                      <Scale className="h-4 w-4 mr-2" />
                      <span className="text-sm">Compliance</span>
                    </div>

                    <div className="mt-6 p-3">
                      <h4 className="text-xs uppercase text-gray-500 mb-3">Recent Searches</h4>
                      {["Employment Act Kenya", "Landlord Tenant Law", "Contract Breach"].map((item, i) => (
                        <div key={i} className="text-sm text-gray-400 mb-2 hover:text-blue-400 cursor-pointer">
                          {item}
                        </div>
                      ))}
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

                        <div className="h-12 bg-blue-900/30 rounded-md w-full mt-6 flex items-center px-3">
                          <div className="w-1 h-full bg-blue-500 mr-3"></div>
                          <span className="text-blue-400 text-sm">Relevant case law reference</span>
                        </div>

                        {[1, 2].map((i) => (
                          <div key={i} className="h-6 bg-gray-700 rounded-md w-full"></div>
                        ))}
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
          )}

          {/* Document Drafting UI */}
          {activeTab === "drafting" && (
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 p-6">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-inner">
                {/* Top bar */}
                <div className="bg-gray-800 p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-5 w-5 text-blue-400" />
                    <div className="h-8 w-64 bg-gray-700 rounded-md flex items-center px-3">
                      <span className="text-xs text-gray-400">Lease Agreement.docx</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      D
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex p-6 h-[500px]">
                  {/* Document editor */}
                  <div className="w-2/3 bg-gray-800 rounded-lg p-4 mr-3 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-8 w-48 bg-gray-700 rounded-md flex items-center justify-center">
                        <span className="text-xs text-gray-400">Lease Agreement.docx</span>
                      </div>
                      <div className="flex space-x-2">
                        {["B", "I", "U"].map((text, i) => (
                          <div key={i} className="h-8 w-8 bg-gray-700 rounded-md flex items-center justify-center">
                            <span className="text-xs text-gray-400">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex-1 bg-white rounded-lg p-3">
                      <div className="h-8 w-full bg-gray-200 rounded-md mb-3 flex items-center px-3">
                        <span className="text-xs text-gray-600 font-bold">LEASE AGREEMENT</span>
                      </div>
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-4 w-full bg-gray-200 rounded-sm mb-2"></div>
                      ))}
                      <div className="h-4 w-2/3 bg-gray-200 rounded-sm mb-4"></div>

                      <div className="h-6 w-full bg-gray-200 rounded-md mb-2 flex items-center px-3">
                        <span className="text-xs text-gray-600 font-bold">1. PARTIES</span>
                      </div>

                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-4 w-full bg-gray-200 rounded-sm mb-2"></div>
                      ))}

                      <div className="h-4 w-1/2 bg-blue-200 rounded-sm mb-2 border border-blue-400"></div>

                      <div className="h-6 w-full bg-gray-200 rounded-md mb-2 flex items-center px-3 mt-4">
                        <span className="text-xs text-gray-600 font-bold">2. PREMISES</span>
                      </div>

                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-4 w-full bg-gray-200 rounded-sm mb-2"></div>
                      ))}
                    </div>
                  </div>

                  {/* AI Assistant */}
                  <div className="w-1/3 bg-gray-800 rounded-lg p-3 flex flex-col">
                    <div className="h-8 w-full bg-blue-600 rounded-md mb-3 flex items-center justify-center">
                      <span className="text-xs text-white">AI Assistant</span>
                    </div>

                    <div className="flex-1 bg-gray-900 rounded-lg p-3 flex flex-col">
                      <div className="bg-blue-900/30 rounded-lg p-3 mb-3">
                        <div className="text-xs text-blue-400 font-medium mb-2">Suggestion</div>
                        <div className="text-xs text-gray-300">
                          Consider adding a specific clause about property maintenance responsibilities according to
                          Kenyan Landlord and Tenant Law.
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-lg p-3 mb-3">
                        <div className="text-xs text-gray-400 font-medium mb-2">Legal Reference</div>
                        <div className="text-xs text-gray-300">
                          Rent Restriction Act (Cap. 296) of Kenya requires specific terms for residential properties.
                        </div>
                      </div>

                      <div className="bg-blue-900/30 rounded-lg p-3 mb-3">
                        <div className="text-xs text-blue-400 font-medium mb-2">Template Suggestion</div>
                        <div className="text-xs text-gray-300">
                          Use our Kenya-specific residential lease template to ensure compliance with local regulations.
                        </div>
                        <div className="mt-2 text-xs text-blue-400 cursor-pointer">Apply template →</div>
                      </div>

                      <div className="mt-auto">
                        <div className="h-8 w-full bg-gray-800 rounded-md flex items-center px-3">
                          <span className="text-xs text-gray-400">Ask AI for suggestions...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Case Management UI */}
          {activeTab === "case" && (
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 p-6">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-inner">
                {/* Top bar */}
                <div className="bg-gray-800 p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <BarChart3 className="h-5 w-5 text-blue-400" />
                    <div className="h-8 w-64 bg-gray-700 rounded-md flex items-center px-3">
                      <span className="text-xs text-gray-400">Case Dashboard</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      D
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="flex p-6 h-[500px]">
                  {/* Left sidebar */}
                  <div className="w-1/5 bg-gray-800 rounded-lg p-3 flex flex-col">
                    <div className="h-8 w-full bg-blue-600 rounded-md mb-3 flex items-center justify-center">
                      <span className="text-xs text-white">Dashboard</span>
                    </div>

                    {["Cases", "Calendar", "Documents", "Clients", "Billing", "Reports"].map((item, i) => (
                      <div
                        key={i}
                        className={`h-8 w-full ${i === 0 ? "bg-gray-700" : "bg-gray-800"} rounded-md mb-2 flex items-center px-3`}
                      >
                        <span className="text-xs text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 flex flex-col gap-3 pl-4">
                    {/* Stats row */}
                    <div className="flex gap-3 h-24">
                      {[
                        { label: "Active Cases", value: "24", color: "bg-blue-900/30" },
                        { label: "This Month", value: "8", color: "bg-purple-900/30" },
                        { label: "Pending", value: "12", color: "bg-amber-900/30" },
                        { label: "Completed", value: "156", color: "bg-green-900/30" },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className={`flex-1 ${stat.color} rounded-lg p-3 flex flex-col items-center justify-center`}
                        >
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-gray-300">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Cases table */}
                    <div className="flex-1 bg-gray-800 rounded-lg p-3 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-medium text-white">Recent Cases</div>
                        <div className="h-8 w-32 bg-gray-700 rounded-md flex items-center justify-center">
                          <span className="text-xs text-gray-400">Filter</span>
                        </div>
                      </div>

                      {/* Table header */}
                      <div className="flex bg-gray-900 rounded-t-lg p-2 mb-1">
                        <div className="w-1/4 text-xs text-gray-400">Case Name</div>
                        <div className="w-1/4 text-xs text-gray-400">Client</div>
                        <div className="w-1/4 text-xs text-gray-400">Due Date</div>
                        <div className="w-1/4 text-xs text-gray-400">Status</div>
                      </div>

                      {/* Table rows */}
                      {[
                        {
                          name: "Muthaiga Property Dispute",
                          client: "J. Kamau",
                          date: "May 15",
                          status: "Active",
                          color: "bg-blue-500",
                        },
                        {
                          name: "Westlands Contract Review",
                          client: "Nairobi Holdings",
                          date: "May 18",
                          status: "Review",
                          color: "bg-amber-500",
                        },
                        {
                          name: "Intellectual Property Case",
                          client: "Tech Innovations",
                          date: "May 20",
                          status: "Active",
                          color: "bg-blue-500",
                        },
                        {
                          name: "Employment Dispute",
                          client: "K. Ochieng",
                          date: "May 22",
                          status: "Pending",
                          color: "bg-purple-500",
                        },
                        {
                          name: "Corporate Restructuring",
                          client: "Savanna Corp",
                          date: "May 25",
                          status: "Active",
                          color: "bg-blue-500",
                        },
                      ].map((row, i) => (
                        <div key={i} className="flex bg-gray-900 p-2 mb-1 rounded-md">
                          <div className="w-1/4 text-xs text-white">{row.name}</div>
                          <div className="w-1/4 text-xs text-gray-300">{row.client}</div>
                          <div className="w-1/4 text-xs text-gray-300">{row.date}</div>
                          <div className="w-1/4 text-xs flex items-center">
                            <span className={`w-2 h-2 rounded-full ${row.color} mr-2`}></span>
                            <span className="text-gray-300">{row.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Compliance UI */}
          {activeTab === "compliance" && (
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 p-6">
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-inner">
                {/* Top bar */}
                <div className="bg-gray-800 p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Scale className="h-5 w-5 text-blue-400" />
                    <div className="h-8 w-64 bg-gray-700 rounded-md flex items-center px-3">
                      <span className="text-xs text-gray-400">Compliance Dashboard</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      D
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex p-6 h-[500px]">
                  {/* Left sidebar */}
                  <div className="w-1/5 bg-gray-800 rounded-lg p-3 flex flex-col">
                    <div className="h-8 w-full bg-blue-600 rounded-md mb-3 flex items-center justify-center">
                      <span className="text-xs text-white">Compliance</span>
                    </div>

                    {["Updates", "Regulations", "Checklists", "Alerts", "Reports"].map((item, i) => (
                      <div
                        key={i}
                        className={`h-8 w-full ${i === 0 ? "bg-gray-700" : "bg-gray-800"} rounded-md mb-2 flex items-center px-3`}
                      >
                        <span className="text-xs text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 flex flex-col gap-3 pl-4">
                    {/* Compliance status */}
                    <div className="bg-gray-800 rounded-lg p-4">
                      <h3 className="text-white font-medium mb-4">Compliance Status</h3>
                      <div className="flex gap-4">
                        <div className="flex-1 bg-green-900/20 rounded-lg p-3 flex items-center">
                          <div className="h-10 w-10 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Data Protection</div>
                            <div className="text-xs text-gray-400">Compliant with Kenya Data Protection Act</div>
                          </div>
                        </div>
                        <div className="flex-1 bg-amber-900/20 rounded-lg p-3 flex items-center">
                          <div className="h-10 w-10 rounded-full bg-amber-900/30 flex items-center justify-center text-amber-400 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">AML Compliance</div>
                            <div className="text-xs text-gray-400">2 action items require attention</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent updates */}
                    <div className="bg-gray-800 rounded-lg p-4 flex-1">
                      <h3 className="text-white font-medium mb-4">Recent Regulatory Updates</h3>
                      <div className="space-y-3">
                        {[
                          {
                            title: "Kenya Data Protection Act Amendment",
                            date: "May 10, 2023",
                            impact: "High",
                            color: "bg-red-500",
                          },
                          {
                            title: "Law Society of Kenya Practice Guidelines",
                            date: "April 28, 2023",
                            impact: "Medium",
                            color: "bg-amber-500",
                          },
                          {
                            title: "Anti-Money Laundering Reporting Requirements",
                            date: "April 15, 2023",
                            impact: "High",
                            color: "bg-red-500",
                          },
                          {
                            title: "Digital Signatures in Legal Documents",
                            date: "April 5, 2023",
                            impact: "Low",
                            color: "bg-green-500",
                          },
                        ].map((update, i) => (
                          <div key={i} className="bg-gray-900 rounded-lg p-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-white mb-1">{update.title}</div>
                                <div className="text-xs text-gray-400">{update.date}</div>
                              </div>
                              <div className="flex items-center">
                                <span className={`w-2 h-2 rounded-full ${update.color} mr-2`}></span>
                                <span className="text-xs text-gray-300">{update.impact} Impact</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
