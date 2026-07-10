import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const CATEGORIES = [
  {
    slug: "island-highlights",
    title: "Madeira Island Highlights",
    description: "The all-round island introduction — mountains, coastal villages, wine culture and Madeira scenery in one day.",
    href: "/shore-excursions/madeira-island-highlights",
    imageKey: "island",
    emoji: "⭐",
  },
  {
    slug: "valley-nuns",
    title: "Valley of the Nuns",
    description: "Curral das Freiras — a volcanic amphitheatre ringed by sheer peaks, one of Madeira's most dramatic landscapes.",
    href: "/shore-excursions/valley-of-the-nuns-tour",
    imageKey: "village",
    emoji: "⛰️",
  },
  {
    slug: "west-madeira",
    title: "West Madeira",
    description: "Cabo Girão sea cliff, Câmara de Lobos and the dramatic west coast — all within reach of a standard port call.",
    href: "/shore-excursions/west-madeira-tour",
    imageKey: "porto-moniz",
    emoji: "🌊",
  },
  {
    slug: "east-madeira",
    title: "East Madeira",
    description: "Santana traditional houses, Faial and the quieter north-east coast villages beyond the tourist trail.",
    href: "/shore-excursions/east-madeira-tour",
    imageKey: "santana",
    emoji: "🏘️",
  },
  {
    slug: "madeira-wine",
    title: "Madeira Wine",
    description: "Wine lodge visits, quinta tastings and the story of one of the world's great fortified wines.",
    href: "/shore-excursions/madeira-wine-tour",
    imageKey: "wine",
    emoji: "🍷",
  },
  {
    slug: "levada-walks",
    title: "Levada Walks",
    description: "Ancient irrigation channels through UNESCO laurisilva cloud forest — Europe's finest subtropical walking.",
    href: "/shore-excursions/levada-walk-cruise-day",
    imageKey: "levada",
    emoji: "🌿",
  },
  {
    slug: "funchal-monte",
    title: "Funchal & Monte",
    description: "Monte Palace cable car, Jardim Botânico and Funchal's historic Zona Velha — ideal for shorter port calls.",
    href: "/shore-excursions/funchal-monte-cable-car-tour",
    imageKey: "cable-car",
    emoji: "🌺",
  },
  {
    slug: "private-tours",
    title: "Private Tours",
    description: "Custom island routes with your own vehicle and guide — mountains, villages and coastal cliffs at your pace.",
    href: "/shore-excursions/private-madeira-tour",
    imageKey: "private",
    emoji: "🚗",
  },
  {
    slug: "food-culture",
    title: "Food & Culture",
    description: "Espetada, bolo do caco, Mercado dos Lavradores and Madeiran cuisine — a food culture unlike any other.",
    href: "/shore-excursions/madeira-food-culture-tour",
    imageKey: "food",
    emoji: "🍽️",
  },
  {
    slug: "scenic-drives",
    title: "Scenic Drives",
    description: "Pico do Arieiro mountain road, Encumeada pass and Madeira's dramatic highland panoramas by coach.",
    href: "/shore-excursions/scenic-madeira-drive",
    imageKey: "mountains",
    emoji: "🛣️",
  },
];

export function ExcursionCategories() {
  return (
    <section className="section-padding bg-coastal-50">
      <div className="container-wide">
        <p className="section-eyebrow">Excursion categories</p>
        <h2 className="section-title mt-2">Find the right Madeira experience for your day</h2>
        <p className="section-subtitle">
          Whether you want mountain drama, levada walking, wine culture, coastal villages or a private island
          tour — start with the category that matches your priorities.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {CATEGORIES.map((cat) => {
            const image = subjectImages[cat.imageKey] ?? subjectImages["island"];
            return (
              <Link
                key={cat.slug}
                href={cat.href}
                className="card-editorial group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/60 via-transparent to-transparent" aria-hidden="true" />
                  <span className="absolute left-3 top-3 text-xl" aria-hidden="true">{cat.emoji}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                    {cat.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{cat.description}</p>
                  <span className="mt-4 text-sm font-semibold text-coastal-700">Discover more →</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link href="/shore-excursions" className="btn-primary">Explore All Shore Excursions</Link>
        </div>
      </div>
    </section>
  );
}
