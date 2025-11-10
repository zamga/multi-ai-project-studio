import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function About() {
  const team = [
    {
      name: 'Michael Orvant',
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
              Independent advisory built on trust
            </h1>
            <p className="text-body-lg text-navy-100 leading-relaxed">
              We provide strategic guidance to companies and boards navigating complex transitions. Our approach combines deep sector expertise with a commitment to discretion and alignment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-28 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-display-lg text-neutral-950 mb-6">Our approach</h2>
              <div className="prose max-w-prose">
                <p className="text-body-lg text-neutral-700 leading-relaxed mb-6">
                  We work exclusively with senior decision-makers on situations that require careful judgment and execution. Every engagement is led by a partner who takes personal responsibility for outcomes.
                </p>
                <p className="text-body-lg text-neutral-700 leading-relaxed">
                  Our independence allows us to provide unbiased advice. We have no lending relationships, no proprietary capital, and no conflicts that would compromise our recommendations.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-4">What guides us</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">Discretion first</h4>
                  <p className="text-body-md text-neutral-700">
                    Complete confidentiality in every engagement. We don't publish transaction values or client names without explicit permission.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">Senior attention</h4>
                  <p className="text-body-md text-neutral-700">
                    Partners lead every mandate. No delegation to junior teams. Direct access throughout the process.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">Independent advice</h4>
                  <p className="text-body-md text-neutral-700">
                    No lending, no proprietary capital, no conflicts. Our only interest is your success.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">Execution certainty</h4>
                  <p className="text-body-md text-neutral-700">
                    We commit to outcomes, not just advice. Hands-on support through closing and beyond.
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
            Let's discuss your situation
          </h2>
          <p className="text-body-lg text-navy-100 mb-8 max-w-2xl mx-auto">
            Every engagement begins with a confidential conversation. No obligation, no pressure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 text-body-md font-sans font-medium rounded-sm hover:bg-gold-400 transition-all duration-150 hover:shadow-elevation"
          >
            Start a confidential conversation
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
