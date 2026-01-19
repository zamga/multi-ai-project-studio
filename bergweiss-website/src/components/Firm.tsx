"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "€100M+", label: "Transaction Volume Facilitated" },
  { value: "Cross-Border", label: "Specialists" },
  { value: "Strictly Private", label: "& Confidential" },
];

export default function Firm() {
  return (
    <section id="firm" className="py-32 bg-bergweiss-charcoal relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bergweiss-navy via-bergweiss-charcoal to-bergweiss-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-bergweiss-gold text-sm tracking-widest uppercase mb-4 block">
              The Firm
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-bergweiss-cream mb-8">
              Where Tradition Meets Opportunity
            </h2>
            <div className="space-y-6 text-bergweiss-cream/70 leading-relaxed">
              <p>
                Headquartered in London, deeply rooted in Ljubljana. Bergweiss Ltd operates at the intersection of English Law flexibility and Continental European industrial tradition.
              </p>
              <p>
                Our principals bring decades of combined experience in cross-border transactions, having advised on complex corporate restructurings across the DACH-Adria corridor.
              </p>
              <p className="text-bergweiss-cream/50">
                We understand that every transaction is more than a financial event—it is the culmination of generations of entrepreneurial dedication. Our approach honors this legacy while unlocking its full potential.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className="border-l-2 border-bergweiss-gold pl-6"
                >
                  <div className="font-serif text-3xl md:text-4xl text-bergweiss-cream mb-1">
                    {stat.value}
                  </div>
                  <div className="text-bergweiss-cream/50 text-sm tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-16 border-t border-bergweiss-cream/10"
        >
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-xl text-bergweiss-gold mb-4">
                London
              </h3>
              <p className="text-bergweiss-cream/50 text-sm leading-relaxed">
                Our headquarters in the City of London provides access to international capital markets and the flexibility of English commercial law.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-bergweiss-gold mb-4">
                Ljubljana
              </h3>
              <p className="text-bergweiss-cream/50 text-sm leading-relaxed">
                Deep regional roots enable us to identify and cultivate relationships with exceptional enterprises across the Adria corridor.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-bergweiss-gold mb-4">
                Zurich
              </h3>
              <p className="text-bergweiss-cream/50 text-sm leading-relaxed">
                Strategic partnerships with Swiss private banking institutions ensure seamless post-transaction wealth preservation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
