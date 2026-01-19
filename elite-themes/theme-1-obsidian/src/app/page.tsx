"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-obsidian-black/90 backdrop-blur-md border-b border-obsidian-graphite/50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-2xl tracking-widest text-obsidian-platinum font-light">
                OBSIDIAN
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              {["Philosophy", "Capabilities", "Access"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs tracking-widest text-obsidian-silver hover:text-obsidian-platinum transition-colors duration-500 uppercase"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-black via-obsidian-dark to-obsidian-black" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-obsidian-graphite/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-obsidian-charcoal/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="mb-12">
              <div className="w-px h-24 bg-gradient-to-b from-transparent via-obsidian-steel to-transparent mx-auto mb-8" />
              <span className="text-obsidian-steel text-xs tracking-[0.4em] uppercase">
                Private Investment Office
              </span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl text-obsidian-platinum font-light mb-8 leading-none tracking-tight">
              Beyond
              <br />
              <span className="text-obsidian-silver">Conventional</span>
            </h1>
            
            <p className="text-obsidian-silver/70 text-lg max-w-2xl mx-auto mb-16 leading-relaxed font-light">
              Ultra-private wealth stewardship for distinguished families. 
              We operate in absolute discretion.
            </p>
            
            <div className="flex justify-center gap-8">
              <a href="#philosophy" className="group px-10 py-4 border border-obsidian-graphite text-obsidian-platinum hover:border-obsidian-silver transition-all duration-700 text-xs tracking-widest uppercase">
                Enter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-40 bg-obsidian-dark relative">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-24"
          >
            <div>
              <span className="text-obsidian-steel text-xs tracking-[0.3em] uppercase mb-6 block">
                Philosophy
              </span>
              <h2 className="font-display text-5xl text-obsidian-platinum font-light mb-8">
                Silence is
                <br />Our Currency
              </h2>
              <p className="text-obsidian-silver/60 leading-relaxed">
                In a world of noise, we offer sanctuary. Obsidian Capital exists for those who have transcended the need for recognition. We deploy capital with surgical precision, invisible to markets, unknown to competitors.
              </p>
            </div>
            <div className="space-y-12 pt-16">
              {[
                { num: "I", text: "Absolute Confidentiality" },
                { num: "II", text: "Principal Alignment" },
                { num: "III", text: "Generational Perspective" },
              ].map((item) => (
                <div key={item.num} className="border-l border-obsidian-graphite pl-8">
                  <span className="text-obsidian-steel text-xs tracking-widest">{item.num}</span>
                  <h3 className="font-display text-2xl text-obsidian-platinum font-light mt-2">
                    {item.text}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-40 bg-obsidian-black">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-24">
              <span className="text-obsidian-steel text-xs tracking-[0.3em] uppercase mb-6 block">
                Capabilities
              </span>
              <h2 className="font-display text-5xl text-obsidian-platinum font-light">
                Strategic Deployment
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-px bg-obsidian-graphite/30">
              {[
                { title: "Direct Investments", desc: "Control positions in exceptional private enterprises" },
                { title: "Co-Investment", desc: "Selective partnerships with aligned principals" },
                { title: "Special Situations", desc: "Opportunistic capital deployment" },
              ].map((item, i) => (
                <div key={i} className="bg-obsidian-black p-12 group hover:bg-obsidian-dark transition-colors duration-700">
                  <h3 className="font-display text-2xl text-obsidian-platinum font-light mb-4 group-hover:text-obsidian-silver transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-obsidian-steel text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Access */}
      <section id="access" className="py-40 bg-obsidian-charcoal">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-obsidian-steel text-xs tracking-[0.3em] uppercase mb-6 block">
              Access
            </span>
            <h2 className="font-display text-5xl text-obsidian-platinum font-light mb-8">
              By Introduction Only
            </h2>
            <p className="text-obsidian-silver/60 mb-16 max-w-2xl mx-auto">
              Obsidian Capital does not accept unsolicited inquiries. 
              Access is granted exclusively through existing relationships.
            </p>
            <div className="inline-block border border-obsidian-graphite px-12 py-6">
              <span className="text-obsidian-steel text-xs tracking-widest">
                LONDON | GENEVA | SINGAPORE
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-obsidian-black border-t border-obsidian-graphite/30">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-display text-xl tracking-widest text-obsidian-platinum font-light">
              OBSIDIAN
            </span>
            <p className="text-obsidian-steel text-xs text-center md:text-right max-w-md">
              Obsidian Capital is a private investment office. This website does not constitute an offer or solicitation. All investments involve risk.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
