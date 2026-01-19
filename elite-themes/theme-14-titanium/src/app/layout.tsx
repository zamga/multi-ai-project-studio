import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Bergweiss Ltd | Strategic Transaction Advisory",
  description: "Bridging Capital & Legacy. Specialized transaction structuring for the industrial backbone of Central Europe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${instrument.variable} font-body antialiased bg-titanium-black text-titanium-white`}
      >
        {children}
      </body>
    </html>
  );
}
