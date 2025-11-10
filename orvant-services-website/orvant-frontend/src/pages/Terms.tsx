import { motion } from 'framer-motion'

export function Terms() {
  return (
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
              Terms of Service
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
            <h2 className="font-display text-display-md text-neutral-950 mb-6">Agreement to Terms</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              By accessing or using the Orvant Services website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Use of Website</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              This website is provided for informational purposes only. The content on this site does not constitute professional advice and should not be relied upon as such. For specific guidance on your circumstances, please contact us directly.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Intellectual Property</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              All content on this website, including text, graphics, logos, and software, is the property of Orvant Services and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Confidentiality</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              Any information you provide through this website will be treated as confidential. However, please note that information transmitted over the internet is not completely secure. We cannot guarantee the security of information transmitted through our website.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">No Advisory Relationship</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              Use of this website does not create an advisory relationship between you and Orvant Services. An advisory relationship is established only through a formal engagement letter signed by both parties.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Limitation of Liability</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              Orvant Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of this website or any services provided through this website.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Third-Party Links</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              This website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Changes to Terms</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Governing Law</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>

            <h2 className="font-display text-display-md text-neutral-950 mb-6 mt-12">Contact Information</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us at filipberg@orvanttservices.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
