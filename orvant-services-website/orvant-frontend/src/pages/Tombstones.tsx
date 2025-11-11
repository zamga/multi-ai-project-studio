import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { SEO } from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'

export function Tombstones() {
  const transactions = [
    {
      type: 'M&A Advisory',
      title: 'Sell-side advisory',
      sector: 'Industrials',
      description: 'Cross-border strategic acquisition',
      confidential: true,
    },
    {
      type: 'Restructuring',
      title: 'Operational turnaround',
      sector: 'Technology',
      description: 'Liquidity stabilization and stakeholder alignment',
      confidential: true,
    },
    {
      type: 'Public Markets',
      title: 'IPO readiness advisory',
      sector: 'Healthcare',
      description: 'Governance and disclosure preparation',
      confidential: true,
    },
    {
      type: 'M&A Advisory',
      title: 'Buy-side advisory',
      sector: 'Financial Services',
      description: 'Strategic acquisition and integration planning',
      confidential: true,
    },
    {
      type: 'Restructuring',
      title: 'Financial restructuring',
      sector: 'Industrials',
      description: 'Covenant relief and capital structure optimization',
      confidential: true,
    },
    {
      type: 'M&A Advisory',
      title: 'Carve-out advisory',
      sector: 'Technology',
      description: 'Business unit separation and sale process',
      confidential: true,
    },
  ]

  return (
    <>
      <SEO
        title="Selected Transactions"
        description="Representative transactions and mandates across M&A, restructuring, and public markets. Detailed case studies available under NDA."
        canonical="/tombstones"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Selected Transactions', url: '/tombstones' },
      ]} />

      <div className="bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} />
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="max-w-container mx-auto px-6 lg:px-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-body-sm font-medium text-white">
                  Track Record
                </span>
              </motion.div>
              <h1 className="font-display text-display-xl text-white mb-8 leading-[1.1] tracking-tight">
                Selected Transactions
              </h1>
              <p className="text-body-xl text-navy-100 leading-relaxed">
                Representative mandates across M&A, restructuring, and public markets. Detailed case studies and references available under NDA.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-neutral-50">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transactions.map((transaction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white p-6 rounded-sm border-2 border-neutral-200 hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-body-xs uppercase tracking-widest text-gold-600">
                      {transaction.type}
                    </span>
                    {transaction.confidential && (
                      <Lock size={14} className="text-neutral-400" />
                    )}
                  </div>

                  <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-2 group-hover:text-navy-900 transition-colors duration-220">
                    {transaction.title}
                  </h3>

                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-neutral-100 text-body-xs text-neutral-700 rounded-full">
                      {transaction.sector}
                    </span>
                  </div>

                  <p className="text-body-sm text-neutral-600 leading-relaxed">
                    {transaction.description}
                  </p>

                  {transaction.confidential && (
                    <p className="text-body-xs text-neutral-500 italic mt-4 pt-4 border-t border-neutral-200">
                      Details available under NDA
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-neutral-200">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="bg-neutral-50 p-8 rounded-sm border border-neutral-200">
                <h2 className="font-sans font-semibold text-body-lg text-neutral-950 mb-4">
                  References and case studies
                </h2>
                <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
                  We maintain strict confidentiality on all mandates. Detailed case studies, client references, and transaction specifics are available to qualified parties under NDA.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-navy-900 text-white text-body-sm font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-220 hover:shadow-elevation"
                >
                  Request detailed information
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
