"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-titanium-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-titanium-black/80 backdrop-blur-2xl border-b border-titanium-dark/50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-lg font-medium text-titanium-white tracking-tight">
                BERGWEISS
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {["Expertise", "Sectors", "The Firm", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-titanium-silver hover:text-titanium-cyan transition-colors duration-200"
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
        <div className="absolute inset-0 bg-gradient-to-br from-titanium-dark/50 via-titanium-black to-titanium-black" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-titanium-cyan/3 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-titanium-dark/80 border border-titanium-gray/30 rounded-full mb-8">
              <div className="w-1.5 h-1.5 bg-titanium-cyan rounded-full" />
              <span className="text-titanium-silver text-xs font-medium">Strategic Advisory</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-titanium-white leading-[1.05] mb-8 font-medium tracking-tight">
              Bridging Capital
              <br />
              <span className="text-titanium-silver">&amp; Legacy</span>
            </h1>
            
            <p className="text-titanium-steel text-lg leading-relaxed mb-12 max-w-xl">
              Specialized transaction structuring for the industrial backbone of Central Europe. 
              Unlock the arbitrage between local operational excellence and international capital valuation.
            </p>
            
            <div className="flex gap-3">
              <a 
                href="#expertise" 
                className="px-6 py-3 bg-titanium-cyan text-titanium-black hover:bg-titanium-cyan/90 transition-colors duration-200 text-sm font-medium rounded-lg"
              >
                Our Expertise
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-titanium-gray/50 text-titanium-white hover:border-titanium-cyan hover:text-titanium-cyan transition-all duration-200 text-sm font-medium rounded-lg"
              >
                Request Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24 bg-titanium-dark/30">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-titanium-cyan rounded-full" />
              <span className="text-titanium-cyan text-xs font-medium uppercase tracking-wider">Our Expertise</span>
            </div>
            <h2 className="font-display text-4xl text-titanium-white mb-16 font-medium tracking-tight">
              Tier-1 Advisory Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Strategic Transaction Advisory", desc: "Navigating complex corporate transitions. We structure the commercial sale of legal entities to maximize founder exit value. FSMA Art. 70 Compliant Structuring." },
                { title: "Principal Co-Investment", desc: "Bergweiss does not just advise; we partner. Acting as independent sponsors, we deploy proprietary capital structures to fuel consolidation and growth." },
                { title: "Post-Transaction Liquidity Planning", desc: "Exclusive access to a curated network of Swiss and UK private banking partners for efficient capital preservation." },
                { title: "Sector Consolidation", desc: "Buy-and-build strategies for fragmented industrial sectors. We turn local players into regional platforms." },
              ].map((item, i) => (
                <div key={i} className="group p-6 bg-titanium-dark/50 border border-titanium-gray/20 rounded-xl hover:border-titanium-cyan/30 transition-all duration-200">
                  <div className="w-8 h-8 bg-titanium-cyan/10 rounded-lg flex items-center justify-center mb-5">
                    <div className="w-2 h-2 bg-titanium-cyan rounded-sm" />
                  </div>
                  <h3 className="font-display text-lg text-titanium-white mb-3 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-titanium-steel text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-24 bg-titanium-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 bg-titanium-cyan rounded-full" />
                  <span className="text-titanium-cyan text-xs font-medium uppercase tracking-wider">Our Partners</span>
                </div>
                <h2 className="font-display text-4xl text-titanium-white mb-8 font-medium tracking-tight">
                  The Hidden Champions
                </h2>
                <p className="text-titanium-steel leading-relaxed mb-4">
                  Focused on the DACH-Adria corridor. We serve EBITDA-positive private enterprises in Manufacturing, Logistics, and Specialized Engineering.
                </p>
                <p className="text-titanium-gray leading-relaxed">
                  Our clients are the backbone of Central European industry—family-owned businesses with decades of operational excellence seeking strategic partnerships.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { num: "€100M+", label: "Transaction Volume" },
                  { num: "DACH-Adria", label: "Corridor Focus" },
                  { num: "Private", label: "& Confidential" },
                  { num: "Art. 70", label: "FSMA Compliant" },
                ].map((stat, i) => (
                  <div key={i} className="p-5 bg-titanium-dark/50 border border-titanium-gray/20 rounded-xl">
                    <span className="font-display text-xl text-titanium-cyan font-medium">{stat.num}</span>
                    <p className="text-titanium-steel text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Firm */}
      <section id="the-firm" className="py-24 bg-titanium-dark/30">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-titanium-cyan rounded-full" />
              <span className="text-titanium-cyan text-xs font-medium uppercase tracking-wider">The Firm</span>
            </div>
            <h2 className="font-display text-4xl text-titanium-white mb-8 font-medium tracking-tight">
              London Headquarters, Ljubljana Roots
            </h2>
            <p className="text-titanium-steel leading-relaxed max-w-2xl mx-auto">
              Bergweiss Ltd operates at the intersection of English Law flexibility and Continental European industrial tradition. 
              Headquartered in London, deeply rooted in Ljubljana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-titanium-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-titanium-cyan rounded-full" />
              <span className="text-titanium-cyan text-xs font-medium uppercase tracking-wider">Contact</span>
            </div>
            <h2 className="font-display text-4xl text-titanium-white mb-8 font-medium tracking-tight">
              Request Consultation
            </h2>
            <p className="text-titanium-steel mb-12 max-w-xl mx-auto">
              For qualified enterprises seeking strategic advisory services.
            </p>
            <div className="inline-block bg-titanium-dark/50 border border-titanium-gray/20 rounded-xl px-10 py-6">
              <p className="font-display text-lg text-titanium-cyan mb-1 font-medium">Private Enquiries</p>
              <p className="text-titanium-steel text-sm">contact@bergweiss.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-titanium-dark/50 border-t border-titanium-gray/20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-display text-base text-titanium-white font-medium tracking-tight">
              BERGWEISS
            </span>
            <p className="text-titanium-gray text-xs text-center md:text-right max-w-2xl leading-relaxed">
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
