export default function AboutPage() {
  return (
    <div className="max-w-[760px] mx-auto px-6 py-12">
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
    </div>
  );
}
