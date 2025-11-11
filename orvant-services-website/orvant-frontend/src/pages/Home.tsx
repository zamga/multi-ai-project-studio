import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { SEO } from '../components/SEO'
import { HeroVideo } from '../components/HeroVideo'
import { OrganizationSchema, WebsiteSchema } from '../components/StructuredData'
import { GlobalMap } from '../components/GlobalMap'
import { InsightsCarousel } from '../components/InsightsCarousel'
import { ServiceIcon } from '../components/ServiceIcon'

export function Home() {
  const situations = [
    'Mergers & Acquisitions',
    'Business Sales',
    'Strategic Acquisitions',
    'Corporate Restructuring',
  ]

  const sectors = [
    'Industrials',
    'Technology',
    'Healthcare',
    'Financial Services',
  ]

  const mandates = [
    { 
      title: 'Carve-out of software division',
      type: 'Strategic buyer',
    },
    { 
      title: 'Treasury optimization and covenant reset',
      type: 'Multi-lender syndicate',
    },
    { 
      title: 'IPO advisory for financial services platform',
      type: 'Public listing',
    },
    { 
      title: 'Cross-border acquisition',
      type: 'International retail group',
    },
  ]

  const insights = [
    {
      title: 'Navigating Market Volatility in M&A',
      category: 'M&A Advisory',
      excerpt: 'How to maintain deal momentum and valuation discipline when market conditions shift mid-process.',
    },
    {
      title: 'Capital Structure Optimization',
      category: 'Public Markets',
      excerpt: 'Strategic approaches to balance sheet management and capital allocation for public companies.',
    },
    {
      title: 'Operational Restructuring',
      category: 'Restructuring',
      excerpt: 'Practical frameworks for stabilizing operations and restoring stakeholder confidence under pressure.',
    },
    {
      title: 'Cross-Border Transaction Considerations',
      category: 'M&A Advisory',
      excerpt: 'Key regulatory, tax, and cultural factors to navigate in international deals.',
    },
    {
      title: 'IPO Readiness Assessment',
      category: 'Public Markets',
      excerpt: 'Critical governance, controls, and disclosure requirements for companies preparing to go public.',
    },
  ]


  return (
    <>
      <SEO
        title="Home"
        description="We advise owners and boards through M&A, restructurings, and public markets. Clear guidance, discreet execution, and outcomes that hold up in the boardroom."
        canonical="/"
      />
      <OrganizationSchema />
      <WebsiteSchema />
      <div className="bg-white">
      <HeroVideo posterSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop">
        <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
          <div className="grain-overlay" />
          <div className="radial-vignette" />
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} />
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="max-w-container mx-auto px-6 lg:px-12 relative">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-body-sm font-medium text-white backdrop-blur-sm">
                  Independent Advisory
                </span>
              </motion.div>
              <h1 className="font-display text-display-2xl text-white mb-10 leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
                Independent Advisory for Complex Transitions
              </h1>
              <p className="text-body-xl text-white/95 mb-12 max-w-3xl font-light" style={{ lineHeight: '1.8' }}>
                We partner with a select roster of leaders at pivotal moments—delivering senior-led guidance, board-ready outcomes, and discreet execution across 20+ jurisdictions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-gold-500 text-navy-900 text-body-lg font-sans font-bold rounded-sm hover:bg-gold-400 transition-all duration-300 hover:shadow-premium hover:scale-[1.05] shadow-xl"
                >
                  Begin a Confidential Conversation
                  <ArrowRight className="ml-2 btn-arrow" size={20} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center text-white/80 text-body-sm font-sans font-medium hover:text-gold-400 transition-colors duration-220 pt-5 underline underline-offset-4"
                >
                  Explore Our Capabilities
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
              
              {/* Trust cues */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <p className="text-body-xs uppercase tracking-widest text-white/60 mb-4">Trusted by</p>
                <div className="flex flex-wrap items-center gap-8 opacity-60">
                  <div className="text-white/80 text-body-sm font-medium">Financial Services</div>
                  <span className="text-white/40">·</span>
                  <div className="text-white/80 text-body-sm font-medium">Technology</div>
                  <span className="text-white/40">·</span>
                  <div className="text-white/80 text-body-sm font-medium">Healthcare</div>
                  <span className="text-white/40">·</span>
                  <div className="text-white/80 text-body-sm font-medium">Industrials</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </HeroVideo>

      {/* Client Logos / Trust Signals */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <p className="text-center text-body-lg text-neutral-800 mb-3 font-semibold">
            Trusted by boards and owners across high-stakes global industries
          </p>
          <p className="text-center text-body-xs uppercase tracking-widest text-neutral-500 mb-12">
            Select Sectors
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {[
              { 
                name: 'Financial Services',
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              },
              { 
                name: 'Technology',
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              },
              { 
                name: 'Healthcare',
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              },
              { 
                name: 'Industrials',
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              }
            ].map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-4 text-gold-500 group-hover:text-gold-400 transition-colors duration-300 flex justify-center">{sector.icon}</div>
                <div className="text-body-md font-sans font-semibold text-neutral-700 group-hover:text-navy-900 transition-colors duration-220">{sector.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-white border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="WHAT WE DO"
            title="Advisory for Critical Moments"
            deck="We engage at the moments that define companies—transactions, restructurings, and capital events."
          />
          <p className="text-body-lg text-neutral-600 text-center max-w-3xl mx-auto mb-16" style={{ lineHeight: '1.7' }}>
            When the stakes are high, the timeline is tight, and the outcome matters for years to come.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {situations.map((situation, index) => {
              const serviceIds = ['ma-advisory', 'buy-sell', 'ma-advisory', 'restructuring']
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-neutral-50 p-6 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:bg-white hover:shadow-elevation transition-all duration-220 card-premium"
                >
                  <div className="w-12 h-12 bg-navy-900/5 rounded-sm flex items-center justify-center mb-4 group-hover:bg-navy-900 transition-colors duration-220">
                    <ServiceIcon serviceId={serviceIds[index]} className="w-6 h-6 text-navy-900 group-hover:text-gold-500 transition-colors duration-220" />
                  </div>
                  <h3 className="font-sans font-semibold text-body-md text-neutral-950 mb-2 group-hover:text-navy-900 transition-colors duration-220">
                    {situation}
                  </h3>
                  <p className="text-body-sm text-neutral-600 leading-relaxed">
                    {index === 0 && "Strategic guidance from preparation through closing"}
                    {index === 1 && "Confidential processes for ownership transitions"}
                    {index === 2 && "Platform consolidation and market expansion"}
                    {index === 3 && "Operational and financial stabilization"}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <div className="mb-12">
            <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-4">Sectors we serve</p>
            <div className="flex flex-wrap items-center gap-3">
              {sectors.map((sector, index) => (
                <span key={index} className="inline-block px-4 py-2 bg-neutral-100 text-neutral-700 text-body-sm rounded-sm hover:bg-navy-900 hover:text-white transition-all duration-220 cursor-pointer">
                  {sector}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-body-md text-navy-900 hover:text-navy-800 font-medium transition-colors duration-200"
            >
              View all capabilities
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-40 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="WHY CHOOSE US"
            title="What Sets Us Apart"
            deck="Senior partner-led from start to finish. Independent thinking. Outcomes that hold up in the boardroom."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Senior Partner-Led Throughout",
                description: "Partners lead every engagement from initial conversation through completion. You work directly with experienced advisors who have navigated complex situations across multiple jurisdictions and industries.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              },
              {
                title: "Independence & Objectivity",
                description: "No lending relationships, no investment banking conflicts, no pressure to cross-sell. Our only obligation is to provide clear-eyed advice aligned with your interests and board-level outcomes.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              },
              {
                title: "Discretion by Design",
                description: "Confidentiality isn't just a promise—it's how we operate. Controlled processes, limited distribution lists, and careful stakeholder management protect sensitive information at every stage.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white p-10 rounded-sm border border-neutral-200 hover:border-gold-500/30 hover:shadow-premium transition-all duration-300"
              >
                <div className="w-16 h-16 bg-navy-900/5 rounded-sm flex items-center justify-center mb-6 group-hover:bg-navy-900 transition-colors duration-300">
                  <div className="text-navy-900 group-hover:text-gold-500 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-sans font-bold text-body-xl text-neutral-950 mb-4 group-hover:text-navy-900 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-body-md text-neutral-600 leading-relaxed" style={{ lineHeight: '1.7' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-white border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="HOW WE WORK"
            title="Structured Process, Senior Execution"
          />
          
          <div className="max-w-4xl mx-auto">
            <p className="text-body-lg text-neutral-600 mb-12 leading-relaxed text-center">
              We join at inflection points. We structure the work, align stakeholders, and see it through.
            </p>
            
            {/* Timeline graphic */}
            <div className="relative">
              {/* Animated timeline line */}
              <motion.div 
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-gold-500 to-transparent origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              
              <div className="space-y-8">
                {[
                  { title: "Engage", description: "Senior attention on every mandate from day one" },
                  { title: "Structure", description: "Clear materials that enable good decisions" },
                  { title: "Execute", description: "Calm execution, even under pressure" },
                  { title: "Close", description: "See it through to completion with credible outcomes" }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    <div className="relative z-10 w-16 h-16 bg-navy-900 rounded-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-gold-500 text-xl font-display font-semibold">{index + 1}</span>
                    </div>
                    <div className="flex-1 pt-3">
                      <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-2">{step.title}</h3>
                      <p className="text-body-md text-neutral-600 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-y border-navy-800">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gold-500/10 blur-3xl rounded-full" />
              <p className="relative font-display text-display-md text-white font-normal leading-tight tracking-tight">
                Clear materials. Clean process. Credible outcomes.
              </p>
            </motion.div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Years Experience", value: "15+", description: "Combined team expertise" },
              { label: "Jurisdictions", value: "20+", description: "Global reach" },
              { label: "Industries", value: "12+", description: "Sector coverage" },
              { label: "Success Rate", value: "95%+", description: "Completed mandates" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="absolute inset-0 bg-gold-500/5 blur-2xl rounded-full" />
                <div className="relative text-[72px] leading-none font-display text-gold-500 mb-3 font-bold">
                  {metric.value}
                </div>
                <div className="text-body-md font-sans font-semibold text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-body-sm text-navy-200">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-body-md text-navy-200 mt-12 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
            Our track record reflects the discipline and senior oversight we bring to every engagement.
          </p>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-32 bg-white border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-lg text-neutral-950 mb-6">
              Recognition & Standards
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in industry recognition and adherence to the highest professional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                year: "2024",
                title: "M&A Advisory Excellence",
                description: "Recognized for outstanding advisory in complex cross-border transactions"
              },
              {
                year: "2023",
                title: "Restructuring Leadership",
                description: "Acknowledged for innovative approaches to corporate restructuring"
              },
              {
                year: "2022",
                title: "Professional Standards",
                description: "Commended for maintaining highest ethical and professional standards"
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-neutral-50 p-8 rounded-sm border border-neutral-200 hover:border-gold-500/30 hover:shadow-elevation transition-all duration-300 group"
              >
                <div className="absolute top-6 right-6 w-16 h-16 bg-navy-900 rounded-sm flex items-center justify-center">
                  <span className="text-gold-500 font-display text-body-lg font-bold">{award.year}</span>
                </div>
                <div className="pr-20">
                  <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3 group-hover:text-navy-900 transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-body-sm text-neutral-600 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional Affiliations */}
          <div className="text-center">
            <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-6">Professional Affiliations</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-body-sm text-neutral-600">
              <span className="hover:text-navy-900 transition-colors duration-220">Independent Advisory Standards</span>
              <span className="text-neutral-300">·</span>
              <span className="hover:text-navy-900 transition-colors duration-220">Professional Ethics Board</span>
              <span className="text-neutral-300">·</span>
              <span className="hover:text-navy-900 transition-colors duration-220">Global M&A Network</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-2">Operating standards</p>
              <div className="flex flex-wrap items-center gap-x-3 text-body-sm text-neutral-700">
                <span>Independence</span>
                <span className="text-neutral-300">·</span>
                <span>Senior-led execution</span>
                <span className="text-neutral-300">·</span>
                <span>Confidentiality</span>
                <span className="text-neutral-300">·</span>
                <span>Alignment</span>
              </div>
            </div>
            <div>
              <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-2">Where we operate</p>
              <div className="flex flex-wrap items-center gap-x-3 text-body-sm text-neutral-700">
                <span>Americas</span>
                <span className="text-neutral-300">·</span>
                <span>EMEA</span>
                <span className="text-neutral-300">·</span>
                <span>APAC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionHeader
            title="Recent Engagements"
            deck="Representative transactions across M&A, restructuring, and public markets."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mandates.map((mandate, index) => (
              <motion.div
                key={index}
                className="group relative bg-neutral-50 p-6 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:bg-white hover:shadow-elevation transition-all duration-220 cursor-pointer"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.22, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-10 h-10 bg-navy-900/5 rounded-sm flex items-center justify-center mb-4 group-hover:bg-navy-900 transition-colors duration-220">
                  <div className="w-5 h-5 border-2 border-navy-900 group-hover:border-gold-500 rounded-sm transition-colors duration-220" />
                </div>
                <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-2 transition-colors duration-220 group-hover:text-gold-600">
                  {mandate.type}
                </p>
                <h3 className="font-sans font-medium text-body-md text-neutral-950 mb-3 group-hover:text-navy-900 transition-colors duration-220 leading-snug">
                  {mandate.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2 py-1 bg-neutral-100 text-neutral-600 text-body-xs rounded-sm">
                    Confidential
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/tombstones"
              className="inline-flex items-center text-body-md text-navy-900 hover:text-navy-800 font-medium transition-colors duration-200 link-underline"
            >
              View all transactions
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionHeader
            title="Featured Insights"
            deck="Expert perspectives on navigating complex business transitions."
          />

          <InsightsCarousel insights={insights.slice(0, 3)} />

          <div className="mt-12 text-center">
            <Link
              to="/insights"
              className="inline-flex items-center text-body-md text-navy-900 hover:text-navy-800 font-medium transition-colors duration-200"
            >
              View all insights
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-32 bg-white border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-lg text-neutral-950 mb-6">
              Client Perspectives
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Trusted by leaders navigating complex transitions across industries and geographies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The team's discretion and senior-level engagement made all the difference in a sensitive cross-border restructuring.",
                title: "Chief Financial Officer",
                company: "Industrial Manufacturing Group"
              },
              {
                quote: "Their ability to navigate regulatory complexity while maintaining momentum was exceptional. True partner-led execution.",
                title: "Board Chair",
                company: "Technology Services Firm"
              },
              {
                quote: "Clear thinking, pragmatic advice, and outcomes that held up under scrutiny. Exactly what we needed at a critical juncture.",
                title: "Chief Executive Officer",
                company: "Healthcare Platform"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-neutral-50 p-8 rounded-sm border border-neutral-200 hover:border-navy-900/10 hover:shadow-elevation transition-all duration-300"
              >
                <div className="mb-6">
                  <svg className="w-10 h-10 text-gold-500/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-body-md text-neutral-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-neutral-200 pt-4">
                  <p className="font-sans font-semibold text-body-sm text-neutral-950 mb-1">
                    {testimonial.title}
                  </p>
                  <p className="text-body-xs text-neutral-500 uppercase tracking-wider">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-body-sm text-neutral-500 italic">
              Client names withheld to maintain confidentiality
            </p>
          </div>
        </div>
      </section>

      {/* Global Operations */}
      <section className="py-32 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-display-lg text-neutral-950 mb-6">
              Global Operations
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-12">
              We advise on cross-border transactions and operate across major financial centers with deep regional expertise.
            </p>
          </div>
          
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <GlobalMap />
          </motion.div>

          {/* Regional Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-neutral-50 p-8 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
            >
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Americas</h3>
              <p className="text-body-md text-neutral-600 leading-relaxed mb-4">
                Deep expertise in US and Canadian markets, with extensive experience in cross-border transactions involving Latin America.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>New York, Toronto, São Paulo coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>SEC, TSX, and regional regulatory expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>North-South transaction structuring</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-neutral-50 p-8 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
            >
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">EMEA</h3>
              <p className="text-body-md text-neutral-600 leading-relaxed mb-4">
                Extensive experience across European and Middle Eastern markets, with particular strength in UK, Germany, and UAE.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>London, Frankfurt, Dubai presence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>FCA, BaFin, and regional compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>Pan-European transaction coordination</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-neutral-50 p-8 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
            >
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">APAC</h3>
              <p className="text-body-md text-neutral-600 leading-relaxed mb-4">
                Strong relationships and transaction experience across Asia-Pacific, with focus on Singapore, Hong Kong, and Australia.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>Singapore, Hong Kong, Sydney networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>MAS, HKMA, ASIC regulatory knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-600 mr-2">•</span>
                  <span>Asia-Pacific cross-border expertise</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white border-t border-neutral-800">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-display-xl mb-6 leading-tight">
              First conversation
            </h2>
            <p className="text-body-xl text-neutral-300 mb-4" style={{ lineHeight: '1.7' }}>
              Share your context, constraints, and objectives. We'll suggest a pragmatic next step.
            </p>
            <p className="text-body-sm text-neutral-400 mb-10 italic">
              We respond within 24 hours—your information remains strictly confidential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-10 py-5 bg-gold-600 text-navy-900 text-body-lg font-sans font-bold rounded-sm hover:bg-gold-500 transition-all duration-220 hover:shadow-elevation-lg hover:scale-[1.02] shadow-lg"
              >
                Start a Confidential Conversation
                <ArrowRight className="ml-2 transition-transform duration-220 group-hover:translate-x-1" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
