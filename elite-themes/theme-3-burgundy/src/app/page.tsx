"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-burgundy-ivory">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-burgundy-ivory/95 backdrop-blur-sm border-b border-burgundy-blush/30">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-xl text-burgundy-deep">
                Rothbury <span className="text-burgundy-gold">&</span> Partners
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              {["Legacy", "Services", "Principles", "Enquire"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-burgundy-wine hover:text-burgundy-gold transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center relative pt-20 bg-gradient-to-b from-burgundy-cream to-burgundy-ivory">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234a0e1a" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="mb-8">
              <span className="inline-block px-6 py-2 border border-burgundy-gold/40 text-burgundy-gold text-xs tracking-widest uppercase">
                Established 1789
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-burgundy-deep leading-tight mb-8">
              Old Money.
              <br />
              <span className="text-burgundy-wine">New Horizons.</span>
            </h1>
            
            <p className="text-burgundy-rose text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              For over two centuries, Rothbury & Partners has served as trusted advisors 
              to Europe&apos;s most distinguished families. Heritage is not merely preserved; 
              it is cultivated.
            </p>
            
            <div className="flex justify-center gap-6">
              <a 
                href="#legacy" 
                className="px-8 py-4 bg-burgundy-deep text-burgundy-cream hover:bg-burgundy-wine transition-colors duration-500 text-sm tracking-wide"
              >
                Our Legacy
              </a>
              <a 
                href="#enquire" 
                className="px-8 py-4 border border-burgundy-deep text-burgundy-deep hover:bg-burgundy-deep hover:text-burgundy-cream transition-all duration-500 text-sm tracking-wide"
              >
                Private Enquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legacy */}
      <section id="legacy" className="py-32 bg-burgundy-deep text-burgundy-cream">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-burgundy-gold text-xs tracking-widest uppercase mb-6 block">
                  Our Legacy
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-burgundy-cream mb-8">
                  Two Centuries of Trusted Counsel
                </h2>
                <p className="text-burgundy-blush leading-relaxed mb-6">
                  Founded in the tumultuous year of 1789, Rothbury & Partners has navigated empires, revolutions, and the rise of modern finance. Our longevity is testament to an unwavering commitment to discretion and excellence.
                </p>
                <p className="text-burgundy-blush/70 leading-relaxed">
                  We do not advertise. We do not seek publicity. Our reputation travels through generations, passed from patriarch to heir, from one distinguished family to another.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-burgundy-wine to-burgundy-deep border border-burgundy-gold/20" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-burgundy-gold/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-burgundy-ivory">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-20">
              <span className="text-burgundy-gold text-xs tracking-widest uppercase mb-4 block">
                Services
              </span>
              <h2 className="font-display text-4xl text-burgundy-deep">
                Bespoke Advisory
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Dynastic Planning", desc: "Structuring wealth to endure across generations, preserving both capital and family harmony." },
                { title: "Principal Transactions", desc: "Discreet facilitation of significant acquisitions and divestments for private principals." },
                { title: "Heritage Assets", desc: "Stewardship of art collections, estates, and other assets of cultural significance." },
              ].map((item, i) => (
                <div key={i} className="group p-10 bg-burgundy-cream border border-burgundy-blush/30 hover:border-burgundy-gold/50 transition-colors duration-500">
                  <div className="w-8 h-px bg-burgundy-gold mb-6" />
                  <h3 className="font-display text-2xl text-burgundy-deep mb-4">
                    {item.title}
                  </h3>
                  <p className="text-burgundy-rose leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="py-32 bg-burgundy-cream">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-16">
              <span className="text-burgundy-gold text-xs tracking-widest uppercase mb-4 block">
                Principles
              </span>
              <h2 className="font-display text-4xl text-burgundy-deep mb-8">
                The Rothbury Standard
              </h2>
            </div>
            
            <div className="space-y-8">
              {[
                { num: "I", title: "Absolute Discretion", text: "What is discussed within these walls remains within these walls. Always." },
                { num: "II", title: "Generational Thinking", text: "We measure success not in quarters, but in centuries." },
                { num: "III", title: "Aligned Interests", text: "We invest alongside our clients. Our fortunes rise and fall together." },
              ].map((item) => (
                <div key={item.num} className="flex gap-8 items-start p-8 border-l-2 border-burgundy-gold">
                  <span className="font-display text-3xl text-burgundy-gold">{item.num}</span>
                  <div>
                    <h3 className="font-display text-xl text-burgundy-deep mb-2">{item.title}</h3>
                    <p className="text-burgundy-rose">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enquire */}
      <section id="enquire" className="py-32 bg-burgundy-deep text-burgundy-cream">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-burgundy-gold text-xs tracking-widest uppercase mb-6 block">
              Enquire
            </span>
            <h2 className="font-display text-4xl text-burgundy-cream mb-8">
              By Invitation
            </h2>
            <p className="text-burgundy-blush mb-12 max-w-xl mx-auto">
              Rothbury & Partners accepts new relationships exclusively through introduction 
              by existing clients or trusted intermediaries.
            </p>
            <div className="inline-block border border-burgundy-gold/40 px-12 py-8">
              <p className="text-burgundy-gold font-display text-lg mb-4">London</p>
              <p className="text-burgundy-blush text-sm">St. James&apos;s Square</p>
              <p className="text-burgundy-blush/60 text-xs mt-4 tracking-wide">
                Correspondence by letter only
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-burgundy-ivory border-t border-burgundy-blush/30">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-display text-lg text-burgundy-deep">
              Rothbury <span className="text-burgundy-gold">&</span> Partners
            </span>
            <p className="text-burgundy-rose text-xs text-center md:text-right max-w-lg">
              Rothbury & Partners LLP is authorised and regulated by the Financial Conduct Authority. 
              This website is intended for professional investors only.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
