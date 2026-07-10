#!/usr/bin/env node
/**
 * Download Madeira / Funchal imagery from Wikimedia Commons (CC-licensed).
 * Run: node scripts/download-funchal-images.mjs
 * Force refresh hero assets: node scripts/download-funchal-images.mjs --force
 */
import { writeFileSync, mkdirSync, unlinkSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const UA = "FunchalShoreExcursions/1.0 (https://funchalshoreexcursions.com; image setup)";
const DELAY_MS = 2000;
const FORCE = process.argv.includes("--force");
const FORCE_ONLY = new Set(
  process.argv
    .filter((a) => a.startsWith("--only="))
    .flatMap((a) => a.replace("--only=", "").split(",")),
);

/** Verified Commons titles — Madeira/Funchal specific. */
const IMAGE_FILES = {
  "hero-home.jpg": [
    "File:Pico do Arieiro.jpg",
    "File:Pico Arieiro, Madeira.jpg",
    "File:Pico do Arieiro acima das nuvens.jpg",
    "File:Madeira - Pico do Arieiro (7352879758).jpg",
    "File:Pico Ruivo Madeira.jpg",
    "File:Pico Ruivo desde Arieiro.jpg",
    "File:Madeira mountains panorama.jpg",
  ],
  "og-default.jpg": [
    "File:Pico do Arieiro.jpg",
    "File:Madeira - Pico do Arieiro (7352879758).jpg",
    "File:Madeira island landscape.jpg",
    "File:Pico Arieiro, Madeira.jpg",
  ],
  "cruise-port.jpg": [
    "File:Porto do Funchal (3).jpg",
    "File:Funchal harbour, Madeira.jpg",
    "File:Porto do Funchal.jpg",
    "File:Funchal port (Madeira).jpg",
    "File:Funchal harbour.jpg",
    "File:Madeira - Funchal (3766052709).jpg",
    "File:Funchal, Madeira (39823584665).jpg",
  ],
  "old-town.jpg": [
    "File:Funchal old town - painted doors.jpg",
    "File:Rua de Santa Maria, Funchal.jpg",
    "File:Se Cathedral Funchal Madeira.jpg",
    "File:Funchal Cathedral - Sé - Madeira - panoramio.jpg",
    "File:Funchal Sé Cathedral.jpg",
    "File:Madeira - Funchal Cathedral (3766072901).jpg",
    "File:Zona Velha Funchal.jpg",
  ],
  "mountains.jpg": [
    "File:Pico do Arieiro.jpg",
    "File:Pico do Arieiro acima das nuvens.jpg",
    "File:Madeira - Pico do Arieiro (7352879758).jpg",
    "File:Pico Arieiro, Madeira.jpg",
    "File:Pico Ruivo Madeira.jpg",
  ],
  "valley-nuns.jpg": [
    "File:Curral das Freiras, Madeira.jpg",
    "File:Curral das Freiras.jpg",
    "File:Curral das Freiras - panoramio.jpg",
    "File:Valley of the Nuns, Madeira.jpg",
    "File:Curral das Freiras, Madeira (48521091826).jpg",
    "File:Curral das Freiras panorama.jpg",
  ],
  "cabo-girao.jpg": [
    "File:Cabo Girão, Madeira.jpg",
    "File:Cabo Girão - panoramio.jpg",
    "File:Cabo Girao cliff Madeira.jpg",
    "File:Cabo Girão cliff.jpg",
    "File:Cabo Girão 2019.jpg",
    "File:Cabo Girao, Madeira (32413047867).jpg",
  ],
  "porto-moniz.jpg": [
    "File:Porto Moniz natural swimming pools, Madeira.jpg",
    "File:Porto Moniz, Madeira.jpg",
    "File:Piscinas naturais de Porto Moniz.jpg",
    "File:Porto Moniz - panoramio.jpg",
    "File:Porto Moniz natural pools.jpg",
    "File:Piscinas Naturais Porto Moniz Madeira.jpg",
  ],
  "santana.jpg": [
    "File:Santana Madeira.jpg",
    "File:Casas de colmo, Santana, Madeira.jpg",
    "File:Santana houses Madeira.jpg",
    "File:Palheiros de Santana, Madeira.jpg",
    "File:Traditional houses, Santana, Madeira.jpg",
    "File:Santana, Madeira - panoramio.jpg",
  ],
  "levada.jpg": [
    "File:Levada das 25 Fontes, Madeira.jpg",
    "File:Levada walk, Madeira.jpg",
    "File:Levada do Caldeirão Verde, Madeira.jpg",
    "File:Levada Madeira.jpg",
    "File:Laurisilva Madeira.jpg",
    "File:Levada das 25 Fontes.jpg",
    "File:Madeira laurisilva forest.jpg",
  ],
  "gardens.jpg": [
    "File:Monte Palace Tropical Garden, Madeira.jpg",
    "File:Jardim Botânico da Madeira.jpg",
    "File:Monte Palace, Madeira.jpg",
    "File:Jardim tropical de Monte, Madeira.jpg",
    "File:Monte Palace Gardens Madeira.jpg",
    "File:Botanical Garden Madeira Funchal.jpg",
  ],
  "cable-car.jpg": [
    "File:Teleférico do Funchal.jpg",
    "File:Funchal cable car, Madeira.jpg",
    "File:Teleférico Funchal Madeira.jpg",
    "File:Cable car Funchal Madeira.jpg",
    "File:Funchal Teleférico.jpg",
    "File:Gondola Funchal.jpg",
  ],
  "wine.jpg": [
    "File:Madeira wine.jpg",
    "File:Madeira wine bottles.jpg",
    "File:Blandy's wine lodge, Madeira.jpg",
    "File:Madeira Wine Lodge.jpg",
    "File:Vinho Madeira.jpg",
    "File:Blandy's Madeira wine.jpg",
    "File:Madeira wine tasting.jpg",
  ],
  "food.jpg": [
    "File:Espada com banana, Madeira.jpg",
    "File:Bolo do caco Madeira.jpg",
    "File:Espetada Madeira.jpg",
    "File:Madeira food espada.jpg",
    "File:Poncha Madeira.jpg",
    "File:Bolo do caco.jpg",
  ],
  "coast.jpg": [
    "File:Câmara de Lobos, Madeira.jpg",
    "File:Camara de Lobos, Madeira.jpg",
    "File:Camera de Lobos Madeira.jpg",
    "File:Câmara de Lobos - panoramio.jpg",
    "File:Madeira coastal road.jpg",
    "File:Câmara de Lobos harbour.jpg",
    "File:Camara de Lobos harbour, Madeira.jpg",
  ],
  "island.jpg": [
    "File:Madeira island landscape.jpg",
    "File:Madeira green landscape.jpg",
    "File:Madeira aerial.jpg",
    "File:Ilha da Madeira.jpg",
    "File:Madeira - panorama.jpg",
    "File:Madeira landscape (8440617710).jpg",
  ],
  "village.jpg": [
    "File:Câmara de Lobos, Madeira.jpg",
    "File:Paul do Mar, Madeira.jpg",
    "File:Ribeira Brava, Madeira.jpg",
    "File:Ponta do Sol, Madeira.jpg",
    "File:Madeira village coast.jpg",
    "File:Calheta, Madeira.jpg",
  ],
  "highlights.jpg": [
    "File:Pico do Arieiro acima das nuvens.jpg",
    "File:Madeira - Pico do Arieiro (7352879758).jpg",
    "File:Pico do Arieiro.jpg",
    "File:Madeira island landscape.jpg",
    "File:Curral das Freiras, Madeira.jpg",
  ],
  "photography.jpg": [
    "File:Pico do Arieiro.jpg",
    "File:Cabo Girão, Madeira.jpg",
    "File:Curral das Freiras - panoramio.jpg",
    "File:Pico do Arieiro acima das nuvens.jpg",
    "File:Madeira mountain viewpoint.jpg",
  ],
  "compare.jpg": [
    "File:Madeira island landscape.jpg",
    "File:Pico do Arieiro.jpg",
    "File:Curral das Freiras, Madeira.jpg",
    "File:Madeira - panorama.jpg",
  ],
  "market.jpg": [
    "File:Mercado dos Lavradores, Funchal.jpg",
    "File:Mercado dos Lavradores Funchal.jpg",
    "File:Mercado dos Lavradores.jpg",
    "File:Lavradores Market Funchal.jpg",
    "File:Mercado dos Lavradores - panoramio.jpg",
    "File:Funchal market.jpg",
  ],
  "private.jpg": [
    "File:Madeira island landscape.jpg",
    "File:Pico do Arieiro acima das nuvens.jpg",
    "File:Madeira green landscape.jpg",
    "File:Madeira - panorama.jpg",
    "File:Ilha da Madeira.jpg",
  ],
};

const SEARCH_FALLBACKS = {
  "hero-home.jpg": "Pico Arieiro Madeira mountains peaks",
  "og-default.jpg": "Pico Arieiro Madeira scenic",
  "cruise-port.jpg": "Funchal harbour cruise port Madeira",
  "old-town.jpg": "Funchal old town Zona Velha cathedral",
  "mountains.jpg": "Pico Arieiro Madeira high peaks",
  "valley-nuns.jpg": "Curral das Freiras Valley Nuns Madeira",
  "cabo-girao.jpg": "Cabo Girão cliff Madeira",
  "porto-moniz.jpg": "Porto Moniz natural pools Madeira",
  "santana.jpg": "Santana traditional houses Madeira",
  "levada.jpg": "Levada walk Madeira laurisilva",
  "gardens.jpg": "Monte Palace botanical garden Funchal",
  "cable-car.jpg": "Funchal cable car teleferico Madeira",
  "wine.jpg": "Madeira wine lodge bottles",
  "food.jpg": "Madeira food espada bolo caco",
  "coast.jpg": "Câmara de Lobos Madeira coast",
  "island.jpg": "Madeira island landscape green",
  "village.jpg": "Madeira coastal village fishing",
  "highlights.jpg": "Pico Arieiro Madeira panorama",
  "photography.jpg": "Madeira dramatic viewpoint cliff",
  "compare.jpg": "Madeira scenic landscape",
  "market.jpg": "Mercado dos Lavradores Funchal market",
  "private.jpg": "Madeira island scenic lush",
};

const ALWAYS_REFRESH = new Set([
  "hero-home.jpg",
  "og-default.jpg",
  "island.jpg",
  "mountains.jpg",
  "highlights.jpg",
]);

mkdirSync(OUT, { recursive: true });

const sources = { platform: "Wikimedia Commons", license: "Various CC licenses — see source URLs", images: [] };

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchCommonsUrl(fileName) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileName)}&prop=imageinfo&iiprop=url|extmetadata&format=json`;
  const res = await fetch(apiUrl, { headers: { "User-Agent": UA } });
  const text = await res.text();
  if (text.startsWith("You are making")) throw new Error("rate limited");
  const data = JSON.parse(text);
  const pages = data?.query?.pages;
  if (!pages) return null;
  const page = Object.values(pages)[0];
  if (page?.missing !== undefined) return null;
  const info = page?.imageinfo?.[0];
  if (!info?.url) return null;
  return {
    url: info.url,
    commons: fileName,
    license: info.extmetadata?.LicenseShortName?.value ?? "See Commons",
  };
}

async function searchCommons(query) {
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=8&format=json`;
  const res = await fetch(apiUrl, { headers: { "User-Agent": UA } });
  const text = await res.text();
  if (text.startsWith("You are making")) return [];
  const data = JSON.parse(text);
  return (data.query?.search ?? []).map((s) => s.title);
}

function shouldDownload(outFile) {
  if (FORCE_ONLY.size > 0) return FORCE_ONLY.has(outFile);
  if (FORCE || ALWAYS_REFRESH.has(outFile)) return true;
  const outPath = join(OUT, outFile);
  const stat = statSync(outPath, { throwIfNoEntry: false });
  return !stat || stat.size < 5000;
}

async function downloadImage(outFile, candidates) {
  if (!shouldDownload(outFile)) {
    console.log(`skip (exists): ${outFile}`);
    return true;
  }

  const outPath = join(OUT, outFile);
  try {
    unlinkSync(outPath);
  } catch {
    /* fresh download */
  }

  const tries = [...candidates];
  if (SEARCH_FALLBACKS[outFile]) {
    await sleep(DELAY_MS);
    const found = await searchCommons(SEARCH_FALLBACKS[outFile]);
    tries.push(...found.filter((t) => !t.endsWith(".pdf") && !t.endsWith(".svg")));
  }

  for (const candidate of tries) {
    try {
      await sleep(DELAY_MS);
      const meta = await fetchCommonsUrl(candidate);
      if (!meta) continue;
      const res = await fetch(meta.url, { headers: { "User-Agent": UA } });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 50000) continue;
      writeFileSync(outPath, buf);
      const wikiTitle = candidate.replace(/^File:/, "");
      sources.images.push({
        file: outFile,
        commons: candidate,
        url: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(wikiTitle).replace(/%20/g, "_")}`,
        license: meta.license,
      });
      console.log(`✓ ${outFile} ← ${candidate} (${Math.round(buf.length / 1024)} KB)`);
      return true;
    } catch (e) {
      console.warn(`  failed ${candidate}:`, e.message);
      if (e.message === "rate limited") await sleep(10000);
    }
  }
  console.warn(`✗ ${outFile} — no candidate worked`);
  return false;
}

async function main() {
  let ok = 0;
  const failed = [];
  for (const [outFile, candidates] of Object.entries(IMAGE_FILES)) {
    const result = await downloadImage(outFile, candidates);
    if (result) ok++;
    else failed.push(outFile);
  }

  writeFileSync(join(OUT, "sources.json"), JSON.stringify(sources, null, 2));

  console.log(`\n✓ Downloaded ${ok}/${Object.keys(IMAGE_FILES).length} images.`);
  if (failed.length > 0) {
    console.log(`✗ Failed: ${failed.join(", ")}`);
  }
  console.log("Attribution → public/images/sources.json");
}

main();
