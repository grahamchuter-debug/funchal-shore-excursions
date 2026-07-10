import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const HIGHLIGHTS = [
  {
    title: "Inside the Volcano",
    description: "The Valley of the Nuns — a village in a crater that remained isolated from Madeira for centuries.",
    href: "/guides/valley-of-the-nuns-from-funchal",
    imageKey: "village",
    readTime: "6 min read",
  },
  {
    title: "580 Metres of Nothing",
    description: "Standing on glass above Europe's highest sea cliffs — the Cabo Girão experience explained honestly.",
    href: "/guides/cabo-girao-shore-excursion-guide",
    imageKey: "coast",
    readTime: "5 min read",
  },
  {
    title: "Walking the Levadas",
    description: "Centuries-old irrigation channels turned walking paths — which routes actually work for cruise passengers.",
    href: "/guides/best-levada-walks-cruise-passengers",
    imageKey: "highlights",
    readTime: "7 min read",
  },
  {
    title: "Four Centuries in a Glass",
    description: "Madeira wine — why this island produces one of the world's most extraordinary fortified wines.",
    href: "/guides/madeira-wine-tours-from-funchal",
    imageKey: "food",
    readTime: "5 min read",
  },
  {
    title: "Funchal Beyond the Port",
    description: "Painted doors, market life, the toboggan and the parts of Funchal most cruise passengers miss.",
    href: "/guides/best-things-to-do-funchal-cruise",
    imageKey: "old-town",
    readTime: "8 min read",
  },
] as const;

export function EditorialHighlights() {
  return (
    <section className="section-padding bg-forest-50/50 border-y border-forest-100/60">
      <div className="container-wide">
        <p className="section-eyebrow text-forest-700">Editorial highlights</p>
        <h2 className="section-title mt-2">Stories worth lingering over</h2>
        <p className="section-subtitle">
          Short reads to spark curiosity — because the best Madeira port days begin long before you choose an excursion.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {HIGHLIGHTS.map((item, i) => {
            const image = subjectImages[item.imageKey];
            const tall = i === 0 || i === 4;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`editorial-highlight-card ${tall ? "sm:row-span-2" : ""}`}
                style={tall ? { minHeight: "100%" } : undefined}
              >
                <ResponsiveImage
                  image={image}
                  role="card"
                  decorative
                  imgClassName="editorial-highlight-image"
                />
                <div className="editorial-highlight-content" style={tall ? { minHeight: "280px" } : undefined}>
                  <span className="text-xs font-medium uppercase tracking-wider text-sandstone-300">{item.readTime}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 line-clamp-3">{item.description}</p>
                  <span className="mt-4 text-sm font-semibold text-sandstone-300">Read story →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { HIGHLIGHTS };
