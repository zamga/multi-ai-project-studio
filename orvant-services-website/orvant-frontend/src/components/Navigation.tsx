import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const location = useLocation()
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

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
    setFocusedIndex(-1)
  }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  const handleDropdownKeyDown = (e: React.KeyboardEvent, dropdownName: string, items: any[]) => {
    if (e.key === 'Escape') {
      setActiveDropdown(null)
      setFocusedIndex(-1)
      buttonRefs.current[dropdownName]?.focus()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex(prev => (prev + 1) % items.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex(prev => (prev - 1 + items.length) % items.length)
    } else if (e.key === 'Home') {
      e.preventDefault()
      setFocusedIndex(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setFocusedIndex(items.length - 1)
    }
  }

  const handleButtonKeyDown = (e: React.KeyboardEvent, dropdownName: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
      setFocusedIndex(0)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveDropdown(dropdownName)
      setFocusedIndex(0)
    }
  }

  useEffect(() => {
    if (activeDropdown && focusedIndex >= 0) {
      const dropdown = dropdownRefs.current[activeDropdown]
      if (dropdown) {
        const links = dropdown.querySelectorAll('a')
        links[focusedIndex]?.focus()
      }
    }
  }, [focusedIndex, activeDropdown])

  const capabilities = [
    { name: 'All Capabilities', path: '/services', isOverview: true },
    { name: 'M&A Advisory', path: '/services#ma-advisory', description: 'Buy-side and sell-side transaction advisory' },
    { name: 'Restructuring', path: '/services#restructuring', description: 'Operational and financial stabilization' },
    { name: 'Public Markets', path: '/services#public-markets', description: 'IPO readiness and investor relations' },
    { name: 'Accounting & Compliance', path: '/services#accounting', description: 'Financial reporting and controls' },
    { name: 'Buy/Sell Company', path: '/services#buy-sell', description: 'Confidential business transactions' },
  ]

  const industries = [
    { name: 'All Industries', path: '/services', isOverview: true },
    { name: 'Industrials', path: '/services', description: 'Manufacturing and distribution' },
    { name: 'Technology', path: '/services', description: 'Software and digital services' },
    { name: 'Healthcare', path: '/services', description: 'Medical devices and services' },
    { name: 'Financial Services', path: '/services', description: 'Banking and fintech' },
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
                ref={el => buttonRefs.current['capabilities'] = el}
                className={`flex items-center text-body-sm font-sans transition-colors duration-150 ${
                  location.pathname === '/services' ? 'text-neutral-950 font-medium' : 'text-neutral-600 hover:text-neutral-950'
                }`}
                aria-expanded={activeDropdown === 'capabilities'}
                aria-haspopup="menu"
                aria-controls="menu-capabilities"
                onKeyDown={(e) => handleButtonKeyDown(e, 'capabilities')}
              >
                Capabilities
                <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'capabilities' && (
                  <motion.div
                    ref={el => dropdownRefs.current['capabilities'] = el}
                    id="menu-capabilities"
                    role="menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white border border-neutral-200 rounded-sm shadow-elevation py-3"
                    onKeyDown={(e) => handleDropdownKeyDown(e, 'capabilities', capabilities)}
                  >
                    {capabilities.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        role="menuitem"
                        className={`block px-5 py-3 text-body-sm hover:bg-neutral-50 transition-colors duration-150 ${
                          item.isOverview 
                            ? 'text-navy-900 font-semibold border-b border-neutral-200 mb-2' 
                            : 'text-neutral-700 hover:text-neutral-950'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {!item.isOverview && (
                            <span className="text-gold-500 mt-0.5">•</span>
                          )}
                          <div className="flex-1">
                            <div className={item.isOverview ? 'text-body-md' : 'text-body-sm font-medium mb-0.5'}>
                              {item.name}
                            </div>
                            {item.description && (
                              <div className="text-body-xs text-neutral-500 leading-snug">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </div>
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
                ref={el => buttonRefs.current['industries'] = el}
                className="flex items-center text-body-sm font-sans text-neutral-600 hover:text-neutral-950 transition-colors duration-150"
                aria-expanded={activeDropdown === 'industries'}
                aria-haspopup="menu"
                aria-controls="menu-industries"
                onKeyDown={(e) => handleButtonKeyDown(e, 'industries')}
              >
                Industries
                <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    ref={el => dropdownRefs.current['industries'] = el}
                    id="menu-industries"
                    role="menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white border border-neutral-200 rounded-sm shadow-elevation py-3"
                    onKeyDown={(e) => handleDropdownKeyDown(e, 'industries', industries)}
                  >
                    {industries.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        role="menuitem"
                        className={`block px-5 py-3 text-body-sm hover:bg-neutral-50 transition-colors duration-150 ${
                          item.isOverview 
                            ? 'text-navy-900 font-semibold border-b border-neutral-200 mb-2' 
                            : 'text-neutral-700 hover:text-neutral-950'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {!item.isOverview && (
                            <span className="text-gold-500 mt-0.5">•</span>
                          )}
                          <div className="flex-1">
                            <div className={item.isOverview ? 'text-body-md' : 'text-body-sm font-medium mb-0.5'}>
                              {item.name}
                            </div>
                            {item.description && (
                              <div className="text-body-xs text-neutral-500 leading-snug">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </div>
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
                ref={el => buttonRefs.current['about'] = el}
                className={`flex items-center text-body-sm font-sans transition-colors duration-150 ${
                  location.pathname === '/about' || location.pathname === '/leadership' ? 'text-neutral-950 font-medium' : 'text-neutral-600 hover:text-neutral-950'
                }`}
                aria-expanded={activeDropdown === 'about'}
                aria-haspopup="menu"
                aria-controls="menu-about"
                onKeyDown={(e) => handleButtonKeyDown(e, 'about')}
              >
                About
                <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div
                    ref={el => dropdownRefs.current['about'] = el}
                    id="menu-about"
                    role="menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-neutral-200 rounded-sm shadow-elevation py-2"
                    onKeyDown={(e) => handleDropdownKeyDown(e, 'about', about)}
                  >
                    {about.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        role="menuitem"
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
                ref={el => buttonRefs.current['insights'] = el}
                className={`flex items-center text-body-sm font-sans transition-colors duration-150 ${
                  location.pathname === '/insights' || location.pathname === '/press' || location.pathname === '/downloads' ? 'text-neutral-950 font-medium' : 'text-neutral-600 hover:text-neutral-950'
                }`}
                aria-expanded={activeDropdown === 'insights'}
                aria-haspopup="menu"
                aria-controls="menu-insights"
                onKeyDown={(e) => handleButtonKeyDown(e, 'insights')}
              >
                Insights
                <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'insights' && (
                  <motion.div
                    ref={el => dropdownRefs.current['insights'] = el}
                    id="menu-insights"
                    role="menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-neutral-200 rounded-sm shadow-elevation py-2"
                    onKeyDown={(e) => handleDropdownKeyDown(e, 'insights', insights)}
                  >
                    {insights.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        role="menuitem"
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
