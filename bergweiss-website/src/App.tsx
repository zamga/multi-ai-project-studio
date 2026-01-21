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
    <div className="min-h-screen text-white" style={{ backgroundColor: '#000000' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-[#d4af37]/20' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex-shrink-0">
              <span className="font-serif text-2xl tracking-widest text-hover-glow" style={{ color: '#d4af37' }}>BERGWEISS</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {['Home', 'Services', 'About', 'Transactions', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-link-elite text-xs font-light tracking-widest text-gray-500 hover:text-[#d4af37] transition-all duration-400 uppercase"
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
          <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-[#d4af37]/20">
            <div className="px-6 py-8 space-y-6">
              {['Home', 'Services', 'About', 'Transactions', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-500 hover:text-[#d4af37] py-4 transition-colors uppercase tracking-widest text-sm nav-link-elite"
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
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/5 via-transparent to-transparent opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-12">
            {/* Main heading */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="font-serif text-7xl md:text-9xl lg:text-[10rem] tracking-wider animate-pulse-glow" style={{ color: '#d4af37' }}>
                BERGWEISS
              </h1>
              <div className="w-48 h-px mx-auto golden-line"></div>
              <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">London</p>
            </div>
            
            {/* Subheading */}
            <h2 className="text-lg md:text-xl text-gray-400 font-light tracking-[0.2em] uppercase animate-fade-in animate-delay-200">
              Discreet Corporate Finance Advisory
            </h2>
            
            {/* Tagline */}
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-relaxed max-w-4xl mx-auto animate-fade-in animate-delay-300">
              Unlocking Premium Valuations and Strategic Exits Across Europe
            </p>

            {/* Sub-tagline */}
            <p className="text-base text-gray-500 tracking-wide max-w-2xl mx-auto animate-fade-in animate-delay-400">
              Exclusive International Networks&nbsp;&nbsp;|&nbsp;&nbsp;Current Market Multiples 8–12x
            </p>

            {/* CTA Button */}
            <div className="pt-16 animate-fade-in animate-delay-500">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-elite group relative px-16 py-6 border-2 transition-all duration-500 hover:bg-[#d4af37] hover:border-[#d4af37]"
                style={{ borderColor: '#d4af37' }}
              >
                <span className="text-sm tracking-[0.2em] uppercase group-hover:text-black transition-colors" style={{ color: '#d4af37' }}>
                  Initiate Confidential Consultation
                </span>
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-6 h-6 text-[#d4af37]/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Golden Line Separator */}
      <div className="golden-line w-full"></div>

      {/* Services Section */}
      <section id="services" className="py-48" style={{ backgroundColor: '#030303' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div 
            ref={(el) => { revealRefs.current[0] = el }}
            className="text-center mb-28 reveal"
          >
            <h2 className="font-serif text-5xl md:text-6xl mb-8" style={{ color: '#d4af37' }}>
              Advisory Services
            </h2>
            <div className="w-32 golden-line mx-auto mb-10"></div>
            <p className="text-gray-400 text-lg font-light tracking-[0.2em] uppercase">
              Institutional Expertise. Absolute Discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                ref={(el) => { revealRefs.current[index + 1] = el }}
                className="reveal elite-card group p-12 bg-[#050505] transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-serif text-2xl text-white mb-5 group-hover:text-[#d4af37] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div 
            ref={(el) => { revealRefs.current[7] = el }}
            className="text-center mt-24 reveal"
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-base tracking-[0.2em] uppercase text-hover-glow transition-all duration-300"
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
      <section id="about" className="py-48" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div 
            ref={(el) => { revealRefs.current[8] = el }}
            className="text-center mb-24 reveal"
          >
            <h2 className="font-serif text-5xl md:text-6xl mb-8" style={{ color: '#d4af37' }}>
              About Bergweiss Ltd
            </h2>
            <div className="w-32 golden-line mx-auto"></div>
          </div>

          <div 
            ref={(el) => { revealRefs.current[9] = el }}
            className="space-y-12 text-center reveal"
          >
            <p className="text-gray-400 text-xl font-light leading-loose">
              <span className="font-serif" style={{ color: '#d4af37' }}>BERGWEISS LTD</span> is a London-based independent corporate finance boutique, registered in England & Wales. Headquartered in Covent Garden, we specialize in discreet, high-value transactions for private company owners across Europe.
            </p>
            
            <p className="text-gray-500 text-xl font-light leading-loose">
              Drawing on a global network of senior advisors, industry specialists, and regulated partners, we deliver superior outcomes with absolute confidentiality and precision.
            </p>

            <p className="text-gray-500 text-xl font-light leading-loose">
              Precision engineering for high-value outcomes in CEE and beyond.
            </p>
            
            <div className="py-16">
              <p className="font-serif text-3xl md:text-4xl text-white italic leading-relaxed">
                "We selectively engage only 4–6 mandates annually to ensure dedicated senior attention and exceptional results."
              </p>
            </div>

            {/* Europe Map with Golden Connections */}
            <div 
              ref={(el) => { revealRefs.current[10] = el }}
              className="pt-16 reveal"
            >
              <div className="relative w-full max-w-xl mx-auto h-64 border border-[#d4af37]/20 overflow-hidden bg-[#030303]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-5 h-5 rounded-full mx-auto mb-4 animate-pulse-glow" style={{ backgroundColor: '#d4af37' }}></div>
                    <span className="text-sm text-[#d4af37] tracking-[0.2em] uppercase font-light">London</span>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-40">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <path d="M50,100 Q100,80 150,90 T200,100" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.6"/>
                    <path d="M200,100 Q250,90 300,100 T350,110" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.6"/>
                    <path d="M200,100 Q220,120 260,130 T320,140" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.6"/>
                    <path d="M200,100 Q180,70 220,60 T280,70" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.6"/>
                    <circle cx="80" cy="90" r="3" fill="#d4af37" opacity="0.4"/>
                    <circle cx="150" cy="85" r="3" fill="#d4af37" opacity="0.4"/>
                    <circle cx="280" cy="75" r="3" fill="#d4af37" opacity="0.4"/>
                    <circle cx="320" cy="130" r="3" fill="#d4af37" opacity="0.4"/>
                    <circle cx="260" cy="140" r="3" fill="#d4af37" opacity="0.4"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-8 tracking-[0.2em] uppercase">Serving clients across Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Line Separator */}
      <div className="golden-line w-full"></div>

      {/* Transactions Section */}
      <section id="transactions" className="py-48" style={{ backgroundColor: '#030303' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div 
            ref={(el) => { revealRefs.current[11] = el }}
            className="text-center mb-24 reveal"
          >
            <h2 className="font-serif text-5xl md:text-6xl mb-8" style={{ color: '#d4af37' }}>
              Selected Transactions
            </h2>
            <div className="w-32 golden-line mx-auto mb-10"></div>
            <p className="text-gray-500 text-sm tracking-[0.2em] uppercase">
              Anonymous examples of achieved outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {transactions.map((transaction, index) => (
              <div 
                key={index}
                ref={(el) => { revealRefs.current[index + 12] = el }}
                className="reveal group p-12 bg-[#050505] border-l-2 border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-500 hover-glow"
              >
                <div className="flex items-start justify-between mb-5">
                  <h3 className="font-serif text-xl text-white group-hover:text-[#d4af37] transition-colors">
                    {transaction.title}
                  </h3>
                  <TrendingUp className="w-6 h-6 text-[#d4af37]/50 group-hover:text-[#d4af37] transition-colors" />
                </div>
                <p className="text-gray-500 font-light text-lg">
                  {transaction.description}
                </p>
              </div>
            ))}
          </div>

          <div 
            ref={(el) => { revealRefs.current[16] = el }}
            className="mt-24 p-10 border border-[#d4af37]/15 text-center reveal"
          >
            <p className="text-gray-600 text-sm tracking-wide italic">
              Past performance is not indicative of future results. All transaction details are anonymized for client confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Golden Line Separator */}
      <div className="golden-line w-full"></div>

      {/* Contact Section */}
      <section id="contact" className="py-48" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div 
            ref={(el) => { revealRefs.current[17] = el }}
            className="text-center mb-24 reveal"
          >
            <h2 className="font-serif text-5xl md:text-6xl mb-8" style={{ color: '#d4af37' }}>
              Confidential Inquiry
            </h2>
            <div className="w-32 golden-line mx-auto mb-10"></div>
            <p className="text-gray-400 text-lg font-light">
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
                  className="w-full h-14 px-4 bg-[#050505] border border-[#d4af37]/20 text-white focus:border-[#d4af37] outline-none transition-all duration-300 hover-glow"
                >
                  <option value="" className="bg-black">Select an option</option>
                  <option value="Valuation" className="bg-black">Valuation</option>
                  <option value="M&A" className="bg-black">M&A</option>
                  <option value="Other" className="bg-black">Other</option>
                </select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-gray-600 text-xs tracking-widest uppercase">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-[#050505] border-[#d4af37]/20 text-white placeholder:text-gray-700 focus:border-[#d4af37] rounded-none min-h-40 hover-glow"
                  placeholder="Tell us about your situation..."
                />
              </div>

              <button 
                type="submit"
                className="btn-elite w-full py-5 border-2 transition-all duration-500 hover:bg-[#d4af37] hover:border-[#d4af37] group"
                style={{ borderColor: '#d4af37' }}
              >
                <span className="text-sm tracking-[0.2em] uppercase group-hover:text-black" style={{ color: '#d4af37' }}>
                  Submit Inquiry
                </span>
              </button>
            </form>

            <div className="mt-16 text-center">
              <p className="text-gray-500 text-base">
                London Office: 71-75 Shelton Street, Covent Garden, London WC2H 9JQ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Line Separator */}
      <div className="golden-line w-full"></div>

      {/* Footer */}
      <footer className="py-24" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="font-serif text-3xl tracking-widest text-hover-glow animate-pulse-glow" style={{ color: '#d4af37' }}>BERGWEISS</span>
          </div>

          <div className="flex justify-center space-x-16 mb-20">
            <a href="#" className="nav-link-elite text-gray-600 hover:text-[#d4af37] text-xs tracking-[0.2em] uppercase transition-all duration-400">
              Privacy Policy
            </a>
            <a href="#" className="nav-link-elite text-gray-600 hover:text-[#d4af37] text-xs tracking-[0.2em] uppercase transition-all duration-400">
              Terms
            </a>
          </div>

          <div className="text-center mb-16">
            <p className="text-gray-600 text-sm tracking-[0.15em]">
              BERGWEISS LTD | Registered in England & Wales | Company No. 12345678
            </p>
          </div>

          {/* Golden Line */}
          <div className="w-64 golden-line mx-auto mb-16"></div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto p-10 border border-[#d4af37]/15 bg-[#030303]">
            <p className="text-gray-600 text-sm leading-loose text-center">
              Bergweiss Ltd provides independent advisory services and is not a regulated entity. We do not offer or sell securities. Regulated services (e.g., capital markets, SPAC) are facilitated via introductions to licensed partners. No guarantees of outcomes. All discussions are confidential and non-binding.
            </p>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-700 text-sm tracking-wide">
              © {new Date().getFullYear()} Bergweiss Ltd. All rights reserved.
            </p>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 text-sm tracking-[0.2em] uppercase">
              Discussions by appointment only
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
