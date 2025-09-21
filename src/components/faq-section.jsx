"use client"

import { useLanguage } from "@/context/language-context"
import { useState } from "react"

const faqData = {
  en: {
    title: "FAQ",
    subtitle:
      "This section gives you clear and simple answers about how our AI assistant helps your business handle calls, messages, and customer requests more efficiently.",
    faqs: [
      {
        question: "How does the Anova AI assistant work?",
        answer:
          "customer calls, WhatsApp messages, and emails automatically. It understands requests, provides answers, and notes down appointments or inquiries for you.",
      },
      {
        question: "How quickly can Anova be set up for my business?",
        answer:
          "Anova can be set up for your business in just a few minutes. Our streamlined onboarding process gets you up and running quickly with minimal configuration required.",
      },
      {
        question: "Can I modify or cancel my booking?",
        answer:
          "Yes, you can easily modify or cancel your booking through your account dashboard or by contacting our support team. Changes can be made up to 24 hours before your scheduled appointment.",
      },
      {
        question: "What if I need help during the booking process?",
        answer:
          "Our AI assistant is available 24/7 to help guide you through the booking process. You can also contact our support team via chat, email, or phone for additional assistance.",
      },
      {
        question: "Do I need to create an account to book a service?",
        answer:
          "While you can browse services without an account, creating one allows you to track bookings, save preferences, and receive updates about your appointments.",
      },
      {
        question: "Can I modify or cancel my booking?",
        answer:
          "Yes, you can easily modify or cancel your booking through your account dashboard or by contacting our support team. Changes can be made up to 24 hours before your scheduled appointment.",
      },
      {
        question: "What if I need help during the booking process?",
        answer:
          "Our AI assistant is available 24/7 to help guide you through the booking process. You can also contact our support team via chat, email, or phone for additional assistance.",
      },
      {
        question: "Do I need to create an account to book a service?",
        answer:
          "While you can browse services without an account, creating one allows you to track bookings, save preferences, and receive updates about your appointments.",
      },
      {
        question: "Can I modify or cancel my booking?",
        answer:
          "Yes, you can easily modify or cancel your booking through your account dashboard or by contacting our support team. Changes can be made up to 24 hours before your scheduled appointment.",
      },
      {
        question: "What if I need help during the booking process?",
        answer:
          "Our AI assistant is available 24/7 to help guide you through the booking process. You can also contact our support team via chat, email, or phone for additional assistance.",
      },
      {
        question: "Do I need to create an account to book a service?",
        answer:
          "While you can browse services without an account, creating one allows you to track bookings, save preferences, and receive updates about your appointments.",
      },
    ],
  },
  de: {
    title: "FAQ",
    subtitle:
      "Dieser Abschnitt gibt Ihnen klare und einfache Antworten darauf, wie unser KI-Assistent Ihrem Unternehmen hilft, Anrufe, Nachrichten und Kundenanfragen effizienter zu bearbeiten.",
    faqs: [
      {
        question: "Wie funktioniert der Anova AI-Assistent?",
        answer:
          "Der Anova AI-Assistent bearbeitet automatisch Kundenanrufe, WhatsApp-Nachrichten und E-Mails. Er versteht Anfragen, gibt Antworten und notiert Termine oder Anfragen für Sie.",
      },
      {
        question: "Wie schnell kann Anova für mein Unternehmen eingerichtet werden?",
        answer:
          "Anova kann in nur wenigen Minuten für Ihr Unternehmen eingerichtet werden. Unser optimierter Onboarding-Prozess bringt Sie schnell zum Laufen mit minimaler Konfiguration.",
      },
      {
        question: "Kann ich meine Buchung ändern oder stornieren?",
        answer:
          "Ja, Sie können Ihre Buchung einfach über Ihr Konto-Dashboard ändern oder stornieren oder unser Support-Team kontaktieren. Änderungen können bis zu 24 Stunden vor Ihrem geplanten Termin vorgenommen werden.",
      },
      {
        question: "Was ist, wenn ich Hilfe während des Buchungsprozesses benötige?",
        answer:
          "Unser AI-Assistent steht Ihnen rund um die Uhr zur Verfügung, um Sie durch den Buchungsprozess zu führen. Sie können auch unser Support-Team per Chat, E-Mail oder Telefon für zusätzliche Hilfe kontaktieren.",
      },
      {
        question: "Muss ich ein Konto erstellen, um einen Service zu buchen?",
        answer:
          "Während Sie Services ohne Konto durchsuchen können, ermöglicht Ihnen die Erstellung eines Kontos, Buchungen zu verfolgen, Präferenzen zu speichern und Updates über Ihre Termine zu erhalten.",
      },
      {
        question: "Kann ich meine Buchung ändern oder stornieren?",
        answer:
          "Ja, Sie können Ihre Buchung einfach über Ihr Konto-Dashboard ändern oder stornieren oder unser Support-Team kontaktieren. Änderungen können bis zu 24 Stunden vor Ihrem geplanten Termin vorgenommen werden.",
      },
      {
        question: "Was ist, wenn ich Hilfe während des Buchungsprozesses benötige?",
        answer:
          "Unser AI-Assistent steht Ihnen rund um die Uhr zur Verfügung, um Sie durch den Buchungsprozess zu führen. Sie können auch unser Support-Team per Chat, E-Mail oder Telefon für zusätzliche Hilfe kontaktieren.",
      },
      {
        question: "Muss ich ein Konto erstellen, um einen Service zu buchen?",
        answer:
          "Während Sie Services ohne Konto durchsuchen können, ermöglicht Ihnen die Erstellung eines Kontos, Buchungen zu verfolgen, Präferenzen zu speichern und Updates über Ihre Termine zu erhalten.",
      },
      {
        question: "Kann ich meine Buchung ändern oder stornieren?",
        answer:
          "Ja, Sie können Ihre Buchung einfach über Ihr Konto-Dashboard ändern oder stornieren oder unser Support-Team kontaktieren. Änderungen können bis zu 24 Stunden vor Ihrem geplanten Termin vorgenommen werden.",
      },
      {
        question: "Was ist, wenn ich Hilfe während des Buchungsprozesses benötige?",
        answer:
          "Unser AI-Assistent steht Ihnen rund um die Uhr zur Verfügung, um Sie durch den Buchungsprozess zu führen. Sie können auch unser Support-Team per Chat, E-Mail oder Telefon für zusätzliche Hilfe kontaktieren.",
      },
      {
        question: "Muss ich ein Konto erstellen, um einen Service zu buchen?",
        answer:
          "Während Sie Services ohne Konto durchsuchen können, ermöglicht Ihnen die Erstellung eines Kontos, Buchungen zu verfolgen, Präferenzen zu speichern und Updates über Ihre Termine zu erhalten.",
      },
    ],
  },
}


export default function FAQSection() {
  const { currentLanguage } = useLanguage()
  const [openIndex, setOpenIndex] = useState(-1) // Start with all items closed instead of first item open
  const content = faqData[currentLanguage]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index) // Close other items when opening a new one (accordion behavior)
  }

  return (
    <section className="py-20 px-6 bg-[#121D2E] text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl  font-bold text-whiteb-4 pb-5">{content.title}</h2>
          <p className="text-white text-sm max-w-2xl mx-auto leading-relaxed">{content.subtitle}</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 ">
          {content.faqs.map((faq, index) => (
            <div
              key={index}
              className={`main-div group rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? "bg-blue-50 border border-blue-100"
                  : "bg-[#121D2E]  border border-purple-100 hover:bg-purple-100"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full  px-6 py-5 text-left flex items-center justify-between transition-colors"
              >
                <span 
                className={`font-medium  group-hover:text-[#121D2E]  pr-4 text-base ${
                openIndex === index
                  ? " text-[#121D2E]"
                  : " text-white "
              }`}
                >
                  {index + 1}.{faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2">
                    <p className="text-[#121D2E] leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
