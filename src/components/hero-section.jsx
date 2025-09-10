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
    <section className="relative -top-20 -mb-20 md:py-15 md:pb-25 overflow-hidden bg-gradient-to-t from-[#C0E0FF] to-[#F9FCFF] ">
      

      <div className="max-w-full md:mx-20 md:mt-20 px-6 py-12 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Mobile: Robot image first */}
          <div className="lg:hidden w-full flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <img
                src="/robot.png"
                alt="AI Robot Assistant"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop: Robot image */}
          <div className="hidden lg:block flex-1">
            <div className="relative w-2/4  mx-auto">
              <img
                src="/robot.png"
                alt="AI Robot Assistant"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:-ml-30 lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[40px] font-[500] leading-tight mb-6">
              <span className="text-gray-900">{content.title} </span>
              <span className="bg-gradient-to-r from-[#4D7AFF] to-[#A15AFE] bg-clip-text text-transparent">
                {content.aiText} <br />
              </span>
              <span className="text-gray-900"> {content.subtitle}</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="px-8 py-4 max-sm:w-full border-2 border-purple-600 text-purple-600 font-semibold h-[58px] w-[180px] rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                {content.contactUs}
              </Link>
              <button className="px-8 py-4 max-sm:w-full bg-gradient-to-r from-[#5E8CFF] via-[#7B81FF] to-[#C78EFF] text-white font-semibold rounded-full h-[58px] w-[180px] transition-all duration-300 shadow-lg hover:shadow-xl">
                {content.getStarted}
              </button>
              
            </div>
          </div>

          
        </div>
      </div>

      <div className="w-[1440px] h-[1136px] bg-[url('/linier.png')] absolute top-0 left-0 bg-no-repeat"></div>
     <div className="w-[1440px] h-[1136px] bg-[url('/linier.png')] absolute top-0 right-0 bg-no-repeat bg-right scale-x-[-1]"></div>

    </section>
  );
}
