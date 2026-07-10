export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero-home",
    "Pico do Arieiro mountain peaks above the clouds — Madeira from Funchal",
  ),
  ogDefault: img(
    "og-default",
    "Funchal — Gateway to Madeira, cruise port and Island of Eternal Spring",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Funchal Shore Excursions — Madeira",
  },
  port: img("cruise-port", "Funchal cruise terminal and Atlantic harbour, Madeira"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  mountains: img("mountains", "Pico do Arieiro mountain viewpoint, Madeira"),
  "valley-nuns": img("valley-nuns", "Curral das Freiras — Valley of the Nuns, Madeira"),
  "cabo-girao": img("cabo-girao", "Cabo Girão sea cliff, Madeira"),
  "porto-moniz": img("porto-moniz", "Porto Moniz natural lava pools, west Madeira"),
  santana: img("santana", "Santana traditional houses, east Madeira"),
  levada: img("levada", "Levada walk through laurisilva forest, Madeira"),
  gardens: img("gardens", "Monte Palace Tropical Garden, Funchal"),
  "cable-car": img("cable-car", "Funchal–Monte cable car, Madeira"),
  "old-town": img("old-town", "Funchal Old Town colourful streets, Madeira"),
  funchal: img("old-town", "Funchal city centre from the cruise terminal"),
  village: img("village", "Traditional Madeira mountain village"),
  island: img("island", "Lush green Madeira island landscape"),
  coastal: img("coast", "Câmara de Lobos coastal village, Madeira"),
  coast: img("coast", "Madeira Atlantic coastline"),
  food: img("food", "Bolo do caco — traditional Madeiran flatbread"),
  wine: img("wine", "Madeira wine bottles and tasting"),
  market: img("market", "Mercado dos Lavradores, Funchal"),
  private: img("private", "Scenic Madeira roads for private island touring"),
  family: img("gardens", "Monte Palace gardens — family-friendly Funchal day"),
  compare: img("compare", "Madeira mountain and coastal scenery comparison"),
  port: img("cruise-port", "Funchal harbour and cruise terminal"),
  highlights: img("highlights", "Madeira scenic viewpoints and island touring"),
  photography: img("photography", "Dramatic Madeira landscape photography"),
  city: img("old-town", "Funchal historic quarter"),
  independent: img("old-town", "Self-guided walking through Funchal"),
  itinerary: img("highlights", "One day exploring Madeira from a cruise ship"),
  "first-time": img("island", "First visit to Madeira from Funchal"),
  planner: img("photography", "Funchal and Madeira cruise planning"),
  monte: img("gardens", "Monte gardens above Funchal"),
  walking: img("levada", "Levada walking in Madeira"),
  volcano: img("mountains", "Madeira volcanic mountain landscape"),
  "canary-islands": img("coast", "Atlantic cruise ports — Canary Islands context"),
  spain: img("island", "Atlantic Europe cruise travel"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "madeira-island-highlights": "highlights",
  "valley-of-the-nuns-tour": "valley-nuns",
  "west-madeira-tour": "porto-moniz",
  "east-madeira-tour": "santana",
  "madeira-wine-tour": "wine",
  "levada-walk-cruise-day": "levada",
  "funchal-monte-cable-car-tour": "cable-car",
  "private-madeira-tour": "private",
  "madeira-food-culture-tour": "food",
  "scenic-madeira-drive": "mountains",
  "ultimate-madeira-discovery": "valley-nuns",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("photography");

const highlightImageKeys: Record<string, string> = {
  "valley-of-the-nuns-from-funchal": "valley-nuns",
  "cabo-girao-shore-excursion-guide": "cabo-girao",
  "east-madeira-shore-excursions": "santana",
  "west-madeira-shore-excursions": "porto-moniz",
  "madeira-wine-tours-from-funchal": "wine",
  "best-levada-walks-cruise-passengers": "levada",
  "funchal-cable-car-monte-guide": "cable-car",
  "what-to-wear-in-madeira": "mountains",
  "madeira-weather-cruise-passengers": "island",
  "best-food-to-try-in-madeira": "food",
  "best-funchal-shore-excursions": "highlights",
  "best-things-to-do-funchal-cruise": "old-town",
};

const experienceImageKeys: Record<string, string> = {
  "independent-funchal-guide": "independent",
  "one-day-in-madeira": "itinerary",
  "funchal-for-first-time-visitors": "first-time",
  "funchal-for-families": "family",
  "best-madeira-shore-excursions": "highlights",
  "madeira-cruise-guide": "port",
  "private-vs-group-madeira": "private",
};

const comparisonImageKeys: Record<string, string> = {
  "east-vs-west-madeira": "compare",
  "valley-of-the-nuns-vs-cabo-girao": "valley-nuns",
  "private-tour-vs-coach-tour": "private",
  "best-madeira-tour-for-first-time-visitors": "first-time",
  "can-you-explore-funchal-independently": "independent",
  "best-madeira-wine-tour": "wine",
  "levada-walk-or-island-tour": "levada",
  "best-madeira-excursion-for-families": "family",
};

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(experienceImageKeys[slug] ?? "highlights");
}

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getGuideImage(imageKey: string): SiteImage {
  return pick(imageKey);
}

export function getHotelImage(_slug: string): SiteImage {
  return pick("highlights");
}

export function getTransferImage(_slug: string): SiteImage {
  return pick("port");
}
