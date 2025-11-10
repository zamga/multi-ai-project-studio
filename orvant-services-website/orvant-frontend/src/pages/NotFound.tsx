import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '../components/SEO'

export function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to our homepage or contact us for assistance."
        noindex={true}
      />
      <div className="min-h-screen bg-white flex items-center justify-center py-24">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="text-display-xl font-display text-navy-900">404</span>
            </div>
            <h1 className="font-display text-display-lg text-neutral-950 mb-4">
              Page Not Found
            </h1>
            <p className="text-body-lg text-neutral-600 mb-10">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white text-body-md font-sans font-medium rounded-sm hover:bg-navy-800 transition-all duration-200 hover:shadow-elevation"
              >
                <Home className="mr-2" size={18} />
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-950 text-body-md font-sans font-medium rounded-sm hover:bg-neutral-50 transition-all duration-200"
              >
                Contact Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
