"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "", consent: false });

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Header */}
      <header className="py-8 px-8 border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tight">BERGWEISS LTD</h1>
          <p className="text-gray-600 mt-1">Corporate Finance Advisory for Private Companies (Europe)</p>
        </div>
      </header>

      {/* What we do */}
      <section className="py-12 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-6">What we do</h2>
          <ul className="space-y-2 text-gray-700">
            <li>M&A</li>
            <li>Valuation</li>
            <li>Intermediary / Introductions (B2B)</li>
            <li>Research</li>
            <li>IPO / Capital Markets (Partner-led)</li>
            <li>SPAC (Partner-led)</li>
          </ul>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-12 px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-4">Who we are</h2>
          <p className="text-gray-700">
            BERGWEISS LTD is an independent advisory focused on private-company transactions across Europe.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p className="text-gray-700 mb-8">Email: info@berg-weiss.com</p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 outline-none focus:border-gray-500 resize-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="w-4 h-4"
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I confirm I am contacting BERGWEISS in a business capacity.
              </label>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-gray-500">
            Where required, services are delivered via authorised partners.
          </p>
        </div>
      </footer>
    </div>
  );
}
