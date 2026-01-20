"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const services = [
  { code: "M&A", title: "Mergers & Acquisitions", desc: "Strategic M&A advisory for private companies seeking transformative growth or exit opportunities." },
  { code: "VAL", title: "Valuation", desc: "Comprehensive enterprise valuation services leveraging institutional-grade methodologies." },
  { code: "INT", title: "Intermediary / Introductions", desc: "Curated B2B introductions connecting principals with strategic partners across Europe." },
  { code: "RES", title: "Research", desc: "Deep-dive sector analysis and competitive intelligence to inform strategic decisions." },
  { code: "IPO", title: "IPO / Capital Markets", desc: "Partner-led guidance through public market transactions and capital raising." },
  { code: "SPC", title: "SPAC", desc: "Partner-led SPAC advisory for alternative paths to public markets." },
];

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);
  
  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);
  
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [text, started]);
  
  return <span>{displayText}<span className="animate-pulse">|</span></span>;
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "", consent: false });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="bg-citadel-black min-h-screen relative overflow-hidden">
      {/* Cursor glow effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 70%)`,
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          transition: "left 0.1s, top 0.1s",
        }}
      />

      {/* Progress line */}
      <motion.div 
        className="fixed top-0 left-0 h-px bg-gradient-to-r from-citadel-green via-citadel-cyan to-citadel-purple z-50"
        style={{ width: lineWidth }}
      />

      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 bg-citadel-black/80 backdrop-blur-xl border-b border-citadel-gray"
      >
        <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-citadel-green rounded-full animate-pulse" />
            <h1 className="text-lg font-mono font-medium tracking-tight text-citadel-white">BERGWEISS</h1>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-mono text-citadel-silver">
            {["services", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-citadel-green transition-colors duration-200"
              >
                /{item}
              </a>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Hero Section - Terminal style */}
      <section className="min-h-screen flex items-center pt-20 relative">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono"
          >
            <div className="text-citadel-silver text-sm mb-4">
              <span className="text-citadel-green">$</span> ./bergweiss --init
            </div>
            
            <div className="mb-8">
              <span className="text-citadel-cyan text-sm">{"//"} Corporate Finance Advisory</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-citadel-white">BERGWEISS</span>
              <span className="block text-citadel-green">LTD</span>
            </h1>

            <div className="text-xl md:text-2xl text-citadel-light mb-12 max-w-2xl font-light">
              <TypewriterText text="Corporate Finance Advisory for Private Companies (Europe)" delay={500} />
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                className="group px-8 py-4 bg-citadel-green text-citadel-black font-mono font-medium hover:bg-citadel-cyan transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                services
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 border border-citadel-gray text-citadel-white font-mono hover:border-citadel-green hover:text-citadel-green transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                contact
              </motion.a>
            </div>
          </motion.div>

          {/* Stats terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 bg-citadel-dark border border-citadel-gray p-6 font-mono max-w-xl"
          >
            <div className="flex items-center gap-2 mb-4 text-citadel-silver text-xs">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2">stats.sh</span>
            </div>
            <div className="space-y-2 text-sm">
              <div><span className="text-citadel-cyan">transaction_volume:</span> <span className="text-citadel-green">€500M+</span></div>
              <div><span className="text-citadel-cyan">deals_completed:</span> <span className="text-citadel-green">50+</span></div>
              <div><span className="text-citadel-cyan">years_experience:</span> <span className="text-citadel-green">15+</span></div>
              <div><span className="text-citadel-cyan">european_markets:</span> <span className="text-citadel-green">12</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8 bg-citadel-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 font-mono"
          >
            <span className="text-citadel-green text-sm">{"//"} what_we_do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-citadel-white">Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-citadel-gray border border-citadel-mid p-8 hover:border-citadel-green transition-all duration-300 cursor-pointer"
              >
                <div className="font-mono text-citadel-green text-xs mb-4 group-hover:text-citadel-cyan transition-colors">
                  [{service.code}]
                </div>
                <h3 className="text-xl font-semibold mb-4 text-citadel-white group-hover:text-citadel-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-citadel-silver text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-citadel-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-citadel-green text-sm font-mono">{"//"} who_we_are</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8 text-citadel-white">About</h2>
              <p className="text-lg text-citadel-light leading-relaxed mb-6">
                BERGWEISS LTD is an independent advisory focused on private-company transactions across Europe. We combine deep sector expertise with a principal mindset to deliver exceptional outcomes.
              </p>
              <p className="text-lg text-citadel-light leading-relaxed">
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
                { value: "€500M+", label: "Transaction Volume", color: "text-citadel-green" },
                { value: "50+", label: "Completed Deals", color: "text-citadel-cyan" },
                { value: "15+", label: "Years Experience", color: "text-citadel-purple" },
                { value: "12", label: "European Markets", color: "text-citadel-green" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-citadel-dark border border-citadel-gray p-6 hover:border-citadel-green transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className={`text-4xl font-bold block mb-2 font-mono ${stat.color}`}>{stat.value}</span>
                  <span className="text-xs text-citadel-silver font-mono uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-citadel-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-citadel-green text-sm font-mono">{"//"} contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-citadel-white">Get in Touch</h2>
            <p className="text-citadel-silver mt-4 font-mono">info@berg-weiss.com</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-citadel-gray border border-citadel-mid p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-xs font-mono text-citadel-silver block mb-2">name:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-citadel-dark border border-citadel-mid focus:border-citadel-green outline-none px-4 py-3 text-citadel-white font-mono transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-citadel-silver block mb-2">company:</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-citadel-dark border border-citadel-mid focus:border-citadel-green outline-none px-4 py-3 text-citadel-white font-mono transition-colors duration-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="text-xs font-mono text-citadel-silver block mb-2">email:</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-citadel-dark border border-citadel-mid focus:border-citadel-green outline-none px-4 py-3 text-citadel-white font-mono transition-colors duration-300"
              />
            </div>
            <div className="mb-6">
              <label className="text-xs font-mono text-citadel-silver block mb-2">message:</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-citadel-dark border border-citadel-mid focus:border-citadel-green outline-none px-4 py-3 text-citadel-white font-mono transition-colors duration-300 resize-none"
              />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="w-4 h-4 accent-citadel-green"
              />
              <label htmlFor="consent" className="text-xs text-citadel-silver font-mono">
                I confirm I am contacting BERGWEISS in a business capacity.
              </label>
            </div>
            <motion.button
              type="submit"
              className="w-full py-4 bg-citadel-green text-citadel-black font-mono font-medium hover:bg-citadel-cyan transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              → send_message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-citadel-black border-t border-citadel-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-citadel-silver text-sm font-mono">BERGWEISS LTD</span>
            <p className="text-citadel-mid text-xs font-mono text-center md:text-right">
              Where required, services are delivered via authorised partners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
