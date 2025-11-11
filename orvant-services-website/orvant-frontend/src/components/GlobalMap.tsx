import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface MapLocation {
  id: string
  name: string
  x: number
  y: number
  region: 'Americas' | 'EMEA' | 'APAC'
  details: {
    cities: string[]
    expertise: string[]
    capabilities: string[]
  }
}

const locations: MapLocation[] = [
  {
    id: 'new-york',
    name: 'New York',
    x: 25,
    y: 35,
    region: 'Americas',
    details: {
      cities: ['New York', 'Toronto', 'São Paulo'],
      expertise: ['SEC compliance', 'TSX regulations', 'Cross-border M&A'],
      capabilities: ['US capital markets', 'Canadian transactions', 'Latin America expansion']
    }
  },
  {
    id: 'london',
    name: 'London',
    x: 50,
    y: 30,
    region: 'EMEA',
    details: {
      cities: ['London', 'Frankfurt', 'Dubai'],
      expertise: ['FCA regulations', 'BaFin compliance', 'DIFC framework'],
      capabilities: ['European M&A', 'Middle East transactions', 'Pan-European coordination']
    }
  },
  {
    id: 'singapore',
    name: 'Singapore',
    x: 75,
    y: 50,
    region: 'APAC',
    details: {
      cities: ['Singapore', 'Hong Kong', 'Sydney'],
      expertise: ['MAS regulations', 'HKMA compliance', 'ASIC framework'],
      capabilities: ['Asia-Pacific M&A', 'Cross-border deals', 'Regional expansion']
    }
  }
]

export function GlobalMap() {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  return (
    <div className="relative w-full">
      {/* SVG Map */}
      <svg
        viewBox="0 0 100 60"
        className="w-full h-auto"
        role="img"
        aria-label="Interactive world map showing Orvantt Services global presence"
      >
        {/* Background */}
        <rect width="100" height="60" fill="#F5F5F5" />
        
        {/* Simplified continents */}
        <g opacity="0.3" fill="#001F3F">
          {/* Americas */}
          <path d="M 15 20 Q 20 15 25 20 L 30 40 Q 25 45 20 40 Z" />
          {/* Europe/Africa */}
          <path d="M 45 20 Q 50 15 55 20 L 55 45 Q 50 50 45 45 Z" />
          {/* Asia/Pacific */}
          <path d="M 70 25 Q 80 20 85 30 L 85 50 Q 75 55 70 45 Z" />
        </g>

        {/* Connection lines */}
        <g stroke="#D4AF37" strokeWidth="0.3" opacity="0.4" fill="none">
          <path d="M 25 35 Q 37.5 25 50 30" strokeDasharray="1,1" />
          <path d="M 50 30 Q 62.5 35 75 50" strokeDasharray="1,1" />
        </g>

        {/* Location markers */}
        {locations.map((location) => (
          <g key={location.id}>
            {/* Pulse effect on hover */}
            {hoveredLocation === location.id && (
              <circle
                cx={location.x}
                cy={location.y}
                r="3"
                fill="#D4AF37"
                opacity="0.3"
              >
                <animate
                  attributeName="r"
                  from="3"
                  to="6"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.3"
                  to="0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
            
            {/* Marker */}
            <circle
              cx={location.x}
              cy={location.y}
              r="1.5"
              fill={hoveredLocation === location.id ? '#D4AF37' : '#001F3F'}
              className="cursor-pointer transition-all duration-220"
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              onClick={() => setSelectedLocation(location)}
              role="button"
              aria-label={`View details for ${location.name}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedLocation(location)
                }
              }}
            />
            
            {/* Label */}
            <text
              x={location.x}
              y={location.y - 3}
              textAnchor="middle"
              fontSize="2"
              fill="#001F3F"
              className="pointer-events-none font-sans"
              opacity={hoveredLocation === location.id ? 1 : 0.7}
            >
              {location.name}
            </text>
          </g>
        ))}
      </svg>

      {/* Tooltip on hover */}
      <AnimatePresence>
        {hoveredLocation && !selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
          >
            <div className="bg-navy-900 text-white px-4 py-2 rounded-sm shadow-lg text-body-sm">
              Click to view details
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for location details */}
      <AnimatePresence>
        {selectedLocation && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setSelectedLocation(null)}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="bg-white rounded-sm shadow-2xl p-8 mx-4">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 id="modal-title" className="font-display text-display-md text-neutral-950 mb-2">
                      {selectedLocation.region}
                    </h3>
                    <p className="text-body-sm text-neutral-500 uppercase tracking-widest">
                      Regional Presence
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="p-2 hover:bg-neutral-100 rounded-sm transition-colors duration-220"
                    aria-label="Close modal"
                  >
                    <X size={20} className="text-neutral-600" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-sans font-semibold text-body-md text-neutral-950 mb-3">
                      Key Cities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.details.cities.map((city, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-neutral-100 text-neutral-700 text-body-sm rounded-sm"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-sans font-semibold text-body-md text-neutral-950 mb-3">
                      Regulatory Expertise
                    </h4>
                    <ul className="space-y-2">
                      {selectedLocation.details.expertise.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gold-500 mr-2">•</span>
                          <span className="text-body-sm text-neutral-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-sans font-semibold text-body-md text-neutral-950 mb-3">
                      Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {selectedLocation.details.capabilities.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gold-500 mr-2">•</span>
                          <span className="text-body-sm text-neutral-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
