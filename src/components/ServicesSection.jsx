"use client"

import { useLanguage } from "@/context/language-context"
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"

export default function ServicesSection() {
  const { currentLanguage } = useLanguage()

  // Data states
  const [data, setData] = useState(null)
  const [fetchError, setFetchError] = useState("")
  const [loadingData, setLoadingData] = useState(true)

  // UI states
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(false)
  const [showMoreCards, setShowMoreCards] = useState(false)

  // Fallback (minimal)
  const fallback = {
    en: {
      title: "Our Services",
      subtitle: "Discover services instantly",
      searchPlaceholder: "Search...",
      filters: "Filters",
      viewMore: "View More",
      category: "Category",
      categories: {
        all: "All",
        foodDining: "Food & Dining",
        beautyWellness: "Beauty & Wellness",
        healthcare: "Healthcare",
        homeGarden: "Home & Garden",
        transportation: "Transportation"
      },
      services: [],
      additionalServices: []
    }
  }

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        setLoadingData(true)
        const res = await fetch("/data.json", { cache: "no-store" })
        if (!res.ok) throw new Error("Bad status " + res.status)
        const json = await res.json()
        if (!cancelled) setData(json)
      } catch (e) {
        if (!cancelled) {
          setFetchError("Failed to load remote data. Using fallback.")
          setData(fallback)
        }
      } finally {
        if (!cancelled) setLoadingData(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const langObj = (data && (data[currentLanguage] || data.en)) || fallback.en
  const services = langObj.services || []
  const additionalServices = langObj.additionalServices || []
  const categories = langObj.categories || fallback.en.categories

  const normalizedSearch = searchQuery.trim().toLowerCase()
  const filterList = arr =>
    arr.filter(s => {
      const catOk = selectedCategory === "all" || s.category === selectedCategory
      const searchOk =
        !normalizedSearch ||
        s.title?.toLowerCase().includes(normalizedSearch) ||
        s.description?.toLowerCase().includes(normalizedSearch)
      return catOk && searchOk
    })

  const filteredPrimary = useMemo(
    () => filterList(services),
    [services, selectedCategory, normalizedSearch]
  )
  const filteredAdditional = useMemo(
    () => filterList(additionalServices),
    [additionalServices, selectedCategory, normalizedSearch]
  )

  const handleViewMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowMoreCards(true)
    }, 1200)
  }

  const renderStars = (rating, keyPref = "") => {
    const full = Math.floor(rating)
    const half = rating % 1 !== 0
    const empty = 5 - full - (half ? 1 : 0)
    return (
      <div className="flex items-center gap-0.5" aria-label={`Rating ${rating} out of 5`}>
        {Array.from({ length: full }).map((_, i) => <Star key={`f-${keyPref}-${i}`} />)}
        {half && <HalfStar key={`h-${keyPref}`} idx={keyPref} />}
        {Array.from({ length: empty }).map((_, i) => <Star key={`e-${keyPref}-${i}`} empty />)}
      </div>
    )
  }

  const renderServiceCard = (service, index, offset = 0) => (
    <article
      key={service.id}
      className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.06),0_1px_0_0_rgba(255,255,255,0.6)_inset] will-change-transform transition-transform duration-400 hover:-translate-y-2 hover:shadow-[0_18px_36px_-10px_rgba(0,0,0,0.20)]"
      style={{
        animation: `cardFadeUp .6s cubic-bezier(.16,.84,.44,1) ${(index + offset) * 0.07}s both`
      }}
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
        {service.image && (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-60 mix-blend-multiply pointer-events-none" />
        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 shadow-md">
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292A1 1 0 004.9 9.453L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-[13px] font-semibold text-slate-800">{service.rating}</span>
          </div>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_70%_30%,rgba(216,226,255,0.35),transparent_60%)]" />
      </div>

      <div className="flex flex-col flex-1 px-5 py-5 sm:px-6 sm:py-6 gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3
            className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 whitespace-nowrap overflow-hidden text-ellipsis"
            title={service.title}
          >
            {service.title}
          </h3>
          <span className="shrink-0 text-sm sm:text-[15px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full shadow-sm">
            {service.price}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
          {service.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          {renderStars(service.rating, service.id)}
          <span className="text-xs font-medium text-slate-500">
            ({service.reviews} reviews)
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-transparent group-hover:ring-2 group-hover:ring-offset-0 group-hover:ring-blue-500/40 transition-all duration-500" />
      <div
        className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
        style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6,#06B6D4)" }}
      />
    </article>
  )

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{
        // নতুন ব্যাকগ্রাউন্ড গ্রাডিয়ান্ট (#FFFFFF -> #D8E2FF -> #FFFFFF)
        background:
          "linear-gradient(180deg,#FFFFFF 0%, #FFFFFF 12%, #D8E2FF 50%, #FFFFFF 88%, #FFFFFF 100%)"
      }}
    >
      {/* Subtle background blobs (একই প্যালেট শেড ব্যবহার) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-16 left-8 w-60 sm:w-72 h-60 sm:h-72 bg-[radial-gradient(circle_at_center,rgba(216,226,255,0.65),rgba(216,226,255,0)_70%)] blur-2xl animate-pulse" />
        <div
          className="absolute top-72 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[radial-gradient(circle_at_center,rgba(216,226,255,0.55),rgba(216,226,255,0)_70%)] blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-[radial-gradient(circle_at_center,rgba(216,226,255,0.50),rgba(216,226,255,0)_70%)] blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
            style={{
              background: "linear-gradient(180deg,#1E293B 0%,#334155 35%,#475569 70%,#64748B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {langObj.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-2">
            {langObj.subtitle}
          </p>
          {fetchError && (
            <p className="mt-4 text-sm text-amber-600">
              {fetchError}
            </p>
          )}
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10 sm:mb-14 lg:mb-16">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={langObj.searchPlaceholder}
              className="w-full pl-12 pr-4 py-3.5 text-sm sm:text-base border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md"
              aria-label="Search services"
              disabled={loadingData}
            />
          </div>
          <button
            onClick={() => setShowFilters(v => !v)}
            aria-expanded={showFilters}
            disabled={loadingData}
            className="flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-300 rounded-2xl hover:bg-slate-50 focus:ring-2 focus:ring-blue-500/30 transition-all text-sm font-medium text-slate-700 shadow-sm hover:shadow-md disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m-6 8a2 2 0 1 0 0-4m0 4a2 2 0 1 0 0 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 0 0 4m0-4v2m0-6V4" />
            </svg>
            {langObj.filters}
            <svg
              className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Filters Panel */}
        <div
          className={`relative mb-12 transition-all duration-500 ease-out ${
            showFilters ? "opacity-100 translate-y-0 max-h-96" : "opacity-0 -translate-y-4 max-h-0"
          } overflow-hidden`}
        >
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200/70 max-w-2xl w-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-800">{langObj.category}</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close filters"
                >
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 18 12-12M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(categories).map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => setSelectedCategory(id)}
                    disabled={loadingData}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === id
                        ? "bg-blue-600 text-white shadow"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    } disabled:opacity-50`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data loading skeleton */}
        {loadingData && (
          <div className="grid gap-6 md:gap-7 lg:gap-8 mb-14 md:mb-16 lg:mb-20 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-3xl overflow-hidden border border-slate-200/60 bg-white/70 backdrop-blur-sm"
              >
                <div className="h-40 sm:h-44 bg-slate-200/60" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-2/3 bg-slate-200 rounded" />
                  <div className="h-3 w-full bg-slate-200 rounded" />
                  <div className="h-3 w-5/6 bg-slate-200 rounded" />
                  <div className="h-3 w-4/6 bg-slate-200 rounded" />
                  <div className="h-4 w-1/3 bg-slate-200 rounded mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services */}
        {!loadingData && (
          <ResponsiveGrid>
            {filteredPrimary.map((s, i) => renderServiceCard(s, i))}
          </ResponsiveGrid>
        )}

        {/* Additional */}
        {!loadingData && showMoreCards && filteredAdditional.length > 0 && (
          <ResponsiveGrid>
            {filteredAdditional.map((s, i) => renderServiceCard(s, i, filteredPrimary.length))}
          </ResponsiveGrid>
        )}

        {/* View more loading */}
        {isLoading && (
            <div className="flex flex-col items-center justify-center py-16">
            <div className="relative">
              <div className="w-14 h-14 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            </div>
            <p className="mt-6 text-sm font-medium text-slate-600 animate-pulse">Loading more services...</p>
          </div>
        )}

        {/* View More Button */}
        {!loadingData && !showMoreCards && !isLoading && filteredAdditional.length > 0 && (
          <div className="text-center">
            <button
              onClick={handleViewMore}
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-400 hover:-translate-y-0.5 shadow-md hover:shadow-xl"
            >
              {langObj.viewMore}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(34px) scale(.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (prefers-reduced-motion: reduce) {
          article {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  )
}

/* Grid wrapper */
function ResponsiveGrid({ children }) {
  return (
    <div className="grid gap-6 md:gap-7 lg:gap-8 mb-14 md:mb-16 lg:mb-20
      grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
      [@supports(display:grid)]:auto-rows-fr">
      {children}
    </div>
  )
}

/* Stars */
function Star({ empty }) {
  return (
    <svg
      className={`w-4 h-4 ${empty ? "text-gray-300" : "text-yellow-400"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292A1 1 0 004.9 9.453L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function HalfStar({ idx }) {
  return (
    <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20">
      <defs>
        <linearGradient id={`half-${idx}`}>
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="#E5E7EB" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#half-${idx})`}
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292A1 1 0 004.9 9.453L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  )
}