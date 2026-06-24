"use client";
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer.jsx";

function FixOfflinePrinter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <div className="relative max-h-screen w-full">
        <a href="/DownloadPrinterDrivers">
          <Image src="/hero-img.jpg" height={100} width={1500} alt="logo" />
        </a>
      </div> */}

      <div className="w-full z-10 relative bg-white">
        <nav className="hidden bg-[#007CBF] text-white h-15 md:flex lg:flex items-center px-6">
          <ul className="flex gap-5">
            <li>
              <a href="/FixOfflinePrinter">
                Printer Offline
              </a>
            </li>
            <li>
              <a href="/PrinterSetup">
                Printer Setup
              </a>
            </li>
            <li>
              <a href="/ScannerSetup">
                Scanner Setup
              </a>
            </li>
            <li>
              <a href="/PrivacyPolicy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/RefundPolicy">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="/Disclaimer">
                Disclaimer
              </a>
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
              href="/ScannerSetup"
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
              href="/RefundPolicy"
              className="block hover:text-gray-200"
            >
              Refund Policy
            </a>
            <a
              href="/ScannerSetUp"
              className="block hover:text-gray-200"
            >
              Disclaimer
            </a>
          </div>
        )}

        <div className="mt-6 px-3">
          <h1 className="text-2xl lg:text-4xl font-semibold text-center">
            Method 1 - Windows Troubleshooting
          </h1>


          <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 1 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Ensure that your printer is switched on. Make that your printer
                is turned on and linked to a power source before moving on to
                the next step in the troubleshooting procedure.
              </li>
              <li>
                You may need to click a button on the printer to wake it up if
                it is in Sleep mode.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/img1.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 2 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Restart your printer if it hasn’t done so already. If the printer was already turned on, it may only need to be restarted to stop showing up as unavailable. To restart the printer, follow these steps:
                <ul className="list-disc list-inside px-4">
                  <li>For 30 seconds, turn off and unplug your printer. This will allow your printer to restart and reconnect with your computer.</li>
                  <li>Turn on your printer after plugging it in. Check to see if the printer is still showing as “offline” after a few moments.</li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/img2.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 3 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Confirm that your printer is on the same network as your computer. If your printer is linked to your computer through Wi-Fi or ethernet, it may appear to be offline due to a network issue.
              </li>
              <li>
                The steps for checking your printer’s network settings differ depending on the printer you have. To explore the printer’s internal menus, you’ll normally have to utilise the buttons on the printer itself.
              </li>
              <li>
                If you’re connecting to the printer through a USB cable, ensure it’s securely plugged in. To rule out a broken cable connection, you could try an alternative USB cable.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/img3.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 4 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Check to see if the printer tray is full of paper. 
              </li>
              <li>
                If there is no paper available to print on, certain printers will go offline. 
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/img4.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 5 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                The print spooler should be restarted. To restart the service that manages your print jobs, follow these steps:
                  <ul className="list-disc list-inside px-4">
                    <li>To open the search bar, press Win+S and type services.</li>
                    <li>In the search results, select Services.</li>
                    <li>Scroll down to the Print Spooler service and right-click it.</li>
                    <li>Press the Restart button. The printer dialogue will be restarted, giving the computer a chance to rediscover the printer.</li>
                  </ul>
              </li>
              <li>
                Check to see whether your printer is showing up online after a few minutes. Because the printer spooler service takes a few minutes to restart, you’ll have to wait a few minutes until the printer appears as identified by Windows.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/img5.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 6 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                From the Windows Start menu, choose Settings. 
              </li>
              <li>
                There are some further troubleshooting methods you can try if the printer still appears to be down.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/img6.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 7 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Choose your devices. It can be found in the Settings menu.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/img7.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 8 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Select Printers & Scanners from the drop-down menu.  
              </li>
              <li>
                Your printer, as well as any other devices connected to your computer, should now be listed.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/img8.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 9 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Make sure the print queue is empty. To remove all documents from the queue, follow these steps:
                  <ul className="list-disc list-inside px-4">
                    <li>Select your printer and then Open Queue from the drop-down menu.</li>
                    <li>Choose a document from the queue.</li>
                    <li>Under “Document,” select Cancel.</li>
                    <li>Rep until the line is completely empty.</li>
                    <li>Examine the printer to see if it is operational. Continue with this procedure if you’re still having problems.</li>
                  </ul>
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/img9.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 10 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Select Remove device from the printer’s name.   
              </li>
              <li>
                This step will remove the printer’s drivers so you may re-add them if clearing the queue didn’t work.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/10.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 11 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Select Add a device or printer from the drop-down menu. 
              </li>
              <li>
                This option can be found at the top of the “Printers & Scanners” menu.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/11.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 12 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                To re-add your printer, follow the on-screen directions.    
              </li>
              <li>
                Check to see if the printer is showing up as “online” after it has been re-added.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/12.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 13 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Make sure your printer is set in the default. If the printer is still not working, set it as the default printer so that Windows recognises it as the one you wish to use. Here’s how to do it: 
                  <ul className="list-disc list-inside px-4">
                    <li>Navigate to the Printers & Scanners section of the menu.</li>
                    <li>Select the printer that you want to be the default.</li>
                    <li>Choose the option to open the queue.</li>
                    <li>In the menu for your printer’s queue, choose Set As Default Printer. This is found in the Printer menu, which is seen on the printer queue window.</li>
                  </ul>
              </li>
              <p>
                For more information, contact the manufacturer of your printer. If you’re still having problems with your printer, it’s most likely a hardware problem. For more information about connecting your printer to your PC, contact the printer’s manufacturer.
              </p>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/13.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>
        </div>






        <div className="mt-12 px-3">
          <h1 className="text-2xl lg:text-4xl font-semibold text-center">
            Method 2 - Troubleshooting on Macos
          </h1>


          <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 1 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Ensure that your printer is switched on. Make that your printer
                is turned on and linked to a power source before moving on to
                the next step in the troubleshooting procedure.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/2.1.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 2 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Restart your printer if it hasn’t done so already. If the printer was already turned on, it may only need to be restarted to stop showing up as unavailable. To restart the printer, follow these steps:
                <ul className="list-disc list-inside px-4">
                  <li>For 30 seconds, turn off and unplug your printer. This will allow your printer to restart and reconnect with your computer.</li>
                  <li>Turn on your printer after plugging it in. Check to see if the printer is still showing as “offline” after a few moments.</li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/2.2.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 3 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Confirm that your printer is on the same network as your computer. If your printer is linked to your computer through Wi-Fi or ethernet, it may appear to be offline due to a network issue.
              </li>
              <li>
                The steps for checking your printer’s network settings differ depending on the printer you have. To explore the printer’s internal menus, you’ll normally have to utilise the buttons on the printer itself.
              </li>
              <li>
                If you’re connecting to the printer through a USB cable, ensure it’s securely plugged in. To rule out a broken cable connection, you could try an alternative USB cable.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/2.3.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 4 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Check to see if the printer tray is full of paper. 
              </li>
              <li>
                If there is no paper available to print on, certain printers will go offline. 
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/2.4.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 5 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Select the Apple menu from the drop-down menu
              </li>
              <li>
                It’s located in the upper-left corner of the screen.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/2.5.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 6 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                On the menu, select System Preferences. 
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/2.6.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 7 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Select Printers & Scanners or Print & Scan from the drop-down menu. This opens a new window with a menu listing all printers connected to your Mac. In this option, choose the printer you want to connect.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/2.7.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 8 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                In the Printers pane, right-click anywhere.
              </li>
              <li>
                This brings up a little pop-up menu with more settings for the printer in the window.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/2.8.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 9 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                In the menu, choose Reset printing system.
              </li>
              <li>
                This opens a new window asking you to confirm that you want to reset the printing system.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/2.9.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 10 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Select Remove device from the printer’s name.   
              </li>
              <li>
                This step will remove the printer’s drivers so you may re-add them if clearing the queue didn’t work.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/2.11.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 11 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Click OK after entering the Administrator’s name and password.  
              </li>
              <li>
                Once you’ve done that, the system will finish resetting your Mac’s printing system.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/2.12.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 12 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Return to the Printers & Scanners section.    
              </li>
              <li>
                You’ll need to re-add the printer to your Mac after you’ve reset your printing system.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/2.13.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 13 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Select Add a Device from the drop-down menu. This brings up a window that searches for your printer and automatically detects it.
              </li>
              <li>
                Before continuing with this step, make sure your printer is turned on and ready to connect.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/2.14.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Step 14 :
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Click Add after selecting your printer. This will re-establish a connection between your printer and your Mac’s wireless network.     
              </li>
              <li>
                If there are no mechanical concerns, your printer should show online at this time.Make sure to reconnect any other devices this way to re-add them if you haven’t previously.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/FixOffline/2.15.jpg"
              alt="printer2"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3 lg:px-8">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">Step 15 :</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Seek help from your printer’s manufacturer.
              </li>
              <li>
                If you’re still having problems with your printer, it’s most likely a hardware problem. 
              </li>
              <li>
                For more information, contact the printer’s manufacturer.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 lg:px-3 ">
            <Image
              src="/FixOffline/2.16.jpg"
              alt="printer1"
              width={400}
              height={200}
            ></Image>
          </div>
        </div>

      </div>

    </div>

    <Footer/>
  </div>
  );
}

export default FixOfflinePrinter;
