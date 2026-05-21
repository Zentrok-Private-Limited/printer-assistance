import React from "react";

function Footer() {
  return (
    <div className="mt-10">
      <div className="bg-[#DFDFDF] p-4">
        <h3 className="font-semibold text-4xl text-center">Disclaimer</h3>
        <p className="text-light mt-2 p-2 text-base ">
          This website provides technical support and setup assistance for
          printer devices. We are an independent service provider and are not
          affiliated with, endorsed by, or connected to HP Inc. or any printer
          manufacturer. All brand names, trademarks, and logos mentioned on this
          website are the property of their respective owners.
          <br />
          The information, drivers, and setup tools provided on this website are
          offered for informational and technical support purposes only. While
          we strive to ensure accuracy and reliability, we make no warranties or
          representations regarding the completeness, accuracy, or suitability
          of any content or software provided.
          <br />
          Users are advised to verify compatibility with their specific printer
          models before downloading any drivers or software. We are not
          responsible for any issues that may arise from the use of information
          or tools provided on this website. For official manufacturer support,
          please visit the manufacturer's official website.
          <br />
          By using this website and its services, you acknowledge that you have
          read, understood, and agreed to this disclaimer. If you do not agree
          with these terms, please do not use this website or download any
          materials from it.
        </p>
      </div>

      <footer className="bg-gray-900 text-gray-300 text-sm">
        <div className="max-w-5xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <h2 className="text-white font-semibold mb-3">About Us</h2>
            <p className="leading-6 text-gray-400">
              printerassistance.com provides setup and troubleshooting guides to
              help users easily connect and configure their devices.
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-white font-semibold mb-3">Popular Guides</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/FixOfflinePrinter"
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
                <a href="/ScannerSetUp" className="hover:text-white transition">
                  Scanner Setup
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-white font-semibold mb-3">Legal</h2>
            <ul>
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
                  href="/PrivacyPolicy"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
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
  );
}

export default Footer;
