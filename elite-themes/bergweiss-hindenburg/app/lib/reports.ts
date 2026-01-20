export interface Report {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const reports: Report[] = [
  {
    slug: "advisory-approach",
    title: "A Note on Our Advisory Approach",
    date: "January 20, 2026",
    content: `At BERGWEISS LTD, we take a fundamentally different approach to corporate finance advisory. Rather than pursuing volume, we focus on a small number of engagements where we can add genuine value to private company owners navigating complex transactions.

Our philosophy is straightforward: we work only with businesses where we understand the sector dynamics, have relevant transaction experience, and can realistically help achieve the owner's objectives. This means we decline more mandates than we accept.

We believe that the best advisory relationships are built on transparency about what is achievable and what is not. Before any engagement, we provide an honest assessment of market conditions, realistic valuation expectations, and the likely timeline for a successful outcome.

Our fee structures are designed to align our interests with those of our clients. We succeed when our clients succeed, and we are comfortable being held accountable for the advice we provide.`,
  },
  {
    slug: "private-company-ma",
    title: "Private Company M&A: What We Actually Do",
    date: "January 10, 2026",
    content: `Private company M&A is fundamentally different from public market transactions. There are no published share prices, limited comparable data, and buyers must conduct extensive due diligence to understand what they are acquiring.

Our role in these transactions is to prepare the business for sale, identify and approach suitable buyers, manage the process efficiently, and negotiate terms that protect the seller's interests. We handle the complexity so that business owners can continue running their companies during what is often a lengthy process.

We focus on transactions in the €5m to €50m enterprise value range, where we believe our hands-on approach adds the most value. In this segment, buyers are typically strategic acquirers or private equity firms seeking platform investments.

The key to successful private company M&A is preparation. We work with owners months before going to market to address potential issues, prepare comprehensive information memoranda, and develop a clear narrative about the business opportunity.`,
  },
  {
    slug: "valuation-notes",
    title: "Valuation Notes: Practical Ranges and Real Drivers",
    date: "January 7, 2026",
    content: `Valuation is both an art and a science. While financial models provide a framework, the actual price achieved in a transaction depends on factors that cannot be captured in a spreadsheet: competitive tension, strategic fit, and the quality of the sales process.

We approach valuation pragmatically. Rather than producing a single point estimate, we develop a range based on comparable transactions, discounted cash flow analysis, and our understanding of what buyers in the relevant sector are currently paying.

The most important valuation drivers for private companies are typically: recurring revenue characteristics, customer concentration, management depth, growth trajectory, and margin profile. We help owners understand how their business scores on each dimension and what can be done to improve positioning.

Our valuation work is designed to set realistic expectations and inform negotiation strategy. We would rather lose a mandate by being honest about value than win one by overpromising.`,
  },
  {
    slug: "introductions-b2b",
    title: "Introductions (B2B): How We Work Confidentially",
    date: "January 5, 2026",
    content: `Many of our most valuable engagements involve making introductions between parties who would benefit from knowing each other but have no natural way to connect. This might be a business owner seeking a specific type of investor, or a company looking for acquisition targets in a particular niche.

Confidentiality is paramount in this work. We never disclose the identity of our clients without explicit permission, and we are careful about how we approach potential counterparties to avoid signaling information that could be commercially sensitive.

Our introduction process is structured but flexible. We begin by understanding exactly what our client is looking for, then systematically identify and research potential matches. Initial approaches are made on a no-names basis, and identities are only revealed once both parties have expressed genuine interest.

We maintain relationships across the European private company ecosystem, which allows us to make connections that would otherwise be impossible. Our network is our most valuable asset, and we invest continuously in maintaining and expanding it.`,
  },
  {
    slug: "research-market-mapping",
    title: "Research: Market Mapping for Private Transactions",
    date: "January 2, 2026",
    content: `Good research is the foundation of successful private company transactions. Unlike public markets, where information is readily available, private company data must be assembled from multiple sources and verified through direct contact.

Our research capability focuses on market mapping: identifying all relevant players in a particular sector or geography, understanding their characteristics, and assessing their likely interest in a transaction. This work is essential for both buy-side and sell-side mandates.

We use a combination of database research, industry publications, trade association contacts, and direct outreach to build comprehensive market maps. Our goal is to ensure that no relevant opportunity is missed and that our clients have complete visibility into their options.

Research is not a one-time exercise. Markets evolve, new players emerge, and circumstances change. We maintain our research on an ongoing basis and provide regular updates to clients with active mandates.`,
  },
  {
    slug: "capital-markets-partner-led",
    title: "IPO / Capital Markets (Partner-led): Readiness Only",
    date: "December 20, 2025",
    content: `For companies considering public markets, we provide IPO readiness assessment and preparation services. This work is delivered in partnership with authorised firms who handle the regulated aspects of any capital markets transaction.

Our role is to help private companies understand what is required to access public markets and to prepare them for the scrutiny that comes with being a listed company. This includes governance improvements, financial reporting upgrades, and investor relations capability building.

We are honest with clients about whether public markets are the right path. For many private companies, the costs and constraints of being listed outweigh the benefits. We help owners think through the alternatives and make informed decisions.

When a company does decide to pursue an IPO, we work alongside the lead advisers to ensure the process runs smoothly. Our deep knowledge of the business, built through the preparation phase, adds value throughout the transaction.`,
  },
  {
    slug: "spac-partner-led",
    title: "SPAC (Partner-led): When It Makes Sense",
    date: "December 10, 2025",
    content: `Special Purpose Acquisition Companies (SPACs) offer an alternative route to public markets for private companies. While the SPAC market has cooled from its 2021 peak, it remains a viable option for certain businesses in specific circumstances.

We help private company owners evaluate whether a SPAC combination makes sense for their situation. This involves understanding the terms being offered, the quality of the SPAC sponsor, and the likely trading dynamics post-combination.

Our SPAC advisory work is delivered in partnership with authorised firms. We focus on the commercial and strategic aspects: Is this the right partner? Are the terms fair? What are the alternatives? The regulated aspects are handled by our partners.

We are selective about SPAC opportunities. The structure works best for companies with strong growth stories, clear paths to profitability, and management teams capable of operating in a public company environment. We help clients assess honestly whether they meet these criteria.`,
  },
];

export function getReportBySlug(slug: string): Report | undefined {
  return reports.find((r) => r.slug === slug);
}

export function getAllReportSlugs(): string[] {
  return reports.map((r) => r.slug);
}
