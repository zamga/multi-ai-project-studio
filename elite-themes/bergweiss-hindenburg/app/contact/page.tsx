"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    consent: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:info@berg-weiss.com?subject=${subject}&body=${body}`;
      setFormSubmitted(true);
    } catch {
      setFormError(true);
    }
  };

  return (
    <div className="max-w-[760px] mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact us</h1>
      
      <p className="text-lg mb-8">
        Email: <a href="mailto:info@berg-weiss.com" className="underline">info@berg-weiss.com</a>
      </p>

      {formSubmitted ? (
        <p className="text-green-600 text-lg">Thanks — we received your message.</p>
      ) : formError ? (
        <p className="text-red-600 text-lg">Something went wrong. Please email info@berg-weiss.com</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
          <div>
            <label className="block text-sm mb-2">Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Message *</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black resize-none"
            />
          </div>
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 w-4 h-4"
            />
            <label htmlFor="consent" className="text-sm">
              I confirm I am contacting BERGWEISS in a business capacity. *
            </label>
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-black text-white text-sm hover:bg-gray-800"
          >
            Send
          </button>
        </form>
      )}

      <div className="mt-16 pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Company Details</h2>
        <p className="text-gray-600">
          BERGWEISS LTD<br />
          Company No: 16949445<br />
          Registered Office: 71–75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ<br />
          Registered in: England and Wales
        </p>
      </div>
    </div>
  );
}
