"use client";

import ContactForm from "./contact-form";
import { contactContent } from "../data/contact-content";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";

export default function ContactWrapper() {
  const { currentLanguage } = useLanguage();
  const content = contactContent[currentLanguage];

  return (
    <div className="h-full  w-full ">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600 mb-2">{content.subtitle}</p>
          <p className="text-gray-500">
            {content.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-30 items-start">
          {/* Contact Form */}
          <div className="order-2 lg:order-1 items-center">
            <ContactForm content={content} />
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <div className=" rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                {content.contactInfo.title}
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    > 
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {content.contactInfo.email.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {content.contactInfo.email.value}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {content.contactInfo.email.description}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {content.contactInfo.phone.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {content.contactInfo.phone.value}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {content.contactInfo.phone.description}
                    </p>
                  </div>
                </div>
               

               
                {/* Response Time */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {content.contactInfo.response.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {content.contactInfo.response.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
