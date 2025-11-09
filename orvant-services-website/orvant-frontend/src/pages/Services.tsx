import { Link } from 'react-router-dom'
import { ArrowRight, LineChart, Briefcase, TrendingUp, Building2, Shield, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function Services() {
  const services = [
    {
      icon: LineChart,
      title: 'Accounting',
      description: 'Comprehensive financial reporting and accounting services designed to provide clarity and control over your business finances.',
      features: [
        'Financial statement preparation and analysis',
        'Tax planning and compliance',
        'Management accounting and reporting',
        'Internal controls and risk management',
        'Audit support and coordination',
        'CFO advisory services',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Briefcase,
      title: 'M&A Advisory',
      description: 'Strategic guidance through complex mergers and acquisitions to maximize value creation and ensure successful outcomes.',
      features: [
        'Buy-side and sell-side advisory',
        'Valuation and financial modeling',
        'Due diligence coordination',
        'Deal structuring and negotiation',
        'Post-merger integration planning',
        'Strategic alternatives analysis',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: TrendingUp,
      title: 'Reconstruction',
      description: 'Expert restructuring services to revitalize underperforming businesses and optimize operations for sustainable growth.',
      features: [
        'Operational restructuring',
        'Financial restructuring',
        'Turnaround management',
        'Stakeholder negotiations',
        'Cash flow optimization',
        'Business transformation strategy',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Building2,
      title: 'Buy/Sell Company',
      description: 'End-to-end support for business acquisitions and divestitures with a focus on achieving optimal terms and outcomes.',
      features: [
        'Business valuation and pricing',
        'Buyer identification and qualification',
        'Marketing and positioning strategy',
        'Negotiation and deal execution',
        'Legal and regulatory compliance',
        'Transaction closing support',
      ],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Shield,
      title: 'Public Company - Raise Capital',
      description: 'Comprehensive capital raising and IPO advisory services for companies ready to access public markets and institutional capital.',
      features: [
        'IPO readiness assessment',
        'Capital markets strategy',
        'Investor relations planning',
        'Regulatory compliance guidance',
        'Roadshow preparation',
        'Post-IPO support and advisory',
      ],
      color: 'from-emerald-500 to-emerald-600',
    },
  ]

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20 md:py-28">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Comprehensive financial and business advisory services tailored to your unique needs and objectives
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/contact">
                    <Button className={`px-8 py-6 text-lg bg-gradient-to-r ${service.color} hover:shadow-xl transition-all`}>
                      Get Started
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="border-2 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Services Include:</h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle2 className={`text-blue-600 flex-shrink-0 mt-1`} size={20} />
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Our team of experts is ready to help you achieve your business objectives. 
              Contact us today to discuss your needs and explore how we can add value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-xl transition-all">
                  Contact Us
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="px-8 py-6 text-lg border-2 hover:bg-gray-50 transition-all">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
