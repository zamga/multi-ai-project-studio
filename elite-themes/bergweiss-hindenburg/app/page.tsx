"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Reports data
const reports = [
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

const services = [
  "M&A",
  "Valuation",
  "Intermediary / Introductions (B2B)",
  "Research",
  "IPO / Capital Markets (Partner-led)",
  "SPAC (Partner-led)",
];

// Page Components
function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    consent: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("newsletter-email", email);
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:info@berg-weiss.com?subject=${subject}&body=${body}`;
      setFormSubmitted(true);
    } catch {
      setFormError(true);
    }
  };

  const featuredReport = reports.find((r) => r.slug === "advisory-approach");
  const otherReports = reports.filter((r) => r.slug !== "advisory-approach");

  return (
    <>
      {/* Hero / Featured Report */}
      <section className="mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">BERGWEISS LTD</h1>
        <p className="text-xl text-gray-600 mb-12">
          Corporate Finance Advisory for Private Companies (Europe)
        </p>

        {featuredReport && (
          <div className="border-t border-b border-gray-200 py-8">
            <h2 className="text-3xl font-bold mb-3">
              <Link href={`/reports/${featuredReport.slug}/`} className="hover:underline">
                {featuredReport.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-4">Published on {featuredReport.date}</p>
            <Link
              href={`/reports/${featuredReport.slug}/`}
              className="inline-block px-6 py-3 bg-black text-white text-sm hover:bg-gray-800"
            >
              Read Report
            </Link>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="mb-16 py-12 border-t border-gray-200">
        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">
          GET OUR LATEST UPDATES DELIVERED TO YOUR INBOX
        </h3>
        {subscribed ? (
          <p className="text-green-600">Thanks — you&apos;re subscribed.</p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white text-sm hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-xs text-gray-400 mt-3">You can unsubscribe at any time.</p>
      </section>

      {/* Reports List */}
      <section className="mb-16">
        {otherReports.map((report, index) => (
          <div key={report.slug}>
            <div className="py-8">
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/reports/${report.slug}/`} className="hover:underline">
                  {report.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500">Published on {report.date}</p>
            </div>
            {index < otherReports.length - 1 && (
              <div className="asterism">* * *</div>
            )}
          </div>
        ))}
      </section>

      {/* What we do */}
      <section className="mb-16 py-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold mb-8">What we do</h3>
        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service} className="text-lg">{service}</li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="py-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold mb-6">Contact</h3>
        <p className="mb-8">
          Email: <a href="mailto:info@berg-weiss.com" className="underline">info@berg-weiss.com</a>
        </p>

        {formSubmitted ? (
          <p className="text-green-600">Thanks — we received your message.</p>
        ) : formError ? (
          <p className="text-red-600">Something went wrong. Please email info@berg-weiss.com</p>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black resize-none"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-4 h-4"
              />
              <label htmlFor="consent" className="text-sm">
                I confirm I am contacting BERGWEISS in a business capacity. *
              </label>
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white text-sm hover:bg-gray-800"
            >
              Send
            </button>
          </form>
        )}
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
      
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          BERGWEISS LTD is an independent corporate finance advisory firm focused on private company transactions across Europe.
        </p>
        
        <p>
          We work with business owners, management teams, and investors on M&A transactions, valuations, capital raising, and strategic introductions. Our approach is hands-on and relationship-driven.
        </p>
        
        <p>
          The firm was established to provide institutional-quality advice to private companies that are often underserved by larger advisory firms. We focus on transactions where our sector knowledge and network can make a meaningful difference to outcomes.
        </p>
        
        <p>
          Our team has experience across multiple sectors including manufacturing, business services, technology, and healthcare. We have completed transactions ranging from €5m to €100m in enterprise value.
        </p>
        
        <p>
          We are headquartered in London with deep relationships across Continental Europe, particularly in the DACH region and Central/Eastern Europe.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Our Principles</h2>
        <ul className="space-y-4 text-lg">
          <li><strong>Independence:</strong> We have no conflicts of interest. Our only obligation is to our clients.</li>
          <li><strong>Transparency:</strong> We provide honest assessments, even when the news is not what clients want to hear.</li>
          <li><strong>Confidentiality:</strong> We treat all client information with the utmost discretion.</li>
          <li><strong>Alignment:</strong> Our fee structures are designed to align our interests with client outcomes.</li>
        </ul>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Company Details</h2>
        <p className="text-gray-600">
          BERGWEISS LTD is a private limited company registered in England and Wales.<br />
          Company No: 16949445<br />
          Registered Office: 71–75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
        </p>
      </div>
    </>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    consent: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:info@berg-weiss.com?subject=${subject}&body=${body}`;
      setFormSubmitted(true);
    } catch {
      setFormError(true);
    }
  };

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact us</h1>
      
      <p className="text-lg mb-8">
        Email: <a href="mailto:info@berg-weiss.com" className="underline">info@berg-weiss.com</a>
      </p>

      {formSubmitted ? (
        <p className="text-green-600 text-lg">Thanks — we received your message.</p>
      ) : formError ? (
        <p className="text-red-600 text-lg">Something went wrong. Please email info@berg-weiss.com</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
          <div>
            <label className="block text-sm mb-2">Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Message *</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black resize-none"
            />
          </div>
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="contact-consent"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 w-4 h-4"
            />
            <label htmlFor="contact-consent" className="text-sm">
              I confirm I am contacting BERGWEISS in a business capacity. *
            </label>
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-black text-white text-sm hover:bg-gray-800"
          >
            Send
          </button>
        </form>
      )}

      <div className="mt-16 pt-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Company Details</h2>
        <p className="text-gray-600">
          BERGWEISS LTD<br />
          Company No: 16949445<br />
          Registered Office: 71–75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ<br />
          Registered in: England and Wales
        </p>
      </div>
    </>
  );
}

function ReportsPage() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Reports</h1>
      
      {reports.map((report, index) => (
        <div key={report.slug}>
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/reports/${report.slug}/`} className="hover:underline">
                {report.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500">Published on {report.date}</p>
          </div>
          {index < reports.length - 1 && (
            <div className="asterism">* * *</div>
          )}
        </div>
      ))}
    </>
  );
}

function ReportDetailPage({ slug }: { slug: string }) {
  const report = reports.find((r) => r.slug === slug);

  if (!report) {
    return (
      <>
        <h1 className="text-4xl font-bold mb-4">Report Not Found</h1>
        <p>The requested report could not be found.</p>
        <Link href="/" className="text-sm text-gray-500 hover:text-black mt-8 inline-block">
          ← Back to Home
        </Link>
      </>
    );
  }

  return (
    <>
      <Link href="/reports/" className="text-sm text-gray-500 hover:text-black mb-8 inline-block">
        ← Back to Reports
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{report.title}</h1>
      <p className="text-sm text-gray-500 mb-12">Published on {report.date}</p>
      
      <div className="prose prose-lg max-w-none">
        {report.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-6 text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-16 pt-12 border-t border-gray-200">
        <Link href="/reports/" className="text-sm text-gray-500 hover:text-black">
          ← Back to Reports
        </Link>
      </div>
    </>
  );
}

function LegalPage() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Legal Disclaimer</h1>
      
      <div className="space-y-6 text-lg leading-relaxed">
        <p>This website is provided for general information only.</p>
        
        <p>
          Nothing on this website constitutes an offer, solicitation, or recommendation to buy or sell any securities or financial instruments, or to engage in any investment activity.
        </p>
        
        <p>Where required, certain services may be delivered via authorised partners.</p>
        
        <p>BERGWEISS LTD is not responsible for reliance placed on information on this website.</p>
        
        <p>
          Contact: <a href="mailto:info@berg-weiss.com" className="underline">info@berg-weiss.com</a>
        </p>
      </div>
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Privacy Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4">Controller</h2>
          <p className="text-lg leading-relaxed">
            BERGWEISS LTD (UK company). Registered office: 71–75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ. Company No. 16949445.
          </p>
          <p className="text-lg leading-relaxed mt-2">
            Contact: <a href="mailto:info@berg-weiss.com" className="underline">info@berg-weiss.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">What we collect</h2>
          <p className="text-lg leading-relaxed">
            When you contact us, we may collect: name, email address, company name, message content, and any information you choose to provide.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Purpose</h2>
          <p className="text-lg leading-relaxed">
            We use your information to respond to enquiries and communicate with you about our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Lawful basis</h2>
          <p className="text-lg leading-relaxed">
            We process personal data primarily for our legitimate interests in responding to business enquiries and operating our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Retention</h2>
          <p className="text-lg leading-relaxed">
            We keep enquiry data only as long as necessary to respond, manage our relationship, and meet legal or accounting obligations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Your rights</h2>
          <p className="text-lg leading-relaxed">
            You may have rights to access, correct, delete, restrict, or object to processing of your personal data. To exercise rights, contact: <a href="mailto:info@berg-weiss.com" className="underline">info@berg-weiss.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Complaints</h2>
          <p className="text-lg leading-relaxed">
            If you are not satisfied, you can complain to the UK Information Commissioner&apos;s Office (ICO).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Updates</h2>
          <p className="text-lg leading-relaxed">
            We may update this notice from time to time by posting a new version on this page.
          </p>
        </section>
      </div>
    </>
  );
}

function CookiesPage() {
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const analytics = localStorage.getItem("analytics-enabled");
    setAnalyticsEnabled(analytics === "true");
  }, []);

  const handleSaveSettings = () => {
    localStorage.setItem("cookie-consent", analyticsEnabled ? "accepted" : "rejected");
    localStorage.setItem("analytics-enabled", analyticsEnabled ? "true" : "false");
    setShowModal(false);
  };

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Cookie Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4">What cookies are</h2>
          <p className="text-lg leading-relaxed">
            Cookies are small text files stored on your device. Some cookies are essential for the website to function.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Essential cookies</h2>
          <p className="text-lg leading-relaxed">
            We use essential cookies to make the site work (for example, to remember your cookie preferences). These do not require consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Analytics cookies (optional)</h2>
          <p className="text-lg leading-relaxed">
            We use analytics cookies only if you choose &quot;Accept analytics&quot; in the cookie banner. These help us understand how the site is used so we can improve it. Consent must be actively given.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">How to manage cookies</h2>
          <p className="text-lg leading-relaxed">
            You can change your cookie preference at any time via{" "}
            <button
              onClick={() => setShowModal(true)}
              className="underline hover:no-underline"
            >
              Cookie settings
            </button>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Cookies we set</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-bold">Cookie</th>
                  <th className="py-3 font-bold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">cookie-consent</td>
                  <td className="py-3">Stores your cookie preference (essential)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">analytics-enabled</td>
                  <td className="py-3">Stores whether analytics is enabled (essential)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Cookie Settings Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 max-w-md w-full">
            <h3 className="text-lg font-bold mb-6">Cookie Settings</h3>
            <div className="mb-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="w-5 h-5"
                />
                <span className="text-sm">Analytics cookies</span>
              </label>
              <p className="text-xs text-gray-500 mt-2 ml-8">
                Help us understand how the site is used so we can improve it.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 text-sm hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Main Router Component
export default function AppRouter() {
  const [currentPath, setCurrentPath] = useState("/");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get the current path from the browser URL
    const path = window.location.pathname;
    setCurrentPath(path);

    // Listen for popstate events (browser back/forward)
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle link clicks for client-side navigation
  useEffect(() => {
    if (!mounted) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin)) {
        const url = new URL(anchor.href);
        // Only handle internal links
        if (!anchor.target && !anchor.download) {
          e.preventDefault();
          window.history.pushState({}, "", url.pathname);
          setCurrentPath(url.pathname);
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  // Normalize path (remove trailing slash for comparison, except for root)
  const normalizedPath = currentPath === "/" ? "/" : currentPath.replace(/\/$/, "");

  // Route matching
  let content;
  if (normalizedPath === "/" || normalizedPath === "") {
    content = <HomePage />;
  } else if (normalizedPath === "/about") {
    content = <AboutPage />;
  } else if (normalizedPath === "/contact") {
    content = <ContactPage />;
  } else if (normalizedPath === "/reports") {
    content = <ReportsPage />;
  } else if (normalizedPath === "/legal") {
    content = <LegalPage />;
  } else if (normalizedPath === "/privacy") {
    content = <PrivacyPage />;
  } else if (normalizedPath === "/cookies") {
    content = <CookiesPage />;
  } else {
    // Check for report detail pages
    const reportMatch = normalizedPath.match(/^\/reports\/([^/]+)$/);
    if (reportMatch) {
      content = <ReportDetailPage slug={reportMatch[1]} />;
    } else {
      // 404 fallback
      content = (
        <>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p>The requested page could not be found.</p>
          <Link href="/" className="text-sm text-gray-500 hover:text-black mt-8 inline-block">
            ← Back to Home
          </Link>
        </>
      );
    }
  }

  return (
    <div className="max-w-[760px] mx-auto px-6 py-12">
      {content}
    </div>
  );
}
