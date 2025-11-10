import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SplitSectionProps {
  left: string
  right: ReactNode
  className?: string
}

export function SplitSection({ left, right, className = '' }: SplitSectionProps) {
  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <p className="font-sans text-body-lg text-neutral-950 font-medium leading-relaxed">
          {left}
        </p>
      </div>
      <div className="space-y-4">
        {right}
      </div>
    </motion.div>
  )
}
