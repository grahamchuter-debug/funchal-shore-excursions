import Link from "next/link";

export function GatewayIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-3xl">
        <p className="section-eyebrow">Funchal: Gateway to Madeira — The Island of Eternal Spring</p>
        <h2 className="section-title mt-2">Discover the best of Madeira in a single unforgettable day</h2>
        <p className="section-subtitle">
          Explore carefully selected Funchal shore excursions, independent cruise advice and scenic island
          experiences designed for passengers visiting Madeira by ship.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/shore-excursions" className="btn-primary">Explore Shore Excursions</Link>
          <Link href="/cruise-planner" className="btn-secondary">Help Me Choose My Madeira Day</Link>
        </div>
      </div>
    </section>
  );
}
