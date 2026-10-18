/**
 * The rising sun from the NEFNAI logo, as a large background graphic: rays
 * fanning up from a point on the horizon. Purely decorative.
 */
export function SunRays({ className = '' }: { className?: string }) {
  const rays = Array.from({ length: 23 }, (_, i) => -84 + i * 7.6);
  return (
    <svg viewBox="0 0 800 420" aria-hidden="true" className={`pointer-events-none max-w-none ${className}`} style={{ aspectRatio: '800 / 420' }} preserveAspectRatio="xMidYMax meet">
      <defs>
        <linearGradient id="ray" gradientUnits="userSpaceOnUse" x1="400" y1="420" x2="400" y2="40">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="1" stopColor="#00a8e8" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="1" r="0.5">
          <stop offset="0" stopColor="#f5b301" stopOpacity="0.35" />
          <stop offset="1" stopColor="#f5b301" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="400" cy="420" rx="330" ry="250" fill="url(#glow)" />
      {rays.map((angle) => (
        <line key={angle} x1="400" y1="420" x2="400" y2="40" stroke="url(#ray)" strokeWidth={angle % 2 === 0 ? 3 : 1.6} transform={`rotate(${angle} 400 420)`} />
      ))}
    </svg>
  );
}
