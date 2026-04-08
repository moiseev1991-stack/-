import type { CasinoLogoOverride } from "@/lib/types/casino-logo";

/**
 * Per-casino-id tuning (compensates uneven padding inside source PNG/WebP).
 * Adjust scale / maxWidthPct / maxHeightPct in small steps to match neighbours.
 */
export const casinoLogoOverrides: Record<string, CasinoLogoOverride> = {
  "bet-dahab": {
    scale: 1.2,
    maxHeightPct: 98,
    maxWidthPct: 96,
    objectPosition: "center center",
  },
  "888starz": {
    scale: 1.0,
    maxWidthPct: 88,
    maxHeightPct: 88,
    objectPosition: "center center",
    background: "#000",
  },
  mostbet: {
    scale: 1.18,
    maxWidthPct: 94,
    maxHeightPct: 94,
    objectPosition: "center center",
  },
  "spin-casino": {
    scale: 1.05,
    maxWidthPct: 90,
    maxHeightPct: 90,
    objectPosition: "center center",
    background: "#fff",
  },
  betobet: {
    scale: 1.14,
    maxWidthPct: 95,
    maxHeightPct: 92,
    objectPosition: "center center",
  },
  "ruby-fortune": {
    scale: 1.05,
    maxWidthPct: 82,
    maxHeightPct: 82,
    objectPosition: "center center",
    background: "#fff",
  },
  "jackpot-city": {
    scale: 1.18,
    maxHeightPct: 90,
    maxWidthPct: 94,
    objectPosition: "center 40%",
  },
  "yyy-casino": {
    scale: 1.05,
    maxWidthPct: 88,
    maxHeightPct: 88,
    objectPosition: "center center",
    background: "#fff",
  },
  "raging-bull": {
    scale: 1.08,
    maxWidthPct: 96,
  },
  "slots-of-vegas": {
    scale: 1.06,
    maxWidthPct: 96,
  },
  ignition: {
    scale: 1.1,
    maxWidthPct: 95,
    objectPosition: "center center",
  },
};

export function getCasinoLogoOverride(id: string): CasinoLogoOverride {
  return casinoLogoOverrides[id] ?? {};
}
