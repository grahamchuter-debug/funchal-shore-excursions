import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";

const path = "/signature-madeira-experience";

export const metadata = buildMetadata({
  title: "The Ultimate Madeira Discovery — In Development",
  description:
    "A premium signature cruise experience for Madeira — cloud forest levadas, volcanic summits, coastal villages and wine culture in one orchestrated island day. In development with a trusted local operator. Register your interest.",
  path,
  noindex: false,
  keywords: [
    "Madeira signature excursion",
    "premium Madeira cruise experience",
    "ultimate Madeira discovery",
    "Funchal private island tour",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "The Ultimate Madeira Discovery", path },
];

export default function SignatureMadeiraPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "The Ultimate Madeira Discovery — In Development",
            description:
              "A premium signature Madeira cruise experience in development. Register your interest to hear first when it launches.",
            path,
          }),
        ]}
      />
      <PageHero
        title="The Ultimate Madeira Discovery"
        subtitle="A premium signature experience for discerning cruise passengers — in development with a trusted local Madeira operator."
        imageSrc={siteImages.hero.src}
        imageAlt={siteImages.hero.alt}
        compact
      />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          {/* Status banner */}
          <div className="mt-8 rounded-xl border-2 border-coastal-200 bg-coastal-50 p-6 sm:p-8">
            <div className="flex flex-wrap items-start gap-4">
              <span className="badge-signature shrink-0">
                <span aria-hidden="true">✦</span> In Development — Not Yet Bookable
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold text-gray-900 sm:text-3xl">
              Coming to the Wow Collection
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
              We are working with a carefully selected Madeira operator to create a genuinely premium small-group
              island experience — one that goes beyond the standard itinerary and delivers Madeira in a way that
              rewards the most curious cruise passengers. This is not yet available to book.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Register your interest below to be among the first to hear when The Ultimate Madeira Discovery
              becomes available. No commitment required.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/enquire?interest=signature-madeira" className="btn-primary">
                Register your interest
              </Link>
              <Link href="/wow-collection" className="btn-secondary text-sm">
                About the Wow Collection
              </Link>
            </div>
          </div>

          {/* What we are building */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-gray-900">What We Are Building</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              The Ultimate Madeira Discovery is designed around what makes Madeira genuinely exceptional —
              not just the accessible highlights, but the layered island that emerges when you combine the
              right places, right timing and right guide.
            </p>

            {/* Placeholder itinerary structure */}
            <div className="mt-8 space-y-4">
              {[
                {
                  label: "Morning",
                  title: "Itinerary details — to be confirmed",
                  desc: "The morning section of the experience will be revealed when the operator partnership is finalised. Likely to include early access to a key Madeira landscape before coach groups arrive.",
                },
                {
                  label: "Midday",
                  title: "Signature experience — to be confirmed",
                  desc: "The midday experience will include a distinctive food, wine or cultural encounter at a Madeira location not typically accessible on standard excursions.",
                },
                {
                  label: "Afternoon",
                  title: "Coastal or mountain section — to be confirmed",
                  desc: "The afternoon will be designed around the best light conditions for Madeira's most photogenic landscapes, with a measured return to Funchal.",
                },
                {
                  label: "Return",
                  title: "Cruise-timed return — to be confirmed",
                  desc: "All-aboard confidence built into the schedule. Specific return buffers will be published alongside full booking details.",
                },
              ].map((item) => (
                <div key={item.label} className="card-feature border-dashed opacity-75">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="pill-accent text-xs font-semibold">{item.label}</span>
                    <h3 className="font-display text-base font-bold text-gray-500">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing placeholder */}
          <div className="mt-12 card-feature border-dashed opacity-75">
            <h2 className="font-display text-xl font-bold text-gray-500">Pricing — to be confirmed</h2>
            <p className="mt-2 text-sm text-gray-500 italic">
              Pricing will be published when the operator partnership is confirmed and commercial terms are agreed.
              This will be a premium experience priced accordingly — not a budget excursion.
            </p>
          </div>

          {/* Calendar placeholder */}
          <div className="mt-6 card-feature border-dashed opacity-75">
            <h2 className="font-display text-xl font-bold text-gray-500">Availability calendar — in development</h2>
            <p className="mt-2 text-sm text-gray-500 italic">
              Departure dates, group sizes and booking calendar will appear here once operational arrangements are in place.
            </p>
          </div>

          {/* Interim recommendations */}
          <div className="mt-12 bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-gray-900">
              In the meantime — our current best recommendations
            </h2>
            <p className="mt-3 text-gray-600">
              While The Ultimate Madeira Discovery is in development, these are our current Editor&apos;s Choice
              recommendations for cruise passengers seeking the best of Madeira on a port day:
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Link
                href="/shore-excursions/madeira-island-highlights"
                className="card-editorial group block p-5"
              >
                <span className="badge-editors-choice text-xs">⭐ Editor&apos;s Choice</span>
                <h3 className="mt-3 font-display text-base font-bold text-gray-900 group-hover:text-coastal-800">
                  Madeira Island Highlights
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  The best all-round introduction — mountains, coastal villages, wine culture and Madeira scenery.
                </p>
              </Link>
              <Link
                href="/shore-excursions/valley-of-the-nuns-tour"
                className="card-editorial group block p-5"
              >
                <span className="badge-editors-choice text-xs">⭐ Editor&apos;s Choice</span>
                <h3 className="mt-3 font-display text-base font-bold text-gray-900 group-hover:text-coastal-800">
                  Valley of the Nuns
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Madeira&apos;s volcanic amphitheatre — Curral das Freiras ringed by sheer mountain peaks.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
