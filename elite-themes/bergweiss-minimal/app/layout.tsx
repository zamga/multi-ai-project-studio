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
      <body className="antialiased">
        <main className="max-w-2xl mx-auto px-6 py-12">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
