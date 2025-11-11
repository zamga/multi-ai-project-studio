import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'
import { SEO } from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'

export function Leadership() {
  const leaders = [
    {
      name: 'Leadership Team',
      role: 'Managing Partners',
      title: 'Senior Advisory Partners',
      monogram: 'LT',
      focusAreas: ['M&A Advisory', 'Restructuring', 'Public Markets'],
      specialties: [
        'Cross-border M&A transactions',
        'Complex restructuring mandates',
        'Public market preparation and governance',
      ],
      credentials: [
        'Decades of experience advising owners and boards through high-stakes transitions',
        'Extensive cross-border transaction expertise across Americas, EMEA, and APAC',
        'Board-level strategic advisory and governance counsel',
      ],
      bio: 'Our leadership team brings decades of experience advising owners and boards through complex transitions. We maintain senior attention on every mandate from initial engagement through successful completion. Detailed profiles and credentials available upon request for confidential discussions.',
      placeholder: true,
    },
    {
      name: 'Advisory Partner',
      role: 'M&A Advisory Lead',
      title: 'Partner, Mergers & Acquisitions',
      monogram: 'AP',
      focusAreas: ['Cross-Border Transactions', 'Strategic Acquisitions', 'Divestitures'],
      specialties: [
        'Buy-side and sell-side transaction advisory',
        'Multi-jurisdictional deal structuring',
        'Carve-out and divestiture execution',
      ],
      credentials: [
        'Extensive M&A structuring and execution experience across industrials, technology, and healthcare sectors',
        'Multi-jurisdictional transaction expertise with deep knowledge of cross-border regulatory frameworks',
        'Board-level strategic advisory for complex acquisitions, divestitures, and corporate carve-outs',
      ],
      bio: 'Extensive experience structuring and executing M&A mandates across multiple jurisdictions. Specializes in board-level advisory for strategic acquisitions and divestitures, with particular expertise in complex cross-border transactions and corporate carve-outs. Maintains senior attention throughout the engagement lifecycle.',
      placeholder: true,
    },
    {
      name: 'Advisory Partner',
      role: 'Restructuring & Turnaround Lead',
      title: 'Partner, Corporate Restructuring',
      monogram: 'AP',
      focusAreas: ['Operational Restructuring', 'Financial Restructuring', 'Turnaround Management'],
      specialties: [
        'Business stabilization and liquidity management',
        'Multi-stakeholder negotiation and alignment',
        'Operational and financial turnaround execution',
      ],
      credentials: [
        'Specializes in stabilizing businesses under pressure with focus on cash preservation and stakeholder alignment',
        'Multi-stakeholder negotiation expertise including lenders, investors, boards, and management teams',
        'Credible turnaround execution with track record of developing and implementing executable restructuring plans',
      ],
      bio: 'Specializes in stabilizing businesses under pressure, aligning stakeholders, and executing credible turnaround plans with clear milestones. Deep expertise in both operational and financial restructuring, with particular strength in multi-stakeholder negotiations and liquidity management. Maintains calm execution even in high-pressure situations.',
      placeholder: true,
    },
    {
      name: 'Advisory Partner',
      role: 'Public Markets Lead',
      title: 'Partner, Capital Markets',
      monogram: 'AP',
      focusAreas: ['IPO Readiness', 'Investor Relations', 'Governance Advisory'],
      specialties: [
        'IPO preparation and readiness assessment',
        'Public company governance and controls',
        'Investor relations and equity story development',
      ],
      credentials: [
        'Public market preparation expertise with deep understanding of regulatory requirements and disclosure frameworks',
        'Governance and controls advisory including SOX compliance, board composition, and internal control frameworks',
        'Investor messaging and coordination with underwriters, legal counsel, and auditors throughout the IPO process',
      ],
      bio: 'Guides companies through public market preparation, governance readiness, and investor messaging. Coordinates with underwriters and advisors to ensure smooth market entry. Specializes in readiness assessments, equity story development, and establishing robust investor relations foundations. Maintains focus on credible disclosure and strong controls.',
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
          <div className="grain-overlay" />
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
                <span className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-body-sm font-medium text-white backdrop-blur-sm">
                  Leadership
                </span>
              </motion.div>
              <h1 className="font-display text-display-xl text-white mb-8 leading-[1.1] tracking-tight">
                Senior Advisors, Discreet Execution
              </h1>
              <p className="text-body-xl text-white/90 leading-relaxed">
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
                  className="group bg-white p-8 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220 card-premium"
                >
                  <div className="flex items-start gap-6 mb-6">
                    {/* Monogram tile with soft vignette */}
                    <div className="relative w-24 h-24 bg-navy-900 rounded-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                      <span className="relative text-gold-500 text-3xl font-display font-semibold">
                        {leader.monogram}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-1 group-hover:text-navy-900 transition-colors duration-220">
                        {leader.name}
                      </h3>
                      <p className="text-body-sm text-neutral-600 mb-1">{leader.role}</p>
                      {leader.title && (
                        <p className="text-body-xs text-neutral-500 mb-3">{leader.title}</p>
                      )}
                    </div>
                  </div>

                  {/* Specialties */}
                  {leader.specialties && (
                    <div className="mb-4">
                      <p className="text-body-xs uppercase tracking-widest text-neutral-500 mb-2">Specialties</p>
                      <div className="flex flex-wrap gap-2">
                        {leader.specialties.map((specialty, i) => (
                          <span key={i} className="inline-block px-3 py-1 bg-gold-500/10 text-gold-700 text-body-xs font-medium rounded-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Focus areas as tags */}
                  <div className="mb-4">
                    <p className="text-body-xs uppercase tracking-widest text-neutral-500 mb-2">Areas of Focus</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.focusAreas.map((area, i) => (
                        <span key={i} className="inline-block px-3 py-1 bg-navy-900/5 text-navy-900 text-body-xs font-medium rounded-sm">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credentials bullets */}
                  <div className="mb-6">
                    <p className="text-body-xs uppercase tracking-widest text-neutral-500 mb-2">Experience & Credentials</p>
                    <ul className="space-y-2">
                      {leader.credentials.map((credential, i) => (
                        <li key={i} className="text-body-sm text-neutral-700 flex items-start leading-relaxed">
                          <span className="text-gold-600 mr-2 mt-1">•</span>
                          <span>{credential}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-body-md text-neutral-700 leading-relaxed mb-6 pb-6 border-b border-neutral-200">
                    {leader.bio}
                  </p>

                  {leader.placeholder && (
                    <p className="text-body-sm text-neutral-500 italic">
                      Full profile and credentials available upon request
                    </p>
                  )}

                  {!leader.placeholder && (
                    <div className="flex items-center gap-4">
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
