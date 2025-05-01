"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Denning has transformed how our firm conducts legal research. We're finding relevant Kenyan case law in minutes instead of hours.",
    author: "James Mwangi",
    title: "Managing Partner, Muthaiga Law Associates",
    image: "/placeholder.svg?height=80&width=80&text=JM",
  },
  {
    quote:
      "The document drafting features have improved our efficiency by 60%. The Kenya-specific templates are invaluable for our practice.",
    author: "Wanjiku Njeri",
    title: "Senior Advocate, Nairobi Legal Consultants",
    image: "/placeholder.svg?height=80&width=80&text=WN",
  },
  {
    quote:
      "As a corporate lawyer, the compliance tools have been a game-changer. Denning keeps us updated with all regulatory changes.",
    author: "David Ochieng",
    title: "Legal Director, East African Holdings",
    image: "/placeholder.svg?height=80&width=80&text=DO",
  },
]

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/10">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 text-blue-500 opacity-20">
              <Quote size={80} />
            </div>

            {/* Testimonial content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="min-h-[200px] flex items-center">
                <div className="transition-opacity duration-500">
                  <p className="text-xl md:text-2xl text-white mb-8 italic">"{testimonials[current].quote}"</p>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 bg-gray-800">
                      <img
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-lg font-semibold text-white">{testimonials[current].author}</div>
                    <div className="text-sm text-gray-400">{testimonials[current].title}</div>
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrent(index)
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === current ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
