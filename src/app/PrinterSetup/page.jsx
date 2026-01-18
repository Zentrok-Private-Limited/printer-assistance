"use client"
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

function PrinterSetup() {

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
						<li><a href="/FixOfflinePrinter">Printer Offline</a></li>
            <li><a href="/PrinterSetup">Printer Setup</a></li>
            <li><a href="/ScannerSetUp">Scanner Setup</a></li>
            <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
            <li><a href="/Disclaimer">Disclaimer</a></li>
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
            <a
              href="/FixOfflinePrinter"
              className="block hover:text-gray-200"
            >
              Printer Offline
            </a>
            <a
              href="/PrinterSetup"
              className="block hover:text-gray-200"
            >
              Printer Setup
            </a>
            <a
              href="/ScannerSetUp"
              className="block hover:text-gray-200"
            >
              Scanner Setup
            </a>
            <a
              href="/PrivacyPolicy"
              className="block hover:text-gray-200"
            >
              Privacy Policy
            </a>
            <a
              href="/Disclaimer"
              className="block hover:text-gray-200"
            >
              Disclaimer
            </a>
          </div>
        )}
      </div>

      <div className="bg-[#DFDFDF] flex-col flex lg:flex-row w-full pt-10 pb-8 gap-3">
        <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
                Why is My Printer not Connected to the Internet? What are the Steps to Connect a Printer to Wifi?
            </h2>

            <p>Here are some steps that you can check to connect your Printer to the internet or your home Wifi connection. But if the problem doesn’t get resolved even after following the given steps, you can take our support and leave us a message to resolve your issue with our experts.</p>
            <ul className="flex flex-col gap-3 list-disc list-inside lg:text-lg mt-5">
                <li>
                    If your wireless printer setup fails to connect with your internet, you can check for network issues and review setup requirements.
                </li>
            <li>
              Check the network connection: move your Printer and mobile device or computer closer to the wired or wireless router, and then check the signal quality. Try to open a website and check whether the internet connection is working properly or not. If your Wi-Fi is intermittent or slow, try to restart the router by unplugging the power cord. After that, please wait for at least 15 seconds and then reconnect it.
            </li>
            <li>
              How to fix the printer sleep mode issue? If you want to know how to set up the Printer, especially if it is facing a sleep mode issue, you need to touch the printer touchscreen or press the Power button to wake up your Printer and put it in a ready state.
            </li>
            <li>
              Restore the wireless connection or restart your Printer to identify and fix network issues.
            </li>
            <li>
              If your Printer includes a light next to a wireless button or icon, ensure that the light is on.
            </li>
            <li>
              Check the wireless setting and make sure that the signal is turned on.
            </li>
            <li>
              Based on your printer model, search the customer support and then check for a self-test page to find the document on how to print and calculate the report.
            </li>
          </ul>
        </div>
        <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
          <Image
            src="/PrinterSetup/img1.jpg"
            alt="printer1"
            width={600}
            height={300}
          ></Image>
        </div>
      </div>

      <div className="flex-col-reverse flex lg:flex-row-reverse w-full mt-10 pb-6 gap-3">
                  <div className="w-full lg:w-3/5 px-3">
                    <h2 className="text-xl lg:text-3xl font-semibold ">What Type of Query Do You Have ?​</h2>
                  <ul className="flex flex-col gap-3 list-disc list-inside lg:text-lg mt-5">
                    <li>How to set up a printer?</li>
                    <li>How to connect a printer to wifi?</li>
                    <li>How to fix the printer sleep mode issue?</li>
                    <li>How to set up printers on windows?</li>
                    <li>How to set up printers on mac?</li>
                    <li>How do I install a printer?</li>
                    <li>What are the steps for setting up a wireless printer?</li>
                    <li>How to connect an HP printer to new wifi?</li>
                    <li>What are my printer wifi settings?</li>
                  </ul>
                    <p className="py-4">If you want to know the answer to any of the above questions, you can connect with us to get professional assistance. Moreover, if you wish to know your Printer’s wifi settings and are excited to learn the steps to install a printer or want to fix internet issues while connecting your Printer to Wifi, we ensure to help you faster and easier to resolve your issue.</p>
                  </div>
                  <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
                    <Image src="/PrinterSetup/img2.jpg" alt="printer2" width={500} height={300}></Image>
                  </div>
                </div>


                <div className="bg-[#DFDFDF] flex-col flex lg:flex-row w-full pt-10 pb-8 gap-3">
        <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
                How Can Smart Device Assistant Assist You?
            </h2>

            <div className="flex flex-col gap-6">
                <p>At printerassistance.com , we have an experienced team who can guide you on printer troubleshooting and provide you with instant support to fix some common challenges that you face while working or connecting your printer with an internet connection, laptop, computer, mobile, and other devices.</p>
                <p>If you want to resolve your query within a few minutes and want professional help for free, you can send us a message to start a conversation with our experts or drop your query to get the best solution.</p>
                <p>Moreover, if you have just bought a brand new Printer from the market, regardless of its type and size, we ensure to address all your problems without any hassle.</p>
            </div>
        </div>
        <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
          <Image
            src="/PrinterSetup/img3.png"
            alt="printer1"
            width={600}
            height={300}
          ></Image>
        </div>
      </div>


      <div className="flex-col flex lg:flex-row w-full mt-10 gap-3">
                  <div className="w-full px-3">
                    <h2 className="text-xl lg:text-3xl font-semibold text-center ">Why Is My Printer Not Connecting to Wi-Fi During Setup?</h2>
                    <p className="py-2 lg:text-lg pt-5">Are you trying to connect your printer to local Wi-Fi but don’t know how to get this step done? Below, we will discuss some reasons that you check why your printer may not connect to wi-fi during setup.</p>
                  <ul className="flex flex-col gap-3 list-disc list-inside lg:text-lg mt-5">
                    <li>If you have recently changed your network security, your printer won’t connect to Wi-Fi until you don’t allow it to reconnect to your network.</li>  
                    <li>Even if you have made any changes to your network devices, you may need to power cycle your printer. In other words, you can understand that you need to turn it off and turn it on to reconnect to your network. However, if you fail to connect your printer to Wi-Fi, you can contact us to get better help and use your printer in the right way.</li>
                  </ul>
                  <p className="py-2 pt-5 lg:text-lg">If you are looking for DIY tips to troubleshoot your printer issues, you can follow the given steps:</p>
                  <ul className="flex flex-col gap-3 list-disc list-inside lg:text-lg mt-5">
                    <li>Make sure your printer is on.</li>
                    <li>Connect your printer to your computer/laptop or other devices.</li>
                    <li>Check the toner and paper of your printer with its queue.</li>
                    <li>Check for error messages or any warning lights on the printer.</li>
                    <li>Make sure it is connected to WiFi.</li>
                    <li>Use a USB cable to connect and check whether it is working or not.</li>
                    <li>Confirm that you are using the right network to connect your printer</li>
                    <li>If you have recently updated your security software, browsers, firewalls, or operating systems, then the chances are high that you can experience a number of issues while connecting your wireless printer setup. Still, you don’t need to panic. In this case, you can reconnect your device to the network and install updated drivers.</li>
                    <li>Check router settings.</li>
                    <li>Restart all your devices and run the printing troubleshooter.</li>
                    <li>Set your printer as a default printer.</li>
                    <li>Update router firmware.</li>
                    <li>Disable VPN Connections.</li>
                    <li>Check your SSID.</li>
                    </ul>
                    <p className="py-2 pt-5 lg:text-lg">These are some basic steps that people always follow when they fail to connect 123 printer setup or any other printing device with Wi-Fi. However, if you want to solve your printer related query with experts or are interested in learning the complete steps to install a printer in Windows/Mac and want to fix the most common printer problems in Windows 7, Windows 8.1, and Windows 10, you can send us a message with your query. We ensure to help you connect with our specialized printer support team and provide faster assistance.</p>
                  </div>
                </div>


        <Footer/>
    </div>
  );
}

export default PrinterSetup;
