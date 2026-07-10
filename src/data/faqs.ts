import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Funchal?",
    answer:
      "At the Funchal cruise pier on the city waterfront, within easy walking distance of the Old Town and Mercado dos Lavradores.",
  },
  {
    question: "Is Funchal a walkable cruise port?",
    answer:
      "Very — the Old Town, Mercado dos Lavradores, wine lodges and cable car base are all within 15–20 minutes' walk of the cruise terminal.",
  },
  {
    question: "How far is the Valley of the Nuns from Funchal cruise port?",
    answer:
      "About 15 km by mountain road — typically 30–40 minutes each way by coach.",
  },
  {
    question: "What is the best first excursion from Funchal?",
    answer:
      "For island breadth: Madeira Island Highlights (Valley of the Nuns + Cabo Girão). For city focus: Funchal & Monte Cable Car Tour. For food depth: Madeira Food & Culture Tour.",
  },
  {
    question: "Can I explore Funchal independently instead of booking a tour?",
    answer:
      "Yes — the city is one of the most independent-friendly cruise ports in the Atlantic. Old Town, market, wine lodges and cable car are all easily reachable on foot or by taxi. Island highlights need organised excursions.",
  },
  {
    question: "Is the Valley of the Nuns worth visiting on a port day?",
    answer:
      "Yes on standard or long calls — the volcanic crater setting is one of Madeira's most memorable experiences and unlike anything else on typical Atlantic cruise itineraries.",
  },
  {
    question: "Is Cabo Girão worth visiting from Funchal?",
    answer:
      "Yes — the glass-floor viewpoint above one of Europe's highest sea cliffs is genuinely dramatic. It typically combines with Valley of the Nuns and Câmara de Lobos in a western Madeira excursion.",
  },
  {
    question: "How much should I budget for taxis in Funchal?",
    answer:
      "Short central rides EUR 5–12; Monte village EUR 8–15; Câmara de Lobos approximately EUR 15–20 each way. Always ask for the metered fare or agree a price before departure.",
  },
  {
    question: "Is Madeira suitable for families on a cruise?",
    answer:
      "Very — the cable car, Monte toboggan, Mercado dos Lavradores market and Valley of the Nuns are all engaging for mixed-age groups. Avoid very long coach transfers (Porto Moniz) with very young children.",
  },
  {
    question: "How early should I return to the ship from a Madeira island excursion?",
    answer:
      "Aim to be back near the cruise terminal 75–90 minutes before all-aboard. Mountain roads have no bypass options — the buffer is important.",
  },
  {
    question: "What should I eat in Funchal on a cruise day?",
    answer:
      "Espada com banana (scabbardfish with banana), lapas (grilled limpets), bolo do caco (flat garlic bread) and passion fruit from the market. Poncha (sugarcane spirit) is the local aperitif.",
  },
  {
    question: "Is weather a major factor in Funchal cruise planning?",
    answer:
      "Coast is reliably mild year-round (17–25°C). Mountain excursions can encounter cloud and cooler temperatures — pack layers for any destination above 800 metres.",
  },
  {
    question: "Can I do both a city tour and a full island excursion in one Madeira day?",
    answer:
      "Not with depth in both. Choose one primary anchor — city or island — for a satisfying port day. Long calls (9+ hours) can combine a shorter island excursion with an Old Town hour.",
  },
  {
    question: "Are private tours useful in Funchal?",
    answer:
      "Yes — especially for mixed-mobility families, couples with specific interests (wine, photography, walking) and passengers who want genuine pace flexibility.",
  },
  {
    question: "What are the strongest categories of Madeira shore excursions?",
    answer:
      "Island highlights (Valley of the Nuns + Cabo Girão), coastal scenery (Porto Moniz), mountain tours (east Madeira), levada walks, wine tours, food and culture tours, city and Monte excursions, and private touring.",
  },
  {
    question: "Is Madeira in the Mediterranean?",
    answer:
      "No — Madeira is a Portuguese Atlantic island, roughly 1,000 km southwest of mainland Portugal and 500 km west of the African coast. It appears on Atlantic and repositioning cruise itineraries, not Mediterranean ones.",
  },
  {
    question: "What is the best Madeira wine to buy as a souvenir?",
    answer:
      "Malmsey is the most approachable and gift-friendly. A 10-year aged Bual is a more sophisticated choice. All Madeira wine keeps open for weeks — a practical quality for cruise passengers.",
  },
  {
    question: "Is the Monte toboggan safe?",
    answer:
      "Yes — the Monte toboggan (carro de cesto) is a traditional experience piloted by experienced carreiros. It is not a fairground ride; the wicker sledge descends at a controlled pace on roads closed temporarily to traffic during operation.",
  },
  {
    question: "What shoes should I wear in Funchal on a cruise day?",
    answer:
      "Comfortable walking shoes for city exploration — Old Town cobbles and Monte Palace Garden slopes reward grip. Walking shoes or hiking trainers for any levada walk or mountain excursion.",
  },
  {
    question: "Do cruise ships tender to Funchal or dock at a pier?",
    answer:
      "Most ships berth at the cruise pier directly. Larger ships on busy days may anchor and tender passengers to the same pier area. Check your itinerary for tender confirmation.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
