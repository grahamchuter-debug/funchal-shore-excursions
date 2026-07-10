import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getAllFaqs } from "@/data/faqs";

const path = "/faq";

export const metadata = buildMetadata({
  title: "Funchal Cruise FAQ — Madeira Port Day Questions",
  description:
    "Frequently asked questions about Funchal cruise planning — Madeira shore excursions, port layout, levada walks, Valley of the Nuns, Monte cable car and getting back to your ship.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path },
];

export default function FAQPage() {
  const faqs = getAllFaqs();
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
          webPageSchema({
            title: "Funchal Cruise FAQ — Madeira Port Day Questions",
            description: "Frequently asked questions about Funchal cruise planning and Madeira shore excursions.",
            path,
          }),
        ]}
      />
      <PageHero
        title="Funchal Cruise Planning FAQ"
        subtitle="Answers to the most common questions from Madeira cruise passengers — port logistics, excursion choices and independent day planning."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} />
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
