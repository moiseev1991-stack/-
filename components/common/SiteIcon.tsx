import type { ReactElement, ReactNode, SVGProps } from "react";

const G = "#C8963E";

type IconFn = (p: SVGProps<SVGSVGElement> & { size?: number }) => ReactElement;

const sz = (size: number | undefined) => size ?? 24;

function RouletteBase(props: SVGProps<SVGSVGElement> & { size?: number; accent?: ReactNode }) {
  const s = sz(props.size);
  const { accent, size: _s, ...rest } = props;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...rest}>
      <circle cx="12" cy="12" r="9" stroke={G} strokeWidth={1.4} />
      <circle cx="12" cy="12" r="3.5" stroke={G} strokeWidth={1.2} />
      {[0, 45, 90, 135].map((deg) => (
        <line
          key={deg}
          x1="12"
          y1="12"
          x2={12 + 8.5 * Math.sin((deg * Math.PI) / 180)}
          y2={12 - 8.5 * Math.cos((deg * Math.PI) / 180)}
          stroke={G}
          strokeWidth={0.9}
          opacity={0.85}
        />
      ))}
      {accent}
    </svg>
  );
}

const ICONS: Record<string, IconFn> = {
  roulette_eu: (p) => (
    <RouletteBase {...p} accent={<circle cx="12" cy="3.2" r="1.8" fill="#15803d" stroke="#14532d" strokeWidth={0.3} />} />
  ),
  roulette_us: (p) => (
    <RouletteBase
      {...p}
      accent={
        <>
          <circle cx="9" cy="3.8" r="1.35" fill="#b91c1c" />
          <circle cx="15" cy="3.8" r="1.35" fill="#b91c1c" />
        </>
      }
    />
  ),
  roulette_fr: (p) => (
    <RouletteBase {...p} accent={<circle cx="12" cy="3.2" r="1.8" fill="#1d4ed8" stroke="#1e3a8a" strokeWidth={0.25} />} />
  ),
  roulette_live: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <rect x="3" y="6" width="14" height="11" rx="1.5" stroke={G} strokeWidth={1.3} />
        <path d="M17 9l4-2v8l-4-2" stroke={G} strokeWidth={1.3} strokeLinejoin="round" />
        <circle cx="10" cy="11.5" r="2" stroke={G} strokeWidth={1} />
      </svg>
    );
  },

  cat_slots: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <rect x="4" y="5" width="4.5" height="14" rx="0.8" stroke={G} strokeWidth={1.2} />
        <rect x="9.75" y="5" width="4.5" height="14" rx="0.8" stroke={G} strokeWidth={1.2} />
        <rect x="15.5" y="5" width="4.5" height="14" rx="0.8" stroke={G} strokeWidth={1.2} />
        <path d="M6 8h1M6 12h1M6 16h1" stroke={G} strokeWidth={0.9} strokeLinecap="round" />
        <path d="M11.75 9h1M11.75 13h1M11.75 17h1" stroke={G} strokeWidth={0.9} strokeLinecap="round" />
        <path d="M17.5 7h1M17.5 11h1M17.5 15h1" stroke={G} strokeWidth={0.9} strokeLinecap="round" />
      </svg>
    );
  },
  cat_blackjack: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <g transform="rotate(-8 12 12)">
          <rect x="5" y="4" width="10" height="14" rx="1.2" stroke={G} strokeWidth={1.2} />
        </g>
        <g transform="rotate(8 12 12)" opacity={0.55}>
          <rect x="7" y="5" width="10" height="14" rx="1.2" stroke={G} strokeWidth={1.2} />
        </g>
      </svg>
    );
  },
  cat_roulette: (p) => <RouletteBase {...p} />,
  cat_poker: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path
          d="M12 4c-3.5 0-6 2.2-6 5.2 0 2.5 2 4.5 4.2 5.5L12 20l1.8-5.3c2.2-1 4.2-3 4.2-5.5C18 6.2 15.5 4 12 4z"
          stroke={G}
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  cat_live: (p) => ICONS.roulette_live(p),
  cat_dice: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <rect x="4" y="7" width="8" height="8" rx="1.2" stroke={G} strokeWidth={1.2} transform="rotate(-12 8 11)" />
        <rect x="11" y="9" width="8" height="8" rx="1.2" stroke={G} strokeWidth={1.2} transform="rotate(10 15 13)" />
        <circle cx="6.5" cy="9.5" r="0.65" fill={G} />
        <circle cx="9.5" cy="12.5" r="0.65" fill={G} />
        <circle cx="15" cy="12" r="0.65" fill={G} />
        <circle cx="17" cy="14" r="0.65" fill={G} />
      </svg>
    );
  },

  new_bonus: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <rect x="5" y="8" width="14" height="11" rx="1.5" stroke={G} strokeWidth={1.2} />
        <path d="M12 8V5M9 5c0-1.5 1.2-2 3-2s3 .5 3 2" stroke={G} strokeWidth={1.2} strokeLinecap="round" />
        <path d="M12 12v5M9 14h6" stroke={G} strokeWidth={1.1} strokeLinecap="round" />
      </svg>
    );
  },
  new_content: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke={G} strokeWidth={1.2} />
        <path d="M8 9h8M8 12h6M8 15h4" stroke={G} strokeWidth={1.1} strokeLinecap="round" />
      </svg>
    );
  },
  new_ui: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path d="M12 4l2.2 4.5L19 9.3l-3.5 3.4.8 4.9L12 15.8 7.7 17.6l.8-4.9L5 9.3l4.8-.8L12 4z" stroke={G} strokeWidth={1.1} strokeLinejoin="round" />
      </svg>
    );
  },
  new_security: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <rect x="6" y="10" width="12" height="10" rx="1.5" stroke={G} strokeWidth={1.2} />
        <path d="M9 10V8a3 3 0 016 0v2" stroke={G} strokeWidth={1.2} strokeLinecap="round" />
        <circle cx="12" cy="15" r="1.5" fill={G} />
      </svg>
    );
  },

  pay_choose_license: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <circle cx="10" cy="10" r="5.5" stroke={G} strokeWidth={1.2} />
        <path d="M14.5 14.5L19 19" stroke={G} strokeWidth={1.4} strokeLinecap="round" />
      </svg>
    );
  },
  pay_choose_time: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <circle cx="12" cy="12" r="8" stroke={G} strokeWidth={1.2} />
        <path d="M12 7v5l3 2" stroke={G} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  },
  pay_choose_support: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path
          d="M7 10h11a2 2 0 012 2v5l-3-2H7a2 2 0 01-2-2v-1a2 2 0 012-2z"
          stroke={G}
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
        <path d="M5 5h8a2 2 0 012 2v1" stroke={G} strokeWidth={1} strokeLinecap="round" opacity={0.5} />
      </svg>
    );
  },

  rm_bonus: (p) => ICONS.new_bonus(p),
  rm_payment: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke={G} strokeWidth={1.2} />
        <path d="M3 10h18" stroke={G} strokeWidth={1.2} />
        <rect x="6" y="13" width="5" height="2" rx="0.4" fill={G} opacity={0.35} />
      </svg>
    );
  },
  rm_shield: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path
          d="M12 3l7 3v6c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"
          stroke={G}
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-5" stroke={G} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  },

  slot_classic: (p) => ICONS.cat_slots(p),
  slot_video: (p) => ICONS.roulette_live(p),
  slot_jackpot: (p) => ICONS.new_ui(p),
  slot_3d: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path d="M12 3l8 4v10l-8 4-8-4V7l8-4z" stroke={G} strokeWidth={1.1} strokeLinejoin="round" />
        <path d="M12 7v10M4 7l8 4 8-4" stroke={G} strokeWidth={0.9} opacity={0.7} />
      </svg>
    );
  },

  fast_wallet: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path
          d="M4 7h14a2 2 0 012 2v8a2 2 0 01-2 2H4V7z"
          stroke={G}
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
        <path d="M4 9h16" stroke={G} strokeWidth={1.2} />
        <circle cx="16" cy="13" r="1.2" fill={G} />
        <path d="M6 4h10v3H6z" stroke={G} strokeWidth={1} strokeLinejoin="round" />
      </svg>
    );
  },
  fast_crypto: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <circle cx="12" cy="12" r="7.5" stroke={G} strokeWidth={1.2} />
        <path d="M12 6v12M9 8.5c0-1.5 1-2 3-2v11M15 15.5c0 1.5-1 2-3 2V6.5" stroke={G} strokeWidth={1.1} strokeLinecap="round" />
      </svg>
    );
  },
  fast_card: (p) => ICONS.rm_payment(p),

  hwr_shield: (p) => ICONS.rm_shield(p),
  hwr_bonus: (p) => ICONS.new_bonus(p),
  hwr_payment: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path d="M4 10h16v8H4V10z" stroke={G} strokeWidth={1.2} strokeLinejoin="round" />
        <path d="M8 10V7a4 4 0 018 0v3" stroke={G} strokeWidth={1.2} strokeLinecap="round" />
        <circle cx="12" cy="14" r="1.5" fill={G} opacity={0.4} />
      </svg>
    );
  },
  hwr_games: (p) => ICONS.cat_dice(p),

  game_slots: (p) => ICONS.cat_slots(p),
  game_jackpot: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <circle cx="12" cy="12" r="7" stroke={G} strokeWidth={1.2} />
        <path d="M12 8v8M8.5 10.5c2.5 1.5 5 1.5 7.5 0M8.5 13.5c2.5-1.5 5-1.5 7.5 0" stroke={G} strokeWidth={1} strokeLinecap="round" />
      </svg>
    );
  },
  game_videopoker: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <rect x="4" y="5" width="7" height="14" rx="1" stroke={G} strokeWidth={1.1} />
        <rect x="13" y="5" width="7" height="14" rx="1" stroke={G} strokeWidth={1.1} />
        <path d="M6 9h3M6 12h3M17 10h2M17 14h2" stroke={G} strokeWidth={0.9} strokeLinecap="round" />
      </svg>
    );
  },
  game_poker: (p) => ICONS.cat_poker(p),
  game_blackjack: (p) => ICONS.cat_blackjack(p),
  game_roulette: (p) => <RouletteBase {...p} />,
  game_live: (p) => ICONS.roulette_live(p),
  game_sports: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <circle cx="12" cy="12" r="8" stroke={G} strokeWidth={1.1} />
        <path d="M4 12h16M12 4c2 3 2 13 0 16M12 4c-2 3-2 13 0 16" stroke={G} strokeWidth={0.9} opacity={0.85} />
      </svg>
    );
  },

  trust_doc: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path d="M8 3h8l4 4v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z" stroke={G} strokeWidth={1.1} strokeLinejoin="round" />
        <path d="M8 9h8M8 13h6" stroke={G} strokeWidth={0.9} strokeLinecap="round" />
      </svg>
    );
  },
  trust_chart: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path d="M4 19V5M4 19h16" stroke={G} strokeWidth={1.1} strokeLinecap="round" />
        <path d="M7 15l3-6 3 3 4-8 3 5" stroke={G} strokeWidth={1.2} strokeLinejoin="round" fill="none" />
      </svg>
    );
  },
  trust_news: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke={G} strokeWidth={1.1} />
        <path d="M8 8h8M8 12h5M8 16h6" stroke={G} strokeWidth={0.9} strokeLinecap="round" />
      </svg>
    );
  },
  trust_bulb: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path d="M12 3a5 5 0 00-3 9v2h6v-2a5 5 0 00-3-9z" stroke={G} strokeWidth={1.1} strokeLinejoin="round" />
        <path d="M10 17h4M9 19h6" stroke={G} strokeWidth={1} strokeLinecap="round" />
      </svg>
    );
  },
  trust_globe: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <circle cx="12" cy="12" r="8" stroke={G} strokeWidth={1.1} />
        <path d="M4 12h16M12 4c2.5 3 2.5 13 0 16M12 4c-2.5 3-2.5 13 0 16" stroke={G} strokeWidth={0.85} opacity={0.8} />
      </svg>
    );
  },

  pay_row_visa: (p) => ICONS.rm_payment(p),
  pay_row_wallet: (p) => ICONS.fast_wallet(p),
  pay_row_net: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <circle cx="12" cy="12" r="8" stroke={G} strokeWidth={1.1} />
        <path d="M8 12h8M12 8v8" stroke={G} strokeWidth={1} strokeLinecap="round" />
      </svg>
    );
  },
  pay_row_bank: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path d="M3 10h18v2H3V10zM5 12v7M19 12v7" stroke={G} strokeWidth={1.1} strokeLinecap="round" />
        <path d="M12 5L4 10h16L12 5z" stroke={G} strokeWidth={1.1} strokeLinejoin="round" />
      </svg>
    );
  },
  pay_row_mobile: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <rect x="8" y="3" width="8" height="18" rx="2" stroke={G} strokeWidth={1.1} />
        <path d="M10 6h4" stroke={G} strokeWidth={0.9} strokeLinecap="round" />
        <circle cx="12" cy="18" r="0.8" fill={G} />
      </svg>
    );
  },
  pay_row_crypto: (p) => ICONS.fast_crypto(p),

  mobile_slot_reels: (p) => ICONS.cat_slots({ ...p, size: (p.size ?? 24) * 1.25 }),
  /** Generic app-tile (not a brand mark) */
  badge_ios: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <rect x="5" y="4" width="14" height="16" rx="2.5" stroke={G} strokeWidth={1.2} />
        <path d="M9 8h6M9 11h4" stroke={G} strokeWidth={0.9} strokeLinecap="round" />
        <circle cx="12" cy="16" r="0.9" fill={G} />
      </svg>
    );
  },
  badge_android: (p) => {
    const s = sz(p.size);
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
        <path
          d="M7 11c0-2.8 2.2-5 5-5s5 2.2 5 5v5H7v-5z"
          stroke={G}
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
        <path d="M5 13v4a2 2 0 002 2h10a2 2 0 002-2v-4" stroke={G} strokeWidth={1.1} strokeLinecap="round" />
        <path d="M9 8V6M15 8V6" stroke={G} strokeWidth={1} strokeLinecap="round" />
        <circle cx="9.5" cy="9" r="0.6" fill={G} />
        <circle cx="14.5" cy="9" r="0.6" fill={G} />
      </svg>
    );
  },
};

export type SiteIconName = keyof typeof ICONS;

export function SiteIcon({
  name,
  className,
  size = 24,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const I = ICONS[name];
  if (!I) return null;
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${className ?? ""}`} aria-hidden>
      <I size={size} />
    </span>
  );
}

export function isSiteIconName(name: string): name is SiteIconName {
  return name in ICONS;
}

export default SiteIcon;
