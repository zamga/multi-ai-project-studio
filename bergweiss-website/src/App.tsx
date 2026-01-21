import { useState, useEffect } from 'react'
import './App.css'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Menu, X, ChevronDown } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:info@berg-weiss.com?subject=Confidential Inquiry from ${formData.name} - ${formData.company}&body=Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AInterested in: ${formData.interest}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  const services = [
    {
      title: "M&A Advisory",
      description: "Confidential sell-side and buy-side processes maximizing shareholder value."
    },
    {
      title: "Valuation Opinions",
      description: "Independent, market-driven valuations for strategic decision-making."
    },
    {
      title: "Buyer & Investor Introductions",
      description: "Exclusive B2B connections to strategic acquirers across Europe."
    },
    {
      title: "Market Intelligence",
      description: "In-depth sector research and opportunity mapping."
    },
    {
      title: "Capital Markets / IPO",
      description: "Introductions to regulated partners for public pathways. Partner-led."
    },
    {
      title: "SPAC Transactions",
      description: "Unregulated coaching and sponsor introductions. Partner-led."
    }
  ]

  const transactions = [
    {
      title: "Slovenian IT Platform",
      description: "Exit at 11x EBITDA to German strategic buyer."
    },
    {
      title: "CEE Manufacturing",
      description: "Partial recapitalization preserving owner control."
    },
    {
      title: "Digital Services Firm",
      description: "Valuation and intros leading to 10x multiple."
    },
    {
      title: "Multiple Mid-Market Deals",
      description: "Premium multiples in active sectors."
    }
  ]

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0a1628' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a1628]/95 backdrop-blur-sm border-b border-[#d4af37]/20' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0">
              <span className="font-serif text-2xl tracking-widest" style={{ color: '#d4af37' }}>BERGWEISS</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {['Home', 'Services', 'About', 'Transactions', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-light tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors duration-300 uppercase"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#d4af37] p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-[#d4af37]/20">
            <div className="px-6 py-6 space-y-4">
              {['Home', 'Services', 'About', 'Transactions', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-400 hover:text-[#d4af37] py-3 transition-colors uppercase tracking-widest text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/london-skyline.jpg" 
            alt="London Financial District"
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-12">
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider" style={{ color: '#d4af37' }}>
                BERGWEISS
              </h1>
              <div className="w-32 h-px mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
            </div>
            
            {/* Subheading */}
            <h2 className="text-lg md:text-xl text-gray-400 font-light tracking-widest uppercase">
              Discreet Corporate Finance Advisory
            </h2>
            
            {/* Tagline */}
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed max-w-3xl mx-auto">
              Unlocking Premium Valuations for European Private Companies
            </p>

            {/* Sub-tagline */}
            <p className="text-sm md:text-base text-gray-500 tracking-wide max-w-2xl mx-auto">
              Exclusive Access to International Buyers&nbsp;&nbsp;|&nbsp;&nbsp;8–12x Multiples in Current Market
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative px-12 py-4 border-2 transition-all duration-500 hover:bg-[#d4af37] hover:border-[#d4af37]"
                style={{ borderColor: '#d4af37' }}
              >
                <span className="text-sm tracking-widest uppercase group-hover:text-[#0a1628]" style={{ color: '#d4af37' }}>
                  Request Confidential Consultation
                </span>
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-6 h-6 text-gray-600 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32" style={{ backgroundColor: '#0d1f35' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: '#d4af37' }}>
              Our Advisory Services
            </h2>
            <div className="w-24 h-px mx-auto mb-8" style={{ backgroundColor: '#d4af37' }}></div>
            <p className="text-gray-400 text-lg font-light tracking-wide">
              Institutional-Grade Expertise with Boutique Discretion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 border border-gray-800 hover:border-[#d4af37]/50 transition-all duration-500"
              >
                <h3 className="font-serif text-xl text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm tracking-widest uppercase hover:text-[#d4af37] transition-colors duration-300"
              style={{ color: '#d4af37' }}
            >
              Explore Strategic Options →
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32" style={{ backgroundColor: '#0a1628' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: '#d4af37' }}>
              About Bergweiss Ltd
            </h2>
            <div className="w-24 h-px mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
          </div>

          <div className="space-y-8 text-center">
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              <span className="font-serif" style={{ color: '#d4af37' }}>BERGWEISS LTD</span> is a London-based independent corporate finance boutique, registered in England & Wales. Headquartered in Covent Garden, we specialize in discreet, high-value transactions for private company owners across Europe.
            </p>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Drawing on a global network of senior advisors, industry specialists, and regulated partners, we deliver superior outcomes with absolute confidentiality and precision.
            </p>
            
            <div className="py-8">
              <p className="font-serif text-2xl text-white italic">
                "We selectively engage only 4–6 mandates annually to ensure dedicated senior attention and exceptional results."
              </p>
            </div>

            {/* Europe Map Placeholder - Abstract representation */}
            <div className="pt-8">
              <div className="relative w-full max-w-md mx-auto h-48 border border-gray-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ backgroundColor: '#d4af37' }}></div>
                    <span className="text-xs text-gray-500 tracking-widest uppercase">London</span>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <path d="M150,80 Q200,60 250,80 T350,100" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.3"/>
                    <path d="M100,100 Q150,90 200,100 T300,110" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.3"/>
                    <path d="M120,120 Q180,100 240,120 T340,130" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.3"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 tracking-wide">Serving clients across Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transactions Section */}
      <section id="transactions" className="py-32" style={{ backgroundColor: '#0d1f35' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: '#d4af37' }}>
              Selected Transactions
            </h2>
            <div className="w-24 h-px mx-auto mb-8" style={{ backgroundColor: '#d4af37' }}></div>
            <p className="text-gray-500 text-sm tracking-wide">
              Anonymous examples of achieved outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transactions.map((transaction, index) => (
              <div 
                key={index} 
                className="p-8 border-l-2 hover:border-l-[#d4af37] transition-all duration-500"
                style={{ borderColor: '#1a3050' }}
              >
                <h3 className="font-serif text-lg text-white mb-3">
                  {transaction.title}
                </h3>
                <p className="text-gray-500 font-light">
                  {transaction.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 border border-gray-800 text-center">
            <p className="text-gray-600 text-xs tracking-wide italic">
              Past performance is not indicative of future results. All transaction details are anonymized for client confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32" style={{ backgroundColor: '#0a1628' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: '#d4af37' }}>
              Confidential Consultation
            </h2>
            <div className="w-24 h-px mx-auto mb-8" style={{ backgroundColor: '#d4af37' }}></div>
            <p className="text-gray-400 text-lg font-light">
              Discuss your strategic options in complete discretion.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-400 text-sm tracking-wide uppercase">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 focus:border-[#d4af37] rounded-none h-12"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-400 text-sm tracking-wide uppercase">Company *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 focus:border-[#d4af37] rounded-none h-12"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-400 text-sm tracking-wide uppercase">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 focus:border-[#d4af37] rounded-none h-12"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-400 text-sm tracking-wide uppercase">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 focus:border-[#d4af37] rounded-none h-12"
                    placeholder="+44..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest" className="text-gray-400 text-sm tracking-wide uppercase">Interested in</Label>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full h-12 px-3 bg-transparent border border-gray-700 text-white focus:border-[#d4af37] outline-none"
                >
                  <option value="" className="bg-[#0a1628]">Select an option</option>
                  <option value="Valuation" className="bg-[#0a1628]">Valuation</option>
                  <option value="M&A" className="bg-[#0a1628]">M&A</option>
                  <option value="Other" className="bg-[#0a1628]">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-400 text-sm tracking-wide uppercase">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-transparent border-gray-700 text-white placeholder:text-gray-600 focus:border-[#d4af37] rounded-none min-h-32"
                  placeholder="Tell us about your situation..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 border-2 transition-all duration-500 hover:bg-[#d4af37] hover:border-[#d4af37] group"
                style={{ borderColor: '#d4af37' }}
              >
                <span className="text-sm tracking-widest uppercase group-hover:text-[#0a1628]" style={{ color: '#d4af37' }}>
                  Submit Inquiry
                </span>
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                London Office: 71-75 Shelton Street, Covent Garden, London WC2H 9JQ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t" style={{ backgroundColor: '#0a1628', borderColor: '#1a3050' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-serif text-xl tracking-widest" style={{ color: '#d4af37' }}>BERGWEISS</span>
          </div>

          <div className="flex justify-center space-x-8 mb-12">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm tracking-wide transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm tracking-wide transition-colors">
              Terms
            </a>
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm">
              BERGWEISS LTD | Registered in England & Wales | Company No. 12345678
            </p>
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto p-6 border border-gray-800">
            <p className="text-gray-600 text-xs leading-relaxed text-center">
              Bergweiss Ltd provides independent advisory services and is not a regulated entity. We do not offer or sell securities. Regulated services (e.g., capital markets, SPAC) are facilitated via introductions to licensed partners. No guarantees of outcomes. All discussions are confidential and non-binding.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 text-xs">
              © {new Date().getFullYear()} Bergweiss Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
