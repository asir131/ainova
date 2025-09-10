"use client"

import { useLanguage } from "@/context/language-context"
import Footer from "./footer"

export default function FooterWrapper() {
  const { currentLanguage } = useLanguage()

  return <Footer language={currentLanguage} />
}
