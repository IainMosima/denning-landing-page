import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Calendar,
  FileText,
  Bell,
  BarChart,
  Folder,
  Search,
  Plus,
  MessageSquare,
  ClipboardList,
  ChevronRight,
} from "lucide-react"

export default function CaseManagementPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Case Management System</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Streamline your legal practice with our comprehensive case management system designed specifically for
              Kenyan legal professionals.
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
            <h2 className="text-3xl font-bold mb-6">Organize Your Practice Efficiently</h2>
            <p className="text-muted-foreground mb-6">
              Denning's case management system helps Kenyan legal professionals organize client files, track cases,
              manage deadlines, and collaborate with team members—all in one secure platform.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Centralized Case Files</h4>
                  <p className="text-sm text-muted-foreground">
                    Store all case documents, notes, and communications in one secure location.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Deadline Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Never miss a court date or filing deadline with automated reminders.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Team Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    Securely collaborate with colleagues and assign tasks within cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=500&width=700&text=Case+Management+Dashboard"
              alt="Case Management Dashboard"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Save 15+ Hours Weekly</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Reduce administrative work and focus on legal practice
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
          <h2 className="text-3xl font-bold mb-4 text-center">See Case Management in Action</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Experience how Denning's intuitive interface helps you manage your legal practice efficiently
          </p>

          <div className="bg-background rounded-xl shadow-lg overflow-hidden mb-16">
            <div className="border-b border-border p-4">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-sm text-muted-foreground">Denning Case Management Dashboard</div>
              </div>
            </div>

            <div className="grid md:grid-cols-5 min-h-[600px]">
              {/* Sidebar */}
              <div className="md:col-span-1 border-r border-border p-4">
                <div className="mb-6">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-sm"
                      placeholder="Search cases..."
                    />
                  </div>

                  <Button className="w-full mb-4" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Case
                  </Button>

                  <h4 className="text-sm font-medium mb-2">Navigation</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center text-primary bg-primary/5 rounded-md p-2">
                      <Folder className="h-4 w-4 mr-2" />
                      <span>Active Cases</span>
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-foreground rounded-md p-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Calendar</span>
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-foreground rounded-md p-2">
                      <ClipboardList className="h-4 w-4 mr-2" />
                      <span>Tasks</span>
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-foreground rounded-md p-2">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Clients</span>
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-foreground rounded-md p-2">
                      <FileText className="h-4 w-4 mr-2" />
                      <span>Documents</span>
                    </li>
                    <li className="flex items-center text-muted-foreground hover:text-foreground rounded-md p-2">
                      <BarChart className="h-4 w-4 mr-2" />
                      <span>Reports</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-4 p-6">
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Active Cases</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                      <span className="ml-1 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                        3
                      </span>
                    </Button>
                    <Button variant="outline" size="sm">
                      Filter
                    </Button>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {/* Case Card */}
                  <div className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors cursor-pointer">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-semibold">Mwangi v. Nairobi County (Land Dispute)</h4>
                      <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">In Progress</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Land dispute case regarding property boundaries in Westlands area. Client seeking declaration of
                      rightful ownership.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Case Number</p>
                        <p className="text-sm font-medium">ELC-123-2023</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Court</p>
                        <p className="text-sm font-medium">Environment & Land Court</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Next Hearing</p>
                        <p className="text-sm font-medium">15 Aug 2023</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Assigned To</p>
                        <p className="text-sm font-medium">Jane Kamau</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                            JK
                          </div>
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                            MO
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground ml-3">2 team members</span>
                      </div>
                      <Button variant="link" size="sm" className="h-auto p-0">
                        View case details
                      </Button>
                    </div>
                  </div>

                  {/* Case Card */}
                  <div className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors cursor-pointer">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-semibold">Otieno v. Kenya Power (Commercial Dispute)</h4>
                      <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">Active</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Commercial dispute regarding breach of contract for power supply to client's manufacturing plant.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Case Number</p>
                        <p className="text-sm font-medium">COMM-456-2023</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Court</p>
                        <p className="text-sm font-medium">Commercial Court</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Next Hearing</p>
                        <p className="text-sm font-medium">22 Aug 2023</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Assigned To</p>
                        <p className="text-sm font-medium">David Njoroge</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                            DN
                          </div>
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                            AW
                          </div>
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                            +1
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground ml-3">3 team members</span>
                      </div>
                      <Button variant="link" size="sm" className="h-auto p-0">
                        View case details
                      </Button>
                    </div>
                  </div>

                  {/* Case Card */}
                  <div className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors cursor-pointer">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-semibold">Wanjiku Estate Succession</h4>
                      <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">New</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Succession case for the estate of the late Mary Wanjiku. Multiple beneficiaries with disputed
                      claims.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Case Number</p>
                        <p className="text-sm font-medium">SUCC-789-2023</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Court</p>
                        <p className="text-sm font-medium">High Court (Family Division)</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Next Hearing</p>
                        <p className="text-sm font-medium">5 Sep 2023</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Assigned To</p>
                        <p className="text-sm font-medium">Sarah Omondi</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex -space-x-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                            SO
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground ml-3">1 team member</span>
                      </div>
                      <Button variant="link" size="sm" className="h-auto p-0">
                        View case details
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                            <Calendar className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">File Response - Mwangi v. Nairobi County</p>
                            <p className="text-xs text-muted-foreground">ELC-123-2023</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-red-600">Tomorrow</p>
                          <p className="text-xs text-muted-foreground">Assigned to Jane Kamau</p>
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">
                            <Calendar className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Hearing Preparation - Otieno v. Kenya Power</p>
                            <p className="text-xs text-muted-foreground">COMM-456-2023</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-yellow-600">3 days</p>
                          <p className="text-xs text-muted-foreground">Assigned to David Njoroge</p>
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                            <FileText className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Submit Inventory - Wanjiku Estate Succession</p>
                            <p className="text-xs text-muted-foreground">SUCC-789-2023</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-blue-600">1 week</p>
                          <p className="text-xs text-muted-foreground">Assigned to Sarah Omondi</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">David Njoroge</span> added a note to{" "}
                          <span className="text-primary">Otieno v. Kenya Power</span>
                        </p>
                        <p className="text-xs text-muted-foreground">Today, 10:23 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Jane Kamau</span> uploaded 3 documents to{" "}
                          <span className="text-primary">Mwangi v. Nairobi County</span>
                        </p>
                        <p className="text-xs text-muted-foreground">Yesterday, 4:45 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Sarah Omondi</span> added a new client{" "}
                          <span className="text-primary">John Wanjiku</span>
                        </p>
                        <p className="text-xs text-muted-foreground">Yesterday, 2:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container-custom section-padding">
        <h2 className="text-3xl font-bold mb-4 text-center">How Denning's Case Management Works</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Our comprehensive system streamlines your legal practice workflow
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm h-full border border-muted">
              <h3 className="text-xl font-semibold mb-4 mt-4">Organize Cases</h3>
              <p className="text-muted-foreground mb-4">
                Create digital case files with all relevant information, documents, and communications in one secure
                location.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm">
                <p className="italic">Key features:</p>
                <ul className="mt-2 space-y-2">
                  <li>Customizable case templates for different practice areas</li>
                  <li>Document management with version control</li>
                  <li>Client information and contact history</li>
                  <li>Case notes and internal communications</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm h-full border border-muted">
              <h3 className="text-xl font-semibold mb-4 mt-4">Track Deadlines & Tasks</h3>
              <p className="text-muted-foreground mb-4">
                Never miss important dates with our comprehensive calendar and task management system tailored for
                Kenyan legal practice.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm">
                <p className="italic">Key features:</p>
                <ul className="mt-2 space-y-2">
                  <li>Court date tracking with automated reminders</li>
                  <li>Filing deadline management</li>
                  <li>Task assignment and progress tracking</li>
                  <li>Integration with Kenyan court calendars</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm h-full border border-muted">
              <h3 className="text-xl font-semibold mb-4 mt-4">Collaborate & Report</h3>
              <p className="text-muted-foreground mb-4">
                Work seamlessly with your team and generate comprehensive reports on case progress and practice
                performance.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg text-sm">
                <p className="italic">Key features:</p>
                <ul className="mt-2 space-y-2">
                  <li>Secure team collaboration tools</li>
                  <li>Client portal for document sharing and updates</li>
                  <li>Customizable reports and analytics</li>
                  <li>Time tracking and billing integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full bg-muted/30 section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Folder className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Case Organization</h3>
              <p className="text-muted-foreground">
                Organize all case information, documents, and communications in a structured, searchable format.
              </p>
              <ul className="mt-4 space-y-2">
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
                  <span className="text-sm">Digital case files</span>
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
                  <span className="text-sm">Document management</span>
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
                  <span className="text-sm">Advanced search capabilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calendar & Deadlines</h3>
              <p className="text-muted-foreground">
                Track court dates, filing deadlines, and appointments with automated reminders.
              </p>
              <ul className="mt-4 space-y-2">
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
                  <span className="text-sm">Court date tracking</span>
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
                  <span className="text-sm">Automated reminders</span>
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
                  <span className="text-sm">Kenyan court calendar integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Work seamlessly with colleagues on cases with secure collaboration tools.
              </p>
              <ul className="mt-4 space-y-2">
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
                  <span className="text-sm">Task assignment</span>
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
                  <span className="text-sm">Internal messaging</span>
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
                  <span className="text-sm">Document collaboration</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reports & Analytics</h3>
              <p className="text-muted-foreground">
                Gain insights into your practice with customizable reports and analytics.
              </p>
              <ul className="mt-4 space-y-2">
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
                  <span className="text-sm">Case status reports</span>
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
                  <span className="text-sm">Productivity metrics</span>
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
                  <span className="text-sm">Financial performance tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="container-custom section-padding">
        <h2 className="text-3xl font-bold mb-4 text-center">Real-World Examples</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          See how Kenyan legal professionals use Denning's case management system
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background rounded-xl overflow-hidden shadow-md">
            <div className="bg-primary/10 p-4 border-b border-primary/20">
              <h3 className="font-semibold">Example 1: Mid-Size Law Firm</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Challenge:</h4>
                <p className="text-sm">
                  A 15-lawyer firm in Nairobi was struggling with case coordination across multiple practice areas and
                  tracking court deadlines.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Denning Solution:</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Implemented centralized case management with practice-specific templates</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Set up automated court date tracking and deadline reminders</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Enabled secure team collaboration across departments</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Results:</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Reduced missed deadlines by 95%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Improved case coordination and knowledge sharing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Saved 12+ hours per lawyer per week on administrative tasks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl overflow-hidden shadow-md">
            <div className="bg-primary/10 p-4 border-b border-primary/20">
              <h3 className="font-semibold">Example 2: Corporate Legal Department</h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Challenge:</h4>
                <p className="text-sm">
                  An in-house legal team at a major Kenyan bank needed better visibility into ongoing litigation and
                  compliance matters.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Denning Solution:</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Implemented case tracking system with custom fields for compliance matters</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Created executive dashboards for litigation risk assessment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Set up secure portal for external counsel collaboration</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Results:</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Improved visibility into case status for management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Reduced external counsel costs by 30%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Enhanced compliance tracking and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="w-full bg-muted/30 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-background rounded-xl p-8 md:p-12 shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  <span className="text-3xl font-bold">D</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg italic mb-6">
                  "Denning's case management system has transformed how our firm operates. We've eliminated missed
                  deadlines, improved team coordination, and can access our case files securely from anywhere. The
                  system's understanding of Kenyan legal practice makes it invaluable for our firm."
                </p>
                <div>
                  <p className="font-semibold">Daniel Kimani</p>
                  <p className="text-sm text-muted-foreground">Managing Partner, Kimani & Associates, Nairobi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom section-padding">
        <div className="bg-primary text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Legal Practice Today</h2>
            <p className="text-lg text-white/80 mb-8">
              Join hundreds of Kenyan legal professionals who are already experiencing the benefits of Denning's case
              management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Request Case Management Demo <ArrowRight className="ml-2 h-4 w-4" />
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
      </section>
    </div>
  )
}
