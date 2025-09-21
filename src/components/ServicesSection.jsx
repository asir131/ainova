"use client";

import { useLanguage } from "@/context/language-context";
import { useState } from "react";
import Image from "next/image";

export default function TeamSection() {
  const { currentLanguage, t } = useLanguage(); // Now using your context correctly!
  const [isLoading, setIsLoading] = useState(false);

  // Team data with multilingual support
  const team = [
    {
      id: 1,
      image: "/team1.png",
      name: "Andre Graf",
      designation: currentLanguage === 'de' ? 'Mitgründer' : 'Co-Founder',
      description: currentLanguage === 'de' 
        ? "Vertrauen und Kundenzufriedenheit haben für mich oberste Priorität. Bei Ainova konzentriere ich mich darauf, zuverlässige, einfache und menschenzentrierte Lösungen zu entwickeln, die Unternehmen helfen, mit Zuversicht zu wachsen."
        : "Trust and customer satisfaction are my top priorities. At Ainova, I focus on creating reliable, simple, and human-centered solutions that help businesses grow with confidence.",
    },
    {
      id: 2,
      image: "/team2.png",
      name: "Micha Eichenberger",
      designation: currentLanguage === 'de' ? 'Mitgründer' : 'Co-Founder',
      description: currentLanguage === 'de'
        ? "Ich glaube daran, Lösungen zu entwickeln, die wirklich einen Unterschied machen. Mit einem starken Fokus auf Innovation und Effizienz stelle ich sicher, dass Ainova unseren Kunden echten Mehrwert und nachhaltige Wirkung bietet."
        : "I believe in building solutions that truly make a difference. With a strong focus on innovation and efficiency, I ensure that Ainova delivers real value and lasting impact for our clients.",
    },
    {
      id: 3,
      image: "/team3.png",
      name: "Zsanna Simon",
      designation: currentLanguage === 'de' ? 'Mitgründerin' : 'Co-Founder',
      description: currentLanguage === 'de'
        ? "Ich konzentriere mich auf die Entwicklung klarer Vertriebsstrategien und die Leitung unserer Finanzoperationen. Meine Priorität ist es, das Wachstum von Ainova sicherzustellen und gleichzeitig starke, vertrauensvolle Beziehungen zu unseren Kunden aufzubauen."
        : "I focus on developing clear sales strategies and managing our finance operations. My priority is to ensure Ainova’s growth while building strong, trustworthy relationships with our clients.",
    },
  ];

 const culture = [
  {
    id: 1,
    image: "/bulb.png",
    name: currentLanguage === 'de' ? 'Innovation im Herzen' : 'Innovation At Heart',
    description: currentLanguage === 'de'
      ? "Wir begrüßen Veränderungen und suchen ständig nach neuen Wegen, wie KI Geschäftsprozesse verbessern kann."
      : "We embrace change and continuously explore new ways AI can simplify and improve everyday business interactions.",
  },
  {
    id: 2,
    image: "/search.png",
    name: currentLanguage === 'de' ? 'Als Eins Arbeiten' : 'Working as One',
    description: currentLanguage === 'de'
      ? "Partnerschaft ist entscheidend! Sowohl im Team als auch mit unseren Kunden schaffen wir Lösungen, die echten Wert liefern."
      : "Partnership is key! Both within our team and with our clients. Together, we craft solutions that deliver real value.",
  },
  {
    id: 3,
    image: "/human.png",
    name: currentLanguage === 'de' ? 'Menschen Zuerst' : 'People First',
    description: currentLanguage === 'de'
      ? "Unsere Technologie basiert auf Menschen. Wir bieten intuitive, zuverlässige Lösungen, die die Kundenerfahrung verbessern."
      : "Our technology is built around people. We focus on intuitive, reliable solutions that enhance customer experiences and ease the workload for teams.",
  },
  {
    id: 4,
    image: "/handshake.png",
    name: currentLanguage === 'de' ? 'Auf Vertrauen Gebaut' : 'Built on Trust',
    description: currentLanguage === 'de'
      ? "Wir bauen Produkte mit Integrität, damit unsere KI fair, genau und im besten Interesse der Nutzer bleibt."
      : "We build products with integrity, ensuring our AI recommendations are fair, accurate, and always in our users' best interests.",
  },
];



  // Content translations
  const content = {
    title: currentLanguage === 'de' ? 'Unser Team Kennenlernen' : 'Meet Our Team',
    subtitle: currentLanguage === 'de' 
      ? 'Wir kombinieren Technologie und Empathie, um Kundenservice einfach, schnell und zuverlässig zu machen.'
      : 'We combine technology and empathy to make customer service simple, fast and reliable.',
    cultureTitle: currentLanguage === 'de' ? 'Unsere Unternehmenskultur' : 'Our Company Culture',
    cultureSubtitle: currentLanguage === 'de'
      ? 'Bei Ainova basiert unsere Kultur auf Werten, die uns dazu inspirieren, KI-Lösungen mit echtem Einfluss für Unternehmen und ihre Kunden zu schaffen.'
      : 'At Ainova, our culture is built on values that inspire us to create AI solutions with real impact for businesses and their customers.'
  };

  const renderTeamCard = (member, index) => (
    <article
      key={member.id}
      className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-white backdrop-blur-sm border border-slate-200/60 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.06),0_1px_0_0_rgba(255,255,255,0.6)_inset] will-change-transform transition-transform duration-400 hover:-translate-y-2 hover:shadow-[0_18px_36px_-10px_rgba(0,0,0,0.20)]"
      style={{
        animation: `cardFadeUp .6s cubic-bezier(.16,.84,.44,1) ${
          index * 0.15
        }s both`,
      }}
    >
      <div className="relative w-full aspect-[4/3] bg-white sm:aspect-[16/10] overflow-hidden">
        {member.image && (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.08] p-2 bg-white rounded-3xl"
            sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 opacity-60 mix-blend-multiply pointer-events-none" />
      </div>

      <div className="flex flex-col flex-1 px-5 py-2 sm:px-6 sm:py-6 gap-2">
        <div className="">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2">
            {member.name}
          </h3>
          <p className="text-sm sm:text-base font-semibold text-blue-600 mb-2">
            {member.designation}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-slate-600 line-clamp-4">
          {member.description}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-transparent group-hover:ring-2 group-hover:ring-offset-0 group-hover:ring-blue-500/40 transition-all duration-500" />
      <div
        className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
        style={{ background: "linear-gradient(90deg,#3B82F6,#8B5CF6,#06B6D4)" }}
      />
    </article>
  );

  const renderCultureCard = (item, index) => (
    <div 
      key={item.id} 
      className="bg-white h-70 p-5 rounded-2xl grid gap-5 hover:shadow-lg transition-shadow duration-300"
      style={{
        animation: `cardFadeUp .6s cubic-bezier(.16,.84,.44,1) ${
          (index + 3) * 0.15
        }s both`,
      }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-[#4A8FFF] to-[#C999FF] p-3 rounded-2xl flex items-center justify-center">
        <Image 
          alt={item.name} 
          src={item.image} 
          width={32} 
          height={32}
          className="w-8 h-8 object-contain"
        />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2">
        {item.name}
      </h3>
      <p className="text-sm  text-slate-600  ">
        {item.description}
      </p>
    </div>
  );

  // Debug log to see current language
  console.log('Current language in TeamSection:', currentLanguage);

  return (
    <section className="relative bg-gradient-to-r from-[#508DFF] via-[#A0C1FF] to-[#508DFF] py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-16 left-8 w-60 sm:w-72  h-60 sm:h-72 bg-[radial-gradient(circle_at_center,rgba(216,226,255,0.65),rgba(216,226,255,0)_70%)] blur-2xl animate-pulse" />
        <div
          className="absolute top-72 right-10  w-72 sm:w-96 h-72 sm:h-96 bg-[radial-gradient(circle_at_center,rgba(216,226,255,0.55),rgba(216,226,255,0)_70%)] blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-[radial-gradient(circle_at_center,rgba(216,226,255,0.50),rgba(216,226,255,0)_70%)] blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-30 ">
        {/* Team Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl text-white sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium px-2">
            {content.subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {team.map((member, index) => renderTeamCard(member, index))}
        </div>

        {/* Culture Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20 mt-20 md:mt-32">
          <h2 className="text-3xl text-center text-white sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            {content.cultureTitle}
          </h2>
          <p className="text-base text-center sm:text-lg lg:text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium px-2">
            {content.cultureSubtitle}
          </p>

          {/* Culture Grid */}
          <div className="grid gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 place-items-center mt-20">
            {culture.map((item, index) => renderCultureCard(item, index))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes cardFadeUp {
          from {
            opacity: 0;
            transform: translateY(34px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (prefers-reduced-motion: reduce) {
          article,
          div {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}