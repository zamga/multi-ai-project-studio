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
import { BreadcrumbSchema, ServiceSchema } from '../components/StructuredData'

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
      description: 'Strategic guidance through complex mergers, acquisitions, and corporate restructuring with proven expertise.',
      approach: 'We provide comprehensive support from initial valuation through deal closing, ensuring smooth execution and optimal outcomes. Our experienced team coordinates all aspects of the transaction process.',
      outcomes: [
        'Optimal transaction value',
        'Smooth execution process',
        'Strategic alignment achieved',
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
      description: 'Expert guidance through operational and financial restructuring to restore stability and drive growth.',
      approach: 'We assess your current situation, develop comprehensive restructuring plans, and work with stakeholders to implement solutions that position your business for long-term success.',
      outcomes: [
        'Improved financial stability',
        'Operational efficiency gains',
        'Sustainable growth path',
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
      description: 'Comprehensive support for companies seeking to access public capital markets and achieve successful listings.',
      approach: 'We guide you through IPO preparation, regulatory compliance, and investor relations, ensuring your company is fully prepared for the public markets with strong governance and reporting systems.',
      outcomes: [
        'Successful market entry',
        'Strong investor relations',
        'Regulatory compliance',
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
      description: 'Comprehensive accounting, tax planning, and financial reporting services that ensure compliance and optimize performance.',
      approach: 'Our team provides expert accounting services, tax planning strategies, and ensures your financial reporting meets all regulatory requirements while optimizing your financial performance.',
      outcomes: [
        'Accurate financial reporting',
        'Tax optimization achieved',
        'Full regulatory compliance',
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
      description: 'Professional guidance for buying or selling businesses with expert valuations and confidential transaction management.',
      approach: 'We handle the entire process from business valuation and buyer identification to negotiation and closing, ensuring confidential and professional transaction management throughout.',
      outcomes: [
        'Optimal business valuation',
        'Qualified buyer matches',
        'Seamless transaction close',
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
    <>
      <SEO
        title="Our Services"
        description="Comprehensive financial services including M&A advisory, restructuring, public markets, accounting & compliance, and buy/sell company services. Expert guidance tailored to your business needs."
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
              Our Services
            </h1>
            <p className="text-body-lg text-neutral-600 leading-relaxed">
              Comprehensive financial services tailored to your business needs. From M&A advisory to restructuring and capital raising, we deliver exceptional results with personalized attention.
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
                      Ready to discuss your needs? Contact us to schedule a consultation and explore how we can help.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-8 py-4 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-220 hover:shadow-elevation"
                    >
                      Get Started
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

      <section className="py-28 bg-neutral-950 text-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-lg mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-body-lg text-neutral-400 mb-10 leading-relaxed">
              Contact us today to discuss your objectives and explore how our services can help transform your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-neutral-950 text-body-md font-sans font-medium rounded-sm hover:bg-neutral-100 transition-all duration-220 hover:shadow-elevation"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
