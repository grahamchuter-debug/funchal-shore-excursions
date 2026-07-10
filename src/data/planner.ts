import { excursions } from "./excursions";

export interface PlannerInput {
  timeframe: "short" | "standard" | "long";
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  style: "guided" | "mix" | "diy";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const INTEREST_OPTIONS = [
  { id: "mountains", label: "Mountain scenery & viewpoints" },
  { id: "wine", label: "Madeira wine & food culture" },
  { id: "levadas", label: "Levada walks & forest" },
  { id: "gardens", label: "Botanical gardens & Monte" },
  { id: "coastal-villages", label: "Coastal villages & sea cliffs" },
  { id: "private", label: "Private touring & flexibility" },
  { id: "food", label: "Markets, food & local culture" },
] as const;

const THEMES = {
  island: {
    headline: "Madeira island scenery day",
    summary:
      "Head into Madeira's dramatic interior or northwest coast for volcanic craters, sea cliffs and mountain panoramas.",
    top: ["madeira-island-highlights", "valley-of-the-nuns-tour", "scenic-madeira-drive"],
  },
  levada: {
    headline: "Madeira walking and forest day",
    summary:
      "Use your Funchal call for levada path walking in UNESCO laurissilva forest — a uniquely Madeiran slow travel experience.",
    top: ["levada-walk-cruise-day", "east-madeira-tour", "madeira-island-highlights"],
  },
  culinary: {
    headline: "Funchal food and wine day",
    summary:
      "Madeira wine lodges, Mercado dos Lavradores market, poncha tasting and the Old Town food culture that makes Funchal genuinely rewarding.",
    top: ["madeira-food-culture-tour", "madeira-wine-tour", "funchal-monte-cable-car-tour"],
  },
  city: {
    headline: "Funchal city and Monte day",
    summary:
      "Old Town, Painted Doors, market, wine lodge, cable car to Monte and toboggan — Funchal city depth without island coach transfers.",
    top: ["funchal-monte-cable-car-tour", "madeira-food-culture-tour", "madeira-wine-tour"],
  },
  private: {
    headline: "Private Madeira touring day",
    summary:
      "Custom private itinerary designed around your group's priorities — no coach group pace, maximum flexibility.",
    top: ["private-madeira-tour", "madeira-island-highlights", "ultimate-madeira-discovery"],
  },
} as const;

function parseTime(value?: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}

function calcHours(input: PlannerInput): number {
  const fallback =
    input.timeframe === "short" ? 6 : input.timeframe === "standard" ? 8.5 : 10;
  const a = parseTime(input.arrivalTime);
  const d = parseTime(input.departureTime);
  if (a === null || d === null) return fallback;
  let diff = d - a;
  if (diff < 0) diff += 24 * 60;
  const usable = Math.max(4, diff / 60 - 1.25);
  return Math.min(12, usable);
}

function pickTheme(
  interests: string[],
  style: PlannerInput["style"],
  budget: PlannerInput["budget"],
): keyof typeof THEMES {
  const set = new Set(interests);
  if (set.has("private") || (budget === "premium" && style === "guided")) return "private";
  if (set.has("levadas")) return "levada";
  if (set.has("wine") || set.has("food")) return "culinary";
  if (set.has("gardens")) return "city";
  if (set.has("mountains") || set.has("coastal-villages")) return "island";
  return "city";
}

function excursionLink(slug: string): PlannerLink | null {
  const ex = excursions.find((e) => e.slug === slug);
  if (!ex) return null;
  return { label: ex.title, href: "/shore-excursions/" + ex.slug, why: ex.tagline };
}

export function generateFunchalPlan(input: PlannerInput): PlannerResult {
  const hours = calcHours(input);
  const themeKey = pickTheme(input.interests, input.style, input.budget);
  const theme = THEMES[themeKey];
  const party = input.adults + input.children;

  const excursionCandidates = theme.top
    .map(excursionLink)
    .filter((x): x is PlannerLink => Boolean(x));

  const transfers: PlannerLink[] = [
    {
      label: "Terminal to Old Town walk",
      href: "/guides/independent-funchal-guide",
      why: "15 minutes flat waterfront walk from the cruise pier to the Old Town and Painted Doors.",
    },
    {
      label: "Terminal to Mercado dos Lavradores",
      href: "/guides/best-food-to-try-in-madeira",
      why: "20 minutes on foot — the essential Funchal market experience.",
    },
    {
      label: "Terminal to cable car base",
      href: "/guides/funchal-cable-car-monte-guide",
      why: "20 minutes walk through the Old Town to the Teleférico base station.",
    },
    {
      label: "Funchal to Valley of the Nuns",
      href: "/guides/valley-of-the-nuns-from-funchal",
      why: "30–40 minutes each way by coach — manageable on standard or long calls.",
    },
  ];

  const logistics: PlannerLink[] = [
    {
      label: "Funchal cruise port guide",
      href: "/cruise-port-guide",
      why: "Confirm all-aboard time, terminal layout and taxi options before leaving the ship.",
    },
    {
      label: "Independent Funchal guide",
      href: "/guides/independent-funchal-guide",
      why: "Self-guided city route with walking distances, taxi prices and return-to-ship advice.",
    },
    {
      label: "East vs West Madeira",
      href: "/compare/east-vs-west-madeira",
      why: "Honest comparison when choosing between island excursion directions.",
    },
    {
      label: "One day in Madeira",
      href: "/guides/one-day-in-madeira",
      why: "Sample itineraries for your port window.",
    },
  ];

  const dayPlan: { time: string; text: string }[] = [];

  if (themeKey === "island") {
    dayPlan.push({
      time: "Morning",
      text: "Depart early on island excursion — Madeira Island Highlights or Valley of the Nuns — before coach traffic builds on popular routes.",
    });
    dayPlan.push({
      time: "Midday",
      text: "Scenic stops at crater viewpoint and coastal cliff or mountain summit with guided commentary and controlled free time.",
    });
    dayPlan.push({
      time: "Afternoon",
      text: "Return to Funchal with conservative buffer; optional Old Town hour or wine lodge stop if time allows.",
    });
  } else if (themeKey === "levada") {
    dayPlan.push({
      time: "Morning",
      text: "Early departure to levada trailhead (30–50 minutes by coach) for best morning light in the laurissilva forest.",
    });
    dayPlan.push({
      time: "Midday",
      text: "Levada path walking with guide — flat contour path through subtropical forest with bird life and channel engineering context.",
    });
    dayPlan.push({
      time: "Afternoon",
      text: "Return to Funchal with buffer. Optional Old Town coffee stop if time allows before all-aboard.",
    });
  } else if (themeKey === "culinary") {
    dayPlan.push({
      time: "Morning",
      text: "Mercado dos Lavradores before 11am — exotic fruit, espada fish counters and poncha stalls in full market atmosphere.",
    });
    dayPlan.push({
      time: "Midday",
      text: "Madeira wine lodge tasting on Avenida Arriaga, then Old Town lunch at a tasca — lapas, bolo do caco and espada com banana.",
    });
    dayPlan.push({
      time: "Afternoon",
      text: "Old Town Painted Doors walk, cable car to Monte if time allows, then return to port.",
    });
  } else if (themeKey === "private") {
    dayPlan.push({
      time: "Morning",
      text: "Depart in private vehicle from cruise terminal — itinerary shaped around your group's priorities in pre-sail consultation.",
    });
    dayPlan.push({
      time: "Midday",
      text: "Flexible stops at viewpoints, village or tasting element — no fixed group schedule.",
    });
    dayPlan.push({
      time: "Afternoon",
      text: "Return at conservative pace tailored to your all-aboard time. Buffer built into private plan.",
    });
  } else {
    dayPlan.push({
      time: "Morning",
      text: "Walk from terminal to Old Town and Painted Doors, then Mercado dos Lavradores before noon crowds arrive.",
    });
    dayPlan.push({
      time: "Midday",
      text: "Wine lodge visit on Avenida Arriaga, then cable car to Monte and Monte Palace Tropical Garden (allow 60 minutes).",
    });
    dayPlan.push({
      time: "Afternoon",
      text: "Toboggan descent from Monte or cable car return, Old Town coffee, then return to cruise terminal.",
    });
  }

  dayPlan.push({
    time: "Return buffer",
    text: "Be back near the Funchal cruise terminal 75–90 minutes before all-aboard to absorb traffic, queues or weather delays.",
  });

  const interestText = input.interests
    .map((id) => INTEREST_OPTIONS.find((o) => o.id === id)?.label ?? id)
    .join(", ")
    .toLowerCase();

  return {
    headline: theme.headline,
    summary:
      theme.summary +
      " A " +
      input.timeframe +
      " Funchal port day (~" +
      hours.toFixed(1) +
      " usable hours) for " +
      party +
      " guest" +
      (party === 1 ? "" : "s") +
      " interested in " +
      (interestText || "classic Madeira highlights") +
      ".",
    excursions: excursionCandidates,
    transfers,
    stay: [],
    logistics,
    dayPlan,
  };
}
