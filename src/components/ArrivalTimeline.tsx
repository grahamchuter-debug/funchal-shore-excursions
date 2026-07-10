interface TimelineItem {
  time: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const TIMELINE: TimelineItem[] = [
  {
    time: "30 min before",
    title: "Be on deck for the approach",
    description:
      "Funchal reveals itself dramatically from the sea — a green volcanic peak rising from the Atlantic with white buildings cascading down to the harbour. One of the most beautiful cruise arrivals in the world.",
    highlight: true,
  },
  {
    time: "Approach",
    title: "The island comes into full view",
    description:
      "Madeira's subtropical coastline, cable car lines on the hillside and the amphitheatre of mountains behind Funchal appear as the ship closes in. Watch for the Monte Palace gardens above the city.",
    highlight: true,
  },
  {
    time: "Arrival",
    title: "Funchal cruise terminal — seafront central",
    description:
      "Ships dock at the Funchal terminal directly on the seafront. The city centre and Zona Velha are a 10–15 minute walk along the promenade. Excursion coaches stage at the terminal.",
  },
  {
    time: "Morning",
    title: "Best light for mountain excursions",
    description:
      "If heading to Pico do Arieiro, Valley of the Nuns or levada walks, depart early — morning light and better chances of clear summits before afternoon cloud builds.",
  },
  {
    time: "Midday",
    title: "Madeiran flavours",
    description:
      "Espetada skewers, bolo do caco sweet potato bread and Madeira wine — Zona Velha, Mercado dos Lavradores and the cable car restaurants all offer excellent island dining.",
  },
  {
    time: "Departure",
    title: "Sail away with Madeira behind you",
    description:
      "Evening departures offer the island's profile from the sea again — watch the mountain peaks and cable car lines diminish as the ship heads out into the Atlantic.",
    highlight: true,
  },
];

export function ArrivalTimeline() {
  return (
    <section className="section-padding bg-coastal-50">
      <div className="container-wide">
        <p className="section-eyebrow">Before you leave the ship</p>
        <h2 className="section-title mt-2">Don&apos;t miss the Funchal arrival</h2>
        <p className="section-subtitle">
          Madeira reveals itself from the sea. Here&apos;s where to stand and what to watch for on approach.
        </p>

        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-coastal-200 hidden sm:block" aria-hidden="true" />
          <div className="space-y-6">
            {TIMELINE.map((item) => (
              <div key={item.title} className="relative sm:pl-12">
                <div
                  className={`hidden sm:block absolute left-2.5 top-5 h-3 w-3 rounded-full border-2 border-white ${
                    item.highlight ? "bg-maple-500 ring-2 ring-maple-500/30" : "bg-coastal-400"
                  }`}
                  aria-hidden="true"
                />
                <div className={`card-feature ${item.highlight ? "border-maple-500/20 bg-gradient-to-br from-maple-500/5 to-white" : ""}`}>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="pill-accent text-xs font-semibold">{item.time}</span>
                    <h3 className="font-display text-lg font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center">
          Tip: Ask the cruise director the evening before which side of the ship faces Funchal on approach — it varies by berth position and wind conditions.
        </p>
      </div>
    </section>
  );
}
