"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"

export default function NotFoundWrapper() {
  const { currentLanguage } = useLanguage()

  const content = {
    en: {
      title: "Oops! Page not found.",
      description: "The page you're looking for doesn't exist or has been removed.",
      buttonText: "Go to Homepage",
    },
    de: {
      title: "Ups! Seite nicht gefunden.",
      description: "Die Seite, die Sie suchen, existiert nicht oder wurde entfernt.",
      buttonText: "Zur Startseite",
    },
  }

  const currentContent = content[currentLanguage] || content.en

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ADCDFF] via-[#EDF9FF] to-[#BBD6FF] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-8xl md:text-[168px] font-bold mb-8 leading-none bg-gradient-to-b from-[#E56E70] to-[#E0AEAF] bg-clip-text text-transparent">404</div>

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{currentContent.title}</h1>

        <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">{currentContent.description}</p>

        <Link
          href="/"
          className="inline-block px-8 py-4 max-sm:w-full w-[219px] bg-gradient-to-r from-[#5E8CFF] via-[#7B81FF] to-[#C78EFF] text-white font-semibold rounded-full h-[58px] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {currentContent.buttonText}
        </Link>
      </div>
    </div>
  )
}
