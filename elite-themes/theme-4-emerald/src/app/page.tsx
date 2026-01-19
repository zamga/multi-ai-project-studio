"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-deep">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-deep/95 backdrop-blur-md border-b border-emerald-forest/50">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-xl text-emerald-cream tracking-wide">
                GREENWOOD<span className="text-emerald-gold">.</span>
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              {["Strategy", "Performance", "Governance", "Investors"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-emerald-light hover:text-emerald-gold transition-colors duration-300"
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-emerald-forest/30 to-emerald-deep" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-sage/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-emerald-gold" />
              <span className="text-emerald-gold text-sm tracking-widest uppercase">
                Institutional Excellence
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-emerald-cream leading-tight mb-8">
              Growth Through
              <br />
              <span className="text-emerald-light">Prudence</span>
            </h1>
            
            <p className="text-emerald-light/80 text-lg leading-relaxed mb-12 max-w-xl">
              Greenwood Capital delivers institutional-grade investment management 
              with a commitment to sustainable, long-term value creation.
            </p>
            
            <div className="flex gap-6">
              <a 
                href="#strategy" 
                className="px-8 py-4 bg-emerald-gold text-emerald-deep hover:bg-emerald-brass transition-colors duration-500 text-sm tracking-wide font-medium"
              >
                Our Strategy
              </a>
              <a 
                href="#investors" 
                className="px-8 py-4 border border-emerald-sage text-emerald-cream hover:border-emerald-gold hover:text-emerald-gold transition-all duration-500 text-sm tracking-wide"
              >
                Investor Relations
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy */}
      <section id="strategy" className="py-32 bg-emerald-forest">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-emerald-gold" />
                  <span className="text-emerald-gold text-xs tracking-widest uppercase">
                    Investment Strategy
                  </span>
                </div>
                <h2 className="font-display text-4xl text-emerald-cream mb-8">
                  Disciplined Capital Allocation
                </h2>
                <p className="text-emerald-light/70 leading-relaxed mb-6">
                  Our investment philosophy centers on identifying exceptional businesses with durable competitive advantages, led by management teams aligned with shareholder interests.
                </p>
                <p className="text-emerald-light/50 leading-relaxed">
                  We maintain concentrated positions in our highest-conviction ideas, allowing for meaningful impact while managing risk through rigorous fundamental analysis.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "15+", label: "Years Track Record" },
                  { num: "12.4%", label: "Net IRR" },
                  { num: "$2.8B", label: "AUM" },
                  { num: "23", label: "Portfolio Companies" },
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-emerald-sage/20 border border-emerald-sage/30">
                    <span className="font-display text-3xl text-emerald-gold">{stat.num}</span>
                    <p className="text-emerald-light/60 text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance */}
      <section id="performance" className="py-32 bg-emerald-deep">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-20">
              <span className="text-emerald-gold text-xs tracking-widest uppercase mb-4 block">
                Performance
              </span>
              <h2 className="font-display text-4xl text-emerald-cream">
                Consistent Returns
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Value Creation", desc: "Focus on fundamental business improvement and operational excellence across portfolio companies." },
                { title: "Risk Management", desc: "Rigorous downside protection through diversification, hedging, and conservative leverage." },
                { title: "ESG Integration", desc: "Environmental, social, and governance factors embedded in every investment decision." },
              ].map((item, i) => (
                <div key={i} className="group p-10 border border-emerald-sage/30 hover:border-emerald-gold/50 transition-colors duration-500">
                  <div className="w-10 h-10 border border-emerald-gold/50 flex items-center justify-center mb-6">
                    <span className="text-emerald-gold font-display">{i + 1}</span>
                  </div>
                  <h3 className="font-display text-2xl text-emerald-cream mb-4">
                    {item.title}
                  </h3>
                  <p className="text-emerald-light/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="py-32 bg-emerald-forest">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-16">
              <span className="text-emerald-gold text-xs tracking-widest uppercase mb-4 block">
                Governance
              </span>
              <h2 className="font-display text-4xl text-emerald-cream mb-8">
                Institutional Standards
              </h2>
              <p className="text-emerald-light/70 max-w-2xl mx-auto">
                Greenwood Capital maintains the highest standards of corporate governance, 
                transparency, and fiduciary responsibility.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Independent Board Oversight",
                "Quarterly Investor Reporting",
                "Annual Third-Party Audits",
                "Regulatory Compliance",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-emerald-sage/10 border-l-2 border-emerald-gold">
                  <span className="text-emerald-cream">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investors */}
      <section id="investors" className="py-32 bg-emerald-deep">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-emerald-gold text-xs tracking-widest uppercase mb-6 block">
              Investor Relations
            </span>
            <h2 className="font-display text-4xl text-emerald-cream mb-8">
              Qualified Investors
            </h2>
            <p className="text-emerald-light/70 mb-12 max-w-xl mx-auto">
              Greenwood Capital partners with institutional investors, family offices, 
              and qualified individuals who share our long-term investment horizon.
            </p>
            <div className="inline-flex flex-col items-center border border-emerald-sage/30 px-12 py-8">
              <p className="text-emerald-gold font-display text-lg mb-2">Investor Inquiries</p>
              <p className="text-emerald-light/60 text-sm">ir@greenwoodcapital.com</p>
              <p className="text-emerald-light/40 text-xs mt-4">
                Minimum Investment: $5,000,000
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-emerald-forest border-t border-emerald-sage/30">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-display text-lg text-emerald-cream">
              GREENWOOD<span className="text-emerald-gold">.</span>
            </span>
            <p className="text-emerald-light/50 text-xs text-center md:text-right max-w-lg">
              Greenwood Capital Management LLC is a registered investment adviser. 
              Past performance is not indicative of future results. This is not an offer to sell securities.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
