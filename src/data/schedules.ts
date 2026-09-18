import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import funchalSchedule from "./imported-schedules/funchal.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Funchal cruise schedules?",
    answer:
      "Schedules are compiled from published data and updated periodically. Arrival times and berth assignments can change, so always verify with your cruise line before finalising excursion plans.",
  },
  {
    question: "When is peak cruise season in Funchal?",
    answer:
      "Funchal receives calls year-round with strongest traffic October through April on Atlantic repositioning, Canary Islands and Iberian itineraries. Summer calls are fewer but the island's weather is excellent.",
  },
  {
    question: "Can I plan an island tour on any call length?",
    answer:
      "Western island highlights (Valley of the Nuns, Cabo Girão) work on standard calls of 8+ hours. Porto Moniz natural pools need 8+ hours minimum. Short calls under 6 hours benefit from Funchal city-focused options — cable car, wine lodge and Old Town.",
  },
];

const SCHEDULE_TIPS = [
  "Check multi-ship days before locking excursion bookings — popular viewpoints get crowded",
  "Book Valley of the Nuns and Island Highlights excursions early on high-traffic dates",
  "Keep 75–90 minute return buffer before all-aboard, especially after island excursions",
  "Mountain weather differs from Funchal coast — pack layers for any highland or levada excursion",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "funchal",
    name: "Funchal, Madeira",
    country: "Portugal",
    seoTitle: "Funchal Cruise Ship Schedule Overview",
    metaDescription:
      "Funchal Madeira cruise ship schedule with arrival and departure planning tips for island excursions, city highlights and return-to-ship advice.",
    intro:
      "Funchal is a major Atlantic cruise destination with exceptional city access, walkable cultural attractions and dramatic island excursion potential across mountain craters, sea cliffs and subtropical forest.",
    description:
      "Portuguese Atlantic island capital with walkable city, wine heritage and extraordinary island landscapes — levadas, sea cliffs, volcanic craters and mountain viewpoints.",
    scheduleOverview:
      "Cruise traffic peaks on Atlantic repositioning routes and Canary Islands circuits, with reliable year-round calls benefiting from Madeira's mild subtropical climate.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const schedulesByPort: Record<string, ScheduleEntry[]> = {
  funchal: (funchalSchedule as ScheduleEntry[]) ?? [],
};

export const scheduleYears: ScheduleYear[] = [];

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return schedulesByPort[slug] ?? [];
}

export function getSchedulePort(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return getSchedulePort(slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesByYear(slug: string, year: number): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return getScheduleEntriesByYear(slug, year);
}

export function getScheduleEntriesByMonth(
  slug: string,
  year: number,
  month: string,
): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntriesByYear(slug, year), month);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(
  query: string,
): { portSlug: string; entries: ScheduleEntry[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: { portSlug: string; entries: ScheduleEntry[] }[] = [];
  for (const port of schedulePorts) {
    const matches = getScheduleEntries(port.slug).filter(
      (e) => e.ship.toLowerCase().includes(q) || e.cruiseLine.toLowerCase().includes(q),
    );
    if (matches.length) results.push({ portSlug: port.slug, entries: matches });
  }
  return results;
}

export function getTodayTomorrowEntries(
  slug: string,
): { today: ScheduleEntry[]; tomorrow: ScheduleEntry[] } {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: entries.filter((e) => e.date === fmt(today)),
    tomorrow: entries.filter((e) => e.date === fmt(tomorrow)),
  };
}
