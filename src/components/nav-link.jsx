"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ href, children, className = "" }) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`text-[18px] font-medium transition-colors hover:text-[#4D7BFB] ${
        isActive ? "text-[#4D7BFB] font-medium" : "text-[#202020]"
      } ${className}`}
    >
      {children}
    </Link>
  )
}

export default NavLink
