import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { UIProvider, useUI } from './lib/store';
import { resetScroll, unlockScroll } from './lib/scroll';
import AppScroller from './lib/scroller';
import Cursor from './components/Cursor';
import GridLines from './components/GridLines';
import Ribbon from './components/Ribbon';
import NoiseOverlay from './components/NoiseOverlay';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import { WordmarkDraw } from './components/LogoArt';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Legal from './pages/Legal';
import { BRAND } from './data/site';

/* ------------------------------------------------------------ preloader */

function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const start = performance.now();
    const DURATION = 1700;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!doneRef.current) {
        doneRef.current = true;
        setLeaving(true);
        setTimeout(() => {
          unlockScroll();
          onDone();
        }, 750);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const padded = String(count).padStart(2, '0');

  return (
    <motion.div
      className="fixed inset-0 z-[150] flex flex-col justify-between bg-black text-white"
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      animate={leaving ? { clipPath: 'inset(0 0 0% 100%)' } : {}}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* progress bar */}
      <div className="flex h-[2px] w-full justify-end bg-white/10">
        <div className="h-full bg-white transition-[width] duration-100 ease-out" style={{ width: `${count}%` }} />
      </div>

      {/* oversized animated wordmark */}
      <motion.div
        className="flex flex-1 items-center justify-center px-6"
        animate={{ x: [0, -4, 4, 0], y: [0, 2, -2, 0] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
      >
        <WordmarkDraw className="w-[min(92vw,920px)] text-white" stroke="rgba(255,255,255,0.9)" />
      </motion.div>

      {/* bottom row */}
      <div className="wrapper flex items-end justify-between pb-8">
        <span className="font-display text-[clamp(2.6rem,7vw,6rem)] font-light leading-none tabular-nums">
          {padded}
          <span className="mx-[0.4em] text-white/40">—</span>
          <span className="text-white/30">100</span>
        </span>
        <span className="cap max-w-[36ch] text-right font-grot uppercase tracking-[0.2em] text-white/55">
          {BRAND.tagline}
        </span>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------- shell */

const EASE_TRANSITION: [number, number, number, number] = [0.65, 0, 0.35, 1];

/**
 * Route-aware cinematic tab transition animation.
 * Sweeps with a luxury shutter / reveal and resets scroll position immediately.
 */
function Routed() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!location.hash) resetScroll();
  }, [location.pathname, location.hash]);

  const isHome = location.pathname === '/';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className={isHome ? 'flex h-full' : 'flex flex-col w-full min-h-full'}
        initial={{ opacity: 0, y: isHome ? 0 : 24, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: isHome ? 0 : -20, scale: 0.985 }}
        transition={{ duration: 0.6, ease: EASE_TRANSITION }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/digital-architecture" element={<ProjectDetail slug="digital-architecture" />} />
          <Route path="/work/night-matter" element={<ProjectDetail slug="night-matter" />} />
          <Route path="/work/object-09" element={<ProjectDetail slug="object-09" />} />
          <Route path="/work/after-the-rain" element={<ProjectDetail slug="after-the-rain" />} />
          <Route path="/work/void" element={<ProjectDetail slug="void" />} />
          <Route path="/legal/privacy" element={<Legal doc="privacy" />} />
          <Route path="/legal/cookies" element={<Legal doc="cookies" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function Shell() {
  const { setReady } = useUI();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!showLoader) document.body.classList.add('is-ready');
  }, [showLoader]);

  return (
    <>
      {showLoader && (
        <Preloader
          onDone={() => {
            setShowLoader(false);
            setReady(true);
          }}
        />
      )}
      <GridLines />
      <NoiseOverlay />
      <Cursor />
      <Ribbon />
      <Header />
      <AppScroller>
        <ScrollProgress />
        <Routed />
      </AppScroller>
    </>
  );
}

export default function App() {
  return (
    <UIProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </UIProvider>
  );
}
