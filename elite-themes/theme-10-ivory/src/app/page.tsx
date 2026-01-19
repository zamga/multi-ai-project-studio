"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-ivory-white/95 backdrop-blur-sm border-b border-ivory-sand/30">
        <div className="max-w-6xl mx-auto px-8 py-5">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-xl text-ivory-charcoal tracking-wide">
                BERGWEISS
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              {["Expertise", "Sectors", "The Firm", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-ivory-stone hover:text-ivory-charcoal transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-ivory-taupe text-sm tracking-widest uppercase mb-6">
              Strategic Advisory
            </p>
            
            <h1 className="font-display text-5xl md:text-6xl text-ivory-charcoal leading-tight mb-8">
              Bridging Capital
              <br />
              <span className="text-ivory-stone">&amp; Legacy</span>
            </h1>
            
            <p className="text-ivory-stone text-lg leading-relaxed mb-12">
              Specialized transaction structuring for the industrial backbone of Central Europe. 
              Unlock the arbitrage between local operational excellence and international capital valuation.
            </p>
            
            <div className="flex gap-6">
              <a 
                href="#expertise" 
                className="px-8 py-4 bg-ivory-charcoal text-ivory-white hover:bg-ivory-black transition-colors duration-300 text-sm tracking-wide"
              >
                Our Expertise
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-ivory-sand text-ivory-charcoal hover:border-ivory-charcoal transition-colors duration-300 text-sm tracking-wide"
              >
                Request Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-28 bg-ivory-cream">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-ivory-taupe text-sm tracking-widest uppercase mb-4">
              Our Expertise
            </p>
            <h2 className="font-display text-4xl text-ivory-charcoal mb-16">
              Tier-1 Advisory Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: "Strategic Transaction Advisory", desc: "Navigating complex corporate transitions. We structure the commercial sale of legal entities to maximize founder exit value. FSMA Art. 70 Compliant Structuring." },
                { title: "Principal Co-Investment", desc: "Bergweiss does not just advise; we partner. Acting as independent sponsors, we deploy proprietary capital structures to fuel consolidation and growth." },
                { title: "Post-Transaction Liquidity Planning", desc: "Exclusive access to a curated network of Swiss and UK private banking partners for efficient capital preservation." },
                { title: "Sector Consolidation", desc: "Buy-and-build strategies for fragmented industrial sectors. We turn local players into regional platforms." },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="w-12 h-px bg-ivory-sand mb-6 group-hover:bg-ivory-charcoal transition-colors duration-300" />
                  <h3 className="font-display text-xl text-ivory-charcoal mb-4">
                    {item.title}
                  </h3>
                  <p className="text-ivory-stone leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-28 bg-ivory-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-ivory-taupe text-sm tracking-widest uppercase mb-4">
                  Our Partners
                </p>
                <h2 className="font-display text-4xl text-ivory-charcoal mb-8">
                  The Hidden Champions
                </h2>
                <p className="text-ivory-stone leading-relaxed mb-6">
                  Focused on the DACH-Adria corridor. We serve EBITDA-positive private enterprises in Manufacturing, Logistics, and Specialized Engineering.
                </p>
                <p className="text-ivory-taupe leading-relaxed">
                  Our clients are the backbone of Central European industry—family-owned businesses with decades of operational excellence seeking strategic partnerships.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { num: "€100M+", label: "Transaction Volume Facilitated" },
                  { num: "DACH-Adria", label: "Corridor Focus" },
                  { num: "Private", label: "& Confidential" },
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-ivory-sand pl-6">
                    <span className="font-display text-3xl text-ivory-charcoal">{stat.num}</span>
                    <p className="text-ivory-taupe text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Firm */}
      <section id="the-firm" className="py-28 bg-ivory-pearl">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-ivory-taupe text-sm tracking-widest uppercase mb-4">
              The Firm
            </p>
            <h2 className="font-display text-4xl text-ivory-charcoal mb-8">
              London Headquarters, Ljubljana Roots
            </h2>
            <p className="text-ivory-stone leading-relaxed max-w-2xl mx-auto">
              Bergweiss Ltd operates at the intersection of English Law flexibility and Continental European industrial tradition. 
              Headquartered in London, deeply rooted in Ljubljana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-ivory-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-ivory-taupe text-sm tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="font-display text-4xl text-ivory-charcoal mb-8">
              Request Consultation
            </h2>
            <p className="text-ivory-stone mb-12 max-w-xl mx-auto">
              For qualified enterprises seeking strategic advisory services.
            </p>
            <div className="inline-block border border-ivory-sand px-12 py-8">
              <p className="font-display text-lg text-ivory-charcoal mb-2">Private Enquiries</p>
              <p className="text-ivory-taupe text-sm">contact@bergweiss.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-ivory-cream border-t border-ivory-sand/50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-display text-lg text-ivory-charcoal tracking-wide">
              BERGWEISS
            </span>
            <p className="text-ivory-taupe text-xs text-center md:text-right max-w-2xl leading-relaxed">
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
