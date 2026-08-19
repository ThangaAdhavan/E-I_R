import { createPortal } from 'react-dom';
import { useScrollerRef } from '../lib/scroller';
import { useScroll, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/**
 * Bottom-of-viewport progress indicator.
 * Works seamlessly in both horizontal and vertical upward scroll modes.
 */
export default function ScrollProgress() {
  const container = useScrollerRef();
  const location = useLocation();
  const isHorizontal = location.pathname === '/';
  
  const { scrollXProgress, scrollYProgress } = useScroll({ container });
  const activeProgress = isHorizontal ? scrollXProgress : scrollYProgress;

  // Route metadata
  const routes = ['/', '/work', '/about', '/contact'];
  const idx = routes.indexOf(location.pathname);
  const sectionIndex = idx === -1 ? 5 : idx + 1;
  const sectionTotal = 5;
  const label =
    location.pathname === '/'
      ? 'INDEX'
      : location.pathname === '/contact'
      ? 'CONTACT'
      : location.pathname === '/work'
      ? 'WORK'
      : location.pathname === '/about'
      ? 'ABOUT'
      : 'PROJECT';

  return createPortal(
    <div
      aria-hidden
      className="mix-blend-difference pointer-events-none fixed bottom-0 left-0 z-[90] w-full px-[1.2vw] pb-[0.7rem] text-white"
    >
      {/* progress line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left bg-white/85"
        style={{ scaleX: activeProgress }}
      />

      {/* editorial typography */}
      <div className="relative flex items-end justify-between">
        <span className="font-grot text-[0.62rem] uppercase tracking-[0.28em] text-white/85">
          EXACTIV <span className="text-white/40">/</span> {label}
        </span>
        <span className="font-grot text-[0.62rem] uppercase tracking-[0.28em] tabular-nums text-white/85">
          {String(sectionIndex).padStart(2, '0')} / {String(sectionTotal).padStart(2, '0')}
        </span>
      </div>
    </div>,
    document.body
  );
}
