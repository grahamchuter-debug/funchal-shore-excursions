import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { highlights } from "@/data/highlights";
import { experiencePages } from "@/data/experiences";
import { getHighlightImage, getGuideImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const path = "/guides";
const description =
  "Funchal cruise planning guides — Valley of the Nuns, Pico do Arieiro, levada walks, Câmara de Lobos, Madeira wine, independent Funchal routes and honest advice for every type of Madeira passenger.";

export const metadata = buildMetadata({
  title: "Funchal Cruise Planning Guides — Madeira",
  description,
  path,
  keywords: [
    "Funchal cruise port guide",
    "Valley of the Nuns cruise",
    "Madeira levada walks cruise",
    "one day in Madeira",
    "Funchal independent guide",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Planning Guides", path },
];

export default function GuidesHubPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({ title: "Funchal Cruise Planning Guides — Madeira", description, path }),
        ]}
      />
      <PageHero
        title="Funchal Cruise Planning Guides"
        subtitle="The definitive Madeira cruise companion — volcanic mountains, laurisilva forest, wine culture, coastal villages, Monte cable car and practical advice for every type of Funchal passenger."
        image={getHighlightImage("best-funchal-shore-excursions")}
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />

          <h2 className="section-title mt-8">Places &amp; experiences</h2>
          <p className="section-subtitle">
            Authority guides to Madeira&apos;s highlights with transfer times and return-to-ship advice.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => {
              const img = getHighlightImage(h.slug);
              return (
                <Link key={h.slug} href={`/guides/${h.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                      image={img}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                      {h.attractionName}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{h.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-coastal-700">{h.travelTime}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <h2 className="section-title mt-16">Passenger guides</h2>
          <p className="section-subtitle">
            Editorial advice for first-timers, families and independent explorers — including the full self-guided
            Funchal itinerary.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiencePages.map((g) => {
              const img = getGuideImage(g.imageKey);
              return (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                      image={img}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                      {g.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{g.tagline}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
