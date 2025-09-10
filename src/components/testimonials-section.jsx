"use client"

import { useLanguage } from "@/context/language-context"
import { useState, useEffect } from "react"


const testimonials = [
  {
    id: 1,
    name: "Ariyan Khan",
    location: "South Korea",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      de: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "United States",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "The AI assistant has completely transformed how we handle customer bookings. It's incredibly efficient and user-friendly.",
      de: "Der KI-Assistent hat völlig verändert, wie wir Kundenbuchungen abwickeln. Es ist unglaublich effizient und benutzerfreundlich.",
    },
  },
  {
    id: 3,
    name: "Michael Chen",
    location: "Singapore",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Outstanding service! The booking process is now seamless and our customers love the instant responses.",
      de: "Hervorragender Service! Der Buchungsprozess ist jetzt nahtlos und unsere Kunden lieben die sofortigen Antworten.",
    },
  },
  {
    id: 4,
    name: "Emma Wilson",
    location: "United Kingdom",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "This platform has saved us countless hours. The AI understands our needs perfectly and delivers every time.",
      de: "Diese Plattform hat uns unzählige Stunden gespart. Die KI versteht unsere Bedürfnisse perfekt und liefert jedes Mal.",
    },
  },
  {
    id: 5,
    name: "David Rodriguez",
    location: "Spain",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Incredible automation capabilities. Our booking efficiency has increased by 300% since implementation.",
      de: "Unglaubliche Automatisierungsfähigkeiten. Unsere Buchungseffizienz ist seit der Implementierung um 300% gestiegen.",
    },
  },
  {
    id: 6,
    name: "Lisa Zhang",
    location: "Canada",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "The best investment we've made for our business. Customer satisfaction has never been higher.",
      de: "Die beste Investition, die wir für unser Unternehmen getätigt haben. Die Kundenzufriedenheit war noch nie höher.",
    },
  },
  {
    id: 7,
    name: "James Thompson",
    location: "Australia",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Simple, effective, and reliable. The AI handles complex booking scenarios with ease.",
      de: "Einfach, effektiv und zuverlässig. Die KI bewältigt komplexe Buchungsszenarien mit Leichtigkeit.",
    },
  },
  {
    id: 8,
    name: "Maria Garcia",
    location: "Mexico",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Revolutionary technology! Our team can now focus on what matters most while AI handles the bookings.",
      de: "Revolutionäre Technologie! Unser Team kann sich jetzt auf das Wichtigste konzentrieren, während die KI die Buchungen übernimmt.",
    },
  },
  {
    id: 9,
    name: "Ahmed Hassan",
    location: "UAE",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Exceptional service quality. The platform adapts to our business needs perfectly.",
      de: "Außergewöhnliche Servicequalität. Die Plattform passt sich perfekt an unsere Geschäftsbedürfnisse an.",
    },
  },
  {
    id: 10,
    name: "Sophie Martin",
    location: "France",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Fantastic results! Our booking conversion rate has improved dramatically since using this platform.",
      de: "Fantastische Ergebnisse! Unsere Buchungskonversionsrate hat sich seit der Nutzung dieser Plattform dramatisch verbessert.",
    },
  },
  {
    id: 11,
    name: "Roberto Silva",
    location: "Brazil",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "The AI assistant is like having a dedicated team member who never sleeps. Absolutely game-changing.",
      de: "Der KI-Assistent ist wie ein engagiertes Teammitglied, das nie schläft. Absolut bahnbrechend.",
    },
  },
  {
    id: 12,
    name: "Anna Petrov",
    location: "Russia",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: {
      en: "Outstanding platform with incredible support. Our customers are happier than ever with the booking experience.",
      de: "Hervorragende Plattform mit unglaublichem Support. Unsere Kunden sind zufriedener denn je mit der Buchungserfahrung.",
    },
  },
]

export default function TestimonialsSection() {
  const { currentLanguage } = useLanguage()
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState("next")
  const [isMobile, setIsMobile] = useState(false)

  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1 // Mobile: 1 card
      if (window.innerWidth < 1024) return 2 // Tablet: 2 cards  
      return 3 // Desktop: 3 cards
    }
    return 3
  }

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage())

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage()
      setItemsPerPage(newItemsPerPage)
      setIsMobile(window.innerWidth < 768)
      setCurrentPage(0) // Reset to first page on resize
    }

    handleResize() // Initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage)

  const handleNext = () => {
    if (isAnimating) return
    setSlideDirection("next")
    setIsAnimating(true)
    setCurrentPage((prev) => (prev + 1) % totalPages)
    setTimeout(() => setIsAnimating(false), 400)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setSlideDirection("prev")
    setIsAnimating(true)
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    setTimeout(() => setIsAnimating(false), 400)
  }

  const content = {
    en: {
      title: "What Our Users Say",
      subtitle:
        "Join thousands of satisfied customers who have transformed their booking experience with our AI platform",
    },
    de: {
      title: "Was unsere Nutzer sagen",
      subtitle:
        "Schließen Sie sich Tausenden zufriedener Kunden an, die ihre Buchungserfahrung mit unserer KI-Plattform transformiert haben",
    },
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className="text-yellow-400 text-base sm:text-lg lg:text-xl font-bold"
      >
        ★
      </span>
    ))
  }

  return (
    <section 
      className="relative overflow-hidden transition-all duration-700 ease-in" 
      style={{ 
        background: `linear-gradient(135deg, #508DFF 0%, #A0C1FF 50%, #508DFF 100%)`,
        minHeight: '100vh'
      }}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-24 left-16 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-72 right-24 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-48 left-1/3 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-24 right-16 w-36 h-36 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-8 w-20 h-20 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-8 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col justify-center min-h-screen">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight drop-shadow-lg">
            {content[currentLanguage].title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-sm px-4">
            {content[currentLanguage].subtitle}
          </p>
        </div>

        {/* Mobile: Stack all cards vertically */}
        {isMobile ? (
          <div className="space-y-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in transform hover:-translate-y-1"
                style={{ 
                  background: 'linear-gradient(135deg, #FADFFF 0%, #FDF5FF 50%, #F7D1FF 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Profile Section */}
                <div className="flex items-start mb-4">
                  <div className="relative flex-shrink-0 mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover transition-transform duration-300 hover:scale-110 ring-2 ring-white/70 shadow-lg"
                      style={{ backgroundColor: '#E5E7EB' }}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-300/20 to-transparent"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm font-medium">{testimonial.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

                {/* Testimonial Text */}
                <p className="text-gray-800 leading-relaxed text-sm">{testimonial.text[currentLanguage]}</p>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop/Tablet: Paginated cards */
          <>
            <div className="relative overflow-hidden mb-12 lg:mb-16">
              <div
                className={`grid gap-4 sm:gap-6 lg:gap-8 transition-opacity duration-400 ease-in ${
                  isAnimating ? "opacity-0" : "opacity-100"
                } ${itemsPerPage === 1 ? 'grid-cols-1' : itemsPerPage === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}
              >
                {currentTestimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="rounded-3xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 ease-in transform h-full border border-white/30 hover:border-white/50"
                    style={{ 
                      background: 'linear-gradient(135deg, #FADFFF 0%, #FDF5FF 50%, #F7D1FF 100%)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    {/* Profile Section */}
                    <div className="flex items-start mb-4 lg:mb-6">
                      <div className="relative flex-shrink-0 mr-4 lg:mr-5">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover transition-transform duration-300 hover:scale-110 ring-2 lg:ring-3 ring-white/70 shadow-lg"
                          style={{ backgroundColor: '#E5E7EB' }}
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-300/20 to-transparent"></div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-gray-900 text-lg lg:text-xl leading-tight mb-1">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm lg:text-base font-medium">{testimonial.location}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex mb-4 lg:mb-6">{renderStars(testimonial.rating)}</div>

                    {/* Testimonial Text */}
                    <p className="text-gray-800 leading-relaxed text-sm lg:text-base font-normal">{testimonial.text[currentLanguage]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation - Only for Desktop/Tablet */}
            <div className="flex items-center justify-center space-x-4">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-transform duration-200 ease-in group-hover:-translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Pagination Dots */}
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (!isAnimating && i !== currentPage) {
                        setSlideDirection(i > currentPage ? "next" : "prev")
                        setIsAnimating(true)
                        setCurrentPage(i)
                        setTimeout(() => setIsAnimating(false), 400)
                      }
                    }}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ease-in ${
                      i === currentPage 
                        ? "bg-white shadow-sm" 
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={isAnimating}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 transition-transform duration-200 ease-in group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Simplified Custom CSS */}
      <style jsx>{`
        /* Enhanced shadow effects */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.15);
        }
        
        /* Custom backdrop blur enhancement */
        .backdrop-blur-xl {
          backdrop-filter: blur(20px) saturate(180%);
        }
      `}</style>
    </section>
  )
}