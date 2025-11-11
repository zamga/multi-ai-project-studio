import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsExpanded(false)
  }, [location.pathname])

  if (location.pathname === '/contact') {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40"
        >
          {isExpanded ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-sm shadow-elevation-lg border border-neutral-200 p-6 max-w-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-sans font-semibold text-body-md text-neutral-950">
                  Start a conversation
                </h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-neutral-400 hover:text-neutral-950 transition-colors duration-220"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-body-sm text-neutral-600 mb-4 leading-relaxed">
                Share your context and objectives. We'll suggest a pragmatic next step.
              </p>
              <Link
                to="/contact"
                className="block w-full px-6 py-3 bg-navy-900 text-white text-body-sm font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-220 text-center"
              >
                Contact us
              </Link>
            </motion.div>
          ) : (
            <button
              onClick={() => setIsExpanded(true)}
              className="group flex items-center gap-3 px-6 py-4 bg-navy-900 text-white rounded-full shadow-elevation-lg hover:shadow-elevation transition-all duration-220 hover:scale-105"
              aria-label="Start a conversation"
            >
              <MessageCircle size={20} />
              <span className="font-sans font-medium text-body-sm">
                Start a conversation
              </span>
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
