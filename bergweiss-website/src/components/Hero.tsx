"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bergweiss-navy via-bergweiss-navy/95 to-bergweiss-charcoal">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-bergweiss-navy/80 via-transparent to-bergweiss-navy/80" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bergweiss-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-bergweiss-silver/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="mb-8">
            <span className="inline-block text-bergweiss-gold text-sm tracking-widest uppercase mb-6">
              Strategic Advisory
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-bergweiss-cream mb-8 leading-tight">
            Bridging Capital
            <br />
            <span className="text-bergweiss-gold">&</span> Legacy
          </h1>

          <p className="text-lg md:text-xl text-bergweiss-cream/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Specialized transaction structuring for the industrial backbone of Central Europe.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#services"
              className="group px-8 py-4 border border-bergweiss-gold text-bergweiss-gold hover:bg-bergweiss-gold hover:text-bergweiss-navy transition-all duration-500 text-sm tracking-widest uppercase"
            >
              <span className="flex items-center gap-3">
                Explore Expertise
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="text-bergweiss-cream/60 hover:text-bergweiss-cream text-sm tracking-widest uppercase transition-colors duration-300"
            >
              Request Consultation
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24"
        >
          <p className="text-bergweiss-cream/40 text-sm tracking-wide max-w-2xl mx-auto italic">
            &ldquo;Unlock the arbitrage between local operational excellence and international capital valuation.&rdquo;
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-bergweiss-cream/40 hover:text-bergweiss-gold transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
