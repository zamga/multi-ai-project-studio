import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/SectionHeader'
import { SplitSection } from '../components/SplitSection'
import { SEO } from '../components/SEO'
import { OrganizationSchema, WebsiteSchema } from '../components/StructuredData'

export function Home() {
  const principles = [
    'Trusted expertise',
    'Proven results',
    'Client-focused approach',
    'Personalized service',
  ]

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
        description="Expert financial advisory services for M&A, restructuring, and capital raising. Navigate complex business transitions with confidence through personalized guidance and proven results."
        canonical="/"
      />
      <OrganizationSchema />
      <WebsiteSchema />
      <div className="bg-white">
      <section className="relative py-24 md:py-32 bg-neutral-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #0B1020 1px, transparent 1px), linear-gradient(to bottom, #0B1020 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }} />
        </div>
        <div className="max-w-container mx-auto px-6 lg:px-12 relative">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-display-xl text-neutral-950 mb-6 leading-tight">
              Navigate Complex Business Transitions with Confidence
            </h1>
            <p className="text-body-lg text-neutral-600 mb-10 max-w-2xl leading-relaxed">
              Expert guidance through M&A, restructuring, and capital raising. We combine deep expertise with personalized service to deliver exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-200 hover:shadow-elevation"
              >
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-950 text-body-md font-sans font-medium rounded-sm hover:bg-neutral-50 transition-all duration-200"
              >
                Our capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-white border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionHeader
            eyebrow="WHAT WE DO"
            title="Comprehensive Financial Services"
            deck="From mergers and acquisitions to restructuring and capital raising, we provide end-to-end solutions tailored to your business needs."
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
            eyebrow="WHY CHOOSE US"
            title="Your Trusted Partner for Success"
          />
          
          <SplitSection
            left="Decades of experience delivering exceptional value and strategic outcomes for businesses across industries."
            right={
              <div className="space-y-3">
                {principles.map((principle, index) => (
                  <motion.p
                    key={index}
                    className="text-body-md text-neutral-700 leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    {principle}
                  </motion.p>
                ))}
              </div>
            }
          />
        </div>
      </section>

      <section className="py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.blockquote
              className="font-display text-display-md text-neutral-950 mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              "Delivering exceptional results through personalized service and unwavering commitment to your success."
            </motion.blockquote>
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
                className="group border-l-2 border-gold-500 pl-6 py-4 hover:bg-neutral-50 transition-all duration-220 cursor-pointer"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.22, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 4 }}
              >
                <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-2">
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-body-lg text-neutral-400 mb-4 leading-relaxed">
              Join businesses that have trusted Orvantt Services with their most important financial decisions.
            </p>
            <p className="text-body-sm text-neutral-500 mb-10 leading-relaxed">
              Schedule a consultation to discuss your objectives and explore how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-950 text-body-md font-sans font-medium rounded-sm hover:bg-neutral-100 transition-all duration-220 hover:shadow-elevation"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/contact?subject=NDA case studies"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-white text-body-md font-sans font-medium rounded-sm hover:bg-neutral-900 transition-all duration-220"
              >
                Learn More
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
