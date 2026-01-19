import type { Metadata } from "next";
import { Manrope, Archivo } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const archivo = Archivo({
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
        className={`${manrope.variable} ${archivo.variable} font-body antialiased bg-charcoal-black text-charcoal-white`}
      >
        {children}
      </body>
    </html>
  );
}
