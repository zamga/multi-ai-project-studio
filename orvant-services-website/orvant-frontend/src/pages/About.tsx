import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'

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
    <>
      <SEO
        title="About Us"
        description="Independent advisory, delivered with discretion. We partner with owners and boards at critical moments when decisions have implications for the future of the business."
        canonical="/about"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ]} />
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
              Independent Advisory, Delivered with Discretion
            </h1>
            <p className="text-body-lg text-navy-100 leading-relaxed">
              We partner with owners and boards at critical moments—when decisions have implications for people, capital, and the future of the business.
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
                  We advise at inflection points—when the stakes are high, the timeline is tight, and the outcome matters for years to come.
                </p>
                <p className="text-body-lg text-neutral-700 leading-relaxed">
                  Our work is grounded in clear thinking, practical execution, and respect for the complexity of your situation.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-4">What Guides Us</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">Senior attention on every mandate</h4>
                  <p className="text-body-md text-neutral-700">
                    Experienced professionals lead every engagement, ensuring continuity and accountability throughout.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">Clear materials that enable good decisions</h4>
                  <p className="text-body-md text-neutral-700">
                    We build board-ready materials that anticipate questions and support informed decision-making.
                  </p>
                </div>
                <div>
                  <h4 className="font-sans font-medium text-body-md text-neutral-950 mb-2">Calm execution, even under pressure</h4>
                  <p className="text-body-md text-neutral-700">
                    We run clean processes, manage stakeholders effectively, and maintain discretion throughout.
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
            Share your context and objectives. We'll suggest a pragmatic next step.
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
    </>
  )
}
