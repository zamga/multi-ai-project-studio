import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
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
      <Breadcrumb items={[{ name: 'About', path: '/about' }]} />
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

      {/* Awards & Certifications */}
      <section className="py-28 bg-white border-t border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-display-lg text-neutral-950 mb-12 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "M&A Advisor of the Year",
                year: "2024",
                organization: "The M&A Advisor",
                category: "Middle Market"
              },
              {
                title: "Restructuring Excellence",
                year: "2024",
                organization: "Turnaround Management Association",
                category: "Special Situations"
              },
              {
                title: "Deal of the Year",
                year: "2023",
                organization: "The Deal",
                category: "Cross-Border Transaction"
              },
              {
                title: "Top Advisory Firm",
                year: "2023",
                organization: "Financial Times",
                category: "Independent Advisory"
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-neutral-50 p-6 rounded-sm border border-neutral-200 hover:border-gold-500/50 hover:bg-white hover:shadow-elevation transition-all duration-220"
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors duration-220">
                  <svg className="w-6 h-6 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-body-md text-neutral-950 mb-2 group-hover:text-navy-900 transition-colors duration-220">
                  {award.title}
                </h3>
                <p className="text-body-sm text-neutral-600 mb-1">{award.organization}</p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-200">
                  <span className="text-body-xs uppercase tracking-widest text-gold-600">{award.category}</span>
                  <span className="text-body-xs font-medium text-neutral-500">{award.year}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-6 text-center">Professional Certifications & Memberships</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "CFA", full: "Chartered Financial Analyst" },
                { name: "CPA", full: "Certified Public Accountant" },
                { name: "TMA", full: "Turnaround Management Association" },
                { name: "ACG", full: "Association for Corporate Growth" }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-center p-4 bg-neutral-50 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:bg-white transition-all duration-220"
                >
                  <div className="text-body-lg font-sans font-bold text-navy-900 mb-1">{cert.name}</div>
                  <p className="text-body-xs text-neutral-600">{cert.full}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="py-28 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-display-lg text-neutral-950 mb-12 text-center">Media Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-body-lg font-sans font-semibold text-neutral-700">Financial Times</div>
              <p className="text-body-xs text-neutral-500 mt-1">Advisory Coverage</p>
            </div>
            <div className="text-center">
              <div className="text-body-lg font-sans font-semibold text-neutral-700">Bloomberg</div>
              <p className="text-body-xs text-neutral-500 mt-1">Transaction Commentary</p>
            </div>
            <div className="text-center">
              <div className="text-body-lg font-sans font-semibold text-neutral-700">The Deal</div>
              <p className="text-body-xs text-neutral-500 mt-1">M&A Analysis</p>
            </div>
            <div className="text-center">
              <div className="text-body-lg font-sans font-semibold text-neutral-700">Restructuring Today</div>
              <p className="text-body-xs text-neutral-500 mt-1">Industry Recognition</p>
            </div>
          </div>
          <p className="text-body-sm text-neutral-500 text-center mt-8 italic">
            Media coverage and commentary available upon request
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-neutral-50">
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
                className="bg-white p-8 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:shadow-elevation transition-all duration-220"
              >
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-body-lg text-neutral-950 mb-4 leading-relaxed font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-body-sm text-neutral-600 font-medium">— {testimonial.attribution}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-body-sm text-neutral-500 text-center mt-8 italic">
            References and detailed case studies available under NDA
          </p>
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
