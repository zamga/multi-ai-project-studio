import type { Metadata } from "next";
import { Crimson_Pro, Raleway } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const raleway = Raleway({
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
        className={`${crimson.variable} ${raleway.variable} font-body antialiased bg-sapphire-black text-sapphire-white`}
      >
        {children}
      </body>
    </html>
  );
}
