import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface PhotoCardProps {
  title: string
  description: string
  imageUrl?: string
  href?: string
  index?: number
}

function PhotoCardContent({ title, description, imageUrl }: { title: string; description: string; imageUrl?: string }) {
  return (
    <>
      {/* Image container with tonal overlay */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        {/* Tonal background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDOUEyNTkiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptLTItMmgydjJoLTJ2LTJ6bTItMmgydjJoLTJ2LTJ6bTAtMmgydjJoLTJ2LTJ6bS0yLTJoMnYyaC0ydi0yem0yLTJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yem0tMi0yaDF2Mmgtdi0yem0yLTJoMnYyaC0ydi0yem0wLTJoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        {/* Gold overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Optional image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:opacity-50 group-hover:grayscale-0 transition-all duration-300"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-sans font-bold text-body-lg text-neutral-950 mb-2 group-hover:text-gold-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-body-sm text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Gold keyline on hover */}
      <div className="absolute inset-0 ring-1 ring-gold-500/0 group-hover:ring-gold-500/30 rounded-sm transition-all duration-300 pointer-events-none" />
    </>
  )
}

export function PhotoCard({ title, description, imageUrl, href, index = 0 }: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {href ? (
        <Link
          to={href}
          className="group relative block bg-white rounded-sm overflow-hidden border border-neutral-200 hover:border-gold-500/30 transition-all duration-300 hover:shadow-elevation hover:scale-[1.01]"
        >
          <PhotoCardContent title={title} description={description} imageUrl={imageUrl} />
        </Link>
      ) : (
        <div className="group relative block bg-white rounded-sm overflow-hidden border border-neutral-200 hover:border-gold-500/30 transition-all duration-300 hover:shadow-elevation hover:scale-[1.01]">
          <PhotoCardContent title={title} description={description} imageUrl={imageUrl} />
        </div>
      )}
    </motion.div>
  )
}
