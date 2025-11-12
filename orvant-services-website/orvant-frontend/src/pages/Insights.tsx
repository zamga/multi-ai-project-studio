import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, ArrowRight } from 'lucide-react'
import { SEO } from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import { BreadcrumbSchema } from '../components/StructuredData'

export function Insights() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const articles = [
    {
      title: 'Preparing for a sale: What boards should know',
      excerpt: 'Key considerations for boards evaluating strategic alternatives, from readiness assessment to process management.',
      date: 'November 2025',
      tags: ['M&A', 'Board Advisory'],
      slug: 'preparing-for-sale',
      coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      keyTakeaways: [
        'Assess readiness before engaging buyers',
        'Build clean data room and diligence materials',
        'Align board on process and decision criteria',
      ],
      fullContent: `When boards begin evaluating strategic alternatives, the quality of preparation often determines outcome. Companies that enter a sale process unprepared face compressed timelines, unfavorable terms, and increased execution risk.

**Readiness Assessment**

Before engaging potential buyers, boards should conduct a thorough readiness assessment. This includes reviewing financial reporting quality, identifying potential diligence issues, and ensuring management systems can withstand scrutiny. Companies with clean financials, documented processes, and clear growth narratives command premium valuations.

**Data Room Preparation**

A well-organized data room signals professionalism and reduces buyer uncertainty. Essential materials include three years of audited financials, customer contracts, employee agreements, intellectual property documentation, and regulatory compliance records. Missing or incomplete documentation raises red flags and can derail transactions.

**Process Management**

Successful sales require disciplined process management. Boards should establish clear decision criteria, define acceptable deal structures, and maintain confidentiality throughout. Working with experienced advisors helps navigate complex negotiations and ensures competitive tension among buyers.

**Stakeholder Alignment**

Board alignment on objectives, timing, and acceptable outcomes is critical. Disagreements during negotiations weaken bargaining position and can cause deals to collapse. Regular board discussions throughout the process ensure unified decision-making when time-sensitive choices arise.`,
    },
    {
      title: 'Restructuring under pressure: A practical framework',
      excerpt: 'How to stabilize operations, align stakeholders, and execute a credible turnaround when liquidity is tight.',
      date: 'October 2025',
      tags: ['Restructuring', 'Turnaround'],
      slug: 'restructuring-framework',
      coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      keyTakeaways: [
        'Build 13-week cash flow with scenarios',
        'Map stakeholder positions early',
        'Communicate credible plan with milestones',
      ],
      fullContent: `Companies facing liquidity pressure require immediate action and credible planning. Successful restructurings balance short-term stabilization with long-term value preservation through disciplined execution and stakeholder management.

**Cash Flow Management**

The foundation of any restructuring is detailed cash flow forecasting. A 13-week cash flow model with weekly updates provides visibility into liquidity needs and identifies pressure points. Scenario planning helps anticipate challenges and prepare contingency responses before crises emerge.

**Stakeholder Mapping**

Early stakeholder mapping is essential. Understanding lender covenants, supplier terms, customer dependencies, and employee concerns allows proactive communication and prevents surprises. Each stakeholder group has different priorities and risk tolerances that must be addressed systematically.

**Operational Stabilization**

Immediate operational improvements often unlock hidden value. Cost reduction initiatives, working capital optimization, and process improvements can generate cash quickly. However, cuts must be strategic—indiscriminate cost reduction damages long-term competitiveness and stakeholder confidence.

**Communication Strategy**

Credible communication builds trust during uncertainty. Regular updates with clear milestones demonstrate progress and maintain stakeholder support. Transparency about challenges, combined with realistic solutions, strengthens relationships and creates space for difficult decisions.

**Professional Guidance**

Experienced restructuring advisors bring objectivity, technical expertise, and stakeholder credibility. They help navigate complex negotiations, identify value preservation opportunities, and maintain focus on executable solutions when internal teams face overwhelming pressure.`,
    },
    {
      title: 'IPO readiness: Beyond the financials',
      excerpt: 'Governance, controls, and investor messaging considerations that determine market readiness.',
      date: 'September 2025',
      tags: ['Public Markets', 'Governance'],
      slug: 'ipo-readiness',
      coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
      keyTakeaways: [
        'Close governance and controls gaps early',
        'Build equity story with clear narrative',
        'Prepare for underwriter and analyst scrutiny',
      ],
      fullContent: `Public market readiness extends far beyond financial performance. Companies pursuing IPOs must demonstrate institutional-grade governance, robust internal controls, and compelling equity narratives that resonate with institutional investors.

**Governance Infrastructure**

Public companies require independent boards, audit committees, and formal governance processes. Building this infrastructure takes time—rushing governance improvements before IPO creates execution risk and raises regulatory concerns. Early investment in governance pays dividends throughout the IPO process.

**Internal Controls**

SOX compliance demands rigorous internal controls over financial reporting. Companies must document processes, implement control testing, and remediate deficiencies well before IPO. Weak controls delay offerings, increase costs, and damage investor confidence.

**Equity Story Development**

A compelling equity story articulates competitive advantages, growth drivers, and market opportunity in terms institutional investors understand. The narrative must be consistent across management presentations, roadshow materials, and regulatory filings. Inconsistent messaging raises credibility concerns.

**Underwriter Preparation**

Investment banks conduct extensive due diligence before committing to underwrite offerings. Companies should anticipate tough questions about business model sustainability, competitive positioning, and management depth. Thorough preparation prevents surprises during critical roadshow periods.

**Analyst Scrutiny**

Equity research analysts will dissect business models, financial projections, and competitive dynamics. Companies must be prepared to defend assumptions, explain strategic choices, and address weaknesses transparently. Credible responses build long-term analyst relationships.`,
    },
  ]

  const allTags = Array.from(new Set(articles.flatMap(a => a.tags)))

  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag === null || article.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  return (
    <>
      <SEO
        title="Insights"
        description="Practical guidance drawn from mandates we've worked on. Insights on M&A, restructuring, public markets, and governance for critical business transitions."
        canonical="/insights"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Insights', url: '/insights' },
      ]} />
      <Breadcrumb items={[{ name: 'Insights', path: '/insights' }]} />

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
                  Insights
                </span>
              </motion.div>
              <h1 className="font-display text-display-xl text-white mb-8 leading-[1.1] tracking-tight">
                Insights and perspectives
              </h1>
              <p className="text-body-xl text-navy-100 leading-relaxed">
                Practical guidance drawn from mandates we've worked on. For decisions with consequences, get advice tailored to you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-neutral-50 border-b border-neutral-200">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-neutral-300 rounded-sm text-body-md focus:outline-none focus:border-navy-900 transition-colors duration-220"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-2 text-body-sm rounded-full transition-all duration-220 ${
                    selectedTag === null
                      ? 'bg-navy-900 text-white'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-300'
                  }`}
                >
                  All
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 text-body-sm rounded-full transition-all duration-220 ${
                      selectedTag === tag
                        ? 'bg-navy-900 text-white'
                        : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-300'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-body-lg text-neutral-600">No insights found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-white rounded-sm border border-neutral-200 overflow-hidden hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220 card-premium"
                  >
                    {/* Cover image */}
                    <div className="relative h-48 overflow-hidden bg-neutral-900">
                      <img 
                        src={article.coverImage} 
                        alt={article.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map(tag => (
                          <span key={tag} className="text-body-xs uppercase tracking-widest text-gold-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3 group-hover:text-navy-900 transition-colors duration-220">
                        {article.title}
                      </h3>
                      <p className="text-body-md text-neutral-600 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      
                      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                        <div className="mb-4 pt-4 border-t border-neutral-200">
                          <p className="text-body-xs uppercase tracking-widest text-neutral-500 mb-2">Key Takeaways</p>
                          <ul className="space-y-1">
                            {article.keyTakeaways.map((takeaway, idx) => (
                              <li key={idx} className="flex items-start text-body-sm text-neutral-600">
                                <span className="text-gold-500 mr-2 mt-0.5">•</span>
                                <span>{takeaway}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <span className="text-body-sm text-neutral-500">{article.date}</span>
                        <Link
                          to={`/insights/${article.slug}`}
                          className="inline-flex items-center text-body-sm text-navy-900 font-medium hover:text-navy-800 transition-colors duration-220"
                        >
                          Read more
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-24 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-display-lg text-neutral-950 mb-6 leading-tight">
                Related resources
              </h2>
              <p className="text-body-lg text-neutral-600 mb-8 leading-relaxed">
                Explore our services and track record to understand how we work.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Link
                  to="/services"
                  className="group p-6 bg-white border border-neutral-200 rounded-sm hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
                >
                  <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-2 group-hover:text-navy-900 transition-colors duration-220">
                    Our Services
                  </h3>
                  <p className="text-body-md text-neutral-600 leading-relaxed">
                    M&A advisory, restructuring, public markets, and more
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
                    Representative transactions and case studies
                  </p>
                </Link>
              </div>
              <div className="text-center pt-8 border-t border-neutral-200">
                <h3 className="font-display text-display-md text-neutral-950 mb-4 leading-tight">
                  Tailored guidance for your situation
                </h3>
                <p className="text-body-lg text-neutral-600 mb-8 leading-relaxed">
                  These insights are general in nature. For tailored guidance on your circumstances, let's have a confidential conversation.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gold-500 text-navy-900 text-body-md font-sans font-medium rounded-sm hover:bg-gold-400 transition-all duration-220 hover:shadow-elevation-lg hover:scale-[1.02]"
                >
                  Start a confidential conversation
                  <ArrowRight className="ml-2 transition-transform duration-220 group-hover:translate-x-1" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
