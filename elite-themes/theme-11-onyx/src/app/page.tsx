"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-onyx-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-onyx-black/95 backdrop-blur-lg border-b border-onyx-charcoal/50">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-xl font-bold text-onyx-white tracking-wider">
                BERGWEISS
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {["Expertise", "Sectors", "The Firm", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-onyx-cream/70 hover:text-onyx-copper transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-onyx-black via-onyx-dark to-onyx-charcoal/30" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-onyx-copper/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-onyx-rust/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-onyx-copper to-transparent" />
              <span className="text-onyx-copper text-sm font-medium tracking-widest uppercase">Strategic Advisory</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-onyx-white leading-[1.1] mb-8 font-bold">
              Bridging Capital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-onyx-copper to-onyx-rust">&amp; Legacy</span>
            </h1>
            
            <p className="text-onyx-cream/70 text-lg leading-relaxed mb-12 max-w-xl">
              Specialized transaction structuring for the industrial backbone of Central Europe. 
              Unlock the arbitrage between local operational excellence and international capital valuation.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#expertise" 
                className="group px-8 py-4 bg-gradient-to-r from-onyx-copper to-onyx-rust text-onyx-white hover:from-onyx-rust hover:to-onyx-bronze transition-all duration-300 text-sm font-medium"
              >
                Our Expertise
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-onyx-charcoal text-onyx-white hover:border-onyx-copper hover:text-onyx-copper transition-all duration-300 text-sm font-medium"
              >
                Request Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-28 bg-onyx-dark">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-onyx-copper" />
              <span className="text-onyx-copper text-sm font-medium tracking-widest uppercase">Our Expertise</span>
            </div>
            <h2 className="font-display text-4xl text-onyx-white mb-16 font-bold">
              Tier-1 Advisory Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Strategic Transaction Advisory", desc: "Navigating complex corporate transitions. We structure the commercial sale of legal entities to maximize founder exit value. FSMA Art. 70 Compliant Structuring." },
                { title: "Principal Co-Investment", desc: "Bergweiss does not just advise; we partner. Acting as independent sponsors, we deploy proprietary capital structures to fuel consolidation and growth." },
                { title: "Post-Transaction Liquidity Planning", desc: "Exclusive access to a curated network of Swiss and UK private banking partners for efficient capital preservation." },
                { title: "Sector Consolidation", desc: "Buy-and-build strategies for fragmented industrial sectors. We turn local players into regional platforms." },
              ].map((item, i) => (
                <div key={i} className="group p-8 bg-onyx-charcoal/30 border border-onyx-charcoal/50 hover:border-onyx-copper/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-onyx-copper/20 to-onyx-rust/20 flex items-center justify-center mb-6">
                    <div className="w-2 h-2 bg-onyx-copper" />
                  </div>
                  <h3 className="font-display text-xl text-onyx-white mb-4 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-onyx-cream/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-28 bg-onyx-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-onyx-copper" />
                  <span className="text-onyx-copper text-sm font-medium tracking-widest uppercase">Our Partners</span>
                </div>
                <h2 className="font-display text-4xl text-onyx-white mb-8 font-bold">
                  The Hidden Champions
                </h2>
                <p className="text-onyx-cream/70 leading-relaxed mb-6">
                  Focused on the DACH-Adria corridor. We serve EBITDA-positive private enterprises in Manufacturing, Logistics, and Specialized Engineering.
                </p>
                <p className="text-onyx-cream/50 leading-relaxed">
                  Our clients are the backbone of Central European industry—family-owned businesses with decades of operational excellence seeking strategic partnerships.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "€100M+", label: "Transaction Volume" },
                  { num: "DACH-Adria", label: "Corridor Focus" },
                  { num: "Private", label: "& Confidential" },
                  { num: "Art. 70", label: "FSMA Compliant" },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-onyx-dark border border-onyx-charcoal/30">
                    <span className="font-display text-2xl text-onyx-copper font-bold">{stat.num}</span>
                    <p className="text-onyx-cream/50 text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Firm */}
      <section id="the-firm" className="py-28 bg-onyx-dark">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-onyx-copper" />
              <span className="text-onyx-copper text-sm font-medium tracking-widest uppercase">The Firm</span>
              <div className="w-8 h-px bg-onyx-copper" />
            </div>
            <h2 className="font-display text-4xl text-onyx-white mb-8 font-bold">
              London Headquarters, Ljubljana Roots
            </h2>
            <p className="text-onyx-cream/70 leading-relaxed max-w-2xl mx-auto">
              Bergweiss Ltd operates at the intersection of English Law flexibility and Continental European industrial tradition. 
              Headquartered in London, deeply rooted in Ljubljana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-onyx-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-onyx-copper" />
              <span className="text-onyx-copper text-sm font-medium tracking-widest uppercase">Contact</span>
              <div className="w-8 h-px bg-onyx-copper" />
            </div>
            <h2 className="font-display text-4xl text-onyx-white mb-8 font-bold">
              Request Consultation
            </h2>
            <p className="text-onyx-cream/70 mb-12 max-w-xl mx-auto">
              For qualified enterprises seeking strategic advisory services.
            </p>
            <div className="inline-block bg-onyx-dark border border-onyx-charcoal/50 px-12 py-8">
              <p className="font-display text-lg text-onyx-copper mb-2 font-semibold">Private Enquiries</p>
              <p className="text-onyx-cream/60 text-sm">contact@bergweiss.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-onyx-dark border-t border-onyx-charcoal/30">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-display text-lg text-onyx-white font-bold tracking-wider">
              BERGWEISS
            </span>
            <p className="text-onyx-cream/40 text-xs text-center md:text-right max-w-2xl leading-relaxed">
              Bergweiss Ltd is a private limited company registered in England &amp; Wales. The firm acts solely as a commercial strategy consultant. 
              Bergweiss Ltd is not authorized or regulated by the Financial Conduct Authority (FCA) or the ATVP. 
              Services regarding the sale of corporate bodies are provided strictly under the Article 70 exemption of the FSMA 2000 (Regulated Activities) Order 2001. 
              We do not provide retail investment advice.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
