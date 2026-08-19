import { useEffect, useRef, useState } from 'react';

/**
 * Animated brand wordmark drawn in strokes: "EXACTIV" top-left,
 * "is" set in italic, and "RighT®" rotated 180° — the lockup
 * redraws itself line by line (stroke-dashoffset) then fills in.
 */
export function WordmarkDraw({
  stroke = 'currentColor',
  className = '',
  delay = 0,
}: {
  stroke?: string;
  className?: string;
  delay?: number;
}) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOn(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <svg
      viewBox="0 0 560 268"
      className={`nb-draw ${on ? 'is-on' : ''} ${className}`}
      style={{ ['--nb-dash' as never]: 820, color: 'currentColor' }}
      role="img"
      aria-label="EXACTIV is RighT"
    >
      <text
        className="nb-d1 font-grot"
        x="2"
        y="86"
        fontSize="94"
        letterSpacing="-2"
        fill="currentColor"
        stroke={stroke}
        strokeWidth="1.1"
        style={{ textTransform: 'uppercase' }}
      >
        EXACTIV
      </text>
      <text
        className="nb-d2 font-edit"
        x="556"
        y="172"
        textAnchor="end"
        fontSize="126"
        fontStyle="italic"
        fontWeight="300"
        fill="currentColor"
        stroke={stroke}
        strokeWidth="0.8"
      >
        is
      </text>
      <g transform="rotate(180 280 224)">
        <text
          className="nb-d3 font-display"
          x="0"
          y="236"
          fontSize="92"
          fontWeight="500"
          letterSpacing="1"
          fill="currentColor"
          stroke={stroke}
          strokeWidth="1"
        >
          RighT<tspan fontSize="30" dy="-34">®</tspan>
        </text>
      </g>
    </svg>
  );
}

/**
 * Giant "RighT" watermark for the footer: strokes trace themselves in
 * when scrolled into view, then the translucent fill fades up. Keeps a
 * slow breathing letter-spacing drift afterwards.
 */
export function BoringWatermark({ dark = false }: { dark?: boolean }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-on');
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 300"
      className="nb-draw nb-mark"
      aria-hidden
      style={{
        ['--nb-dash' as never]: 1700,
        color: dark ? 'rgba(255,255,255,0.15)' : 'rgba(13,13,13,0.10)',
        height: 'min(44vh, 30rem)',
        width: 'auto',
      }}
    >
      <text
        className="font-display"
        x="600"
        y="238"
        textAnchor="middle"
        fontSize="300"
        fontWeight="500"
        textLength="1120"
        lengthAdjust="spacingAndGlyphs"
        fill="currentColor"
        stroke={dark ? 'rgba(255,255,255,0.42)' : 'rgba(13,13,13,0.30)'}
        strokeWidth="1.2"
      >
        RighT
      </text>
    </svg>
  );
}

/**
 * Circular brand badge: "EXACTIV — IS — RIGHT — CREATIVE — DIGITAL —"
 * surrounding a sleek diagonal arrow indicator with smooth hover motion.
 */
export function BrandBadge({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={`group block select-none transition-transform duration-500 hover:scale-105 ${className}`} aria-hidden>
      <defs>
        <path id="nb-ring" d="M60 60 m -46 0 a 46 46 0 1 1 92 0 a 46 46 0 1 1 -92 0" fill="none" />
      </defs>
      <text className="font-grot text-[9.5px] uppercase tracking-[2.8px] fill-current opacity-80">
        <textPath href="#nb-ring">EXACTIV — IS — RIGHT — CREATIVE — DIGITAL —</textPath>
      </text>
      <circle cx="60" cy="60" r="23" fill="currentColor" fillOpacity="0.06" className="transition-all duration-300 group-hover:scale-110 origin-center" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M53 67 L67 53 M56 53 H67 V64" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </g>
    </svg>
  );
}

export const SpinBadge = BrandBadge;
