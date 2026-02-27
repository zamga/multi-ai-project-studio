import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Landmark, TrendingUp, BarChart3, Building2, Shield, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Landmark,
    title: 'Investment Banking',
    description: 'Strategic advisory, mergers & acquisitions, IPOs, and capital raising for the world\'s leading corporations and institutions.',
    features: ['M&A Advisory', 'Equity Underwriting', 'Debt Capital Markets', 'Restructuring'],
    accent: 'from-[#c8a45e]/20 to-[#c8a45e]/5',
  },
  {
    icon: TrendingUp,
    title: 'Global Markets',
    description: 'Comprehensive market-making, execution, and risk management across fixed income, currencies, commodities, and equities.',
    features: ['FICC Trading', 'Equities', 'Prime Brokerage', 'Securities Lending'],
    accent: 'from-blue-500/20 to-blue-500/5',
  },
  {
    icon: BarChart3,
    title: 'Asset Management',
    description: 'Institutional-grade investment solutions spanning public and private markets, delivering consistent risk-adjusted returns.',
    features: ['Public Markets', 'Alternative Investments', 'Multi-Asset Solutions', 'ESG Integration'],
    accent: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    icon: Building2,
    title: 'Private Equity',
    description: 'Direct investments and fund strategies targeting transformative opportunities across sectors and geographies.',
    features: ['Growth Equity', 'Buyouts', 'Venture Capital', 'Co-Investments'],
    accent: 'from-purple-500/20 to-purple-500/5',
  },
  {
    icon: Shield,
    title: 'Wealth Management',
    description: 'Bespoke financial planning and investment management for ultra-high-net-worth individuals and families.',
    features: ['Portfolio Management', 'Estate Planning', 'Tax Optimization', 'Family Office'],
    accent: 'from-amber-500/20 to-amber-500/5',
  },
  {
    icon: Globe,
    title: 'Research & Insights',
    description: 'Proprietary research and analysis providing actionable intelligence across global economies and capital markets.',
    features: ['Macro Research', 'Equity Research', 'Credit Analysis', 'Quantitative Strategies'],
    accent: 'from-cyan-500/20 to-cyan-500/5',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group relative bg-white rounded-2xl p-8 card-hover border border-gray-100 overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-[#0a0f1c] flex items-center justify-center mb-6 group-hover:bg-[#0a0f1c]/90 transition-colors">
          <service.icon className="w-6 h-6 text-[#c8a45e]" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#0a0f1c] mb-3 group-hover:text-[#0a0f1c] transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c8a45e]" />
              <span className="text-xs text-gray-600 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Link */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#c8a45e] hover:text-[#a88b3d] transition-colors group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 md:py-32 bg-[#f8f9fa] relative">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0a0f1c 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="line-accent-center" />
          </div>
          <span className="text-[#c8a45e] text-sm font-medium tracking-[0.2em] uppercase">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0a0f1c] mt-4 mb-6">
            Comprehensive Financial
            <br />
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering integrated capabilities across investment banking, markets,
            asset management, and advisory services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
