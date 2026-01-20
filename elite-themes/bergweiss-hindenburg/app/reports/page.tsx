import Link from "next/link";
import { reports } from "../lib/reports";

export default function ReportsPage() {
  return (
    <div className="max-w-[760px] mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-12">Reports</h1>
      
      {reports.map((report, index) => (
        <div key={report.slug}>
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/reports/${report.slug}`} className="hover:underline">
                {report.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500">Published on {report.date}</p>
          </div>
          {index < reports.length - 1 && (
            <div className="asterism">* * *</div>
          )}
        </div>
      ))}
    </div>
  );
}
