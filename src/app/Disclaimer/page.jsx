"use client";
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

function Disclaimer() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="relative max-h-screen w-full">
        <a href="/DownloadPrinterDrivers">
          <Image src="/hero-img.jpg" height={100} width={1500} alt="logo" />
        </a>
      </div>

      <div className="w-full z-10 relative bg-white">
        <nav className="hidden bg-[#007CBF] text-white h-15 md:flex lg:flex items-center px-6">
          <ul className="flex gap-5">
            <li>
              <a href="/FixOfflinePrinter">Printer Offline</a>
            </li>
            <li>
              <a href="/PrinterSetup">Printer Setup</a>
            </li>
            <li>
              <a href="/ScannerSetUp">Scanner Setup</a>
            </li>
            <li>
              <a href="/PrivacyPolicy">Privacy Policy</a>
            </li>
            <li>
              <a href="/Disclaimer">Disclaimer</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Nav */}
        <div className="md:hidden bg-[#007CBF] text-white px-6 py-3 flex justify-between items-center">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="md:hidden bg-[#007CBF] text-white px-6 py-4 space-y-3">
            <a href="/FixOfflinePrinter" className="block hover:text-gray-200">
              Printer Offline
            </a>
            <a href="/PrinterSetup" className="block hover:text-gray-200">
              Printer Setup
            </a>
            <a href="/ScannerSetUp" className="block hover:text-gray-200">
              Scanner Setup
            </a>
            <a href="/PrivacyPolicy" className="block hover:text-gray-200">
              Privacy Policy
            </a>
            <a href="/Disclaimer" className="block hover:text-gray-200">
              Disclaimer
            </a>
          </div>
        )}
      </div>


      <div className="mt-6 px-3">
        <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
          <p>
            Welcome to printerassistance.com The information provided on this website is intended to offer users helpful, step-by-step guides for setting up printers and troubleshooting common printing issues. Please read the following disclaimer carefully:
          </p>
              <li className="font-semibold">No Affiliation with Printer Manufacturers</li>
              <ul className="list-none list-inside px-4">
                <li>printerassistance.com is an independent, third-party resource for printer setup guides. We are not affiliated with, endorsed by, or officially partnered with any printer manufacturers (such as HP, Canon, Epson, etc.). The brand names, logos, and trademarks mentioned on our website are the property of their respective owners.</li>
              </ul>

              <li className="font-semibold">Accuracy of Information</li>
              <ul className="list-none list-inside px-4">
                <li>While we strive to provide accurate and up-to-date information, we cannot guarantee that every guide is fully accurate, complete, or applicable to every printer model or scenario. Users are encouraged to consult their printer’s official manual or contact the manufacturer’s customer service for additional assistance if needed.</li>
              </ul>

              <li className="font-semibold">No Charge for Basic Setup Information</li>
              <ul className="list-none list-inside px-4">
                <li>The basic printer setup information provided on our website is completely free. We do offer paid services for advanced service or personalized troubleshooting, but this is clearly communicated, and users are never charged for the basic setup guidance. Please note that some manufacturers may provide similar services for free directly through their own customer service channels.</li>
              </ul>

              <li className="font-semibold">On Call Services</li>
              <ul className="list-none list-inside px-4">
                <li>If you need additional assistance for more in-depth troubleshooting or personalized service, we offer oncall service which is paid. The costs associated with this paid service are clearly communicated to users.</li>
              </ul>

              <li className="font-semibold">No Phishing or Data Collection</li>
              <ul className="list-none list-inside px-4">
                <li>We do not collect or store any sensitive personal data from our visitors unless explicitly stated. Our website does not engage in phishing or deceptive practices. Any information provided by users for optional services or service is handled securely and in accordance with privacy regulations.</li>
              </ul>

              <li className="font-semibold">Advertising Disclosure</li>
              <ul className="list-none list-inside px-4">
                <li>We may display advertisements on our website, which may include affiliate links. These ads help service the continued operation of the site. Clicking on an ad or affiliate link may result in a commission for us, but this does not influence the objectivity or accuracy of the guides and content we provide.</li>
              </ul>

              <li className="font-semibold">External Links</li>
              <ul className="list-none list-inside px-4">
                <li>Our website may contain external links to other websites. These links are provided for your convenience and reference only. We are not responsible for the content, accuracy, or privacy practices of any external sites linked from our website. By clicking on these links, you acknowledge that you do so at your own risk.</li>
              </ul>

              <li className="font-semibold">Limitation of Liability</li>
              <ul className="list-none list-inside px-4">
                <li>Printer Steps and its affiliates, employees, or agents are not liable for any loss, damage, or inconvenience caused by the use of the information provided on this website. By using the content, you acknowledge that any actions you take based on the provided guides are at your own risk. We recommend consulting the printer’s official manual or customer service for additional assistance or clarification.</li>
              </ul>

              <li className="font-semibold">Responsibility for Actions</li>
              <ul className="list-none list-inside px-4">
                <li>The content on this website is provided for informational purposes only. Users are responsible for ensuring that any actions they take based on the guides provided are in compliance with local laws, manufacturer guidelines, and safety precautions.</li>
              </ul>

              <p>By using our website, you acknowledge and agree to these terms and disclaimers. If you do not agree with any of the terms, please refrain from using our website.</p>
              
            </ol>

      </div>
      <Footer/>
    </div>
  );
}

export default Disclaimer;
