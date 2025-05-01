"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"

const FloatingCta = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show the floating CTA after 3 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-xl p-4 max-w-xs animate-fade-in">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white/70 hover:text-white"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>

        <div className="flex items-start mb-3">
          <div className="bg-white/20 rounded-full p-2 mr-3">
            <MessageSquare size={20} className="text-white" />
          </div>
          <div>
            <h4 className="text-white font-medium text-sm">Ready to see Denning in action?</h4>
            <p className="text-white/80 text-xs mt-1">Request a personalized demo tailored to your firm's needs.</p>
          </div>
        </div>

        <Button asChild className="w-full bg-white text-blue-600 hover:bg-gray-100">
          <Link href="/contact">Request Demo</Link>
        </Button>
      </div>
    </div>
  )
}

export default FloatingCta

// Add this CSS to your globals.css
// @keyframes fade-in {
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-fade-in {
//   animation: fade-in 0.3s ease-out forwards;
// }
