"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Footer from "@/components/Footer";

function RefundPolicy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="w-full z-10 relative bg-white">
        {/* Desktop Navigation */}
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
              <a href="/RefundPolicy">Refund Policy</a>
            </li>
            <li>
              <a href="/Disclaimer">Disclaimer</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-[#007CBF] text-white px-6 py-3 flex justify-between items-center">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
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
            <a href="/RefundPolicy" className="block hover:text-gray-200">
              Refund Policy
            </a>
            <a href="/Disclaimer" className="block hover:text-gray-200">
              Disclaimer
            </a>
          </div>
        )}
      </div>

      {/* Refund Policy Content */}
      <div className="mt-6 px-3">
        <h1 className="text-2xl lg:text-4xl font-semibold text-center">
          REFUND POLICY
        </h1>

        <p className="mt-5 px-4 lg:text-base">
          At printerassistance.com, customer satisfaction is our top priority.
          We strive to provide reliable technical support and services. Please
          review our refund policy carefully before purchasing any service.
        </p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">
          Eligibility for Refunds
        </h2>

        <p className="mt-3 px-4 lg:text-base">
          Refund requests will be considered if our technical team is unable to
          resolve the issue for which the service was purchased.
        </p>

        <p className="mt-3 px-4 lg:text-base">
          Customers must submit their refund request within the specified refund
          period along with proof of purchase and a description of the issue
          experienced.
        </p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">
          Non-Refundable Situations
        </h2>

        <p className="mt-3 px-4 lg:text-base">
          Refunds may not be provided in the following circumstances:
        </p>

        <p className="mt-3 px-4 lg:text-base">
          • The issue has been successfully resolved by our support team.
        </p>

        <p className="mt-3 px-4 lg:text-base">
          • The customer fails to provide the required access or information
          necessary to complete the service.
        </p>

        <p className="mt-3 px-4 lg:text-base">
          • Problems caused by third-party software, hardware failures, or
          circumstances outside our control.
        </p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">
          Processing of Refunds
        </h2>

        <p className="mt-3 px-4 lg:text-base">
          Approved refunds will be processed using the original payment method.
          The time required for the refund to appear in your account may vary
          depending on your bank or payment provider.
        </p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">
          Cancellation Policy
        </h2>

        <p className="mt-3 px-4 lg:text-base">
          Customers may request cancellation of a service before the support
          process has started. Once the service has been delivered or the
          troubleshooting process has begun, cancellation may not be possible.
        </p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">
          Contact Us
        </h2>

        <p className="mt-3 px-4 lg:text-base">
          If you have any questions regarding our refund policy or wish to
          request a refund, please contact our customer support team. We will
          review your request and respond as soon as possible.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default RefundPolicy;