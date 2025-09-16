"use client";

import FAQSection from "@/components/faq-section";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/testimonials-section";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";
import { useRef } from "react"; // Import useRef

export default function Home() {
  const { t } = useLanguage();
  const faqSectionRef = useRef(null); // Create a reference for FAQSection

  // Scroll to the FAQ section
  const scrollToFAQ = () => {
    faqSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative z-20">
     

      <HeroSection />
      <HowItWorksSection />

    
      <FAQSection ref={faqSectionRef} />

      
    </div>
  );
}
