import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })))
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })))

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 transition-all duration-300 ${
        isScrolled ? 'h-14' : 'h-20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-container mx-auto px-6 lg:px-12 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-sans font-semibold text-neutral-950 tracking-tight">
              Orvant Services
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className={`text-body-md font-sans transition-colors duration-150 ${
                isActive('/') ? 'text-neutral-950' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-body-md font-sans transition-colors duration-150 ${
                isActive('/services') ? 'text-neutral-950' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-accent-600 text-white text-body-md font-sans font-medium rounded-sm hover:bg-accent-500 transition-all duration-150 hover:shadow-elevation"
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-neutral-950"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden border-t border-neutral-200 bg-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-6 py-6 space-y-4">
            <Link
              to="/"
              className={`block px-4 py-3 text-body-md font-sans rounded-sm ${
                isActive('/') ? 'bg-neutral-100 text-neutral-950' : 'text-neutral-600 hover:bg-neutral-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`block px-4 py-3 text-body-md font-sans rounded-sm ${
                isActive('/services') ? 'bg-neutral-100 text-neutral-950' : 'text-neutral-600 hover:bg-neutral-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 bg-accent-600 text-white text-body-md font-sans font-medium rounded-sm text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900">
      <div className="max-w-container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="text-xl font-sans font-semibold text-white tracking-tight mb-4 block">
              Orvant Services
            </span>
            <p className="text-body-md text-neutral-400 max-w-md">
              Advisory and capital for complex transitions. M&A, restructuring, and public markets advisory for growth and special situations.
            </p>
          </div>
          <div>
            <h3 className="text-white font-sans font-medium text-body-md mb-4">Services</h3>
            <ul className="space-y-3 text-body-sm">
              <li><Link to="/services" className="hover:text-white transition-colors duration-150">Accounting</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-150">M&A Advisory</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-150">Restructuring</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-150">Buy/Sell Company</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors duration-150">Public Company Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-sans font-medium text-body-md mb-4">Contact</h3>
            <p className="text-body-sm text-neutral-400 mb-4">
              Discuss how we can support your objectives.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2.5 bg-accent-600 text-white text-body-sm font-sans font-medium rounded-sm hover:bg-accent-500 transition-all duration-150"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="border-t border-neutral-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-body-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Orvant Services. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Securities offered through registered representatives. Member FINRA/SIPC.</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-grow pt-20">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-pulse text-neutral-600">Loading...</div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
