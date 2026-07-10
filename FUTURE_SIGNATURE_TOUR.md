# FUTURE_SIGNATURE_TOUR.md

**Internal planning document — not linked from the public site. Never render publicly.**

---

## Working concept

**The Ultimate Madeira Discovery**

Alternative names considered:
- Madeira Beyond the Viewpoints
- Madeira Mountains, Villages & Wine
- The Secret Madeira Experience
- Small Group Madeira Discovery

Public route (In Development state only): `/signature-madeira-experience`

---

## Potential future experience (direction only — not confirmed)

- Maximum 4 guests
- Private local driver
- Valley of the Nuns
- Spectacular mountain viewpoints
- Traditional villages
- Madeira wine or local tasting
- Flexible photography stops
- Personalised pace
- Bottled water
- WhatsApp support before arrival
- No large coach
- No unnecessary shopping stops
- Return-to-ship confidence (operational — do not claim as a public guarantee until contractual)
- Available exclusively through our websites

**Do not invent operational details, pricing, inclusions or guarantees that have not been agreed.**

---

## Potential operator partnership approach

Suggested opening:

> “I’d like to create an exclusive excursion that is only available through our websites. I can commit to reserving cruise dates in advance if we design it together.”

---

## Commercial test conditions

Wait until the site produces meaningful impressions and clicks, then:

1. Identify the highest-demand dates and search themes
2. Approach the operator with evidence of demand
3. Negotiate selected date allocations
4. Understand deposit requirements
5. Agree release deadlines for unsold vehicles
6. Confirm cancellation terms
7. Confirm cruise delay and missed-port policy
8. Confirm vehicle capacity (target: 1 vehicle / max 4 guests)
9. Confirm guide/driver language
10. Confirm insurance and licensing
11. Confirm payment process
12. Agree exclusive itinerary or exclusive packaging
13. Avoid overcommitting before sales evidence exists

---

## Limited availability model (future UI — inactive until real)

When commercial arrangements exist, the product model already supports:

- `capacity.maxGuests` / `capacity.vehiclesAvailable`
- `capacity.status`: available | limited | sold-out | coming-soon | enquire
- Limited availability badge
- Selected sailing dates
- Booking deadline note
- Sold-out / waitlist / interest form
- Alternative recommendation when unavailable

Scarcity messaging must reflect genuine vehicle availability — no fake urgency.

---

## Content and badge policy

- Public page shows **In Development / Not Yet Bookable** only — no pricing, no fixed itinerary, no booking button until conditions above are met
- Wow Collection badge appears **only** once genuinely launched
- Do not show Wow badge on standard reseller / affiliate excursions
- Interim Editor’s Choice: `madeira-island-highlights` (+ `valley-of-the-nuns-tour` as scenery alternative)
- Future exclusive should occupy Best Private Experience and potentially Editor’s Choice

---

## Related public files

- `src/app/signature-madeira-experience/page.tsx`
- `src/app/wow-collection/page.tsx`
- `src/components/MadeiraWowCollection.tsx`
- `src/data/excursions.ts` → `ultimate-madeira-discovery` (`comingSoon: true`, `wowCollection: false`)

---

*Last updated: July 2026*
