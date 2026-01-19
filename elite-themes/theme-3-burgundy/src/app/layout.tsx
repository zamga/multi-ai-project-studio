import type { Metadata } from "next";
import { Crimson_Pro, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Rothbury & Partners | Merchant Banking Since 1789",
  description: "Distinguished merchant banking for established families. Heritage, discretion, excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${crimsonPro.variable} ${sourceSans.variable} font-body antialiased bg-burgundy-ivory text-burgundy-deep`}
      >
        {children}
      </body>
    </html>
  );
}
