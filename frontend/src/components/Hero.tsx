import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useMemo } from 'react';
import MarketTicker from './MarketTicker';

function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

function GridOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Horizontal lines */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${(i + 1) * 12.5}%`,
            background: `linear-gradient(90deg, transparent, rgba(200,164,94,0.04) 20%, rgba(200,164,94,0.04) 80%, transparent)`,
          }}
        />
      ))}
      {/* Vertical lines */}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px"
          style={{
            left: `${(i + 1) * 16.67}%`,
            background: `linear-gradient(180deg, transparent, rgba(200,164,94,0.04) 20%, rgba(200,164,94,0.04) 80%, transparent)`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col gradient-hero overflow-hidden">
      <Particles />
      <GridOverlay />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#c8a45e]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1a1f35]/50 blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 w-full pt-24">
          <div className="max-w-4xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="line-accent" />
              <span className="text-[#c8a45e] text-sm font-medium tracking-[0.2em] uppercase">
                Global Investment & Advisory
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-8"
            >
              Shaping the{' '}
              <span className="text-gradient italic">Future</span>
              <br />
              of Global Finance
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-12 font-light"
            >
              Delivering world-class investment banking, asset management, and advisory
              services to institutions and individuals across global markets.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#services"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c8a45e] to-[#d4b97a] text-[#0a0f1c] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#c8a45e]/20 transition-all duration-500"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#insights"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/25 transition-all duration-500"
              >
                Market Insights
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform opacity-50" />
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/5"
            >
              {[
                { value: '$2.8T', label: 'Assets Under Management' },
                { value: '40+', label: 'Years of Excellence' },
                { value: '30+', label: 'Global Offices' },
                { value: '12,000+', label: 'Professionals Worldwide' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-semibold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator"
      >
        <a href="#ticker" className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#c8a45e] transition-colors">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Market Ticker */}
      <div id="ticker">
        <MarketTicker />
      </div>
    </section>
  );
}
