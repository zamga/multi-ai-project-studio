import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'
import { SEO } from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'

export function Leadership() {
  const leaders = [
    {
      name: 'Leadership Team',
      role: 'Partners & Advisors',
      expertise: 'M&A, Restructuring, Public Markets',
      bio: 'Our leadership team brings decades of experience advising owners and boards through complex transitions. Detailed profiles and credentials available upon request.',
      placeholder: true,
    },
    {
      name: 'Advisory Partner',
      role: 'M&A Advisory',
      expertise: 'Cross-Border Transactions',
      bio: 'Extensive experience structuring and executing M&A mandates across multiple jurisdictions. Board-level advisory for strategic acquisitions and divestitures.',
      placeholder: true,
    },
    {
      name: 'Advisory Partner',
      role: 'Restructuring & Turnaround',
      expertise: 'Operational & Financial Restructuring',
      bio: 'Specializes in stabilizing businesses under pressure, aligning stakeholders, and executing credible turnaround plans with clear milestones.',
      placeholder: true,
    },
    {
      name: 'Advisory Partner',
      role: 'Public Markets',
      expertise: 'IPO Readiness & Investor Relations',
      bio: 'Guides companies through public market preparation, governance readiness, and investor messaging. Coordinates with underwriters and advisors.',
      placeholder: true,
    },
  ]

  return (
    <>
      <SEO
        title="Leadership"
        description="Meet the leadership team at Orvantt Services. Experienced advisors guiding owners and boards through M&A, restructuring, and public markets transitions."
        canonical="/leadership"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Leadership', url: '/leadership' },
      ]} />

      <div className="bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} />
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="max-w-container mx-auto px-6 lg:px-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-body-sm font-medium text-white">
                  Leadership
                </span>
              </motion.div>
              <h1 className="font-display text-display-xl text-white mb-8 leading-[1.1] tracking-tight">
                Senior Advisors, Discreet Execution
              </h1>
              <p className="text-body-xl text-navy-100 leading-relaxed">
                Our partners have advised on complex transitions across industries and geographies. Every mandate receives senior attention from start to finish.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-neutral-50">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white p-8 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
                >
                  {/* Placeholder for photo */}
                  <div className="w-32 h-32 bg-gradient-to-br from-navy-900 to-navy-800 rounded-sm mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-display">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-1 group-hover:text-navy-900 transition-colors duration-220">
                    {leader.name}
                  </h3>
                  <p className="text-body-sm text-neutral-600 mb-2">{leader.role}</p>
                  <p className="text-body-xs uppercase tracking-widest text-gold-600 mb-4 transition-colors duration-220 group-hover:text-gold-700">
                    {leader.expertise}
                  </p>
                  <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
                    {leader.bio}
                  </p>

                  {leader.placeholder && (
                    <p className="text-body-sm text-neutral-500 italic">
                      Full profile and credentials available upon request
                    </p>
                  )}

                  {!leader.placeholder && (
                    <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                      <button className="text-neutral-600 hover:text-navy-900 transition-colors duration-220">
                        <Mail size={18} />
                      </button>
                      <button className="text-neutral-600 hover:text-navy-900 transition-colors duration-220">
                        <Linkedin size={18} />
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-neutral-200">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-display-lg text-neutral-950 mb-6 leading-tight">
                Work with us
              </h2>
              <p className="text-body-lg text-neutral-600 mb-10 leading-relaxed">
                Share your context and objectives. We'll suggest a pragmatic next step.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-220 hover:shadow-elevation-lg hover:scale-[1.02]"
              >
                Start a confidential conversation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
