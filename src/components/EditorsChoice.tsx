import Link from "next/link";
import { getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export function EditorsChoice() {
  const primaryImage = getExcursionImage("madeira-island-highlights");
  const secondaryImage = getExcursionImage("valley-of-the-nuns-tour");

  return (
    <section className="section-padding section-signature-hero">
      <div className="container-wide relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="badge-editors-choice">
              <span aria-hidden="true">⭐</span> Editor&apos;s Collection
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Madeira Island Highlights
            </h2>
            <p className="mt-4 text-lg text-white/85 leading-relaxed">
              The single best all-round introduction to Madeira — mountain viewpoints, levada scenery,
              coastal villages, Madeira wine and island food culture in one carefully paced cruise-timed day.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-center gap-3"><span className="text-autumn-400">✓</span> Mountain panoramas and valley scenery</li>
              <li className="flex items-center gap-3"><span className="text-autumn-400">✓</span> Coastal village stops and Atlantic views</li>
              <li className="flex items-center gap-3"><span className="text-autumn-400">✓</span> Madeira wine and local food culture</li>
              <li className="flex items-center gap-3"><span className="text-autumn-400">✓</span> Ideal for first-time Madeira visitors</li>
              <li className="flex items-center gap-3"><span className="text-autumn-400">✓</span> Cruise-timed with return-to-ship confidence</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shore-excursions/madeira-island-highlights" className="btn-accent">
                Discover the tour
              </Link>
              <Link
                href="/compare/best-madeira-tour-for-first-time-visitors"
                className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                Why this tour
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Prefer dramatic mountain drama? Our alternative Editor&apos;s Choice is{" "}
              <Link href="/shore-excursions/valley-of-the-nuns-tour" className="underline hover:text-white">
                Valley of the Nuns
              </Link>
              {" "}— the volcanic amphitheatre at the heart of the island.{" "}
              <span className="text-white/50">Best Private will be reserved for the upcoming Ultimate Madeira Discovery.</span>
            </p>
          </div>
          <div className="card-signature overflow-hidden p-0">
            <div className="relative aspect-[16/10]">
              <ResponsiveImage
                image={primaryImage}
                role="card"
                imgClassName="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 leading-relaxed">
                The single best introduction to Madeira&apos;s variety — mountains, coastal villages, wine culture
                and island scenery in one cruise-timed day. Ideal for first-time visitors with 7+ usable hours ashore.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 border-t border-white/10 pt-12">
          <div className="card-signature overflow-hidden p-0 order-2 lg:order-1">
            <div className="relative aspect-[16/10]">
              <ResponsiveImage
                image={secondaryImage}
                role="card"
                imgClassName="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="badge-editors-choice">
              <span aria-hidden="true">⭐</span> Alternative Editor&apos;s Choice
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">
              Valley of the Nuns
            </h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Best for passengers who prioritise dramatic mountain scenery. Curral das Freiras — the Valley of the
              Nuns — is a natural volcanic amphitheatre, ringed by sheer 1,000 m cliffs with a village at its floor.
              One of the most striking landscapes in the Atlantic.
            </p>
            <Link
              href="/shore-excursions/valley-of-the-nuns-tour"
              className="btn-accent mt-6 inline-flex text-sm"
            >
              Discover Valley of the Nuns tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
