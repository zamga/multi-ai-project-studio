import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function Services() {
  const [activeService, setActiveService] = useState('ma-advisory')

  const services = [
    {
      id: 'ma-advisory',
      title: 'M&A Advisory',
      description: 'Strategic guidance through acquisitions, divestitures, and mergers. We structure deals, negotiate terms, and manage execution from LOI through close.',
      approach: 'We begin with a comprehensive assessment of strategic objectives and market positioning. Our team conducts rigorous valuation analysis, identifies optimal counterparties, and structures transactions to maximize value while managing risk. Throughout the process, we coordinate due diligence, negotiate terms, and oversee execution to ensure successful outcomes.',
      outcomes: [
        'Stronger negotiating position through rigorous preparation',
        'Board alignment on strategic rationale and execution plan',
        'Clean diligence files that accelerate closing timelines',
      ],
      capabilities: [
        'Buy-side and sell-side representation',
        'Valuation and deal structuring',
        'Due diligence coordination',
        'Negotiation and execution management',
      ],
    },
    {
      id: 'restructuring',
      title: 'Restructuring',
      description: 'Operational and financial restructuring for companies in transition. We stabilize operations, optimize capital structure, and position for growth.',
      approach: 'Our restructuring engagements begin with rapid assessment of operational and financial challenges. We develop actionable turnaround plans, negotiate with stakeholders, and implement operational improvements. Our focus is on preserving value while creating a sustainable path forward.',
      outcomes: [
        'Stabilized operations with sustainable cost structure',
        'Stakeholder alignment and creditor confidence restored',
        'Clear path to profitability and growth',
      ],
      capabilities: [
        'Operational turnaround planning',
        'Debt restructuring and refinancing',
        'Stakeholder negotiation',
        'Cash flow optimization',
      ],
    },
    {
      id: 'public-markets',
      title: 'Public Markets',
      description: 'Capital raising and IPO advisory for companies accessing public markets. We prepare companies for listing and manage the offering process.',
      approach: 'We assess IPO readiness across financial reporting, governance, and operational metrics. Our team prepares offering materials, coordinates with underwriters, and manages the roadshow process. Post-IPO, we provide ongoing support for investor relations and regulatory compliance.',
      outcomes: [
        'Market-ready narrative that resonates with institutional investors',
        'Smooth execution from roadshow through pricing',
        'Post-IPO stability and investor confidence',
      ],
      capabilities: [
        'IPO readiness assessment',
        'Roadshow preparation and execution',
        'Underwriter coordination',
        'Post-IPO strategic support',
      ],
    },
    {
      id: 'accounting',
      title: 'Accounting & Compliance',
      description: 'Financial reporting, audit preparation, and regulatory compliance. We ensure accuracy and transparency in financial operations.',
      approach: 'We establish robust financial reporting processes aligned with GAAP and IFRS standards. Our team coordinates audit preparation, implements internal controls, and ensures regulatory compliance. We provide ongoing support for complex accounting issues and technical guidance.',
      outcomes: [
        'Clean audit opinions with no material weaknesses',
        'Efficient close processes and timely reporting',
        'Regulatory compliance and stakeholder confidence',
      ],
      capabilities: [
        'GAAP and IFRS reporting',
        'Audit coordination and support',
        'Internal controls assessment',
        'Technical accounting guidance',
      ],
    },
    {
      id: 'buy-sell',
      title: 'Buy/Sell Company',
      description: 'End-to-end support for business acquisitions and divestitures with optimal terms and outcomes.',
      approach: 'We manage the complete transaction lifecycle from valuation through closing. Our team identifies qualified buyers or targets, prepares marketing materials, conducts negotiations, and coordinates legal and financial due diligence. We ensure smooth transitions and optimal value realization.',
      outcomes: [
        'Optimal valuation through competitive process',
        'Qualified buyers with strategic fit and financing certainty',
        'Smooth transition and value preservation',
      ],
      capabilities: [
        'Business valuation and pricing',
        'Buyer/target identification',
        'Marketing and positioning',
        'Transaction closing support',
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
              We advise on transactions, restructurings, and capital raises where precision and discretion matter. Our work spans M&A advisory, operational restructuring, buy-side and sell-side mandates, and public market access.
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
                <h2 className="font-display text-display-lg text-neutral-950 mb-6">
                  {currentService.title}
                </h2>
                <p className="text-body-lg text-neutral-600 mb-12">
                  {currentService.description}
                </p>

                <div className="space-y-12">
                  <div>
                    <h3 className="font-display text-display-md text-neutral-950 mb-4">Our approach</h3>
                    <p className="text-body-md text-neutral-600 leading-relaxed">
                      {currentService.approach}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-display-md text-neutral-950 mb-4">Typical outcomes</h3>
                    <ul className="space-y-3">
                      {currentService.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-accent-600 mr-3">•</span>
                          <span className="text-body-md text-neutral-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-display-md text-neutral-950 mb-4">Capabilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentService.capabilities.map((capability, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 bg-neutral-50 rounded-sm border border-neutral-200"
                        >
                          <span className="text-body-sm text-neutral-950">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-neutral-200">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-8 py-4 bg-accent-600 text-white text-body-md font-sans font-medium rounded-sm hover:bg-accent-500 transition-all duration-150 hover:shadow-elevation"
                    >
                      Discuss this service
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
