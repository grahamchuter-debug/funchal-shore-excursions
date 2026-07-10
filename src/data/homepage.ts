import type { FAQ, VisitorType, ExperienceCard } from "./types";

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I am visiting Funchal for the day on a cruise",
    shortLabel: "Port day",
    description: "Find shore excursions, independent routes and realistic logistics from Funchal cruise terminal.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It is my first time in Madeira",
    shortLabel: "First visit",
    description: "Decide between Funchal city depth and island touring with honest timing and logistics advice.",
    href: "/guides/funchal-for-first-time-visitors",
    cta: "First-timer guide",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description: "Self-guided Old Town walks, wine lodges, cable car and market — with taxis and return-to-ship discipline.",
    href: "/guides/independent-funchal-guide",
    cta: "Independent route",
  },
  {
    id: "families",
    label: "I am travelling with family",
    shortLabel: "Families",
    description: "Cable car, crater viewpoints and family-paced island excursion choices from Funchal.",
    href: "/guides/funchal-for-families",
    cta: "Family guide",
  },
];

export const experienceCards: ExperienceCard[] = [
  {
    slug: "mountains-and-valleys",
    title: "Mountains & Valleys",
    description: "Valley of the Nuns crater, Pico do Arieiro summit and Madeira's volcanic interior.",
    href: "/guides/valley-of-the-nuns-from-funchal",
    cta: "Explore mountains",
    imageKey: "galicia-landscape",
  },
  {
    slug: "coastal-drama",
    title: "Coastal Drama",
    description: "Cabo Girão sea cliff, Porto Moniz lava pools and Madeira's wild northwest coast.",
    href: "/guides/west-madeira-shore-excursions",
    cta: "Explore coast",
    imageKey: "coast",
  },
  {
    slug: "funchal-old-town",
    title: "Funchal Old Town",
    description: "Painted Doors, Mercado dos Lavradores, wine lodges and cable car to Monte.",
    href: "/guides/best-things-to-do-funchal-cruise",
    cta: "Explore Funchal",
    imageKey: "old-town",
  },
  {
    slug: "madeira-wine",
    title: "Madeira Wine",
    description: "Four centuries of fortified wine tradition — wine lodges and tastings in Funchal.",
    href: "/guides/madeira-wine-tours-from-funchal",
    cta: "Wine guide",
    imageKey: "food",
  },
  {
    slug: "levadas-and-forests",
    title: "Levadas & Forest",
    description: "UNESCO laurissilva forest and Madeira's irrigation channel walks — curated for cruise passengers.",
    href: "/guides/best-levada-walks-cruise-passengers",
    cta: "Levada guide",
    imageKey: "highlights",
  },
  {
    slug: "private-tours",
    title: "Private Touring",
    description: "Custom private itineraries for maximum flexibility and comfort across Madeira.",
    href: "/shore-excursions/private-madeira-tour",
    cta: "Go private",
    imageKey: "photography",
  },
];

export const coreSections: HomeSection[] = [
  {
    slug: "shore-excursions",
    number: "01",
    title: "Shore Excursions",
    description: "Valley of the Nuns, Cabo Girão, Porto Moniz, levada walks, wine and private tours — cruise-timed from Funchal.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Madeira Planning Guides",
    description: "Authority guides for mountains, coast, food, wine, levadas, independent routes and every passenger type.",
    href: "/guides",
    cta: "Read guides",
  },
  {
    slug: "cruise-port-guide",
    number: "03",
    title: "Funchal Cruise Port Guide",
    description: "Terminal location, Old Town access, cable car logistics, taxi costs and practical arrival advice.",
    href: "/cruise-port-guide",
    cta: "Port guide",
  },
  {
    slug: "cruise-planner",
    number: "04",
    title: "Funchal Cruise Planner",
    description: "Answer a few questions — get a tailored Madeira itinerary with return-to-ship confidence.",
    href: "/cruise-planner",
    cta: "Start planning",
  },
  {
    slug: "compare",
    number: "05",
    title: "Compare Options",
    description: "East vs west Madeira, private vs group, levada walk or island tour — honest comparisons.",
    href: "/compare/east-vs-west-madeira",
    cta: "Compare options",
  },
  {
    slug: "ship-schedules",
    number: "06",
    title: "Cruise Ship Schedules",
    description: "See which ships call at Funchal and plan around published arrival and departure times.",
    href: "/ship-schedules/funchal",
    cta: "View schedules",
  },
  {
    slug: "one-day",
    number: "07",
    title: "One Day in Madeira",
    description: "Hour-by-hour sample itineraries from gangway to all-aboard in Funchal.",
    href: "/guides/one-day-in-madeira",
    cta: "One-day guide",
  },
  {
    slug: "faq",
    number: "08",
    title: "FAQ",
    description: "Funchal cruise port questions answered — timing, taxis, island tours and return buffers.",
    href: "/faq",
    cta: "Read FAQs",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Where do cruise ships dock in Funchal?",
      answer:
        "At Funchal's cruise pier on the city waterfront, within walking distance of the Old Town and Mercado dos Lavradores.",
    },
    {
      question: "Is Funchal walkable from the cruise terminal?",
      answer:
        "Yes — the Old Town is 15 minutes' walk, Mercado dos Lavradores is 20 minutes and the cable car base is 20 minutes. The city is one of the most walkable cruise ports in the Atlantic.",
    },
    {
      question: "Is Madeira worth leaving Funchal for on a cruise day?",
      answer:
        "Yes on standard or long calls — the Valley of the Nuns, Cabo Girão and eastern mountain scenery deliver landscapes unlike anything in the city. Funchal itself is also an excellent full-day destination.",
    },
    {
      question: "What is the best first excursion from Funchal?",
      answer:
        "For most first-time visitors: Madeira Island Highlights (Valley of the Nuns + Cabo Girão + Câmara de Lobos). For city focus: Funchal & Monte Cable Car Tour.",
    },
    {
      question: "Can I explore Funchal independently without booking a tour?",
      answer:
        "Yes — the city is highly independent-friendly. Old Town, market, wine lodges and cable car are all walkable or a short taxi ride from the cruise pier. Island highlights need organised excursions.",
    },
  ];
}
