import { useState, useEffect } from 'react'

interface HeroVideoProps {
  videoSrc?: string
  posterSrc?: string
  children: React.ReactNode
}

export function HeroVideo({ videoSrc, posterSrc, children }: HeroVideoProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Video Background (if provided and motion is allowed) */}
      {videoSrc && !prefersReducedMotion && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={posterSrc}
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-navy-900/80" />
        </div>
      )}

      {/* Poster Image Fallback */}
      {posterSrc && (prefersReducedMotion || !videoSrc) && (
        <div className="absolute inset-0 z-0">
          <img
            src={posterSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/60 to-navy-900/80" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
