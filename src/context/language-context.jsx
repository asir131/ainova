"use client"

import { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  // console.log(context)

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations = {
  en: {
    home: "Home",
    services: "Services",
    aboutUs: "About Us",
    team: "Team",
    contactUs: "Contact Us",
    welcome: "Welcome to Our Website",
    description: "Your trusted partner for all your business needs",
  },
  de: {
    home: "Startseite",
    services: "Dienstleistungen",
    aboutUs: "Über uns",
    team: "Team",
    contactUs: "Kontakt",
    welcome: "Willkommen auf unserer Website",
    description: "Ihr vertrauensvoller Partner für alle Ihre Geschäftsbedürfnisse",
  },
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  const t = (key) => {
    return translations[currentLanguage][key] || key
  }

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode)
  }

  return <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>{children}</LanguageContext.Provider>
}
