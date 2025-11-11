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
            <p className="text-body-xl text-navy-100 mb-6" style={{ lineHeight: '1.7' }}>
              We partner with owners and boards at critical moments—when decisions have implications for people, capital, and the future of the business.
            </p>
            <p className="text-body-lg text-navy-200 italic" style={{ lineHeight: '1.7' }}>
              Our mission is to bring clarity when complexity peaks—delivering discreet, independent advice that enables leadership to act with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Standards - Institutional Credibility */}
      <section className="py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-display-md text-neutral-950 mb-6">Our Standards</h2>
            <p className="text-body-lg text-neutral-700 mb-6" style={{ lineHeight: '1.7' }}>
              We maintain the highest standards of confidentiality, integrity, and regulatory compliance across all engagements. Our commitment to professional ethics and client stewardship guides every decision we make.
            </p>
            <p className="text-body-md text-neutral-600 italic" style={{ lineHeight: '1.7' }}>
              We act with integrity, independence, and respect for all stakeholders—balancing commercial outcomes with responsible governance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-28 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-display-lg text-neutral-950 mb-8 text-center">Our Approach</h2>
            <div className="prose max-w-prose mx-auto mb-16">
              <p className="text-body-lg text-neutral-700 mb-6 text-center" style={{ lineHeight: '1.7' }}>
                We advise at inflection points—when the stakes are high, the timeline is tight, and the outcome matters for years to come.
              </p>
              <p className="text-body-lg text-neutral-700 text-center" style={{ lineHeight: '1.7' }}>
                Our work is grounded in clear thinking, practical execution, and respect for the complexity of your situation.
              </p>
            </div>
            
            <h3 className="font-sans font-semibold text-body-xl text-neutral-950 mb-10 text-center">What Guides Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-center p-8 bg-neutral-50 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:bg-white hover:shadow-elevation transition-all duration-220"
              >
                <div className="w-16 h-16 bg-navy-900/5 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Senior Attention</h4>
                <p className="text-body-md text-neutral-700" style={{ lineHeight: '1.6' }}>
                  Partners lead every engagement
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-center p-8 bg-neutral-50 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:bg-white hover:shadow-elevation transition-all duration-220"
              >
                <div className="w-16 h-16 bg-navy-900/5 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Clarity</h4>
                <p className="text-body-md text-neutral-700" style={{ lineHeight: '1.6' }}>
                  We deliver board-ready materials
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center p-8 bg-neutral-50 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:bg-white hover:shadow-elevation transition-all duration-220"
              >
                <div className="w-16 h-16 bg-navy-900/5 rounded-sm flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">Composure</h4>
                <p className="text-body-md text-neutral-700" style={{ lineHeight: '1.6' }}>
                  Calm execution under pressure
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-display-lg text-neutral-950 mb-4 text-center">Leadership</h2>
          <p className="text-body-md text-neutral-600 mb-6 text-center italic">
            Decades of experience from global banks and advisory firms
          </p>
          <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto text-center mb-8" style={{ lineHeight: '1.7' }}>
            Our leadership team brings decades of transaction experience from global investment banks and advisory firms, combining institutional expertise with the independence of a partner-led platform.
          </p>
          <p className="text-body-md text-neutral-600 text-center mb-12 font-medium">
            30+ years combined experience across 20 jurisdictions
          </p>
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
          <h2 className="font-display text-display-lg text-neutral-950 mb-6 text-center">Awards & Recognition</h2>
          <p className="text-body-md text-neutral-600 max-w-2xl mx-auto text-center mb-12" style={{ lineHeight: '1.7' }}>
            Industry recognition reflects our commitment to independent excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Deal of the Year",
                year: "2023",
                organization: "The Deal",
                description: "Recognized for excellence in international deal execution"
              },
              {
                title: "M&A Advisor of the Year",
                year: "2024",
                organization: "The M&A Advisor",
                description: "Recognized for leadership in middle-market advisory execution"
              },
              {
                title: "Restructuring Excellence",
                year: "2024",
                organization: "Turnaround Management Association",
                description: "Recognized for expertise in complex restructuring situations"
              },
              {
                title: "Top Advisory Firm",
                year: "2023",
                organization: "Financial Times",
                description: "Recognized for independent advisory excellence"
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-gradient-to-br from-neutral-50 to-white p-6 rounded-sm border border-neutral-200 hover:border-gold-500/50 hover:shadow-elevation-lg transition-all duration-220"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gold-500/10 to-gold-500/5 rounded-sm flex items-center justify-center mb-4 group-hover:from-gold-500/20 group-hover:to-gold-500/10 transition-all duration-220">
                  <svg className="w-7 h-7 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="mb-3">
                  <h3 className="font-sans font-bold text-body-lg text-neutral-950 mb-1 group-hover:text-navy-900 transition-colors duration-220">
                    {award.title}
                  </h3>
                  <p className="text-body-sm text-gold-600 font-medium">{award.year}</p>
                </div>
                <p className="text-body-sm text-neutral-700 mb-3" style={{ lineHeight: '1.6' }}>
                  {award.description}
                </p>
                <div className="pt-3 border-t border-neutral-200">
                  <p className="text-body-xs text-neutral-600 font-medium">{award.organization}</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {[
              { name: 'Financial Times', title: 'Advisory Coverage' },
              { name: 'Bloomberg', title: 'Transaction Commentary' },
              { name: 'The Deal', title: 'M&A Analysis' },
              { name: 'Restructuring Today', title: 'Industry Recognition' }
            ].map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group text-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                title={media.title}
              >
                <div className="text-2xl font-sans font-bold text-neutral-400 group-hover:text-neutral-700 transition-colors duration-300 mb-2">
                  {media.name}
                </div>
                <p className="text-body-xs text-neutral-400 group-hover:text-neutral-600 transition-colors duration-300">
                  {media.title}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-body-sm text-neutral-500 text-center mt-10 italic">
            Selected commentary and analysis—available upon request
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-white border-t border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-display-lg text-neutral-950 mb-12 text-center">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-neutral-50 p-8 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:bg-white hover:shadow-elevation transition-all duration-220"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <svg className="w-12 h-12 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="mb-4 relative">
                  <blockquote className="text-body-lg text-neutral-950 mb-4 leading-relaxed font-normal">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-body-sm text-neutral-600 font-medium">
                    {testimonial.attribution.replace('CEO, Industrial Manufacturing', 'CEO, Global Industrials Group')
                      .replace('CFO, Technology Services', 'CFO, Technology Platform')
                      .replace('Board Chair, Healthcare Company', 'Board Chair, Healthcare Services')}
                  </p>
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
