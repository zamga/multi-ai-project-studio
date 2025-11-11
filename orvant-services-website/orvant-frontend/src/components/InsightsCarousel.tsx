import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { motion } from 'framer-motion'

interface Insight {
  title: string
  category: string
  excerpt?: string
  thumbnail?: string
}

interface InsightsCarouselProps {
  insights: Insight[]
}

export function InsightsCarousel({ insights }: InsightsCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {insights.map((insight, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Link to="/insights" className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="h-full"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-navy-900 to-navy-800 rounded-sm overflow-hidden mb-4">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'linear-gradient(to right, #D4AF37 1px, transparent 1px), linear-gradient(to bottom, #D4AF37 1px, transparent 1px)',
                      backgroundSize: '40px 40px'
                    }} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-gold-500 rounded-sm opacity-60 group-hover:opacity-100 transition-opacity duration-220" />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-colors duration-220" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <span className="text-body-xs text-neutral-500 font-medium uppercase tracking-widest">
                    {insight.category}
                  </span>
                  <h3 className="font-sans font-medium text-body-lg text-neutral-950 group-hover:text-navy-900 transition-colors duration-220 leading-snug">
                    {insight.title}
                  </h3>
                  {insight.excerpt && (
                    <p className="text-body-sm text-neutral-600 leading-relaxed line-clamp-2">
                      {insight.excerpt}
                    </p>
                  )}
                  <div className="pt-2">
                    <span className="text-body-sm text-navy-900 font-medium group-hover:text-gold-600 transition-colors duration-220">
                      Read more →
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center gap-4 mt-8">
        <CarouselPrevious className="static translate-y-0 bg-white border-neutral-300 hover:bg-navy-900 hover:text-white hover:border-navy-900" />
        <CarouselNext className="static translate-y-0 bg-white border-neutral-300 hover:bg-navy-900 hover:text-white hover:border-navy-900" />
      </div>
    </Carousel>
  )
}
