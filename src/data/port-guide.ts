import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Funchal Cruise Port Guide",
  subtitle:
    "Terminal location, Old Town access, cable car logistics, island excursion staging, shopping, food and return-to-ship strategy for Funchal cruise passengers.",
  terminals: [
    {
      name: "Funchal Cruise Terminal (Porto do Funchal)",
      quay: "Main cruise pier on the Funchal waterfront, east of the city centre",
      usedBy: "Most mainstream and premium cruise lines calling Madeira",
      cityAccess:
        "15–20 min walk to Old Town and Mercado dos Lavradores; 15–20 min walk to cable car base; 5 min taxi to Avenida Arriaga wine lodges",
    },
    {
      name: "Tender Pier (when ships anchor offshore)",
      quay: "Smaller pier for tender operations when the main berth is full or ships are too large to berth",
      usedBy: "Larger vessels during peak season; some cruise lines on smaller calls",
      cityAccess: "Tender boats drop to the main pier area — then same walking distances as above",
    },
    {
      name: "Shore excursion staging",
      quay: "Designated pickup points near cruise terminal",
      usedBy: "Island tour and city shore excursion operators",
      cityAccess:
        "Direct boarding with ship-time aligned departures to Valley of the Nuns, Cabo Girão, Porto Moniz and city routes",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Terminal location and first steps",
      paragraphs: [
        "Funchal's cruise terminal sits right on the city waterfront — one of the most city-central cruise terminal positions in the Atlantic. Unlike ports that dock in industrial areas requiring transfers to reach culture, Funchal's pier puts passengers directly adjacent to the city they have come to visit.",
        "On disembarkation, orient yourself with the sea behind you: the Old Town (Zona Velha) is to the left (east); the city centre and Avenida Arriaga are ahead; the ferry terminal and upper city districts are to the right. A short walk or taxi takes you directly to the day's primary destination.",
        "Collect your ship card and note the all-aboard time before leaving the terminal. Write it on your phone lock screen. Shore excursion coaches depart from near the terminal — confirm the meeting point if you have pre-booked.",
      ],
    },
    {
      heading: "Walking from the cruise terminal",
      paragraphs: [
        "Old Town (Zona Velha): 15 minutes east along the seafront promenade. The waterfront Avenida do Mar route is flat and clear. Turn left (inland) at the end of the marina zone to reach the painted-door lanes behind Santa Maria Church.",
        "Mercado dos Lavradores: 20 minutes from the terminal on the same eastward route, continuing past the Old Town to the covered market hall. The market is busiest and most photogenic before 11am.",
        "Cable car base station (Teleférico do Funchal): located in the Old Town near Babosas — approximately 20 minutes' walk from the cruise terminal via the Old Town route.",
        "Avenida Arriaga / wine lodges: 15 minutes' walk northwest from the terminal along the main seafront boulevard. Blandy's Wine Lodge, banks and city-centre amenities are along this route.",
      ],
    },
    {
      heading: "Getting around Funchal by taxi",
      paragraphs: [
        "Taxis wait at the cruise terminal and are metered. Short city rides cost EUR 5–12 depending on destination and traffic. Taxi to Monte village (after cable car) costs EUR 8–15. Pre-agreed fares for longer trips (to the Botanical Garden, Câmara de Lobos or beyond) can be negotiated with the driver.",
        "Funchal taxi drivers generally understand basic English for destination navigation. Having the destination name written or saved on your phone helps with pronunciation of less-familiar locations.",
        "On multi-ship days, taxi queues at the terminal can be significant at mid-morning. Walking the 15–20 minutes to the Old Town then hailing a taxi avoids terminal queue time.",
      ],
    },
    {
      heading: "Public transport",
      paragraphs: [
        "Horários do Funchal city buses serve many urban districts. Line 2 and others pass near the cruise terminal area. Fares are typically EUR 1.50–3 depending on zone. City buses are practical for reaching districts within Funchal but not for mountain island destinations.",
        "The cable car (Teleférico) from Old Town to Monte costs approximately EUR 12–15 one way, EUR 15–20 return (check current prices). Operating hours are usually 9am–5:45pm daily. Queue times on multi-ship days can reach 30–45 minutes — arrive early or accept the wait.",
      ],
    },
    {
      heading: "Funchal city highlights",
      paragraphs: [
        "Old Town (Zona Velha): the oldest part of Funchal, with painted-door art project on Rua de Santa Maria, Santa Maria Church, narrow cobbled lanes and a strong concentration of tascas (traditional restaurants) and cafés.",
        "Mercado dos Lavradores: the Workers' Market — a covered hall with flower vendors, exotic fruit stalls, fish counters and local produce. One of the Atlantic islands' great market experiences. Arrive before 11am.",
        "Sé Cathedral (Funchal Cathedral): a 15th-century Manueline cathedral on the main square — one of the oldest in the Portuguese Atlantic. The azulejo tile ceiling inside is extraordinary and worth 20 minutes.",
        "Avenida Arriaga / Blandy's Wine Lodge: the main city boulevard with Blandy's historic wine lodge offering tours and tastings. One of Europe's most accessible fortified wine experiences.",
        "Monte Palace Tropical Garden: reached by cable car — a serious botanical collection with Japanese garden, cycads, azulejo tile panels and Madeiran endemic plants. Allow 60–90 minutes minimum.",
      ],
    },
    {
      heading: "Shopping and markets",
      paragraphs: [
        "Funchal's main shopping areas are Rua Dr. Fernão de Ornelas (near the market) for local food and wine, Rua do Aljube for textiles and embroidery, and the Forum Madeira shopping centre for international brands.",
        "Madeiran embroidery (bordados), Madeiran wine and wickerwork are the most distinctively local purchases. Avoid mass-produced items in tourist stalls near the terminal and prioritise specialist shops in the city centre.",
        "Poncha, Madeira wine and local rum are allowed in cabin luggage on most cruise lines up to the standard liquid limits — check your cruise line's policy before purchasing at the market.",
      ],
    },
    {
      heading: "Island excursion transfer reality",
      paragraphs: [
        "The Valley of the Nuns (Curral das Freiras) is 15 km from Funchal — roughly 30–40 minutes by coach on mountain roads. Include viewpoint time and return journey in your planning.",
        "Cabo Girão is 20 km west — around 20–25 minutes by coach, usually combined with Câmara de Lobos fishing village. Both fit in a morning half-day.",
        "Porto Moniz natural pools are 90 km northwest — roughly 90 minutes each way by coach. Only attempt on calls with 8+ usable hours. The drive itself is rewarding but the total time investment is significant.",
        "East Madeira (Santana village + Pico do Arieiro) is 50–55 km from Funchal — 60–75 minutes each way. Standard call length or longer required for a comfortable east Madeira circuit.",
        "Do not try to combine a long island excursion with extended city exploration on the same day unless your call is 9+ hours. Choose one primary anchor.",
      ],
    },
    {
      heading: "Return to ship strategy",
      paragraphs: [
        "Target return to the terminal area 75–90 minutes before all-aboard. This buffer absorbs coach delays, traffic on mountain roads and any unexpected situations — all of which are rare but possible.",
        "Independent city day passengers can allow a 60-minute buffer if all stops are within Funchal, but 75 minutes is safer. The cable car from Monte to the Old Town takes 15 minutes; from the Old Town to the cruise terminal is a further 20-minute walk or 5-minute taxi.",
        "On island excursions, your guide manages return timing — confirm the planned return time before departure and ensure it includes the buffer. Well-run excursions build conservative margins by default.",
        "If you are independent and running late, Funchal taxis from any city point to the terminal take 5–15 minutes depending on traffic. Keep EUR 10–15 in cash for a taxi fallback.",
      ],
    },
    {
      heading: "Accessibility",
      paragraphs: [
        "Funchal's waterfront and Old Town have significant cobbled sections and slopes. The market and seafront promenade are generally accessible. The cable car and Monte Palace Garden have slopes — confirm accessibility requirements with operators.",
        "The cruise terminal has lift access and standard accessibility provision. Shore excursion coaches vary — confirm accessibility requirements when booking. Private tours offer the most flexibility for passengers with specific mobility needs.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "How far is the Old Town from the Funchal cruise terminal?",
      answer:
        "Around 15 minutes on foot along the seafront promenade — flat, clear and pleasant.",
    },
    {
      question: "Can I walk to the cable car from the cruise ship?",
      answer:
        "Yes — around 20 minutes on foot through the Old Town to the Babosas cable car base station.",
    },
    {
      question: "How long should I allow returning from the Valley of the Nuns?",
      answer:
        "Allow 40–50 minutes coach travel plus a 75–90 minute all-aboard buffer — so plan to leave the valley by at least 2 hours before all-aboard.",
    },
    {
      question: "Is Funchal suitable for independent port days?",
      answer:
        "Very — the city is walkable, well-signed and independently accessible. Island highlights require organised excursions.",
    },
    {
      question: "Are there ATMs and currency exchange near the cruise terminal?",
      answer:
        "Yes — several ATMs and a bureau de change are within 10 minutes' walk on Avenida Arriaga and near the market.",
    },
    {
      question: "What is the best restaurant area in Funchal for cruise passengers?",
      answer:
        "The Old Town (Zona Velha) has the best concentration of tascas with genuine Madeiran cooking. Avenida do Mar restaurants near the terminal are convenient but more tourist-facing.",
    },
  ] as FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
