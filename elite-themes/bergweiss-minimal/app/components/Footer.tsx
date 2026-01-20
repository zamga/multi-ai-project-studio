import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 px-6 mt-16">
      <div className="max-w-2xl mx-auto text-sm text-gray-600 space-y-3">
        <p>Where required, services are delivered via authorised partners.</p>
        <p>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          {" · "}
          <Link href="/terms" className="hover:underline">Terms</Link>
          {" · "}
          <Link href="/cookies" className="hover:underline">Cookies</Link>
        </p>
        <p>
          BERGWEISS LTD (UK) — Registered in England and Wales — Company No. 16949445 — Registered Office: 71–75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
        </p>
      </div>
    </footer>
  );
}
