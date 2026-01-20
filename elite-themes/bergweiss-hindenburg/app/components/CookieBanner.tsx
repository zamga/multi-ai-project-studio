"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAnalytics = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("analytics-enabled", "true");
    setShowBanner(false);
  };

  const handleRejectAnalytics = () => {
    localStorage.setItem("cookie-consent", "rejected");
    localStorage.setItem("analytics-enabled", "false");
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem("cookie-consent", analyticsEnabled ? "accepted" : "rejected");
    localStorage.setItem("analytics-enabled", analyticsEnabled ? "true" : "false");
    setShowModal(false);
    setShowBanner(false);
  };

  const openSettings = () => {
    setShowModal(true);
    setShowBanner(false);
  };

  if (!mounted) return null;
  if (!showBanner && !showModal) return null;

  return (
    <>
      {showBanner && !showModal && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-6 px-6 z-50">
          <div className="max-w-[760px] mx-auto">
            <p className="text-sm text-gray-600 mb-4">
              We use essential cookies to make this site work. We use analytics cookies only if you choose &quot;Accept analytics&quot;.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAcceptAnalytics}
                className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800"
              >
                Accept analytics
              </button>
              <button
                onClick={handleRejectAnalytics}
                className="px-4 py-2 border border-gray-300 text-sm hover:bg-gray-50"
              >
                Reject analytics
              </button>
              <button
                onClick={openSettings}
                className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
              >
                Cookie settings
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 max-w-md w-full">
            <h3 className="text-lg font-serif font-bold mb-6">Cookie Settings</h3>
            <div className="mb-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="w-5 h-5"
                />
                <span className="text-sm">Analytics cookies</span>
              </label>
              <p className="text-xs text-gray-500 mt-2 ml-8">
                Help us understand how the site is used so we can improve it.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 text-sm hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
