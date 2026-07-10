import Link from "next/link";

export function HonestAdvice() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Honest advice</p>
        <h2 className="section-title mt-2">Do You Need a Shore Excursion in Funchal?</h2>
        <p className="section-subtitle">Answer honestly — no, not always. We help you choose the day that suits you.</p>

        <div className="mt-10 space-y-8">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">
              For a relaxed day, Funchal works brilliantly on your own
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              If you want a low-stress port day without long coach transfers, independent exploration is genuinely excellent:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="text-coastal-600">✓</span> Zona Velha historic quarter — walkable from the terminal</li>
              <li className="flex items-center gap-2"><span className="text-coastal-600">✓</span> Mercado dos Lavradores — tropical fruits and local produce</li>
              <li className="flex items-center gap-2"><span className="text-coastal-600">✓</span> Monte cable car — no excursion needed</li>
              <li className="flex items-center gap-2"><span className="text-coastal-600">✓</span> Funchal wine lodges — open for independent visits</li>
              <li className="flex items-center gap-2"><span className="text-coastal-600">✓</span> Seafront promenade dining and coffee</li>
              <li className="flex items-center gap-2"><span className="text-coastal-600">✓</span> High return-to-ship confidence — easy 15-min walk</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              On a standard 8-hour call, a self-guided Funchal day is genuinely rewarding for many visitors. We say that because it&apos;s true.
            </p>
          </div>

          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">
              But book an excursion if you want Madeira&apos;s real variety
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              The island&apos;s headline experiences lie beyond the city. An excursion unlocks landscapes you simply cannot reach from Funchal on foot:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span><strong>Valley of the Nuns (Curral das Freiras)</strong> — a volcanic amphitheatre ringed by sheer peaks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span><strong>Cabo Girão</strong> — Europe&apos;s second highest sea cliff at 580 m with a glass viewing platform</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span><strong>Câmara de Lobos</strong> — the fishing village Winston Churchill famously painted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span><strong>Pico do Arieiro</strong> — a 1,818 m summit above the clouds, 40 minutes from the port</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span><strong>Levada walks and laurisilva</strong> — UNESCO-protected cloud forest on ancient irrigation paths</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span><strong>Porto Moniz and Santana</strong> — north coast villages and traditional thatched houses</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compare/can-you-explore-funchal-independently" className="btn-secondary text-sm">
            Can I explore independently?
          </Link>
          <Link href="/compare/east-vs-west-madeira" className="btn-secondary text-sm">
            East or west Madeira?
          </Link>
          <Link href="/guides/independent-funchal-guide" className="btn-secondary text-sm">
            Independent Funchal guide
          </Link>
        </div>
      </div>
    </section>
  );
}
