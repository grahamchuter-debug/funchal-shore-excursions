import Link from "next/link";

export function MadeiraWowCollection() {
  return (
    <section className="section-padding bg-white border-y border-coastal-100">
      <div className="container-wide max-w-4xl">
        <div className="card-signature p-8 sm:p-10">
          <span className="badge-signature">
            <span aria-hidden="true">✦</span> Wow Collection — In Development
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold text-gray-900 sm:text-3xl">
            The Ultimate Madeira Discovery
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A future premium small-group island experience — cloud forest levadas, dramatic mountain viewpoints,
            coastal villages and Madeira wine culture, paced carefully around your port window. We are working
            with a trusted local Madeira operator to make this available as a genuine Wow Collection exclusive.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            In the meantime,{" "}
            <Link href="/shore-excursions/madeira-island-highlights" className="text-coastal-700 font-medium hover:underline">
              Madeira Island Highlights
            </Link>
            {" "}and{" "}
            <Link href="/shore-excursions/valley-of-the-nuns-tour" className="text-coastal-700 font-medium hover:underline">
              Valley of the Nuns
            </Link>
            {" "}are our current Editor&apos;s Choice recommendations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/signature-madeira-experience" className="btn-primary text-sm">
              Register your interest
            </Link>
            <Link href="/wow-collection" className="btn-secondary text-sm">
              About the Wow Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
