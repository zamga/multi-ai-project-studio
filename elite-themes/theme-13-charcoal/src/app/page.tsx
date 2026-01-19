"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-black/95 backdrop-blur-lg border-b border-charcoal-dark">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-xl font-bold text-charcoal-white tracking-tight">
                BERGWEISS
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {["Expertise", "Sectors", "The Firm", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-charcoal-gray hover:text-charcoal-amber transition-colors duration-300"
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
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-dark via-charcoal-black to-charcoal-black" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-charcoal-amber/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-charcoal-amber/10 text-charcoal-amber text-sm font-medium rounded-full mb-8">
              Strategic Advisory
            </span>
            
            <h1 className="font-display text-5xl md:text-7xl text-charcoal-white leading-tight mb-8 font-bold">
              Bridging Capital
              <br />
              <span className="text-charcoal-amber">&amp; Legacy</span>
            </h1>
            
            <p className="text-charcoal-gray text-lg leading-relaxed mb-12 max-w-xl">
              Specialized transaction structuring for the industrial backbone of Central Europe. 
              Unlock the arbitrage between local operational excellence and international capital valuation.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#expertise" 
                className="px-8 py-4 bg-charcoal-amber text-charcoal-black hover:bg-charcoal-honey transition-colors duration-300 text-sm font-semibold rounded-lg"
              >
                Our Expertise
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-charcoal-dark text-charcoal-white hover:border-charcoal-amber hover:text-charcoal-amber transition-all duration-300 text-sm font-semibold rounded-lg"
              >
                Request Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-28 bg-charcoal-dark">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-charcoal-amber text-sm font-semibold mb-4 block">Our Expertise</span>
            <h2 className="font-display text-4xl text-charcoal-white mb-16 font-bold">
              Tier-1 Advisory Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Strategic Transaction Advisory", desc: "Navigating complex corporate transitions. We structure the commercial sale of legal entities to maximize founder exit value. FSMA Art. 70 Compliant Structuring." },
                { title: "Principal Co-Investment", desc: "Bergweiss does not just advise; we partner. Acting as independent sponsors, we deploy proprietary capital structures to fuel consolidation and growth." },
                { title: "Post-Transaction Liquidity Planning", desc: "Exclusive access to a curated network of Swiss and UK private banking partners for efficient capital preservation." },
                { title: "Sector Consolidation", desc: "Buy-and-build strategies for fragmented industrial sectors. We turn local players into regional platforms." },
              ].map((item, i) => (
                <div key={i} className="group p-8 bg-charcoal-black/50 rounded-2xl border border-charcoal-dark hover:border-charcoal-amber/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-charcoal-amber/10 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-3 h-3 bg-charcoal-amber rounded-full" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-white mb-4 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-gray leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-28 bg-charcoal-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-charcoal-amber text-sm font-semibold mb-4 block">Our Partners</span>
                <h2 className="font-display text-4xl text-charcoal-white mb-8 font-bold">
                  The Hidden Champions
                </h2>
                <p className="text-charcoal-gray leading-relaxed mb-6">
                  Focused on the DACH-Adria corridor. We serve EBITDA-positive private enterprises in Manufacturing, Logistics, and Specialized Engineering.
                </p>
                <p className="text-charcoal-gray/70 leading-relaxed">
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
                  <div key={i} className="p-6 bg-charcoal-dark rounded-xl">
                    <span className="font-display text-2xl text-charcoal-amber font-bold">{stat.num}</span>
                    <p className="text-charcoal-gray text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Firm */}
      <section id="the-firm" className="py-28 bg-charcoal-dark">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-charcoal-amber text-sm font-semibold mb-4 block">The Firm</span>
            <h2 className="font-display text-4xl text-charcoal-white mb-8 font-bold">
              London Headquarters, Ljubljana Roots
            </h2>
            <p className="text-charcoal-gray leading-relaxed max-w-2xl mx-auto">
              Bergweiss Ltd operates at the intersection of English Law flexibility and Continental European industrial tradition. 
              Headquartered in London, deeply rooted in Ljubljana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-charcoal-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-charcoal-amber text-sm font-semibold mb-4 block">Contact</span>
            <h2 className="font-display text-4xl text-charcoal-white mb-8 font-bold">
              Request Consultation
            </h2>
            <p className="text-charcoal-gray mb-12 max-w-xl mx-auto">
              For qualified enterprises seeking strategic advisory services.
            </p>
            <div className="inline-block bg-charcoal-dark rounded-2xl px-12 py-8">
              <p className="font-display text-lg text-charcoal-amber mb-2 font-semibold">Private Enquiries</p>
              <p className="text-charcoal-gray text-sm">contact@bergweiss.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-charcoal-dark border-t border-charcoal-dark">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-display text-lg text-charcoal-white font-bold tracking-tight">
              BERGWEISS
            </span>
            <p className="text-charcoal-gray/60 text-xs text-center md:text-right max-w-2xl leading-relaxed">
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
