"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-champagne-cream">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-champagne-cream/95 backdrop-blur-sm border-b border-champagne-sand/50">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group">
              <h1 className="font-display text-xl text-champagne-espresso tracking-wide">
                AURUM <span className="text-champagne-gold font-light">Private</span>
              </h1>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              {["Philosophy", "Services", "Experience", "Connect"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-champagne-bronze hover:text-champagne-gold transition-colors duration-300"
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
        <div className="absolute inset-0 bg-gradient-to-br from-champagne-cream via-champagne-pearl to-champagne-cream" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-champagne-sand/20 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="mb-10">
              <div className="w-16 h-px bg-champagne-gold mx-auto mb-6" />
              <span className="text-champagne-gold text-sm tracking-widest uppercase">
                Ultra-High Net Worth Advisory
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl text-champagne-espresso leading-tight mb-8">
              Where Wealth
              <br />
              <span className="text-champagne-bronze italic">Finds Home</span>
            </h1>
            
            <p className="text-champagne-bronze text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Aurum Private serves an exclusive circle of families whose wealth 
              demands not just management, but understanding. We offer sanctuary 
              for capital and counsel for generations.
            </p>
            
            <div className="flex justify-center gap-6">
              <a 
                href="#philosophy" 
                className="px-10 py-4 bg-champagne-espresso text-champagne-cream hover:bg-champagne-bronze transition-colors duration-500 text-sm tracking-wide"
              >
                Discover Aurum
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-32 bg-champagne-pearl">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-champagne-sand to-champagne-taupe" />
                <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border-2 border-champagne-gold/30" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-px bg-champagne-gold" />
                  <span className="text-champagne-gold text-xs tracking-widest uppercase">
                    Our Philosophy
                  </span>
                </div>
                <h2 className="font-display text-4xl text-champagne-espresso mb-8">
                  Beyond Wealth Management
                </h2>
                <p className="text-champagne-bronze leading-relaxed mb-6">
                  At Aurum Private, we believe that true wealth advisory transcends numbers. It encompasses legacy, values, and the aspirations that define a family across generations.
                </p>
                <p className="text-champagne-taupe leading-relaxed">
                  Our approach is deeply personal. We limit our practice to ensure each family receives the attention their circumstances deserve. This is not a service; it is a partnership.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-champagne-cream">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-20">
              <span className="text-champagne-gold text-xs tracking-widest uppercase mb-4 block">
                Services
              </span>
              <h2 className="font-display text-4xl text-champagne-espresso">
                Bespoke Solutions
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Family Office Services", desc: "Comprehensive oversight of all financial affairs, from investment management to bill payment, consolidated reporting to tax coordination." },
                { title: "Wealth Structuring", desc: "Sophisticated legal and tax structures designed to protect and transfer wealth efficiently across jurisdictions and generations." },
                { title: "Lifestyle Management", desc: "Discreet coordination of personal affairs including property acquisition, aviation, art advisory, and concierge services." },
                { title: "Next Generation", desc: "Educational programs and mentorship to prepare heirs for the responsibilities of significant wealth." },
              ].map((item, i) => (
                <div key={i} className="group p-10 bg-champagne-pearl border border-champagne-sand hover:border-champagne-gold/50 transition-colors duration-500">
                  <div className="w-10 h-px bg-champagne-gold mb-6" />
                  <h3 className="font-display text-2xl text-champagne-espresso mb-4">
                    {item.title}
                  </h3>
                  <p className="text-champagne-bronze leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 bg-champagne-espresso text-champagne-cream">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-16">
              <span className="text-champagne-gold text-xs tracking-widest uppercase mb-4 block">
                The Aurum Experience
              </span>
              <h2 className="font-display text-4xl text-champagne-cream mb-8">
                Uncompromising Standards
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { num: "12", label: "Family Relationships", sub: "Maximum capacity" },
                { num: "$500M", label: "Minimum Relationship", sub: "Investable assets" },
                { num: "24/7", label: "Availability", sub: "Global coverage" },
              ].map((stat, i) => (
                <div key={i}>
                  <span className="font-display text-4xl text-champagne-gold">{stat.num}</span>
                  <p className="text-champagne-cream mt-2">{stat.label}</p>
                  <p className="text-champagne-rose text-xs mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <p className="text-champagne-rose italic font-display text-xl">
                &ldquo;We do not grow. We deepen.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connect */}
      <section id="connect" className="py-32 bg-champagne-pearl">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-champagne-gold text-xs tracking-widest uppercase mb-6 block">
              Connect
            </span>
            <h2 className="font-display text-4xl text-champagne-espresso mb-8">
              Begin a Dialogue
            </h2>
            <p className="text-champagne-bronze mb-12 max-w-xl mx-auto">
              Aurum Private accepts new relationships exclusively through personal introduction. 
              If you believe we may be of service, we welcome a confidential conversation.
            </p>
            <div className="inline-block bg-champagne-cream border border-champagne-sand px-16 py-10">
              <p className="text-champagne-gold font-display text-lg mb-4">Private Office</p>
              <p className="text-champagne-bronze text-sm">Monaco | London | Singapore</p>
              <div className="w-12 h-px bg-champagne-gold mx-auto my-6" />
              <p className="text-champagne-taupe text-xs tracking-wide">
                inquiries@aurumprivate.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-champagne-cream border-t border-champagne-sand">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="font-display text-lg text-champagne-espresso">
              AURUM <span className="text-champagne-gold font-light">Private</span>
            </span>
            <p className="text-champagne-taupe text-xs text-center md:text-right max-w-lg">
              Aurum Private is a multi-family office serving ultra-high net worth individuals. 
              This website is intended for informational purposes only and does not constitute an offer of services.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
