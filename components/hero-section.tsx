"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Pause, Play, Volume2, VolumeX } from "lucide-react"

const HeroSection = () => {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  // Auto-advance screens to simulate video
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % 4)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-black to-black"></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Legal intelligence.
            </span>
            <br />
            Reimagined.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            The AI-powered platform designed specifically for legal professionals in Kenya.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-16">
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
              <Link href="/features">Explore Features</Link>
            </Button>
          </div>
        </div>

        {/* Animated Dashboard Video */}
        <div className="relative max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 bg-gradient-to-b from-gray-800 to-gray-900 p-8 pt-6">
            {/* MacBook frame */}
            <div className="relative rounded-lg overflow-hidden border-8 border-gray-800 bg-gray-900 aspect-[16/10] shadow-inner">
              {/* Video controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
                >
                  {isPaused ? <Play size={16} /> : <Pause size={16} />}
                </button>

                <div className="w-32 h-1 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-300"
                    style={{ width: `${(currentScreen / 3) * 100}%` }}
                  ></div>
                </div>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>

              {/* Screen content - Dashboard screens that rotate */}
              <div className="absolute inset-0">
                {/* Legal Research Dashboard */}
                <div
                  className={`absolute inset-0 p-4 flex flex-col transition-opacity duration-1000 ${
                    currentScreen === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-6 w-40 bg-gray-800 rounded-md flex items-center justify-center">
                      <span className="text-xs text-gray-400">Legal Research</span>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex flex-1">
                    {/* Sidebar */}
                    <div className="w-1/4 bg-gray-800 rounded-lg p-3 mr-3">
                      <div className="h-8 w-full bg-blue-600 rounded-md mb-3 flex items-center justify-center">
                        <span className="text-xs text-white">Case Library</span>
                      </div>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-6 w-full bg-gray-700 rounded-md mb-2 flex items-center px-2">
                          <span className="text-xs text-gray-400">Case #{i}</span>
                        </div>
                      ))}
                    </div>

                    {/* Main area */}
                    <div className="flex-1 bg-gray-800 rounded-lg p-4 flex flex-col">
                      <div className="h-8 w-3/4 bg-gray-700 rounded-md mb-4 flex items-center px-3">
                        <span className="text-xs text-gray-400">Kenyan Constitutional Law Analysis</span>
                      </div>
                      <div className="flex-1 bg-gray-900 rounded-lg p-3">
                        <div className="h-6 w-full bg-gray-800 rounded-md mb-2"></div>
                        <div className="h-6 w-5/6 bg-gray-800 rounded-md mb-2"></div>
                        <div className="h-6 w-full bg-gray-800 rounded-md mb-2"></div>
                        <div className="h-6 w-4/6 bg-gray-800 rounded-md mb-4"></div>

                        <div className="h-24 w-full bg-blue-900/30 rounded-md mb-4 flex items-center justify-center">
                          <div className="text-blue-400 font-semibold">AI Legal Analysis</div>
                        </div>

                        <div className="h-6 w-full bg-gray-800 rounded-md mb-2"></div>
                        <div className="h-6 w-3/4 bg-gray-800 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document Drafting Dashboard */}
                <div
                  className={`absolute inset-0 p-4 flex flex-col transition-opacity duration-1000 ${
                    currentScreen === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-6 w-40 bg-gray-800 rounded-md flex items-center justify-center">
                      <span className="text-xs text-gray-400">Document Drafting</span>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex flex-1">
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
                      </div>
                    </div>

                    {/* AI Assistant */}
                    <div className="w-1/3 bg-gray-800 rounded-lg p-3 flex flex-col">
                      <div className="h-8 w-full bg-blue-600 rounded-md mb-3 flex items-center justify-center">
                        <span className="text-xs text-white">AI Assistant</span>
                      </div>

                      <div className="flex-1 bg-gray-900 rounded-lg p-3 flex flex-col">
                        <div className="bg-blue-900/30 rounded-lg p-3 mb-3">
                          <div className="h-4 w-full bg-blue-800/50 rounded-sm mb-2"></div>
                          <div className="h-4 w-5/6 bg-blue-800/50 rounded-sm mb-2"></div>
                          <div className="h-4 w-full bg-blue-800/50 rounded-sm"></div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-3 mb-3">
                          <div className="h-4 w-full bg-gray-700 rounded-sm mb-2"></div>
                          <div className="h-4 w-3/4 bg-gray-700 rounded-sm"></div>
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

                {/* Case Management Dashboard */}
                <div
                  className={`absolute inset-0 p-4 flex flex-col transition-opacity duration-1000 ${
                    currentScreen === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-6 w-40 bg-gray-800 rounded-md flex items-center justify-center">
                      <span className="text-xs text-gray-400">Case Management</span>
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="flex flex-1 gap-3">
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
                    <div className="flex-1 flex flex-col gap-3">
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

                {/* Analytics Dashboard */}
                <div
                  className={`absolute inset-0 p-4 flex flex-col transition-opacity duration-1000 ${
                    currentScreen === 3 ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-6 w-40 bg-gray-800 rounded-md flex items-center justify-center">
                      <span className="text-xs text-gray-400">Analytics</span>
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="flex flex-1 gap-3">
                    {/* Main content */}
                    <div className="flex-1 flex flex-col gap-3">
                      {/* Header */}
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-medium text-white">Performance Overview</div>
                        <div className="flex gap-2">
                          {["Week", "Month", "Quarter", "Year"].map((period, i) => (
                            <div
                              key={i}
                              className={`px-3 py-1 rounded-md text-xs ${i === 2 ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"}`}
                            >
                              {period}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Charts row */}
                      <div className="flex gap-3 h-64">
                        {/* Line chart */}
                        <div className="w-2/3 bg-gray-800 rounded-lg p-4 flex flex-col">
                          <div className="text-sm font-medium text-white mb-2">Case Efficiency</div>
                          <div className="flex-1 relative">
                            {/* Y-axis */}
                            <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between items-end pr-2">
                              <span className="text-xs text-gray-500">100%</span>
                              <span className="text-xs text-gray-500">75%</span>
                              <span className="text-xs text-gray-500">50%</span>
                              <span className="text-xs text-gray-500">25%</span>
                              <span className="text-xs text-gray-500">0%</span>
                            </div>

                            {/* Chart area */}
                            <div className="absolute left-10 right-0 top-0 bottom-0">
                              {/* Grid lines */}
                              {[0, 1, 2, 3, 4].map((i) => (
                                <div
                                  key={i}
                                  className="absolute left-0 right-0 h-px bg-gray-700"
                                  style={{ top: `${i * 25}%` }}
                                ></div>
                              ))}

                              {/* Line chart */}
                              <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path
                                  d="M0,70 L20,60 L40,40 L60,30 L80,20 L100,10"
                                  fill="none"
                                  stroke="#3b82f6"
                                  strokeWidth="2"
                                />
                                <path
                                  d="M0,70 L20,60 L40,40 L60,30 L80,20 L100,10 L100,100 L0,100 Z"
                                  fill="rgba(59, 130, 246, 0.1)"
                                />
                              </svg>

                              {/* X-axis labels */}
                              <div className="absolute left-0 right-0 bottom-0 flex justify-between">
                                {["Apr", "May", "Jun", "Jul", "Aug", "Sep"].map((month, i) => (
                                  <span key={i} className="text-xs text-gray-500">
                                    {month}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Donut chart */}
                        <div className="w-1/3 bg-gray-800 rounded-lg p-4 flex flex-col">
                          <div className="text-sm font-medium text-white mb-2">Case Types</div>
                          <div className="flex-1 flex items-center justify-center">
                            <div className="relative w-32 h-32">
                              {/* Donut segments */}
                              <svg viewBox="0 0 100 100">
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  fill="transparent"
                                  stroke="#3b82f6"
                                  strokeWidth="20"
                                  strokeDasharray="75 25"
                                  strokeDashoffset="0"
                                />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  fill="transparent"
                                  stroke="#8b5cf6"
                                  strokeWidth="20"
                                  strokeDasharray="50 50"
                                  strokeDashoffset="-75"
                                />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  fill="transparent"
                                  stroke="#ec4899"
                                  strokeWidth="20"
                                  strokeDasharray="35 65"
                                  strokeDashoffset="-125"
                                />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  fill="transparent"
                                  stroke="#f59e0b"
                                  strokeWidth="20"
                                  strokeDasharray="15 85"
                                  strokeDashoffset="-160"
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-white">175</div>
                                  <div className="text-xs text-gray-400">Total Cases</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Legend */}
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            {[
                              { color: "bg-blue-500", label: "Corporate" },
                              { color: "bg-purple-500", label: "Property" },
                              { color: "bg-pink-500", label: "Family" },
                              { color: "bg-amber-500", label: "Criminal" },
                            ].map((item, i) => (
                              <div key={i} className="flex items-center">
                                <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                                <span className="text-xs text-gray-400">{item.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom row */}
                      <div className="flex gap-3 h-32">
                        {/* AI Insights */}
                        <div className="w-1/2 bg-blue-900/20 rounded-lg p-4 flex flex-col">
                          <div className="text-sm font-medium text-blue-400 mb-2">AI Insights</div>
                          <div className="flex-1 flex items-center">
                            <div className="text-sm text-gray-300">
                              Your case resolution time has improved by{" "}
                              <span className="text-blue-400 font-medium">28%</span> this quarter. Consider allocating
                              more resources to property disputes which have increased by{" "}
                              <span className="text-blue-400 font-medium">15%</span>.
                            </div>
                          </div>
                        </div>

                        {/* Upcoming deadlines */}
                        <div className="w-1/2 bg-gray-800 rounded-lg p-4 flex flex-col">
                          <div className="text-sm font-medium text-white mb-2">Upcoming Deadlines</div>
                          <div className="flex-1 flex flex-col justify-between">
                            {[
                              { date: "May 15", task: "File Motion - Muthaiga Case", urgent: true },
                              { date: "May 18", task: "Client Meeting - Nairobi Holdings", urgent: false },
                              { date: "May 20", task: "Court Appearance - Tech Innovations", urgent: true },
                            ].map((item, i) => (
                              <div key={i} className="flex items-center">
                                <div className="w-16 text-xs text-gray-400">{item.date}</div>
                                <div className="flex-1 text-xs text-white">{item.task}</div>
                                {item.urgent && (
                                  <div className="px-2 py-0.5 bg-red-900/30 rounded text-xs text-red-400">Urgent</div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MacBook base */}
            <div className="h-4 bg-gray-800 rounded-b-xl mx-auto w-3/5 mt-1"></div>
          </div>

          {/* Floating badges */}
          <div className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg">
            <p className="font-medium">Trusted by leading law firms in Kenya</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
