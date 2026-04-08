/** Per-brand tuning for `CasinoLogo` (compensates inconsistent source assets). */
export interface CasinoLogoOverride {
  /** Uniform scale applied to the image (1 = default). */
  scale?: number;
  /** When set: full inner padding in px (replaces variant padding via `!p-0` on the logobox). */
  paddingPx?: number;
  /** CSS object-position for the image, e.g. "center 40%". */
  objectPosition?: string;
  /** Replaces default logobox background when set (any valid CSS background). */
  background?: string;
  /** Inverts colors (e.g. white logo on dark PNG). */
  invert?: boolean;
  /** Max width of image inside the box, % of the inner area. */
  maxWidthPct?: number;
  /** Max height of image inside the box, % of the inner area. */
  maxHeightPct?: number;
}

export type CasinoLogoVariant = "card" | "featured" | "table" | "blacklist";
