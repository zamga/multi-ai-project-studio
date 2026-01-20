"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  { icon: "M", title: "M&A", desc: "Strategic mergers and acquisitions advisory for private companies seeking transformative growth or exit opportunities." },
  { icon: "V", title: "Valuation", desc: "Comprehensive enterprise valuation services leveraging institutional-grade methodologies and market intelligence." },
  { icon: "I", title: "Intermediary / Introductions", desc: "Curated B2B introductions connecting principals with strategic partners, investors, and acquirers across Europe." },
  { icon: "R", title: "Research", desc: "Deep-dive sector analysis and competitive intelligence to inform strategic decision-making." },
  { icon: "C", title: "IPO / Capital Markets", desc: "Partner-led guidance through public market transactions and capital raising initiatives." },
  { icon: "S", title: "SPAC", desc: "Partner-led SPAC advisory for companies seeking alternative paths to public markets." },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
    const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "", consent: false });

  return (
    <div ref={containerRef} className="bg-morgan-white min-h-screen">
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-morgan-white/95 backdrop-blur-sm shadow-sm"
      >
        <nav className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <motion.div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-morgan-navy flex items-center justify-center">
              <span className="text-morgan-white font-bold text-lg">B</span>
            </div>
            <h1 className="text-xl font-semibold tracking-wide text-morgan-navy">BERGWEISS</h1>
          </motion.div>
          <div className="hidden md:flex gap-10 text-sm font-medium text-morgan-gray">
            {["Services", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-morgan-sky transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * i }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-morgan-navy via-morgan-blue to-morgan-sky"
          style={{ y: backgroundY }}
        />
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/20"
            style={{
              width: 100 + i * 100,
              height: 100 + i * 100,
              right: -50 + i * 20,
              top: 100 + i * 50,
            }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-morgan-accent text-sm font-semibold tracking-widest uppercase mb-6 block">Corporate Finance Advisory</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-morgan-white mb-8 leading-tight">
              BERGWEISS
              <span className="block text-morgan-accent font-normal">LTD</span>
            </h1>
            <p className="text-xl text-morgan-white/80 mb-10 max-w-lg leading-relaxed">
              Corporate Finance Advisory for Private Companies across Europe. Delivering institutional-grade solutions with entrepreneurial agility.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                className="px-8 py-4 bg-morgan-white text-morgan-navy font-medium hover:bg-morgan-light transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-morgan-white/50 text-morgan-white font-medium hover:bg-morgan-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: "€500M+", label: "Transaction Value" },
              { value: "50+", label: "Deals Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "12", label: "European Markets" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-morgan-white/10 backdrop-blur-sm p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <span className="text-3xl font-light text-morgan-white block mb-2">{stat.value}</span>
                <span className="text-sm text-morgan-white/70">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-morgan-white/50 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-morgan-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8 bg-morgan-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-morgan-sky text-sm font-semibold tracking-widest uppercase">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 text-morgan-navy">Our Services</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                                className="group relative bg-morgan-light p-10 hover:bg-morgan-navy transition-all duration-500 cursor-pointer"
              >
                <div className="w-16 h-16 bg-morgan-sky text-morgan-white flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-morgan-accent transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-morgan-navy group-hover:text-morgan-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-morgan-gray group-hover:text-morgan-white/80 transition-colors duration-500 leading-relaxed">
                  {service.desc}
                </p>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-morgan-sky"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-morgan-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-morgan-sky text-sm font-semibold tracking-widest uppercase">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-light mt-4 mb-8 text-morgan-navy">Independent Excellence</h2>
              <p className="text-lg text-morgan-gray leading-relaxed mb-6">
                BERGWEISS LTD is an independent advisory focused on private-company transactions across Europe. We combine deep sector expertise with a principal mindset to deliver exceptional outcomes for our clients.
              </p>
              <p className="text-lg text-morgan-gray leading-relaxed">
                Our team brings decades of combined experience from leading financial institutions, providing institutional-grade advisory services to the private company market.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-morgan-navy p-12">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "€500M+", label: "Transaction Value" },
                    { value: "50+", label: "Completed Deals" },
                    { value: "15+", label: "Years Experience" },
                    { value: "12", label: "European Markets" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <span className="text-4xl font-light text-morgan-accent block mb-2">{stat.value}</span>
                      <span className="text-sm text-morgan-white/70">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-morgan-sky -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-morgan-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-morgan-sky text-sm font-semibold tracking-widest uppercase">Contact</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 text-morgan-navy">Get in Touch</h2>
            <p className="text-morgan-gray mt-6">Email: info@berg-weiss.com</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-morgan-light p-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium text-morgan-navy block mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-morgan-white border border-morgan-silver/30 focus:border-morgan-sky outline-none px-4 py-3 text-morgan-navy transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-morgan-navy block mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-morgan-white border border-morgan-silver/30 focus:border-morgan-sky outline-none px-4 py-3 text-morgan-navy transition-colors duration-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium text-morgan-navy block mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-morgan-white border border-morgan-silver/30 focus:border-morgan-sky outline-none px-4 py-3 text-morgan-navy transition-colors duration-300"
              />
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium text-morgan-navy block mb-2">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-morgan-white border border-morgan-silver/30 focus:border-morgan-sky outline-none px-4 py-3 text-morgan-navy transition-colors duration-300 resize-none"
              />
            </div>
            <div className="flex items-center gap-3 mb-8">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="w-5 h-5 accent-morgan-sky"
              />
              <label htmlFor="consent" className="text-sm text-morgan-gray">
                I confirm I am contacting BERGWEISS in a business capacity.
              </label>
            </div>
            <motion.button
              type="submit"
              className="w-full py-4 bg-morgan-navy text-morgan-white font-medium hover:bg-morgan-blue transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-morgan-navy">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-morgan-white/80 text-sm">BERGWEISS LTD</span>
            <p className="text-morgan-white/60 text-xs text-center md:text-right">
              Where required, services are delivered via authorised partners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
