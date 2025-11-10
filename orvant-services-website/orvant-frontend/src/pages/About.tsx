import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function About() {
  const team = [
    {
      name: 'Michael Orvantt',
      role: 'Founding Partner',
      expertise: 'M&A Advisory, Corporate Finance',
      bio: 'Previously led advisory mandates across industrials and technology sectors. Focused on complex cross-border transactions and strategic restructurings.',
    },
    {
      name: 'Sarah Chen',
      role: 'Partner',
      expertise: 'Restructuring, Special Situations',
      bio: 'Specializes in operational turnarounds and stakeholder negotiations. Deep experience in distressed situations and capital structure optimization.',
    },
    {
      name: 'David Ramirez',
      role: 'Partner',
      expertise: 'Public Markets, Capital Raising',
      bio: 'Advises on IPOs, secondary offerings, and investor relations. Former investment banker with extensive public markets experience.',
    },
  ]

  const testimonials = [
    {
      quote: 'The team provided clear guidance through a complex carve-out. Their discretion and senior-level attention made the difference.',
      attribution: 'CEO, Industrial Manufacturing',
    },
    {
      quote: 'Exceptional execution on our restructuring. They understood the nuances and delivered practical solutions under tight timelines.',
      attribution: 'CFO, Technology Services',
    },
    {
      quote: 'Strategic advice that went beyond the transaction. They helped us think through long-term implications and positioned us well.',
      attribution: 'Board Chair, Healthcare Company',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-display-xl text-white mb-6">
              Your Trusted Partner for Business Success
            </h1>
            <p className="text-body-lg text-navy-100 leading-relaxed">
              We provide expert financial advisory services to businesses navigating complex transitions. Our approach combines deep industry expertise with personalized service and unwavering commitment to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-28 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-display-lg text-neutral-950 mb-6">Our Approach</h2>
              <div className="prose max-w-prose">
                <p className="text-body-lg text-neutral-700 leading-relaxed mb-6">
                  We work closely with business leaders and decision-makers to deliver exceptional results. Every engagement is led by experienced professionals who are personally committed to your success.
                </p>
                <p className="text-body-lg text-neutral-700 leading-relaxed">
                  Our client-focused approach ensures you receive personalized attention and strategic guidance tailored to your unique business objectives and challenges.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-4">What Guides Us</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">Trusted Expertise</h4>
                  <p className="text-body-md text-neutral-700">
                    Deep industry knowledge and proven track record delivering exceptional results for businesses across diverse sectors.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">Client-Focused Service</h4>
                  <p className="text-body-md text-neutral-700">
                    Personalized attention and dedicated support throughout every engagement. Your success is our priority.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">Proven Results</h4>
                  <p className="text-body-md text-neutral-700">
                    Track record of successful transactions and satisfied clients. We deliver measurable value and strategic outcomes.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">Comprehensive Solutions</h4>
                  <p className="text-body-md text-neutral-700">
                    End-to-end support from initial consultation through successful completion and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-display-lg text-neutral-950 mb-12">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm border border-neutral-200"
              >
                <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-1">
                  {member.name}
                </h3>
                <p className="text-body-sm text-neutral-600 mb-2">{member.role}</p>
                <p className="text-body-xs uppercase tracking-widest text-gold-600 mb-4">
                  {member.expertise}
                </p>
                <p className="text-body-md text-neutral-700 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-display-lg text-neutral-950 mb-12">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-l-2 border-gold-500 pl-6 py-4"
              >
                <blockquote className="text-body-lg text-neutral-950 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <p className="text-body-sm text-neutral-600">— {testimonial.attribution}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-body-sm text-neutral-600">
              Additional case studies and references available under NDA
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-navy-900">
        <div className="max-w-container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-display-lg text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-body-lg text-navy-100 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discover how we can help transform your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 text-body-md font-sans font-medium rounded-sm hover:bg-gold-400 transition-all duration-150 hover:shadow-elevation"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
