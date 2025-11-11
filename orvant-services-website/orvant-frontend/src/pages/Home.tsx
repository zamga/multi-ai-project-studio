import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { SEO } from '../components/SEO'
import { HeroVideo } from '../components/HeroVideo'
import { OrganizationSchema, WebsiteSchema } from '../components/StructuredData'
import { GlobalMap } from '../components/GlobalMap'
import { InsightsCarousel } from '../components/InsightsCarousel'
import { PhotoCard } from '../components/PhotoCard'

export function Home() {
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
      <HeroVideo posterSrc="/images/hero-abstract.jpg">
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
              <h1 className="font-display text-h1 text-white mb-8 leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
                Independent Advisory for Complex Transitions
              </h1>
              
              {/* Brand narrative */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-body-lg text-white/70 mb-10 max-w-3xl font-light tracking-wide"
                style={{ lineHeight: '1.8', letterSpacing: '0.01em' }}
              >
                We advise only at the decisive moments—when your business faces its next chapter.
              </motion.p>
              
              <p className="text-body-xl text-white/95 mb-12 max-w-3xl font-light" style={{ lineHeight: '1.8' }}>
                We partner with a select roster of leaders at pivotal moments—delivering senior-led guidance, board-ready outcomes, and discreet execution across 20+ jurisdictions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-12 py-6 bg-gold-500 text-white text-body-xl font-sans font-bold rounded-sm hover:bg-gold-400 transition-all duration-300 hover:shadow-premium hover:scale-[1.05] shadow-xl"
                >
                  Begin a Confidential Conversation
                  <ArrowRight className="ml-2 btn-arrow" size={22} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center text-white/70 text-body-md font-sans font-medium hover:text-gold-400 transition-all duration-300 mt-4 sm:mt-8"
                >
                  Explore Our Capabilities
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </HeroVideo>

      {/* Distinctive Value Section - Why Choose Us - Premium Editorial Style */}
      <section className="py-[100px] sm:py-[60px] bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="font-display text-h2 text-neutral-950 mb-6">
              Why Choose Us
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto" style={{ lineHeight: '1.8' }}>
              We bring senior-led execution, independence, and discretion to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
            {[
              {
                title: "Partners Personally Engaged",
                description: "Partners take personal ownership of your mandate from day one, ensuring accountability and continuity."
              },
              {
                title: "Independence & Objectivity",
                description: "No conflicts, no product sales—just clear-eyed advice aligned with your interests."
              },
              {
                title: "Discretion by Design",
                description: "Controlled processes, limited distribution lists, and careful stakeholder management protect sensitive information."
              },
              {
                title: "Global Execution Expertise",
                description: "Deep experience across 20+ jurisdictions with local regulatory knowledge and cross-border coordination."
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-left"
              >
                <h3 className="font-sans font-bold text-body-xl text-neutral-950 mb-3" style={{ letterSpacing: '-0.01em' }}>
                  {pillar.title}
                </h3>
                <p className="text-body-md text-neutral-600" style={{ lineHeight: '1.7' }}>
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Services Overview */}
      <section className="py-[100px] sm:py-[60px] bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Left: Narrative */}
            <div>
              <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-4">WHAT WE DO</p>
              <h2 className="font-display text-h2 text-neutral-950 mb-6">
                Advisory for Complex Transitions
              </h2>
              <p className="text-body-lg text-neutral-600 mb-6" style={{ lineHeight: '1.8' }}>
                We engage at the moments that define companies—transactions, restructurings, and capital events. When the stakes are high, the timeline is tight, and the outcome matters for years to come.
              </p>
              <p className="text-body-md text-neutral-600" style={{ lineHeight: '1.7' }}>
                Our services span M&A advisory, restructuring, public markets, and strategic counsel—delivered with senior partner oversight and board-ready outcomes.
              </p>
            </div>

            {/* Right: Service Photo Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "M&A Advisory",
                  description: "Strategic guidance from preparation through closing with board-ready materials."
                },
                {
                  title: "Restructuring",
                  description: "Stabilise performance, optimise capital structure and position for value recovery."
                },
                {
                  title: "Public Markets",
                  description: "Navigate IPOs, secondary offerings, and capital raises with institutional credibility."
                },
                {
                  title: "Strategic Counsel",
                  description: "Board-level advice on critical decisions, governance, and stakeholder alignment."
                }
              ].map((service, index) => (
                <PhotoCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  href="/services"
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-navy-900 text-navy-900 text-body-lg font-sans font-medium rounded-sm hover:bg-navy-900 hover:text-white transition-all duration-300"
            >
              View All Capabilities
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Hero-level Visual Section */}
      <section className="relative py-48 bg-navy-900 border-b border-navy-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDOUEyNTkiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptLTItMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6bTAtMmgydjJoLTJ2LTJ6bS0yLTJoMnYyaC0ydi0yem0yLTJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yem0tMi0yaDF2Mmgtdi0yem0yLTJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-h2 text-white mb-6">
              Partnering with Leaders Across Global Industries
            </h2>
            <p className="text-body-xl text-white/80 max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
              Focused on high-stakes transitions in technology, healthcare, industrials and financial services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-[100px] sm:py-[60px] bg-white border-b border-neutral-200">
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
          
          <div className="mt-16 text-center">
            <p className="font-display text-display-sm text-neutral-600 font-normal leading-tight tracking-tight">
              Clear materials. Clean process. Credible outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-[100px] sm:py-[60px] bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-h2 text-neutral-950 mb-6">
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

      {/* Recent Engagements & Global Presence - Combined Section */}
      <section className="py-[100px] sm:py-[60px] bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-h2 text-neutral-950 mb-6">
              Recent Engagements & Global Presence
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Representative transactions across M&A, restructuring, and public markets—delivered with deep regional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Left Column: Global Map & Regional Cards */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-12"
              >
                <GlobalMap />
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    region: "Americas",
                    items: ["New York, Toronto, São Paulo coverage", "SEC, TSX regulatory expertise", "North-South transaction structuring"]
                  },
                  {
                    region: "EMEA",
                    items: ["London, Frankfurt, Dubai presence", "FCA, BaFin regional compliance", "Pan-European coordination"]
                  },
                  {
                    region: "APAC",
                    items: ["Singapore, Hong Kong, Sydney networks", "MAS, HKMA, ASIC knowledge", "Asia-Pacific cross-border expertise"]
                  }
                ].map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-sm border border-neutral-200"
                  >
                    <h3 className="font-sans font-bold text-body-lg text-neutral-950 mb-3">{region.region}</h3>
                    <ul className="space-y-2 text-body-sm text-neutral-600">
                      {region.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-gold-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Engagement Cards */}
            <div>
              <div className="space-y-6">
                {mandates.map((mandate, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-white p-6 rounded-sm border border-neutral-200 hover:border-gold-500/30 hover:shadow-elevation transition-all duration-300"
                  >
                    <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-2">
                      {mandate.type}
                    </p>
                    <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-2 group-hover:text-navy-900 transition-colors duration-300">
                      {mandate.title}
                    </h3>
                    <p className="text-body-sm text-neutral-600">
                      Confidential engagement—board-ready outcomes delivered with discretion.
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/tombstones"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-navy-900 text-navy-900 text-body-lg font-sans font-medium rounded-sm hover:bg-navy-900 hover:text-white transition-all duration-300"
            >
              View All Transactions
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[100px] sm:py-[60px] bg-neutral-50 border-y border-neutral-200">
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

      {/* Client Testimonials - Refined */}
      <section className="py-[100px] sm:py-[60px] bg-white border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  quote: "Their ability to navigate regulatory complexity while maintaining momentum was exceptional. True partner-led execution.",
                  attribution: "Confidential • Board Chair, FTSE-listed"
                },
                {
                  quote: "Clear thinking, pragmatic advice, and outcomes that held up under scrutiny. Exactly what we needed at a critical juncture.",
                  attribution: "Confidential • Chief Executive Officer, Technology"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-gold-500/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-body-lg text-neutral-700 mb-6 leading-relaxed" style={{ lineHeight: '1.7' }}>
                    {testimonial.quote}
                  </p>
                  <p className="text-body-xs text-neutral-500 uppercase tracking-wider font-sans">
                    {testimonial.attribution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] sm:py-[60px] bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white border-t border-neutral-800">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-h2 mb-6 leading-tight">
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
