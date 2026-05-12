"use client";

import { useState, useEffect } from "react";

export default function CookiePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");

    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowPopup(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50 w-[95%] max-w-md rounded-md border border-gray-200 bg-white p-5 shadow-2xl">
      
      {/* Close Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute right-3 top-2 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>

      {/* Heading */}
      <h2 className="mb-3 text-2xl font-bold text-black">
        We value your privacy
      </h2>

      {/* Description */}
      <p className="mb-5 text-sm leading-7 text-gray-700">
        We use cookies to enhance your browsing experience, serve personalized
        ads or content, and analyze our traffic. By clicking{" "}
        <span className="font-semibold">"Accept All"</span>, you consent to our
        use of cookies.{" "}
        <a
          href="/PrivacyPolicy"
          className="text-blue-600 underline"
        >
          Cookie Policy
        </a>
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          className="w-full rounded border border-blue-600 bg-white px-4 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
        >
          Customize
        </button>

        <button
          onClick={handleReject}
          className="w-full rounded border border-blue-600 bg-white px-4 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
        >
          Reject All
        </button>

        <button
          onClick={handleAccept}
          className="w-full rounded bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}