"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-sapphire-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-sapphire-black/90 backdrop-blur-xl border-b border-sapphire-navy/30">
        <div className="max-w-6xl mx-auto px-8 py-5">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-2xl text-sapphire-white italic">
                BERGWEISS
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              {["Expertise", "Sectors", "The Firm", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-sapphire-silver/70 hover:text-sapphire-gold transition-colors duration-300 tracking-wide"
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
        <div className="absolute inset-0 bg-gradient-to-b from-sapphire-midnight via-sapphire-black to-sapphire-black" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sapphire-navy/10 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="w-16 h-px bg-sapphire-gold mb-8" />
            
            <h1 className="font-display text-5xl md:text-6xl text-sapphire-white leading-tight mb-8 italic">
              Bridging Capital
              <br />
              <span className="text-sapphire-silver">&amp; Legacy</span>
            </h1>
            
            <p className="text-sapphire-silver/80 text-lg leading-relaxed mb-12">
              Specialized transaction structuring for the industrial backbone of Central Europe. 
              Unlock the arbitrage between local operational excellence and international capital valuation.
            </p>
            
            <div className="flex gap-6">
              <a 
                href="#expertise" 
                className="px-8 py-4 bg-sapphire-gold text-sapphire-black hover:bg-sapphire-gold/90 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                Our Expertise
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-sapphire-navy text-sapphire-white hover:border-sapphire-gold hover:text-sapphire-gold transition-all duration-300 text-sm font-medium tracking-wide"
              >
                Request Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-28 bg-sapphire-midnight">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-px bg-sapphire-gold mb-6" />
            <h2 className="font-display text-4xl text-sapphire-white mb-16 italic">
              Tier-1 Advisory Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              {[
                { title: "Strategic Transaction Advisory", desc: "Navigating complex corporate transitions. We structure the commercial sale of legal entities to maximize founder exit value. FSMA Art. 70 Compliant Structuring." },
                { title: "Principal Co-Investment", desc: "Bergweiss does not just advise; we partner. Acting as independent sponsors, we deploy proprietary capital structures to fuel consolidation and growth." },
                { title: "Post-Transaction Liquidity Planning", desc: "Exclusive access to a curated network of Swiss and UK private banking partners for efficient capital preservation." },
                { title: "Sector Consolidation", desc: "Buy-and-build strategies for fragmented industrial sectors. We turn local players into regional platforms." },
              ].map((item, i) => (
                <div key={i} className="group p-8 border-l-2 border-sapphire-navy hover:border-sapphire-gold transition-colors duration-300">
                  <h3 className="font-display text-xl text-sapphire-white mb-4 italic">
                    {item.title}
                  </h3>
                  <p className="text-sapphire-silver/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-28 bg-sapphire-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <div className="w-12 h-px bg-sapphire-gold mb-6" />
                <h2 className="font-display text-4xl text-sapphire-white mb-8 italic">
                  The Hidden Champions
                </h2>
                <p className="text-sapphire-silver/80 leading-relaxed mb-6">
                  Focused on the DACH-Adria corridor. We serve EBITDA-positive private enterprises in Manufacturing, Logistics, and Specialized Engineering.
                </p>
                <p className="text-sapphire-steel leading-relaxed">
                  Our clients are the backbone of Central European industry—family-owned businesses with decades of operational excellence seeking strategic partnerships.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { num: "€100M+", label: "Transaction Volume Facilitated" },
                  { num: "DACH-Adria", label: "Corridor Focus" },
                  { num: "Strictly Private", label: "& Confidential" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-baseline gap-6 border-b border-sapphire-navy/30 pb-6">
                    <span className="font-display text-3xl text-sapphire-gold italic">{stat.num}</span>
                    <p className="text-sapphire-silver/60 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Firm */}
      <section id="the-firm" className="py-28 bg-sapphire-deep">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-px bg-sapphire-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl text-sapphire-white mb-8 italic">
              London Headquarters, Ljubljana Roots
            </h2>
            <p className="text-sapphire-silver/80 leading-relaxed max-w-2xl mx-auto">
              Bergweiss Ltd operates at the intersection of English Law flexibility and Continental European industrial tradition. 
              Headquartered in London, deeply rooted in Ljubljana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-sapphire-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-px bg-sapphire-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl text-sapphire-white mb-8 italic">
              Request Consultation
            </h2>
            <p className="text-sapphire-silver/80 mb-12 max-w-xl mx-auto">
              For qualified enterprises seeking strategic advisory services.
            </p>
            <div className="inline-block border border-sapphire-navy px-12 py-8">
              <p className="font-display text-lg text-sapphire-gold mb-2 italic">Private Enquiries</p>
              <p className="text-sapphire-silver/60 text-sm">contact@bergweiss.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-sapphire-midnight border-t border-sapphire-navy/30">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-display text-xl text-sapphire-white italic">
              BERGWEISS
            </span>
            <p className="text-sapphire-steel text-xs text-center md:text-right max-w-2xl leading-relaxed">
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
