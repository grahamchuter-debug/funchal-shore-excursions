import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import { terminals, portGuideSections, portGuideFaqs } from "@/data/port-guide";

const path = "/funchal-cruise-port-guide";
const image = siteImages.port;
const description =
  "The complete Funchal cruise port guide — terminal location, seafront walking access, Monte cable car, taxi costs, island excursion staging and return-to-ship timing for Madeira cruise passengers.";

export const metadata = buildMetadata({
  title: "Funchal Cruise Port Guide — Where Ships Dock in Madeira",
  description,
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: [
    "Funchal cruise port",
    "Funchal cruise port guide",
    "Funchal cruise terminal",
    "Madeira cruise port guide",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Funchal Cruise Port Guide", path },
];

export default function CruisePortGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(portGuideFaqs),
          articleSchema({ title: "Funchal Cruise Port Guide", description, path, image: image.src }),
        ]}
      />
      <PhotoHeroBand
        image={image}
        eyebrow="Terminal guidance"
        title="Funchal Cruise Port Guide"
        subtitle="Where ships dock, how to reach Funchal city centre and Monte, cable car logistics, taxi costs and return-to-ship timing — everything for arrival day in Madeira."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <h2 className="section-title text-2xl mb-4">Funchal cruise berths at a glance</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-coastal-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Terminal</th>
                  <th className="px-4 py-3 text-left font-semibold">Quay</th>
                  <th className="px-4 py-3 text-left font-semibold">Used by</th>
                  <th className="px-4 py-3 text-left font-semibold">City access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {terminals.map((t) => (
                  <tr key={t.name}>
                    <td className="px-4 py-3 font-medium text-gray-900">{t.name}</td>
                    <td className="px-4 py-3 text-gray-600">{t.quay}</td>
                    <td className="px-4 py-3 text-gray-600">{t.usedBy}</td>
                    <td className="px-4 py-3 text-gray-600">{t.cityAccess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Check your cruise app the evening before — mountain excursion returns can be affected by Madeira&apos;s winding roads and tourist traffic near viewpoints.
          </p>

          <div className="prose-body mt-4">
            {portGuideSections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Link href="/guides/independent-funchal-guide" className="nav-card">
              <h3 className="font-display text-base font-bold text-gray-900">Independent Funchal guide</h3>
              <p className="mt-1 text-sm text-gray-600">Zona Velha, Monte cable car and wine lodges on foot.</p>
            </Link>
            <Link href="/guides/one-day-in-madeira" className="nav-card">
              <h3 className="font-display text-base font-bold text-gray-900">One day in Madeira</h3>
              <p className="mt-1 text-sm text-gray-600">Sample itineraries for your Funchal port window.</p>
            </Link>
            <Link href="/ship-schedules/funchal" className="nav-card">
              <h3 className="font-display text-base font-bold text-gray-900">Ship schedules</h3>
              <p className="mt-1 text-sm text-gray-600">See who&apos;s in port before you book.</p>
            </Link>
          </div>

          <div className="mt-12">
            <FAQSection faqs={portGuideFaqs} title="Funchal Cruise Port — FAQs" />
          </div>
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
