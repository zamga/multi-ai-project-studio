import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[var(--mck-white)] min-h-screen">
      {/* Header */}
      <header className="py-8 px-8 border-b border-[var(--mck-gray)] bg-[var(--mck-white)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-1 bg-[var(--mck-accent)]"></div>
          </div>
          <Link href="/" className="text-3xl font-bold text-[var(--mck-black)] tracking-tight hover:text-[var(--mck-accent)] transition-colors">
            BERGWEISS LTD
          </Link>
          <p className="text-[var(--mck-dark)] mt-2 text-lg">Corporate Finance Advisory for Private Companies (Europe)</p>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <section className="py-16 px-8 bg-[var(--mck-white)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-[var(--mck-accent)]"></div>
            <span className="text-sm font-semibold text-[var(--mck-accent)] uppercase tracking-wider">Privacy Policy</span>
          </div>
          
          <div className="mt-8 text-[var(--mck-dark)] space-y-8">
            <p className="text-sm text-[var(--mck-dark)]/70">
              Effective Date: January 20, 2026
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--mck-black)] mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Bergweiss Ltd (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This policy explains how we handle your personal data when you visit our website or contact us.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--mck-black)] mb-4">2. Company Details</h2>
              <p className="leading-relaxed">
                Bergweiss Ltd is registered in England and Wales (Company No. 16949445). Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--mck-black)] mb-4">3. Data We Collect</h2>
              <p className="leading-relaxed">
                We collect personal data you voluntarily provide via our contact forms (Name, Email, Message) and technical data via cookies (IP address, browser type).
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--mck-black)] mb-4">4. How We Use Your Data</h2>
              <p className="leading-relaxed">
                We use your data solely to respond to your enquiries and for legitimate business administration. We do not sell your data to third parties.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--mck-black)] mb-4">5. Your Rights</h2>
              <p className="leading-relaxed">
                Under the UK GDPR, you have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at{" "}
                <a href="mailto:info@berg-weiss.com" className="text-[var(--mck-accent)] hover:underline">
                  info@berg-weiss.com
                </a>.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-[var(--mck-gray)]">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-[var(--mck-accent)] hover:text-[var(--mck-teal)] transition-colors"
              >
                <span>&larr;</span>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 bg-[var(--mck-black)] text-[var(--mck-white)]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-[var(--mck-white)]/60 mb-4">
            Where required, services are delivered via authorised partners.
          </p>
          <div className="border-t border-[var(--mck-white)]/10 pt-4 mt-4">
            <p className="text-xs text-[var(--mck-white)]/50 leading-relaxed">
              Bergweiss Ltd is a corporate finance consultancy. We provide strategic advice and do not offer investment advice, handle client funds, or arrange transactions in regulated securities. Any regulated activities are strictly facilitated through FCA-authorized partners.
            </p>
            <p className="text-xs text-[var(--mck-white)]/50 mt-3">
              Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ | Company No: 16949445
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
