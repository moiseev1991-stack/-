export interface Casino {
  id: string;
  rank: number;
  name: string;
  logo: string;
  bonus: string;
  rtp: number;
  payoutDays: string;
  gamesCount?: string;
  paymentMethods: string[];
  affiliateLink: string;
  reviewLink?: string;
  isTopRated?: boolean;
  expertRating?: number;
  launchedYear?: number;
}

export interface BlacklistedCasino {
  id: string;
  name: string;
  logo: string;
  expertRating: number;
  reasons: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GamePreviewCfg {
  /** CSS object-position, default "center" */
  objectPosition?: string;
  /** cover (default) or contain (for logo/UI screenshots) */
  fit?: "cover" | "contain";
  /** Fallback background color/gradient behind the image */
  bg?: string;
  /**
   * Gradient overlay on top of the preview image.
   * Pass "none" to disable entirely (e.g. for contain mode).
   */
  overlay?: string | "none";
}

export interface GameItem {
  id: string;
  name: string;
  nameAr: string;
  image: string;
  provider: string;
  category: "slots" | "roulette" | "blackjack" | "poker" | "live";
  /** Per-game preview display overrides */
  previewCfg?: GamePreviewCfg;
}
