/**
 * Copies brand images from Downloads and game images from img/geme into public/.
 * Run: node scripts/sync-assets.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const bkSourceDir = "C:\\Users\\Dima\\Downloads\\img\\bk";
const gemeDir = path.join(root, "img", "geme");

const publicBk = path.join(root, "public", "bk");
const publicGames = path.join(root, "public", "games");

/** [source filename in bk folder, dest filename in public/bk] */
const bkFiles = [
  ["bet dahab casino.webp", "bet-dahab.webp"],
  ["888-casino.jpg", "888-casino.jpg"],
  ["mostbet.png", "mostbet.png"],
  ["spin casino.webp", "spin-casino.webp"],
  ["betobet.png", "betobet.png"],
  ["ruby fortune.jpg", "ruby-fortune.jpg"],
  ["jackpot city.png", "jackpot-city.png"],
  ["yyy-casino.jpg", "yyy-casino.jpg"],
  ["raging bull casino.jpg", "raging-bull.jpg"],
  ["slots-of-vegas.jpg", "slots-of-vegas.jpg"],
  ["ignition casino.png", "ignition-casino.png"],
];

/** game id -> preferred dest extension kept from source */
const gameIdOrder = [
  "american-roulette",
  "european-roulette",
  "blackjack-classic",
  "video-poker",
  "book-of-dead",
  "starburst",
  "mega-moolah",
  "gonzos-quest",
  "lightning-roulette",
  "live-blackjack",
];

function copyIfExists(from, to) {
  if (!fs.existsSync(from)) {
    console.warn("[sync-assets] missing:", from);
    return false;
  }
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
  console.log("[sync-assets] ok:", path.basename(to));
  return true;
}

fs.mkdirSync(publicBk, { recursive: true });
fs.mkdirSync(publicGames, { recursive: true });

for (const [srcName, destName] of bkFiles) {
  copyIfExists(path.join(bkSourceDir, srcName), path.join(publicBk, destName));
}

function normalizeBase(name) {
  return name
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/** Try to match geme files to game ids */
if (fs.existsSync(gemeDir)) {
  const files = fs.readdirSync(gemeDir).filter((f) => !f.startsWith("."));
  const byNorm = new Map();
  for (const f of files) {
    byNorm.set(normalizeBase(f), f);
  }

  for (const id of gameIdOrder) {
    const candidates = [
      `${id}.webp`,
      `${id}.jpg`,
      `${id}.jpeg`,
      `${id}.png`,
      `${id.replace(/-/g, "")}.webp`,
    ];
    let found = null;
    for (const c of candidates) {
      const p = path.join(gemeDir, c);
      if (fs.existsSync(p)) {
        found = p;
        break;
      }
    }
    if (!found && byNorm.has(id)) {
      found = path.join(gemeDir, byNorm.get(id));
    }
    if (!found) {
      const loose = files.find((f) => normalizeBase(f) === id || normalizeBase(f).includes(id.replace(/-/g, "")));
      if (loose) found = path.join(gemeDir, loose);
    }
    if (found) {
      const ext = path.extname(found);
      copyIfExists(found, path.join(publicGames, `${id}${ext}`));
    } else {
      console.warn("[sync-assets] no image for game id:", id);
    }
  }
} else {
  console.warn("[sync-assets] img/geme not found — skip games copy");
}
