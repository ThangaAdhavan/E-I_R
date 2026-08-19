/**
 * Subtle film-grain overlay — almost invisible.
 *
 * Renders an inline-SVG feTurbulence noise tile fixed over the whole
 * viewport at z-[100], with `mix-blend-mode: overlay`, opacity ~0.05,
 * and `pointer-events: none`. Honours `prefers-reduced-motion` (the
 * noise stops repositioning) and is hidden on touch devices where the
 * mix-blend overhead is rarely worth it.
 */
export default function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] hidden [@media(hover:hover)]:block"
      style={{
        opacity: 0.05,
        mixBlendMode: 'overlay',
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        backgroundSize: '220px 220px',
      }}
    />
  );
}
