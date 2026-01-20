export default function CookiePolicy() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Cookie Policy</h1>

      <section>
        <h2 className="text-xl font-bold mb-2">What cookies are</h2>
        <p>
          Cookies are small text files stored on your device. Some cookies are essential for the website to function.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Essential cookies</h2>
        <p>
          We use essential cookies to make the site work (for example, to remember your cookie preferences). These do not require consent.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Analytics cookies (optional)</h2>
        <p>
          We use analytics cookies only if you choose &quot;Accept analytics&quot; in the cookie banner. These help us understand how the site is used so we can improve it. Consent must be actively given.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">How to manage cookies</h2>
        <p>
          You can change your cookie preference at any time via &quot;Cookie settings&quot; in the banner.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Cookies we set</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Essential:</strong> cookie-consent / consent status</li>
          <li><strong>Analytics:</strong> (only if enabled) analytics cookies from the analytics provider</li>
        </ul>
      </section>
    </div>
  );
}
