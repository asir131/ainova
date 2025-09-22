"use client";

import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
import LanguageSelector from "./language-selector";
import MobileMenu from "./mobile-menu";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";

const Navigation = () => {
  const { t } = useLanguage();
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const navItems = [
    { name: t("home"), href: "/" },
    // { name: t("services"), href: "/services" },
    { name: t("HowItWorks"), href: "/how-it-works" },
    { name: t("team"), href: "/team" },
    { name: t("contactUs"), href: "/contact" },
  ];

  return (
    <nav
      className={`w-full z-30 relative px-4 md:px-6 py-4 ${
        isHomePage ? "bg-transparent" : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-full md:mx-auto flex  items-center justify-between md:justify-around">
        <NavLink
          href="/"
          className="flex items-center space-x-2 hover:text-gray-800"
        >
          
          <span className="text-lg md:text-xl font-semibold text-gray-800">
            <Image src="/logo.png" width={100} height={100} alt="" />
          </span>
        </NavLink>

        <div className="hidden xl:flex items-center md:ml-40 space-x-8">
          {navItems.map((item, index) => (
            <NavLink key={index} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex  font-semibold rounded-lg bg-[#DEE3FF] items-center space-x-4">
          <LanguageSelector />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
