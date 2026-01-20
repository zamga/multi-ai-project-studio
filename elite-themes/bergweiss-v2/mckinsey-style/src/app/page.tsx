"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "", consent: false });

  return (
    <div className="bg-mck-white min-h-screen">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-8 px-8 border-b border-mck-gray bg-mck-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-1 bg-mck-accent" />
          </div>
          <h1 className="text-3xl font-bold text-mck-black tracking-tight">BERGWEISS LTD</h1>
          <p className="text-mck-dark mt-2 text-lg">Corporate Finance Advisory for Private Companies (Europe)</p>
        </div>
      </motion.header>

      {/* What we do */}
      <section className="py-16 px-8 bg-mck-light">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-mck-accent" />
              <span className="text-sm font-semibold text-mck-accent uppercase tracking-wider">What We Do</span>
            </div>
            <ul className="space-y-4 text-lg text-mck-dark mt-8">
              <motion.li 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-2 h-2 bg-mck-accent" />
                M&A
              </motion.li>
              <motion.li 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <div className="w-2 h-2 bg-mck-teal" />
                Valuation
              </motion.li>
              <motion.li 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-mck-blue" />
                Intermediary / Introductions (B2B)
              </motion.li>
              <motion.li 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <div className="w-2 h-2 bg-mck-accent" />
                Research
              </motion.li>
              <motion.li 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-2 h-2 bg-mck-teal" />
                IPO / Capital Markets (Partner-led)
              </motion.li>
              <motion.li 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <div className="w-2 h-2 bg-mck-blue" />
                SPAC (Partner-led)
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 px-8 bg-mck-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-mck-accent" />
              <span className="text-sm font-semibold text-mck-accent uppercase tracking-wider">Who We Are</span>
            </div>
            <p className="text-xl text-mck-dark mt-6 leading-relaxed">
              BERGWEISS LTD is an independent advisory focused on private-company transactions across Europe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8 bg-mck-blue text-mck-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-mck-teal" />
              <span className="text-sm font-semibold text-mck-teal uppercase tracking-wider">Contact</span>
            </div>
            <p className="text-mck-white/80 mt-4 mb-10">Email: info@berg-weiss.com</p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="text-sm font-medium block mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-mck-white/10 border border-mck-white/20 focus:border-mck-teal outline-none px-4 py-3 text-mck-white placeholder-mck-white/50 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-mck-white/10 border border-mck-white/20 focus:border-mck-teal outline-none px-4 py-3 text-mck-white placeholder-mck-white/50 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-mck-white/10 border border-mck-white/20 focus:border-mck-teal outline-none px-4 py-3 text-mck-white placeholder-mck-white/50 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-mck-white/10 border border-mck-white/20 focus:border-mck-teal outline-none px-4 py-3 text-mck-white placeholder-mck-white/50 transition-colors duration-300 resize-none"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="w-5 h-5 accent-mck-teal"
                />
                <label htmlFor="consent" className="text-sm text-mck-white/80">
                  I confirm I am contacting BERGWEISS in a business capacity.
                </label>
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 bg-mck-teal text-mck-white font-medium hover:bg-mck-accent transition-all duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 bg-mck-black text-mck-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-mck-white/60">
            Where required, services are delivered via authorised partners.
          </p>
        </div>
      </footer>
    </div>
  );
}
