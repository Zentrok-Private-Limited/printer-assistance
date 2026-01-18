"use client";
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
function DownloadPrinterDrivers() {

  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState(null);
  const router = useRouter();

  const handleInstallClick = () => {
    setStage("downloading");

    setTimeout(() => {
      setStage("installing");
    }, 8000);

    setTimeout(() => {
      setStage(null);
      router.push("/DriverInstallation");
    }, 16000);
  };

  return (
    <div className="relative">

      {stage && (
        <div className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-xl flex flex-col items-center">
            <Image
              src="/loading.gif" 
              alt="loading"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="text-lg font-light text-gray-700 mb-2">
              {stage === "downloading"
                ? "Downloading HP Driver..."
                : "Installing HP Smart..."}
            </p>

            {stage === "downloading" && (
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mt-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="h-2 bg-blue-600"
                />
              </div>
            )}

            {stage === "installing" && (
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mt-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="h-2 bg-[#080880]"
                />
              </div>
            )}
          </div>
        </div>
      )}


      <div className="h-screen w-full">
        <nav className="hidden md:hidden lg:flex h-[10%] items-center px-15">
          <ul className="flex gap-14 font-semibold">
            <li>
              <a href="#">Officejet</a>
            </li>
            <li>
              <a href="#">Deskjet</a>
            </li>
            <li>
              <a href="#">Envy</a>
            </li>
            <li>
              <a href="#">Laserjet</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Nav */}
        <div className="lg:hidden bg-[#007CBF] text-white px-6 py-3 flex justify-between items-center">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="lg:hidden bg-[#007CBF] text-white px-6 py-4 space-y-3">
            <a href="/FixOfflinePrinter" className="block hover:text-gray-200">
              Officejet
            </a>
            <a href="#" className="block hover:text-gray-200">
              Deskjet
            </a>
            <a href="#" className="block hover:text-gray-200">
              Envy
            </a>
            <a href="#" className="block hover:text-gray-200">
              Laserjet
            </a>
          </div>
        )}

        <div className="h-[80%] w-full relative">
          <div className="hidden md:flex lg:flex">
            <Image
              src="/DownloadDriver/bg-img.jpg"
              alt="bg"
              height={100}
              width={1500}
              className="object-cover"
            />
          </div>

          {/* Mobile Image */}
          <div className="flex md:flex lg:hidden">
            <Image
              src="/DownloadDriver/bg-mb.png"
              alt="bg"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute z-10 top-20 md:top-40 lg:top-50 left-10 md:left-20 lg:left-20 h-4/12 md:w-full lg:w-2/5">
            <div className="w-full md:w-full flex flex-col md:flex-row lg:flex-row gap-4">
              <input
                type="text"
                className="w-full md:w-1/2 lg:w-4/5 border border-black/20 bg-white px-4 py-2 rounded-xl md:text-lg"
                placeholder='Enter your product name here. Example:"ENVY 4520"'
              />
              <a className="px-4 py-2 w-18 bg-black text-white rounded-xl md:text-lg" onClick={handleInstallClick} href="#">
                Next
              </a>
            </div>
            <div className="pt-3">
              <p className="text-white text-base md:text-lg md:py-2 lg:text-lg underline px-2">
                Where's the model number?
              </p>
            </div>
            <div>
              <p className="text-white text-base md:text-lg lg:text-lg underline px-2">
                My device is not listed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadPrinterDrivers;
