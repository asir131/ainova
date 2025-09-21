"use client"

import { useLanguage } from "@/context/language-context"
import { useState } from "react"

const faqData = {
  en: {
  "title": "FAQ",
  "subtitle": "This section gives you clear and simple answers about how our AI assistant helps your business handle calls, messages, and customer requests more efficiently.",
  "faqs": [
    {
      "question": "How does the Ainova AI assistant work?",
      "answer": "Customer calls, WhatsApp messages, and emails automatically. It understands requests, provides answers, and notes down appointments or inquiries for you."
    },
    {
      "question": "Can Ainova answer phone calls, WhatsApp, and emails?",
      "answer": "Yes, Ainova can handle phone calls, WhatsApp messages, and emails, allowing your business to respond to customer inquiries seamlessly across various channels."
    },
    {
      "question": "Is the AI available 24/7 for my customers?",
      "answer": "Yes, Ainova is always available, 24/7, ensuring your customers can reach out at any time and get the support they need without delay."
    },
    {
      "question": "Do I need special hardware or installation?",
      "answer": "No, Ainova is a cloud-based AI assistant, so no special hardware or installation is required. All you need is an internet connection to get started."
    },
    {
      "question": "Do I need to create an account to book a service?",
      "answer": "In most cases, yes, customers may need to create an account to book services, but the process is quick and easy to ensure a smooth experience."
    },
    {
      "question": "How quickly can Ainova be set up for my business?",
      "answer": "Ainova can typically be set up within a few hours, depending on your business needs. Our team provides all the necessary guidance to ensure a smooth and fast setup."
    },
    {
      "question": "Can the AI handle multiple customers at the same time?",
      "answer": "Yes, Ainova is designed to handle multiple customers simultaneously, making it efficient and able to scale according to demand without compromising on service quality."
    },
    {
      "question": "What languages does Ainova support?",
      "answer": "Ainova supports multiple languages, allowing you to provide customer support in various languages to cater to your diverse clientele."
    },
    {
      "question": "Will my customers know they are speaking to an AI?",
      "answer": "While Ainova is designed to be as human-like as possible, customers may be informed that they are interacting with an AI, especially when it enhances transparency and trust."
    },
    {
      "question": "Can Ainova integrate with my existing systems (CRM, booking tools, etc.)",
      "answer": "Yes, Ainova can integrate with your existing systems, such as CRMs and booking tools, to ensure seamless communication and streamline your business processes."
    },
    {
      "question": "Is the data secure and GDPR compliant?",
      "answer": "Yes, we take data security seriously. Ainova is fully GDPR-compliant, and we ensure that your customers' data is securely handled, respecting privacy regulations."
    }
  ]
},

  de: {
  "title": "Häufig gestellte Fragen",
  "subtitle": "Dieser Abschnitt gibt Ihnen klare und einfache Antworten darauf, wie unser AI-Assistent Ihrem Unternehmen hilft, Anrufe, Nachrichten und Kundenanfragen effizienter zu bearbeiten.",
  "faqs": [
    {
      "question": "Wie funktioniert der Ainova AI-Assistent?",
      "answer": "Der AI-Assistent nimmt automatisch Kundenanrufe, WhatsApp-Nachrichten und E-Mails entgegen. Er versteht Anfragen, gibt Antworten und notiert Termine oder Anfragen für Sie."
    },
    {
      "question": "Kann Ainova Telefonanrufe, WhatsApp und E-Mails beantworten?",
      "answer": "Ja, Ainova kann Telefonanrufe, WhatsApp-Nachrichten und E-Mails bearbeiten, sodass Ihr Unternehmen Kundenanfragen nahtlos über verschiedene Kanäle beantworten kann."
    },
    {
      "question": "Ist der AI-Assistent 24/7 für meine Kunden verfügbar?",
      "answer": "Ja, Ainova ist jederzeit, 24/7, verfügbar, sodass Ihre Kunden jederzeit Kontakt aufnehmen und die Unterstützung erhalten können, die sie benötigen."
    },
    {
      "question": "Benötige ich spezielle Hardware oder eine Installation?",
      "answer": "Nein, Ainova ist ein cloudbasierter AI-Assistent, daher ist keine spezielle Hardware oder Installation erforderlich. Alles, was Sie benötigen, ist eine Internetverbindung, um loszulegen."
    },
    {
      "question": "Muss ich ein Konto erstellen, um einen Service zu buchen?",
      "answer": "In den meisten Fällen ja, Kunden müssen ein Konto erstellen, um Dienstleistungen zu buchen, aber der Prozess ist schnell und einfach, um eine reibungslose Erfahrung zu gewährleisten."
    },
    {
      "question": "Wie schnell kann Ainova für mein Unternehmen eingerichtet werden?",
      "answer": "Ainova kann in der Regel innerhalb weniger Stunden eingerichtet werden, abhängig von den Bedürfnissen Ihres Unternehmens. Unser Team stellt alle notwendigen Anleitungen zur Verfügung, um eine schnelle und reibungslose Einrichtung zu gewährleisten."
    },
    {
      "question": "Kann der AI-Assistent mehrere Kunden gleichzeitig betreuen?",
      "answer": "Ja, Ainova ist so konzipiert, dass er mehrere Kunden gleichzeitig betreuen kann, was ihn effizient und skalierbar macht, um der Nachfrage gerecht zu werden, ohne die Servicequalität zu beeinträchtigen."
    },
    {
      "question": "Welche Sprachen unterstützt Ainova?",
      "answer": "Ainova unterstützt mehrere Sprachen, sodass Sie Ihren Kundenservice in verschiedenen Sprachen anbieten können, um Ihrer vielfältigen Kundschaft gerecht zu werden."
    },
    {
      "question": "Werden meine Kunden wissen, dass sie mit einem AI-Assistenten sprechen?",
      "answer": "Während Ainova so menschlich wie möglich gestaltet ist, können Kunden darüber informiert werden, dass sie mit einem AI-Assistenten interagieren, insbesondere um Transparenz und Vertrauen zu fördern."
    },
    {
      "question": "Kann Ainova in meine bestehenden Systeme (CRM, Buchungstools usw.) integriert werden?",
      "answer": "Ja, Ainova kann in Ihre bestehenden Systeme wie CRM und Buchungstools integriert werden, um eine nahtlose Kommunikation zu gewährleisten und Ihre Geschäftsprozesse zu optimieren."
    },
    {
      "question": "Ist die Daten sicher und GDPR-konform?",
      "answer": "Ja, wir legen großen Wert auf Datensicherheit. Ainova ist vollständig GDPR-konform, und wir stellen sicher, dass die Daten Ihrer Kunden sicher verarbeitet werden und die Datenschutzvorschriften eingehalten werden."
    }
  ]
}
,
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
