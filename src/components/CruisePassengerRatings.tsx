interface Rating {
  label: string;
  stars: number;
  note?: string;
}

const RATINGS: Rating[] = [
  { label: "Walking Around Funchal", stars: 4 },
  { label: "Island Scenery", stars: 5 },
  { label: "Food & Wine", stars: 4 },
  { label: "Nature & Levadas", stars: 5 },
  { label: "Photography", stars: 5 },
  { label: "Families", stars: 4 },
  { label: "Independent Exploring", stars: 4 },
  { label: "Adventure", stars: 5 },
  { label: "Shopping", stars: 4 },
  { label: "Beaches", stars: 2, note: "Madeira has very few sandy beaches — the draw is scenery, mountains and nature" },
];

function StarRow({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5 text-amber-500" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "opacity-100" : "opacity-25"} aria-hidden="true">
          ★
        </span>
      ))}
    </span>
  );
}

export function CruisePassengerRatings() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <p className="section-eyebrow">Cruise passenger snapshot</p>
        <h2 className="section-title mt-2">How Madeira scores for cruise passengers</h2>
        <p className="section-subtitle">
          An honest at-a-glance view of what Madeira delivers — based on port logistics, island variety and real passenger experience.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {RATINGS.map((r) => (
            <div key={r.label} className="card-feature flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-gray-800">{r.label}</span>
                <StarRow count={r.stars} />
              </div>
              {r.note && (
                <p className="text-xs text-gray-500 leading-relaxed">{r.note}</p>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Madeira scores highest for scenery, nature, photography and adventure — it is genuinely one of the most
          dramatic island destinations in the Atlantic. If you are expecting sandy beaches as the main draw,
          Madeira will surprise you; if you come for mountains, forest, wine and volcanic landscapes, it will
          exceed expectations.
        </p>
      </div>
    </section>
  );
}
