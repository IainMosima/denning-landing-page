"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Denning
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/security" className="text-gray-300 hover:text-white transition-colors">
              Security
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button asChild variant="outline" className="border-gray-700 text-white hover:bg-gray-900">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="bg-white text-black hover:bg-gray-200">
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="ml-4 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/features"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/security"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={toggleMenu}
              >
                Security
              </Link>
              <div className="pt-4 flex flex-col space-y-4">
                <Button asChild variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                  <Link href="/login" onClick={toggleMenu}>
                    Log in
                  </Link>
                </Button>
                <Button asChild className="w-full bg-white text-black hover:bg-gray-200">
                  <Link href="/contact" onClick={toggleMenu}>
                    Request Demo
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
