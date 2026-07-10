import type { AttractionPage } from "./types";

const FUNCHAL_GETTING_THERE = [
  {
    method: "Walk from cruise terminal",
    detail: "Funchal's cruise pier is within 10–20 minutes' walk of the Old Town, Mercado dos Lavradores and the cable car base station.",
    time: "10–20 min",
    cost: "Free",
  },
  {
    method: "Taxi from terminal",
    detail: "Metered taxis wait at the cruise terminal. Short city rides are affordable; longer island transfers add up quickly.",
    time: "5–10 min to city centre",
    cost: "EUR 5–12",
  },
  {
    method: "Shore excursion coach",
    detail: "Licensed operators with ship-timed departures for island destinations — the safest option for return confidence on long transfers.",
    time: "Door-to-door",
    cost: "Tour price",
  },
  {
    method: "Local bus (Horários do Funchal)",
    detail: "Funchal's city bus network is cheap and covers most city districts. Less practical for mountain destinations.",
    time: "10–30 min city routes",
    cost: "EUR 1.50–3",
  },
];

export const highlights: AttractionPage[] = [
  {
    slug: "valley-of-the-nuns-from-funchal",
    title: "Valley of the Nuns from Funchal Cruise Port",
    seoTitle: "Valley of the Nuns from Funchal Cruise Port — Curral das Freiras Guide",
    metaDescription: "Visit the Valley of the Nuns (Curral das Freiras) from Funchal cruise port with realistic coach times, crater panorama advice and return-to-ship planning.",
    attractionName: "Valley of the Nuns (Curral das Freiras)",
    tagline: "Inside the volcano — a village in a crater you never expected to find.",
    overview:
      "Curral das Freiras, the Valley of the Nuns, sits inside a collapsed volcanic crater ringed by basalt peaks and accessible only by winding mountain road. For cruise passengers it is Madeira's most surprising inland destination: a working village with chestnut orchards, a parish church and views from the rim that explain why this was the island's most isolated community for centuries.",
    body: [
      "From the Funchal cruise terminal, the Valley of the Nuns is roughly 30–40 minutes by coach. The road climbs steadily through the city's terraced hillside suburbs and into the mountain interior, passing through tunnels before emerging at the Eira do Serrado viewpoint — one of the best crater panoramas on the island.",
      "The village below, accessible by road or by steep path, sits at around 800 metres altitude in a natural amphitheatre of sheer volcanic walls. Local specialities include chestnut soup, chestnut-flavoured poncha and chesnut liqueur — the trees that fill the valley floor were the village's economic foundation before road access arrived.",
      "This is best visited on a shore excursion rather than independently — the mountain roads require local knowledge and the return timing discipline is critical. A dedicated Valley of the Nuns tour or the broader island highlights excursion both work well.",
    ],
    distanceFromPort: "15 km from Funchal centre by road",
    travelTime: "30–40 min each way by coach",
    timeNeeded: "3.5–5 hours door-to-door",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "Eira do Serrado viewpoint above the crater",
      "Curral das Freiras village in the volcanic bowl",
      "Chestnut orchards and local produce",
      "Mountain tunnel road experience",
    ],
    tips: [
      "Bring a warm layer — the crater floor can be 5–8°C cooler than Funchal",
      "Avoid midday on multi-ship days — the viewpoint gets crowded",
      "Combine with Cabo Girão on longer calls for a full western Madeira day",
    ],
    faqs: [
      {
        question: "Is the Valley of the Nuns worth visiting from a cruise ship?",
        answer:
          "Yes — it is one of Madeira's most genuinely impressive inland destinations. The crater setting is unlike anywhere else on Atlantic cruise itineraries.",
      },
      {
        question: "Can I reach Curral das Freiras independently?",
        answer:
          "Technically possible by taxi, but the return logistics and mountain road are better managed by an organised excursion on a cruise day.",
      },
    ],
    relatedAttractionSlugs: [
      "cabo-girao-shore-excursion-guide",
      "west-madeira-shore-excursions",
      "best-funchal-shore-excursions",
    ],
    relatedExcursionSlug: "valley-of-the-nuns-tour",
  },
  {
    slug: "cabo-girao-shore-excursion-guide",
    title: "Cabo Girão Shore Excursion Guide from Funchal",
    seoTitle: "Cabo Girão Shore Excursion from Funchal — Europe's Highest Sea Cliff Guide",
    metaDescription: "Visit Cabo Girão from Funchal cruise port with transfer times, glass-floor viewpoint advice and the story of one of Europe's highest sea cliffs.",
    attractionName: "Cabo Girão",
    tagline: "580 metres of sheer Atlantic cliff — one of Europe's most vertiginous viewpoints.",
    overview:
      "Cabo Girão is one of Europe's highest sea cliffs, dropping nearly 580 metres from the plateau edge to the Atlantic below. A glass-floored viewing platform extends over the void, offering a perspective on Madeira's volcanic geology that few other cruise port experiences can rival.",
    body: [
      "From Funchal, Cabo Girão is around 20–25 minutes by coach along the coastal expressway and then up the cliff road. The platform at the top sits directly above the scattered field terraces (fajãs) on the cliff base — farmed for centuries by local families lowered down by ropes, and now accessible by a cable lift from the sea level below.",
      "The glass floor is the headline attraction, though visitors with vertigo may prefer to appreciate the view from the solid perimeter. The cliff profile is most dramatic in late morning light when sea haze is minimal. Weather at the cliff top can be windier than the sheltered coast below.",
      "Cabo Girão combines naturally with Câmara de Lobos fishing village and Valley of the Nuns as part of a western Madeira excursion. As a standalone visit it is worth around 30–45 minutes of exploration time.",
    ],
    distanceFromPort: "20 km west of Funchal",
    travelTime: "20–25 min each way by coach",
    timeNeeded: "30–45 min on site",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "Glass-floored viewing platform at 580 metres",
      "One of Europe's highest sea cliffs",
      "Fajã terraces on the cliff base",
      "Atlantic cliff panorama",
    ],
    tips: [
      "Visit before noon for the best light and before crowds build on multi-ship days",
      "Wind at the cliff top can be sharp even on warm days — bring a layer",
      "The glass floor is safe — fear of heights is the limiting factor, not structural risk",
    ],
    faqs: [
      {
        question: "Is Cabo Girão worth visiting as a standalone stop?",
        answer:
          "Yes, but it works best combined with Câmara de Lobos and Valley of the Nuns as part of a western Madeira excursion.",
      },
      {
        question: "Is the glass floor viewpoint accessible to wheelchair users?",
        answer:
          "The viewpoint area is generally flat and accessible from the car park. Confirm with your specific operator for exact accessibility details.",
      },
    ],
    relatedAttractionSlugs: [
      "valley-of-the-nuns-from-funchal",
      "west-madeira-shore-excursions",
      "best-funchal-shore-excursions",
    ],
    relatedExcursionSlug: "madeira-island-highlights",
  },
  {
    slug: "east-madeira-shore-excursions",
    title: "East Madeira Shore Excursions from Funchal",
    seoTitle: "East Madeira Shore Excursions from Funchal — Santana, Pico do Arieiro & More",
    metaDescription: "Plan east Madeira shore excursions from Funchal cruise port with Santana, Pico do Arieiro, laurissilva forest, Ribeiro Frio and eastern viewpoints.",
    attractionName: "East Madeira",
    tagline: "Thatched houses, cloud-high peaks and UNESCO forest — eastern Madeira from Funchal.",
    overview:
      "Eastern Madeira offers a very different character from the western cliff-and-village circuit: Santana's famous palheiro thatched houses, the high-altitude Pico do Arieiro summit, UNESCO-protected laurissilva forest at Ribeiro Frio and a series of dramatically different microclimates within a single excursion.",
    body: [
      "Santana village, roughly 50 km northeast of Funchal (60–75 minutes by coach), contains the most photographed traditional Madeiran architecture: A-frame thatched houses with deep overhanging roofs and painted facades. These are not museum reconstructions — some remain occupied family homes, maintained by local residents who live alongside the heritage tourism.",
      "Pico do Arieiro at 1,818 metres is Madeira's third highest peak and among the most accessible by road. The summit car park gives access to viewpoints above the cloud layer on clear days — a remarkable experience of looking down on the island from above its weather systems.",
      "Ribeiro Frio, on the route north from Funchal, sits within the laurissilva subtropical forest UNESCO World Heritage Zone. Walking from the trout ponds up to the Balcões viewpoint (30 minutes round trip) offers forest immersion before descending back to the coast.",
    ],
    distanceFromPort: "50–55 km to Santana; 40 km to Pico do Arieiro",
    travelTime: "60–75 min to Santana by coach; 50–60 min to Pico do Arieiro",
    timeNeeded: "7–8.5 hours for a full east Madeira circuit",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "Santana palheiro thatched houses",
      "Pico do Arieiro near 1,800-metre summit views",
      "Ribeiro Frio laurissilva forest",
      "UNESCO World Heritage landscape",
    ],
    tips: [
      "Cloud cover at Pico do Arieiro is common but rarely disappointing — mist in laurissilva forest is atmospheric",
      "Best on standard or long calls — east Madeira requires 7+ usable hours",
      "Bring warm clothing: Pico do Arieiro can be 10–15°C cooler than Funchal",
    ],
    faqs: [
      {
        question: "Is east Madeira better than west Madeira for a cruise day?",
        answer:
          "They are genuinely different. West offers sea cliffs and the valley; east offers mountain altitude and forest. The island highlights tour covers elements of both.",
      },
      {
        question: "Can I walk at Pico do Arieiro without booking a guided walk?",
        answer:
          "Yes — short viewpoint walks from the car park require no guide. The famous long ridge walk to Pico Ruivo requires more time and fitness than a cruise day typically allows.",
      },
    ],
    relatedAttractionSlugs: [
      "best-levada-walks-cruise-passengers",
      "valley-of-the-nuns-from-funchal",
      "best-funchal-shore-excursions",
    ],
    relatedExcursionSlug: "east-madeira-tour",
  },
  {
    slug: "west-madeira-shore-excursions",
    title: "West Madeira Shore Excursions from Funchal",
    seoTitle: "West Madeira Shore Excursions from Funchal — Porto Moniz, Câmara de Lobos & Cabo Girão",
    metaDescription: "West Madeira shore excursion guide from Funchal covering Porto Moniz natural pools, Câmara de Lobos fishing village, Cabo Girão cliff and the northwest…",
    attractionName: "West Madeira",
    tagline: "Wild coast, lava pools and Churchill's favourite fishing village — Madeira's dramatic west.",
    overview:
      "Western Madeira takes in Madeira's most celebrated coastal landmarks — Câmara de Lobos fishing village, Cabo Girão sea cliff and the long northwest coast road to Porto Moniz's volcanic natural pools. This is the most popular cruise excursion circuit from Funchal, combining high-drama scenery with manageable logistics.",
    body: [
      "Câmara de Lobos, just 9 km west of Funchal, is the fishing village where Winston Churchill famously painted the harbour scene in 1950. It remains a working fishing community, with espada (black scabbardfish) boats moored alongside colourful wooden houses and a small beach used by local families.",
      "Porto Moniz at the island's northwestern tip is roughly 90 minutes by coach from Funchal — a significant transfer, but the coastal road drive through dramatic cliff scenery is as rewarding as the destination. The natural pools at Porto Moniz are formed by lava flows creating sheltered lagoons at sea level, used for swimming when conditions allow.",
      "For shorter calls, the western half-day combining Câmara de Lobos, Cabo Girão and Valley of the Nuns is a strong alternative to the full Porto Moniz circuit. Save Porto Moniz for longer calls with 7+ usable hours.",
    ],
    distanceFromPort: "9 km to Câmara de Lobos; 90 km to Porto Moniz",
    travelTime: "15 min to Câmara de Lobos; 90 min to Porto Moniz by coach",
    timeNeeded: "4 hours for western highlights; 7–8.5 hours for Porto Moniz circuit",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "Porto Moniz volcanic lava pools",
      "Câmara de Lobos historic fishing village",
      "Cabo Girão glass-floor sea cliff viewpoint",
      "Northwest coastal cliff road",
    ],
    tips: [
      "Porto Moniz is best on long calls — don't attempt it on a short or standard call",
      "Câmara de Lobos is a superb half-day option within easy reach of Funchal",
      "The coastal road northwest is dramatic even if Porto Moniz is not the destination",
    ],
    faqs: [
      {
        question: "Should I choose Porto Moniz or Valley of the Nuns?",
        answer:
          "Porto Moniz is coastal and dramatic; Valley of the Nuns is inland and intimate. The island highlights tour covers both directions in a compressed but satisfying format.",
      },
      {
        question: "Is Câmara de Lobos walkable from Funchal cruise terminal?",
        answer:
          "Not practically — it is 9 km west. A taxi takes around 15 minutes; it usually features in organised excursions.",
      },
    ],
    relatedAttractionSlugs: [
      "cabo-girao-shore-excursion-guide",
      "valley-of-the-nuns-from-funchal",
      "best-funchal-shore-excursions",
    ],
    relatedExcursionSlug: "west-madeira-tour",
  },
  {
    slug: "madeira-wine-tours-from-funchal",
    title: "Madeira Wine Tours from Funchal Cruise Port",
    seoTitle: "Madeira Wine Tours from Funchal — Wine Lodge Visits & Tasting Guide",
    metaDescription: "Plan your Madeira wine tour from Funchal cruise port with wine lodge visit advice, tasting style guide and the history of one of the world's most…",
    attractionName: "Madeira Wine Lodges",
    tagline: "The wine that improved at sea — Funchal's four-century wine heritage.",
    overview:
      "Madeira wine is among the world's most historically fascinating fortified wines: a product shaped by long Atlantic voyages, deliberate oxidation and volcanic island terroir. Funchal's wine lodges make this accessible without leaving the city, and a tasting session here is one of the most distinctively Madeiran experiences available to cruise passengers.",
    body: [
      "The major wine lodges — including Blandy's Wine Lodge on Avenida Arriaga — offer guided tours and tastings that explain Madeira wine's four grape varieties (Sercial, Verdelho, Bual, Malmsey) and the estufagem heating process that distinguishes it from all other wines. Blandy's 17th-century lodge is a short walk from the cruise terminal.",
      "Madeira wine terminology matters for getting the most from a tasting. Sercial is dry and acidic, best as an aperitif. Verdelho is medium-dry with nutty character. Bual (or Boal) is medium-rich and complex. Malmsey is the sweet, rich style most associated with Madeira wine internationally — the variety described in Shakespeare's Henry IV.",
      "Wine enthusiasts may want to allocate 2–3 hours for a lodge visit including tour and tasting. Passengers wanting a quick introduction can often do a 45-minute tasting without the full tour. Combine with the food and culture tour for a satisfying Funchal-only day.",
    ],
    distanceFromPort: "10–15 min walk to Blandy's Wine Lodge",
    travelTime: "10–15 min walk from terminal",
    timeNeeded: "1.5–3 hours",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "Blandy's Wine Lodge historic cellars",
      "Four Madeira wine varieties in context",
      "Estufagem ageing process explanation",
      "Opportunity to purchase directly from the lodge",
    ],
    tips: [
      "Blandy's on Avenida Arriaga is the most accessible lodge for cruise passengers",
      "Book ahead for guided tours on multi-ship days",
      "Madeira wine keeps open for weeks once poured — a practical souvenir",
    ],
    faqs: [
      {
        question: "Which Madeira wine style should I try first?",
        answer:
          "If you prefer dry wines, start with Sercial. For something approachable and crowd-pleasing, try Malmsey. A guided tasting covers all styles.",
      },
      {
        question: "Can I visit wine lodges independently?",
        answer:
          "Yes — Blandy's takes walk-in visitors on most days. A shore excursion adds guide context and tastings within a managed schedule.",
      },
    ],
    relatedAttractionSlugs: [
      "best-food-to-try-in-madeira",
      "funchal-cable-car-monte-guide",
      "best-funchal-shore-excursions",
    ],
    relatedExcursionSlug: "madeira-wine-tour",
  },
  {
    slug: "best-levada-walks-cruise-passengers",
    title: "Best Levada Walks for Cruise Passengers",
    seoTitle: "Best Levada Walks for Cruise Passengers from Funchal Port",
    metaDescription: "Guide to the best levada walks for cruise passengers from Funchal — choosing cruise-appropriate routes, avoiding exposed paths and managing return timing.",
    attractionName: "Madeira Levada Walks",
    tagline: "Walking Madeira's irrigation channels — which routes work for cruise passengers.",
    overview:
      "Madeira's levadas are one of the island's defining experiences: centuries-old irrigation channels carved into mountain contours, now forming some of the world's most unusual and rewarding walking paths. Not all levada routes are suitable for cruise passengers — this guide helps you choose correctly.",
    body: [
      "The levada system was built from the 15th century to carry water from Madeira's wet north to its drier south. The maintenance paths alongside the channels — often just wide enough for one person — follow the land contour, meaning gradient is minimal even at altitude. This makes them accessible to ordinary walkers who would struggle on a conventional mountain trail.",
      "The most famous routes, including Levada do Caldeirão Verde and sections near Fanal, involve genuinely exposed ledges and require both fitness and a head for heights. These are not cruise-day appropriate. The levada walks curated for cruise passengers typically use sections near Ribeiro Frio, Queimadas or the Levada dos Tornos — flatter, greener and with manageable return logistics.",
      "Key factors when choosing a levada walk: transfer time to the trailhead (30–60 minutes each way from Funchal is typical), return timing discipline, weather (laurissilva forest is beautiful in mist but wet underfoot), and group fitness level. A licensed guide is strongly recommended for any levada walk on a cruise day.",
    ],
    distanceFromPort: "15–40 km to most cruise-appropriate trailheads",
    travelTime: "30–60 min each way by coach to trailhead",
    timeNeeded: "4–6 hours door-to-door including walking time",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "UNESCO laurissilva subtropical forest",
      "Flat contour paths accessible to regular walkers",
      "Mountain atmosphere without extreme terrain",
      "Bird life, ferns and endemic Madeiran vegetation",
    ],
    tips: [
      "Always wear walking shoes with grip — levada paths can be slippery with leaf litter",
      "Bring water and a light waterproof layer",
      "Check whether any section of your chosen route passes exposed ledges before booking",
    ],
    faqs: [
      {
        question: "Are levada walks safe for passengers who are not experienced hikers?",
        answer:
          "On correctly chosen routes, yes. Cruise-appropriate levada sections are generally flat and well-maintained. Avoid routes marketed as adventurous or featuring 'vertiginous' sections.",
      },
      {
        question: "What shoes do I need for a levada walk?",
        answer:
          "Trainers with grip are adequate for cruise-appropriate routes. Proper walking shoes are better. Sandals or smooth-soled shoes are not suitable.",
      },
    ],
    relatedAttractionSlugs: [
      "east-madeira-shore-excursions",
      "what-to-wear-in-madeira",
      "best-funchal-shore-excursions",
    ],
    relatedExcursionSlug: "levada-walk-cruise-day",
  },
  {
    slug: "funchal-cable-car-monte-guide",
    title: "Funchal Cable Car & Monte Guide for Cruise Passengers",
    seoTitle: "Funchal Cable Car Monte Guide — Monte Palace Gardens & Toboggan",
    metaDescription: "Complete guide to Funchal's cable car, Monte village, Monte Palace Tropical Garden and the Monte toboggan for cruise passengers.",
    attractionName: "Funchal Cable Car & Monte",
    tagline: "Funchal from above — cable car, tropical gardens and a wicker toboggan.",
    overview:
      "The aerial cable car from Funchal's Old Town (Zona Velha) to the hilltop village of Monte is one of Madeira's most distinctive short experiences. Combined with Monte Palace Tropical Garden and the famous wicker toboggan descent, it makes an excellent Funchal-focused half-day that requires no long island transfer.",
    body: [
      "The cable car (teleférico) departs from a station near the base of Santa Catarina hill in Zona Velha and climbs 560 metres over 15 minutes to Monte village. Views on the ascent cover Funchal's harbourfront, the cruise terminal and bay extending toward the Desertas islands on clear days. The descent option is by toboggan or cable car — both are recommended.",
      "Monte Palace Tropical Garden occupies a slope below the village church and extends across multiple terraces. The garden contains a serious collection of cycads, Madeiran endemic plants, Japanese stone garden elements and azulejo tile panels tracing Portuguese history — it is considerably more substantial than a standard botanical garden visit and rewards at least 60 minutes.",
      "The Monte toboggan (carro de cesto) descends 2 km through Funchal's streets to the Livramento area, piloted by two carreiros in traditional white uniforms. It is a uniquely Madeiran experience — a 19th-century village transport tradition made available to visitors. The ride takes 10–15 minutes and typically costs around EUR 25–30 per person depending on season.",
    ],
    distanceFromPort: "1 km to cable car base station in Zona Velha",
    travelTime: "15 min walk or 5 min taxi to cable car base",
    timeNeeded: "2.5–4 hours for cable car, garden and toboggan",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "Aerial cable car with panoramic Funchal bay views",
      "Monte Palace Tropical Garden",
      "Monte village church and café atmosphere",
      "Monte toboggan traditional descent",
    ],
    tips: [
      "Buy cable car tickets at the base to avoid queuing at the top",
      "Allow at least 60 minutes for Monte Palace Garden — 30 minutes is not enough",
      "The toboggan is a separate ticket — confirm current pricing and operating times",
    ],
    faqs: [
      {
        question: "Is the cable car suitable for passengers with a fear of heights?",
        answer:
          "The enclosed gondolas are secure; the view is elevated but the cable car is stable. Passengers with severe height anxiety may find it uncomfortable.",
      },
      {
        question: "How long does the toboggan ride take?",
        answer:
          "Around 10–15 minutes for the 2 km descent through the streets. It ends near Livramento, from which taxis return to Funchal.",
      },
    ],
    relatedAttractionSlugs: [
      "best-funchal-shore-excursions",
      "madeira-wine-tours-from-funchal",
      "best-food-to-try-in-madeira",
    ],
    relatedExcursionSlug: "funchal-monte-cable-car-tour",
  },
  {
    slug: "what-to-wear-in-madeira",
    title: "What to Wear in Madeira on a Cruise Day",
    seoTitle: "What to Wear in Madeira — Cruise Passenger Packing Guide",
    metaDescription: "What to wear in Madeira on a cruise day: layering for mountain altitude, comfortable shoes for levadas, rain layers for laurissilva and Funchal city dress.",
    attractionName: "Madeira Clothing Guide",
    tagline: "Layers, grip and a waterproof — packing right for Madeira's micro-climates.",
    overview:
      "Madeira's famous mild climate is real on the coast, but the island's varied topography creates significant micro-climate differences within a single excursion. Packing correctly for a Funchal cruise day means planning for both the harbour and the mountain summit in the same bag.",
    body: [
      "At sea level in Funchal, temperatures typically range from 18–24°C year-round — mild, pleasant and requiring only light clothing. The sun is stronger than northern Europeans expect at any time of year, so sun protection is essential even in January or February.",
      "In the mountains — Pico do Arieiro, Paul da Serra plateau, upper levada zones — temperatures drop significantly: typically 8–15°C cooler than the coast and often with cloud and wind. A warm mid-layer (fleece or light down jacket) and a windproof shell are essential if your excursion includes any mountain altitude.",
      "Walking footwear matters on Madeira more than at most cruise ports. Levada paths, Old Town cobbles, Monte Palace Garden slopes and mountain viewpoints all benefit from shoes with grip and ankle support. Fashion trainers are adequate for the city; walking shoes or hiking trainers are strongly recommended for any excursion involving paths.",
    ],
    distanceFromPort: "N/A — planning guide",
    travelTime: "N/A",
    timeNeeded: "N/A",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "Light clothing for Funchal city and coast",
      "Warm layer essential for mountain excursions",
      "Windproof shell for cliff viewpoints",
      "Walking shoes for levadas and gardens",
    ],
    tips: [
      "A packable rain layer takes up no space and protects against unexpected mountain showers",
      "Sun cream and sunglasses year-round — Madeira's latitude means UV is significant even in winter",
      "Comfortable walking shoes will improve every type of Madeira excursion",
    ],
    faqs: [
      {
        question: "Is Madeira warm enough for shorts and T-shirts?",
        answer:
          "In Funchal at sea level, usually yes. Carry a layer for mountains — you may want it even if you don't use it.",
      },
      {
        question: "Do I need waterproof clothing in Madeira?",
        answer:
          "For mountain and north-coast excursions, a light waterproof is worthwhile. Funchal city is usually dry, though winter showers occur.",
      },
    ],
    relatedAttractionSlugs: [
      "madeira-weather-cruise-passengers",
      "best-levada-walks-cruise-passengers",
      "best-funchal-shore-excursions",
    ],
  },
  {
    slug: "madeira-weather-cruise-passengers",
    title: "Madeira Weather for Cruise Passengers",
    seoTitle: "Madeira Weather Guide for Cruise Passengers — What to Expect by Season",
    metaDescription: "Madeira weather guide for cruise passengers covering coast vs mountain conditions, seasonal variation, the Island of Eternal Spring reality and planning…",
    attractionName: "Madeira Weather",
    tagline: "The Island of Eternal Spring — and what that actually means for your excursion.",
    overview:
      "Madeira's reputation as the Island of Eternal Spring is well-founded but needs contextualising for cruise passengers planning excursions. The coast is reliably mild year-round; the mountains operate under entirely different conditions. Understanding Madeira's weather is essential for choosing and enjoying the right excursion.",
    body: [
      "Funchal at sea level enjoys average temperatures between 17°C in February and 25°C in August — genuinely mild year-round. Summer adds humidity; winter adds occasional rain. The coastal climate justifies the eternal spring description. For city excursions, food tours and wine lodge visits, weather is rarely a serious planning factor.",
      "Mountain Madeira is a different proposition. The central peaks above 1,400 metres are frequently cloud-covered, especially in the morning. Pico do Arieiro may offer panoramic views or impenetrable mist on the same day different passengers visit. This is not a reason to avoid mountain excursions — misty laurissilva forest is atmospheric and beautiful — but it sets realistic expectations.",
      "The north coast, including Santana, typically receives more rainfall and cloud than Funchal. The Paul da Serra plateau in the west is one of the island's windiest points. Levada walks in the north and northeast are often greener and cooler than coastal Funchal, which passengers appreciate in summer but should prepare for year-round.",
    ],
    distanceFromPort: "N/A — planning guide",
    travelTime: "N/A",
    timeNeeded: "N/A",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "Funchal coast mild year-round (17–25°C)",
      "Mountain temperatures 8–15°C cooler than coast",
      "Summer humidity; winter occasional rain at coast",
      "North coast and plateau wetter and windier",
    ],
    tips: [
      "Book mountain excursions knowing cloud is possible — they are still worthwhile",
      "Winter calls (October–April) bring more cruise traffic and occasionally cooler coast temperatures",
      "Summer (July–August) is generally driest and sunniest; autumn and spring are also excellent",
    ],
    faqs: [
      {
        question: "What is Madeira's weather like for cruise passengers in winter?",
        answer:
          "Mild — typically 17–20°C on the coast. Mountains may be cooler and cloudier. The island's main cruise season overlaps with European winter when Madeira's climate is most appealing.",
      },
      {
        question: "Can weather cancel a Madeira excursion?",
        answer:
          "Rarely at coast level. Mountain excursions may be rerouted if summit conditions are poor. Ask your operator what happens in poor weather conditions.",
      },
    ],
    relatedAttractionSlugs: [
      "what-to-wear-in-madeira",
      "best-funchal-shore-excursions",
      "best-things-to-do-funchal-cruise",
    ],
  },
  {
    slug: "best-food-to-try-in-madeira",
    title: "Best Food to Try in Madeira on a Cruise Day",
    seoTitle: "Best Food to Try in Madeira — Funchal Cruise Passenger Food Guide",
    metaDescription: "Best Madeiran food for cruise passengers: espada com banana, bolo do caco, lapas, Mercado dos Lavradores market, poncha and what to order in Funchal.",
    attractionName: "Madeiran Food Culture",
    tagline: "Espada, lapas, bolo do caco and poncha — Funchal's food identity in one port day.",
    overview:
      "Madeiran food is genuinely distinct from mainland Portuguese cuisine and from anything typically encountered on Atlantic cruise itineraries. A single Funchal port day provides access to some of the most characterful Atlantic island food traditions in Europe — if you know what to order and where to find it.",
    body: [
      "Espada com banana — black scabbardfish (espada) served with banana — is the most distinctively Madeiran dish. The deep-sea fish, caught off the island's underwater cliffs, has an almost gelatinous texture and mild flavour. Paired with banana, it sounds improbable and tastes extraordinary. Find it at tascas in the Old Town or the restaurants around Mercado dos Lavradores.",
      "Mercado dos Lavradores (Workers' Market) on the edge of the Old Town is the essential food destination: a covered market hall with flower stalls, exotic fruit vendors, fish counters and local produce sellers. Arrive before 11am for the full experience before tourist volumes build. Look for poncha (sugarcane spirit with lemon, honey or passion fruit), passion fruit, pitanga and other subtropical fruit.",
      "Bolo do caco — a flat bread cooked on a basalt stone (caco), often served warm with garlic butter — is Madeira's everyday street food and works as a snack or accompaniment to any meal. Lapas (grilled limpets with garlic and lemon) is the mandatory starter. End with a bica (espresso) and a piece of Madeira cake — the island's confection is significantly different and better than the exported version.",
    ],
    distanceFromPort: "10–15 min walk to Mercado dos Lavradores",
    travelTime: "10–15 min walk from cruise terminal",
    timeNeeded: "1.5–3 hours for market and lunch",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "Espada com banana at Old Town tascas",
      "Mercado dos Lavradores exotic fruit and fish",
      "Lapas grilled limpets — mandatory starter",
      "Bolo do caco with garlic butter",
    ],
    tips: [
      "Visit the market in the morning — afternoon is quieter but some stalls may have closed",
      "Lapas are available at virtually every café near the Old Town — order them as a starter",
      "Poncha is strong (around 40% ABV) — a small measure with lunch is the Madeiran way",
    ],
    faqs: [
      {
        question: "Is Madeiran food suitable for vegetarians?",
        answer:
          "Options are available but Madeiran cuisine is heavily seafood and meat focused. Vegetable soups, bolo do caco and some market produce work well.",
      },
      {
        question: "Where is the best place to eat near the Funchal cruise port?",
        answer:
          "The Old Town (Zona Velha) has the highest concentration of tascas with genuine Madeiran cooking. Avenida do Mar restaurants are convenient but more tourist-oriented.",
      },
    ],
    relatedAttractionSlugs: [
      "madeira-wine-tours-from-funchal",
      "best-funchal-shore-excursions",
      "best-things-to-do-funchal-cruise",
    ],
    relatedExcursionSlug: "madeira-food-culture-tour",
  },
  {
    slug: "best-funchal-shore-excursions",
    title: "Best Funchal Shore Excursions for Cruise Passengers",
    seoTitle: "Best Funchal Shore Excursions — Cruise Passenger Planning Guide",
    metaDescription: "Planning guide to the best Funchal shore excursions from the cruise port — Valley of the Nuns, Cabo Girão, Porto Moniz, levada walks, wine tours and…",
    attractionName: "Funchal Shore Excursions Overview",
    tagline: "Madeira's best cruise day options — how to choose between the island's highlights.",
    overview:
      "Funchal cruise passengers face one of the richest shore excursion choices in the Atlantic: a genuinely spectacular island with multiple distinct landscape types, strong food culture and practical logistics. This guide helps you navigate the options honestly, based on your time in port, mobility, interests and group composition.",
    body: [
      "The clearest first decision for Funchal passengers is whether to focus on the island interior — taking a coach 30–90 minutes to mountain viewpoints, crater villages or lava pools — or to focus on Funchal itself, which is a substantial and rewarding city with cable car, Old Town, wine lodges, market and botanical gardens all accessible without long transfers.",
      "For island excursions, the Valley of the Nuns and Cabo Girão western circuit is the most popular and most reliable: two dramatically different experiences (inland crater and coastal cliff) within a manageable 6–7 hour excursion. Porto Moniz extends the western circuit to the island's far northwest and requires a full call of 8+ hours. Eastern Madeira (Santana, Pico do Arieiro) suits passengers who want mountain altitude and forest over cliff scenery.",
      "Levada walks require specific planning — not all levada routes are cruise-appropriate. Wine tours and food culture tours anchor effectively in Funchal without island transfers. Private tours suit mixed-mobility groups and those who want custom pacing. The island highlights tour (Editor's Choice) combines the western landmarks with commentary in one curated day.",
    ],
    distanceFromPort: "All key attractions within 15 min walk to 90 min coach",
    travelTime: "Varies by excursion — see individual guides",
    timeNeeded: "2.5 hours (city only) to 8.5 hours (Porto Moniz circuit)",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "Island highlights: Valley of the Nuns + Cabo Girão (6–7 hrs)",
      "Funchal city: cable car, wine, food and Old Town (2.5–5 hrs)",
      "Porto Moniz natural pools (7–8.5 hrs — long calls only)",
      "East Madeira: Santana + Pico do Arieiro (7–8.5 hrs)",
    ],
    tips: [
      "Match excursion intensity to your usable port hours — leave a 90-minute return buffer",
      "First-time visitors: choose one strong island anchor rather than trying to do everything",
      "Multi-ship days see higher footfall at popular viewpoints — book ahead",
    ],
    faqs: [
      {
        question: "What is the single best Funchal shore excursion?",
        answer:
          "For most first-time visitors: the Madeira Island Highlights tour (Valley of the Nuns, Cabo Girão, Câmara de Lobos). For city depth: cable car, Monte Palace Garden and Old Town food.",
      },
      {
        question: "How much time should I allow for island excursions from Funchal?",
        answer:
          "Western circuit excursions need 6–7 hours minimum. Porto Moniz needs 8+ hours. Eastern circuit needs 7–8 hours. City-only excursions work in 3–5 hours.",
      },
    ],
    relatedAttractionSlugs: [
      "valley-of-the-nuns-from-funchal",
      "cabo-girao-shore-excursion-guide",
      "best-things-to-do-funchal-cruise",
    ],
  },
  {
    slug: "best-things-to-do-funchal-cruise",
    title: "Best Things to Do in Funchal on a Cruise Stop",
    seoTitle: "Best Things to Do in Funchal on a Cruise — Port Day Planning Guide",
    metaDescription: "Best things to do in Funchal on a cruise stop: Old Town walk, cable car, Mercado dos Lavradores, Madeira wine, levada walks and island tours from the…",
    attractionName: "Funchal City & Island",
    tagline: "One port day, many Madeiras — how to make every hour count in Funchal.",
    overview:
      "Funchal rewards cruise passengers on every level: the city itself is vibrant, walkable and culturally rich, while the island surrounding it offers extraordinary landscape within 30–90 minutes of the pier. The challenge is choosing — this guide frames the options clearly for a single port day.",
    body: [
      "Walking from the cruise terminal: the Old Town (Zona Velha) is around 15 minutes on foot east of the cruise terminal. The Painted Doors project lines the lanes behind Santa Maria Church. Mercado dos Lavradores is a further 5 minutes walk and worth at least 30–45 minutes. The cable car base station is in the Old Town near Babosas; the Funchal botanical garden is uphill from the city centre.",
      "City day priorities: start at the market before 11am, walk the Old Town lanes, visit a wine lodge on Avenida Arriaga (Blandy's accepts walk-ins), take the cable car to Monte in the early afternoon, return by toboggan or cable car, and finish with dinner or poncha in the Old Town. This covers Funchal's strongest experiences without any island coach transfer.",
      "Island day priorities: choose one destination firmly — Valley of the Nuns, Cabo Girão, east Madeira or levada walk — and commit to it rather than splitting the day. Island excursions deliver their best value when given full attention and conservative return buffers. Attempting deep city and island on the same call almost always leaves both experiences half-finished.",
    ],
    distanceFromPort: "Old Town 15 min walk; cable car 20 min walk",
    travelTime: "15–20 min walk from terminal to main city attractions",
    timeNeeded: "Full day for island + city; 3–5 hours for city only",
    gettingThere: FUNCHAL_GETTING_THERE,
    highlights: [
      "Zona Velha Old Town walk and Painted Doors",
      "Mercado dos Lavradores market",
      "Cable car to Monte and gardens",
      "Island excursion to Valley of the Nuns or beyond",
    ],
    tips: [
      "Decide city vs island before stepping off the ship",
      "The Old Town is the heart of Funchal culture — allocate at least 1.5 hours",
      "Market, wine lodge and cable car can all be done independently without a guide",
    ],
    faqs: [
      {
        question: "Is Funchal city worth exploring without an island excursion?",
        answer:
          "Absolutely — Funchal is one of the most genuinely interesting cruise port cities in the Atlantic, with depth that rewards a full day's city exploration.",
      },
      {
        question: "What is the most underrated thing to do in Funchal on a cruise stop?",
        answer:
          "Spending 90 minutes in Monte Palace Tropical Garden — most passengers rush it in 30 minutes and miss the extraordinary tile panels and upper garden terraces.",
      },
    ],
    relatedAttractionSlugs: [
      "best-funchal-shore-excursions",
      "funchal-cable-car-monte-guide",
      "best-food-to-try-in-madeira",
    ],
  },
];

export function getHighlightBySlug(slug: string): AttractionPage | undefined {
  return highlights.find((p) => p.slug === slug);
}

export function getAllHighlightSlugs(): string[] {
  return highlights.map((p) => p.slug);
}
