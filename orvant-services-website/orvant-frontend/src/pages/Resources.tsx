import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '../components/SEO'
import { CollectionPageSchema } from '../components/StructuredData'

export function Resources() {
  const articles = [
    {
      category: 'M&A Advisory',
      title: 'Navigating Cross-Border M&A in Uncertain Markets',
      description: 'Key considerations for companies pursuing international acquisitions amid regulatory complexity and market volatility.',
      slug: 'cross-border-ma-uncertain-markets',
    },
    {
      category: 'Restructuring',
      title: 'Stakeholder Alignment in Distressed Situations',
      description: 'Practical approaches to managing competing interests and building consensus during operational turnarounds.',
      slug: 'stakeholder-alignment-distressed',
    },
    {
      category: 'Public Markets',
      title: 'Preparing for Public Market Scrutiny',
      description: 'What private companies need to know about governance, disclosure, and investor relations before going public.',
      slug: 'preparing-public-market-scrutiny',
    },
  ]

  return (
    <>
      <SEO
        title="Resources"
        description="Practical guidance drawn from mandates we've worked on. For decisions with consequences, get advice tailored to you."
        canonical="/resources"
      />
      <CollectionPageSchema />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-display-xl text-white mb-6">
              Insights and perspectives
            </h1>
            <p className="text-body-lg text-navy-100 leading-relaxed">
              Practical guidance drawn from mandates we've worked on. For decisions with consequences, get advice tailored to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-28 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <p className="font-sans text-body-xs uppercase tracking-widest text-gold-600 mb-3">
                  {article.category}
                </p>
                <h2 className="font-display text-display-md text-neutral-950 mb-4 group-hover:text-gold-600 transition-colors duration-200">
                  {article.title}
                </h2>
                <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
                  {article.description}
                </p>
                <div className="inline-flex items-center text-body-sm text-neutral-950 font-medium group-hover:text-gold-600 transition-colors duration-200">
                  Read article
                  <ArrowRight className="ml-2" size={16} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-display-lg text-neutral-950 mb-6">
              Stay informed
            </h2>
            <p className="text-body-lg text-neutral-700 mb-8">
              Receive occasional insights on complex transitions, market developments, and advisory best practices.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-sm text-body-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-150"
              >
                Subscribe
              </button>
            </form>
            <p className="text-body-sm text-neutral-600 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-navy-900">
        <div className="max-w-container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-display-lg text-white mb-6">
            Discuss your specific situation
          </h2>
          <p className="text-body-lg text-navy-100 mb-8 max-w-2xl mx-auto">
            These insights are general in nature. For tailored guidance on your circumstances, let's have a confidential conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 text-body-md font-sans font-medium rounded-sm hover:bg-gold-400 transition-all duration-150 hover:shadow-elevation"
          >
            Start a confidential conversation
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
