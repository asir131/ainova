import Image from "next/image"
import { footerContent } from "../../public/footer-content"
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";



export default function Footer({ language = "en" }) {
  const content = footerContent[language] || footerContent.en

  return (
    <footer className="bg-white text-[#121D2E] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" height={100} width={100} alt="" />
            </div>
            <h2 className="text-[#121D2E] font-semibold">AINOVA: Your 24/7 Digital Customer Assistant</h2>
            <p className="text-[#121D2E] text-sm leading-relaxed max-w-sm">{content.description}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{content.quickLinks}</h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-[#121D2E]  transition-colors text-sm">
                {content.links.home}
              </Link>
              <Link href="/how-it-works" className="block text-[#121D2E]  transition-colors text-sm">
                {content.links.howItWorks}
              </Link>
              {/* <a href="/services" className="block text-[#121D2E] hover:text-white transition-colors text-sm">
                {content.links.services}
              </a> */}
              <Link href="/team" className="block text-[#121D2E]  transition-colors text-sm">
                {content.links.team}
              </Link>
              <Link href="/contact" className="block text-[#121D2E]  transition-colors text-sm">
                {content.links.contactUs}
              </Link>
              <Link href="/privacy" className="block text-[#121D2E]  transition-colors text-sm">
                {content.links.privacyPolicy}
              </Link>
            </nav>
          </div>

          {/* Stay Updated */}
          <div className="space-y-6">
           
            

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold">{content.followUs}</h4>
              <div className="flex space-x-3">
                
                <a
                  href="https://www.instagram.com/accounts/login/?next=%2Fainova.official%2F&source=omni_redirect"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                 <FaInstagram />

                </a>
                <a
                  href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A108208920&keywords=ainova&origin=RICH_QUERY_SUGGESTION&position=0&searchId=abfeb357-e85e-4434-83f0-5cddf3c45aef&sid=yoo&spellCorrectionEnabled=false"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <CiLinkedin />

                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
