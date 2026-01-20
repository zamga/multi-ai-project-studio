import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 mt-20">
      <div className="max-w-[760px] mx-auto px-6 space-y-4">
        <p className="text-sm text-gray-600">
          © 2026 BERGWEISS LTD. All Rights Reserved ·{" "}
          <Link href="/legal" className="hover:text-black">Legal Disclaimer</Link> ·{" "}
          <Link href="/privacy" className="hover:text-black">Privacy Policy</Link> ·{" "}
          <Link href="/cookies" className="hover:text-black">Cookie Policy</Link>
        </p>
        <p className="text-xs text-gray-400">
          BERGWEISS LTD (UK) — Registered in England and Wales — Company No. 16949445 — Registered Office: 71–75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
        </p>
      </div>
    </footer>
  );
}
