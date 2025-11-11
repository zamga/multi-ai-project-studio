import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  const capabilities = [
    { name: 'M&A Advisory', path: '/services#ma-advisory' },
    { name: 'Restructuring', path: '/services#restructuring' },
    { name: 'Public Markets', path: '/services#public-markets' },
    { name: 'Accounting & Compliance', path: '/services#accounting' },
    { name: 'Buy/Sell Company', path: '/services#buy-sell' },
  ]

  const industries = [
    { name: 'Industrials', path: '/services' },
    { name: 'Technology', path: '/services' },
    { name: 'Healthcare', path: '/services' },
    { name: 'Financial Services', path: '/services' },
  ]

  const about = [
    { name: 'Our Firm', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Approach', path: '/about#approach' },
  ]

  const insights = [
    { name: 'All Insights', path: '/insights' },
    { name: 'Press & Media', path: '/press' },
    { name: 'Downloads', path: '/downloads' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200 transition-all duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-sans font-semibold text-neutral-950 tracking-tight">
              Orvantt Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-body-sm font-sans transition-colors duration-150 ${
                isActive('/') ? 'text-neutral-950 font-medium' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Home
            </Link>

            {/* Capabilities Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('capabilities')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center text-body-sm font-sans transition-colors duration-150 ${
                  location.pathname === '/services' ? 'text-neutral-950 font-medium' : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                Capabilities
                <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'capabilities' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-neutral-200 rounded-sm shadow-elevation py-2"
                  >
                    {capabilities.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2.5 text-body-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center text-body-sm font-sans text-neutral-600 hover:text-neutral-950 transition-colors duration-150"
              >
                Industries
                <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-neutral-200 rounded-sm shadow-elevation py-2"
                  >
                    {industries.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2.5 text-body-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center text-body-sm font-sans transition-colors duration-150 ${
                  location.pathname === '/about' || location.pathname === '/leadership' ? 'text-neutral-950 font-medium' : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                About
                <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-neutral-200 rounded-sm shadow-elevation py-2"
                  >
                    {about.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2.5 text-body-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Insights Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('insights')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center text-body-sm font-sans transition-colors duration-150 ${
                  location.pathname === '/insights' || location.pathname === '/press' || location.pathname === '/downloads' ? 'text-neutral-950 font-medium' : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                Insights
                <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'insights' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-neutral-200 rounded-sm shadow-elevation py-2"
                  >
                    {insights.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2.5 text-body-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gold-600 text-white text-body-sm font-sans font-medium rounded-sm hover:bg-gold-500 transition-all duration-220 hover:shadow-elevation"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-neutral-950"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-neutral-200 bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <Link
                to="/"
                className={`block px-4 py-3 text-body-md font-sans rounded-sm ${
                  isActive('/') ? 'bg-neutral-100 text-neutral-950' : 'text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                Home
              </Link>
              
              <div>
                <div className="px-4 py-2 text-body-xs uppercase tracking-widest text-neutral-500">Capabilities</div>
                {capabilities.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2.5 text-body-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div>
                <div className="px-4 py-2 text-body-xs uppercase tracking-widest text-neutral-500">About</div>
                {about.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2.5 text-body-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div>
                <div className="px-4 py-2 text-body-xs uppercase tracking-widest text-neutral-500">Insights</div>
                {insights.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2.5 text-body-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className="block px-4 py-3 bg-gold-600 text-white text-body-md font-sans font-medium rounded-sm text-center"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
