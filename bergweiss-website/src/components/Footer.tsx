"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bergweiss-charcoal relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bergweiss-cream/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="font-serif text-2xl tracking-widest text-bergweiss-cream">
                BERGWEISS
              </h2>
            </Link>
            <p className="text-bergweiss-cream/50 text-sm leading-relaxed max-w-md">
              Strategic transaction advisory for the industrial backbone of Central Europe. Bridging local operational excellence with international capital markets.
            </p>
          </div>

          <div>
            <h3 className="text-bergweiss-cream text-sm tracking-widest uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-bergweiss-cream/50 hover:text-bergweiss-gold text-sm transition-colors duration-300"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="#sectors"
                  className="text-bergweiss-cream/50 hover:text-bergweiss-gold text-sm transition-colors duration-300"
                >
                  Sectors
                </Link>
              </li>
              <li>
                <Link
                  href="#firm"
                  className="text-bergweiss-cream/50 hover:text-bergweiss-gold text-sm transition-colors duration-300"
                >
                  The Firm
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-bergweiss-cream/50 hover:text-bergweiss-gold text-sm transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-bergweiss-cream text-sm tracking-widest uppercase mb-6">
              Offices
            </h3>
            <ul className="space-y-3 text-bergweiss-cream/50 text-sm">
              <li>London, United Kingdom</li>
              <li>Ljubljana, Slovenia</li>
              <li>Zurich, Switzerland</li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 border-t border-bergweiss-cream/10"
        >
          <div className="bg-bergweiss-navy/50 p-6 mb-8">
            <h4 className="text-bergweiss-cream/70 text-xs tracking-widest uppercase mb-4">
              Regulatory Disclosure
            </h4>
            <p className="text-bergweiss-cream/40 text-xs leading-relaxed">
              Bergweiss Ltd is a private limited company registered in England & Wales. The firm acts solely as a commercial strategy consultant. Bergweiss Ltd is not authorized or regulated by the Financial Conduct Authority (FCA) or the ATVP. Services regarding the sale of corporate bodies are provided strictly under the Article 70 exemption of the FSMA 2000 (Regulated Activities) Order 2001. We do not provide retail investment advice.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-bergweiss-cream/30 text-xs">
              &copy; {new Date().getFullYear()} Bergweiss Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-bergweiss-cream/30 hover:text-bergweiss-gold text-xs transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-bergweiss-cream/30 hover:text-bergweiss-gold text-xs transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
