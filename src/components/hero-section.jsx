"use client";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

export default function HeroSection() {
  const { currentLanguage } = useLanguage();
  
  const heroContent = {
    en: {
      title: "Your Digital Customer",
      aiText: "Assistant",
      subtitle: "Always Available, Always Reliable",
      description:
        "With AINOVA, you get 24/7 bookings, instant answers, and happier customers  while you and your team stays stress-free",
      getStarted: "How it works",
      contactUs: "Contact Us",
    },
   de: {
      title: "Ihr Digitaler Kunde",
      aiText: "Assistent",
      subtitle: "Immer Verfügbar, Zuverlässig",
      description:
        "Mit AINOVA erhalten Sie 24/7 Buchungen, sofortige Antworten und glücklichere Kunden, während Sie und Ihr Team stressfrei bleiben.",
      getStarted: "Wie es funktioniert",
      contactUs: "Kontaktieren Sie uns",
    }
  };
  
  const content = heroContent[currentLanguage];

  // Function to handle smooth scroll to How It Works section
  const scrollToHowItWorks = (e) => {
    e.preventDefault();
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative md:h-screen flex items-center justify-center -top-20 -mb-20 md:py-15 md:pt-20 md:pb-25 overflow-hidden bg-gradient-to-t from-[#C0E0FF] to-[#F9FCFF]">
      <div className="max-w-full  items-center md:mx-4 lg:mx-10 xl:mx-10 2xl:max-w-full px-4 sm:px-6 py-12 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Mobile: Robot image first */}
          <div className="lg:hidden w-full flex items-center justify-center mb-8">
            <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80">
              <img
                src="/robot.png"
                alt="AI Robot Assistant"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-8 xl:ml-50 md:w-270 ">
            <h1 className="text-3xl xs:text-3xl sm:text-4xl lg:text-5xl font-[500] leading-tight mb-4 sm:mb-6">
              <span className="text-gray-900 text-3xl xs:text-3xl sm:text-4xl lg:text-5xl font-medium">{content.title} </span>
              <span className="bg-gradient-to-r text-3xl xs:text-3xl sm:text-4xl lg:text-5xl font-medium from-[#4D7AFF] to-[#A15AFE] bg-clip-text text-transparent">
                {content.aiText} <br />
              </span>
              <span className="text-gray-900 text-3xl xs:text-3xl sm:text-4xl lg:text-5xl font-medium"> {content.subtitle}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="px-6 py-3 sm:px-8 sm:py-4 max-sm:w-full border-2 border-purple-600 text-purple-600 font-semibold h-14 sm:h-[58px] w-full sm:w-[180px] rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                {content.contactUs}
              </Link>
              {/* Updated button with smooth scroll */}
              <button
                onClick={scrollToHowItWorks}
                className="px-6 py-3 sm:px-8 sm:py-4 max-sm:w-full bg-gradient-to-r from-[#5E8CFF] via-[#7B81FF] to-[#C78EFF] text-white font-semibold rounded-lg h-14 sm:h-[58px] w-full sm:w-[180px] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer"
              >
                {content.getStarted}
              </button>
            </div>
          </div>
          
          {/* Desktop: Robot image */}
          <div className="hidden lg:block flex-1 -p-30">
            <div className="relative w-full max-w-lg xl:max-w-lg mx-auto">
              <img
                src="/robot.png"
                alt="AI Robot Assistant"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}