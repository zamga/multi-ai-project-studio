import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface ConsentPreferences {
  essential: boolean
  analytics: boolean
}

const CONSENT_KEY = 'orvantt-cookie-consent'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true,
    analytics: false,
  })

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY)
    if (!savedConsent) {
      setShowBanner(true)
    } else {
      const parsed = JSON.parse(savedConsent)
      setPreferences(parsed)
      if (parsed.analytics) {
        loadAnalytics()
      }
    }
  }, [])

  const loadAnalytics = () => {
    const gaScript = document.createElement('script')
    gaScript.async = true
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
    document.head.appendChild(gaScript)

    const gaInlineScript = document.createElement('script')
    gaInlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `
    document.head.appendChild(gaInlineScript)

    const hjScript = document.createElement('script')
    hjScript.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:XXXXXXX,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `
    document.head.appendChild(hjScript)
  }

  const handleAcceptAll = () => {
    const newPreferences = { essential: true, analytics: true }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newPreferences))
    setPreferences(newPreferences)
    setShowBanner(false)
    loadAnalytics()
  }

  const handleAcceptEssential = () => {
    const newPreferences = { essential: true, analytics: false }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newPreferences))
    setPreferences(newPreferences)
    setShowBanner(false)
  }

  const handleCustomize = () => {
    const newPreferences = { ...preferences }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newPreferences))
    setShowBanner(false)
    if (newPreferences.analytics) {
      loadAnalytics()
    }
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-elevation">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h3 className="font-sans font-semibold text-body-md text-neutral-950 mb-2">
              Cookie Preferences
            </h3>
            <p className="text-body-sm text-neutral-600 mb-4 max-w-3xl">
              We use cookies to enhance your experience. Essential cookies are required for the site to function. 
              Analytics cookies help us understand how you use our site and improve our services.
            </p>
            <div className="space-y-3 mb-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.essential}
                  disabled
                  className="w-4 h-4 rounded border-neutral-300"
                />
                <span className="text-body-sm text-neutral-700">
                  <strong>Essential cookies</strong> (required)
                </span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-4 h-4 rounded border-neutral-300 text-navy-600 focus:ring-navy-500"
                />
                <span className="text-body-sm text-neutral-700">
                  <strong>Analytics cookies</strong> (Google Analytics, Hotjar)
                </span>
              </label>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 bg-navy-600 text-white text-body-sm font-medium rounded-sm hover:bg-navy-700 transition-colors duration-220"
              >
                Accept All
              </button>
              <button
                onClick={handleAcceptEssential}
                className="px-6 py-2.5 bg-neutral-100 text-neutral-900 text-body-sm font-medium rounded-sm hover:bg-neutral-200 transition-colors duration-220"
              >
                Essential Only
              </button>
              <button
                onClick={handleCustomize}
                className="px-6 py-2.5 border border-neutral-300 text-neutral-900 text-body-sm font-medium rounded-sm hover:bg-neutral-50 transition-colors duration-220"
              >
                Save Preferences
              </button>
            </div>
          </div>
          <button
            onClick={handleAcceptEssential}
            className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
            aria-label="Close cookie banner"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export function ManageCookies() {
  const handleClick = () => {
    localStorage.removeItem(CONSENT_KEY)
    window.location.reload()
  }

  return (
    <button
      onClick={handleClick}
      className="text-body-sm text-neutral-400 hover:text-neutral-600 transition-colors underline"
    >
      Manage Cookies
    </button>
  )
}
