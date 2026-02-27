import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, ArrowRight, Globe, Shield, BarChart3, Briefcase, Users, Building2, TrendingUp, Landmark } from 'lucide-react';

const navLinks = [
  {
    label: 'What We Do',
    href: '#services',
    megaMenu: [
      {
        title: 'Investment Banking',
        description: 'Strategic advisory, M&A, and capital raising',
        icon: Landmark,
        href: '#services',
      },
      {
        title: 'Global Markets',
        description: 'FICC, Equities, and risk management solutions',
        icon: TrendingUp,
        href: '#services',
      },
      {
        title: 'Asset Management',
        description: 'Institutional and private wealth solutions',
        icon: BarChart3,
        href: '#services',
      },
      {
        title: 'Private Equity',
        description: 'Direct investments and fund management',
        icon: Building2,
        href: '#services',
      },
    ],
  },
  {
    label: 'Insights',
    href: '#insights',
    megaMenu: [
      {
        title: 'Market Research',
        description: 'Proprietary analysis and forecasts',
        icon: BarChart3,
        href: '#insights',
      },
      {
        title: 'Economic Outlook',
        description: 'Global macro perspectives',
        icon: Globe,
        href: '#insights',
      },
      {
        title: 'Thought Leadership',
        description: 'Expert commentary and white papers',
        icon: Briefcase,
        href: '#insights',
      },
    ],
  },
  {
    label: 'Our Firm',
    href: '#about',
    megaMenu: [
      {
        title: 'About Us',
        description: '40+ years of excellence in finance',
        icon: Shield,
        href: '#about',
      },
      {
        title: 'Leadership',
        description: 'Our world-class management team',
        icon: Users,
        href: '#about',
      },
      {
        title: 'Global Presence',
        description: 'Offices across 30+ countries',
        icon: Globe,
        href: '#about',
      },
    ],
  },
  { label: 'Careers', href: '#careers' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-dark py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c8a45e] to-[#a88b3d] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 20L12 4L20 20" stroke="#0a0f1c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 14H16.5" stroke="#0a0f1c" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-[#c8a45e] to-[#a88b3d] rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-lg font-semibold tracking-wide leading-none">
                APEX
              </span>
              <span className="text-[#c8a45e] text-[10px] font-medium tracking-[0.3em] leading-none mt-0.5">
                CAPITAL GROUP
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="nav-item relative"
                onMouseEnter={() => setActiveMega(link.label)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                  {link.megaMenu && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeMega === link.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>

                {/* Mega Menu */}
                {link.megaMenu && (
                  <AnimatePresence>
                    {activeMega === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 glass-dark rounded-2xl p-4 shadow-2xl"
                      >
                        <div className="space-y-1">
                          {link.megaMenu.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group/item"
                            >
                              <div className="w-9 h-9 rounded-lg bg-[#c8a45e]/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#c8a45e]/20 transition-colors">
                                <item.icon className="w-4.5 h-4.5 text-[#c8a45e]" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white group-hover/item:text-[#c8a45e] transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-xs text-gray-400 mt-0.5">
                                  {item.description}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/5">
                          <a
                            href={link.href}
                            className="flex items-center gap-2 text-xs font-medium text-[#c8a45e] hover:text-[#d4b97a] transition-colors px-3"
                          >
                            Explore All <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#insights" className="text-sm text-gray-400 hover:text-white transition-colors">
              Investor Relations
            </a>
            <button className="p-2 text-gray-400 hover:text-white transition-colors" aria-label="Search">
              <Search className="w-4.5 h-4.5" />
            </button>
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-medium text-[#0a0f1c] bg-gradient-to-r from-[#c8a45e] to-[#d4b97a] rounded-lg hover:from-[#d4b97a] hover:to-[#c8a45e] transition-all duration-300 shadow-lg shadow-[#c8a45e]/20"
            >
              Client Login
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-[#0a0f1c] pt-24 px-6 overflow-y-auto lg:hidden"
          >
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-3 text-xl font-medium text-white border-b border-white/5"
                  >
                    {link.label}
                  </a>
                  {link.megaMenu && (
                    <div className="pl-4 space-y-2 py-2">
                      {link.megaMenu.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="block py-2 text-sm text-gray-400 hover:text-[#c8a45e] transition-colors"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-8 space-y-4">
              <a
                href="#contact"
                className="block w-full py-3 text-center text-sm font-medium text-[#0a0f1c] bg-gradient-to-r from-[#c8a45e] to-[#d4b97a] rounded-lg"
              >
                Client Login
              </a>
              <a
                href="#insights"
                className="block w-full py-3 text-center text-sm font-medium text-[#c8a45e] border border-[#c8a45e]/30 rounded-lg"
              >
                Investor Relations
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
