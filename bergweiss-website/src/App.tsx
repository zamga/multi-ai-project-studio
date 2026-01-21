import { useState, useEffect, useRef } from 'react'
import './App.css'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Menu, X, ChevronDown, TrendingUp } from 'lucide-react'

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

  const revealRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
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
      description: "Maximizing shareholder value through competitive international processes."
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
    <div className="min-h-screen text-white" style={{ backgroundColor: '#050505' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#050505]/95 backdrop-blur-sm border-b border-[#d4af37]/20' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className="font-serif text-2xl tracking-widest text-hover-glow" style={{ color: '#d4af37' }}>BERGWEISS</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {['Home', 'Services', 'About', 'Transactions', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-xs font-light tracking-widest text-gray-500 hover:text-[#d4af37] transition-all duration-300 uppercase text-hover-glow"
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
          <div className="md:hidden bg-[#050505]/98 backdrop-blur-md border-t border-[#d4af37]/20">
            <div className="px-6 py-6 space-y-4">
              {['Home', 'Services', 'About', 'Transactions', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-500 hover:text-[#d4af37] py-3 transition-colors uppercase tracking-widest text-sm"
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
        {/* Background with golden glow overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/london-skyline.jpg" 
            alt="London Financial District"
            className="w-full h-full object-cover opacity-20"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/95 to-[#050505]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/5 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-10">
            {/* Main heading */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-wider animate-pulse-glow" style={{ color: '#d4af37' }}>
                BERGWEISS
              </h1>
              <div className="w-40 h-px mx-auto golden-line"></div>
              <p className="text-xs tracking-widest text-gray-600 uppercase">London</p>
            </div>
            
            {/* Subheading */}
            <h2 className="text-base md:text-lg text-gray-500 font-light tracking-widest uppercase animate-fade-in animate-delay-200">
              Discreet Corporate Finance Advisory
            </h2>
            
            {/* Tagline */}
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed max-w-3xl mx-auto animate-fade-in animate-delay-300">
              Unlocking Premium Valuations and Strategic Exits Across Europe
            </p>

            {/* Sub-tagline */}
            <p className="text-sm text-gray-600 tracking-wide max-w-2xl mx-auto animate-fade-in animate-delay-400">
              Exclusive International Networks&nbsp;&nbsp;|&nbsp;&nbsp;Current Market Multiples 8–12x
            </p>

            {/* CTA Button */}
            <div className="pt-12 animate-fade-in animate-delay-500">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-elite group relative px-14 py-5 border-2 transition-all duration-500 hover:bg-[#d4af37] hover:border-[#d4af37]"
                style={{ borderColor: '#d4af37' }}
              >
                <span className="text-sm tracking-widest uppercase group-hover:text-[#050505] transition-colors" style={{ color: '#d4af37' }}>
                  Initiate Confidential Consultation
                </span>
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-5 h-5 text-[#d4af37]/50 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Golden Line Separator */}
      <div className="golden-line w-full"></div>

      {/* Services Section */}
      <section id="services" className="py-40" style={{ backgroundColor: '#080808' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div 
            ref={(el) => { revealRefs.current[0] = el }}
            className="text-center mb-24 reveal"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: '#d4af37' }}>
              Advisory Services
            </h2>
            <div className="w-24 golden-line mx-auto mb-8"></div>
            <p className="text-gray-500 text-base font-light tracking-widest uppercase">
              Institutional Expertise. Absolute Discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div 
                key={index}
                ref={(el) => { revealRefs.current[index + 1] = el }}
                className="reveal elite-card group p-10 bg-[#0a0a0a] transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-serif text-xl text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div 
            ref={(el) => { revealRefs.current[7] = el }}
            className="text-center mt-20 reveal"
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm tracking-widest uppercase text-hover-glow transition-all duration-300"
              style={{ color: '#d4af37' }}
            >
              Explore Strategic Options →
            </button>
          </div>
        </div>
      </section>

      {/* Golden Line Separator */}
      <div className="golden-line w-full"></div>

      {/* About Section */}
      <section id="about" className="py-40" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div 
            ref={(el) => { revealRefs.current[8] = el }}
            className="text-center mb-20 reveal"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: '#d4af37' }}>
              About Bergweiss Ltd
            </h2>
            <div className="w-24 golden-line mx-auto"></div>
          </div>

          <div 
            ref={(el) => { revealRefs.current[9] = el }}
            className="space-y-10 text-center reveal"
          >
            <p className="text-gray-400 text-lg font-light leading-loose">
              <span className="font-serif" style={{ color: '#d4af37' }}>BERGWEISS LTD</span> is a London-based independent corporate finance boutique, registered in England & Wales. Headquartered in Covent Garden, we specialize in discreet, high-value transactions for private company owners across Europe.
            </p>
            
            <p className="text-gray-500 text-lg font-light leading-loose">
              Drawing on a global network of senior advisors, industry specialists, and regulated partners, we deliver superior outcomes with absolute confidentiality and precision.
            </p>

            <p className="text-gray-500 text-lg font-light leading-loose">
              Precision engineering for high-value outcomes in CEE and beyond.
            </p>
            
            <div className="py-12">
              <p className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed">
                "We selectively engage only 4–6 mandates annually to ensure dedicated senior attention and exceptional results."
              </p>
            </div>

            {/* Europe Map with Golden Connections */}
            <div 
              ref={(el) => { revealRefs.current[10] = el }}
              className="pt-12 reveal"
            >
              <div className="relative w-full max-w-lg mx-auto h-56 border border-[#d4af37]/10 overflow-hidden bg-[#080808]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-4 h-4 rounded-full mx-auto mb-3 animate-pulse-glow" style={{ backgroundColor: '#d4af37' }}></div>
                    <span className="text-xs text-[#d4af37] tracking-widest uppercase font-light">London</span>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-30">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <path d="M50,100 Q100,80 150,90 T200,100" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.5"/>
                    <path d="M200,100 Q250,90 300,100 T350,110" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.5"/>
                    <path d="M200,100 Q220,120 260,130 T320,140" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.5"/>
                    <path d="M200,100 Q180,70 220,60 T280,70" stroke="#d4af37" strokeWidth="0.5" fill="none" opacity="0.5"/>
                    <circle cx="80" cy="90" r="2" fill="#d4af37" opacity="0.3"/>
                    <circle cx="150" cy="85" r="2" fill="#d4af37" opacity="0.3"/>
                    <circle cx="280" cy="75" r="2" fill="#d4af37" opacity="0.3"/>
                    <circle cx="320" cy="130" r="2" fill="#d4af37" opacity="0.3"/>
                    <circle cx="260" cy="140" r="2" fill="#d4af37" opacity="0.3"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 text-xs mt-6 tracking-widest uppercase">Serving clients across Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Line Separator */}
      <div className="golden-line w-full"></div>

      {/* Transactions Section */}
      <section id="transactions" className="py-40" style={{ backgroundColor: '#080808' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div 
            ref={(el) => { revealRefs.current[11] = el }}
            className="text-center mb-20 reveal"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: '#d4af37' }}>
              Selected Transactions
            </h2>
            <div className="w-24 golden-line mx-auto mb-8"></div>
            <p className="text-gray-600 text-xs tracking-widest uppercase">
              Anonymous examples of achieved outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transactions.map((transaction, index) => (
              <div 
                key={index}
                ref={(el) => { revealRefs.current[index + 12] = el }}
                className="reveal group p-10 bg-[#0a0a0a] border-l-2 border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 hover-glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-lg text-white group-hover:text-[#d4af37] transition-colors">
                    {transaction.title}
                  </h3>
                  <TrendingUp className="w-5 h-5 text-[#d4af37]/50 group-hover:text-[#d4af37] transition-colors" />
                </div>
                <p className="text-gray-600 font-light">
                  {transaction.description}
                </p>
              </div>
            ))}
          </div>

          <div 
            ref={(el) => { revealRefs.current[16] = el }}
            className="mt-20 p-8 border border-[#d4af37]/10 text-center reveal"
          >
            <p className="text-gray-700 text-xs tracking-wide italic">
              Past performance is not indicative of future results. All transaction details are anonymized for client confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Golden Line Separator */}
      <div className="golden-line w-full"></div>

      {/* Contact Section */}
      <section id="contact" className="py-40" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div 
            ref={(el) => { revealRefs.current[17] = el }}
            className="text-center mb-20 reveal"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: '#d4af37' }}>
              Confidential Inquiry
            </h2>
            <div className="w-24 golden-line mx-auto mb-8"></div>
            <p className="text-gray-500 text-base font-light">
              Discuss your strategic options in complete discretion.
            </p>
          </div>

          <div 
            ref={(el) => { revealRefs.current[18] = el }}
            className="max-w-xl mx-auto reveal"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-gray-600 text-xs tracking-widest uppercase">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-[#0a0a0a] border-[#d4af37]/20 text-white placeholder:text-gray-700 focus:border-[#d4af37] rounded-none h-14 hover-glow"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="company" className="text-gray-600 text-xs tracking-widest uppercase">Company *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="bg-[#0a0a0a] border-[#d4af37]/20 text-white placeholder:text-gray-700 focus:border-[#d4af37] rounded-none h-14 hover-glow"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-gray-600 text-xs tracking-widest uppercase">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-[#0a0a0a] border-[#d4af37]/20 text-white placeholder:text-gray-700 focus:border-[#d4af37] rounded-none h-14 hover-glow"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-gray-600 text-xs tracking-widest uppercase">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-[#0a0a0a] border-[#d4af37]/20 text-white placeholder:text-gray-700 focus:border-[#d4af37] rounded-none h-14 hover-glow"
                    placeholder="+44..."
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="interest" className="text-gray-600 text-xs tracking-widest uppercase">Interested in</Label>
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

      {/* Golden Line Separator */}
      <div className="golden-line w-full"></div>

      {/* Footer */}
      <footer className="py-20" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-serif text-2xl tracking-widest text-hover-glow" style={{ color: '#d4af37' }}>BERGWEISS</span>
          </div>

          <div className="flex justify-center space-x-12 mb-16">
            <a href="#" className="text-gray-700 hover:text-[#d4af37] text-xs tracking-widest uppercase transition-all duration-300 text-hover-glow">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-700 hover:text-[#d4af37] text-xs tracking-widest uppercase transition-all duration-300 text-hover-glow">
              Terms
            </a>
          </div>

          <div className="text-center mb-12">
            <p className="text-gray-700 text-xs tracking-widest">
              BERGWEISS LTD | Registered in England & Wales | Company No. 12345678
            </p>
          </div>

          {/* Golden Line */}
          <div className="w-48 golden-line mx-auto mb-12"></div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto p-8 border border-[#d4af37]/10">
            <p className="text-gray-700 text-xs leading-loose text-center">
              Bergweiss Ltd provides independent advisory services and is not a regulated entity. We do not offer or sell securities. Regulated services (e.g., capital markets, SPAC) are facilitated via introductions to licensed partners. No guarantees of outcomes. All discussions are confidential and non-binding.
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-800 text-xs tracking-wide">
              © {new Date().getFullYear()} Bergweiss Ltd. All rights reserved.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-800 text-xs tracking-widest uppercase">
              Discussions by appointment only
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
