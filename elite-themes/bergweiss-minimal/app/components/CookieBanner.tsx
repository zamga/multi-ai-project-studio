"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
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

  if (!showBanner && !showModal) return null;

  return (
    <>
      {showBanner && !showModal && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-4 shadow-lg z-50">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm text-gray-700 mb-4">
              We use essential cookies to make this site work. We use analytics cookies only if you choose &quot;Accept analytics&quot;.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleAcceptAnalytics}
                className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800"
              >
                Accept analytics
              </button>
              <button
                onClick={handleRejectAnalytics}
                className="px-4 py-2 border border-black text-sm hover:bg-gray-100"
              >
                Reject analytics
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 text-sm text-gray-600 hover:underline"
              >
                Cookie settings
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Cookie Settings</h3>
            <div className="mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="w-5 h-5"
                />
                <span className="text-sm">Analytics cookies</span>
              </label>
              <p className="text-xs text-gray-500 mt-1 ml-8">
                Help us understand how the site is used so we can improve it.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 bg-black text-white text-sm hover:bg-gray-800"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border border-gray-300 text-sm hover:bg-gray-100"
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
