"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (isInView) {
      const numericPart = value.replace(/[^0-9]/g, "");
      const prefix = value.replace(/[0-9]/g, "").replace("+", "");
      const hasPlus = value.includes("+");
      const target = parseInt(numericPart) || 0;
      
      let current = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setDisplayValue(prefix + target + (hasPlus ? "+" : "") + suffix);
          clearInterval(timer);
        } else {
          setDisplayValue(prefix + Math.floor(current) + suffix);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, suffix]);
  
  return <span ref={ref}>{displayValue}</span>;
}

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-ivory-gold/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: "-10%",
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

// Magnetic button component
function MagneticButton({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "secondary" }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };
  
  const reset = () => setPosition({ x: 0, y: 0 });
  
  const baseClasses = variant === "primary" 
    ? "px-10 py-5 bg-ivory-charcoal text-ivory-white hover:bg-ivory-black"
    : "px-10 py-5 border border-ivory-sand text-ivory-charcoal hover:border-ivory-charcoal hover:bg-ivory-cream/50";
  
  return (
    <motion.a
      ref={ref}
      href={href}
      className={`${baseClasses} transition-all duration-300 text-sm tracking-widest uppercase inline-block`}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.a>
  );
}

// Text reveal animation
function TextReveal({ children, className = "" }: { children: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// Staggered text animation
function StaggeredText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.08,
              ease: [0.33, 1, 0.68, 1] 
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Parallax effects
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  
  // Progress bar
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  return (
    <main className="min-h-screen bg-ivory-white overflow-hidden">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-ivory-gold z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-ivory-white/80 backdrop-blur-md border-b border-ivory-sand/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group relative">
              <motion.h1 
                className="font-display text-2xl text-ivory-charcoal tracking-[0.3em]"
                whileHover={{ letterSpacing: "0.4em" }}
                transition={{ duration: 0.3 }}
              >
                BERGWEISS
              </motion.h1>
              <motion.div 
                className="absolute -bottom-1 left-0 h-[1px] bg-ivory-gold"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              {["Expertise", "Sectors", "The Firm", "Contact"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-xs text-ivory-stone hover:text-ivory-charcoal transition-colors duration-300 tracking-widest uppercase relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-ivory-gold group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ivory-white/95 via-ivory-white/80 to-ivory-white z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23f8f6f3' width='1920' height='1080'/%3E%3C/svg%3E"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-white-abstract-background-with-lines-and-dots-31778-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 border border-ivory-sand/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-64 h-64 border border-ivory-gold/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-32 h-32 bg-ivory-gold/5"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-8 pt-32"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="max-w-3xl"
          >
            <motion.p 
              className="text-ivory-gold text-sm tracking-[0.5em] uppercase mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Strategic Advisory
            </motion.p>
            
            <h1 className="font-display text-6xl md:text-8xl text-ivory-charcoal leading-[0.9] mb-10">
              <TextReveal>Bridging</TextReveal>
              <br />
              <span className="text-ivory-stone">
                <TextReveal>Capital</TextReveal>
              </span>
              <br />
              <motion.span 
                className="inline-block text-ivory-gold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                &amp; Legacy
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-ivory-stone text-xl leading-relaxed mb-14 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Specialized transaction structuring for the industrial backbone of Central Europe. 
              Unlock the arbitrage between local operational excellence and international capital valuation.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <MagneticButton href="#expertise" variant="primary">
                Our Expertise
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                Request Consultation
              </MagneticButton>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="w-[1px] h-16 bg-gradient-to-b from-ivory-gold to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 bg-ivory-cream relative">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-8 mb-6">
              <motion.div 
                className="h-[1px] bg-ivory-gold"
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-ivory-gold text-sm tracking-[0.5em] uppercase">
                Our Expertise
              </p>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl text-ivory-charcoal mb-20">
              <StaggeredText text="Tier-1 Advisory Services" />
            </h2>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
              {[
                { 
                  num: "01",
                  title: "Strategic Transaction Advisory", 
                  desc: "Navigating complex corporate transitions. We structure the commercial sale of legal entities to maximize founder exit value. FSMA Art. 70 Compliant Structuring.",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                { 
                  num: "02",
                  title: "Principal Co-Investment", 
                  desc: "Bergweiss does not just advise; we partner. Acting as independent sponsors, we deploy proprietary capital structures to fuel consolidation and growth.",
                  icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                { 
                  num: "03",
                  title: "Post-Transaction Liquidity Planning", 
                  desc: "Exclusive access to a curated network of Swiss and UK private banking partners for efficient capital preservation.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                { 
                  num: "04",
                  title: "Sector Consolidation", 
                  desc: "Buy-and-build strategies for fragmented industrial sectors. We turn local players into regional platforms.",
                  icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <div className="flex items-start gap-6">
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 border border-ivory-sand flex items-center justify-center group-hover:border-ivory-gold group-hover:bg-ivory-gold/5 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      <svg className="w-6 h-6 text-ivory-stone group-hover:text-ivory-gold transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </motion.div>
                    <div>
                      <span className="text-ivory-gold text-xs tracking-widest mb-2 block">{item.num}</span>
                      <h3 className="font-display text-2xl text-ivory-charcoal mb-4 group-hover:text-ivory-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-ivory-stone leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[1px] bg-ivory-gold"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section with Animated Stats */}
      <section id="sectors" className="py-32 bg-ivory-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1a1a1a 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-8 mb-6">
                  <motion.div 
                    className="h-[1px] bg-ivory-gold"
                    initial={{ width: 0 }}
                    whileInView={{ width: 60 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                  <p className="text-ivory-gold text-sm tracking-[0.5em] uppercase">
                    Our Partners
                  </p>
                </div>
                
                <h2 className="font-display text-5xl text-ivory-charcoal mb-10">
                  <StaggeredText text="The Hidden Champions" />
                </h2>
                
                <motion.p 
                  className="text-ivory-stone text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Focused on the DACH-Adria corridor. We serve EBITDA-positive private enterprises in Manufacturing, Logistics, and Specialized Engineering.
                </motion.p>
                
                <motion.p 
                  className="text-ivory-taupe leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Our clients are the backbone of Central European industry—family-owned businesses with decades of operational excellence seeking strategic partnerships.
                </motion.p>
              </div>
              
              <div className="space-y-10">
                {[
                  { num: "100", prefix: "€", suffix: "M+", label: "Transaction Volume Facilitated" },
                  { num: "15", suffix: "+", label: "Years of Experience" },
                  { num: "50", suffix: "+", label: "Successful Transactions" },
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    className="relative pl-8 border-l-2 border-ivory-sand hover:border-ivory-gold transition-colors duration-500"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <span className="font-display text-5xl text-ivory-charcoal">
                      {stat.prefix}
                      <AnimatedCounter value={stat.num} suffix={stat.suffix} />
                    </span>
                    <p className="text-ivory-taupe text-sm mt-2 tracking-wide">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Firm Section */}
      <section id="the-firm" className="py-32 bg-ivory-pearl relative overflow-hidden">
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(212,175,55,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(212,175,55,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(212,175,55,0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-8 mb-6">
              <motion.div 
                className="h-[1px] bg-ivory-gold"
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-ivory-gold text-sm tracking-[0.5em] uppercase">
                The Firm
              </p>
              <motion.div 
                className="h-[1px] bg-ivory-gold"
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl text-ivory-charcoal mb-10">
              <StaggeredText text="London Headquarters" />
              <br />
              <span className="text-ivory-stone">
                <StaggeredText text="Ljubljana Roots" />
              </span>
            </h2>
            
            <motion.p 
              className="text-ivory-stone text-xl leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Bergweiss Ltd operates at the intersection of English Law flexibility and Continental European industrial tradition. 
              Headquartered in London, deeply rooted in Ljubljana.
            </motion.p>
            
            {/* Decorative elements */}
            <motion.div 
              className="mt-16 flex justify-center gap-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {["Cross-Border Specialists", "Strictly Confidential", "FSMA Compliant"].map((item, i) => (
                <motion.div 
                  key={i}
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 border border-ivory-gold/30 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-ivory-gold rounded-full" />
                  </div>
                  <p className="text-ivory-taupe text-xs tracking-widest uppercase">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-ivory-white relative">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-8 mb-6">
              <motion.div 
                className="h-[1px] bg-ivory-gold"
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-ivory-gold text-sm tracking-[0.5em] uppercase">
                Contact
              </p>
              <motion.div 
                className="h-[1px] bg-ivory-gold"
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl text-ivory-charcoal mb-10">
              <StaggeredText text="Request Consultation" />
            </h2>
            
            <motion.p 
              className="text-ivory-stone text-lg mb-16 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              For qualified enterprises seeking strategic advisory services.
            </motion.p>
            
            <motion.div 
              className="inline-block relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 border border-ivory-gold/30 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
              <div className="relative border border-ivory-sand bg-ivory-white px-16 py-12 group-hover:border-ivory-gold transition-colors duration-300">
                <p className="font-display text-2xl text-ivory-charcoal mb-3">Private Enquiries</p>
                <p className="text-ivory-gold text-lg tracking-wide">contact@bergweiss.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-ivory-charcoal text-ivory-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-display text-2xl tracking-[0.3em] text-ivory-white">
                BERGWEISS
              </span>
              <p className="text-ivory-sand/60 text-sm mt-4 max-w-xs">
                Bridging Capital & Legacy since 2010
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {[
                { title: "Services", items: ["Transaction Advisory", "Co-Investment", "Liquidity Planning", "Consolidation"] },
                { title: "Firm", items: ["About Us", "Our Team", "Careers", "Contact"] },
                { title: "Legal", items: ["Privacy Policy", "Terms of Service", "Disclaimer"] },
              ].map((col, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4 className="text-ivory-gold text-xs tracking-widest uppercase mb-4">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.items.map((item, j) => (
                      <li key={j}>
                        <a href="#" className="text-ivory-sand/60 text-sm hover:text-ivory-white transition-colors duration-300">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-ivory-sand/20">
            <p className="text-ivory-sand/40 text-xs leading-relaxed max-w-4xl">
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
