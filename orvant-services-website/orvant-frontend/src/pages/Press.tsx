import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SEO } from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'

export function Press() {
  const pressItems = [
    {
      outlet: 'Financial Times',
      title: 'Advisory firms navigate complex restructuring landscape',
      date: 'Recent',
      url: '#',
      placeholder: true,
    },
    {
      outlet: 'Bloomberg',
      title: 'M&A advisory trends in mid-market transactions',
      date: 'Recent',
      url: '#',
      placeholder: true,
    },
    {
      outlet: 'Reuters',
      title: 'Public market readiness for growth companies',
      date: 'Recent',
      url: '#',
      placeholder: true,
    },
  ]

  const recognitions = [
    {
      title: 'Industry Recognition',
      description: 'Recognized for excellence in M&A advisory and restructuring services',
      placeholder: true,
    },
    {
      title: 'Professional Memberships',
      description: 'Active members of leading industry associations and professional bodies',
      placeholder: true,
    },
  ]

  return (
    <>
      <SEO
        title="Press & Media"
        description="Press coverage, media mentions, and industry recognition for Orvantt Services. Leading advisory firm for M&A, restructuring, and public markets."
        canonical="/press"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Press & Media', url: '/press' },
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
                  Press & Media
                </span>
              </motion.div>
              <h1 className="font-display text-display-xl text-white mb-8 leading-[1.1] tracking-tight">
                In the News
              </h1>
              <p className="text-body-xl text-navy-100 leading-relaxed">
                Press coverage, media mentions, and industry recognition for our work advising on complex business transitions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-neutral-50">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <h2 className="font-display text-display-lg text-neutral-950 mb-4 leading-tight">
                Recent Coverage
              </h2>
              <p className="text-body-md text-neutral-600 leading-relaxed max-w-2xl">
                Selected media mentions and press coverage. Full press kit available upon request.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressItems.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white p-6 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-body-xs uppercase tracking-widest text-gold-600 font-medium">
                      {item.outlet}
                    </span>
                    {!item.placeholder && (
                      <ExternalLink size={16} className="text-neutral-400 group-hover:text-navy-900 transition-colors duration-220" />
                    )}
                  </div>

                  <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3 group-hover:text-navy-900 transition-colors duration-220">
                    {item.title}
                  </h3>

                  <p className="text-body-sm text-neutral-500 mb-4">{item.date}</p>

                  {item.placeholder ? (
                    <p className="text-body-xs text-neutral-500 italic">
                      Press coverage placeholder - actual links available upon request
                    </p>
                  ) : (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-body-sm text-navy-900 font-medium hover:text-navy-800 transition-colors duration-220"
                    >
                      Read article
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-neutral-200">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <h2 className="font-display text-display-lg text-neutral-950 mb-4 leading-tight">
                Recognition & Memberships
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recognitions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-neutral-50 p-8 rounded-sm border border-neutral-200"
                >
                  <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.placeholder && (
                    <p className="text-body-xs text-neutral-500 italic">
                      Specific memberships and credentials available upon request
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-display-lg text-neutral-950 mb-6 leading-tight">
                Media Inquiries
              </h2>
              <p className="text-body-lg text-neutral-600 mb-10 leading-relaxed">
                For press inquiries, interview requests, or additional information about our firm and services, please contact us.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-220 hover:shadow-elevation-lg hover:scale-[1.02]"
              >
                Contact press team
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
