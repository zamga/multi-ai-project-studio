"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-black/90 backdrop-blur-xl border-b border-slate-deeper">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-xl font-semibold text-slate-white">
                BERGWEISS
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {["Expertise", "Sectors", "The Firm", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-slate-muted hover:text-slate-accent transition-colors duration-200"
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-deeper/50 via-slate-black to-slate-black" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-slate-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-deeper rounded-full mb-8">
              <div className="w-2 h-2 bg-slate-accent rounded-full animate-pulse" />
              <span className="text-slate-muted text-sm">Strategic Advisory</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-slate-white leading-tight mb-6">
              Bridging Capital
              <br />
              <span className="text-slate-muted">&amp; Legacy</span>
            </h1>
            
            <p className="text-slate-muted text-lg leading-relaxed mb-10 max-w-xl">
              Specialized transaction structuring for the industrial backbone of Central Europe. 
              Unlock the arbitrage between local operational excellence and international capital valuation.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#expertise" 
                className="px-6 py-3 bg-slate-accent text-slate-white hover:bg-slate-accent/90 transition-colors duration-200 text-sm font-medium rounded-lg"
              >
                Our Expertise
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-slate-dark text-slate-white hover:border-slate-accent hover:text-slate-accent transition-all duration-200 text-sm font-medium rounded-lg"
              >
                Request Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24 bg-slate-deeper/30">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <span className="text-slate-accent text-sm font-medium mb-3 block">
                Our Expertise
              </span>
              <h2 className="font-display text-4xl text-slate-white">
                Tier-1 Advisory Services
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Strategic Transaction Advisory", desc: "Navigating complex corporate transitions. We structure the commercial sale of legal entities to maximize founder exit value. FSMA Art. 70 Compliant Structuring." },
                { title: "Principal Co-Investment", desc: "Bergweiss does not just advise; we partner. Acting as independent sponsors, we deploy proprietary capital structures to fuel consolidation and growth." },
                { title: "Post-Transaction Liquidity Planning", desc: "Exclusive access to a curated network of Swiss and UK private banking partners for efficient capital preservation." },
                { title: "Sector Consolidation", desc: "Buy-and-build strategies for fragmented industrial sectors. We turn local players into regional platforms." },
              ].map((item, i) => (
                <div key={i} className="group p-8 bg-slate-deeper/50 rounded-2xl border border-slate-dark/50 hover:border-slate-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-slate-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-3 h-3 bg-slate-accent rounded-full" />
                  </div>
                  <h3 className="font-display text-xl text-slate-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-24 bg-slate-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-slate-accent text-sm font-medium mb-3 block">
                  Our Partners
                </span>
                <h2 className="font-display text-4xl text-slate-white mb-6">
                  The Hidden Champions
                </h2>
                <p className="text-slate-muted leading-relaxed mb-4">
                  Focused on the DACH-Adria corridor. We serve EBITDA-positive private enterprises in Manufacturing, Logistics, and Specialized Engineering.
                </p>
                <p className="text-slate-medium leading-relaxed">
                  Our clients are the backbone of Central European industry—family-owned businesses with decades of operational excellence seeking strategic partnerships.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "€100M+", label: "Transaction Volume" },
                  { num: "DACH-Adria", label: "Corridor Focus" },
                  { num: "Private", label: "& Confidential" },
                  { num: "Art. 70", label: "FSMA Compliant" },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-slate-deeper/50 rounded-xl border border-slate-dark/30">
                    <span className="font-display text-2xl text-slate-accent">{stat.num}</span>
                    <p className="text-slate-muted text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Firm */}
      <section id="the-firm" className="py-24 bg-slate-deeper/30">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-slate-accent text-sm font-medium mb-3 block">
              The Firm
            </span>
            <h2 className="font-display text-4xl text-slate-white mb-6">
              London Headquarters, Ljubljana Roots
            </h2>
            <p className="text-slate-muted leading-relaxed max-w-2xl mx-auto">
              Bergweiss Ltd operates at the intersection of English Law flexibility and Continental European industrial tradition. 
              Headquartered in London, deeply rooted in Ljubljana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-slate-accent text-sm font-medium mb-3 block">
              Contact
            </span>
            <h2 className="font-display text-4xl text-slate-white mb-6">
              Request Consultation
            </h2>
            <p className="text-slate-muted mb-10 max-w-xl mx-auto">
              For qualified enterprises seeking strategic advisory services.
            </p>
            <div className="inline-block bg-slate-deeper/50 rounded-2xl border border-slate-dark/30 px-10 py-8">
              <p className="text-slate-accent font-display text-lg mb-2">Private Enquiries</p>
              <p className="text-slate-muted text-sm">contact@bergweiss.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-slate-deeper border-t border-slate-dark/30">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-display text-lg font-semibold text-slate-white">
              BERGWEISS
            </span>
            <p className="text-slate-medium text-xs text-center md:text-right max-w-2xl leading-relaxed">
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
