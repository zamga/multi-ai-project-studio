import { useState, useEffect } from 'react'
import { Mail, ArrowRight, CheckCircle2, AlertCircle, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDropzone } from 'react-dropzone'
import { useSearchParams } from 'react-router-dom'
import * as z from 'zod'
import { SEO } from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import { BreadcrumbSchema, ContactPageSchema } from '../components/StructuredData'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
  honeypot: z.string().max(0, 'Invalid submission'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [searchParams] = useSearchParams()
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      consent: false,
      honeypot: '',
    },
  })

  useEffect(() => {
    const subject = searchParams.get('subject')
    if (subject) {
      const messagePrefix = subject === 'NDA case studies' 
        ? 'I would like to request case studies under NDA. '
        : `Re: ${subject}\n\n`
      setValue('message', messagePrefix)
    }
  }, [searchParams, setValue])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles])
    },
    multiple: true,
  })

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      let recaptchaToken = ''
      if (typeof window !== 'undefined' && (window as any).grecaptcha) {
        try {
          recaptchaToken = await (window as any).grecaptcha.execute('6LdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', { action: 'submit' })
        } catch (error) {
          console.error('reCAPTCHA error:', error)
        }
      }

      const formDataToSend = new FormData()
      formDataToSend.append('name', data.name)
      formDataToSend.append('email', data.email)
      formDataToSend.append('company', data.company || '')
      formDataToSend.append('phone', data.phone || '')
      formDataToSend.append('service', data.service || '')
      formDataToSend.append('message', data.message)
      formDataToSend.append('recaptchaToken', recaptchaToken)

      files.forEach((file) => {
        formDataToSend.append('files', file)
      })

      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        reset()
        setFiles([])
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.message || 'Failed to submit form. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center py-24">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-green-600" size={32} />
            </div>
            <h1 className="font-display text-display-lg text-neutral-950 mb-4">
              Message received
            </h1>
            <p className="text-body-lg text-neutral-600 mb-8">
              Thank you for contacting us. We'll review your inquiry and respond within one business day.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="inline-flex items-center px-8 py-4 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-150"
            >
              Send another message
              <ArrowRight className="ml-2" size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Share your context, constraints, and objectives. We'll suggest a pragmatic next step. Start a confidential conversation with Orvantt Services."
        canonical="/contact"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ]} />
      <ContactPageSchema />
      <Breadcrumb items={[{ name: 'Contact', path: '/contact' }]} />
      <div className="bg-white">
      <section className="py-24 md:py-32 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-display-xl text-neutral-950 mb-6">
              Start a Confidential Conversation
            </h1>
            <p className="text-body-lg text-neutral-600 max-w-prose">
              Share your context, constraints, and objectives. We'll suggest a pragmatic next step.
            </p>
            <p className="text-body-sm text-neutral-500 mt-4">
              We respond to all inquiries within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-display text-display-md text-neutral-950 mb-6">Contact Information</h2>
              <p className="text-body-md text-neutral-600 mb-8">
                Reach out to discuss your specific situation.
              </p>
              <div className="mb-8 space-y-4">
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-sm">
                  <h3 className="font-sans font-medium text-body-sm text-neutral-950 mb-2">When to contact us</h3>
                  <ul className="space-y-1 text-body-sm text-neutral-600">
                    <li>• Liquidity pressure or covenant concerns</li>
                    <li>• Sale readiness and timing decisions</li>
                    <li>• Public market preparation or timeline</li>
                    <li>• Board mandate requiring external counsel</li>
                  </ul>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-sm">
                  <h3 className="font-sans font-medium text-body-sm text-neutral-950 mb-2">What to prepare (optional)</h3>
                  <ul className="space-y-1 text-body-sm text-neutral-600">
                    <li>• One-paragraph background and objective</li>
                    <li>• Recent management pack or summary financials</li>
                    <li>• Timing window and key stakeholders</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <Mail className="text-neutral-600 mr-3" size={20} />
                    <h3 className="font-sans font-medium text-body-md text-neutral-950">Email</h3>
                  </div>
                  <a
                    href="mailto:filipberg@orvanttservices.com"
                    className="text-body-md text-navy-900 hover:text-navy-800 transition-colors duration-150"
                  >
                    filipberg@orvanttservices.com
                  </a>
                </div>

                <div className="pt-6 border-t border-neutral-200">
                  <h3 className="font-sans font-medium text-body-md text-neutral-950 mb-4">Office Locations</h3>
                  <div className="space-y-3 text-body-sm text-neutral-600">
                    <div>
                      <p className="font-medium text-neutral-950">Americas</p>
                      <p>New York, Toronto, São Paulo</p>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-950">EMEA</p>
                      <p>London, Frankfurt, Dubai</p>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-950">APAC</p>
                      <p>Singapore, Hong Kong, Sydney</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200">
                  <p className="text-body-xs text-neutral-500 leading-relaxed">
                    <strong className="text-neutral-700">Privacy Notice:</strong> Your information is handled in accordance with GDPR and other applicable privacy regulations. We will only use your contact details to respond to your inquiry.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-body-sm font-sans font-medium text-neutral-950 mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      {...register('name')}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm text-body-md text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-all duration-150"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-body-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-body-sm font-sans font-medium text-neutral-950 mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm text-body-md text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-all duration-150"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-body-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-body-sm font-sans font-medium text-neutral-950 mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    {...register('company')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm text-body-md text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-all duration-150"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-body-sm font-sans font-medium text-neutral-950 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="service"
                    {...register('service')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm text-body-md text-neutral-950 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-all duration-150 bg-white"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="ma-advisory">M&A Advisory</option>
                    <option value="restructuring">Restructuring</option>
                    <option value="public-markets">Public Markets / IPO</option>
                    <option value="accounting">Accounting & Compliance</option>
                    <option value="buy-sell">Buy/Sell Company</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-body-sm font-sans font-medium text-neutral-950 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm text-body-md text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-all duration-150 resize-none"
                    placeholder="Context, stakeholders, and timing window..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-body-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-body-sm font-sans font-medium text-neutral-950 mb-2">
                    Attachments
                  </label>
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-sm p-8 text-center transition-all duration-150 cursor-pointer ${
                      isDragActive
                        ? 'border-navy-900 bg-navy-50'
                        : 'border-neutral-300 hover:border-navy-700 hover:bg-neutral-50'
                    }`}
                  >
                    <input {...getInputProps()} />
                    <p className="text-body-md text-neutral-600 mb-2">
                      {isDragActive ? 'Drop files here' : 'Drag and drop files, or click to select'}
                    </p>
                    <p className="text-body-sm text-neutral-500">
                      PDF, DOC, DOCX, XLS, XLSX supported
                    </p>
                  </div>

                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between px-4 py-3 bg-neutral-50 rounded-sm border border-neutral-200"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-body-sm font-medium text-neutral-950 truncate">{file.name}</p>
                            <p className="text-body-sm text-neutral-600">{formatFileSize(file.size)}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="ml-4 p-1 hover:bg-neutral-200 rounded transition-colors flex-shrink-0"
                          >
                            <X size={16} className="text-neutral-600" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Honeypot field - hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    {...register('honeypot')}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    id="consent"
                    type="checkbox"
                    {...register('consent')}
                    className="mt-1 h-4 w-4 text-navy-900 border-neutral-300 rounded focus:ring-navy-900"
                  />
                  <label htmlFor="consent" className="ml-3 text-body-sm text-neutral-600">
                    I agree to the privacy policy and consent to being contacted regarding my inquiry. *
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-body-sm text-red-600">{errors.consent.message}</p>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-start p-4 bg-red-50 border border-red-200 rounded-sm">
                    <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                    <p className="ml-3 text-body-sm text-red-800">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-150 hover:shadow-elevation disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-display-lg text-neutral-950 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "What types of situations do you typically handle?",
                  answer: "We engage at inflection points: M&A transactions (buy-side and sell-side), operational and financial restructurings, public market preparation (IPO readiness, secondary offerings), and complex accounting/compliance matters. Most mandates involve time pressure, multiple stakeholders, and material implications for the business."
                },
                {
                  question: "How quickly can you engage on a new mandate?",
                  answer: "We can typically begin work within 48-72 hours of initial conversation. For urgent situations (covenant breaches, unsolicited offers, liquidity crises), we can mobilize same-day. Our senior-led model means no ramp-up time—experienced advisors are involved from day one."
                },
                {
                  question: "What does a typical engagement look like?",
                  answer: "Engagements vary by situation, but typically include: initial assessment and scoping (1-2 weeks), detailed analysis and materials preparation (2-4 weeks), stakeholder management and execution (4-12 weeks), and completion/transition support. We adapt to your timeline and constraints."
                },
                {
                  question: "How do you maintain confidentiality?",
                  answer: "Confidentiality is built into our process: controlled distribution lists, secure data rooms, careful stakeholder mapping, and discretion in all communications. We use code names when appropriate and limit information sharing to those with legitimate need-to-know. NDAs are standard."
                },
                {
                  question: "Do you work across borders and jurisdictions?",
                  answer: "Yes. We have experience across Americas, EMEA, and APAC, with deep understanding of cross-border regulatory frameworks, tax structures, and cultural considerations. We coordinate with local counsel and advisors as needed to navigate multi-jurisdictional complexity."
                },
                {
                  question: "What makes your approach different?",
                  answer: "Three things: senior attention throughout (no delegation to junior teams), independence (no lending relationships or cross-sell pressure), and board-ready deliverables (materials built to withstand scrutiny). We focus on outcomes that hold up, not just getting to close."
                },
                {
                  question: "How are fees typically structured?",
                  answer: "Fee structures vary by engagement type and complexity. We discuss compensation openly during initial conversations and tailor arrangements to align with your situation. Options include monthly retainers, success-based fees, or hybrid structures. We're transparent about costs upfront."
                },
                {
                  question: "Can you provide references?",
                  answer: "Yes. We can provide references from similar situations under NDA. Given the confidential nature of our work, we're selective about what we share publicly, but we're happy to connect you with former clients who can speak to our work and approach."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-sm border border-neutral-200 hover:border-navy-900/20 hover:shadow-sm transition-all duration-220"
                >
                  <h3 className="font-sans font-semibold text-body-lg text-neutral-950 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-body-md text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="text-body-sm text-neutral-500 text-center mt-8 italic">
              Have a different question? Reach out directly and we'll respond promptly.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
