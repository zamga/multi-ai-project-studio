"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-mahogany-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-mahogany-dark/95 backdrop-blur-md border-b border-mahogany-mahogany/50">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-2xl tracking-wide text-mahogany-cream">
                BERGWEISS
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              {["Expertise", "Sectors", "The Firm", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-mahogany-sand hover:text-mahogany-bronze transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-mahogany-black via-mahogany-dark to-mahogany-mahogany/30" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-mahogany-bronze" />
              <span className="text-mahogany-bronze text-sm tracking-widest uppercase">
                Strategic Advisory
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-mahogany-cream leading-tight mb-8">
              Bridging Capital
              <br />
              <span className="text-mahogany-tan">&amp; Legacy</span>
            </h1>
            
            <p className="text-mahogany-sand text-lg leading-relaxed mb-12 max-w-xl">
              Specialized transaction structuring for the industrial backbone of Central Europe. 
              Unlock the arbitrage between local operational excellence and international capital valuation.
            </p>
            
            <div className="flex gap-6">
              <a 
                href="#expertise" 
                className="px-8 py-4 bg-mahogany-bronze text-mahogany-cream hover:bg-mahogany-tan transition-colors duration-500 text-sm tracking-wide font-medium"
              >
                Our Expertise
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-mahogany-brown text-mahogany-cream hover:border-mahogany-bronze hover:text-mahogany-bronze transition-all duration-500 text-sm tracking-wide"
              >
                Request Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-32 bg-mahogany-mahogany">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-20">
              <span className="text-mahogany-bronze text-xs tracking-widest uppercase mb-4 block">
                Our Expertise
              </span>
              <h2 className="font-display text-4xl text-mahogany-cream">
                Tier-1 Advisory Services
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Strategic Transaction Advisory", desc: "Navigating complex corporate transitions. We structure the commercial sale of legal entities to maximize founder exit value. FSMA Art. 70 Compliant Structuring." },
                { title: "Principal Co-Investment", desc: "Bergweiss does not just advise; we partner. Acting as independent sponsors, we deploy proprietary capital structures to fuel consolidation and growth." },
                { title: "Post-Transaction Liquidity Planning", desc: "Exclusive access to a curated network of Swiss and UK private banking partners for efficient capital preservation." },
                { title: "Sector Consolidation", desc: "Buy-and-build strategies for fragmented industrial sectors. We turn local players into regional platforms." },
              ].map((item, i) => (
                <div key={i} className="group p-10 bg-mahogany-dark border border-mahogany-brown/30 hover:border-mahogany-bronze/50 transition-colors duration-500">
                  <div className="w-10 h-px bg-mahogany-bronze mb-6" />
                  <h3 className="font-display text-2xl text-mahogany-cream mb-4">
                    {item.title}
                  </h3>
                  <p className="text-mahogany-sand leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-32 bg-mahogany-dark">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-mahogany-bronze" />
                  <span className="text-mahogany-bronze text-xs tracking-widest uppercase">
                    Our Partners
                  </span>
                </div>
                <h2 className="font-display text-4xl text-mahogany-cream mb-8">
                  The Hidden Champions
                </h2>
                <p className="text-mahogany-sand leading-relaxed mb-6">
                  Focused on the DACH-Adria corridor. We serve EBITDA-positive private enterprises in Manufacturing, Logistics, and Specialized Engineering.
                </p>
                <p className="text-mahogany-tan/70 leading-relaxed">
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
                  <div key={i} className="p-8 bg-mahogany-mahogany border border-mahogany-brown/30">
                    <span className="font-display text-2xl text-mahogany-bronze">{stat.num}</span>
                    <p className="text-mahogany-sand text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Firm */}
      <section id="the-firm" className="py-32 bg-mahogany-mahogany">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-mahogany-bronze text-xs tracking-widest uppercase mb-6 block">
              The Firm
            </span>
            <h2 className="font-display text-4xl text-mahogany-cream mb-8">
              London Headquarters, Ljubljana Roots
            </h2>
            <p className="text-mahogany-sand leading-relaxed max-w-2xl mx-auto">
              Bergweiss Ltd operates at the intersection of English Law flexibility and Continental European industrial tradition. 
              Headquartered in London, deeply rooted in Ljubljana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-mahogany-dark">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-mahogany-bronze text-xs tracking-widest uppercase mb-6 block">
              Contact
            </span>
            <h2 className="font-display text-4xl text-mahogany-cream mb-8">
              Request Consultation
            </h2>
            <p className="text-mahogany-sand mb-12 max-w-xl mx-auto">
              For qualified enterprises seeking strategic advisory services.
            </p>
            <div className="inline-block border border-mahogany-brown px-12 py-8">
              <p className="text-mahogany-bronze font-display text-lg mb-2">Private Enquiries</p>
              <p className="text-mahogany-sand text-sm">contact@bergweiss.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-mahogany-black border-t border-mahogany-mahogany">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-display text-lg tracking-wide text-mahogany-cream">
              BERGWEISS
            </span>
            <p className="text-mahogany-tan/60 text-xs text-center md:text-right max-w-2xl leading-relaxed">
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
