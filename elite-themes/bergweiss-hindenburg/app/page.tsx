"use client";

import { useState } from "react";
import Link from "next/link";
import { reports } from "./lib/reports";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    consent: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("newsletter-email", email);
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
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

  const services = [
    "M&A",
    "Valuation",
    "Intermediary / Introductions (B2B)",
    "Research",
    "IPO / Capital Markets (Partner-led)",
    "SPAC (Partner-led)",
  ];

  const featuredReport = reports.find((r) => r.slug === "advisory-approach");
  const otherReports = reports.filter((r) => r.slug !== "advisory-approach");

  return (
    <div className="max-w-[760px] mx-auto px-6 py-12">
      {/* Hero / Featured Report */}
      <section className="mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">BERGWEISS LTD</h1>
        <p className="text-xl text-gray-600 mb-12">
          Corporate Finance Advisory for Private Companies (Europe)
        </p>

        {featuredReport && (
          <div className="border-t border-b border-gray-200 py-8">
            <h2 className="text-3xl font-bold mb-3">
              <Link href={`/reports/${featuredReport.slug}`} className="hover:underline">
                {featuredReport.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-4">Published on {featuredReport.date}</p>
            <Link
              href={`/reports/${featuredReport.slug}`}
              className="inline-block px-6 py-3 bg-black text-white text-sm hover:bg-gray-800"
            >
              Read Report
            </Link>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="mb-16 py-12 border-t border-gray-200">
        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">
          GET OUR LATEST UPDATES DELIVERED TO YOUR INBOX
        </h3>
        {subscribed ? (
          <p className="text-green-600">Thanks — you&apos;re subscribed.</p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white text-sm hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-xs text-gray-400 mt-3">You can unsubscribe at any time.</p>
      </section>

      {/* Reports List */}
      <section className="mb-16">
        {otherReports.map((report, index) => (
          <div key={report.slug}>
            <div className="py-8">
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/reports/${report.slug}`} className="hover:underline">
                  {report.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500">Published on {report.date}</p>
            </div>
            {index < otherReports.length - 1 && (
              <div className="asterism">* * *</div>
            )}
          </div>
        ))}
      </section>

      {/* What we do */}
      <section className="mb-16 py-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold mb-8">What we do</h3>
        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service} className="text-lg">{service}</li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="py-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold mb-6">Contact</h3>
        <p className="mb-8">
          Email: <a href="mailto:info@berg-weiss.com" className="underline">info@berg-weiss.com</a>
        </p>

        {formSubmitted ? (
          <p className="text-green-600">Thanks — we received your message.</p>
        ) : formError ? (
          <p className="text-red-600">Something went wrong. Please email info@berg-weiss.com</p>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-6">
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
      </section>
    </div>
  );
}
