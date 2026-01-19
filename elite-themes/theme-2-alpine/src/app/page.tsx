"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-alpine-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-alpine-white/95 backdrop-blur-sm border-b border-alpine-mist">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-xl tracking-wide text-alpine-ink">
                Alpine<span className="text-alpine-slate font-light">Wealth</span>
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              {["Heritage", "Services", "Approach", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-alpine-slate hover:text-alpine-ink transition-colors duration-300"
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
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-alpine-slate text-sm tracking-wide mb-4 block">
              Est. 1847 | Zurich
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-alpine-ink leading-tight mb-6">
              Preserving
              <br />
              <span className="text-alpine-charcoal">Legacies</span>
            </h1>
            <p className="text-alpine-slate text-lg leading-relaxed mb-10 max-w-md">
              Discreet wealth management in the Swiss tradition. 
              Where precision meets discretion.
            </p>
            <a 
              href="#heritage" 
              className="inline-flex items-center gap-3 text-alpine-ink border-b border-alpine-ink pb-1 hover:border-alpine-accent hover:text-alpine-accent transition-colors"
            >
              <span className="text-sm">Discover Our Heritage</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-alpine-snow to-alpine-mist rounded-sm" />
            <div className="absolute inset-8 border border-alpine-stone" />
          </motion.div>
        </div>
      </section>

      {/* Heritage */}
      <section id="heritage" className="py-32 bg-alpine-snow">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="grid md:grid-cols-3 gap-16">
              <div className="md:col-span-1">
                <span className="text-alpine-slate text-sm tracking-wide">Heritage</span>
                <h2 className="font-display text-4xl text-alpine-ink mt-4">
                  Five Generations of Trust
                </h2>
              </div>
              <div className="md:col-span-2 space-y-6">
                <p className="text-alpine-charcoal leading-relaxed text-lg">
                  For over 175 years, Alpine Wealth has served as the trusted steward for distinguished families across Europe. Our founding principles remain unchanged: absolute discretion, unwavering integrity, and a commitment to preserving wealth across generations.
                </p>
                <p className="text-alpine-slate leading-relaxed">
                  We do not seek growth for its own sake. Our client relationships span decades, often generations. This continuity allows us to understand not just portfolios, but the values and aspirations that define each family we serve.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-alpine-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-20">
              <span className="text-alpine-slate text-sm tracking-wide">Services</span>
              <h2 className="font-display text-4xl text-alpine-ink mt-4">
                Comprehensive Stewardship
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { title: "Wealth Preservation", desc: "Conservative capital allocation strategies designed to protect principal across market cycles and generations." },
                { title: "Estate Planning", desc: "Sophisticated succession structures ensuring seamless wealth transfer while minimizing fiscal exposure." },
                { title: "Family Governance", desc: "Advisory services for establishing family constitutions, councils, and decision-making frameworks." },
                { title: "Philanthropic Advisory", desc: "Strategic guidance for meaningful charitable engagement aligned with family values." },
              ].map((item, i) => (
                <div key={i} className="group p-8 border border-alpine-mist hover:border-alpine-stone transition-colors duration-500">
                  <h3 className="font-display text-2xl text-alpine-ink mb-4">
                    {item.title}
                  </h3>
                  <p className="text-alpine-slate leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-32 bg-alpine-snow">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-alpine-slate text-sm tracking-wide">Our Approach</span>
            <h2 className="font-display text-4xl text-alpine-ink mt-4 mb-8">
              Measured. Deliberate. Enduring.
            </h2>
            <p className="text-alpine-charcoal text-lg leading-relaxed mb-16">
              We believe true wealth management requires patience and perspective. 
              Our approach prioritizes stability over speculation, relationships over transactions.
            </p>
            
            <div className="flex justify-center gap-16 text-center">
              {[
                { num: "CHF 12B+", label: "Assets Under Advisory" },
                { num: "175+", label: "Years of Heritage" },
                { num: "47", label: "Family Relationships" },
              ].map((stat, i) => (
                <div key={i}>
                  <span className="font-display text-3xl text-alpine-ink">{stat.num}</span>
                  <p className="text-alpine-slate text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-alpine-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-alpine-slate text-sm tracking-wide">Contact</span>
            <h2 className="font-display text-4xl text-alpine-ink mt-4 mb-8">
              Begin a Conversation
            </h2>
            <p className="text-alpine-charcoal mb-12">
              New relationships are accepted by referral only. 
              For existing clients, please contact your dedicated relationship manager.
            </p>
            <div className="inline-block border border-alpine-mist px-12 py-8">
              <p className="text-alpine-ink font-display text-lg mb-2">Zurich Office</p>
              <p className="text-alpine-slate text-sm">Bahnhofstrasse 45, 8001 Zurich</p>
              <p className="text-alpine-slate text-sm">+41 44 000 0000</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-alpine-snow border-t border-alpine-mist">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-display text-lg text-alpine-ink">
              Alpine<span className="text-alpine-slate font-light">Wealth</span>
            </span>
            <p className="text-alpine-slate text-xs text-center md:text-right max-w-lg">
              Alpine Wealth AG is regulated by FINMA. This website does not constitute investment advice. 
              Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
