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
      getStarted: "Get Started",
      contactUs: "Contact Us",
    },
    de: {
      title: "Buchen Sie Ihren nächsten Service in Sekunden mit",
      aiText: "KI-Unterstützung",
      subtitle: "– Schnell, Einfach und Problemlos!",
      description:
        "Reservieren Sie sofort Ihre Lieblingsdienste—Kein Ärger, nur Ergebnisse!",
      getStarted: "Loslegen",
      contactUs: "Kontakt",
    },
  };

  const content = heroContent[currentLanguage];

  return (
    <section className="relative -top-20 -mb-20 md:py-15 md:pt-20 md:pb-25 overflow-hidden bg-gradient-to-t from-[#C0E0FF] to-[#F9FCFF]">
      

      <div className="max-w-full md:mx-4 lg:mx-10 xl:mx-20 2xl:mx-auto 2xl:max-w-7xl px-4 sm:px-6 py-12 lg:py-20 relative z-10">
  <div className="flex flex-col lg:flex-row items-center justify-between">
    {/* Mobile: Robot image first */}
    <div className="lg:hidden w-full flex justify-center mb-8">
      <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80">
        <img
          src="/robot.png"
          alt="AI Robot Assistant"
          className="w-full h-full object-contain"
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="flex-1 text-center lg:text-left lg:pr-8 xl:pr-12">
      <h1 className="text-3xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-[500] leading-tight mb-4 sm:mb-6">
        <span className="text-gray-900">{content.title} </span>
        <span className="bg-gradient-to-r from-[#4D7AFF] to-[#A15AFE] bg-clip-text text-transparent">
          {content.aiText} <br />
        </span>
        <span className="text-gray-900"> {content.subtitle}</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
        {content.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
        <Link
          href="/contact"
          className="px-6 py-3 sm:px-8 sm:py-4 max-sm:w-full border-2 border-purple-600 text-purple-600 font-semibold h-14 sm:h-[58px] w-full sm:w-[180px] rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center"
        >
          {content.contactUs}
        </Link>
        <Link href="/" className="px-6 py-3 sm:px-8 sm:py-4 max-sm:w-full bg-gradient-to-r from-[#5E8CFF] via-[#7B81FF] to-[#C78EFF] text-white font-semibold rounded-full h-14 sm:h-[58px] w-full sm:w-[180px] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
          {content.getStarted}
        </Link>
      </div>
    </div>

    {/* Desktop: Robot image */}
    <div className="hidden lg:block flex-1">
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
