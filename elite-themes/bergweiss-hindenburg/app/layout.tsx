import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Navigation from "./components/Navigation";
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
        <header className="py-8 px-6">
          <div className="max-w-[760px] mx-auto flex items-center justify-between">
            <Navigation />
            <Link href="/" className="text-sm uppercase tracking-wider font-medium hover:no-underline">
              BERGWEISS LTD
            </Link>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
