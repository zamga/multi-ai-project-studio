import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'
import { SEO } from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'

export function Downloads() {
  const documents = [
    {
      title: 'Firm Overview',
      description: 'Comprehensive overview of our capabilities, approach, and track record across M&A, restructuring, and public markets advisory.',
      type: 'PDF',
      size: 'Available upon request',
      placeholder: true,
    },
    {
      title: 'Capabilities Deck',
      description: 'Detailed presentation of our service offerings, engagement models, and representative transactions.',
      type: 'PDF',
      size: 'Available upon request',
      placeholder: true,
    },
    {
      title: 'Industry Insights Report',
      description: 'Quarterly analysis of market trends, transaction activity, and strategic considerations for business owners and boards.',
      type: 'PDF',
      size: 'Available upon request',
      placeholder: true,
    },
  ]

  return (
    <>
      <SEO
        title="Downloads"
        description="Download firm overview, capabilities deck, and industry insights from Orvantt Services. Comprehensive materials on M&A, restructuring, and public markets advisory."
        canonical="/downloads"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Downloads', url: '/downloads' },
      ]} />

      <div className="bg-white">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
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
                <span className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-body-sm font-medium text-white">
                  Downloads
                </span>
              </motion.div>
              <h1 className="font-display text-display-xl text-white mb-8 leading-[1.1] tracking-tight">
                Firm Materials
              </h1>
              <p className="text-body-xl text-navy-100 leading-relaxed">
                Comprehensive materials on our capabilities, approach, and insights. Detailed documents available to qualified parties.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-neutral-50">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white p-8 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-navy-900/5 rounded-sm flex items-center justify-center">
                      <FileText size={24} className="text-navy-900" />
                    </div>
                    <span className="text-body-xs uppercase tracking-widest text-gold-600 font-medium">
                      {doc.type}
                    </span>
                  </div>

                  <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3 group-hover:text-navy-900 transition-colors duration-220">
                    {doc.title}
                  </h3>

                  <p className="text-body-md text-neutral-600 leading-relaxed mb-6">
                    {doc.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                    <span className="text-body-sm text-neutral-500">{doc.size}</span>
                    {doc.placeholder ? (
                      <button
                        disabled
                        className="inline-flex items-center text-body-sm text-neutral-400 cursor-not-allowed"
                      >
                        <Download size={16} className="mr-1" />
                        Request access
                      </button>
                    ) : (
                      <button className="inline-flex items-center text-body-sm text-navy-900 font-medium hover:text-navy-800 transition-colors duration-220">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    )}
                  </div>
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
                  Request detailed materials
                </h2>
                <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
                  Comprehensive firm materials, detailed case studies, and proprietary insights are available to qualified parties. Contact us to request access.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-navy-900 text-white text-body-sm font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-220 hover:shadow-elevation"
                >
                  Request materials
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
