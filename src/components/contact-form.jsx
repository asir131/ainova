import React, { useState } from "react"
import { z } from "zod"

function SuccessModal({ isOpen, onClose, content }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content.successTitle}</h3>
        <p className="text-gray-600 mb-6">{content.successDescription}</p>
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-[#658DFF] to-[#E5A8FF] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
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
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 characters")
    .max(15, "Phone must be less than 15 characters")
    .optional()
    .or(z.literal('')), // Allow empty string
  message: z
    .string()
    .min(50, "Message must be at least 50 characters")
    .max(500, "Message must be less than 500 characters"),
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
    
    // Clear general submit status
    if (submitStatus) setSubmitStatus("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    setSubmitStatus("")

    try {
      // Validate form data using Zod
      const validatedData = contactSchema.parse(formData)

      // Prepare data for API (remove empty phone if needed)
      const apiData = {
        ...validatedData,
        phone: validatedData.phone || undefined // Send undefined instead of empty string
      }

      // Call your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      })

      const result = await response.json()
     console.log("apiData",result);
     
      if (response.ok) {
        // Success case
        setShowSuccessModal(true)
        setFormData({ name: "", email: "", message: "", phone: "" })
        setSubmitStatus("success")
      } else {
        // Handle API error responses
        setSubmitStatus("error")
        if (result.errors) {
          // If API returns field-specific errors
          setErrors(result.errors)
        } else if (result.message) {
          // If API returns a general error message
          setErrors({ general: result.message })
        } else {
          setErrors({ general: "Failed to send message. Please try again." })
        }
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle Zod validation errors
        const fieldErrors = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0]] = err.message
          }
        })
        setErrors(fieldErrors)
      } else {
        // Handle network errors or other exceptions
        console.error("Form submission error:", error)
        setSubmitStatus("error")
        setErrors({ general: "Network error. Please check your connection and try again." })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false)
    setSubmitStatus("")
  }

  const baseFieldClass = "w-full px-4 py-3 border border-[#828282] rounded-[10px] bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#658DFF] focus:border-transparent transition-all"

  return (
    <div>
      <div className="bg-transparent md:ml-35 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{content.formTitle}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              className={`${baseFieldClass} ${errors.name ? 'border-red-500' : 'border-[#828282]'}`}
              disabled={isSubmitting}
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
              className={`${baseFieldClass} ${errors.email ? 'border-red-500' : 'border-[#828282]'}`}
              disabled={isSubmitting}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`${baseFieldClass} ${errors.phone ? 'border-red-500' : 'border-[#828282]'}`}
              disabled={isSubmitting}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
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
              className={`${baseFieldClass} resize-none ${errors.message ? 'border-red-500' : 'border-[#828282]'}`}
              disabled={isSubmitting}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
              <p className={`text-sm ${formData.message.length < 50 ? 'text-red-500' : 'text-green-600'} ml-auto`}>
                {formData.message.length}/50 characters
              </p>
            </div>
            {formData.message.length > 0 && formData.message.length < 50 && (
              <p className="mt-1 text-sm text-amber-600">
                {50 - formData.message.length} more characters required
              </p>
            )}
          </div>

          {/* General Error Message */}
          {errors.general && (
            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {errors.general}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#658DFF] to-[#E5A8FF] text-white font-medium py-3 px-6 rounded-lg transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transform hover:scale-[1.02]"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {content.submittingText}
              </div>
            ) : (
              content.submitButton
            )}
          </button>
        </form>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={closeSuccessModal}
        content={content}
      />
    </div>
  )
}