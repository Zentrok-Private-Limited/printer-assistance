import { Geist, Geist_Mono,Quicksand } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { CartProvider } from "../app/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.printerassistance.com/"),

  title: {
    default: "Printer Assistance | Printer Setup & Driver Support",
    template: "%s | Printer Assistance",
  },

  description:
    "Get expert help for printer setup, driver installation, WiFi connection issues, offline errors, and troubleshooting for HP, Canon, Epson, and Brother printers.",

  keywords: [
    "printer assistance",
    "printer setup support",
    "printer driver installation",
    "HP printer support",
    "Canon printer setup",
    "Brother printer troubleshooting",
    "Epson printer help",
  ],

  alternates: {
    canonical: "https://www.printerassistance.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17693719813"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17693719813');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} antialiased`}
      >
        <CartProvider>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
