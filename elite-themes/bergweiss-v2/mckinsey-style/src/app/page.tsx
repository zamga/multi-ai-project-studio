"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  { title: "M&A", desc: "Strategic mergers and acquisitions advisory for private companies seeking transformative growth or exit opportunities.", color: "bg-mck-accent" },
  { title: "Valuation", desc: "Comprehensive enterprise valuation services leveraging institutional-grade methodologies and market intelligence.", color: "bg-mck-teal" },
  { title: "Intermediary / Introductions", desc: "Curated B2B introductions connecting principals with strategic partners, investors, and acquirers across Europe.", color: "bg-mck-blue" },
  { title: "Research", desc: "Deep-dive sector analysis and competitive intelligence to inform strategic decision-making.", color: "bg-mck-accent" },
  { title: "IPO / Capital Markets", desc: "Partner-led guidance through public market transactions and capital raising initiatives.", color: "bg-mck-teal" },
  { title: "SPAC", desc: "Partner-led SPAC advisory for companies seeking alternative paths to public markets.", color: "bg-mck-blue" },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "", consent: false });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-mck-white min-h-screen">
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-mck-white border-b border-mck-gray"
      >
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-mck-black">BERGWEISS</h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-mck-dark">
            {["Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-mck-accent transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Hero Section - McKinsey style with bold typography */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-mck-accent" />
              <span className="text-sm font-semibold text-mck-accent uppercase tracking-wider">Corporate Finance Advisory</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-mck-black mb-8 leading-tight">
              BERGWEISS
              <span className="block text-mck-accent">LTD</span>
            </h1>
            <p className="text-xl text-mck-dark mb-10 leading-relaxed max-w-lg">
              Corporate Finance Advisory for Private Companies across Europe. We deliver clarity in complexity.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                className="px-8 py-4 bg-mck-black text-mck-white font-medium hover:bg-mck-blue transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Our Services →
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-mck-black text-mck-black font-medium hover:bg-mck-black hover:text-mck-white transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Abstract geometric design */}
            <div className="relative w-full aspect-square">
              <motion.div 
                className="absolute top-0 right-0 w-3/4 h-3/4 bg-mck-accent"
                animate={{ rotate: [0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-mck-blue"
                animate={{ rotate: [0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-mck-white p-12 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "€500M+", label: "Transaction Value" },
                      { value: "50+", label: "Deals" },
                      { value: "15+", label: "Years" },
                      { value: "12", label: "Markets" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <span className="text-3xl font-bold text-mck-black block">{stat.value}</span>
                        <span className="text-xs text-mck-mid uppercase tracking-wider">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Tab-based like McKinsey */}
      <section id="services" className="py-32 px-8 bg-mck-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-mck-accent" />
              <span className="text-sm font-semibold text-mck-accent uppercase tracking-wider">What We Do</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-mck-black">Our Services</h2>
          </motion.div>

          {/* Service tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-mck-gray">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 text-sm font-medium transition-all duration-300 border-b-2 -mb-px ${
                  activeTab === index 
                    ? 'border-mck-accent text-mck-accent' 
                    : 'border-transparent text-mck-mid hover:text-mck-dark'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active service content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-mck-black mb-6">{services[activeTab].title}</h3>
              <p className="text-lg text-mck-dark leading-relaxed mb-8">{services[activeTab].desc}</p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-mck-accent font-medium hover:gap-4 transition-all duration-300"
              >
                Learn more <span>→</span>
              </motion.a>
            </div>
            <div className={`${services[activeTab].color} h-64 lg:h-96`} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-mck-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-mck-accent" />
                <span className="text-sm font-semibold text-mck-accent uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-mck-black mb-8">Independent Advisory</h2>
              <p className="text-lg text-mck-dark leading-relaxed mb-6">
                BERGWEISS LTD is an independent advisory focused on private-company transactions across Europe. We combine deep sector expertise with a principal mindset to deliver exceptional outcomes for our clients.
              </p>
              <p className="text-lg text-mck-dark leading-relaxed">
                Our team brings decades of combined experience from leading financial institutions, providing institutional-grade advisory services to the private company market.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-1"
            >
              {[
                { value: "€500M+", label: "Transaction Value Facilitated", bg: "bg-mck-accent" },
                { value: "50+", label: "Completed Deals", bg: "bg-mck-blue" },
                { value: "15+", label: "Years Experience", bg: "bg-mck-teal" },
                { value: "12", label: "European Markets", bg: "bg-mck-black" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className={`${stat.bg} p-8 text-mck-white`}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-4xl font-bold block mb-2">{stat.value}</span>
                  <span className="text-sm opacity-80">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-mck-blue text-mck-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-mck-teal" />
              <span className="text-sm font-semibold text-mck-teal uppercase tracking-wider">Contact</span>
              <div className="w-12 h-1 bg-mck-teal" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-mck-white/70">Email: info@berg-weiss.com</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium block mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-mck-white/10 border border-mck-white/20 focus:border-mck-teal outline-none px-4 py-3 text-mck-white placeholder-mck-white/50 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-mck-white/10 border border-mck-white/20 focus:border-mck-teal outline-none px-4 py-3 text-mck-white placeholder-mck-white/50 transition-colors duration-300"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-mck-white/10 border border-mck-white/20 focus:border-mck-teal outline-none px-4 py-3 text-mck-white placeholder-mck-white/50 transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-mck-white/10 border border-mck-white/20 focus:border-mck-teal outline-none px-4 py-3 text-mck-white placeholder-mck-white/50 transition-colors duration-300 resize-none"
                placeholder="How can we help?"
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
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-mck-black text-mck-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm font-medium">BERGWEISS LTD</span>
            <p className="text-xs text-mck-white/60 text-center md:text-right">
              Where required, services are delivered via authorised partners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
