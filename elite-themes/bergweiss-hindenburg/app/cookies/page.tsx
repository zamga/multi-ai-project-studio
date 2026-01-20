"use client";

import { useState, useEffect } from "react";

export default function CookiesPage() {
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const analytics = localStorage.getItem("analytics-enabled");
    setAnalyticsEnabled(analytics === "true");
  }, []);

  const handleSaveSettings = () => {
    localStorage.setItem("cookie-consent", analyticsEnabled ? "accepted" : "rejected");
    localStorage.setItem("analytics-enabled", analyticsEnabled ? "true" : "false");
    setShowModal(false);
  };

  return (
    <div className="max-w-[760px] mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Cookie Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4">What cookies are</h2>
          <p className="text-lg leading-relaxed">
            Cookies are small text files stored on your device. Some cookies are essential for the website to function.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Essential cookies</h2>
          <p className="text-lg leading-relaxed">
            We use essential cookies to make the site work (for example, to remember your cookie preferences). These do not require consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Analytics cookies (optional)</h2>
          <p className="text-lg leading-relaxed">
            We use analytics cookies only if you choose &quot;Accept analytics&quot; in the cookie banner. These help us understand how the site is used so we can improve it. Consent must be actively given.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">How to manage cookies</h2>
          <p className="text-lg leading-relaxed">
            You can change your cookie preference at any time via{" "}
            {mounted ? (
              <button
                onClick={() => setShowModal(true)}
                className="underline hover:no-underline"
              >
                Cookie settings
              </button>
            ) : (
              <span className="underline">Cookie settings</span>
            )}
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Cookies we set</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-bold">Cookie</th>
                  <th className="py-3 font-bold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">cookie-consent</td>
                  <td className="py-3">Stores your cookie preference (essential)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">analytics-enabled</td>
                  <td className="py-3">Stores whether analytics is enabled (essential)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Cookie Settings Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 max-w-md w-full">
            <h3 className="text-lg font-bold mb-6">Cookie Settings</h3>
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
    </div>
  );
}
