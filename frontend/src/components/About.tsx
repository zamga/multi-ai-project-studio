import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Globe, Shield, Users, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'Unwavering commitment to the highest ethical standards in every transaction and relationship.',
  },
  {
    icon: Users,
    title: 'Client Excellence',
    description: 'Placing our clients\' interests at the center of everything we do, delivering tailored solutions.',
  },
  {
    icon: Award,
    title: 'Meritocracy',
    description: 'Cultivating a culture where talent, performance, and innovation are recognized and rewarded.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'Leveraging our worldwide network to provide unparalleled market access and insights.',
  },
];

const timeline = [
  { year: '1984', title: 'Founded', description: 'Established with a vision to redefine financial services.' },
  { year: '1996', title: 'Global Expansion', description: 'Opened offices across Europe and Asia-Pacific.' },
  { year: '2008', title: 'Resilience', description: 'Emerged stronger through the global financial crisis.' },
  { year: '2015', title: 'Digital Innovation', description: 'Launched proprietary trading and analytics platforms.' },
  { year: '2020', title: 'Sustainable Finance', description: 'Committed $100B to sustainable investment initiatives.' },
  { year: '2026', title: 'AI-Powered Future', description: 'Leading the integration of AI across financial services.' },
];

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#c8a45e]/3 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="line-accent" />
            <span className="text-[#c8a45e] text-sm font-medium tracking-[0.2em] uppercase">
              Our Firm
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0a0f1c] mb-6">
            Four Decades of
            <br />
            <span className="text-gradient italic">Exceptional</span> Performance
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Since 1984, Apex Capital Group has been at the forefront of global finance,
            delivering innovative solutions and building lasting relationships with the
            world's most influential institutions and individuals.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          ref={valuesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-[#c8a45e]/20 hover:bg-[#c8a45e]/3 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0a0f1c] flex items-center justify-center mb-5 group-hover:bg-[#c8a45e]/10 transition-colors duration-500">
                <value.icon className="w-5 h-5 text-[#c8a45e]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0a0f1c] mb-2">{value.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0, y: 30 }}
          animate={timelineVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-[#0a0f1c]">
              Our <span className="text-gradient">Journey</span>
            </h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-0.5 bg-gradient-to-b from-[#c8a45e]/40 via-[#c8a45e]/20 to-transparent hidden md:block" />

            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={timelineVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`md:flex items-center gap-8 md:mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-6 rounded-xl border border-gray-100 hover:border-[#c8a45e]/20 hover:shadow-lg transition-all duration-500 bg-white">
                      <div className="text-[#c8a45e] font-display text-2xl font-semibold mb-1">
                        {item.year}
                      </div>
                      <div className="text-[#0a0f1c] font-semibold mb-1">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-[#c8a45e] ring-4 ring-[#c8a45e]/20 flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #c8a45e 1px, transparent 0)`,
              backgroundSize: '30px 30px',
            }}
          />
          <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-white mb-3">
                Ready to Shape Your <span className="text-gradient italic">Future</span>?
              </h3>
              <p className="text-gray-400 text-lg max-w-xl">
                Connect with our team of experts to explore how Apex Capital Group can
                help you achieve your financial objectives.
              </p>
            </div>
            <a
              href="#contact"
              className="group flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#c8a45e] to-[#d4b97a] text-[#0a0f1c] font-semibold rounded-lg hover:shadow-xl hover:shadow-[#c8a45e]/20 transition-all duration-500"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
