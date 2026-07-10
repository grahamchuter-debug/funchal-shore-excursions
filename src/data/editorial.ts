import type { EditorialCategory } from "./types";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  {
    id: "editors-choice",
    label: "Editor's Choice",
    shortLabel: "Editor's Choice",
    description:
      "Top overall pick after balancing impact, logistics and return confidence for Funchal cruise passengers.",
  },
  {
    id: "best-private",
    label: "Best Private Experience",
    shortLabel: "Private",
    description: "Custom private Madeira touring — maximum flexibility and comfort.",
  },
  {
    id: "best-scenery",
    label: "Best Scenery",
    shortLabel: "Scenery",
    description: "Valley of the Nuns crater, Cabo Girão sea cliff, Porto Moniz and mountain panoramas.",
  },
  {
    id: "best-food",
    label: "Best Food & Culture",
    shortLabel: "Food & Culture",
    description: "Madeiran cuisine, wine lodge culture, Mercado dos Lavradores and Old Town food.",
  },
  {
    id: "best-nature",
    label: "Best Nature & Walking",
    shortLabel: "Nature",
    description: "Levada walks, laurissilva UNESCO forest and Madeira's botanical heritage.",
  },
  {
    id: "best-relaxed",
    label: "Best Relaxed Experience",
    shortLabel: "Relaxed",
    description: "Low-pressure port days: wine tastings, Monte gardens and Old Town exploration.",
  },
  {
    id: "best-families",
    label: "Best for Families",
    shortLabel: "Families",
    description: "Cable car, Monte toboggan, market visits and family-paced island options.",
  },
  {
    id: "best-independent",
    label: "Best Independent Experience",
    shortLabel: "Independent",
    description: "Self-guided routes that work well from Funchal cruise terminal.",
  },
  {
    id: "best-historic",
    label: "Best Historic Experience",
    shortLabel: "Historic",
    description: "Funchal Cathedral, Old Town architecture, Blandy's Wine Lodge heritage and Madeiran history.",
  },
  {
    id: "best-coastal",
    label: "Best Coastal Experience",
    shortLabel: "Coastal",
    description: "Cabo Girão sea cliff, Porto Moniz lava pools, Câmara de Lobos fishing village.",
  },
  {
    id: "best-view",
    label: "Best Viewpoints",
    shortLabel: "Viewpoints",
    description: "Eira do Serrado crater rim, Cabo Girão glass floor, Pico do Arieiro summit.",
  },
  {
    id: "best-got",
    label: "Best Local Character",
    shortLabel: "Local Character",
    description: "Authentic Madeira — fishing villages, tascas and away from the tourist trail.",
  },
  {
    id: "best-photography",
    label: "Best for Photography",
    shortLabel: "Photography",
    description: "Painted Doors, crater panoramas, sea cliffs and subtropical light.",
  },
  {
    id: "best-luxury",
    label: "Best Luxury Experience",
    shortLabel: "Luxury",
    description: "Private Madeira touring with custom itinerary, personal guide and maximum comfort.",
  },
  {
    id: "hidden-gem",
    label: "Hidden Gem",
    shortLabel: "Hidden Gem",
    description: "Less-obvious but highly rewarding Madeira alternatives on a port day.",
  },
  {
    id: "best-value",
    label: "Best Value",
    shortLabel: "Best Value",
    description: "Strong overall Madeira experience quality per euro and per port hour.",
  },
  {
    id: "best-short-port",
    label: "Best for Short Port Calls",
    shortLabel: "Short Port",
    description: "Reliable Funchal options for tighter arrival-departure windows — city and cable car focused.",
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
