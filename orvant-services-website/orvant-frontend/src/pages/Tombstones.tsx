import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Filter } from 'lucide-react'
import { SEO } from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import { BreadcrumbSchema } from '../components/StructuredData'

type FilterType = 'all' | 'M&A' | 'Restructuring' | 'Public Markets'
type SectorType = 'all' | 'Industrials' | 'Technology' | 'Healthcare' | 'Financial Services'

export function Tombstones() {
  const [typeFilter, setTypeFilter] = useState<FilterType>('all')
  const [sectorFilter, setSectorFilter] = useState<SectorType>('all')

  const transactions = [
    {
      type: 'M&A Advisory',
      title: 'Sell-side advisory',
      sector: 'Industrials',
      description: 'Cross-border strategic acquisition',
      outcome: 'Clean diligence process, aligned stakeholders, successful close',
      confidential: true,
      monogram: 'MA',
    },
    {
      type: 'M&A Advisory',
      title: 'Buy-side advisory',
      sector: 'Technology',
      description: 'Platform consolidation',
      outcome: 'Strategic fit validated, integration roadmap established',
      confidential: true,
      monogram: 'MA',
    },
    {
      type: 'Restructuring',
      title: 'Operational restructuring',
      sector: 'Industrials',
      description: 'Multi-stakeholder turnaround',
      outcome: 'Liquidity restored, stakeholders aligned, operations stabilized with clear milestones',
      confidential: true,
      monogram: 'RS',
    },
    {
      type: 'Restructuring',
      title: 'Balance sheet optimization',
      sector: 'Healthcare',
      description: 'Covenant reset and refinancing',
      outcome: 'Extended runway, improved terms, credible path forward established',
      confidential: true,
      monogram: 'RS',
    },
    {
      type: 'Public Markets',
      title: 'IPO advisory',
      sector: 'Financial Services',
      description: 'Public listing preparation',
      outcome: 'Readiness gaps closed, strong controls established, successful market debut',
      confidential: true,
      monogram: 'PM',
    },
    {
      type: 'Public Markets',
      title: 'Secondary offering',
      sector: 'Technology',
      description: 'Growth capital raise',
      outcome: 'Compelling equity story, strong investor interest, oversubscribed offering',
      confidential: true,
      monogram: 'PM',
    },
    {
      type: 'M&A Advisory',
      title: 'Carve-out transaction',
      sector: 'Healthcare',
      description: 'Division divestiture',
      outcome: 'Clean separation achieved, transition services minimized, value maximized',
      confidential: true,
      monogram: 'MA',
    },
    {
      type: 'Restructuring',
      title: 'Distressed M&A',
      sector: 'Financial Services',
      description: 'Asset sale under pressure',
      outcome: 'Creditor alignment achieved, orderly process maintained, acceptable recovery',
      confidential: true,
      monogram: 'RS',
    },
  ]

  const filteredTransactions = transactions.filter(t => {
    const typeMatch = typeFilter === 'all' || t.type === typeFilter
    const sectorMatch = sectorFilter === 'all' || t.sector === sectorFilter
    return typeMatch && sectorMatch
  })

  const typeFilters: FilterType[] = ['all', 'M&A', 'Restructuring', 'Public Markets']
  const sectorFilters: SectorType[] = ['all', 'Industrials', 'Technology', 'Healthcare', 'Financial Services']

  return (
    <>
      <SEO
        title="Track Record"
        description="Representative transactions across M&A advisory, restructuring, and public markets. Detailed case studies available under NDA."
        canonical="/tombstones"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Track Record', url: '/tombstones' },
      ]} />
      <Breadcrumb items={[{ name: 'Track Record', path: '/tombstones' }]} />

      <div className="bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
          <div className="grain-overlay" />
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} />
          </div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gold-500/10 rounded-full blur-3xl" />
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
                <span className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-body-sm font-medium text-white backdrop-blur-sm">
                  Track Record
                </span>
              </motion.div>
              <h1 className="font-display text-display-xl text-white mb-8 leading-[1.1] tracking-tight">
                Representative Transactions
              </h1>
              <p className="text-body-xl text-white/90 leading-relaxed">
                Selected engagements across M&A, restructuring, and public markets. Detailed case studies and references available under NDA.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-neutral-50 border-b border-neutral-200 sticky top-16 z-20 backdrop-blur-sm bg-neutral-50/95">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Filter size={16} className="text-neutral-500" />
                  <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500">Type</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {typeFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setTypeFilter(filter)}
                      className={`px-4 py-2 text-body-sm font-medium rounded-sm transition-all duration-200 ${
                        typeFilter === filter
                          ? 'bg-navy-900 text-white shadow-md'
                          : 'bg-white text-neutral-700 border border-neutral-200 hover:border-navy-900 hover:bg-navy-900/5'
                      }`}
                    >
                      {filter === 'all' ? 'All Types' : filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Filter size={16} className="text-neutral-500" />
                  <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500">Sector</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sectorFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSectorFilter(filter)}
                      className={`px-4 py-2 text-body-sm font-medium rounded-sm transition-all duration-200 ${
                        sectorFilter === filter
                          ? 'bg-navy-900 text-white shadow-md'
                          : 'bg-white text-neutral-700 border border-neutral-200 hover:border-navy-900 hover:bg-navy-900/5'
                      }`}
                    >
                      {filter === 'all' ? 'All Sectors' : filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 text-body-sm text-neutral-600">
              Showing {filteredTransactions.length} of {transactions.length} transactions
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTransactions.map((transaction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative bg-white border border-neutral-200 rounded-sm overflow-hidden hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220 card-premium"
                >
                  {transaction.confidential && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center gap-1 px-3 py-1 bg-navy-900/90 backdrop-blur-sm text-white text-body-xs font-medium rounded-sm">
                        <Lock size={12} />
                        Confidential
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-navy-900 rounded-sm flex items-center justify-center flex-shrink-0">
                        <span className="font-display text-xl text-gold-500 font-semibold">
                          {transaction.monogram}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2 py-1 bg-gold-500/10 text-gold-700 text-body-xs font-medium rounded-sm mb-2">
                          {transaction.sector}
                        </span>
                        <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-1 group-hover:text-navy-900 transition-colors duration-220">
                          {transaction.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-body-sm text-neutral-600 mb-3 leading-relaxed">
                      {transaction.description}
                    </p>

                    <div className="pt-3 border-t border-neutral-200">
                      <p className="text-body-xs text-neutral-500 uppercase tracking-widest mb-1">Outcome</p>
                      <p className="text-body-sm text-neutral-700 font-medium">
                        {transaction.outcome}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <span className="inline-block px-2 py-1 bg-neutral-100 text-neutral-600 text-body-xs rounded-sm">
                        {transaction.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredTransactions.length === 0 && (
              <div className="text-center py-16">
                <p className="text-body-lg text-neutral-500">
                  No transactions match the selected filters
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-24 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-sm border border-neutral-200 shadow-md">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-navy-900/5 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Lock size={24} className="text-navy-900" />
                  </div>
                  <div>
                    <h2 className="font-sans font-semibold text-body-lg text-neutral-950 mb-2">
                      Detailed case studies available under NDA
                    </h2>
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      Full transaction details, including deal structures, stakeholder dynamics, and outcomes, are available to qualified parties under confidentiality agreement.
                    </p>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-navy-900 text-white text-body-sm font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-220 hover:shadow-elevation"
                >
                  Request case studies
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
