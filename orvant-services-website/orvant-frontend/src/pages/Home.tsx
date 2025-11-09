import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Home() {
  const principles = [
    {
      title: 'Discretion first',
      description: 'Every engagement is conducted with complete confidentiality and professional discretion.',
    },
    {
      title: 'Senior attention',
      description: 'Partners lead every mandate from initial assessment through execution and close.',
    },
    {
      title: 'Independent advice',
      description: 'No conflicts, no product sales. Our only incentive is your successful outcome.',
    },
    {
      title: 'Execution certainty',
      description: 'We structure transactions and processes to maximize probability of completion.',
    },
  ]

  const transactions = [
    { 
      description: 'Sell-side advisory for mid-market technology company',
      type: 'Cross-border strategic acquisition',
    },
    { 
      description: 'Operational restructuring for global manufacturing business',
      type: 'Balance sheet optimization and stakeholder alignment',
    },
    { 
      description: 'IPO advisory for financial services platform',
      type: 'Public listing and capital raise',
    },
    { 
      description: 'Buy-side advisory for international retail group',
      type: 'Strategic acquisition and integration planning',
    },
  ]

  const insights = [
    {
      title: 'Navigating Market Volatility in M&A',
      category: 'M&A Advisory',
    },
    {
      title: 'Capital Structure Optimization for Growth',
      category: 'Public Markets',
    },
    {
      title: 'Operational Restructuring Best Practices',
      category: 'Restructuring',
    },
  ]

  const leadership = [
    {
      name: 'Michael Chen',
      title: 'Managing Partner, M&A',
      background: 'Former Goldman Sachs Managing Director specializing in M&A advisory',
    },
    {
      name: 'Sarah Williams',
      title: 'Partner, Restructuring',
      background: 'Ex-McKinsey Principal specialized in operational turnarounds',
    },
    {
      name: 'David Rodriguez',
      title: 'Partner, Capital Markets',
      background: 'Former Morgan Stanley Vice President in public offerings',
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
              M&A, restructuring, and public markets advisory for growth and special situations. We deliver measurable outcomes for companies navigating critical inflection points.
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
          <div className="mb-16">
            <h2 className="font-display text-display-lg text-neutral-950 mb-4">What we do</h2>
            <p className="text-body-lg text-neutral-600 max-w-3xl">
              We advise on transactions, restructurings, and capital raises where precision and discretion matter. Our work spans M&A advisory, operational restructuring, buy-side and sell-side mandates, and public market access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-display text-display-md text-neutral-950 mb-4">M&A Advisory</h3>
              <p className="text-body-md text-neutral-600 mb-4">
                Strategic guidance through acquisitions, divestitures, and mergers. We structure deals, negotiate terms, and manage execution from LOI through close.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-600">
                <li>• Buy-side and sell-side representation</li>
                <li>• Valuation and deal structuring</li>
                <li>• Due diligence coordination</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-display text-display-md text-neutral-950 mb-4">Restructuring</h3>
              <p className="text-body-md text-neutral-600 mb-4">
                Operational and financial restructuring for companies in transition. We stabilize operations, optimize capital structure, and position for growth.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-600">
                <li>• Operational turnaround planning</li>
                <li>• Debt restructuring and refinancing</li>
                <li>• Stakeholder negotiation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="font-display text-display-md text-neutral-950 mb-4">Public Markets</h3>
              <p className="text-body-md text-neutral-600 mb-4">
                Capital raising and IPO advisory for companies accessing public markets. We prepare companies for listing and manage the offering process.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-600">
                <li>• IPO readiness assessment</li>
                <li>• Roadshow preparation and execution</li>
                <li>• Post-IPO strategic support</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="font-display text-display-md text-neutral-950 mb-4">Accounting & Compliance</h3>
              <p className="text-body-md text-neutral-600 mb-4">
                Financial reporting, audit preparation, and regulatory compliance. We ensure accuracy and transparency in financial operations.
              </p>
              <ul className="space-y-2 text-body-sm text-neutral-600">
                <li>• GAAP and IFRS reporting</li>
                <li>• Audit coordination and support</li>
                <li>• Internal controls assessment</li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-body-md text-accent-600 hover:text-accent-500 font-medium transition-colors duration-150"
            >
              View all services
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="font-display text-display-lg text-neutral-950 mb-4">Representative transactions</h2>
            <p className="text-body-md text-neutral-600">
              Selected engagements demonstrating our transaction experience across sectors and deal types.
            </p>
          </div>

          <div className="space-y-6">
            {transactions.map((transaction, index) => (
              <motion.div
                key={index}
                className="py-6 border-b border-neutral-200 last:border-0"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="font-sans font-medium text-body-lg text-neutral-950 mb-2">
                  {transaction.description}
                </h3>
                <p className="text-body-sm text-neutral-600">{transaction.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="font-display text-display-lg text-neutral-950 mb-4">Insights</h2>
            <p className="text-body-md text-neutral-600">
              Perspectives on market dynamics, transaction trends, and strategic considerations.
            </p>
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
                <div className="mb-4">
                  <span className="text-body-sm text-accent-600 font-medium">{insight.category}</span>
                </div>
                <h3 className="font-display text-display-md text-neutral-950 mb-3 group-hover:text-accent-600 transition-colors duration-150">
                  {insight.title}
                </h3>
                <div className="inline-flex items-center text-body-sm text-neutral-600 group-hover:text-accent-600 transition-colors duration-150">
                  Read more
                  <ArrowRight className="ml-2" size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="font-display text-display-lg text-neutral-950 mb-4">Leadership</h2>
            <p className="text-body-md text-neutral-600">
              Our partners bring decades of experience from leading advisory firms and investment banks.
            </p>
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
                <div className="mb-4">
                  <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-body-sm text-neutral-600">{leader.title}</p>
                </div>
                <p className="text-body-sm text-neutral-600 leading-relaxed">
                  {leader.background}
                </p>
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
              We approach each engagement with discretion and focus on measurable outcomes. Contact us to explore how we can support your objectives.
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
