"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";

export default function Home() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
    localStorage.setItem("cookieAccepted", "true");
  };
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    businessConsent: false,
    privacyConsent: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      alert("Please agree to the Privacy Policy to submit the form.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will be in touch shortly.");
  };

  return (
    <div className="bg-[var(--mck-white)] min-h-screen">
      {/* Header */}
      <header className="py-8 px-8 border-b border-[var(--mck-gray)] bg-[var(--mck-white)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-1 bg-[var(--mck-accent)]"></div>
          </div>
          <h1 className="text-3xl font-bold text-[var(--mck-black)] tracking-tight">BERGWEISS LTD</h1>
          <p className="text-[var(--mck-dark)] mt-2 text-lg">Corporate Finance Advisory for Private Companies (Europe)</p>
        </div>
      </header>

      {/* What We Do Section */}
      <section className="py-16 px-8 bg-[var(--mck-light)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-[var(--mck-accent)]"></div>
            <span className="text-sm font-semibold text-[var(--mck-accent)] uppercase tracking-wider">What We Do</span>
          </div>
          <ul className="space-y-4 text-lg text-[var(--mck-dark)] mt-8">
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[var(--mck-accent)]"></div>
              M&A
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[var(--mck-teal)]"></div>
              Valuation
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[var(--mck-blue)]"></div>
              Intermediary / Introductions (B2B)
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[var(--mck-accent)]"></div>
              Research
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[var(--mck-teal)]"></div>
              IPO / Capital Markets (Partner-led)
            </li>
            <li className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[var(--mck-blue)]"></div>
              SPAC (Partner-led)
            </li>
          </ul>
        </div>
      </section>

      {/* Who We Are Section with Team/Leadership */}
      <section className="py-16 px-8 bg-[var(--mck-white)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-[var(--mck-accent)]"></div>
            <span className="text-sm font-semibold text-[var(--mck-accent)] uppercase tracking-wider">Who We Are</span>
          </div>
          <p className="text-xl text-[var(--mck-dark)] mt-6 leading-relaxed">
            BERGWEISS LTD is an independent advisory focused on private-company transactions across Europe.
          </p>
          
          {/* Team/Leadership Section */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 bg-[var(--mck-teal)]"></div>
              <span className="text-sm font-semibold text-[var(--mck-teal)] uppercase tracking-wider">Leadership</span>
            </div>
            <div className="bg-[var(--mck-light)] p-6 rounded-lg">
              <a 
                href="https://www.linkedin.com/in/marko-srol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-semibold text-[var(--mck-accent)] hover:text-[var(--mck-teal)] transition-colors"
              >
                Marko Srol
              </a>
              <p className="text-[var(--mck-dark)] mt-1">Managing Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-[var(--mck-blue)] text-[var(--mck-white)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-[var(--mck-teal)]"></div>
            <span className="text-sm font-semibold text-[var(--mck-teal)] uppercase tracking-wider">Contact</span>
          </div>
          <p className="text-[var(--mck-white)]/80 mt-4 mb-10">Email: info@berg-weiss.com</p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium block mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-[var(--mck-white)]/10 border border-[var(--mck-white)]/20 focus:border-[var(--mck-teal)] outline-none px-4 py-3 text-[var(--mck-white)] placeholder-[var(--mck-white)]/50 transition-colors duration-300"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Company</label>
              <input 
                type="text" 
                className="w-full bg-[var(--mck-white)]/10 border border-[var(--mck-white)]/20 focus:border-[var(--mck-teal)] outline-none px-4 py-3 text-[var(--mck-white)] placeholder-[var(--mck-white)]/50 transition-colors duration-300"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-[var(--mck-white)]/10 border border-[var(--mck-white)]/20 focus:border-[var(--mck-teal)] outline-none px-4 py-3 text-[var(--mck-white)] placeholder-[var(--mck-white)]/50 transition-colors duration-300"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Message</label>
              <textarea 
                rows={4} 
                className="w-full bg-[var(--mck-white)]/10 border border-[var(--mck-white)]/20 focus:border-[var(--mck-teal)] outline-none px-4 py-3 text-[var(--mck-white)] placeholder-[var(--mck-white)]/50 transition-colors duration-300 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            {/* Business Capacity Checkbox */}
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="businessConsent" 
                className="w-5 h-5 accent-[var(--mck-teal)]"
                checked={formData.businessConsent}
                onChange={(e) => setFormData({...formData, businessConsent: e.target.checked})}
              />
              <label htmlFor="businessConsent" className="text-sm text-[var(--mck-white)]/80">
                I confirm I am contacting BERGWEISS in a business capacity.
              </label>
            </div>
            
            {/* GDPR Privacy Policy Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="privacyConsent" 
                className="w-5 h-5 accent-[var(--mck-teal)] mt-0.5"
                checked={formData.privacyConsent}
                onChange={(e) => setFormData({...formData, privacyConsent: e.target.checked})}
                required
              />
              <label htmlFor="privacyConsent" className="text-sm text-[var(--mck-white)]/80">
                I agree to the{" "}
                <Link href="/privacy-policy" className="text-[var(--mck-teal)] hover:underline">
                  Privacy Policy
                </Link>{" "}
                and consent to being contacted regarding this enquiry.
              </label>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 bg-[var(--mck-teal)] text-[var(--mck-white)] font-medium hover:bg-[var(--mck-accent)] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Static Footer with Company Registration Details */}
      <footer className="py-6 px-8 bg-[var(--mck-black)] text-[var(--mck-white)]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-[var(--mck-white)]/60 mb-4">
            Where required, services are delivered via authorised partners.
          </p>
          <div className="border-t border-[var(--mck-white)]/10 pt-4 mt-4">
            <p className="text-xs text-[var(--mck-white)]/50 leading-relaxed">
              Bergweiss Ltd is a corporate finance consultancy. We provide strategic advice and do not offer investment advice, handle client funds, or arrange transactions in regulated securities. Any regulated activities are strictly facilitated through FCA-authorized partners.
            </p>
            <p className="text-xs text-[var(--mck-white)]/50 mt-3">
              Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ | Company No: 16949445
            </p>
            <p className="text-xs mt-3">
              <Link href="/privacy-policy" className="text-[var(--mck-teal)] hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="cookie-banner bg-[var(--mck-black)] border-t border-[var(--mck-white)]/20 py-4 px-8">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--mck-white)]/80">
              We use cookies to ensure you get the best experience on our website.
            </p>
            <button 
              onClick={handleAcceptCookies}
              className="px-6 py-2 bg-[var(--mck-teal)] text-[var(--mck-white)] text-sm font-medium hover:bg-[var(--mck-accent)] transition-colors duration-300 whitespace-nowrap"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
