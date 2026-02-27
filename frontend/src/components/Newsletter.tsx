import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-24 bg-[#0a0f1c] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c8a45e]/3 blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-900/5 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8a45e]/10 border border-[#c8a45e]/20 mb-6">
            <Mail className="w-4 h-4 text-[#c8a45e]" />
            <span className="text-sm font-medium text-[#c8a45e]">Subscribe to Briefings</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Stay Ahead of the <span className="text-gradient italic">Markets</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Our signature weekly newsletter delivers expert insights, market analysis,
            and exclusive research directly to your inbox.
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-emerald-400 font-medium">Successfully subscribed. Welcome aboard.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#c8a45e]/50 focus:ring-1 focus:ring-[#c8a45e]/30 transition-all duration-300 text-sm"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c8a45e] to-[#d4b97a] text-[#0a0f1c] font-semibold rounded-xl hover:shadow-xl hover:shadow-[#c8a45e]/20 transition-all duration-500 flex-shrink-0"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="text-xs text-gray-600 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
