"use client"

import { useState } from "react"
import NavLink from "./nav-link"
import { useLanguage } from "@/context/language-context"


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { name: t("home"), href: "/" },
   
    { name: t("How it works"), href: "/how-it-works" },
    { name: t("team"), href: "/team" },
    { name: t("contactUs"), href: "/contact" },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="xl:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
        ></span>
        <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
        <span
          className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-black/50 bg-opacity-50" onClick={closeMenu}>
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg">
            <div className="p-6">
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
                aria-label="Close menu"
              >
                <span className="w-6 h-0.5 bg-gray-800 rotate-45 absolute"></span>
                <span className="w-6 h-0.5 bg-gray-800 -rotate-45 absolute"></span>
              </button>

              <div className="mt-12 space-y-6">
                {navItems.map((item, index) => (
                  <div key={index} onClick={closeMenu}>
                    <NavLink href={item.href} className="block text-lg py-2">
                      {item.name}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
