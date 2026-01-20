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
          
          <div className="mt-8 text-[var(--mck-dark)] space-y-6">
            <p className="text-lg leading-relaxed">
              This Privacy Policy explains how Bergweiss Ltd collects, uses, and protects your personal information when you use our website and services.
            </p>
            
            <div className="bg-[var(--mck-light)] p-6 rounded-lg">
              <p className="text-sm text-[var(--mck-dark)]/70">
                This is a placeholder page. A comprehensive Privacy Policy will be published here in accordance with UK GDPR and data protection requirements.
              </p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-[var(--mck-black)] mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:info@berg-weiss.com" className="text-[var(--mck-accent)] hover:underline">
                  info@berg-weiss.com
                </a>
              </p>
            </div>
            
            <div className="mt-8">
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
