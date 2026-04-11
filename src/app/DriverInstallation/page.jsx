import React from "react";

export default function DriverInstallation() {
  return (
    <div className="min-h-screen bg-[#e6e7e8] flex flex-col relative overflow-hidden font-sans">
      {/* Header with HP Logo */}
      <div className="w-full p-6 flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">Installing</h1>
          <p className="text-gray-600 text-sm">Fatal error occurred during installation..</p>
        </div>
        {/* Replace with your HP Logo SVG or Image */}
        <div className="w-16 h-16 bg-[#007DBA] rounded-full flex items-center justify-center text-white font-bold text-3xl italic">
          <img src="/hp-icon.png" alt="hp-icon" />
        </div>
      </div>

      {/* Main Content Card */}
      <div className="flex-grow flex flex-col items-center justify-start pt-10 px-4">
        <div className="max-w-2xl w-full text-center">
          
          {/* Error Illustration Placeholder */}
          <div className="relative inline-block mb-6">
             {/* Printer Icon Placeholder */}
             <div className="w-40 h-24 border-2 border-gray-400 rounded-md bg-white relative mx-auto">
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-gray-300"></div>
                <div className="absolute -bottom-4 left-6 right-6 h-6 border border-gray-400 bg-white shadow-sm"></div>
             </div>
             {/* Red Prohibited Sign */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 border-[6px] border-red-600 rounded-full flex items-center justify-center relative">
                    <div className="w-14 h-[6px] bg-red-600 rotate-45"></div>
                    <span className="absolute text-[10px] font-bold text-red-600 top-4">ERROR</span>
                </div>
             </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">2 Issues Found</h2>
          <hr className="border-gray-400 w-64 mx-auto mb-8" />

          {/* Error List */}
          <div className="space-y-4 text-gray-800 text-lg">
            <p className="flex items-center justify-center">
              1. Network Error <span className="font-semibold ml-1">0x00000709</span> : Download Could Not be Completed !
            </p>
            <p className="max-w-xl mx-auto">
              2. Printer driver installation has been failed due to error 
              <span className="font-semibold px-1">"C0000022"</span> preventing product driver installation !
            </p>
          </div>

          {/* Support Button */}
          <button className="mt-10 bg-[#007DBA] hover:bg-[#006699] text-white text-xl py-3 px-12 rounded-lg transition-colors shadow-md">
            Hp Chat Support
          </button>
        </div>
      </div>

      {/* Blue Slanted Footer Overlay */}
      <div className="hidden md:flex absolute bottom-0 left-0 w-full h-32 pointer-events-none">
        <div 
          className="absolute bottom-0 left-0 w-full h-full bg-[#007DBA]" 
          style={{ clipPath: 'polygon(0 0%, 100% 100%, 0 100%)' }}
        >
            <div className="absolute bottom-4 left-6 text-white/40 font-bold text-5xl italic border-4 border-white/40 rounded-full w-20 h-20 flex items-center justify-center">
               <img src="/hp-icon.png" alt="hp-icon" />
            </div>
        </div>
      </div>
    </div>
  );
}