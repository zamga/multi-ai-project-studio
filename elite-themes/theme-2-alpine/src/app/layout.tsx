import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Alpine Wealth | Swiss Private Banking",
  description: "Discreet wealth management in the Swiss tradition. Preserving legacies since 1847.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${libreBaskerville.variable} ${dmSans.variable} font-body antialiased bg-alpine-white text-alpine-ink`}
      >
        {children}
      </body>
    </html>
  );
}
