"use client"
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Footer from "@/components/Footer.jsx";
import Link from "next/link"

export default function Home() {

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
          <Link href="/DownloadPrinterDrivers" className="font-semibold text-lg cursor-pointer">Printer Setup</Link>
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



        <div className="mt-6 px-3">
          <h1 className="text-2xl lg:text-4xl font-semibold text-center">How to Connect a Printer to Your Computer From 123.hp.com</h1>
          <p className="mt-5 px-4 lg:text-base">Connect a printer to your Windows or Mac computer; wired or wireless. You can share the printer on your home network once it’s connected, allowing other computers in your house to print from it even if they’re not physically connected.</p>

          <div className="flex-col flex lg:flex-row w-full mt-10 gap-3">
            <div className="w-full lg:w-3/5 px-3">
              <h2 className="text-xl lg:text-3xl font-semibold ">Method 1 : Wired connection (Windows)</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>Download the drivers of the printer from 123.hp.com. Follow the instructions on the software. Check to see if it’s close enough for the cable to reach your computer without being tangled.</li>
              <li>A power source must be connected to your printer. Plug the printer into your computer using a USB cord while your computer is powered on and unlocked. In certain circumstances, simply attaching your printer into your computer will immediately setup and properly install the printer, allowing you to use it right away.</li>
              <li>Click on the Start button. In the bottom-left corner side of the screen, you now need to click the Windows logo. Select Settings from the drop-down menu. It’s in the Start window’s lower-left corner. Select Devices from the drop-down menu. Near the top of the Settings box, you’ll find this option.</li>
              <li>Select Printers and Scanners from the drop-down menu. It’s a tab on the window’s left side. Add a printer or scanner by clicking Add a printer or scanner. This button appears at the top of the page. </li>
              <li> Click the Add device button next to your printer’s name. This is usually a combination of the printer’s manufacturer, the printer’s model name, and the printer’s model number. If your printer’s name isn’t displayed here, click the printer that I want isn’t listed link underneath the Add a printer or scanner button, and then follow the on-screen instructions.</li>
              <li>Follow the directions on the screen. You may need to tweak your settings before the printer is ready, depending on your printer; once you’re done, the printer will be ready to use. If prompted, place the CD that came with your printer into the disc slot on your computer.  If your printer didn’t come with a CD when you got it secondhand, you can typically download the same software from the manufacturer’s website.</li>
            </ol>
            </div>
            <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
              <Image src="/Home/img1.png" alt="printer1" width={600} height={300}></Image>
            </div>
          </div>

          <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3">
            <div className="w-full lg:w-3/5 px-3">
              <h2 className="text-xl lg:text-3xl font-semibold ">METHOD 2: WIRED CONNECTION (Mac)​</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>Keep your Mac up to date. Before you connect a printer to your Mac, check sure you have the latest drivers and updates installed from 123 hp printer setup.</li>
              <li>Place your printer in close proximity to your computer. Check to see if it’s close enough for the cable to reach your computer without being tangled.</li>
              <li>Start your printer. Press the power button on your printer; it should have an icon on or next to it. A power source must be connected to your printer.</li>
              <li>Use a USB cable to connect the printer to your computer. The USB cable should be plugged into a USB port on the housing of your computer.
                  If your Mac lacks a regular USB port, you’ll need to purchase a USB-C to USB converter.
                  When you do this, make sure your computer is turned on and logged in.</li>
              <li>Select Install and then follow the onscreen instructions. If your printer is compatible with your Mac, it will most likely install on your computer right immediately; however, you may need to finalize the installation by clicking the Download & Install option on a pop-up window. Your printer will be available to use on your Mac after this process is completed.</li>
            </ol>
            </div>
            <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
              <Image src="/Home/img2.png" alt="printer2" width={500} height={300}></Image>
            </div>
          </div>


          <div className="flex-col flex lg:flex-row w-full mt-10 gap-3">
            <div className="w-full lg:w-3/5 px-3">
              <h2 className="text-xl lg:text-3xl font-semibold ">METHOD 3: WIRELESS CONNECTION (WINDOWS)</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>Examine your printer’s network connections. If your printer connects using Bluetooth rather than Wi-Fi, the method for setting up the printer will be slightly different. To receive an Internet signal, some Wi-Fi printers must be linked directly to a wireless router through Ethernet.</li>
              <li>Place your computer in an area where your wireless signal can be received. You can’t put your printer too far away from your wireless router since it needs to be able to connect with it.</li>
              <li>Switch on the printer. Press the power button on your printer; it should have an icon on or next to it. A power source must be connected to your printer. Connect the printer’s Ethernet cord to the router if necessary.</li>
              <li>For specific network configuration instructions, consult the documentation that comes with your printer. You can find your handbook on the manufacturer’s support site if you don’t have it. Some printers require a direct connection to your Windows or Mac computer to be used wirelessly, while others allow you to complete the wireless setup process fully on the printer.</li>
              <li>Connect the printer to the computer. To do so, follow these steps:
                <ul className="list-disc list-inside px-4">
                  <li>Wi-Fi – Locate the Wi-Fi setup page on your printer’s screen, then input your network’s password. This has to be the same network that your machine is on.</li>
                  <li>Bluetooth – Press the “Pair” button, which is commonly marked with a crooked Bluetooth “B” emblem.</li>
                </ul>
              </li>
              <li>Press the Start button. In the bottom-left corner side of the screen, click the Windows logo.</li>
              <li>Go to the Settings tab. It’s in the Start window’s lower-left corner.</li>
              <li>Select Devices from the drop-down menu. Near the top of the Settings box, you’ll find this option.</li>
              <li>Select either Printers & Scanners or Bluetooth & Other Devices from the drop-down menu. These tabs are located on the window’s left side. Click Printers & scanners if you’re connecting a Wi-Fi printer. Click Bluetooth & other devices to find a Bluetooth printer.</li>
              <li>Select Add a printer or scanner or Add a Bluetooth or other device from the drop-down menu. These options are at the top of the page and are dependent on whether you’re using a Wi-Fi or Bluetooth printer. When connecting a Wi-Fi printer, the printer’s name may appear on the page already. If this is the case, your printer is connected. To enable Bluetooth on your computer, you may need to first click the Bluetooth switch.</li>
              <li>Connect your printer to your computer. In the Add window, click your printer’s name; if you’re attaching a Bluetooth printer, you’ll also need to click Connect once you’ve selected your printer. As a result, the printer will be connected to your Windows computer. When connecting to Bluetooth, you may need to press the printer’s “Pair” button again.</li>
            </ol>
            </div>
            <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
              <Image src="/Home/img3.png" alt="printer3" width={600} height={300}></Image>
            </div>
          </div>

          <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3">
            <div className="w-full lg:w-3/5 px-3">
              <h2 className="text-xl lg:text-3xl font-semibold ">METHOD 4: WIRELESS CONNECTION (Mac)</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>Examine your printer’s network connections. If your printer connects using Bluetooth rather than Wi-Fi, the method for setting up the printer will be slightly different. To receive an Internet signal, some Wi-Fi printers must be linked directly to a wireless router through Ethernet.</li>
              <li>Place your computer in an area where your wireless signal can be received. You can’t put your printer too far away from your wireless router since it needs to be able to connect with it.</li>
              <li>Switch on the printer. Press the power button on your printer; it should have an icon on or next to it.</li>
                <ul className="list-disc list-inside px-4">
                  <li>A power source must be connected to your printer.</li>
                  <li>Connect the printer’s Ethernet cord to the router if necessary.</li>
                </ul>
              <li>For specific network configuration instructions, consult the documentation that comes with your printer. You can find your handbook on the manufacturer’s support site if you don’t have it.</li>
              <p>Some printers require a direct connection to your Windows or Mac computer to be used wirelessly, while others allow you to complete the wireless setup process fully on the printer. If your printer supports wireless networks, you’ll need to search for your wireless network using the printer’s menu interface. You’ll need to enter your wireless password once you’ve connected.</p>
              <li>Connect the printer to the computer. To do so, follow these steps:</li>
                <ul className="list-disc list-inside px-4">
                  <li>Wi-Fi – Locate the Wi-Fi setup page on your printer’s screen, and then input your network’s password. This has to be the same network that your machine is on. </li>
                  <li>Bluetooth – Press the “Pair” button, which is commonly marked with a crooked Bluetooth “B” emblem.</li>
                </ul>
              <li>Select Apple from the menu bar. It’s in the screen’s upper left corner</li>
              <li>Select System Preferences from the drop-down menu. The Apple drop-down menu has this option towards the top.</li>
              <li>Select Printers & Scanners from the drop-down menu. In the System Preferences pane, it’s the printer-shaped icon. From this option, you may connect both Wi-Fi and Bluetooth printers.</li>
              <li>Press the Plus button. It’s towards the window’s bottom-left corner. If your printer is already connected to the network, you should see its name in the window’s left-hand pane.</li>
              <li>Select your printer’s name from the drop-down menu. It is ought to show up in the drop-down menu. When the printer has finished setting up, the name of the printer will appear in the pane on the left side of the window, indicating that the printer has successfully connected to your Mac. Make sure you’re on the same network as the printer if you don’t see the printer’s name. If you’re connecting over Bluetooth, you may need to hit the printer’s “Pair” button again.</li>
            </ol>
            </div>
            <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
              <Image src="/Home/img2.png" alt="printer2" width={600} height={300}></Image>
            </div>
          </div>

          <div className="flex-col flex lg:flex-row w-full mt-10 gap-3">
            <div className="w-full lg:w-3/5 px-3">
              <h2 className="text-xl lg:text-3xl font-semibold ">METHOD 5: ADD PRINTER TO WIRELESS NETWORK</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>Install the printer on the computer from which you want to share the printer. You can do so using either a wired or wireless connection.</li>
              <li>Press the Start button. In the bottom-left corner side of the screen, click the Windows logo.</li>
              <li>Go to the Settings tab. It’s in the Start window’s lower-left corner.</li>
              <li>Select Network & Internet from the drop-down menu. In the Settings panel, you’ll find this option.</li>
              <li>Select Status from the drop-down menu. It’s a tab in the window’s upper-left corner.</li>
              <li>Select Sharing options from the drop-down menu. It’s near the top of the page, behind the title “Change your network settings.”</li>
              <li>Select the Private option from the drop-down menu. To the right of Private, click.</li>
              <li>Select the “Turn on file and printer sharing” option in the “Turn on file and printer sharing” circle. This option is located beneath the headline “File and printer sharing.”</li>
              <li>Use other Windows computers on the network to connect to the shared printer. The computer with which the printer is shared must be turned on.</li>
              <p>Skip to the following step if you’re using a Mac computer to connect to this printer.</p>
              <li>Use other Mac computers on the network to print to the shared printer. The computer with which the printer is shared must be turned on. To connect, go to:
                <ul className="list-disc list-inside px-4">
                  <li>Select System Preferences from the Apple menu.</li>
                  <li>Select Print & Scan from the drop-down menu.</li>
                  <li>At the bottom of the printer list, click +.</li>
                  <li>At the top of the new window, select the Windows tab.</li>
                  <li>Choose the printer’s name from the drop-down menu.</li>
                </ul>
              </li>
            </ol>
            </div>
            <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
              <Image src="/Home/img3.png" alt="printer3" width={600} height={300}></Image>
            </div>
          </div>
        </div>
      </div>   
      <Footer/>
    </div>
  );
}
