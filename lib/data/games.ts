import { GameItem } from "../types/casino";

export const gamesList: GameItem[] = [
  {
    id: "american-roulette",
    name: "American Roulette",
    nameAr: "الروليت الأمريكي",
    image: "/games/american-roulette.png",
    provider: "Evolution Gaming",
    category: "roulette",
    // Roulette wheel is usually centered — show it fully
    previewCfg: {
      fit: "cover",
      objectPosition: "center 40%",
      bg: "#0a1628",
    },
  },
  {
    id: "european-roulette",
    name: "European Roulette",
    nameAr: "الروليت الأوروبي",
    image: "/games/european-roulette.webp",
    provider: "NetEnt",
    category: "roulette",
    previewCfg: {
      fit: "cover",
      objectPosition: "center 40%",
      bg: "#0a1628",
    },
  },
  {
    id: "blackjack-classic",
    name: "Blackjack Classic",
    nameAr: "البلاك جاك الكلاسيكي",
    image: "/games/blackjack-classic.png",
    provider: "Microgaming",
    category: "blackjack",
    previewCfg: {
      fit: "cover",
      objectPosition: "center 35%",
      bg: "#0d1f0d",
    },
  },
  {
    id: "video-poker",
    name: "Video Poker",
    nameAr: "فيديو بوكر",
    image: "/games/video-poker.png",
    provider: "IGT",
    category: "poker",
    // UI-heavy screenshot — contain keeps it readable, dark bg matches the game
    previewCfg: {
      fit: "contain",
      objectPosition: "center center",
      bg: "#151020",
      overlay: "none",
    },
  },
  {
    id: "book-of-dead",
    name: "Book of Dead",
    nameAr: "كتاب الموتى",
    image: "/games/book-of-dead.png",
    provider: "Play'n GO",
    category: "slots",
    // Desert art — show upper/mid section where the character is
    previewCfg: {
      fit: "cover",
      objectPosition: "center 25%",
      bg: "#2a1a08",
    },
  },
  {
    id: "starburst",
    name: "Starburst",
    nameAr: "ستاربيرست",
    image: "/games/starburst.jpg",
    provider: "NetEnt",
    category: "slots",
    // Space gem art — center crop works well
    previewCfg: {
      fit: "cover",
      objectPosition: "center 35%",
      bg: "#0d0628",
    },
  },
  {
    id: "mega-moolah",
    name: "Mega Moolah",
    nameAr: "ميجا مولاه",
    image: "/games/mega-moolah.jpg",
    provider: "Microgaming",
    category: "slots",
    // Lion face / safari art tends to be in upper third
    previewCfg: {
      fit: "cover",
      objectPosition: "center 20%",
      bg: "#1a2808",
    },
  },
  {
    id: "gonzos-quest",
    name: "Gonzo's Quest",
    nameAr: "مهمة غونزو",
    image: "/games/gonzos-quest.jpg",
    provider: "NetEnt",
    category: "slots",
    // Gonzo character portrait is upper-left typically
    previewCfg: {
      fit: "cover",
      objectPosition: "center 22%",
      bg: "#1a1208",
    },
  },
  {
    id: "lightning-roulette",
    name: "Lightning Roulette",
    nameAr: "روليت البرق",
    image: "/games/lightning-roulette.png",
    provider: "Evolution Gaming",
    category: "live",
    // Wide studio shot — center works, slight top bias for the table
    previewCfg: {
      fit: "cover",
      objectPosition: "center 38%",
      bg: "#0f0f0a",
    },
  },
  {
    id: "live-blackjack",
    name: "Live Blackjack",
    nameAr: "بلاك جاك مباشر",
    image: "/games/live-blackjack.png",
    provider: "Evolution Gaming",
    category: "live",
    // Dealer at top, table bottom — show dealer
    previewCfg: {
      fit: "cover",
      objectPosition: "center 30%",
      bg: "#0d1a12",
    },
  },
];
