import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Funchal Shore Excursions",
  description:
    "About Funchal Shore Excursions — an independent Madeira cruise planning resource for port-day passengers discovering the Island of Eternal Spring.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "About Funchal Shore Excursions",
            description: "About Funchal Shore Excursions — independent Madeira cruise planning.",
            path,
          }),
        ]}
      />
      <PageHero
        title="About Funchal Shore Excursions"
        subtitle="An independent planning resource built for cruise passengers calling at Funchal — one of the Atlantic's most rewarding port days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="prose-body">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Funchal. Whether you
              have one day ashore at the Funchal cruise terminal or want to understand what makes Madeira genuinely
              different from other Atlantic ports, our goal is to make your port day informed, confident and
              genuinely enjoyable.
            </p>
            <p>
              We focus on the practical decisions that shape a good Funchal cruise day: whether to stay in the
              city or journey to the Valley of the Nuns, Pico do Arieiro or levada trails; how walkable Funchal
              really is from the terminal; when a guided excursion beats independent exploring; and how to build
              a realistic return-to-ship buffer after a mountain drive or levada walk.
            </p>
            <p>
              Our guides are written for real cruise timings, not generic Portugal tourism. We highlight Madeiran
              food and wine culture, the Monte cable car, laurisilva forest ecology, coastal village character and
              honest comparisons when you must choose one anchor experience for your port window. If an independent
              Funchal day is genuinely enough for some visitors, we say so. If the Valley of the Nuns is the better
              option for others, we explain exactly why. Trust before sales.
            </p>
            <p>
              Have a question we haven&apos;t answered?{" "}
              <a href="/enquire">Get in touch</a> and we&apos;ll help you plan.
            </p>
          </div>
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
