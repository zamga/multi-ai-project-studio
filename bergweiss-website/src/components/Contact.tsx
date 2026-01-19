"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    enterpriseValue: "",
    ebitda: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-bergweiss-navy relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bergweiss-cream/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-bergweiss-gold text-sm tracking-widest uppercase mb-4 block">
              Begin the Conversation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-bergweiss-cream mb-8">
              Request a Consultation
            </h2>
            <p className="text-bergweiss-cream/70 leading-relaxed mb-8">
              Every engagement begins with a confidential discussion. Share your enterprise profile, and our principals will assess alignment with our advisory capabilities.
            </p>
            <div className="space-y-4 text-bergweiss-cream/50 text-sm">
              <p>
                <span className="text-bergweiss-gold">Response Time:</span> Within 48 business hours
              </p>
              <p>
                <span className="text-bergweiss-gold">Confidentiality:</span> All inquiries are treated with strict discretion
              </p>
              <p>
                <span className="text-bergweiss-gold">Qualification:</span> EBITDA-positive enterprises preferred
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-bergweiss-cream/70 text-sm mb-2 tracking-wide"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-bergweiss-cream/20 px-4 py-3 text-bergweiss-cream placeholder-bergweiss-cream/30 focus:border-bergweiss-gold focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-bergweiss-cream/70 text-sm mb-2 tracking-wide"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-bergweiss-cream/20 px-4 py-3 text-bergweiss-cream placeholder-bergweiss-cream/30 focus:border-bergweiss-gold focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-bergweiss-cream/70 text-sm mb-2 tracking-wide"
                >
                  Company / Entity Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-bergweiss-cream/20 px-4 py-3 text-bergweiss-cream placeholder-bergweiss-cream/30 focus:border-bergweiss-gold focus:outline-none transition-colors duration-300"
                  placeholder="Company name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label
                    htmlFor="enterpriseValue"
                    className="block text-bergweiss-cream/70 text-sm mb-2 tracking-wide"
                  >
                    Estimated Enterprise Value
                  </label>
                  <div className="relative">
                    <select
                      id="enterpriseValue"
                      name="enterpriseValue"
                      value={formData.enterpriseValue}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-bergweiss-cream/20 px-4 py-3 text-bergweiss-cream focus:border-bergweiss-gold focus:outline-none transition-colors duration-300 appearance-none cursor-pointer pr-10"
                    >
                      <option value="" disabled className="bg-bergweiss-navy">
                        Select range
                      </option>
                      <option value="1-5m" className="bg-bergweiss-navy">€1M - €5M</option>
                      <option value="5-10m" className="bg-bergweiss-navy">€5M - €10M</option>
                      <option value="10-25m" className="bg-bergweiss-navy">€10M - €25M</option>
                      <option value="25-50m" className="bg-bergweiss-navy">€25M - €50M</option>
                      <option value="50m+" className="bg-bergweiss-navy">€50M+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-bergweiss-cream/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="ebitda"
                    className="block text-bergweiss-cream/70 text-sm mb-2 tracking-wide"
                  >
                    Annual EBITDA
                  </label>
                  <div className="relative">
                    <select
                      id="ebitda"
                      name="ebitda"
                      value={formData.ebitda}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-bergweiss-cream/20 px-4 py-3 text-bergweiss-cream focus:border-bergweiss-gold focus:outline-none transition-colors duration-300 appearance-none cursor-pointer pr-10"
                    >
                      <option value="" disabled className="bg-bergweiss-navy">
                        Select range
                      </option>
                      <option value="70-100k" className="bg-bergweiss-navy">€70K - €100K</option>
                      <option value="100-150k" className="bg-bergweiss-navy">€100K - €150K</option>
                      <option value="150-200k" className="bg-bergweiss-navy">€150K - €200K</option>
                      <option value="200-500k" className="bg-bergweiss-navy">€200K - €500K</option>
                      <option value="500k+" className="bg-bergweiss-navy">€500K+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-bergweiss-cream/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-bergweiss-cream/70 text-sm mb-2 tracking-wide"
                >
                  Brief Description of Your Objectives
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border border-bergweiss-cream/20 px-4 py-3 text-bergweiss-cream placeholder-bergweiss-cream/30 focus:border-bergweiss-gold focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Describe your transaction objectives..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 border border-bergweiss-gold text-bergweiss-gold hover:bg-bergweiss-gold hover:text-bergweiss-navy transition-all duration-500 text-sm tracking-widest uppercase mt-4"
              >
                Submit Inquiry
              </button>

              <p className="text-bergweiss-cream/40 text-xs text-center mt-4">
                By submitting this form, you acknowledge that all information provided will be treated confidentially.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
