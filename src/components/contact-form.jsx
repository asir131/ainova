import React, { useState } from "react"
import { z } from "zod"

function SuccessModal({ isOpen, onClose, content }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content.successTitle}</h3>
        <p className="text-gray-600 mb-6">{content.successDescription}</p>
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-[#658DFF] to-[#E5A8FF] text-white font-medium py-3 px-6 rounded-lg"
        >
          {content.closeButton}
        </button>
      </div>
    </div>
  )
}

// Zod schema
const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .min(4, "Email must be at least 4 characters")
    .max(50, "Email must be less than 50 characters")
    .email("Please enter a valid email address")
    .refine((email) => email.includes("@"), "Email must contain @ symbol"),
  message: z
    .string()
    .min(4, "Message must be at least 4 characters")
    .max(50, "Message must be less than 50 characters"),
})

export default function ContactForm() {
  const content = {
    formTitle: "Get in Touch",
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    messageLabel: "Message",
    messagePlaceholder: "Enter your message",
    submitButton: "Send Message",
    submittingText: "Sending...",
    successTitle: "Message Sent Successfully!",
    successDescription: "Thank you for your message. We'll get back to you within 24 hours.",
    closeButton: "Close"
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [wordCountError, setWordCountError] = useState(false)

  

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
    if (submitStatus) setSubmitStatus("")
    if (wordCountError) setWordCountError(false)
  }
 
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    setSubmitStatus("")
    setWordCountError(false)

    try {
      
      const wordCount = formData.message.length
      
      
      if (wordCount < 50) {
        
        setWordCountError(true)
        setIsSubmitting(false)
        return
      }

      const validatedData = contactSchema.parse(formData)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      })

      if (response.ok) {
        setShowSuccessModal(true)
        setFormData({ name: "", email: "", message: "", phone: "" })
        setSubmitStatus("success")
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      if (error instanceof z.ZodError && error.errors) {
        const fieldErrors = {}
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message
        })
        setErrors(fieldErrors)
      } else {
        console.error("Form submission error:", error)
        setSubmitStatus("error")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeSuccessModal = () => setShowSuccessModal(false)

  
  const baseFieldClass =
    "w-full px-4 py-3 border border-[#828282] rounded-[10px] bg-white text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-0"

  return (
    <div>
      <div className="bg-transparent md:ml-35 rounded-lg p-8 ">
        

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{content.formTitle}</h2>

        <div className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {content.nameLabel}
            </label>
           <input
  type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder={content.namePlaceholder}
  className={`${baseFieldClass} text-black `}
  style={{ backgroundColor: 'transparent' }}
/>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

            {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {content.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={content.emailPlaceholder}
              className={`${baseFieldClass} text-black `}
  style={{ backgroundColor: 'transparent' }} 
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
{/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`${baseFieldClass} text-black `}
  style={{ backgroundColor: 'transparent' }} 
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              {content.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={content.messagePlaceholder}
              rows={5}
              className={`${baseFieldClass} text-black resize-none`}
  style={{ backgroundColor: 'transparent' }} 
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
              <p className="text-sm text-gray-500 ml-auto">{formData.message.length}/50 characters</p>
            </div>
          </div>
          {wordCountError && (
          <div className="mb-6 px-4 py-2 bg-red-50 border text-sm border-red-200 rounded-lg text-red-700">
            We need at least 50 words to move forward. Can you add a few more thoughts or ideas? 
          </div>
        )}

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#658DFF]  to-[#E5A8FF]  text-white font-medium py-3 px-6 rounded-lg transition-colors text-sm"
          >
            {isSubmitting ? content.submittingText : content.submitButton}
          </button>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={closeSuccessModal}
        content={{
          successTitle: content.successTitle || "Message Sent Successfully!",
          successDescription:
            content.successDescription || "Thank you for your message. We'll get back to you within 24 hours.",
          closeButton: content.closeButton || "Close",
        }}
      />
    </div>
  )
}