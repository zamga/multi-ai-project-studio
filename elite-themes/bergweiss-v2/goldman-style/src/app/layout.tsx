import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BERGWEISS LTD | Corporate Finance Advisory",
  description: "Corporate Finance Advisory for Private Companies across Europe. M&A, Valuation, Capital Markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-goldman-black text-goldman-white">
        {children}
      </body>
    </html>
  );
}
