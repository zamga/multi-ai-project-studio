import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export const metadata: Metadata = {
  title: "BERGWEISS LTD",
  description: "Corporate Finance Advisory for Private Companies (Europe)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <main className="max-w-[680px] w-full mx-auto px-6 py-16 flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
