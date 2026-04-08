"use client";

import { useId } from "react";

export type InternalHeroBackdropVariant = "symbolic" | "abstract";

export const DEFAULT_INTERNAL_HERO_BACKDROP: InternalHeroBackdropVariant = "symbolic";

interface Props {
  variant?: InternalHeroBackdropVariant;
}

export default function InternalHeroBackdrop({
  variant = DEFAULT_INTERNAL_HERO_BACKDROP,
}: Props) {
  const uid = useId().replace(/:/g, "");

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Base dark */}
      <div className="absolute inset-0" style={{ backgroundColor: "#141416" }} />

      {/* Gold ambient glow — left side */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 90% at -5% 50%, rgba(200,150,62,0.30) 0%, transparent 60%),
            radial-gradient(ellipse 55% 60% at 30% 80%, rgba(180,120,40,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 40% 50% at 55% 20%, rgba(200,150,62,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 80% 100% at 100% 50%, rgba(0,0,0,0.45) 0%, transparent 60%)
          `,
        }}
      />

      {/* Blur blob — warm gold circle left */}
      <div className="absolute -left-16 top-[10%] h-72 w-72 rounded-full bg-[#C8963E]/20 blur-[80px]" />
      <div className="absolute left-[15%] top-[55%] h-48 w-48 rounded-full bg-[#8B6420]/15 blur-[60px]" />

      {/* Casino symbols SVG — full bleed, fades to right */}
      <div className="absolute inset-0 opacity-100">
        <CasinoSymbolsScene patId={uid} />
      </div>

      {/* Right fade — keeps text area clean */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, rgba(20,20,22,0.92) 0%, rgba(20,20,22,0.6) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Full casino-themed SVG scene
   All symbols are SVG paths — no Unicode/emoji
───────────────────────────────────────────── */
function CasinoSymbolsScene({ patId }: { patId: string }) {
  const gold = "rgba(200,150,62,";
  const gold2 = "rgba(220,175,90,";

  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Dot grid tile */}
        <pattern id={`${patId}-dots`} width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.9" fill={`${gold}0.18)`} />
        </pattern>

        {/* Diagonal fine lines */}
        <pattern id={`${patId}-lines`} width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M0 18 L18 0" stroke={`${gold}0.07)`} strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* Background dot grid — full bleed */}
      <rect width="800" height="400" fill={`url(#${patId}-dots)`} />
      {/* Diagonal lines overlay */}
      <rect width="800" height="400" fill={`url(#${patId}-lines)`} opacity="0.6" />

      {/* ── ROULETTE WHEEL — large, center-left ── */}
      <g transform="translate(180,200)" opacity="0.22">
        {/* Outer ring */}
        <circle r="155" fill="none" stroke={`${gold}1)`} strokeWidth="2.5" />
        <circle r="142" fill="none" stroke={`${gold}0.6)`} strokeWidth="0.8" />
        <circle r="118" fill="none" stroke={`${gold}0.7)`} strokeWidth="1.2" />
        <circle r="100" fill="none" stroke={`${gold}0.5)`} strokeWidth="0.7" />
        <circle r="78" fill="none" stroke={`${gold}0.6)`} strokeWidth="1.0" />
        <circle r="52" fill="none" stroke={`${gold}0.5)`} strokeWidth="0.7" />
        <circle r="28" fill="none" stroke={`${gold}0.7)`} strokeWidth="1.0" />
        <circle r="10" fill="none" stroke={`${gold}0.8)`} strokeWidth="1.2" />
        {/* Spokes ×18 */}
        {Array.from({ length: 18 }).map((_, i) => {
          const a = (i / 18) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={Math.cos(a) * 10}
              y1={Math.sin(a) * 10}
              x2={Math.cos(a) * 155}
              y2={Math.sin(a) * 155}
              stroke={`${gold}0.35)`}
              strokeWidth="0.55"
            />
          );
        })}
        {/* Alternating sector dots */}
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i / 36) * Math.PI * 2;
          const r = 130;
          return (
            <circle
              key={i}
              cx={Math.cos(a) * r}
              cy={Math.sin(a) * r}
              r="2.2"
              fill={`${gold}${i % 2 === 0 ? "0.55" : "0.25"})`}
            />
          );
        })}
      </g>

      {/* ── SPADE ♠ — top-left ── */}
      <g transform="translate(42,40) scale(0.82)" opacity="0.28">
        <path
          d="M50 90 C50 90 10 65 10 35 C10 10 30 0 50 15 C70 0 90 10 90 35 C90 65 50 90 50 90 Z"
          fill="none"
          stroke={`${gold2}1)`}
          strokeWidth="1.8"
        />
        {/* Stem */}
        <path d="M42 88 C38 100 30 108 28 118 L72 118 C70 108 62 100 58 88 Z"
          fill="none" stroke={`${gold2}1)`} strokeWidth="1.4" />
      </g>

      {/* ── DIAMOND ♦ — below spade ── */}
      <g transform="translate(42,175)" opacity="0.24">
        <path
          d="M38 0 L76 38 L38 76 L0 38 Z"
          fill="none"
          stroke={`${gold}1)`}
          strokeWidth="1.6"
        />
        <path
          d="M38 12 L64 38 L38 64 L12 38 Z"
          fill="none"
          stroke={`${gold}0.45)`}
          strokeWidth="0.7"
        />
      </g>

      {/* ── HEART ♥ — right of diamond ── */}
      <g transform="translate(135,165)" opacity="0.22">
        <path
          d="M40 72 C40 72 4 48 4 22 C4 8 16 0 28 6 C32 8 36 12 40 18 C44 12 48 8 52 6 C64 0 76 8 76 22 C76 48 40 72 40 72 Z"
          fill="none"
          stroke={`${gold}1)`}
          strokeWidth="1.7"
        />
      </g>

      {/* ── CLUB ♣ — top row ── */}
      <g transform="translate(135,38)" opacity="0.2">
        <circle cx="26" cy="30" r="16" fill="none" stroke={`${gold2}1)`} strokeWidth="1.5" />
        <circle cx="50" cy="30" r="16" fill="none" stroke={`${gold2}1)`} strokeWidth="1.5" />
        <circle cx="38" cy="14" r="16" fill="none" stroke={`${gold2}1)`} strokeWidth="1.5" />
        <path d="M30 46 C26 56 18 62 16 70 L60 70 C58 62 50 56 46 46 Z"
          fill="none" stroke={`${gold2}1)`} strokeWidth="1.4" />
      </g>

      {/* ── POKER CHIP — top-right area ── */}
      <g transform="translate(355,40)" opacity="0.2">
        <circle cx="44" cy="44" r="42" fill="none" stroke={`${gold}1)`} strokeWidth="2.0" />
        <circle cx="44" cy="44" r="34" fill="none" stroke={`${gold}0.5)`} strokeWidth="0.8" />
        <circle cx="44" cy="44" r="24" fill="none" stroke={`${gold}0.7)`} strokeWidth="1.2" />
        {/* Notches around edge */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const r1 = 36, r2 = 42;
          return (
            <line
              key={i}
              x1={44 + Math.cos(a) * r1} y1={44 + Math.sin(a) * r1}
              x2={44 + Math.cos(a) * r2} y2={44 + Math.sin(a) * r2}
              stroke={`${gold}0.7)`}
              strokeWidth="3"
            />
          );
        })}
      </g>

      {/* ── PLAYING CARD outline — right zone ── */}
      <g transform="translate(360,150)" opacity="0.18">
        <rect width="72" height="100" rx="8" fill="none" stroke={`${gold}1)`} strokeWidth="1.5" />
        {/* Inner frame */}
        <rect x="5" y="5" width="62" height="90" rx="5" fill="none" stroke={`${gold}0.4)`} strokeWidth="0.6" />
        {/* Small pip top-left */}
        <path d="M14 18 L22 26 L14 34 L6 26 Z" fill="none" stroke={`${gold}0.7)`} strokeWidth="0.9" />
        {/* Centre pip */}
        <path d="M36 42 L50 56 L36 70 L22 56 Z" fill="none" stroke={`${gold}0.55)`} strokeWidth="1.0" />
      </g>

      {/* ── DICE — bottom area ── */}
      <g transform="translate(48,300)" opacity="0.22">
        <rect width="58" height="58" rx="10" fill="none" stroke={`${gold}1)`} strokeWidth="1.6" />
        {/* Dots: 5-face */}
        <circle cx="16" cy="16" r="4.5" fill={`${gold}0.75)`} />
        <circle cx="42" cy="16" r="4.5" fill={`${gold}0.75)`} />
        <circle cx="29" cy="29" r="4.5" fill={`${gold}0.75)`} />
        <circle cx="16" cy="42" r="4.5" fill={`${gold}0.75)`} />
        <circle cx="42" cy="42" r="4.5" fill={`${gold}0.75)`} />
      </g>

      {/* ── SECOND DICE (rotated) ── */}
      <g transform="translate(128,295) rotate(15,30,30)" opacity="0.18">
        <rect width="52" height="52" rx="9" fill="none" stroke={`${gold}1)`} strokeWidth="1.4" />
        {/* Dots: 3-face diagonal */}
        <circle cx="14" cy="14" r="4" fill={`${gold}0.65)`} />
        <circle cx="26" cy="26" r="4" fill={`${gold}0.65)`} />
        <circle cx="38" cy="38" r="4" fill={`${gold}0.65)`} />
      </g>

      {/* ── SECOND CHIP (smaller, overlapping roulette) ── */}
      <g transform="translate(285,265)" opacity="0.16">
        <circle cx="30" cy="30" r="28" fill="none" stroke={`${gold}1)`} strokeWidth="1.6" />
        <circle cx="30" cy="30" r="20" fill="none" stroke={`${gold}0.45)`} strokeWidth="0.7" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={30 + Math.cos(a) * 22} y1={30 + Math.sin(a) * 22}
              x2={30 + Math.cos(a) * 28} y2={30 + Math.sin(a) * 28}
              stroke={`${gold}0.65)`}
              strokeWidth="2.5"
            />
          );
        })}
      </g>

      {/* ── STAR / LUCKY STAR near top-center ── */}
      <g transform="translate(258,30)" opacity="0.2">
        <path
          d="M22 0 L27 15 L43 15 L30 24 L35 40 L22 31 L9 40 L14 24 L1 15 L17 15 Z"
          fill="none"
          stroke={`${gold2}1)`}
          strokeWidth="1.4"
        />
      </g>

      {/* ── SMALL CARD bottom-right ── */}
      <g transform="translate(355,290)" opacity="0.16">
        <rect width="56" height="78" rx="7" fill="none" stroke={`${gold}1)`} strokeWidth="1.3" />
        <rect x="4" y="4" width="48" height="70" rx="4" fill="none" stroke={`${gold}0.35)`} strokeWidth="0.5" />
        {/* Spade mini inside */}
        <path
          d="M28 22 C28 22 16 32 16 40 C16 47 22 50 28 45 C34 50 40 47 40 40 C40 32 28 22 28 22 Z"
          fill="none"
          stroke={`${gold}0.5)`}
          strokeWidth="0.9"
        />
        <path d="M25 44 C23 50 19 53 18 58 L38 58 C37 53 33 50 31 44 Z"
          fill="none" stroke={`${gold}0.5)`} strokeWidth="0.8" />
      </g>

    </svg>
  );
}
