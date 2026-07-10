import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FunchalCruisePlanner } from "@/components/FunchalCruisePlanner";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";

const path = "/cruise-planner";
const description =
  "Build a personalised Madeira cruise plan. Enter your arrival and departure times, party size, interests, mobility, budget and travel style — get tailored excursions, guides and a realistic Funchal port day plan.";

export const metadata = buildMetadata({
  title: "Funchal Cruise Planner — Madeira Port Day Itinerary",
  description,
  path,
  keywords: ["Funchal cruise planner", "Madeira cruise day plan", "Funchal port day itinerary", "Madeira shore excursion planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Funchal Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({ title: "Funchal Cruise Planner", description, path }),
        ]}
      />
      <PageHero
        title="Funchal Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial itinerary recommendations from Editor's Choice island tours to levada walks, Madeira wine experiences and independent Funchal days."
        imageSrc={siteImages.hero.src}
        imageAlt={siteImages.hero.alt}
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <FunchalCruisePlanner />
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
