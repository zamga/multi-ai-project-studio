import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '../components/SEO'
import { BreadcrumbSchema, AboutPageSchema } from '../components/StructuredData'

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
      quote: 'Strategic advice that went beyond the transaction. They guided us through long-term implications and positioned us well.',
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
      <AboutPageSchema />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="max-w-container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-body-sm font-medium text-white">
                About Us
              </span>
            </motion.div>
            <h1 className="font-display text-display-xl text-white mb-8 leading-[1.1] tracking-tight">
              Independent Advisory, Delivered with Discretion
            </h1>
            <p className="text-body-xl text-navy-100 leading-relaxed">
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
                    We build board-ready materials that anticipate questions and enable informed decision-making.
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
                className="group bg-white p-8 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
              >
                <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-1 group-hover:text-navy-900 transition-colors duration-220">
                  {member.name}
                </h3>
                <p className="text-body-sm text-neutral-600 mb-2">{member.role}</p>
                <p className="text-body-xs uppercase tracking-widest text-gold-600 mb-4 transition-colors duration-220 group-hover:text-gold-700">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-navy-900">
        <div className="max-w-container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-display-lg text-white mb-6">
            First conversation
          </h2>
          <p className="text-body-lg text-navy-100 mb-8 max-w-2xl mx-auto">
            Share your context and objectives. We'll suggest a pragmatic next step.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 text-body-md font-sans font-medium rounded-sm hover:bg-gold-400 transition-all duration-220 hover:shadow-elevation-lg hover:scale-[1.02]"
          >
            Start a confidential conversation
            <ArrowRight className="ml-2 transition-transform duration-220 group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
