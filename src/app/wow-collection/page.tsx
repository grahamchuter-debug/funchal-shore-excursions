import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";

const path = "/wow-collection";

export const metadata = buildMetadata({
  title: "Wow Collection — Distinctive Madeira Cruise Experiences",
  description:
    "The Wow Collection is our curated selection of hand-picked, small-group and private Madeira cruise experiences with trusted local operators. Madeira is an early destination for a genuine exclusive Wow product.",
  path,
  keywords: [
    "Wow Collection Madeira",
    "distinctive Madeira cruise experience",
    "premium Funchal excursion",
    "small group Madeira tour",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Wow Collection", path },
];

export default function WowCollectionPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Wow Collection — Distinctive Madeira Cruise Experiences",
            description:
              "Hand-picked distinctive cruise experiences with trusted local operators. Madeira is an early destination for a genuine Wow Collection exclusive.",
            path,
          }),
        ]}
      />
      <PageHero
        title="Wow Collection"
        subtitle="Hand-picked distinctive small-group and private experiences with trusted local operators — for cruise passengers who want more than the standard excursion."
        imageSrc={siteImages.hero.src}
        imageAlt={siteImages.hero.alt}
        compact
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          {/* What is the Wow Collection */}
          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold text-gray-900">What Is the Wow Collection?</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The Wow Collection is our growing portfolio of genuinely distinctive cruise experiences — small-group
              or private, with operators we trust, in destinations where we believe a curated approach delivers
              something a standard excursion cannot.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We do not badge standard reseller excursions with a Wow Collection mark. Every experience in the
              collection has earned its place through a careful selection process with local operators who understand
              what makes a cruise day genuinely memorable.
            </p>
          </div>

          {/* Madeira as early destination */}
          <div className="mt-10 card-signature p-8">
            <span className="badge-signature">
              <span aria-hidden="true">✦</span> In Development — Wow Collection
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-gray-900">
              Madeira: An Early Wow Collection Destination
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Madeira is one of the first destinations where we are developing a genuine Wow Collection exclusive —
              The Ultimate Madeira Discovery. We are working with a trusted local operator to create a small-group
              island experience that goes beyond the accessible highlights.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Once operational, The Ultimate Madeira Discovery will receive the Wow Collection badge here and on
              its excursion page. It is not yet available to book. No other Funchal excursion currently carries
              this badge.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/signature-madeira-experience" className="btn-primary">
                Learn about The Ultimate Madeira Discovery
              </Link>
              <Link href="/enquire?interest=signature-madeira" className="btn-secondary text-sm">
                Register your interest
              </Link>
            </div>
          </div>

          {/* Current recommendations */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-gray-900">
              Current Editor&apos;s Choice Recommendations
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              While The Ultimate Madeira Discovery is in development, these are our current recommended
              tours — carefully selected, well-paced and representative of what Madeira delivers for cruise passengers.
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="card-editorial overflow-hidden">
                <div className="p-6">
                  <span className="badge-editors-choice">⭐ Editor&apos;s Choice</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-gray-900">
                    Madeira Island Highlights
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Mountains, coastal villages, Madeira wine culture and island scenery — the single best
                    all-round introduction to the island for a standard port call.
                  </p>
                  <Link
                    href="/shore-excursions/madeira-island-highlights"
                    className="mt-4 inline-block text-sm font-semibold text-coastal-700"
                  >
                    Discover the tour →
                  </Link>
                </div>
              </div>

              <div className="card-editorial overflow-hidden">
                <div className="p-6">
                  <span className="badge-editors-choice">⭐ Editor&apos;s Choice</span>
                  <h3 className="mt-3 font-display text-lg font-bold text-gray-900">
                    Valley of the Nuns
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Curral das Freiras — a volcanic amphitheatre ringed by sheer mountain peaks. Madeira&apos;s
                    most dramatic accessible landscape.
                  </p>
                  <Link
                    href="/shore-excursions/valley-of-the-nuns-tour"
                    className="mt-4 inline-block text-sm font-semibold text-coastal-700"
                  >
                    Discover the tour →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Note on badge policy */}
          <div className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="font-display text-base font-bold text-gray-700">A note on the Wow Collection badge</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              The Wow Collection badge appears only on experiences that have passed our operator vetting and
              editorial selection process. It does not appear on standard reseller products. If you see a Wow
              Collection badge on this site, it has been earned — not assigned to fill a grid.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
