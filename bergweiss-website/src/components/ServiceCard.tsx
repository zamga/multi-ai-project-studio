"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  feature?: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  feature,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative p-8 lg:p-10 border border-bergweiss-cream/10 bg-bergweiss-navy/50 backdrop-blur-sm hover:border-bergweiss-gold/30 transition-all duration-700 h-full">
        <div className="absolute top-0 left-0 w-0 h-px bg-bergweiss-gold group-hover:w-full transition-all duration-700" />
        <div className="absolute top-0 left-0 w-px h-0 bg-bergweiss-gold group-hover:h-full transition-all duration-700 delay-100" />
        <div className="absolute bottom-0 right-0 w-0 h-px bg-bergweiss-gold group-hover:w-full transition-all duration-700 delay-200" />
        <div className="absolute bottom-0 right-0 w-px h-0 bg-bergweiss-gold group-hover:h-full transition-all duration-700 delay-300" />

        <div className="mb-6">
          <span className="text-bergweiss-gold/60 text-xs tracking-widest uppercase">
            0{index + 1}
          </span>
        </div>

        <h3 className="font-serif text-2xl lg:text-3xl text-bergweiss-cream mb-6 group-hover:text-bergweiss-gold transition-colors duration-500">
          {title}
        </h3>

        <p className="text-bergweiss-cream/80 leading-relaxed mb-6">
          {description}
        </p>

        {feature && (
          <div className="pt-6 border-t border-bergweiss-cream/10">
            <span className="text-bergweiss-gold text-sm tracking-wide">
              {feature}
            </span>
          </div>
        )}

        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg
            className="w-6 h-6 text-bergweiss-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
