import { motion } from 'framer-motion'
import { SEO } from '../components/SEO'

export function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Orvantt Services. Learn how we collect, use, and protect your personal information."
        canonical="/privacy"
        noindex={true}
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-display-xl text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-body-lg text-navy-100 leading-relaxed">
              Last updated: November 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-display-md text-neutral-950 mb-6">Information We Collect</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              We collect information you provide directly to us when you contact us through our website, including your name, email address, company information, and any other information you choose to provide.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">How We Use Your Information</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body-md text-neutral-700 mb-6">
              <li>Respond to your inquiries and provide advisory services</li>
              <li>Send you information about our services and insights</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Information Sharing</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Data Security</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Your Rights</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information. To exercise these rights, please contact us at filipberg@orvanttservices.com.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Cookies</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Changes to This Policy</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Contact Us</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact us at filipberg@orvanttservices.com.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
