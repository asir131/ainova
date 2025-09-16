"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useLanguage } from "@/context/language-context"

const page = () => {
  const { currentLanguage } = useLanguage()
  
  // Multilingual content directly in component
  const content = {
    en: {
      title: "Ready to Experience AI Booking?",
      subtitle: "Join thousands of users who are already saving time with our intelligent platform",
      contactButton: "Contact Us",
      faqButton: "FAQ"
    },
    de: {
      title: "Bereit, KI-Buchungen zu Erleben?",
      subtitle: "Schließen Sie sich Tausenden von Benutzern an, die bereits Zeit mit unserer intelligenten Plattform sparen",
      contactButton: "Kontaktiere uns",
      faqButton: "FAQ"
    }
  }
  
  // Get current language content with fallback
  const currentContent = content[currentLanguage] || content.en
  
  // Debug log to verify language switching
  console.log('Current language in Contact page:', currentLanguage);

  return (
    <div className='flex flex-col items-center justify-center py-25 md:py-30 md:pb-65 bg-gradient-to-r from-[#A7DAFF] via-white to-[#A7DAFF]' >
      <div className='w-15'>
        <Image src="/ai.png" width={100} height={100} alt='' />
      </div>
      <div className='text-center'>
        <h1 className='font-semibold text-xl text-[#121D2E] mt-13'>
          {currentContent.title}
        </h1>
        <p className='text-[#121D2E] opacity-60 py-6'>
          {currentContent.subtitle}
        </p>
      </div>
      <div className="flex mt-5 flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Link
          href="/contact"
          className="px-8 py-4 max-sm:w-full border-2 border-purple-600 text-purple-600 font-semibold h-[58px] w-[180px] rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-center flex items-center justify-center"
        >
          {currentContent.contactButton}
        </Link>
      <Link
  href="/about/faq"
  // Trigger the scroll function when clicked
  className="px-8 py-4 text-center max-sm:w-full bg-gradient-to-r from-[#5E8CFF] via-[#7B81FF] to-[#C78EFF] text-white font-semibold rounded-lg h-[58px] w-[180px] transition-all duration-300 shadow-lg hover:shadow-xl"
>
  {currentContent.faqButton}
</Link>
      </div>
    </div>
  )
}

export default page