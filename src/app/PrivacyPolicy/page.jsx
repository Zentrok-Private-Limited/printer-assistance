"use client";
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

function PrivacyPolicy() {
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
        <h1 className="text-2xl lg:text-4xl font-semibold text-center">
          PRIVACY POLICY
        </h1>
        <p className="mt-5 px-4 lg:text-base">One of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by printerassistance.com and how we use it.</p>
        <p className="mt-4 px-4 lg:text-base">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
        <p className="mt-4 px-4 lg:text-base">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in printerassistance.com. This policy is not applicable to any information collected offline or via channels other than this website..</p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">CONSENT</h2>
        <p className="mt-3 px-4 lg:text-base">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">Information We Collect</h2>
        <p className="mt-3 px-4 lg:text-base">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <p className="mt-3 px-4 lg:text-base">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, and the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
        <p className="mt-3 px-4 lg:text-base">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">How We Use Your Information</h2>
        <p className="mt-3 px-4 lg:text-base">We use the information we collect in various ways, including to:</p>
        <p className="mt-3 px-4 lg:text-base">Improve, personalize, and expand our website</p>
        <p className="mt-3 px-4 lg:text-base">Understand and analyse how you use our website</p>
        <p className="mt-3 px-4 lg:text-base">Develop new products, services, features, and functionality</p>
        <p className="mt-3 px-4 lg:text-base">Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</p>
        <p className="mt-3 px-4 lg:text-base">Send you emails</p>
        <p className="mt-3 px-4 lg:text-base">Find and prevent fraud</p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">Log Files</h2>
        <p className="mt-3 px-4 lg:text-base">We follow a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analysing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">Our Advertising Partners</h2>
        <p className="mt-3 px-4 lg:text-base">Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>
        <p className="mt-3 px-4 lg:text-base">Google</p>
        <p className="mt-3 px-4 lg:text-base"><a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">Advertising Partners Privacy Policies</h2>
        <p className="mt-3 px-4 lg:text-base">You may consult this list to find the Privacy Policy for each of the advertising partners of printerassistance.com.</p>
        <p className="mt-3 px-4 lg:text-base">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on printerassistance.com, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
        <p className="mt-3 px-4 lg:text-base">Note that printerassistance.com has no access to or control over these cookies that are used by third-party advertisers.</p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">Third Party Privacy Policies</h2>
        <p className="mt-3 px-4 lg:text-base">Our Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
        <p className="mt-3 px-4 lg:text-base">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.</p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p className="mt-3 px-4 lg:text-base">Under the CCPA, among other rights, California consumers have the right to:</p>
        <p className="mt-3 px-4 lg:text-base">Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
        <p className="mt-3 px-4 lg:text-base">Request that a business delete any personal data about the consumer that a business has collected.</p>
        <p className="mt-3 px-4 lg:text-base">Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.</p>
        <p className="mt-3 px-4 lg:text-base">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">GDPR Data Protection Rights</h2>
        <p className="mt-3 px-4 lg:text-base">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <p className="mt-3 px-4 lg:text-base">The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
        <p className="mt-3 px-4 lg:text-base">The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
        <p className="mt-3 px-4 lg:text-base">The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
        <p className="mt-3 px-4 lg:text-base">The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
        <p className="mt-3 px-4 lg:text-base">The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
        <p className="mt-3 px-4 lg:text-base">The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
        <p className="mt-3 px-4 lg:text-base">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

        <h2 className="text-xl lg:text-2xl font-semibold mt-5 px-4">Children’s Information</h2>
        <p className="mt-3 px-4 lg:text-base">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
        <p className="mt-3 px-4 lg:text-base">printerassistance.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
        

      </div>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
