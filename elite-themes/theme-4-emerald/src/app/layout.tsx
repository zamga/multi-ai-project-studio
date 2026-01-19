import type { Metadata } from "next";
import { EB_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Greenwood Capital | Institutional Investment",
  description: "Distinguished institutional investment management. Growth through prudence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ebGaramond.variable} ${outfit.variable} font-body antialiased bg-emerald-deep text-emerald-cream`}
      >
        {children}
      </body>
    </html>
  );
}
