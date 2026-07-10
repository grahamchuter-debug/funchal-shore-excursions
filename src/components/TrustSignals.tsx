import Link from "next/link";

const TRUST_SIGNALS = [
  {
    title: "Designed for cruise passengers",
    description:
      "Every recommendation is timed around realistic port windows — no transfers that assume more hours ashore than your ship allows.",
  },
  {
    title: "Carefully selected excursions",
    description:
      "We feature tours that represent Madeira well — not a catalogue of everything available. Quality over quantity, always.",
  },
  {
    title: "Secure booking",
    description:
      "Book through established operators with clear cancellation policies, confirmed return protocols and cruise-aware timing.",
  },
  {
    title: "Local operators and guides",
    description:
      "Island tours led by guides who know Madeira's mountain roads, weather patterns, levada conditions and timing realities.",
  },
  {
    title: "Honest independent advice",
    description:
      "We tell you when Funchal works brilliantly without a tour, because credibility matters more than conversion.",
  },
  {
    title: "Support before you travel",
    description:
      "Questions before your call? We are here by email to help you choose the right experience for your interests and port window.",
  },
];

export function TrustSignals() {
  return (
    <section className="section-padding bg-coastal-50">
      <div className="container-wide">
        <p className="section-eyebrow">Why trust this guide</p>
        <h2 className="section-title mt-2">Built for cruise passengers, not tour operators</h2>
        <p className="section-subtitle">
          We exist to help you understand Madeira first — excursions come second, when they genuinely add value.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_SIGNALS.map((signal) => (
            <div key={signal.title} className="card-feature">
              <h3 className="font-display text-lg font-bold text-gray-900">{signal.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{signal.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/about" className="btn-secondary text-sm">About this site</Link>
          <Link href="/enquire" className="btn-secondary text-sm">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
