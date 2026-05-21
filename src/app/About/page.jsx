"use client";
import React, { useState } from "react";
import { Menu, Search, User, ShoppingCart, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function AboutUs() {
  const { cart, addToCart } = useCart();
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
                <Link href="/PrinterSetupGuide">Printer Setup Guide</Link>
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

      <div className="min-h-screen bg-[#e6e7e8]">
        {/* Hero Section */}
        <div className="bg-[#007DBA] py-16 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your Trusted Partner in Printing
          </h1>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg">
            We bridge the gap between complex hardware and seamless
            productivity. Expert setup, driver solutions, and
            troubleshooting—all in one place.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded by a team of certified hardware technicians,{" "}
                <strong>PrinterSupport</strong> was created to solve the most
                common frustration in the modern office: the dreaded printer
                error.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are a home office user trying to connect a new
                wireless inkjet or a large enterprise managing a fleet of
                LaserJet Pro machines, we provide the technical resources and
                direct driver access you need to keep working without
                interruption.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white p-4 rounded-2xl shadow-2xl">
                <img
                  src="/tech-support.jpg"
                  alt="Printer Technology"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-[#007DBA]">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Fast Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                We know your time is valuable. Our automated driver delivery
                system gets you back to printing in minutes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-[#007DBA]">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Verified Drivers
              </h3>
              <p className="text-gray-600 text-sm">
                All software links are scanned and verified to be safe,
                original, and compatible with your specific OS.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-[#007DBA]">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600 text-sm">
                Our live chat team consists of real technicians, not bots, ready
                to solve error codes like 0x00000709.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-800 py-12 px-6 text-center text-white mb-20 mx-6 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Still having trouble with your installation?
          </h2>
          <p className="mb-8 text-gray-400">
            Our technicians are available 24/7 to assist with remote setup.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#007DBA] hover:bg-[#006699] px-8 py-3 rounded-full font-bold transition-all">
              Start Live Chat
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full font-bold transition-all">
              View Troubleshooting Guide
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
            This website provides technical support and setup assistance for
            printer devices. We are an independent service provider and are not
            affiliated with, endorsed by, or connected to HP Inc. or any printer
            manufacturer. All brand names, trademarks, and logos mentioned on
            this website are the property of their respective owners.
            <br />
            The information, drivers, and setup tools provided on this website
            are offered for informational and technical support purposes only.
            While we strive to ensure accuracy and reliability, we make no
            warranties or representations regarding the completeness, accuracy,
            or suitability of any content or software provided.
            <br />
            Users are advised to verify compatibility with their specific
            printer models before downloading any drivers or software. We are
            not responsible for any issues that may arise from the use of
            information or tools provided on this website. For official
            manufacturer support, please visit the manufacturer&apos;s official
            website.
            <br />
            By using this website and its services, you acknowledge that you
            have read, understood, and agreed to this disclaimer. If you do not
            agree with these terms, please do not use this website or download
            any materials from it.
          </p>
        </div>

        <footer className="bg-gray-900 text-gray-300 text-sm">
          <div className="mx-6 md:mx-15 py-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12">
            {/* Column 1 */}
            <div>
              <h2 className="text-white font-semibold mb-3">About Us</h2>
              <p className="leading-6 text-gray-400">
                printerdriverssupport.com provides setup and troubleshooting
                guides to help users easily connect and configure their devices.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <h2 className="text-white font-semibold mb-3">Popular Guides</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/Setup" className="hover:text-white transition">
                    Printer Offline
                  </a>
                </li>
                <li>
                  <a
                    href="/PrinterSetup"
                    className="hover:text-white transition"
                  >
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
                  <a href="/TermsofUse" className="hover:text-white transition">
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
