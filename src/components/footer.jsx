import Image from "next/image"
import { footerContent } from "../../public/footer-content"



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
              <a href="/" className="block text-[#121D2E] hover:text-white transition-colors text-sm">
                {content.links.home}
              </a>
              <a href="/about" className="block text-[#121D2E] hover:text-white transition-colors text-sm">
                {content.links.aboutUs}
              </a>
              <a href="/services" className="block text-[#121D2E] hover:text-white transition-colors text-sm">
                {content.links.services}
              </a>
              <a href="/team" className="block text-[#121D2E] hover:text-white transition-colors text-sm">
                {content.links.team}
              </a>
              <a href="/contact" className="block text-[#121D2E] hover:text-white transition-colors text-sm">
                {content.links.contactUs}
              </a>
              <a href="/privacy" className="block text-[#121D2E] hover:text-white transition-colors text-sm">
                {content.links.privacyPolicy}
              </a>
            </nav>
          </div>

          {/* Stay Updated */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">{content.stayUpdated}</h3>
            <p className="text-[#121D2E] text-sm leading-relaxed">{content.stayUpdatedDesc}</p>
            

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium">{content.followUs}</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <span className="text-sm font-bold">ig</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <span className="text-sm font-bold">tw</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
