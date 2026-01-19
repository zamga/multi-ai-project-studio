"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-arctic-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-arctic-white/90 backdrop-blur-md border-b border-arctic-ice">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-2xl tracking-tight text-arctic-navy">
                BERGWEISS
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              {["Expertise", "Sectors", "The Firm", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-arctic-slate hover:text-arctic-navy transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center relative pt-20 bg-gradient-to-b from-arctic-snow to-arctic-white">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-arctic-navy rounded-full" />
              <span className="text-arctic-steel text-sm tracking-wide uppercase font-medium">
                Strategic Advisory
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-arctic-navy leading-tight mb-8">
              Bridging Capital
              <br />
              <span className="text-arctic-slate">&amp; Legacy</span>
            </h1>
            
            <p className="text-arctic-steel text-lg leading-relaxed mb-12 max-w-xl">
              Specialized transaction structuring for the industrial backbone of Central Europe. 
              Unlock the arbitrage between local operational excellence and international capital valuation.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#expertise" 
                className="px-8 py-4 bg-arctic-navy text-arctic-white hover:bg-arctic-charcoal transition-colors duration-300 text-sm font-medium rounded-lg"
              >
                Our Expertise
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-arctic-ice text-arctic-navy hover:border-arctic-navy transition-all duration-300 text-sm font-medium rounded-lg"
              >
                Request Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-32 bg-arctic-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-20">
              <span className="text-arctic-slate text-sm tracking-wide uppercase font-medium mb-4 block">
                Our Expertise
              </span>
              <h2 className="font-display text-4xl text-arctic-navy">
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
                <div key={i} className="group p-8 bg-arctic-snow rounded-2xl border border-arctic-ice hover:border-arctic-silver hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-1 bg-arctic-navy rounded-full mb-6" />
                  <h3 className="font-display text-xl text-arctic-navy mb-4">
                    {item.title}
                  </h3>
                  <p className="text-arctic-steel leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-32 bg-arctic-snow">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-arctic-slate text-sm tracking-wide uppercase font-medium mb-4 block">
                  Our Partners
                </span>
                <h2 className="font-display text-4xl text-arctic-navy mb-8">
                  The Hidden Champions
                </h2>
                <p className="text-arctic-steel leading-relaxed mb-6">
                  Focused on the DACH-Adria corridor. We serve EBITDA-positive private enterprises in Manufacturing, Logistics, and Specialized Engineering.
                </p>
                <p className="text-arctic-silver leading-relaxed">
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
                  <div key={i} className="p-6 bg-arctic-white rounded-xl border border-arctic-ice">
                    <span className="font-display text-2xl text-arctic-navy">{stat.num}</span>
                    <p className="text-arctic-slate text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Firm */}
      <section id="the-firm" className="py-32 bg-arctic-navy text-arctic-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-arctic-silver text-sm tracking-wide uppercase font-medium mb-6 block">
              The Firm
            </span>
            <h2 className="font-display text-4xl text-arctic-white mb-8">
              London Headquarters, Ljubljana Roots
            </h2>
            <p className="text-arctic-ice leading-relaxed max-w-2xl mx-auto">
              Bergweiss Ltd operates at the intersection of English Law flexibility and Continental European industrial tradition. 
              Headquartered in London, deeply rooted in Ljubljana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-arctic-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-arctic-slate text-sm tracking-wide uppercase font-medium mb-6 block">
              Contact
            </span>
            <h2 className="font-display text-4xl text-arctic-navy mb-8">
              Request Consultation
            </h2>
            <p className="text-arctic-steel mb-12 max-w-xl mx-auto">
              For qualified enterprises seeking strategic advisory services.
            </p>
            <div className="inline-block bg-arctic-snow rounded-2xl border border-arctic-ice px-12 py-8">
              <p className="text-arctic-navy font-display text-lg mb-2">Private Enquiries</p>
              <p className="text-arctic-slate text-sm">contact@bergweiss.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-arctic-snow border-t border-arctic-ice">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-display text-lg text-arctic-navy">
              BERGWEISS
            </span>
            <p className="text-arctic-silver text-xs text-center md:text-right max-w-2xl leading-relaxed">
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
