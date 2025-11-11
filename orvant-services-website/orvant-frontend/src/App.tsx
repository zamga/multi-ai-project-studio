import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navigation } from './components/Navigation'
import { FloatingCTA } from './components/FloatingCTA'
import { FloatingCTAButton } from './components/FloatingCTAButton'
import { StickyFooter } from './components/StickyFooter'
import { ScrollProgress, BackToTop } from './components/ScrollProgress'
import { CookieConsent, ManageCookies } from './components/CookieConsent'
import { trackNewsletterSubscribe } from './utils/analytics'
import './App.css'

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })))
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })))
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })))
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })))
const Leadership = lazy(() => import('./pages/Leadership').then(module => ({ default: module.Leadership })))
const Insights = lazy(() => import('./pages/Insights').then(module => ({ default: module.Insights })))
const Tombstones = lazy(() => import('./pages/Tombstones').then(module => ({ default: module.Tombstones })))
const Press = lazy(() => import('./pages/Press').then(module => ({ default: module.Press })))
const Downloads = lazy(() => import('./pages/Downloads').then(module => ({ default: module.Downloads })))
const Resources = lazy(() => import('./pages/Resources').then(module => ({ default: module.Resources })))
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })))
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })))


function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900">
      <div className="max-w-container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <span className="text-xl font-sans font-semibold text-white tracking-tight mb-4 block">
              Orvantt Services
            </span>
            <p className="text-body-md text-neutral-300 max-w-md mb-4 font-medium">
              Orvantt Services provides senior-led advisory for M&A, restructuring, and public markets.
            </p>
            <p className="text-body-sm text-neutral-400 max-w-md mb-6">
              Independent thinking, discreet execution, and outcomes that hold up in the boardroom.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/orvantt-services" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-gold-500 transition-colors duration-220" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-sans font-medium text-body-md mb-4">Capabilities</h3>
            <ul className="space-y-3 text-body-sm">
              <li><Link to="/services#ma-advisory" className="hover:text-white transition-colors duration-220">M&A Advisory</Link></li>
              <li><Link to="/services#restructuring" className="hover:text-white transition-colors duration-220">Restructuring</Link></li>
              <li><Link to="/services#public-markets" className="hover:text-white transition-colors duration-220">Public Markets</Link></li>
              <li><Link to="/services#accounting" className="hover:text-white transition-colors duration-220">Accounting</Link></li>
              <li><Link to="/services#buy-sell" className="hover:text-white transition-colors duration-220">Buy/Sell Company</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-sans font-medium text-body-md mb-4">Firm</h3>
            <ul className="space-y-3 text-body-sm">
              <li><Link to="/about" className="hover:text-white transition-colors duration-220">About</Link></li>
              <li><Link to="/leadership" className="hover:text-white transition-colors duration-220">Leadership</Link></li>
              <li><Link to="/tombstones" className="hover:text-white transition-colors duration-220">Track Record</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors duration-220">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors duration-220">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-sans font-medium text-body-md mb-4">Contact</h3>
            <p className="text-body-sm text-neutral-400 mb-4">
              filipberg@orvanttservices.com
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2.5 bg-gold-600 text-white text-body-sm font-sans font-medium rounded-sm hover:bg-gold-500 transition-all duration-220 hover:shadow-elevation"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        {/* Newsletter signup */}
        <div className="border-t border-neutral-900 mt-12 pt-12">
          <div className="max-w-2xl">
            <h3 className="text-white font-sans font-medium text-body-lg mb-2">Stay informed</h3>
            <p className="text-body-sm text-neutral-400 mb-6">
              Receive insights on M&A, restructuring, and public markets. Unsubscribe anytime.
            </p>
            <form 
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault()
                trackNewsletterSubscribe('footer')
                alert('Thank you for subscribing! Newsletter functionality coming soon.')
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors duration-220"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold-600 text-white text-body-sm font-sans font-medium rounded-sm hover:bg-gold-500 transition-all duration-220 hover:shadow-elevation whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-body-xs text-neutral-500 mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-body-sm text-neutral-500 mb-6">
            <p>&copy; {new Date().getFullYear()} Orvantt Services. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors duration-220">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-220">Terms of Service</Link>
              <ManageCookies />
            </div>
          </div>
          
          {/* Regulatory badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-neutral-900">
            <div className="text-neutral-600 text-body-xs">
              Independent Advisory Firm
            </div>
            <span className="text-neutral-800">·</span>
            <div className="text-neutral-600 text-body-xs">
              Confidential Services
            </div>
            <span className="text-neutral-800">·</span>
            <div className="text-neutral-600 text-body-xs">
              Professional Standards
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white">
          <ScrollProgress />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy-900 focus:text-white focus:rounded-sm">
            Skip to main content
          </a>
          <Navigation />
          <main id="main-content" className="flex-grow pt-16">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse text-neutral-600">Loading...</div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<Insights />} />
                <Route path="/tombstones" element={<Tombstones />} />
                <Route path="/press" element={<Press />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingCTA />
          <FloatingCTAButton />
          <StickyFooter />
          <BackToTop />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  )
}

const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })))

export default App
