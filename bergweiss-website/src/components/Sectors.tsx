"use client";

import { motion } from "framer-motion";

const sectors = [
  {
    name: "Manufacturing",
    description: "Precision engineering and industrial production",
  },
  {
    name: "Logistics",
    description: "Supply chain and distribution networks",
  },
  {
    name: "Specialized Engineering",
    description: "Technical services and infrastructure",
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-32 bg-bergweiss-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bergweiss-cream/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bergweiss-cream/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-bergweiss-gold text-sm tracking-widest uppercase mb-4 block">
              Our Partners
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-bergweiss-cream mb-8">
              The Hidden Champions
            </h2>
            <p className="text-bergweiss-cream/70 text-lg leading-relaxed mb-8">
              Focused on the DACH-Adria corridor. We serve EBITDA-positive private enterprises in Manufacturing, Logistics, and Specialized Engineering.
            </p>
            <p className="text-bergweiss-cream/50 leading-relaxed">
              Our clients are the backbone of Central European industry: family-owned enterprises with decades of operational excellence, seeking to unlock their true international valuation potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group p-6 border-l-2 border-bergweiss-cream/10 hover:border-bergweiss-gold transition-colors duration-500"
              >
                <h3 className="font-serif text-xl text-bergweiss-cream group-hover:text-bergweiss-gold transition-colors duration-300 mb-2">
                  {sector.name}
                </h3>
                <p className="text-bergweiss-cream/50 text-sm">
                  {sector.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-bergweiss-cream/10"
        >
          <div className="text-center">
            <div className="font-serif text-3xl md:text-4xl text-bergweiss-gold mb-2">
              DACH
            </div>
            <div className="text-bergweiss-cream/50 text-sm tracking-wide">
              Primary Market
            </div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl md:text-4xl text-bergweiss-gold mb-2">
              Adria
            </div>
            <div className="text-bergweiss-cream/50 text-sm tracking-wide">
              Source Region
            </div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl md:text-4xl text-bergweiss-gold mb-2">
              UK
            </div>
            <div className="text-bergweiss-cream/50 text-sm tracking-wide">
              Capital Hub
            </div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl md:text-4xl text-bergweiss-gold mb-2">
              CH
            </div>
            <div className="text-bergweiss-cream/50 text-sm tracking-wide">
              Wealth Center
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
