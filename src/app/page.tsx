import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ChooseYourMadeira } from "@/components/ChooseYourMadeira";
import { SpiritOfMadeira } from "@/components/SpiritOfMadeira";
import { HonestAdvice } from "@/components/HonestAdvice";
import { EditorsChoice } from "@/components/EditorsChoice";
import { ExcursionCategories } from "@/components/ExcursionCategories";
import { CruisePassengerRatings } from "@/components/CruisePassengerRatings";
import { ArrivalTimeline } from "@/components/ArrivalTimeline";
import { VisitorTypeSelector } from "@/components/VisitorTypeSelector";
import { TrustSignals } from "@/components/TrustSignals";
import { MadeiraWowCollection } from "@/components/MadeiraWowCollection";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { coreSections, getHomepageFaqs } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { siteImages, getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";

export const metadata = buildMetadata({
  title: "Funchal Shore Excursions — Madeira Cruise Port Guide",
  description:
    "Discover the best of Madeira in a single unforgettable day. Explore Funchal shore excursions, independent cruise advice and scenic island experiences for passengers visiting by ship.",
  path: "/",
  keywords: [
    "Funchal shore excursions",
    "Madeira cruise excursions",
    "Funchal cruise port",
    "Valley of the Nuns cruise",
    "Madeira levada walks",
    "Madeira island highlights",
    "Funchal cruise day",
  ],
});

const SITE_DESCRIPTION =
  "Funchal: Gateway to Madeira — the Island of Eternal Spring. Mountains, cloud forest, wine culture, coastal villages and gardens with carefully selected shore excursions.";

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions().slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Funchal Shore Excursions — Madeira Cruise Port",
            description: SITE_DESCRIPTION,
            path: "/",
          }),
        ]}
      />

      <PreloadImage base={siteImages.hero.base} role="hero" />

      {/* 1. Hero */}
      <section className="home-hero">
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-3 text-coastal-100">
            Funchal: Gateway to Madeira — The Island of Eternal Spring
          </p>
          <h1 className="home-hero-heading">
            Discover the Best of Madeira from Funchal
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Explore carefully selected Funchal shore excursions, independent cruise advice and scenic island
            experiences designed for passengers visiting Madeira by ship. Mountains, cloud forest, wine, gardens
            and coastal villages — all from one of the Atlantic&apos;s most beautiful cruise ports.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shore-excursions" className="btn-accent">Explore Shore Excursions</Link>
            <Link href="/cruise-planner" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
              Help Me Choose My Madeira Day
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">⛰️</span> Mountains</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">🍷</span> Wine</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">🌿</span> Levadas</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">🌺</span> Gardens</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">🏘️</span> Coastal Villages</span>
          </div>
        </div>
      </section>

      {/* 2. ChooseYourMadeira */}
      <ChooseYourMadeira />

      {/* 3. SpiritOfMadeira */}
      <SpiritOfMadeira />

      {/* 4. Signature Madeira Experience — In Development */}
      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-4xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <span className="badge-signature">
                <span aria-hidden="true">✦</span> In Development — Wow Collection
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                The Ultimate Madeira Discovery
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">
                A premium signature experience for discerning cruise passengers — cloud forest levadas, volcanic
                mountain summits, secret coastal villages and Madeira wine culture in one carefully orchestrated
                island day. We are working with a trusted local operator to bring this to life.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/signature-madeira-experience" className="btn-accent">
                  Register your interest
                </Link>
                <Link href="/wow-collection" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                  About the Wow Collection
                </Link>
              </div>
            </div>
            <div className="shrink-0 sm:w-56 lg:w-72">
              <div className="card-signature p-6 text-gray-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-maple-600">Status</p>
                <p className="mt-2 font-display text-lg font-bold">In Development</p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Operator partnership in progress. Not yet bookable. Register interest to hear first when it launches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EditorsChoice */}
      <EditorsChoice />

      {/* 6. HonestAdvice */}
      <HonestAdvice />

      {/* 7. ExcursionCategories */}
      <ExcursionCategories />

      {/* 8. VisitorTypeSelector */}
      <VisitorTypeSelector />

      {/* 9. Featured shore excursions */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="section-eyebrow">When you&apos;re ready</p>
            <h2 className="section-title mt-2">Shore excursions for your Madeira day</h2>
            <p className="section-subtitle">
              Once you know which experience suits your interests, these cruise-timed tours are designed
              for passengers who already understand why Madeira matters.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((e) => {
              const image = getExcursionImage(e.slug);
              const isEditorsChoice = e.slug === "madeira-island-highlights";
              const isComingSoon = e.slug === "ultimate-madeira-discovery";
              return (
                <Link
                  key={e.slug}
                  href={`/shore-excursions/${e.slug}`}
                  className="card-editorial group overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {isEditorsChoice && !isComingSoon && (
                      <span className="absolute left-3 top-3 badge-editors-choice">⭐ Editor&apos;s Choice</span>
                    )}
                    {isComingSoon && (
                      <span className="absolute left-3 top-3 badge-signature">✦ In Development</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                      {e.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-coastal-700">
                      Discover more →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/shore-excursions" className="btn-primary">All Shore Excursions</Link>
          </div>
        </div>
      </section>

      {/* 10. Arrival timeline + CruisePassengerRatings */}
      <ArrivalTimeline />
      <CruisePassengerRatings />

      {/* 11. Independent Funchal guide CTA */}
      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="section-eyebrow text-coastal-200">Independent Funchal guide</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Explore Funchal on your own terms
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Where ships dock, the seafront promenade walk, Zona Velha, Mercado dos Lavradores, Monte cable car,
              wine lodge visits, Funchal dining and return-to-ship advice — everything you need for a confident
              self-guided day in one of the Atlantic&apos;s most walkable cruise ports.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/guides/independent-funchal-guide" className="btn-accent">
                Read the independent guide
              </Link>
              <Link
                href="/cruise-port-guide"
                className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Funchal port guide
              </Link>
            </div>
          </div>
          <div className="card-feature bg-white/5 border-white/10 text-white">
            <h3 className="font-display text-xl font-bold">Quick independent day framework</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li><strong className="text-white">Morning:</strong> Walk promenade to Mercado dos Lavradores, then Zona Velha historic quarter</li>
              <li><strong className="text-white">Midday:</strong> Monte cable car up, explore Monte Palace gardens, lunch with Atlantic views</li>
              <li><strong className="text-white">Afternoon:</strong> Wine lodge visit in central Funchal — open to walk-in visitors</li>
              <li><strong className="text-white">Return:</strong> Seafront promenade walk back to terminal — allow 60–90 min buffer before all-aboard</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 12. Comparison guides teaser */}
      <section className="section-padding bg-coastal-50">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">Funchal or island tour?</h3>
            <p className="mt-3 text-gray-700">
              City exploration versus mountain landscapes, valley villages and levada walks — our comparisons
              help you choose the day that suits your interests and port window.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/compare/can-you-explore-funchal-independently" className="btn-secondary text-sm">Compare options</Link>
              <Link href="/compare/best-madeira-tour-for-first-time-visitors" className="btn-secondary text-sm">Best for first-timers</Link>
            </div>
          </div>
          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">Is the Valley of the Nuns worth it?</h3>
            <p className="mt-3 text-gray-700">
              One of Madeira&apos;s most dramatic landscapes — a volcanic amphitheatre ringed by 1,000 m peaks
              with a village at its floor. We tell you honestly when it is and is not worth the transfer time.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/compare/valley-of-the-nuns-vs-cabo-girao" className="btn-secondary text-sm">Valley vs Cabo Girão</Link>
              <Link href="/compare/levada-walk-or-island-tour" className="btn-secondary text-sm">Levada vs island tour</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Planning hub (coreSections) */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Plan your port day</p>
          <h2 className="section-title mt-2">Everything you need for an unforgettable Madeira day</h2>
          <p className="section-subtitle">
            Guides, comparisons, schedules and honest advice — because the best bookings start with genuine understanding.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreSections.map((s) => (
              <Link key={s.slug} href={s.href} className="nav-card group flex h-full flex-col">
                <span className="font-display text-2xl font-bold text-coastal-200">{s.number}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{s.description}</p>
                <span className="mt-3 text-sm font-semibold text-coastal-700">{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Cruise schedule / planner CTA */}
      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Shape your perfect Madeira day
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Tell us your ship&apos;s hours, interests and travel style — receive a tailored itinerary with the
            excursions and guides that fit your Funchal port window.
          </p>
          <Link href="/cruise-planner" className="btn-accent mt-8 inline-flex">
            Plan Your Port Day
          </Link>
        </div>
      </section>

      {/* 15. FAQs */}
      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} title="Funchal &amp; Madeira — FAQs" />
        </div>
      </section>

      {/* 16. TrustSignals */}
      <TrustSignals />

      {/* 17. Wow Collection teaser */}
      <MadeiraWowCollection />
    </>
  );
}
