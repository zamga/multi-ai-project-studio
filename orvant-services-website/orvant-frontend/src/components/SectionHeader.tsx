import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  deck?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ eyebrow, title, deck, align = 'left', className = '' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  const maxWidthClass = deck ? 'max-w-2xl' : ''

  return (
    <motion.div
      className={`mb-12 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <p className="font-sans text-body-xs uppercase tracking-widest text-neutral-500 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-display-lg text-neutral-950 mb-4 leading-tight">
        {title}
      </h2>
      {deck && (
        <p className={`text-body-md text-neutral-600 leading-relaxed ${maxWidthClass}`}>
          {deck}
        </p>
      )}
    </motion.div>
  )
}
