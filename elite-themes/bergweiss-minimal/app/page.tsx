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

  const services = [
    "M&A",
    "Valuation",
    "Intermediary / Introductions (B2B)",
    "Research",
    "IPO / Capital Markets (Partner-led)",
    "SPAC (Partner-led)",
  ];

  return (
    <div className="space-y-20">
      {/* Header */}
      <header className="pt-8">
        <h1 className="text-4xl font-bold mb-3 tracking-tight">
          <Link href="/">BERGWEISS LTD</Link>
        </h1>
        <p className="text-lg text-gray-500">Corporate Finance Advisory for Private Companies (Europe)</p>
      </header>

      {/* What we do */}
      <section>
        <h2 className="text-xl font-semibold mb-8 uppercase tracking-wide text-gray-400">What we do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div key={service} className="font-semibold text-lg py-2">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section>
        <h2 className="text-xl font-semibold mb-6 uppercase tracking-wide text-gray-400">Who we are</h2>
        <p className="text-lg leading-relaxed">BERGWEISS LTD is an independent advisory focused on private-company transactions across Europe.</p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-6 uppercase tracking-wide text-gray-400">Contact</h2>
        <p className="mb-10 text-lg">Email: info@berg-weiss.com</p>

        {status === "success" ? (
          <p className="text-green-700 py-6 text-lg">Thanks — we received your message.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-600">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-600">Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>
            <div className="flex items-start gap-3 py-2">
              <input
                type="checkbox"
                id="consent"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-4 h-4"
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I confirm I am contacting BERGWEISS in a business capacity. *
              </label>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Send
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
