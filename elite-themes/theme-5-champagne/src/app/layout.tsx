import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Aurum Private | Ultra-High Net Worth Advisory",
  description: "Bespoke wealth solutions for the world's most discerning families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lora.variable} ${raleway.variable} font-body antialiased bg-champagne-cream text-champagne-espresso`}
      >
        {children}
      </body>
    </html>
  );
}
