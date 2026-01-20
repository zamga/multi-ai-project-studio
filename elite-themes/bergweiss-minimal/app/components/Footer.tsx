import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 px-6 mt-20">
      <div className="max-w-2xl mx-auto space-y-6">
        <p className="text-sm text-gray-600">
          Where required, services are delivered via authorised partners.
        </p>
        <p className="text-sm text-gray-400">
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
          {" · "}
          <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
          {" · "}
          <Link href="/cookies" className="hover:text-gray-600 transition-colors">Cookies</Link>
        </p>
        <p className="text-xs text-gray-400 leading-relaxed">
          BERGWEISS LTD (UK) — Registered in England and Wales — Company No. 16949445 — Registered Office: 71–75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
        </p>
      </div>
    </footer>
  );
}
