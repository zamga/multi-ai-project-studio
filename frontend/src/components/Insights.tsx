import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Clock, Headphones, Play, TrendingUp } from 'lucide-react';

const featuredInsight = {
  category: 'Market Outlook',
  title: 'Navigating the AI-Driven Transformation of Global Capital Markets',
  description: 'Our latest analysis explores how artificial intelligence is reshaping investment strategies, risk management, and market microstructure across asset classes.',
  date: 'February 2026',
  readTime: '12 min read',
  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
};

const insights = [
  {
    category: 'Research',
    title: 'Global Economic Outlook: Resilience Amid Uncertainty',
    date: 'Feb 24, 2026',
    type: 'report',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    category: 'Podcast',
    title: 'The New Era of Sustainable Investing',
    date: 'Feb 20, 2026',
    type: 'podcast',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&q=80',
  },
  {
    category: 'Analysis',
    title: 'Emerging Markets: Opportunities in Southeast Asia',
    date: 'Feb 18, 2026',
    type: 'report',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    category: 'Video',
    title: 'Understanding Central Bank Digital Currencies',
    date: 'Feb 15, 2026',
    type: 'video',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
  },
];

function TypeIcon({ type }: { type: string }) {
  switch (type) {
    case 'podcast':
      return <Headphones className="w-3.5 h-3.5" />;
    case 'video':
      return <Play className="w-3.5 h-3.5" />;
    default:
      return <TrendingUp className="w-3.5 h-3.5" />;
  }
}

function InsightCard({ insight, index }: { insight: typeof insights[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <a
        href="#"
        className="group block glass-card rounded-xl overflow-hidden card-dark-hover"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={insight.image}
            alt={insight.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent opacity-60" />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs text-white/80">
            <TypeIcon type={insight.type} />
            {insight.category}
          </div>
        </div>
        <div className="p-5">
          <h4 className="text-sm font-semibold text-white group-hover:text-[#c8a45e] transition-colors leading-snug mb-3 line-clamp-2">
            {insight.title}
          </h4>
          <div className="text-xs text-gray-500">{insight.date}</div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Insights() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation();

  return (
    <section id="insights" className="py-24 md:py-32 bg-[#0a0f1c] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#c8a45e]/3 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="line-accent" />
              <span className="text-[#c8a45e] text-sm font-medium tracking-[0.2em] uppercase">
                Our Thinking
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              Insights &<br />
              <span className="text-gradient">Market Intelligence</span>
            </h2>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-[#c8a45e] hover:text-[#d4b97a] transition-colors group"
          >
            Explore All Insights
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Featured + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <motion.div
            ref={featuredRef}
            initial={{ opacity: 0, x: -40 }}
            animate={featuredVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <a href="#" className="block relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={featuredInsight.image}
                alt={featuredInsight.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-[#c8a45e]/20 text-[#c8a45e] text-xs font-medium mb-4">
                  {featuredInsight.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3 group-hover:text-[#c8a45e] transition-colors leading-tight">
                  {featuredInsight.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                  {featuredInsight.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{featuredInsight.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredInsight.readTime}
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <InsightCard key={insight.title} insight={insight} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
