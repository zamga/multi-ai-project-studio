import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'navy' | 'gold' | 'white'
}

export function LoadingSpinner({ size = 'md', color = 'navy' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    navy: 'border-navy-900 border-t-transparent',
    gold: 'border-gold-500 border-t-transparent',
    white: 'border-white border-t-transparent'
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} border-2 ${colorClasses[color]} rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  )
}

interface LoadingOverlayProps {
  message?: string
}

export function LoadingOverlay({ message = 'Loading...' }: LoadingOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-sm shadow-elevation-lg text-center">
        <div className="flex justify-center mb-4">
          <LoadingSpinner size="lg" color="navy" />
        </div>
        <p className="text-body-md text-neutral-700 font-medium">{message}</p>
      </div>
    </motion.div>
  )
}
