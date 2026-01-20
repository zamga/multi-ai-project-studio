import Link from "next/link";
import { notFound } from "next/navigation";
import { getReportBySlug, getAllReportSlugs } from "../../lib/reports";

interface ReportPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllReportSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ReportPage({ params }: ReportPageProps) {
  const { slug } = await params;
  const report = getReportBySlug(slug);

  if (!report) {
    notFound();
  }

  return (
    <div className="max-w-[760px] mx-auto px-6 py-12">
      <Link href="/reports" className="text-sm text-gray-500 hover:text-black mb-8 inline-block">
        ← Back to Reports
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{report.title}</h1>
      <p className="text-sm text-gray-500 mb-12">Published on {report.date}</p>
      
      <div className="prose prose-lg max-w-none">
        {report.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-6 text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-16 pt-12 border-t border-gray-200">
        <Link href="/reports" className="text-sm text-gray-500 hover:text-black">
          ← Back to Reports
        </Link>
      </div>
    </div>
  );
}
