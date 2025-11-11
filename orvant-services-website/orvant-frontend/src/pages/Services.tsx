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
import { SEO } from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import { BreadcrumbSchema, ServiceSchema } from '../components/StructuredData'
import { ServiceIcon } from '../components/ServiceIcon'

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
      description: 'Preparation to close for buy- and sell-side mandates. We structure the process, align stakeholders, and execute discreetly.',
      approach: 'We coordinate every stage from deal preparation through closing, managing diligence, negotiating terms, and keeping stakeholders aligned. Board-ready materials at each milestone ensure informed decisions.',
      outcomes: [
        'Deal preparation and positioning',
        'Buyer/investor engagement under NDA',
        'Diligence coordination and issue resolution',
        'Term sheet and negotiation support',
        'Board-ready materials at each stage',
      ],
      situations: [
        'Sale readiness and timing',
        'Strategic acquisitions',
        'Carve-outs',
        'Board mandates',
      ],
      capabilities: [
        'Teaser and information memorandum',
        'Financial model and sensitivities',
        'Data room and diligence tracker',
        'Process letter and timeline',
      ],
      examples: [
        {
          title: 'Technology Carve-Out',
          description: 'Advised software division on separation from parent company, coordinating diligence and negotiating terms with strategic buyer.',
        },
        {
          title: 'Cross-Border Acquisition',
          description: 'Supported buyer in acquiring European manufacturing business, managing regulatory approvals and integration planning.',
        },
      ],
    },
    {
      id: 'restructuring',
      title: 'Restructuring',
      description: 'Stabilize the business, align stakeholders, and execute a credible path forward—operational and financial.',
      approach: 'We build cash and liquidity plans, map stakeholder positions, and develop turnaround plans with clear milestones. Our focus is on executable solutions that restore confidence and create breathing room.',
      outcomes: [
        'Cash and liquidity planning',
        'Options analysis and decision framework',
        'Stakeholder mapping and communications',
        'Turnaround plan with milestones',
        'Lender and investor engagement',
      ],
      situations: [
        'Liquidity pressure',
        'Covenants and maturities',
        'Performance resets',
        'Stakeholder misalignment',
      ],
      capabilities: [
        '13-week cash flow and scenario plan',
        'KPI pack and operating cadence',
        'Restructuring plan and workplan',
        'Stakeholder materials and scripts',
      ],
      examples: [
        {
          title: 'Retail Turnaround',
          description: 'Developed 13-week cash flow model and stakeholder communication plan for specialty retailer facing covenant breach.',
        },
        {
          title: 'Manufacturing Reset',
          description: 'Built operational turnaround plan with monthly milestones, restoring lender confidence and securing covenant relief.',
        },
      ],
    },
    {
      id: 'public-markets',
      title: 'Public Markets',
      description: 'Prepare to meet the market. Readiness across governance, disclosure, and investor messaging.',
      approach: 'We assess readiness gaps, build the equity story, and coordinate with underwriters and advisors. Our work ensures you enter the market with credible disclosure, strong controls, and a clear investor narrative.',
      outcomes: [
        'Readiness assessment and gap closure',
        'Equity story and investor materials',
        'Disclosure, controls, and calendar planning',
        'Underwriter/partner coordination',
        'Investor relations foundations',
      ],
      situations: [
        'IPO readiness',
        'Secondary offerings',
        'Dual-track processes',
        'Public company transitions',
      ],
      capabilities: [
        'Equity story and presentation',
        'KPI and disclosure framework',
        'Draft timetable and responsibility matrix',
        'Analyst/underwriter Q&A preparation',
      ],
      examples: [
        {
          title: 'SaaS IPO Readiness',
          description: 'Assessed governance gaps and built equity story for technology company preparing for public markets debut.',
        },
        {
          title: 'Dual-Track Process',
          description: 'Coordinated IPO preparation alongside M&A process, ensuring disclosure readiness for both paths.',
        },
      ],
    },
    {
      id: 'accounting',
      title: 'Accounting & Compliance',
      description: 'Accurate, timely reporting and well-run processes—so decisions are made on dependable numbers.',
      approach: 'We improve close and reporting processes, resolve technical accounting issues, and prepare for audits. Our work ensures your numbers are reliable, your controls are documented, and your board reporting is clear.',
      outcomes: [
        'Close and reporting improvements',
        'Policy alignment and technical memos',
        'Controls and documentation readiness',
        'Audit coordination and issue resolution',
        'Board reporting pack refinement',
      ],
      situations: [
        'Audit preparation',
        'New systems',
        'Policy alignment',
        'IFRS/GAAP bridging',
      ],
      capabilities: [
        'Accounting position papers',
        'Close calendar and playbooks',
        'Controls matrices and narratives',
        'Audit request tracker and data room',
      ],
      examples: [
        {
          title: 'Revenue Recognition Review',
          description: 'Prepared technical accounting memos and controls documentation for SaaS company transitioning to new revenue standard.',
        },
        {
          title: 'Audit Readiness',
          description: 'Built audit request tracker and data room for healthcare company preparing for first external audit.',
        },
      ],
    },
    {
      id: 'buy-sell',
      title: 'Buy/Sell Company',
      description: 'Confidential, disciplined processes to buy or sell a business—preparation, outreach, diligence, and close.',
      approach: 'We assess readiness, identify and engage buyers or targets, manage diligence, and coordinate closing. Our process is discreet, thorough, and designed to minimize disruption while maximizing outcomes.',
      outcomes: [
        'Valuation and readiness assessment',
        'Target/buyer mapping and outreach',
        'Diligence management and issue closure',
        'Negotiation and closing coordination',
        'Transition planning',
      ],
      situations: [
        'Founder succession',
        'Strategic expansion',
        'Carve-outs',
        'Management buyouts',
      ],
      capabilities: [
        'Teaser/IM or target list and profiles',
        'Valuation analysis and rationale',
        'Diligence checklist and tracker',
        'Process letters and timeline',
      ],
      examples: [
        {
          title: 'Founder Succession',
          description: 'Managed confidential sale process for family-owned distribution business, coordinating buyer outreach and diligence.',
        },
        {
          title: 'Strategic Acquisition',
          description: 'Identified and evaluated acquisition targets for industrial company seeking geographic expansion.',
        },
      ],
    },
  ]

  const currentService = services.find(s => s.id === activeService) || services[0]

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId)
    navigate(`/services#${serviceId}`, { replace: true })
  }

  return (
    <>
      <SEO
        title="Our Services"
        description="Preparation to close for M&A, restructuring, public markets, accounting & compliance, and buy/sell company services. Discreet execution and board-ready materials."
        canonical="/services"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
      ]} />
      <ServiceSchema service={{
        name: currentService.title,
        description: currentService.description,
      }} />
      <Breadcrumb items={[{ name: 'Services', path: '/services' }]} />
      <div className="bg-white">
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 border-b border-neutral-200 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #001F3F 1px, transparent 1px), linear-gradient(to bottom, #001F3F 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="max-w-container mx-auto px-6 lg:px-12 relative">
          <motion.div
            className="max-w-3xl"
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
                Advisory Services
              </span>
            </motion.div>
            <h1 className="font-display text-display-xl text-neutral-950 mb-8 leading-[1.1] tracking-tight">
              Our Services
            </h1>
            <p className="text-body-xl text-neutral-600 leading-relaxed">
              We advise at inflection points—when the stakes are high, the timeline is tight, and the outcome matters for years to come.
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
                    className={`group w-full text-left px-4 py-3 rounded-sm text-body-md font-sans transition-all duration-220 relative overflow-hidden ${
                      activeService === service.id
                        ? 'bg-navy-900 text-white font-medium shadow-sm'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950'
                    }`}
                  >
                    {activeService === service.id && (
                      <motion.div
                        layoutId="activeService"
                        className="absolute inset-0 bg-navy-900 -z-10"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                    <span className="relative z-10">{service.title}</span>
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
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-navy-900 rounded-sm flex items-center justify-center">
                      <ServiceIcon serviceId={currentService.id} className="w-8 h-8 text-gold-500" />
                    </div>
                    <div>
                      <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-1">SERVICE</p>
                      <h2 className="font-display text-display-lg text-neutral-950 leading-tight">
                        {currentService.title}
                      </h2>
                    </div>
                  </div>
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

                  {currentService.examples && currentService.examples.length > 0 && (
                    <div className="pt-6">
                      <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-4">Representative Engagements</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentService.examples.map((example, index) => (
                          <div
                            key={index}
                            className="p-5 bg-neutral-50 border border-neutral-200 rounded-sm hover:border-navy-900/20 hover:bg-white transition-all duration-220"
                          >
                            <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">
                              {example.title}
                            </h4>
                            <p className="text-body-sm text-neutral-600 leading-relaxed">
                              {example.description}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p className="text-body-xs text-neutral-500 italic mt-3">
                        Additional case studies available under NDA
                      </p>
                    </div>
                  )}

                  <div className="pt-4">
                    <p className="text-body-md text-neutral-600 mb-6 leading-relaxed">
                      Share your context and objectives. We'll suggest a pragmatic next step.
                    </p>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center px-8 py-4 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-220 hover:shadow-elevation-lg hover:scale-[1.02]"
                    >
                      Start a confidential conversation
                      <ArrowRight className="ml-2 transition-transform duration-220 group-hover:translate-x-1" size={18} />
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
            title="Engagement Models"
            deck="Flexible engagement structures designed to align with your specific objectives and timeline."
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
                Ongoing advisory services with dedicated expert attention for complex situations requiring sustained strategic guidance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.22, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 rounded-sm border border-neutral-200"
            >
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Success-Based</h3>
              <p className="text-body-md text-neutral-600 leading-relaxed">
                Performance-based compensation tied to successful transaction completion or achievement of key milestones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.22, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 rounded-sm border border-neutral-200"
            >
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Fixed-Scope</h3>
              <p className="text-body-md text-neutral-600 leading-relaxed">
                Clearly defined deliverables and timeline for specific projects, providing cost certainty and predictable outcomes.
              </p>
            </motion.div>
          </div>

          <div className="mt-8">
            <p className="text-body-sm text-neutral-500 italic">Terms discussed during initial consultation</p>
          </div>
        </div>
      </section>

      <section className="py-28 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-display-lg text-neutral-950 mb-6 leading-tight">
              Related resources
            </h2>
            <p className="text-body-lg text-neutral-600 mb-8 leading-relaxed">
              Explore insights and perspectives on navigating complex business transitions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link
                to="/insights"
                className="group p-6 bg-white border border-neutral-200 rounded-sm hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
              >
                <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-2 group-hover:text-navy-900 transition-colors duration-220">
                  Insights & Perspectives
                </h3>
                <p className="text-body-md text-neutral-600 leading-relaxed">
                  Practical guidance drawn from mandates we've worked on
                </p>
              </Link>
              <Link
                to="/tombstones"
                className="group p-6 bg-white border border-neutral-200 rounded-sm hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
              >
                <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-2 group-hover:text-navy-900 transition-colors duration-220">
                  Track Record
                </h3>
                <p className="text-body-md text-neutral-600 leading-relaxed">
                  Representative transactions across M&A, restructuring, and public markets
                </p>
              </Link>
            </div>
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
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-neutral-950 text-body-md font-sans font-medium rounded-sm hover:bg-neutral-100 transition-all duration-220 hover:shadow-elevation"
            >
              Start a confidential conversation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
