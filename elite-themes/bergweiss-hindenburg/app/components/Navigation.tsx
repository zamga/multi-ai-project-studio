"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm uppercase tracking-wider hover:no-underline"
      >
        <span className="flex flex-col gap-1">
          <span className="w-5 h-0.5 bg-current" />
          <span className="w-5 h-0.5 bg-current" />
          <span className="w-5 h-0.5 bg-current" />
        </span>
        Toggle Navigation
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="max-w-[760px] mx-auto px-6 py-8">
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-wider mb-12 hover:no-underline"
            >
              Close
            </button>
            <nav className="space-y-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block text-2xl font-serif"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block text-2xl font-serif"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-2xl font-serif"
              >
                Contact us
              </Link>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-2xl font-serif"
              >
                X
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
