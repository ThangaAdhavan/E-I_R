import { Link } from 'react-router-dom';
import { BRAND } from '../data/site';
import Panel from './Panel';
import Reveal from './Reveal';
import { BoringWatermark } from './LogoArt';

type Bg = 'bg-beige' | 'bg-black' | 'bg-coral' | 'bg-powder' | 'bg-olive' | 'bg-graphite';

/**
 * Minimal editorial footer.
 *
 *   ─────────────────────────────────────────────────────────
 *
 *   INSTAGRAM  LINKEDIN
 *
 *             (giant "RighT" watermark drawn in)
 *
 *                  EXACTIV is RighT
 *                    © 2026
 *
 *              DESIGNED TO DEFY THE ORDINARY.
 *
 * Background colour follows the route — the home page closes on cream,
 * the Work page closes on black, project detail pages close on the
 * project's own colour.
 */
export default function Footer({
  bg = 'bg-beige',
  dark = false,
  w = 'w-screen md:w-[78vw]',
}: {
  bg?: Bg;
  dark?: boolean;
  w?: string;
}) {
  const text = dark ? 'text-white' : 'text-[#0d0d0d]';
  const muted = dark ? 'text-white/55' : 'text-[#0d0d0d]/55';

  return (
    <Panel w={w} className={`${bg} ${text}`}>
      <div className="flex h-full flex-col">
        {/* top — social row */}
        <div className="wrapper flex flex-wrap items-center justify-center gap-x-[2vw] gap-y-1 pt-[5vh] md:pt-[6vh]">
          {BRAND.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="lnk font-grot text-[0.78rem] uppercase tracking-[0.22em] transition-all duration-500 hover:tracking-[0.3em]"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* centre — giant ghost watermark + brand wordmark */}
        <div className="relative flex flex-1 flex-col items-center justify-center">
          <div
            aria-hidden
            className="boring-drift pointer-events-none absolute left-1/2 top-1/2 select-none leading-none"
          >
            <BoringWatermark dark={dark} />
          </div>

          <Reveal className="relative z-[1] flex flex-col items-center text-center">
            <Link to="/" data-cursor="Index" className="group block">
              <div className="font-display text-[clamp(2.6rem,min(9vw,12vh),9rem)] font-light uppercase leading-none tracking-[-0.02em]">
                <span className="font-grot">EXACTIV</span>{' '}
                <span className="em-serif tracking-normal">is</span>{' '}
                <span className="font-display">RighT</span>
              </div>
            </Link>
            <div className={`mt-[2.5vh] font-grot text-[0.72rem] uppercase tracking-[0.3em] ${dark ? 'text-white/65' : 'text-[#0d0d0d]/65'}`}>
              © {BRAND.year} · {BRAND.location}
            </div>
          </Reveal>
        </div>

        {/* bottom — tagline + email */}
        <div className="wrapper flex flex-col items-center justify-between gap-2 border-t border-current/15 py-4 md:flex-row">
          <span className={`font-grot text-[0.62rem] uppercase tracking-[0.3em] ${muted}`}>
            {BRAND.tagline}
          </span>
          <a
            href={`mailto:${BRAND.email}`}
            className="lnk font-edit text-[1.05rem] font-light italic"
          >
            {BRAND.email}
          </a>
        </div>
      </div>
    </Panel>
  );
}
