import { useState, useEffect } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Menu, 
  X, 
  TrendingUp, 
  Scale, 
  Users, 
  Search, 
  Building2, 
  Rocket,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  ArrowRight
} from 'lucide-react'

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
    const mailtoLink = `mailto:info@berg-weiss.com?subject=Inquiry from ${formData.name} - ${formData.company}&body=Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AInterested in: ${formData.interest}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "M&A Advisory",
      description: "Confidential sell-side and buy-side advisory for mid-market private companies, maximizing value through competitive processes."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Valuation Opinions",
      description: "Independent, market-based valuations to inform strategic decisions and exits."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Intermediary / Introductions (B2B)",
      description: "Exclusive introductions to strategic buyers and investors across Europe."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Research & Market Intelligence",
      description: "In-depth sector analysis and buyer mapping for informed options."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "IPO / Capital Markets",
      description: "Introductions to regulated partners for public listings and capital raises. Partner-led execution."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "SPAC Transactions",
      description: "Coaching and introductions to Tier-1 sponsors for de-SPAC opportunities. Unregulated advisory only, partner-led."
    }
  ]

  const caseStudies = [
    {
      title: "IT Services Company (Slovenia)",
      description: "Sold to German strategic buyer at 11x EBITDA",
      result: "€5M+ proceeds to owner"
    },
    {
      title: "Manufacturing Platform (CEE)",
      description: "Partial recap with PE group",
      result: "Preserved owner control"
    },
    {
      title: "Digital Health Firm",
      description: "Valuation and buyer intros",
      result: "10x exit achieved"
    },
    {
      title: "Multiple Mid-Market Deals",
      description: "Cross-border transactions",
      result: "8-12x multiples achieved"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold tracking-wider text-white">BERGWEISS</span>
              <span className="text-xs text-slate-400 ml-2 tracking-widest">LTD</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'About', 'Case Studies', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-wide"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6"
              >
                Get in Touch
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'Services', 'About', 'Case Studies', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left text-slate-300 hover:text-white py-2 transition-colors"
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
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/london-skyline.jpg" 
            alt="London Financial District Skyline"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1627878117023-e0e3c8e6e8e2?w=1920&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-white">BERGWEISS</span>
                <span className="text-amber-500 ml-4">LTD</span>
              </h1>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>
            
            <h2 className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
              Independent Corporate Finance Advisory for Private Companies in Europe
            </h2>
            
            <p className="text-2xl md:text-3xl text-white font-semibold max-w-4xl mx-auto">
              Unlock Premium Valuations and Strategic Exits with Exclusive Buyer Access
            </p>

            <p className="text-lg text-amber-400 tracking-wide">
              Specializing in M&A, Valuations, and International Introductions
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold tracking-wide"
              >
                Request Confidential Valuation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                size="lg"
                className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg"
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive corporate finance solutions tailored for private company owners seeking premium outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Bergweiss Ltd</h2>
              <div className="w-24 h-1 bg-amber-500 mb-8"></div>
              
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  <span className="text-white font-semibold">BERGWEISS LTD</span> is a London-based independent advisory firm (registered in England & Wales) focused exclusively on private-company transactions across Europe.
                </p>
                <p>
                  Founded by Filip Berg, with over 10 years of experience in CEE M&A, we deliver discreet, high-value outcomes without the conflicts of large banks.
                </p>
                <p className="text-amber-400 font-semibold text-xl">
                  We take on only 4-6 mandates per year for personalized focus and superior results.
                </p>
                <div className="flex items-center text-slate-400 pt-4">
                  <MapPin className="w-5 h-5 mr-2 text-amber-500" />
                  <span>Headquartered in London, serving clients across Europe</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="/images/business-handshake.jpg" 
                  alt="Professional business partnership"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-xl">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Transactions</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400">Anonymous case studies demonstrating our track record</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">{study.title}</CardTitle>
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-amber-500" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-4">{study.description}</p>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <span className="text-amber-400 font-semibold">{study.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-800/30 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-sm text-center italic">
              Past performance is not indicative of future results. Transaction details are anonymized for client confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
              <div className="w-24 h-1 bg-amber-500 mb-8"></div>
              
              <p className="text-xl text-slate-300 mb-8">
                Request a confidential discussion or free initial valuation opinion.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <a href="mailto:info@berg-weiss.com" className="text-slate-400 hover:text-amber-400 transition-colors">
                      info@berg-weiss.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                  <div>
                    <div className="text-white font-semibold">London Office</div>
                    <div className="text-slate-400">
                      71-75 Shelton Street<br />
                      Covent Garden<br />
                      London WC2H 9JQ<br />
                      United Kingdom
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-slate-400">By appointment only</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Send us a message</CardTitle>
                  <CardDescription className="text-slate-400">
                    All inquiries are treated with strict confidentiality
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-300">Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-slate-300">Company *</Label>
                        <Input
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-300">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-300">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500"
                          placeholder="+44..."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-slate-300">Interested in</Label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        className="w-full h-10 px-3 rounded-md bg-slate-700/50 border border-slate-600 text-white"
                      >
                        <option value="">Select an option</option>
                        <option value="Valuation">Valuation Opinion</option>
                        <option value="M&A Advisory">M&A Advisory</option>
                        <option value="Buyer Introductions">Buyer Introductions</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-300">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 min-h-32"
                        placeholder="Tell us about your situation..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <span className="text-2xl font-bold tracking-wider text-white">BERGWEISS</span>
                <span className="text-xs text-slate-400 ml-2 tracking-widest">LTD</span>
              </div>
              <p className="text-slate-400 text-sm">
                Independent Corporate Finance Advisory
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Services', 'About', 'Case Studies', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="block text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="text-center mb-6">
              <p className="text-slate-500 text-sm">
                BERGWEISS LTD | Company No. 12345678 | Registered in England & Wales
              </p>
            </div>

            {/* Disclaimer */}
            <div className="bg-slate-800/50 rounded-lg p-6 text-xs text-slate-500 leading-relaxed">
              <p className="font-semibold text-slate-400 mb-2">Important Disclaimer</p>
              <p>
                BERGWEISS LTD provides independent advisory services only and is not a regulated investment bank or broker-dealer. We do not solicit, offer, or sell securities. IPO, capital markets, and SPAC services are provided via introductions to regulated partners. All information is confidential and non-binding. No guarantees of outcomes or valuations. Past examples are anonymous and not indicative of future results. This website does not constitute an offer or solicitation in any jurisdiction where such activities would be unlawful.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 text-xs">
                &copy; {new Date().getFullYear()} Bergweiss Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
