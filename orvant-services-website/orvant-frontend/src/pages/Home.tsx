import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { SplitSection } from '../components/SplitSection'
import { SEO } from '../components/SEO'
import { OrganizationSchema, WebsiteSchema } from '../components/StructuredData'

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
    },
    {
      title: 'Capital Structure Optimization',
      category: 'Public Markets',
    },
    {
      title: 'Operational Restructuring',
      category: 'Restructuring',
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
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #001F3F 1px, transparent 1px), linear-gradient(to bottom, #001F3F 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-navy-900/5 rounded-full blur-3xl" />
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
              <span className="inline-flex items-center px-4 py-2 bg-navy-900/5 border border-navy-900/10 rounded-full text-body-sm font-medium text-navy-900">
                Independent Advisory
              </span>
            </motion.div>
            <h1 className="font-display text-display-xl text-neutral-950 mb-8 leading-[1.1] tracking-tight">
              Navigate Complex Business Transitions with Confidence
            </h1>
            <p className="text-body-xl text-neutral-600 mb-12 max-w-2xl leading-relaxed">
              We advise owners and boards through M&A, restructurings, and public markets. Clear guidance, discreet execution, and outcomes that hold up in the boardroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-220 hover:shadow-elevation-lg hover:scale-[1.02]"
              >
                Start a confidential conversation
                <ArrowRight className="ml-2 transition-transform duration-220 group-hover:translate-x-1" size={18} />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-300 text-neutral-950 text-body-md font-sans font-medium rounded-sm hover:border-navy-900 hover:bg-navy-900/5 transition-all duration-220"
              >
                Our capabilities
                <ArrowRight className="ml-2 opacity-0 -translate-x-2 transition-all duration-220 group-hover:opacity-100 group-hover:translate-x-0" size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-white border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="WHAT WE DO"
            title="Advisory for Critical Moments"
            deck="We engage at inflection points—when the stakes are high, the timeline is tight, and the outcome matters for years to come."
          />
          
          <div className="space-y-12">
            <div>
              <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-4">Situations</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {situations.map((situation, index) => (
                  <span key={index} className="text-body-sm text-neutral-700">
                    {situation}
                    {index < situations.length - 1 && <span className="ml-4 text-neutral-300">|</span>}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-4">Sectors</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {sectors.map((sector, index) => (
                  <span key={index} className="text-body-sm text-neutral-700">
                    {sector}
                    {index < sectors.length - 1 && <span className="ml-4 text-neutral-300">|</span>}
                  </span>
                ))}
              </div>
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

      <section className="py-28 bg-white border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="HOW WE WORK"
            title="Structured Process, Senior Execution"
          />
          
          <SplitSection
            left="We join at inflection points. We structure the work, align stakeholders, and see it through."
            right={
              <div className="space-y-3">
                <motion.p
                  className="text-body-md text-neutral-700 leading-relaxed"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2 }}
                >
                  Senior attention on every mandate
                </motion.p>
                <motion.p
                  className="text-body-md text-neutral-700 leading-relaxed"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                >
                  Clear materials that enable good decisions
                </motion.p>
                <motion.p
                  className="text-body-md text-neutral-700 leading-relaxed"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  Calm execution, even under pressure
                </motion.p>
              </div>
            }
          />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-y border-navy-800">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
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

      <section className="py-28 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionHeader
            title="Recent Engagements"
            deck="Successfully completed transactions across diverse industries and situations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {mandates.map((mandate, index) => (
              <motion.div
                key={index}
                className="group relative border-l-2 border-gold-500 pl-6 py-4 hover:bg-neutral-50 transition-all duration-220 cursor-pointer rounded-r-sm"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.22, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-navy-900 scale-y-0 group-hover:scale-y-100 transition-transform duration-220 origin-top" />
                <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-2 transition-colors duration-220 group-hover:text-gold-600">
                  {mandate.type}
                </p>
                <h3 className="font-sans font-medium text-body-lg text-neutral-950 mb-1 group-hover:text-navy-900 transition-colors duration-220">
                  {mandate.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionHeader
            title="Insights & Resources"
            deck="Expert perspectives on navigating complex business transitions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.22, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-3">
                  <span className="text-body-xs text-neutral-500 font-medium uppercase tracking-widest">{insight.category}</span>
                </div>
                <h3 className="font-sans font-medium text-body-lg text-neutral-950 group-hover:text-navy-900 transition-colors duration-220">
                  {insight.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-neutral-950 text-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-lg mb-6 leading-tight">
              First conversation
            </h2>
            <p className="text-body-lg text-neutral-400 mb-10 leading-relaxed">
              Share your context, constraints, and objectives. We'll suggest a pragmatic next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-950 text-body-md font-sans font-medium rounded-sm hover:bg-neutral-100 transition-all duration-220 hover:shadow-elevation"
              >
                Start a confidential conversation
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
