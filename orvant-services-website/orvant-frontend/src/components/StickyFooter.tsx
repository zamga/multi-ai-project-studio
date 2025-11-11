import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, X } from 'lucide-react'

export function StickyFooter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    setEmail('')
    
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-30 bg-navy-900 border-t border-navy-800 shadow-2xl"
    >
      <div className="max-w-container mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <p className="text-white text-body-md font-medium mb-1">
              Stay informed
            </p>
            <p className="text-white/70 text-body-sm">
              Receive insights on M&A, restructuring, and public markets
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-3 flex-1 min-w-[300px] max-w-md">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-220"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-gold-600 text-navy-900 text-body-sm font-semibold rounded-sm hover:bg-gold-500 transition-all duration-220 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          <button
            onClick={() => setIsVisible(false)}
            className="p-2 hover:bg-white/10 rounded-sm transition-colors duration-220"
            aria-label="Close newsletter signup"
          >
            <X size={20} className="text-white/70" />
          </button>
        </div>

        {/* Success message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3 p-3 bg-gold-500/20 border border-gold-500/30 rounded-sm"
            >
              <p className="text-white text-body-sm">
                ✓ Thank you for subscribing! Check your email for confirmation.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
