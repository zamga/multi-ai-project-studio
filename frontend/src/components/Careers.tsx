import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Briefcase, GraduationCap, Heart, MapPin, Rocket, Users } from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: 'Accelerated Growth',
    description: 'Work on the most complex challenges in global finance with world-class mentorship.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Access to proprietary training programs, executive education, and global rotations.',
  },
  {
    icon: Heart,
    title: 'Comprehensive Benefits',
    description: 'Industry-leading compensation, wellness programs, and work-life integration.',
  },
  {
    icon: Users,
    title: 'Inclusive Culture',
    description: 'A diverse community where every perspective is valued and every voice matters.',
  },
];

const openRoles = [
  { title: 'Vice President, Investment Banking', location: 'New York', type: 'Full-time', department: 'Global Banking' },
  { title: 'Associate, Equity Research', location: 'London', type: 'Full-time', department: 'Research' },
  { title: 'Analyst, Quantitative Strategies', location: 'Hong Kong', type: 'Full-time', department: 'Global Markets' },
  { title: 'Director, Private Equity', location: 'San Francisco', type: 'Full-time', department: 'Investments' },
];

export default function Careers() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: rolesRef, isVisible: rolesVisible } = useScrollAnimation();

  return (
    <section id="careers" className="py-24 md:py-32 bg-[#f8f9fa] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0a0f1c 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
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
            Careers
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0a0f1c] mt-4 mb-6">
            Where the Best Get{' '}
            <span className="text-gradient italic">Better</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Join a team of exceptional professionals shaping the future of global finance.
            Your career at Apex Capital Group is a journey of continuous growth and impact.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          ref={benefitsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={benefitsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0a0f1c] flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-[#c8a45e] group-hover:to-[#a88b3d] transition-all duration-500">
                <benefit.icon className="w-5 h-5 text-[#c8a45e] group-hover:text-[#0a0f1c] transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-semibold text-[#0a0f1c] mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Roles */}
        <motion.div
          ref={rolesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={rolesVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[#0a0f1c]">
              Featured Opportunities
            </h3>
            <a
              href="#"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#c8a45e] hover:text-[#a88b3d] transition-colors group"
            >
              View All Roles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="space-y-3">
            {openRoles.map((role, index) => (
              <motion.a
                key={role.title}
                href="#"
                initial={{ opacity: 0, x: -20 }}
                animate={rolesVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-xl border border-gray-100 hover:border-[#c8a45e]/30 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0a0f1c] flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 text-[#c8a45e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0a0f1c] group-hover:text-[#c8a45e] transition-colors">
                      {role.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {role.location}
                      </span>
                      <span>{role.type}</span>
                      <span className="hidden sm:inline">{role.department}</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#c8a45e] group-hover:translate-x-1 transition-all mt-4 sm:mt-0" />
              </motion.a>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#c8a45e]"
            >
              View All Roles <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
