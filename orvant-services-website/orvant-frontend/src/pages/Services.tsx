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
      description: 'Strategic guidance through acquisitions, divestitures, and mergers from LOI through close.',
      approach: 'We begin with strategic assessment and market positioning. Our team conducts valuation analysis, identifies counterparties, and structures transactions to maximize value while managing risk. We coordinate due diligence, negotiate terms, and oversee execution.',
      outcomes: [
        'Stronger negotiating position',
        'Board alignment on execution',
        'Clean diligence files',
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
      description: 'Operational and financial restructuring for companies in transition and special situations.',
      approach: 'Our engagements begin with rapid assessment of operational and financial challenges. We develop turnaround plans, negotiate with stakeholders, and implement improvements focused on preserving value and creating a sustainable path forward.',
      outcomes: [
        'Stabilized operations',
        'Stakeholder alignment',
        'Path to profitability',
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
      description: 'Capital raising and IPO advisory for companies accessing public markets and institutional capital.',
      approach: 'We assess IPO readiness across financial reporting, governance, and operations. Our team prepares offering materials, coordinates with underwriters, and manages the roadshow. Post-IPO, we provide ongoing support for investor relations and compliance.',
      outcomes: [
        'Market-ready narrative',
        'Smooth execution',
        'Post-IPO stability',
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
      description: 'Financial reporting, audit preparation, and regulatory compliance for accuracy and transparency.',
      approach: 'We establish financial reporting processes aligned with GAAP and IFRS standards. Our team coordinates audit preparation, implements internal controls, and ensures regulatory compliance with ongoing support for complex accounting issues.',
      outcomes: [
        'Clean audit opinions',
        'Efficient close processes',
        'Regulatory compliance',
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
      description: 'End-to-end support for business acquisitions and divestitures with optimal terms.',
      approach: 'We manage the complete transaction lifecycle from valuation through closing. Our team identifies qualified buyers or targets, prepares marketing materials, conducts negotiations, and coordinates due diligence for smooth transitions.',
      outcomes: [
        'Optimal valuation',
        'Qualified buyers',
        'Smooth transition',
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
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-display-xl text-neutral-950 mb-6">
              Our capabilities
            </h1>
            <p className="text-body-lg text-neutral-600">
              We advise on transactions, restructurings, and capital raises where precision and discretion matter.
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
                transition={{ duration: 0.4 }}
              >
                <h2 className="font-display text-display-lg text-neutral-950 mb-4">
                  {currentService.title}
                </h2>
                <p className="text-body-lg text-neutral-600 mb-12">
                  {currentService.description}
                </p>

                <div className="space-y-10">
                  <div>
                    <h3 className="font-sans font-medium text-body-md text-neutral-950 mb-4">What we drive</h3>
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
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-8 py-4 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-150 hover:shadow-elevation"
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

      <section id="engagement-models" className="py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="font-display text-display-lg text-neutral-950 mb-4">Engagement models</h2>
            <p className="text-body-md text-neutral-600 max-w-2xl">
              We structure engagements to align with your objectives and timeline. Each model is tailored to the specific situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-sm border border-neutral-200"
            >
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Retainer</h3>
              <p className="text-body-md text-neutral-600 leading-relaxed">
                Ongoing advisory relationship with dedicated senior attention. Ideal for complex situations requiring sustained guidance through multiple phases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-8 rounded-sm border border-neutral-200"
            >
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Success-based</h3>
              <p className="text-body-md text-neutral-600 leading-relaxed">
                Compensation tied to transaction completion or specific milestones. Aligns our incentives directly with your outcome.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-8 rounded-sm border border-neutral-200"
            >
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Fixed-scope</h3>
              <p className="text-body-md text-neutral-600 leading-relaxed">
                Defined deliverables and timeline for specific projects. Provides cost certainty for discrete advisory needs.
              </p>
            </motion.div>
          </div>

          <div className="mt-8">
            <p className="text-body-sm text-neutral-500 italic">Terms discussed during initial consultation</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-lg mb-6">
              Ready to begin?
            </h2>
            <p className="text-body-lg text-neutral-400 mb-10">
              Contact us to discuss your situation and explore how we can support your objectives.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-neutral-950 text-body-md font-sans font-medium rounded-sm hover:bg-neutral-100 transition-all duration-150 hover:shadow-elevation"
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
