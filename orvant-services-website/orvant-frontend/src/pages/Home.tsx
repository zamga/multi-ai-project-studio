import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

export function Home() {
  const principles = [
    {
      title: 'Discretion first',
      description: 'Complete confidentiality in every engagement.',
    },
    {
      title: 'Senior attention',
      description: 'Partners lead from assessment through close.',
    },
    {
      title: 'Independent advice',
      description: 'No conflicts. Your outcome is our only incentive.',
    },
    {
      title: 'Execution certainty',
      description: 'Structured for maximum completion probability.',
    },
  ]

  const situations = [
    'Sell-side mandates',
    'Carve-outs',
    'Cross-border M&A',
    'Liquidity for founders',
    'Special situations',
    'Capital structure resets',
  ]

  const sectors = [
    'Industrials',
    'Technology',
    'Consumer',
    'Healthcare',
    'Financial Services',
    'Energy & Infrastructure',
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

  const leadership = [
    {
      name: 'Michael Chen',
      title: 'Managing Partner, M&A',
      background: 'Former Goldman Sachs—M&A',
    },
    {
      name: 'Sarah Williams',
      title: 'Partner, Restructuring',
      background: 'Ex-McKinsey—Operational turnarounds',
    },
    {
      name: 'David Rodriguez',
      title: 'Partner, Capital Markets',
      background: 'Former Morgan Stanley—Public offerings',
    },
  ]

  return (
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
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-display-xl text-neutral-950 mb-6">
              Advisory and capital for complex transitions
            </h1>
            <p className="text-body-lg text-neutral-600 mb-10 max-w-2xl">
              M&A, restructuring, and public markets advisory for growth and special situations. We deliver decisive outcomes for companies navigating critical inflection points.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-600 text-white text-body-md font-sans font-medium rounded-sm hover:bg-accent-500 transition-all duration-150 hover:shadow-elevation"
              >
                Discuss your situation
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-950 text-body-md font-sans font-medium rounded-sm hover:bg-neutral-50 transition-all duration-150"
              >
                Our capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="font-display text-display-md text-neutral-950 mb-3">Why clients choose us</h2>
            <p className="text-body-sm text-neutral-600">
              Detailed case studies and references available under NDA.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-2">
                  {principle.title}
                </h3>
                <p className="text-body-sm text-neutral-600 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="font-display text-display-lg text-neutral-950 mb-8">What we do</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-sans font-medium text-body-md text-neutral-950 mb-4">Situations we specialize in</h3>
                <div className="flex flex-wrap gap-2">
                  {situations.map((situation, index) => (
                    <Badge key={index} variant="secondary" className="text-body-sm px-4 py-2 bg-neutral-100 text-neutral-700 border-0 hover:bg-neutral-200">
                      {situation}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-sans font-medium text-body-md text-neutral-950 mb-4">Sectors served</h3>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((sector, index) => (
                    <Badge key={index} variant="secondary" className="text-body-sm px-4 py-2 bg-neutral-100 text-neutral-700 border-0 hover:bg-neutral-200">
                      {sector}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-body-md text-accent-600 hover:text-accent-500 font-medium transition-colors duration-150"
            >
              View all capabilities
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-display text-display-md text-neutral-950 mb-4">
              "We don't publish transaction values. Discretion is core to our practice."
            </blockquote>
            <p className="text-body-sm text-neutral-600">
              Detailed case studies and references available under NDA.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="font-display text-display-lg text-neutral-950 mb-4">Selected mandates</h2>
            <p className="text-body-md text-neutral-600">
              Representative engagements across sectors and deal types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mandates.map((mandate, index) => (
              <motion.div
                key={index}
                className="p-6 border border-neutral-200 rounded-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="font-sans font-medium text-body-lg text-neutral-950 mb-2">
                  {mandate.title}
                </h3>
                <p className="text-body-sm text-neutral-600">{mandate.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="font-display text-display-lg text-neutral-950 mb-4">Selected insights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mb-3">
                  <span className="text-body-sm text-accent-600 font-medium">{insight.category}</span>
                </div>
                <h3 className="font-sans font-medium text-body-lg text-neutral-950 group-hover:text-accent-600 transition-colors duration-150">
                  {insight.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="font-display text-display-lg text-neutral-950 mb-4">Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mb-3">
                  <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-body-sm text-neutral-600 mb-2">{leader.title}</p>
                  <p className="text-body-sm text-neutral-600">
                    {leader.background}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-950 text-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-lg mb-6">
              Discuss your situation
            </h2>
            <p className="text-body-lg text-neutral-400 mb-10">
              We approach each engagement with discretion and focus on decisive outcomes. Contact us to explore how we can support your objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-600 text-white text-body-md font-sans font-medium rounded-sm hover:bg-accent-500 transition-all duration-150 hover:shadow-elevation"
              >
                Get in touch
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-700 text-white text-body-md font-sans font-medium rounded-sm hover:bg-neutral-900 transition-all duration-150"
              >
                Request case studies (NDA)
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
