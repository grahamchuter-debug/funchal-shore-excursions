import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const PILLARS = [
  {
    title: "Atlantic by Altitude",
    subtitle: "Summits above the clouds. Levadas through the mist.",
    items: [
      "Pico do Arieiro rising to 1,818 m above sea level",
      "Laurisilva cloud forest — a Jurassic-era ecosystem still intact",
      "Ancient levada channels carved into the mountains",
      "Views from above the Atlantic cloud layer",
    ],
    href: "/guides/east-madeira-shore-excursions",
    cta: "Explore the mountains",
    imageKey: "mountains",
  },
  {
    title: "Volcanic by Character",
    subtitle: "Cliffs, villages, wine. An island with its own identity.",
    items: [
      "Câmara de Lobos — the fishing village Winston Churchill painted",
      "Cabo Girão sea cliff, 580 m above the Atlantic",
      "Madeira wine — one of the world's oldest wine cultures",
      "An island culture that absorbed centuries of trade routes",
    ],
    href: "/guides/cabo-girao-shore-excursion-guide",
    cta: "Discover the villages",
    imageKey: "coastal",
  },
  {
    title: "Eternal by Nature",
    subtitle: "Year-round subtropical spring. Gardens unlike anywhere else.",
    items: [
      "Monte Palace — botanical gardens sculpted across a hillside",
      "Madeira's 'Island of Eternal Spring' — mild all year",
      "Exotic blooms from four continents in Funchal's gardens",
      "A different island experience in every season",
    ],
    href: "/guides/funchal-cable-car-monte-guide",
    cta: "Explore Funchal gardens",
    imageKey: "gardens",
  },
] as const;

export function SpiritOfMadeira() {
  return (
    <section className="section-padding bg-coastal-900 text-white">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="section-eyebrow text-coastal-200">The Spirit of Madeira</p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            The Island of Eternal Spring — waiting beyond the cruise terminal
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Madeira earns its nickname honestly. From the Atlantic, it appears as a green volcanic peak rising
            impossibly from the ocean. Inside, the island shifts from cloud-wrapped summits and UNESCO laurel
            forest to whitewashed fishing villages, wine lodges, subtropical gardens and coastal cliffs that
            drop 580 metres straight to the sea. Within one cruise day, passengers can experience Madeira in
            a depth that stays with them long after the ship sails.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const image = subjectImages[pillar.imageKey];
            return (
              <div key={pillar.title} className="gateway-pillar flex flex-col">
                <div className="relative -mx-2 -mt-2 mb-5 aspect-[16/9] overflow-hidden rounded-xl sm:mx-0 sm:mt-0">
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 to-transparent" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-1 text-sm text-sandstone-300">{pillar.subtitle}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-white/75">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-forest-100 mt-0.5" aria-hidden="true">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={pillar.href}
                  className="mt-6 inline-flex text-sm font-semibold text-sandstone-300 hover:text-white transition-colors"
                >
                  {pillar.cta} →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
