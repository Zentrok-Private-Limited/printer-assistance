"use client";
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

function ScannerSetUp() {
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
            <a href="/RefundPolicy" className="block hover:text-gray-200">
              Refund Policy
            </a>
            <a href="/Disclaimer" className="block hover:text-gray-200">
              Disclaimer
            </a>
          </div>
        )}
      </div>

      <div className="mt-6 px-3">
        <h1 className="text-2xl lg:text-4xl font-semibold text-center">
          4 Methods Of Scanning Documents
        </h1>
        <p className="mt-5 px-4 lg:text-base">
          To scan a document into your computer, smartphone, or tablet, follow
          the steps below. You’ll need a scanner (or a printer with a built-in
          scanner) connected to your computer to do this on a PC. On an iPhone,
          you can scan documents using the built-in Notes app, while Android
          users can use Google Drive’s scan feature.
        </p>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              METHOD 1: Using Windows
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Place a document in your scanner face down. Before you go any
                further, make sure your scanner is turned on and connected to
                your computer.
              </li>
              <li>
                Press the Start button. In the bottom-left corner side of the
                screen, click the Windows logo.
              </li>
              <li>
                In Start, type fax and scan. The Windows Fax and Scan software
                will be found by doing so.
              </li>
              <li>
                Select Windows Fax and Scan from the drop-down menu. It’s
                located at the very top of the Start menu.
              </li>
              <li>
                Select New Scan from the drop-down menu. This option can be
                found in the Fax and Scan window’s upper-left corner. There will
                be a new window open.
              </li>
              <li>
                Double-check that your scanner is in working order. If your
                scanner’s name isn’t listed at the top of the window, or if the
                wrong scanner is listed, click Change… in the upper-right corner
                of the window and pick your scanner’s name.
              </li>
              <li>
                Choose a document type. Select the type of document (e.g.,
                Photo) in the drop-down box after clicking the “Profile”
                drop-down box.
              </li>
              <li>
                Pick a color scheme for your document. Select between Color or
                Black & White from the “Color format” drop-down box. It’s also
                possible that your scanner may have different color options.
              </li>
              <li>
                Choose a file type. Click the “File type” drop-down box, then
                select the file type (such as PDF or JPG) to save the scanned
                document to your computer. It’s recommended to choose PDF when
                scanning anything other than a photo.
              </li>
              <li>
                Make any further changes to the page’s options. You may have
                other options (for example, “Resolution”) that you can change
                before scanning your document, depending on your scanner.
              </li>
              <li>
                {" "}
                Go to the Preview tab. It can be found near the bottom side of
                the window. This will bring up a preliminary scan of your
                scanned document to show you what it will look like. If your
                document appears crooked, uneven, or cut off, reposition it in
                your scanner and then preview it again to see if your change
                fixed the problem.
              </li>
              <li>
                Select Scan from the menu. It can be found near the bottom of
                the window. Your document will begin scanning onto your computer
                using the options and format you’ve chosen.
              </li>
              <li>
                Locate the scanned document. To do so, follow these steps:
                <ul className="list-disc list-inside px-4">
                  <li>Start the program.</li>
                  <li>Open the File Explorer application.</li>
                  <li>On the left side of the window, select Documents.</li>
                  <li>
                    Select the Scanned Documents folder and double-click it.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/ScannerSetup/img1.png"
              alt="printer1"
              width={600}
              height={300}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3">
          <div className="w-full lg:w-3/5 px-3">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              METHOD 2: Using the Mac​
            </h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
              <li>
                Place a document in your scanner face down. Before you go any
                further, make sure your scanner is turned on and connected to
                your computer.
              </li>
              <li>
                Select Apple from the navigation bar. In the top-left corner
                side of the screen, click the Apple logo. There will be a
                drop-down menu.
              </li>
              <li>
                Select System Preferences from the drop-down menu… It’s the
                first option in the drop-down menu.
              </li>
              <li>
                Select Printers & Scanners from the drop-down menu. The right
                side of the System Preferences pane has a printer-shaped icon.
              </li>
              <li>
                Choose a scanner. In the left-hand column, click the name of
                your scanner (or printer).
              </li>
              <li>
                Select the Scan option. It’s located at the very top of the
                window.
              </li>
              <li>
                Select Open Scanner… This can be found near the top of the Scan
                tab’s window.
              </li>
              <li>
                Select Show Details from the menu. It’s in the window’s
                lower-right corner.
              </li>
              <li>
                {" "}
                Choose a file format. Click the “Format” drop-down box, then
                select a file format (such as PDF or JPEG) to save your
                document. It’s recommended to choose PDF when scanning anything
                other than a photo.
              </li>
              <li>
                {" "}
                Decide on a color scheme. Select a color option from the “Kind”
                drop-down box at the top of the page (e.g., Black and White).
              </li>
              <li>
                Decide where you want to store your files. Select a folder in
                which you want to save your scanned document from the “Save To”
                drop-down box (e.g., Desktop).
              </li>
              <li>
                Alter the page’s other options. You may wish to adjust the
                “Resolution” or “Orientation” values here depending on the type
                of file you’re scanning.
              </li>
              <li>
                Select Scan from the menu. It’s at the window’s bottom-right
                corner. The scanning of your paper into your computer will
                begin. You’ll be able to find it in your chosen save location
                after it’s finished.
              </li>
            </ol>
          </div>
          <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
            <Image
              src="/ScannerSetup/img2.png"
              alt="printer2"
              width={500}
              height={300}
            ></Image>
          </div>
        </div>

        <div className="flex-col flex lg:flex-row w-full mt-10 gap-3">
          <div className="w-full lg:w-3/5 px-3">
          <h2 className="text-xl lg:text-3xl font-semibold ">
            METHOD 3: Using the iPhone
          </h2>
          <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
            <li>open Notes. Tap the icon for the Notes app.</li>
            <li>
              Select “New Note” from the drop-down menu. It’s at the screen’s
              bottom right corner of the screen. If Notes opens to a note, tap
              the top-left corner of the screen and select Notes.
            </li>
            <p>
              Before continuing, touch a storage location if Notes opens to the
              “Folders” tab.
            </p>
            <li>
              Press the button. At the bottom of the screen, there is a
              plus-shaped icon. There will be a pop-up menu.
            </li>
            <li>
              Select Scan Documents from the drop-down menu. It’s the first
              option on the pop-up menu.
            </li>
            <li>
              Take a picture of a document with your phone’s camera. Make sure
              the entire document is visible on the screen.
            </li>
            <p>
              The scan will be cleaner if the paper is centered on the screen.
            </p>
            <li>
              {" "}
              Press and hold the “Capture” button. At the bottom of the screen,
              there is a white circle. Your document will be scanned as a result
              of this action.
            </li>
            <li>
              Select Keep Scan from the drop-down menu. It’s at the screen’s
              bottom right corner of the screen.
              <ul className="list-disc list-inside px-4">
                <li>
                  {" "}
                  You may also tap and drag any of the spheres in the scan’s
                  corners to enlarge or minimize the saved portion of the scan.
                </li>
                <li>
                  Instead, tap Retake in the bottom-left corner of the screen to
                  try scanning the page again.
                </li>
              </ul>
            </li>
            <li>
              Press the Save button. This option can be found in the screen’s
              bottom right corner.
            </li>
            <li>Press the button. It’s in the screen’s top-right corner.</li>
            <li>
              Scroll to the right and select Create PDF. Make sure you’re
              scrolling through the bottom row of selections, not the top row.
            </li>
            <li>
              Press the Done button. It’s in the screen’s upper left corner.
            </li>
            <li>
              Make a backup of your scanned document. When prompted, tap Save
              File To…, then do the following:
              <ul className="list-disc list-inside px-4">
                <li>
                  Select iCloud Drive or another cloud storage option from the
                  drop-down menu.
                </li>
                <li> In the top-right corner of the screen, tap Add.</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
          <Image
            src="/ScannerSetup/img3.png"
            alt="printer1"
            width={600}
            height={300}
          ></Image>
        </div>
      </div>
        </div>

      <div className="flex-col flex lg:flex-row-reverse w-full mt-10 gap-3">
        <div className="w-full lg:w-3/5 px-3">
          <h2 className="text-xl lg:text-3xl font-semibold ">
            METHOD 4: Using an Android​
          </h2>
          <ol className="flex flex-col gap-3 list-decimal list-inside lg:text-lg mt-5">
            <li>
              Go to Google Drive and sign in. The Google Drive app icon, which
              looks like a blue, green, and yellow triangle, should be selected.
            </li>
            <li>
              Choose a folder. Select a folder where you want to save your scan.
            </li>
            <li>
              Press the + button. It’s at the screen’s bottom right corner.
              There will be a pop-up menu.
            </li>
            <li>
              Select Scan. The pop-up menu contains this camera-shaped icon. The
              camera on your phone (or tablet) will open.
            </li>
            <li>
              Take a picture of a document with your phone’s camera. The
              document should be at the center of the screen, centered. Before
              continuing, make sure your document is flat and completely
              on-screen.
            </li>
            <li>
              Press and hold the “Capture” button. At the bottom of the screen,
              there’s a blue and white circle. Your document will be scanned as
              a result of this.
            </li>
            <li>
              Press the. This can be seen in the screen’s bottom right corner.
              This will store your scan.
              <ul className="list-disc list-inside px-4">
                <li>
                  {" "}
                  Cropping your scan is also possible by tapping and dragging
                  any of the spheres around the scan’s edge.
                </li>
                <li>
                  Tap in the top-right corner of the screen for further options
                  (such as color).
                </li>
                <li>
                  Tap + and then scan another item to add extra pages to the
                  PDF.
                </li>
              </ul>
            </li>
            <li>
              {" "}
              Take a picture of your scanned document and save it to your phone.
              In the following pop-up menu, press Download in the bottom-right
              corner of the scanned document’s thumbnail.
            </li>
          </ol>
        </div>
        <div className="flex items-center w-full lg:w-2/5 mt-6 lg:mt-0 px-3">
          <Image
            src="/ScannerSetup/img4.png"
            alt="printer2"
            width={500}
            height={300}
          ></Image>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ScannerSetUp;
