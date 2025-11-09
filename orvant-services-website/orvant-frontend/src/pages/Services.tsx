import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Services() {
  const [activeService, setActiveService] = useState('ma-advisory')

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
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left px-4 py-3 rounded-sm text-body-md font-sans transition-all duration-150 ${
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
                          <span className="text-accent-600 mr-3">•</span>
                          <span className="text-body-md text-neutral-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-sans font-medium text-body-md text-neutral-950 mb-4">Situations we handle</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentService.situations.map((situation, index) => (
                        <Badge key={index} variant="secondary" className="text-body-sm px-4 py-2 bg-neutral-100 text-neutral-700 border-0">
                          {situation}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-sans font-medium text-body-md text-neutral-950 mb-4">Capabilities</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentService.capabilities.map((capability, index) => (
                        <Badge key={index} variant="outline" className="text-body-sm px-4 py-2 border-neutral-300 text-neutral-700">
                          {capability}
                        </Badge>
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
                      className="inline-flex items-center px-8 py-4 bg-accent-600 text-white text-body-md font-sans font-medium rounded-sm hover:bg-accent-500 transition-all duration-150 hover:shadow-elevation"
                    >
                      Discuss this capability
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
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
              className="inline-flex items-center px-8 py-4 bg-accent-600 text-white text-body-md font-sans font-medium rounded-sm hover:bg-accent-500 transition-all duration-150 hover:shadow-elevation"
            >
              Get in touch
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
