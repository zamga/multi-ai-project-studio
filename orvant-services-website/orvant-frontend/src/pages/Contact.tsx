import { useState, useEffect } from 'react'
import { Mail, ArrowRight, CheckCircle2, AlertCircle, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDropzone } from 'react-dropzone'
import { useSearchParams } from 'react-router-dom'
import * as z from 'zod'
import { SEO } from '../components/SEO'
import { BreadcrumbSchema } from '../components/StructuredData'

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
      const formDataToSend = new FormData()
      formDataToSend.append('name', data.name)
      formDataToSend.append('email', data.email)
      formDataToSend.append('company', data.company || '')
      formDataToSend.append('phone', data.phone || '')
      formDataToSend.append('service', data.service || '')
      formDataToSend.append('message', data.message)

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label htmlFor="phone" className="block text-body-sm font-sans font-medium text-neutral-950 mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-sm text-body-md text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-all duration-150"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-body-sm font-sans font-medium text-neutral-950 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    {...register('service')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm text-body-md text-neutral-950 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-all duration-150"
                  >
                    <option value="">Select a service</option>
                    <option value="ma-advisory">M&A Advisory</option>
                    <option value="restructuring">Restructuring</option>
                    <option value="public-markets">Public Markets</option>
                    <option value="accounting">Accounting & Compliance</option>
                    <option value="buy-sell">Buy/Sell Company</option>
                    <option value="other">Other</option>
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
    </div>
    </>
  )
}
