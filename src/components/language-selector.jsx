"use client"

import { useLanguage } from "@/context/language-context"
import Image from "next/image"
import { useState } from "react"


const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { currentLanguage, changeLanguage } = useLanguage()

  const languages = [
    {
      name: "English",
      flag: "/usa.png",
      code: "en",
    },
    {
      name: "German",
      flag: "/germany.png",
      code: "de",
    },
  ]

  const handleLanguageSelect = (language) => {
    changeLanguage(language.code)
    setIsOpen(false)
  }

  const selectedLanguage = languages.find((lang) => lang.code === currentLanguage)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2   pl-3 py-2.5 rounded text-sm text-gray-700  transition-colors"
      >
        <Image
          src={selectedLanguage?.flag}
          alt={`${selectedLanguage?.name} flag`}
          width={20}
          height={20}
        />
        <span>{selectedLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[120px] z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 flex items-center space-x-2 transition-colors"
            >
              <Image
                src={language.flag}
                alt={`${language.name} flag`}
                width={20}
                height={20}
              />
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
