"use client";

import { useLanguage } from "@/context/language-context";
import Image from "next/image";

export default function HowItWorksSection() {
  const { currentLanguage } = useLanguage();

  const content = {
  en: {
    title: "How It Works",
    subtitle: "Getting Started with Ainova is Easy",
    steps: [
      {
        number: "01",
        title: "Contact Us",
        description: "Reach out to us and let’s get connected",
      },
      {
        number: "02",
        title: "Share Your Needs",
        description: "Tell us your main challenges and provide the key info we need.",
      },
      {
        number: "03",
        title: "Confirm & Go Live",
        description: "Confirm & Go Live Approve the setup and let Ainova handle your customer communication.",
      },
    ],
    happyCustomers: "Happy Customer",
    count: "10K+",
  },
  de: {
    title: "Wie es funktioniert",
    subtitle: "Der Einstieg mit Ainova ist einfach",
    steps: [
      {
        number: "01",
        title: "Kontaktieren Sie uns",
        description: "Nehmen Sie Kontakt mit uns auf und lassen Sie uns verbinden.",
      },
      {
        number: "02",
        title: "Teilen Sie Ihre Bedürfnisse",
        description: "Erzählen Sie uns von Ihren Hauptproblemen und geben Sie uns die benötigten Informationen.",
      },
      {
        number: "03",
        title: "Bestätigen & Live gehen",
        description: "Bestätigen Sie die Einrichtung und lassen Sie Ainova die Kundenkommunikation übernehmen.",
      },
    ],
    happyCustomers: "Zufriedene Kunden",
    count: "10K+",
  },
};


  const t = content[currentLanguage] || content.en;

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-[#CEE1FF] via-white to-[#CEE1FF]">
      <div className= "flex flex-col items-center md:ml-20 justify-around text-center  mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className=" text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="flex text-center md:mr-5 ml-5 md:ml-0  gap-3  text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight tracking-tight text-gray-900 mb-4">
           <div className="h-10 w-8 md:w-12 md:mt-1 "><Image src="/brain.png" width={100} height={100} alt="" /></div>{t.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed text-gray-600 max-w-2xl mx-auto px-4">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 md:ml-30  grid-col-reverse lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-12 lg:gap-20 xl:gap-50 items-center">
          {/* Steps + Numbers */}
          <div className="relative ">
            {/* ambient glow */}
            <div className="pointer-events-none absolute -top-4 lg:-top-8 -left-8 lg:-left-20 -right-4 lg:-right-8 -bottom-6 lg:-bottom-10">
              <div className="w-full h-full " />
            </div>

            <ul className="relative space-y-6 sm:space-y-7 lg:space-y-9">
              {t.steps.map((step, idx) => {
                const isMiddle = idx === 1;
                return (
                  <li
                    key={step.number}
                    className={
                      "flex items-stretch " +
                      (isMiddle ? "flex-row-reverse" : "")
                    }
                  >
                    {/* Number */}
                    <div
                      className={
                        "flex items-center flex-shrink-0 " +
                        (isMiddle
                          ? "pl-4 sm:pl-2 lg:pl-5 xl:pl-6"
                          : "pr-4 sm:pr-2 lg:pr-5 xl:pr-6")
                      }
                    >
                      <span className="select-none font-semibold text-4xl sm:text-5xl lg:text-[60px] xl:text-[62px] leading-none bg-gradient-to-t from-[#27151500] to-[#565656] text-transparent bg-clip-text tracking-tight">
                        {step.number}
                      </span>
                    </div>

                    {/* Card */}
                    <div
                      className={
                        "md:w-90 transition-transform duration-300 ease-out " +
                        (isMiddle
                          ? "mr-auto -translate-x-1 sm:-translate-x-2 lg:-translate-x-2 xl:-translate-x-4"
                          : "ml-auto translate-x-1 sm:translate-x-2 lg:translate-x-2 xl:translate-x-4")
                      }
                    >
                      <div className="relative bg-white rounded-xl lg:rounded-[14px] border border-gray-100 shadow-[0_25px_50px_-12px_#C9deff] shadow-[#e9deff] hover:shadow-[#e9deff] transition-shadow duration-300 px-4 py-4 sm:px-5 sm:py-4 lg:px-6 lg:py-5 xl:px-7 xl:py-5 overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_60%)]" />
                        <h3 className="text-start relative text-sm sm:text-base lg:text-[15px] font-semibold text-gray-900 mb-1.5 leading-tight">
                          {step.title}
                        </h3>
                        <p className="relative text-start text-xs sm:text-sm lg:text-[13px] leading-relaxed text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="h-full w-full">
          <Image src="/robowork.png" width={300} height={100} alt="" />
         </div>
        </div>
       
      </div>
    </section>
  );
}

function Avatar({ src, alt, size = "w-7 h-7" }) {
  return (
    <div
      className={`${size} rounded-full ring-3 ring-white overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 hover:scale-125 hover:ring-4 hover:ring-blue-200/50 transition-all duration-300 shadow-lg hover:shadow-xl`}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        
        className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
        
      />
    </div>
  );
}
