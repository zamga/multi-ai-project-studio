"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message || !formData.consent) {
      return;
    }

    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company || "Not provided"}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:info@berg-weiss.com?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-bold mb-2">
          <Link href="/">BERGWEISS LTD</Link>
        </h1>
        <p className="text-lg text-gray-600">Corporate Finance Advisory for Private Companies (Europe)</p>
      </header>

      {/* What we do */}
      <section>
        <h2 className="text-2xl font-bold mb-6">What we do</h2>
        <ul className="space-y-2">
          <li className="font-bold">M&A</li>
          <li className="font-bold">Valuation</li>
          <li className="font-bold">Intermediary / Introductions (B2B)</li>
          <li className="font-bold">Research</li>
          <li className="font-bold">IPO / Capital Markets (Partner-led)</li>
          <li className="font-bold">SPAC (Partner-led)</li>
        </ul>
      </section>

      {/* Who we are */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Who we are</h2>
        <p>BERGWEISS LTD is an independent advisory focused on private-company transactions across Europe.</p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-8">Email: info@berg-weiss.com</p>

        {status === "success" ? (
          <p className="text-green-700 py-4">Thanks — we received your message.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-black resize-none"
              />
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="consent"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm">
                I confirm I am contacting BERGWEISS in a business capacity. *
              </label>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        )}

        <p className="text-sm text-gray-600 mt-8">
          Where required, services are delivered via authorised partners.
        </p>
      </section>
    </div>
  );
}
