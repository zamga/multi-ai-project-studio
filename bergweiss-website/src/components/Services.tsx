"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Strategic Transaction Advisory",
    description:
      "Navigating complex corporate transitions. We structure the commercial sale of legal entities ('Sale of Body Corporate') to maximize founder exit value.",
    feature: "FSMA Art. 70 Compliant Structuring",
  },
  {
    title: "Principal Co-Investment",
    description:
      "Bergweiss does not just advise; we partner. Acting as independent sponsors, we deploy proprietary capital structures to fuel consolidation and growth.",
    feature: "Aligned Incentives",
  },
  {
    title: "Post-Transaction Liquidity Planning",
    description:
      "Exclusive access to a curated network of Swiss and UK private banking partners for efficient capital preservation.",
    feature: "Wealth Preservation",
  },
  {
    title: "Sector Consolidation",
    description:
      "Buy-and-build strategies for fragmented industrial sectors. We turn local players into regional platforms.",
    feature: "Platform Building",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-bergweiss-charcoal relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bergweiss-navy to-bergweiss-charcoal" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-bergweiss-gold text-sm tracking-widest uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bergweiss-cream mb-6">
            Strategic Advisory
          </h2>
          <p className="text-bergweiss-cream/60 max-w-2xl mx-auto text-lg">
            Comprehensive transaction structuring and advisory services for enterprises seeking transformational outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              feature={service.feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
