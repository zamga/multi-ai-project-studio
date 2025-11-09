import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Shield, Users, Briefcase, Building2, LineChart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function Home() {
  const services = [
    {
      icon: LineChart,
      title: 'Accounting',
      description: 'Comprehensive financial reporting and accounting services tailored to your business needs.',
    },
    {
      icon: Briefcase,
      title: 'M&A Advisory',
      description: 'Strategic guidance through mergers and acquisitions to maximize value and minimize risk.',
    },
    {
      icon: TrendingUp,
      title: 'Reconstruction',
      description: 'Expert restructuring services to revitalize and optimize your business operations.',
    },
    {
      icon: Building2,
      title: 'Buy/Sell Company',
      description: 'End-to-end support for buying or selling businesses with optimal terms and outcomes.',
    },
    {
      icon: Shield,
      title: 'Public Company Services',
      description: 'Capital raising and IPO advisory for companies ready to enter public markets.',
    },
  ]

  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '$10B+', label: 'Transactions Managed' },
    { value: '25+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                With Expert Guidance
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Premier financial advisory and business services for companies at every stage of growth. 
              From accounting to capital raising, we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl transition-all">
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="px-8 py-6 text-lg border-2 hover:bg-gray-50 transition-all">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial and business advisory services designed to drive growth and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl transition-all">
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Orvant Services?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We combine deep industry expertise with innovative solutions to deliver exceptional results 
                for our clients. Our team of seasoned professionals brings decades of experience across 
                accounting, M&A, restructuring, and capital markets.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Team</h3>
                    <p className="text-blue-100">Seasoned professionals with proven track records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Trusted Partner</h3>
                    <p className="text-blue-100">Confidential, reliable, and results-driven approach</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Proven Results</h3>
                    <p className="text-blue-100">Track record of successful transactions and outcomes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-8">
                Let's discuss how we can help transform your business and achieve your goals.
              </p>
              <Link to="/contact">
                <Button className="w-full py-6 text-lg bg-white text-blue-600 hover:bg-gray-50 transition-all">
                  Contact Us Today
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
