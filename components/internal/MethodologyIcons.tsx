/**
 * Custom SVG icons for methodology cards — gold line style, no emoji.
 */
const gold = "#C8963E";
const stroke = 1.5;

export function IconShieldLicense({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 3l7 3v6c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"
        stroke={gold}
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-5"
        stroke={gold}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBonusRibbon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="5" y="8" width="14" height="11" rx="1.5" stroke={gold} strokeWidth={stroke} />
      <path d="M12 8V5" stroke={gold} strokeWidth={stroke} strokeLinecap="round" />
      <path
        d="M9 5c0-1.5 1.2-2 3-2s3 .5 3 2"
        stroke={gold}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <path d="M12 12v5" stroke={gold} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M9 14h6" stroke={gold} strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

export function IconWithdrawSpeed({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="2"
        stroke={gold}
        strokeWidth={stroke}
      />
      <path d="M7 10h4M7 14h10" stroke={gold} strokeWidth={stroke} strokeLinecap="round" />
      <path
        d="M18 3v4M16 5h4"
        stroke={gold}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconGameVariety({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="3"
        y="10"
        width="8"
        height="11"
        rx="1"
        stroke={gold}
        strokeWidth={stroke}
      />
      <path d="M5 13h4M5 16h3" stroke={gold} strokeWidth={1.2} strokeLinecap="round" />
      <circle cx="16" cy="8" r="5" stroke={gold} strokeWidth={stroke} />
      <circle cx="16" cy="8" r="1.5" fill={gold} />
      <path d="M16 3v2M16 11v2M11 8h2M19 8h2" stroke={gold} strokeWidth={1} strokeLinecap="round" />
    </svg>
  );
}

export function IconMobileExperience({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="7"
        y="3"
        width="10"
        height="18"
        rx="2"
        stroke={gold}
        strokeWidth={stroke}
      />
      <path d="M10 6h4" stroke={gold} strokeWidth={1.2} strokeLinecap="round" />
      <circle cx="12" cy="18" r="0.8" fill={gold} />
    </svg>
  );
}

export function IconSupport({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7 10h11a2 2 0 012 2v5l-3-2H7a2 2 0 01-2-2v-1a2 2 0 012-2z"
        stroke={gold}
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
      <path
        d="M5 5h8a2 2 0 012 2v1"
        stroke={gold}
        strokeWidth={stroke}
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
