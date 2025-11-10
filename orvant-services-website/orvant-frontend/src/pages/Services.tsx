import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionHeader } from '../components/SectionHeader'

export function Services() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeService, setActiveService] = useState('ma-advisory')
  
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && services.some(s => s.id === hash)) {
      setActiveService(hash)
    }
  }, [location.hash])

  const services = [
    {
      id: 'ma-advisory',
      title: 'M&A Advisory',
      description: 'Sell- and buy-side counsel from preparation through close.',
      approach: 'Rigorous preparation and positioning, a structured process, and tight counterparty choreography. We coordinate diligence, negotiate terms, and manage documentation through closing.',
      outcomes: [
        'Negotiating leverage with credible alternatives',
        'Board alignment and clear record',
        'Clean diligence and execution certainty',
      ],
      situations: [
        'Sell-side mandates',
        'Buy-side representation',
        'Carve-outs',
        'Cross-border M&A',
      ],
      capabilities: [
        'Valuation',
        'Deal structuring',
        'Due diligence',
        'Negotiation',
      ],
    },
    {
      id: 'restructuring',
      title: 'Restructuring',
      description: 'Operational and financial resets that restore stability and runway.',
      approach: 'Rapid assessment, options analysis, and a plan sequenced for liquidity, operations, and capital structure. We negotiate with creditors and oversee implementation.',
      outcomes: [
        'Stabilized cash and operations',
        'Stakeholder alignment and milestones',
        'Path to sustainable performance',
      ],
      situations: [
        'Operational turnarounds',
        'Debt restructuring',
        'Covenant resets',
        'Liquidity management',
      ],
      capabilities: [
        'Turnaround planning',
        'Debt refinancing',
        'Stakeholder negotiation',
        'Cash optimization',
      ],
    },
    {
      id: 'public-markets',
      title: 'Public Markets',
      description: 'Counsel on access to public capital and listing readiness.',
      approach: 'Readiness work across reporting, governance, and controls; documentation and advisor coordination; measured communications and timetable discipline.',
      outcomes: [
        'Market-ready narrative and filings',
        'Disciplined execution with advisors',
        'Post-listing investor cadence',
      ],
      situations: [
        'IPO preparation',
        'Secondary offerings',
        'SPAC transactions',
        'Direct listings',
      ],
      capabilities: [
        'IPO readiness',
        'Roadshow execution',
        'Underwriter coordination',
        'Post-IPO support',
      ],
    },
    {
      id: 'accounting',
      title: 'Accounting & Compliance',
      description: 'Financial reporting, controls, and audit readiness that withstand scrutiny.',
      approach: 'Reporting frameworks aligned to GAAP/IFRS, evidence-ready files, and auditor coordination. We resolve technical issues and institutionalize routines.',
      outcomes: [
        'Clean opinions and timely closes',
        'Controls mapped and operating',
        'Regulatory confidence',
      ],
      situations: [
        'Audit preparation',
        'Technical accounting',
        'SOX compliance',
        'GAAP/IFRS conversion',
      ],
      capabilities: [
        'GAAP/IFRS reporting',
        'Audit coordination',
        'Internal controls',
        'Technical guidance',
      ],
    },
    {
      id: 'buy-sell',
      title: 'Buy/Sell Company',
      description: 'Institutional process to acquire or exit a business end-to-end.',
      approach: 'Preparation and materials, targeted outreach, and measured negotiation. We run diligence workstreams and close with documented certainty.',
      outcomes: [
        'Valuation clarity and positioning',
        'Qualified counterparties and traction',
        'Smooth transition and day-one plan',
      ],
      situations: [
        'Business sales',
        'Strategic acquisitions',
        'Management buyouts',
        'Founder liquidity',
      ],
      capabilities: [
        'Business valuation',
        'Buyer identification',
        'Marketing',
        'Transaction closing',
      ],
    },
  ]

  const currentService = services.find(s => s.id === activeService) || services[0]

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId)
    navigate(`/services#${serviceId}`, { replace: true })
  }

  return (
    <div className="bg-white">
      <section className="py-24 md:py-32 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-display-xl text-neutral-950 mb-6 leading-tight">
              Capabilities
            </h1>
            <p className="text-body-lg text-neutral-600 leading-relaxed">
              Institutional execution across transactions, restructurings, and public markets—senior teams, discreet process, aligned outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className={`w-full text-left px-4 py-3 rounded-sm text-body-md font-sans transition-all duration-200 ${
                      activeService === service.id
                        ? 'bg-neutral-100 text-neutral-950 font-medium'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-12">
                  <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-4">SERVICE</p>
                  <h2 className="font-display text-display-lg text-neutral-950 mb-4 leading-tight">
                    {currentService.title}
                  </h2>
                  <p className="text-body-lg text-neutral-600 leading-relaxed">
                    {currentService.description}
                  </p>
                </div>

                <div className="space-y-10">
                  <div>
                    <h3 className="font-sans font-medium text-body-md text-neutral-950 mb-4">What we deliver</h3>
                    <ul className="space-y-2">
                      {currentService.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gold-500 mr-3">•</span>
                          <span className="text-body-md text-neutral-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-4">Situations we handle</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      {currentService.situations.map((situation, index) => (
                        <span key={index} className="text-body-sm text-neutral-700">
                          {situation}
                          {index < currentService.situations.length - 1 && <span className="ml-4 text-neutral-300">|</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-4">Capabilities</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      {currentService.capabilities.map((capability, index) => (
                        <span key={index} className="text-body-sm text-neutral-700">
                          {capability}
                          {index < currentService.capabilities.length - 1 && <span className="ml-4 text-neutral-300">|</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Accordion type="single" collapsible className="border-t border-neutral-200">
                      <AccordionItem value="approach" className="border-neutral-200">
                        <AccordionTrigger className="text-body-md font-sans font-medium text-neutral-950 hover:no-underline">
                          What to expect
                        </AccordionTrigger>
                        <AccordionContent className="text-body-md text-neutral-600 leading-relaxed">
                          {currentService.approach}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="pt-4">
                    <p className="text-body-md text-neutral-600 mb-6 leading-relaxed">
                      Share context; we'll respond with a considered view.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-8 py-4 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-220 hover:shadow-elevation"
                    >
                      Schedule consultation
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="engagement-models" className="py-28 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <SectionHeader
            title="Engagement models"
            deck="Structures aligned with your objectives and timeline."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 rounded-sm border border-neutral-200"
            >
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Retainer</h3>
              <p className="text-body-md text-neutral-600 leading-relaxed">
                Ongoing advisory with dedicated senior attention for complex situations requiring sustained guidance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.22, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 rounded-sm border border-neutral-200"
            >
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Success-based</h3>
              <p className="text-body-md text-neutral-600 leading-relaxed">
                Compensation tied to transaction completion or milestones—aligning incentives with your outcome.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.22, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 rounded-sm border border-neutral-200"
            >
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Fixed-scope</h3>
              <p className="text-body-md text-neutral-600 leading-relaxed">
                Defined deliverables and timeline for specific projects—providing cost certainty.
              </p>
            </motion.div>
          </div>

          <div className="mt-8">
            <p className="text-body-sm text-neutral-500 italic">Terms discussed during initial consultation</p>
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
              Share context; we'll respond with a considered view.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-neutral-950 text-body-md font-sans font-medium rounded-sm hover:bg-neutral-100 transition-all duration-220 hover:shadow-elevation"
            >
              Schedule consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
