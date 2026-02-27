import { motion } from 'framer-motion';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';

const stats = [
  { end: 2800, prefix: '$', suffix: 'B', label: 'Assets Under Management', description: 'Across public and private markets globally' },
  { end: 40, prefix: '', suffix: '+', label: 'Years of Excellence', description: 'Delivering consistent results since 1984' },
  { end: 95, prefix: '', suffix: '%', label: 'Client Retention', description: 'Industry-leading satisfaction and loyalty' },
  { end: 12000, prefix: '', suffix: '+', label: 'Professionals', description: 'World-class talent across 30+ offices' },
];

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const count = useCountUp(stat.end, 2500, isVisible);

  const formatNumber = (n: number) => {
    if (stat.end >= 1000) {
      return n.toLocaleString();
    }
    return n.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="text-center relative group"
    >
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-[#c8a45e]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      <div className="relative">
        <div className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-gradient counter-glow mb-2">
          {stat.prefix}{formatNumber(count)}{stat.suffix}
        </div>
        <div className="text-white text-sm font-semibold tracking-wide uppercase mb-1">
          {stat.label}
        </div>
        <div className="text-gray-500 text-xs max-w-[200px] mx-auto">
          {stat.description}
        </div>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-[#0a0f1c] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#c8a45e]/3 blur-[200px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(200,164,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,94,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c8a45e] text-sm font-medium tracking-[0.2em] uppercase">
            Our Impact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-4">
            Numbers That <span className="text-gradient italic">Define</span> Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
