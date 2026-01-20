"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  { id: "01", title: "M&A", desc: "Strategic mergers and acquisitions advisory for private companies seeking transformative growth or exit opportunities." },
  { id: "02", title: "Valuation", desc: "Comprehensive enterprise valuation services leveraging institutional-grade methodologies and market intelligence." },
  { id: "03", title: "Intermediary / Introductions", desc: "Curated B2B introductions connecting principals with strategic partners, investors, and acquirers across Europe." },
  { id: "04", title: "Research", desc: "Deep-dive sector analysis and competitive intelligence to inform strategic decision-making." },
  { id: "05", title: "IPO / Capital Markets", desc: "Partner-led guidance through public market transactions and capital raising initiatives." },
  { id: "06", title: "SPAC", desc: "Partner-led SPAC advisory for companies seeking alternative paths to public markets." },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "", consent: false });
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div ref={containerRef} className="bg-goldman-black min-h-screen">
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-goldman-black/90 backdrop-blur-sm border-b border-goldman-gray/30"
      >
        <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <motion.h1 
            className="text-2xl tracking-[0.3em] font-light text-goldman-white"
            whileHover={{ letterSpacing: "0.4em" }}
            transition={{ duration: 0.3 }}
          >
            BERGWEISS
          </motion.h1>
          <div className="hidden md:flex gap-12 text-sm tracking-widest text-goldman-light">
            {["Services", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-goldman-gold transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {item.toUpperCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-goldman-gold group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(184, 134, 11, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(184, 134, 11, 0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-goldman-gold/30 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) 
            }}
            animate={{ 
              y: [null, Math.random() * -200],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-goldman-gold text-sm tracking-[0.5em] uppercase mb-8 block">Corporate Finance Advisory</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="block">BERGWEISS</span>
            <span className="block text-goldman-gold font-normal">LTD</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-goldman-light font-light max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Corporate Finance Advisory for Private Companies (Europe)
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="#services"
              className="px-12 py-4 bg-goldman-gold text-goldman-black text-sm tracking-widest uppercase hover:bg-goldman-accent transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Services
            </motion.a>
            <motion.a
              href="#contact"
              className="px-12 py-4 border border-goldman-gray text-goldman-white text-sm tracking-widest uppercase hover:border-goldman-gold hover:text-goldman-gold transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-goldman-gold to-transparent" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8 bg-goldman-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-goldman-gold text-sm tracking-[0.3em] uppercase">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 text-goldman-white">Our Expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-goldman-dark p-10 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-goldman-gold"
                  initial={{ x: "-100%" }}
                  animate={{ x: hoveredService === service.id ? "0%" : "-100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <div className="relative z-10">
                  <span className={`text-5xl font-light mb-6 block transition-colors duration-300 ${hoveredService === service.id ? 'text-goldman-black' : 'text-goldman-gray'}`}>
                    {service.id}
                  </span>
                  <h3 className={`text-2xl font-light mb-4 transition-colors duration-300 ${hoveredService === service.id ? 'text-goldman-black' : 'text-goldman-white'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${hoveredService === service.id ? 'text-goldman-charcoal' : 'text-goldman-light'}`}>
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-goldman-black relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-goldman-gold/5 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-goldman-gold text-sm tracking-[0.3em] uppercase">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-light mt-4 mb-8 text-goldman-white">Independent Advisory Excellence</h2>
              <p className="text-lg text-goldman-light leading-relaxed mb-8">
                BERGWEISS LTD is an independent advisory focused on private-company transactions across Europe. We combine deep sector expertise with a principal mindset to deliver exceptional outcomes for our clients.
              </p>
              <p className="text-lg text-goldman-light leading-relaxed">
                Our team brings decades of combined experience from leading financial institutions, providing institutional-grade advisory services to the private company market.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-8"
            >
              {[
                { value: "€500M+", label: "Transaction Value" },
                { value: "50+", label: "Completed Deals" },
                { value: "15+", label: "Years Experience" },
                { value: "12", label: "European Markets" },
                            ].map((stat) => (
                              <motion.div
                                key={stat.label}
                                className="text-center p-8 border border-goldman-gray/30 hover:border-goldman-gold/50 transition-colors duration-300"
                                whileHover={{ scale: 1.02 }}
                              >
                                <span className="text-4xl md:text-5xl font-light text-goldman-gold block mb-2">{stat.value}</span>
                                <span className="text-sm text-goldman-light tracking-wider uppercase">{stat.label}</span>
                              </motion.div>
                            ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-goldman-charcoal">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-goldman-gold text-sm tracking-[0.3em] uppercase">Contact</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 text-goldman-white">Start a Conversation</h2>
            <p className="text-goldman-light mt-6">Email: info@berg-weiss.com</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="text-sm text-goldman-light tracking-wider uppercase block mb-3">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-goldman-gray focus:border-goldman-gold outline-none py-3 text-goldman-white transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-sm text-goldman-light tracking-wider uppercase block mb-3">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-transparent border-b border-goldman-gray focus:border-goldman-gold outline-none py-3 text-goldman-white transition-colors duration-300"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-goldman-light tracking-wider uppercase block mb-3">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b border-goldman-gray focus:border-goldman-gold outline-none py-3 text-goldman-white transition-colors duration-300"
              />
            </div>
            <div>
              <label className="text-sm text-goldman-light tracking-wider uppercase block mb-3">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-goldman-gray focus:border-goldman-gold outline-none py-3 text-goldman-white transition-colors duration-300 resize-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="w-5 h-5 accent-goldman-gold"
              />
              <label htmlFor="consent" className="text-sm text-goldman-light">
                I confirm I am contacting BERGWEISS in a business capacity.
              </label>
            </div>
            <motion.button
              type="submit"
              className="w-full py-5 bg-goldman-gold text-goldman-black text-sm tracking-widest uppercase hover:bg-goldman-accent transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-goldman-black border-t border-goldman-gray/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-goldman-light text-sm tracking-wider">
              BERGWEISS LTD
            </span>
            <p className="text-goldman-silver text-xs text-center md:text-right max-w-2xl">
              Where required, services are delivered via authorised partners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
