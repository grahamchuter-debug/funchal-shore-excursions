"use client";

import Link from "next/link";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

const CHOOSE_CARDS = [
  {
    slug: "mountains-viewpoints",
    emoji: "⛰️",
    title: "Mountains & Viewpoints",
    tagline: "Pico do Arieiro above the clouds, Pico Ruivo at 1,861 m and volcanic peaks wreathed in Atlantic mist.",
    highlights: [
      "Pico do Arieiro — Madeira's third highest peak",
      "Cloud inversion views above the valleys",
      "Volcanic mountain road scenery",
      "Sunrise tours for photographers",
      "Unlike any other Atlantic cruise port",
    ],
    cta: "Explore the mountains",
    href: "/guides/east-madeira-shore-excursions",
    imageKey: "mountains",
    wide: true,
  },
  {
    slug: "wine-food",
    emoji: "🍷",
    title: "Madeira Wine & Food",
    tagline: "Wine lodge tastings, espetada skewers, bolo do caco and the Mercado dos Lavradores — a food culture unlike anywhere else.",
    highlights: [
      "Madeira wine — one of the world's great fortified wines",
      "Espetada — bay-laurel skewered beef",
      "Bolo do caco sweet potato flatbread",
      "Mercado dos Lavradores tropical fruits",
      "Poncha local spirit distilled in mountain villages",
    ],
    cta: "Wine & food guide",
    href: "/guides/madeira-wine-tours-from-funchal",
    imageKey: "wine",
    wide: false,
  },
  {
    slug: "levada-walks",
    emoji: "🌿",
    title: "Nature & Levada Walks",
    tagline: "Ancient irrigation channels through UNESCO-protected laurisilva cloud forest — one of Europe's finest walking landscapes.",
    highlights: [
      "Levadas — centuries-old water channels",
      "UNESCO World Heritage laurisilva forest",
      "25 Fontes and Caldeirão Verde trails",
      "Rare endemic plants and bird species",
      "Dramatic valley and mountain views",
    ],
    cta: "Levada walk guide",
    href: "/guides/best-levada-walks-cruise-passengers",
    imageKey: "levada",
    wide: false,
  },
  {
    slug: "gardens-funchal",
    emoji: "🌺",
    title: "Gardens & Funchal",
    tagline: "Monte Palace tropical gardens, the Zona Velha historic quarter and Funchal's world-class botanical garden — all without leaving the island capital.",
    highlights: [
      "Monte Palace Tropical Garden — Asia and Madeira collections",
      "Monte cable car — 15 minutes of Atlantic views",
      "Funchal Zona Velha — cobbled lanes and street art",
      "Jardim Botânico with 2,000 plant species",
      "Monte toboggan ride for the experience",
    ],
    cta: "Explore gardens & Funchal",
    href: "/guides/funchal-cable-car-monte-guide",
    imageKey: "gardens",
    wide: false,
  },
  {
    slug: "coastal-villages",
    emoji: "🏘️",
    title: "Coastal Villages",
    tagline: "Câmara de Lobos fishing village, Cabo Girão Europe's second highest sea cliff and Ribeira Brava — dramatically different from Funchal.",
    highlights: [
      "Câmara de Lobos — Churchill's favourite village",
      "Cabo Girão — 580 m glass-floored cliff platform",
      "Ribeira Brava coastal village and beach",
      "Ponta do Sol — Madeira's sunniest village",
      "Volcanic coastline and Atlantic horizon views",
    ],
    cta: "Coastal villages guide",
    href: "/guides/cabo-girao-shore-excursion-guide",
    imageKey: "coastal",
    wide: false,
  },
  {
    slug: "private-discovery",
    emoji: "🚗",
    title: "Private Island Discovery",
    tagline: "Your own vehicle, your own route — Madeira's mountains, villages and coastal cliffs at a pace that suits your port window.",
    highlights: [
      "Fully flexible itinerary to your interests",
      "Small-group or private vehicle",
      "Mix mountains, villages and viewpoints",
      "Ideal for families and photographers",
      "Custom timing around your all-aboard",
    ],
    cta: "Private tour options",
    href: "/shore-excursions/private-madeira-tour",
    imageKey: "private",
    wide: false,
  },
] as const;

export function ChooseYourMadeira() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">How Would You Like to Experience Madeira?</p>
        <h2 className="section-title mt-2 max-w-3xl">
          Choose the kind of island day that inspires you
        </h2>
        <p className="section-subtitle">
          Madeira is not one island — it is six completely different experiences packed into a single cruise call.
          Volcanic summits, ancient cloud forest, wine culture, coastal villages, subtropical gardens and private
          mountain discovery. Choose your experience before you browse excursions.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {CHOOSE_CARDS.map((card) => {
            const image = subjectImages[card.imageKey] ?? subjectImages["island"];
            return (
              <Link
                key={card.slug}
                href={card.href}
                className={`card-editorial group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  card.wide ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${card.wide ? "aspect-[21/9]" : "aspect-[16/10]"}`}
                >
                  <ResponsiveImage
                    image={image}
                    role="card"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-coastal-900/25 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-5 top-5 text-3xl" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="text-base leading-relaxed text-gray-600 italic">
                    &ldquo;{card.tagline}&rdquo;
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                    {card.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-maple-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 text-sm font-semibold tracking-wide text-maple-600 group-hover:text-maple-500">
                    {card.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
