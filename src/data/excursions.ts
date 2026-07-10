import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships dock at Funchal's cruise terminal on the waterfront, within easy walking distance of the city centre. The Old Town (Zona Velha), Mercado dos Lavradores and the cable car to Monte are all reachable on foot or by a short taxi ride. Island highlights — Valley of the Nuns, Cabo Girão, Porto Moniz, Pico do Arieiro — require organised coach transfers, typically 30–90 minutes each way depending on destination. Always confirm your all-aboard time and allow a 60–90 minute return buffer before departure.";

export const excursions: ExcursionPage[] = [
  {
    slug: "madeira-island-highlights",
    title: "Madeira Island Highlights",
    seoTitle: "Madeira Island Highlights Shore Excursion from Funchal — Editor's Choice",
    metaDescription: "Editor's Choice Funchal shore excursion combining Valley of the Nuns, Cabo Girão, Câmara de Lobos, mountain viewpoints and Madeira's most rewarding…",
    category: "Madeira Island Highlights",
    tagline: "Editor's Choice: Madeira's defining landscapes — valley, cliff, village and viewpoint in one curated day.",
    duration: "6–7.5 hours",
    pace: "Moderate",
    bestFor: "First-time visitors wanting the broadest Madeira introduction with scenery, culture and no single theme overload",
    overview:
      "Our top overall pick for Funchal cruise passengers: a balanced Madeira day weaving the dramatic Valley of the Nuns (Curral das Freiras), Cabo Girão's vertiginous sea cliff, the fishing village of Câmara de Lobos and highland viewpoints — all within a well-paced cruise itinerary.",
    body: [
      "Depart from Funchal cruise terminal with a direct route into Madeira's spectacular interior. Within thirty minutes, the coastal city gives way to terraced mountainsides, eucalyptus forest and the first glimpses of the island's volcanic spine.",
      "The Valley of the Nuns (Curral das Freiras) sits inside a collapsed volcanic crater ringed by peaks — the village below is one of Madeira's most photogenic stops, with local chestnut produce and an atmosphere unchanged by tourism. Cabo Girão, one of Europe's highest sea cliffs, offers a glass-floored viewing platform above a sheer 580-metre drop to the Atlantic.",
      "Câmara de Lobos, the historic fishing village where Winston Churchill painted, provides a grounding in working Madeira life before the return to Funchal. Commentary throughout connects landscape and history without resort clichés.",
    ],
    highlights: [
      "Valley of the Nuns crater panorama",
      "Cabo Girão glass-floored sea cliff viewpoint",
      "Câmara de Lobos fishing village",
      "Highland viewpoints and terraced landscape",
    ],
    included: [
      "Round-trip coach transfer",
      "Licensed local guide",
      "Port pickup and drop-off",
      "Return timing management",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Bring a warm layer — valley temperatures differ from the coast",
      "Non-slip footwear recommended at viewpoints",
      "Best single excursion for Madeira first-timers",
    ],
    faqs: [
      {
        question: "Why is this Editor's Choice?",
        answer:
          "It balances Madeira's three strongest landscape types — interior crater, coastal cliff and fishing village — better than any single-theme alternative.",
      },
      {
        question: "Is the Valley of the Nuns far from the port?",
        answer:
          "Around 30–40 minutes by coach. The road winds through mountain terrain — the journey itself is part of the experience.",
      },
    ],
    relatedExcursionSlugs: [
      "valley-of-the-nuns-tour",
      "scenic-madeira-drive",
      "madeira-food-culture-tour",
    ],
    featured: true,
  },
  {
    slug: "valley-of-the-nuns-tour",
    title: "Valley of the Nuns (Curral das Freiras) Tour",
    seoTitle: "Valley of the Nuns Shore Excursion from Funchal Cruise Port",
    metaDescription: "Dedicated Valley of the Nuns (Curral das Freiras) shore excursion from Funchal with crater panoramas, village atmosphere and mountain scenery.",
    category: "Valley of the Nuns",
    tagline: "Inside the crater — Madeira's most dramatic valley village from a new angle.",
    duration: "4–5.5 hours",
    pace: "Moderate",
    bestFor:
      "Passengers wanting focused mountain-crater scenery and an authentic Madeiran village without a full island day",
    overview:
      "A dedicated excursion to Curral das Freiras — the Valley of the Nuns — sitting inside an ancient volcanic crater ringed by peaks. One of Madeira's most rewarding and photogenic destinations, accessible within a well-managed cruise window.",
    body: [
      "The road to Curral das Freiras climbs through Funchal's terraced hillside suburbs before entering mountain tunnels and emerging at the crater rim with a panorama few first-time visitors expect. The village below sits in a natural amphitheatre of basalt peaks.",
      "Guided time in the village includes local chestnut produce, the small parish church square and context on why the village remained isolated for centuries — geography rather than planning kept it apart from coastal Madeira.",
      "Return via a different route where possible, showing varied mountain terrain. The shorter format makes this practical even on calls where time is limited.",
    ],
    highlights: [
      "Volcanic crater rim panorama",
      "Curral das Freiras village",
      "Chestnut produce and local character",
      "Mountain tunnel road experience",
    ],
    included: [
      "Round-trip coach transfer",
      "Licensed guide",
      "Port pickup and drop-off",
      "Return timing management",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Combine with Cabo Girão on a longer call for a fuller western Madeira day",
      "Village square can be busy mid-morning on multi-ship days",
      "Bring a layer — the crater floor can be cooler than Funchal",
    ],
    faqs: [
      {
        question: "Is this tour suitable for passengers with limited mobility?",
        answer:
          "The viewpoints and village square are generally accessible; some paths have steps. Confirm specific requirements with your operator.",
      },
      {
        question: "Is Valley of the Nuns better than Cabo Girão for a first Madeira visit?",
        answer:
          "They offer very different experiences — valley versus cliff. The island highlights tour combines both if time allows.",
      },
    ],
    relatedExcursionSlugs: [
      "madeira-island-highlights",
      "scenic-madeira-drive",
      "west-madeira-tour",
    ],
    featured: true,
  },
  {
    slug: "west-madeira-tour",
    title: "West Madeira Tour — Porto Moniz & Natural Pools",
    seoTitle: "West Madeira Shore Excursion from Funchal — Porto Moniz Natural Pools",
    metaDescription: "West Madeira shore excursion from Funchal covering Porto Moniz volcanic natural pools, dramatic coastal cliffs and Madeira's wild northwest.",
    category: "West Madeira",
    tagline: "Madeira's wild northwest — lava pools, sea cliffs and an entirely different island.",
    duration: "7–8.5 hours",
    pace: "Moderate",
    bestFor:
      "Passengers on standard or long calls who want Madeira's most dramatic coastal scenery without a demanding hike",
    overview:
      "A west-coast journey to Porto Moniz and its famous volcanic lava pools — naturally formed basalt swimming lagoons at the island's northwestern tip, surrounded by Atlantic surf and basalt cliffs. The drive through Madeira's dramatic west coast is as rewarding as the destination.",
    body: [
      "The west Madeira coast is among the island's most dramatic: the road climbs and descends through tunnels, past paulite rock formations and terraces clinging to near-vertical slopes. Commentary connects the geology to Madeira's volcanic formation without becoming a lecture.",
      "Porto Moniz's natural pools are formed by lava flows meeting the Atlantic — at low to mid-tide they create safe swimming lagoons with extraordinary ocean backdrop. Time at the pools varies by season and conditions; your guide advises on the day.",
      "Return often includes a stop at a miradouro (viewpoint) or a brief village pause in the island's quieter northwest where tourism remains light. Best on long calls — the transfer is significant but the payoff is unlike anything closer to Funchal.",
    ],
    highlights: [
      "Porto Moniz volcanic lava pools",
      "Northwest coast sea cliff road",
      "Atlantic surf and basalt scenery",
      "Quieter Madeira away from tourist circuits",
    ],
    included: [
      "Round-trip coach transfer",
      "Licensed guide",
      "Port pickup and drop-off",
      "Return timing management",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Best on calls with 8+ usable hours — the transfer is roughly 90 minutes each way",
      "Bring swimwear if you want to swim in the pools",
      "Not suitable for short or uncertain port calls",
    ],
    faqs: [
      {
        question: "Can I swim in the Porto Moniz natural pools?",
        answer:
          "Yes in calm conditions — they are naturally formed lava lagoons. Sea state varies; your guide confirms suitability on the day.",
      },
      {
        question: "Is the west Madeira drive worthwhile if I only see the scenery?",
        answer:
          "Absolutely. The coastal road alone through Madeira's northwest is one of the island's most dramatic experiences.",
      },
    ],
    relatedExcursionSlugs: [
      "madeira-island-highlights",
      "scenic-madeira-drive",
      "east-madeira-tour",
    ],
  },
  {
    slug: "east-madeira-tour",
    title: "East Madeira Tour — Santana, Pico do Arieiro & Eastern Viewpoints",
    seoTitle: "East Madeira Shore Excursion from Funchal — Santana and Mountain Viewpoints",
    metaDescription: "East Madeira shore excursion from Funchal with Santana thatched houses, Pico do Arieiro high-altitude views and Madeira's eastern mountain landscape.",
    category: "East Madeira",
    tagline: "Thatched houses, cloud-level peaks and the island's rugged eastern character.",
    duration: "6.5–8 hours",
    pace: "Moderate",
    bestFor:
      "Passengers wanting mountain altitude and traditional Madeira culture without the long west-coast transfer",
    overview:
      "An eastern Madeira day combining Santana's famous A-frame thatched houses (palheiros), the Pico do Arieiro mountain viewpoint at nearly 1,800 metres and the terraced agricultural landscape that defines inland Madeira.",
    body: [
      "The route north through Funchal's hinterland passes through banana and sugar cane plantations before climbing into cooler, wetter mountain terrain. Santana is the island's most photogenic traditional village — its distinctive triangular thatched houses are unique to Madeira and remain inhabited working structures rather than museum pieces.",
      "Pico do Arieiro at 1,818 metres is Madeira's third highest peak and among the most accessible — a paved road reaches the summit car park. On clear days views extend across the cloud layer to neighbouring peaks and, occasionally, out to the Desertas islands. Cloud is also part of the mountain experience and does not diminish it.",
      "Return route may include Ribeiro Frio trout streams, laurissilva forest or a miradouro pause depending on timing. A full and rewarding eastern Madeira circuit for passengers with standard or long calls.",
    ],
    highlights: [
      "Santana palheiro thatched houses",
      "Pico do Arieiro near 1,800-metre summit",
      "Cloud-level mountain panoramas",
      "Laurissilva UNESCO forest zones",
    ],
    included: [
      "Round-trip coach transfer",
      "Licensed guide",
      "Port pickup and drop-off",
      "Return timing management",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Cloud at Pico do Arieiro is common — still a worthwhile experience in mist",
      "Bring a warm layer: summit temperatures can be 10–15°C cooler than Funchal",
      "Combine with a Funchal morning on long calls",
    ],
    faqs: [
      {
        question: "Is Pico do Arieiro accessible if I don't want to walk far?",
        answer:
          "Yes — the road reaches a car park near the summit with viewpoints requiring only short flat walking.",
      },
      {
        question: "What makes Santana worth visiting?",
        answer:
          "The palheiro houses are genuinely unique to Madeira and the village retains authentic local life beyond the roadside display examples.",
      },
    ],
    relatedExcursionSlugs: [
      "madeira-island-highlights",
      "levada-walk-cruise-day",
      "scenic-madeira-drive",
    ],
  },
  {
    slug: "madeira-wine-tour",
    title: "Madeira Wine Tour",
    seoTitle: "Madeira Wine Tour Shore Excursion from Funchal — Wine Lodges & Tastings",
    metaDescription: "Madeira wine shore excursion from Funchal cruise port with wine lodge visits, guided tastings, production history and the story of one of the world's…",
    category: "Madeira Wine",
    tagline: "Four centuries of fortified tradition — Funchal's wine culture from vine to glass.",
    duration: "3.5–5 hours",
    pace: "Relaxed",
    bestFor:
      "Food and drink enthusiasts, wine curious passengers and repeat visitors seeking Funchal depth over island transfers",
    overview:
      "A focused Madeira wine experience in and around Funchal: wine lodge visits, guided tastings of aged Madeira styles (Sercial, Verdelho, Bual, Malmsey), production history and the story of a wine that improved on long sea voyages and became a favourite of historic Atlantic trade routes.",
    body: [
      "Madeira wine is unlike any other fortified wine: the heating and oxidation process (estufagem) produces flavours with extraordinary longevity — bottles from the 19th century remain drinkable. The wine lodge circuit in Funchal makes this accessible without leaving the city.",
      "Selected wine lodges on the itinerary offer both production context and tasting sessions guided by staff who can explain varietal differences and serving traditions. Malmsey is the sweetest and most approachable for newcomers; Sercial the driest and most food-friendly.",
      "This excursion pairs naturally with a Funchal Old Town walk or Mercado dos Lavradores visit before or after, making efficient use of a shorter port call.",
    ],
    highlights: [
      "Funchal wine lodge visits",
      "Guided tasting of Madeira wine styles",
      "Production and ageing history",
      "Atlantic trade wine heritage context",
    ],
    included: [
      "Guide",
      "Wine lodge entry",
      "Guided tasting session",
      "Port return coordination",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Eat a light breakfast — tastings are more enjoyable with some food in you",
      "Share dietary preferences or non-drinking status at booking",
      "Madeira wine is available to purchase at most lodges as a direct souvenir",
    ],
    faqs: [
      {
        question: "Is this tour suitable if I'm not a regular wine drinker?",
        answer:
          "Yes — the historical and production context is as compelling as the tasting, and guides are experienced at pitching to non-specialists.",
      },
      {
        question: "How does this compare to visiting wine lodges independently?",
        answer:
          "A guide provides historical context and tastings with commentary; independent visits are possible at some lodges but lack the curated narrative.",
      },
    ],
    relatedExcursionSlugs: [
      "madeira-food-culture-tour",
      "funchal-monte-cable-car-tour",
      "madeira-island-highlights",
    ],
  },
  {
    slug: "levada-walk-cruise-day",
    title: "Levada Walk for Cruise Passengers",
    seoTitle: "Levada Walk Shore Excursion from Funchal — Gentle Cruise Day Walk",
    metaDescription: "Gentle levada walk shore excursion from Funchal designed for cruise passengers — flat irrigation channel paths through subtropical forest, no extreme…",
    category: "Levada Walks",
    tagline: "Madeira's unique irrigation paths — gentle walking through subtropical forest.",
    duration: "4–5.5 hours",
    pace: "Relaxed",
    bestFor:
      "Walkers of moderate fitness who want natural Madeira without extreme altitude or difficult terrain",
    overview:
      "Madeira's levadas — centuries-old irrigation channels carved into the island's mountainsides — create one of the world's most unusual walking experiences. This itinerary selects a route suitable for cruise passengers: relatively flat paths through laurissilva subtropical forest, with enough scenery and remoteness to feel genuinely off the tourist trail.",
    body: [
      "Levada paths follow the contour of the land, meaning gradient is minimal even when altitude is moderate. The selected route avoids exposed ledges and technical terrain while still delivering the forest atmosphere and channel-side walking that makes levada hiking unique to Madeira.",
      "Commentary covers the levada engineering system — built from the 15th century to distribute water from wetter northern slopes to drier southern farmland — and the UNESCO-listed laurissilva forest through which many paths run. Birdsong and fern-filtered light characterise the experience.",
      "Return transport is timed to your ship schedule. Bring walking shoes with grip; trainers are usually sufficient on this route. Not all levada walks are cruise-appropriate — this itinerary is specifically curated for port-day practicality and return confidence.",
    ],
    highlights: [
      "Flat levada irrigation channel paths",
      "UNESCO laurissilva subtropical forest",
      "Genuine mountain remoteness without extreme terrain",
      "Cruise-timed return planning",
    ],
    included: [
      "Round-trip coach transfer to trailhead",
      "Licensed walking guide",
      "Port pickup and drop-off",
      "Return timing management",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear walking shoes or trainers with grip — not sandals or flip-flops",
      "Bring water and a light waterproof — laurissilva forest can be damp",
      "Tell your operator if anyone in the group has a fear of heights before booking",
    ],
    faqs: [
      {
        question: "Are all levada walks suitable for cruise passengers?",
        answer:
          "No — some popular routes include exposed narrow ledges. This excursion is specifically chosen for cruise-day safety and practicality.",
      },
      {
        question: "Is this walk suitable for older passengers?",
        answer:
          "Generally yes if comfortable walking for 2–3 hours on uneven natural paths. Discuss specific mobility requirements with your operator.",
      },
    ],
    relatedExcursionSlugs: [
      "east-madeira-tour",
      "madeira-island-highlights",
      "scenic-madeira-drive",
    ],
  },
  {
    slug: "funchal-monte-cable-car-tour",
    title: "Funchal & Monte Cable Car Tour",
    seoTitle: "Funchal Cable Car Monte Shore Excursion — Monte Gardens & Toboggan",
    metaDescription: "Funchal and Monte cable car shore excursion from Funchal cruise port with Monte Palace Gardens, tropical botanical garden and optional Monte toboggan.",
    category: "Funchal & Monte",
    tagline: "Above Funchal — cable car, tropical gardens and the Monte toboggan slide.",
    duration: "3.5–5 hours",
    pace: "Relaxed",
    bestFor:
      "Passengers wanting a Funchal-focused day without long island transfers, including families and those with limited mobility",
    overview:
      "A Funchal-centred excursion combining the aerial cable car from Zona Velha to Monte, the extraordinary Monte Palace Tropical Garden and the famous wicker toboggan descent — a uniquely Madeiran experience rooted in the 19th century village tradition.",
    body: [
      "The Funchal–Monte cable car climbs from the Old Town to the village of Monte (550 metres elevation) in around 15 minutes with panoramic views over Funchal bay and the terraced hillsides. Monte sits above the cloud line on grey days and in clear sunshine on others — either way the ascent is impressive.",
      "Monte Palace Tropical Garden is a serious botanical collection spanning Japanese garden design, African sculpture, Madeiran endemic plants and azulejo tile panels. Budget a minimum of 45–60 minutes to appreciate the layered design; rushed visits miss its depth.",
      "The Monte toboggan — wickerwork sledges piloted downhill by white-suited carreiros — is a Madeira original: not a fairground ride but a traditional village descent method now shared with visitors. It operates independently of this tour; your guide can advise on timing and access.",
    ],
    highlights: [
      "Funchal–Monte cable car with bay views",
      "Monte Palace Tropical Garden",
      "Monte village atmosphere",
      "Optional Monte toboggan descent",
    ],
    included: [
      "Cable car ascent",
      "Monte Palace Garden entry",
      "Guide",
      "Return coordination",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes — the garden involves significant walking on slopes",
      "Monte Palace Garden is larger than it appears from the entrance",
      "The toboggan descent is a separate paid experience — confirm availability on your sail date",
    ],
    faqs: [
      {
        question: "Is Monte Palace Garden worth the entry fee?",
        answer:
          "For garden, architecture and tile enthusiasts, yes without hesitation. Visitors who want a quick photo stop may find it less compelling.",
      },
      {
        question: "Can I walk back down from Monte instead of taking the cable car?",
        answer:
          "Yes — there are paths down to Funchal, though they are steep. The toboggan is the most famous downhill option.",
      },
    ],
    relatedExcursionSlugs: [
      "madeira-wine-tour",
      "madeira-food-culture-tour",
      "madeira-island-highlights",
    ],
  },
  {
    slug: "private-madeira-tour",
    title: "Private Madeira Island Tour",
    seoTitle: "Private Madeira Shore Excursion from Funchal — Custom Island Day",
    metaDescription: "Private Madeira shore excursion from Funchal for custom pacing, mixed-mobility groups and priority destinations across the island.",
    category: "Private Tours",
    tagline: "Your island, your pace — bespoke Madeira touring without a coach group.",
    duration: "Flexible 5–8 hours",
    pace: "Relaxed",
    bestFor:
      "Families, mixed-mobility groups and travellers wanting custom sequencing across Madeira's varied landscape",
    overview:
      "Private touring from Funchal gives full control over pace, content and weather adjustments. Design your day around Valley of the Nuns, Cabo Girão, Monte, viewpoints, wine lodges or eastern villages — in whatever combination your call length supports and your priorities require.",
    body: [
      "Pre-sail conversation with your driver-guide shapes the itinerary. Route changes happen in real time based on weather, group energy and road conditions — something group coaches cannot offer.",
      "Options include mountain crater viewpoints, coastal cliff experiences, village walks, wine or food stops, botanical gardens and traditional fishing community visits. No fixed script and no shopping stops engineered into the route.",
      "Return protocols are conservative and tailored to your ship timetable. Private touring is the most flexible, most comfortable and most return-confident format for mixed groups on Madeira.",
    ],
    highlights: [
      "Custom itinerary shaped around your priorities",
      "No large coach group pacing",
      "Real-time route flexibility",
      "High return confidence",
    ],
    included: [
      "Private licensed driver-guide",
      "Dedicated private vehicle",
      "Custom pre-sail planning",
      "Port pickup and drop-off",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Share your top two or three priorities before sailing",
      "Ideal for passengers combining varied mobility levels within a group",
      "Set non-negotiable stops early so the guide can protect them",
    ],
    faqs: [
      {
        question: "Can a private tour reach both Valley of the Nuns and Porto Moniz in one day?",
        answer:
          "These are opposite ends of the island — only possible on very long calls. A guide can advise the best achievable combination for your specific port window.",
      },
      {
        question: "How do I enquire about private tours?",
        answer:
          "Use the enquiry form on this page. Private tours are arranged individually, not booked through a fixed booking system.",
      },
    ],
    relatedExcursionSlugs: [
      "madeira-island-highlights",
      "west-madeira-tour",
      "ultimate-madeira-discovery",
    ],
    channel: "enquiry",
  },
  {
    slug: "madeira-food-culture-tour",
    title: "Madeira Food & Culture Tour",
    seoTitle: "Madeira Food and Culture Shore Excursion from Funchal",
    metaDescription: "Madeira food and culture shore excursion from Funchal covering Mercado dos Lavradores, traditional dishes, poncha tasting, Old Town culture and local…",
    category: "Food & Culture",
    tagline: "Espada fish, poncha, passion fruit and Funchal market — real Madeiran food culture.",
    duration: "3.5–5 hours",
    pace: "Relaxed",
    bestFor:
      "Food-focused travellers, repeat cruisers wanting Funchal depth, and passengers who prefer city experience over island coach transfers",
    overview:
      "A curated Funchal food and culture route: Mercado dos Lavradores (the famous flower and fish market), traditional dish context, poncha rum tasting, Zona Velha Old Town walk and the street-art-lined lanes that make Funchal's cultural character far richer than most visitors expect.",
    body: [
      "Mercado dos Lavradores is one of the Atlantic islands' great market experiences: exotic fruit stalls, scabbardfish (espada) and tuna counters, flower vendors and a vibrant social atmosphere that reflects Funchal's identity as a real working city rather than a resort.",
      "Traditional dishes covered in context include espada com banana (scabbardfish with banana, uniquely Madeiran), bolo do caco bread, grilled lapas limpets and açorda soup. Poncha — distilled sugarcane spirit blended with honey, lemon and passion fruit — is Madeira's aperitif tradition.",
      "The Zona Velha Old Town walk includes the famous Painted Doors art project and the narrow lanes behind Santa Maria Church, where Funchal's oldest neighbourhood is increasingly vibrant with independent cafés and galleries alongside traditional tascas.",
    ],
    highlights: [
      "Mercado dos Lavradores flower and fish market",
      "Madeiran food traditions and dishes in context",
      "Poncha tasting",
      "Zona Velha Old Town walk and Painted Doors",
    ],
    included: [
      "Guide",
      "Selected tastings",
      "Market orientation",
      "Port return coordination",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Eat a light breakfast — tastings work better with appetite",
      "Market atmosphere is best before noon",
      "Combine with cable car tour on a longer call",
    ],
    faqs: [
      {
        question: "Is this tour suitable for non-drinkers?",
        answer:
          "Yes — food and culture content is the core. Poncha tasting is optional and alternatives are available.",
      },
      {
        question: "Does this tour require much walking?",
        answer:
          "Moderate walking on relatively flat Funchal streets. Old Town lanes have some uneven cobbles but nothing challenging.",
      },
    ],
    relatedExcursionSlugs: [
      "madeira-wine-tour",
      "funchal-monte-cable-car-tour",
      "madeira-island-highlights",
    ],
  },
  {
    slug: "scenic-madeira-drive",
    title: "Scenic Madeira Drive & Viewpoints",
    seoTitle: "Scenic Madeira Drive Shore Excursion from Funchal — Viewpoints & Villages",
    metaDescription: "Scenic Madeira drive shore excursion from Funchal covering mountain viewpoints, traditional villages and the island's dramatic terraced landscapes.",
    category: "Scenic Drives",
    tagline: "Madeira from the road — viewpoints, villages and landscape you can't reach on foot.",
    duration: "5.5–7 hours",
    pace: "Moderate",
    bestFor:
      "Passengers wanting broad Madeira landscape coverage with lower walking demand than dedicated hiking or mountain excursions",
    overview:
      "A vehicle-led Madeira circuit hitting the island's strongest viewpoints, traditional villages and varied microclimates — from coastal Funchal to mountain plateau, forest and terraced farmland — with comfortable pacing and multiple photography stops.",
    body: [
      "Madeira's road network, rebuilt and extended over recent decades, now gives access to viewpoints that were previously reachable only by levada or mountain path. This itinerary uses those routes to deliver highland panoramas, crater views and coastal cliff perspectives without demanding significant walking ability.",
      "Typical stops include Eira do Serrado (valley viewpoint above Curral das Freiras), miradouros along the Paul da Serra plateau and scenic coastal road sections above Câmara de Lobos. Content is adjusted by season, weather and multi-ship day pressures at popular viewpoints.",
      "A practical option for first-time visitors who want island breadth without a single demanding excursion, and an excellent secondary choice for repeat passengers who have already done the island highlights tour.",
    ],
    highlights: [
      "Multiple panoramic miradouro viewpoints",
      "Paul da Serra plateau scenery",
      "Traditional village stops",
      "Varied Madeira microclimates in one drive",
    ],
    included: [
      "Round-trip coach transfer",
      "Licensed guide",
      "Port pickup and drop-off",
      "Return timing management",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Bring a camera — viewpoints favour early morning light",
      "Check weather before committing to highland routes",
      "This tour is flexible — routes can adapt to cloud conditions",
    ],
    faqs: [
      {
        question: "How does this differ from the island highlights tour?",
        answer:
          "The scenic drive prioritises viewpoints and breadth over specific anchors like Valley of the Nuns and Cabo Girão. Both tours are strong; highlights is more curated, scenic drive more flexible.",
      },
      {
        question: "Is this suitable for passengers who struggle with long walks?",
        answer:
          "Yes — most stops involve short walks from the vehicle. Walking demand is significantly lower than levada or mountain excursions.",
      },
    ],
    relatedExcursionSlugs: [
      "madeira-island-highlights",
      "valley-of-the-nuns-tour",
      "east-madeira-tour",
    ],
  },
  {
    slug: "ultimate-madeira-discovery",
    title: "The Ultimate Madeira Discovery",
    seoTitle: "The Ultimate Madeira Discovery — Signature Exclusive Private Experience",
    metaDescription: "A signature private Madeira experience in development — small-group, private driver, Valley of the Nuns, viewpoints, villages, tastings and no large…",
    category: "Private Tours",
    tagline: "In development — a signature private Madeira day designed around four guests and nothing else.",
    duration: "Full day",
    pace: "Relaxed",
    bestFor: "Small groups of up to four guests seeking an unhurried, deeply personal Madeira experience",
    overview:
      "The Ultimate Madeira Discovery is a signature exclusive experience currently in development with a Madeiran operator. It is not yet available to book. When launched, it will be designed for a maximum of four guests in a single private vehicle, with no fixed coach group, no shopping stops and no rush.",
    body: [
      "This experience is being developed to offer something genuinely different from group shore excursions: an unhurried private day shaped entirely around the guests, starting and ending at the Funchal cruise terminal.",
      "The planned design includes Valley of the Nuns at unhurried pace, highland viewpoints with context rather than commentary scripts, a village stop for local food or wine, flexible pause decisions made on the day and WhatsApp support for last-minute adjustments. Details are subject to change as the product develops.",
      "We will update this page when commercial arrangements are in place. Until then, register interest via the enquiry form and we will contact you with details as they become available.",
    ],
    highlights: [
      "Maximum four guests — designed for intimacy, not group pacing",
      "Private driver-guide throughout",
      "Valley of the Nuns, viewpoints and village stops (planned)",
      "Local food or wine tasting element (planned)",
      "Flexible stops — no set script",
      "WhatsApp contact support on the day",
      "No large coach, no shopping stops",
    ],
    included: [
      "Private driver-guide (planned)",
      "All transport in private vehicle (planned)",
      "Tasting element (planned)",
      "Full port-to-port logistics (planned)",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "This experience is not yet available to book — register interest only",
      "Details including route, duration and pricing will be confirmed at launch",
      "Designed for guests who want Madeira on their own terms, not a group schedule",
    ],
    faqs: [
      {
        question: "When will The Ultimate Madeira Discovery be available?",
        answer:
          "We are currently working with a Madeiran operator to finalise the product. Register interest and we will update you when it launches.",
      },
      {
        question: "What will the price be?",
        answer:
          "Pricing is not confirmed. We will publish honest details when commercial arrangements are in place.",
      },
      {
        question: "Can I book this now?",
        answer:
          "No — this experience is not currently bookable. The page exists to gather interest and set expectations honestly.",
      },
    ],
    relatedExcursionSlugs: [
      "private-madeira-tour",
      "madeira-island-highlights",
      "valley-of-the-nuns-tour",
    ],
    featured: true,
    comingSoon: true,
    exclusive: true,
    wowCollection: false,
    channel: "exclusive",
    capacity: {
      maxGuests: 4,
      vehiclesAvailable: 1,
      status: "coming-soon",
    },
  },
];

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((p) => p.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((p) => p.slug);
}

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((p) => p.featured && !p.comingSoon);
}
