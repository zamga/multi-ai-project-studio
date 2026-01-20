"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  { title: "M&A", desc: "Strategic mergers and acquisitions advisory for private companies seeking transformative growth or exit opportunities.", gradient: "from-elite-rose to-elite-violet" },
  { title: "Valuation", desc: "Comprehensive enterprise valuation services leveraging institutional-grade methodologies and market intelligence.", gradient: "from-elite-violet to-elite-indigo" },
  { title: "Intermediary / Introductions", desc: "Curated B2B introductions connecting principals with strategic partners, investors, and acquirers across Europe.", gradient: "from-elite-indigo to-elite-blue" },
  { title: "Research", desc: "Deep-dive sector analysis and competitive intelligence to inform strategic decision-making.", gradient: "from-elite-blue to-elite-violet" },
  { title: "IPO / Capital Markets", desc: "Partner-led guidance through public market transactions and capital raising initiatives.", gradient: "from-elite-violet to-elite-rose" },
  { title: "SPAC", desc: "Partner-led SPAC advisory for companies seeking alternative paths to public markets.", gradient: "from-elite-rose to-elite-indigo" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "", consent: false });

  return (
    <div ref={containerRef} className="bg-elite-black min-h-screen">
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-elite-black/80 backdrop-blur-xl"
      >
        <nav className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-elite-rose via-elite-violet to-elite-indigo bg-clip-text text-transparent">BERGWEISS</span>
          </h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-elite-silver">
            {["Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-elite-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -left-32 w-96 h-96 bg-elite-rose/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-elite-violet/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-elite-indigo/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div 
          className="max-w-7xl mx-auto px-8 py-32 relative z-10"
          style={{ scale, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-elite-gray/50 text-elite-silver text-sm font-medium mb-8 border border-elite-mid/30">
              Corporate Finance Advisory
            </span>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-elite-rose via-elite-violet to-elite-indigo bg-clip-text text-transparent">BERGWEISS</span>
              <span className="block text-elite-white mt-2">LTD</span>
            </h1>

            <p className="text-xl md:text-2xl text-elite-silver mb-12 max-w-2xl mx-auto leading-relaxed">
              Corporate Finance Advisory for Private Companies across Europe
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#services"
                className="group px-8 py-4 bg-gradient-to-r from-elite-rose to-elite-violet text-elite-white font-medium rounded-full hover:shadow-lg hover:shadow-elite-violet/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 border border-elite-mid text-elite-white font-medium rounded-full hover:bg-elite-gray/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "€500M+", label: "Transaction Value" },
              { value: "50+", label: "Deals Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "12", label: "European Markets" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-elite-rose to-elite-violet bg-clip-text text-transparent block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-elite-silver">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8 bg-elite-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-elite-violet text-sm font-semibold tracking-widest uppercase">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-elite-white">Our Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-elite-gray/30 rounded-2xl p-8 border border-elite-mid/20 hover:border-elite-violet/50 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                  <span className="text-elite-white font-bold text-lg">{service.title.charAt(0)}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-elite-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-elite-rose group-hover:to-elite-violet group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-elite-silver leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-elite-black relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-elite-dark via-elite-black to-elite-black" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-elite-violet text-sm font-semibold tracking-widest uppercase">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-elite-white">Independent Advisory</h2>
              <p className="text-lg text-elite-silver leading-relaxed mb-6">
                BERGWEISS LTD is an independent advisory focused on private-company transactions across Europe. We combine deep sector expertise with a principal mindset to deliver exceptional outcomes for our clients.
              </p>
              <p className="text-lg text-elite-silver leading-relaxed">
                Our team brings decades of combined experience from leading financial institutions, providing institutional-grade advisory services to the private company market.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "€500M+", label: "Transaction Volume", gradient: "from-elite-rose to-elite-violet" },
                { value: "50+", label: "Completed Deals", gradient: "from-elite-violet to-elite-indigo" },
                { value: "15+", label: "Years Experience", gradient: "from-elite-indigo to-elite-blue" },
                { value: "12", label: "European Markets", gradient: "from-elite-blue to-elite-violet" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-elite-gray/30 rounded-2xl p-6 border border-elite-mid/20"
                  whileHover={{ scale: 1.02, borderColor: "rgba(139, 92, 246, 0.5)" }}
                >
                  <span className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent block mb-2`}>
                    {stat.value}
                  </span>
                  <span className="text-sm text-elite-silver">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-elite-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-elite-violet text-sm font-semibold tracking-widest uppercase">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-elite-white">Get in Touch</h2>
            <p className="text-elite-silver mt-4">Email: info@berg-weiss.com</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-elite-gray/30 rounded-3xl p-10 border border-elite-mid/20"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium text-elite-light block mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-elite-black/50 border border-elite-mid/30 focus:border-elite-violet rounded-xl outline-none px-4 py-3 text-elite-white transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-elite-light block mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-elite-black/50 border border-elite-mid/30 focus:border-elite-violet rounded-xl outline-none px-4 py-3 text-elite-white transition-colors duration-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium text-elite-light block mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-elite-black/50 border border-elite-mid/30 focus:border-elite-violet rounded-xl outline-none px-4 py-3 text-elite-white transition-colors duration-300"
              />
            </div>
            <div className="mb-6">
              <label className="text-sm font-medium text-elite-light block mb-2">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-elite-black/50 border border-elite-mid/30 focus:border-elite-violet rounded-xl outline-none px-4 py-3 text-elite-white transition-colors duration-300 resize-none"
              />
            </div>
            <div className="flex items-center gap-3 mb-8">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="w-5 h-5 accent-elite-violet rounded"
              />
              <label htmlFor="consent" className="text-sm text-elite-silver">
                I confirm I am contacting BERGWEISS in a business capacity.
              </label>
            </div>
            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-elite-rose to-elite-violet text-elite-white font-medium rounded-xl hover:shadow-lg hover:shadow-elite-violet/25 transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-elite-black border-t border-elite-gray/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-elite-silver text-sm font-medium">BERGWEISS LTD</span>
            <p className="text-elite-mid text-xs text-center md:text-right">
              Where required, services are delivered via authorised partners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
