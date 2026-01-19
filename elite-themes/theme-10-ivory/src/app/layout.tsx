import type { Metadata } from "next";
import { Libre_Baskerville, Nunito_Sans } from "next/font/google";
import "./globals.css";

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const nunito = Nunito_Sans({
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
        className={`${baskerville.variable} ${nunito.variable} font-body antialiased bg-ivory-white text-ivory-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
