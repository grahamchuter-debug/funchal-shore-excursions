import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-semibold">{SITE.tagline}</div>
            <p className="mt-3 text-sm text-coastal-100/70 leading-relaxed">
              An editorial guide to Madeira for cruise passengers — volcanic mountains, laurisilva forest,
              coastal villages, Funchal gardens, Madeira wine culture and carefully selected shore excursions
              when you&apos;re ready to explore.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Explore Madeira</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/guides/valley-of-the-nuns-from-funchal" className="hover:text-white">Valley of the Nuns</Link></li>
              <li><Link href="/guides/cabo-girao-shore-excursion-guide" className="hover:text-white">Cabo Girão</Link></li>
              <li><Link href="/guides/best-levada-walks-cruise-passengers" className="hover:text-white">Levada Walks</Link></li>
              <li><Link href="/guides/funchal-cable-car-monte-guide" className="hover:text-white">Cable Car &amp; Monte</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan your day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/cruise-planner" className="hover:text-white">Cruise Planner</Link></li>
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/guides/independent-funchal-guide" className="hover:text-white">Independent Guide</Link></li>
              <li><Link href="/ship-schedules/funchal" className="hover:text-white">Ship Schedules</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Honest advice</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/compare/can-you-explore-funchal-independently" className="hover:text-white">Explore Independently?</Link></li>
              <li><Link href="/guides/one-day-in-madeira" className="hover:text-white">One Day in Madeira</Link></li>
              <li><Link href="/cruise-port-guide" className="hover:text-white">Cruise Port Guide</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Get in Touch</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
        <div className="container-wide mt-6 border-t border-white/10 pt-6">
          <p className="text-xs text-coastal-100/50 mb-2">Atlantic Europe sister sites:</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-coastal-100/50">
            <a href="https://canaryislandscruiseplanner.com" className="hover:text-coastal-200" rel="noopener noreferrer">Canary Islands Cruise Planner</a>
            <a href="https://tenerifeshoreexcursions.com" className="hover:text-coastal-200" rel="noopener noreferrer">Tenerife Shore Excursions</a>
            <a href="https://madeiracruiseport.com" className="hover:text-coastal-200" rel="noopener noreferrer">Madeira Cruise Port</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. Independent Madeira travel resource for cruise passengers — not affiliated with any cruise line.
      </div>
    </footer>
  );
}
