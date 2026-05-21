"use client"
import React, { useState } from "react";
import {
  ChevronRight,
  Printer,
  Wifi,
  Download,
  CheckCircle,
} from "lucide-react";
import { ShoppingCart, Search, User, Menu, Star, Heart, X } from "lucide-react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
export default function PrinterSetupGuide() {
  const steps = [
    {
      id: "01",
      title: "Unpack & Power On",
      icon: <Printer className="w-6 h-6" />,
      content:
        "Remove all protective tapes and packing materials from the outside and inside of the printer. Connect the power cord, plug it into an outlet, and turn the printer on.",
      tips: [
        "Check inside the ink cartridge access area for hidden cardboard.",
        "Ensure the printer is on a flat, stable surface.",
      ],
    },
    {
      id: "02",
      title: "Install Cartridges & Paper",
      icon: <CheckCircle className="w-6 h-6" />,
      content:
        "Open the cartridge access door and insert the setup ink cartridges that came in the box. Load plain white paper into the input tray and adjust the paper width guides.",
      tips: [
        "Wait for the printer to align the cartridges.",
        "Do not force the cartridges; they should click into place.",
      ],
    },
    {
      id: "03",
      title: "Connect to Network",
      icon: <Wifi className="w-6 h-6" />,
      content:
        "For wireless setup, use the printer control panel to find the 'Wireless Setup Wizard' or press the Wi-Fi button. For wired, connect an Ethernet cable to your router.",
      tips: [
        "Keep your Wi-Fi password handy.",
        "Ensure your PC and printer are on the same 2.4GHz or 5GHz band.",
      ],
    },
    {
      id: "04",
      title: "Download Drivers",
      icon: <Download className="w-6 h-6" />,
      content:
        "Visit our driver section or the official manufacturer site to download the software package. This ensures your computer can communicate effectively with the hardware.",
      tips: [
        "Choose the 'Full Feature' software for scanning capabilities.",
        "Restart your PC after the installation completes.",
      ],
    },
  ];
  const { cart } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="bg-white border-b sticky top-0 z-50">
      {/* Top Header */}
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo + Hamburger */}
        <div className="flex items-center gap-3">
          
          {/* Hamburger */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            {mobileMenu ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center w-40 h-12">
            <img
              src="/logo.png"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl hidden md:flex border rounded-md overflow-hidden bg-gray-50">
          <input
            type="text"
            placeholder="Search for printers, ink, cartridges..."
            className="flex-grow px-4 py-2 outline-none bg-transparent text-sm"
          />

          <button className="bg-[#004aad] px-5 flex items-center justify-center text-white">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          
          {/* Mail */}
          <div className="hidden lg:flex flex-col text-right">
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Contact Us
            </span>

            <span className="text-sm font-bold text-[#004aad]">
              contact@printerassistance.com
            </span>
          </div>

          {/* User */}
          <div className="relative cursor-pointer group">
            <User className="w-6 h-6 group-hover:text-[#004aad]" />
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer group">
            <Link href="/Cart" className="flex items-center">
              <ShoppingCart className="w-6 h-6 group-hover:text-[#004aad]" />

              <span className="absolute -top-2 -right-2 bg-[#ff4d4d] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-white border-t hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex gap-10 text-[13px] font-bold uppercase tracking-wide py-3">
            <li className="text-[#004aad] cursor-pointer">
              <Link href="/">Home</Link>
            </li>

            <li className="hover:text-[#004aad] cursor-pointer">
              <Link href="/Printers">Printers</Link>
            </li>

            <li className="hover:text-[#004aad] cursor-pointer">
              <Link href="/PrinterSetupGuide">
                Printer Setup Guide
              </Link>
            </li>

            <li className="hover:text-[#004aad] cursor-pointer">
              <Link href="/About">About Us</Link>
            </li>

            <li className="hover:text-[#004aad] cursor-pointer">
              <Link href="/Disclaimer">Disclaimer</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col text-sm font-semibold uppercase">
            
            <li className="border-b">
              <Link
                href="/"
                className="block px-4 py-4 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                Home
              </Link>
            </li>

            <li className="border-b">
              <Link
                href="/Printers"
                className="block px-4 py-4 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                Printers
              </Link>
            </li>

            <li className="border-b">
              <Link
                href="/PrinterSetupGuide"
                className="block px-4 py-4 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                Printer Setup Guide
              </Link>
            </li>

            <li className="border-b">
              <Link
                href="/About"
                className="block px-4 py-4 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/Disclaimer"
                className="block px-4 py-4 hover:bg-gray-100"
                onClick={() => setMobileMenu(false)}
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>

      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Hero Header */}
        <div className="bg-[#007DBA] pt-16 pb-24 px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Complete Printer Setup Guide
          </h1>
          <p className="text-blue-100 max-w-xl mx-auto">
            Follow our expert-verified steps to get your printer from the box to
            your first printout in less than 10 minutes.
          </p>
        </div>

        {/* Steps Container */}
        <div className="max-w-5xl mx-auto px-6 -mt-12">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden border border-gray-100"
              >
                {/* Step Number Sidebar */}
                <div className="bg-gray-800 md:w-24 flex items-center justify-center p-6 md:p-0">
                  <span className="text-3xl font-black text-[#007DBA]">
                    {step.id}
                  </span>
                </div>

                {/* Step Content */}
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 text-[#007DBA] rounded-lg">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.content}
                  </p>

                  <div className="bg-blue-50 rounded-xl p-4">
                    <h4 className="text-sm font-bold text-[#007DBA] uppercase tracking-wider mb-2">
                      Pro Tips:
                    </h4>
                    <ul className="space-y-1">
                      {step.tips.map((tip, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 flex items-start gap-2"
                        >
                          <ChevronRight className="w-4 h-4 mt-0.5 text-[#007DBA] flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting Link Section */}
        <div className="max-w-3xl mx-auto mt-20 px-6">
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Still Stuck?
            </h2>
            <p className="text-gray-500 mb-6">
              If your printer isn't being detected or you're seeing an error
              code during step 4, visit our specialized installation repair
              page.
            </p>
            <button className="bg-[#007DBA] hover:bg-[#006699] text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-blue-200">
              Fix Installation Errors
            </button>
          </div>
        </div>
      </div>
      <div>
      <div className="bg-[#DFDFDF] p-4">
      <h3 className="font-semibold text-2xl lg:text-4xl text-center">
        Disclaimer
      </h3>
      <p className="text-light mt-2 px-2 text-sm lg:text-base py-4">
        This website provides technical support and setup assistance for printer
        devices. We are an independent service provider and are not affiliated
        with, endorsed by, or connected to HP Inc. or any printer manufacturer.
        All brand names, trademarks, and logos mentioned on this website are the
        property of their respective owners.
        <br />
        The information, drivers, and setup tools provided on this website are
        offered for informational and technical support purposes only. While we
        strive to ensure accuracy and reliability, we make no warranties or
        representations regarding the completeness, accuracy, or suitability of
        any content or software provided.
        <br />
        Users are advised to verify compatibility with their specific printer
        models before downloading any drivers or software. We are not
        responsible for any issues that may arise from the use of information or
        tools provided on this website. For official manufacturer support,
        please visit the manufacturer&apos;s official website.
        <br />
        By using this website and its services, you acknowledge that you have
        read, understood, and agreed to this disclaimer. If you do not agree
        with these terms, please do not use this website or download any
        materials from it.
      </p>
    </div>

    <footer className="bg-gray-900 text-gray-300 text-sm">
        <div className="mx-6 md:mx-15 py-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <h2 className="text-white font-semibold mb-3">About Us</h2>
            <p className="leading-6 text-gray-400">
              printerdriverssupport.com provides setup and troubleshooting guides to
              help users easily connect and configure their devices.
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-white font-semibold mb-3">Popular Guides</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/Setup"
                  className="hover:text-white transition"
                >
                  Printer Offline
                </a>
              </li>
              <li>
                <a href="/PrinterSetup" className="hover:text-white transition">
                  Printer Setup
                </a>
              </li>
              <li>
                <a href="/Setup" className="hover:text-white transition">
                  Scanner Setup
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-white font-semibold mb-3">Legal</h2>
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href="/PrivacyPolicy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/RefundReturnPolicy"
                  className="hover:text-white transition"
                >
                  Refund and Return Policy
                </a>
              </li>
              <li>
                <a
                  href="/TermsofUse"
                  className="hover:text-white transition"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/Disclaimer" className="hover:text-white transition">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="text-white font-semibold mb-3">Contact</h2>
            <ul className="space-y-2 text-gray-400">
              <li>E-mail: contact@printerassistance.com</li>
              
            </ul>
            <div className="mt-4 flex space-x-3">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-xs">
          © {new Date().getFullYear()} Printer Assistance. All rights
          reserved.
        </div>
      </footer>
    </div>
    </>
  );
}