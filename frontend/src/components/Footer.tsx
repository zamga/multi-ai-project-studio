import { Linkedin, Twitter, Youtube, Instagram, ArrowUpRight, ChevronUp } from 'lucide-react';

const footerLinks = {
  'What We Do': [
    { label: 'Investment Banking', href: '#' },
    { label: 'Global Markets', href: '#' },
    { label: 'Asset Management', href: '#' },
    { label: 'Private Equity', href: '#' },
    { label: 'Wealth Management', href: '#' },
    { label: 'Research & Insights', href: '#' },
  ],
  'Our Firm': [
    { label: 'About Us', href: '#about' },
    { label: 'Leadership', href: '#' },
    { label: 'Purpose & Values', href: '#' },
    { label: 'Global Offices', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Community Impact', href: '#' },
  ],
  'Careers': [
    { label: 'Overview', href: '#careers' },
    { label: 'Students & Graduates', href: '#' },
    { label: 'Experienced Professionals', href: '#' },
    { label: 'Life at Apex', href: '#' },
    { label: 'Benefits', href: '#' },
    { label: 'Open Roles', href: '#', external: true },
  ],
  'Resources': [
    { label: 'Client Login', href: '#' },
    { label: 'Investor Relations', href: '#' },
    { label: 'Pressroom', href: '#' },
    { label: 'Alumni Network', href: '#' },
    { label: 'Contact Us', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'X (Twitter)' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060a14] relative overflow-hidden">
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c8a45e]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c8a45e] to-[#a88b3d] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 20L12 4L20 20" stroke="#0a0f1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 14H16.5" stroke="#0a0f1c" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-semibold tracking-wide leading-none">APEX</span>
                <span className="text-[#c8a45e] text-[10px] font-medium tracking-[0.3em] leading-none mt-0.5">
                  CAPITAL GROUP
                </span>
              </div>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-8">
              Delivering world-class financial services and advisory solutions to institutions
              and individuals across global markets since 1984.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#c8a45e]/10 hover:text-[#c8a45e] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white tracking-[0.15em] uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[#c8a45e] transition-colors duration-200 inline-flex items-center gap-1"
                    >
                      {link.label}
                      {'external' in link && link.external && (
                        <ArrowUpRight className="w-3 h-3" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Apex Capital Group. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {['Privacy & Cookies', 'Terms & Conditions', 'Security', 'Regulatory Disclosures', 'Accessibility'].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#c8a45e]/10 hover:text-[#c8a45e] transition-all duration-300"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Disclosure */}
      <div className="bg-[#040710] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] text-gray-700 leading-relaxed">
            This website is for informational purposes only and does not constitute an offer to sell or a solicitation
            of an offer to buy any securities. Apex Capital Group and its affiliates make no representation or warranty,
            express or implied, as to the accuracy or completeness of the information contained herein. Past performance
            is not indicative of future results. Investment involves risk, including possible loss of principal.
          </p>
        </div>
      </div>
    </footer>
  );
}
