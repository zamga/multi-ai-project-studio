import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function FloatingCTAButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Link
            to="/contact"
            className="group flex items-center gap-3 px-6 py-4 bg-navy-900 text-white rounded-sm shadow-2xl hover:bg-navy-800 hover:shadow-elevation-lg transition-all duration-220 hover:scale-105"
          >
            <span className="text-body-md font-semibold whitespace-nowrap">
              Start a conversation
            </span>
            <ArrowRight 
              size={18} 
              className="transition-transform duration-220 group-hover:translate-x-1" 
            />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
