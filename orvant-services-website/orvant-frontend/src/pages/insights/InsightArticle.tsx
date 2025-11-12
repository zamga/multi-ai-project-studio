import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '../../components/SEO'
import Breadcrumb from '../../components/Breadcrumb'

const articles = [
  {
    title: 'Preparing for a sale: What boards should know',
    excerpt: 'Key considerations for boards evaluating strategic alternatives, from readiness assessment to process management.',
    date: 'November 2025',
    tags: ['M&A', 'Board Advisory'],
    slug: 'preparing-for-sale',
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
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

export function InsightArticle() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return <Navigate to="/insights" replace />
  }

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/insights/${article.slug}`}
      />
      <Breadcrumb items={[
        { name: 'Insights', path: '/insights' },
        { name: article.title, path: `/insights/${article.slug}` }
      ]} />

      <div className="bg-white">
        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/40 to-transparent" />
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-body-sm text-neutral-600 hover:text-gold-600 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Insights
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Meta */}
            <div className="flex items-center gap-6 mb-6 text-body-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} />
                <span>{article.tags.join(', ')}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-display-xl font-serif text-navy-900 mb-6">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-body-lg text-neutral-700 mb-12 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {article.fullContent.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h2 key={index} className="text-display-sm font-serif text-navy-900 mt-12 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h2>
                  )
                }
                return (
                  <p key={index} className="text-body-md text-neutral-700 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 pt-12 border-t border-neutral-200">
              <div className="bg-neutral-50 rounded-sm p-8">
                <h3 className="text-display-sm font-serif text-navy-900 mb-4">
                  Discuss your situation
                </h3>
                <p className="text-body-md text-neutral-700 mb-6">
                  If you're facing a similar challenge, we'd be glad to discuss how we might help.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gold-600 text-white text-body-md font-semibold rounded-sm hover:bg-gold-500 transition-all duration-220"
                >
                  Start a Confidential Conversation
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  )
}
