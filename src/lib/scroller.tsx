import { createContext, useContext, useEffect, useRef, type ReactNode, type RefObject } from 'react';
import { useLocation } from 'react-router-dom';
import { configureLenis } from './scroll';

const Ctx = createContext<RefObject<HTMLDivElement | null> | null>(null);

/** Ref of the scrolling viewport element. */
export function useScrollerRef(): RefObject<HTMLDivElement | null> {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useScrollerRef must be used inside <AppScroller>');
  return ctx;
}

export default function AppScroller({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Index (Home) uses horizontal runway scroll; the last three pages (Work, About, Contact)
  // as well as project details and legal pages use the vertical upward scrolling effect.
  const isHorizontal = location.pathname === '/';
  const orientation = isHorizontal ? 'horizontal' : 'vertical';

  useEffect(() => {
    if (!wrapRef.current || !contentRef.current) return;
    const lenis = configureLenis(wrapRef.current, contentRef.current, orientation);

    const onKey = (e: KeyboardEvent) => {
      if (lenis.isStopped) return;
      const tag = (document.activeElement?.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      const w = wrapRef.current;
      if (!w) return;

      if (orientation === 'horizontal') {
        const step = w.clientWidth * 0.88;
        const max = w.scrollWidth - w.clientWidth;
        const cur = w.scrollLeft;
        const go = (x: number) => lenis.scrollTo(x, { duration: 1.2 });
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
          e.preventDefault();
          go(Math.min(max, cur + step));
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
          e.preventDefault();
          go(Math.max(0, cur - step));
        } else if (e.key === 'Home') {
          e.preventDefault();
          go(0);
        } else if (e.key === 'End') {
          e.preventDefault();
          go(max);
        }
      } else {
        const step = w.clientHeight * 0.8;
        const max = w.scrollHeight - w.clientHeight;
        const cur = w.scrollTop;
        const go = (y: number) => lenis.scrollTo(y, { duration: 1.2 });
        if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
          e.preventDefault();
          go(Math.min(max, cur + step));
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          e.preventDefault();
          go(Math.max(0, cur - step));
        } else if (e.key === 'Home') {
          e.preventDefault();
          go(0);
        } else if (e.key === 'End') {
          e.preventDefault();
          go(max);
        }
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [location.pathname, orientation]);

  return (
    <Ctx.Provider value={wrapRef}>
      <div
        ref={wrapRef}
        id="app-scroller"
        className={isHorizontal ? 'hscroll' : 'vscroll'}
      >
        <div
          ref={contentRef}
          className={isHorizontal ? 'hcontent' : 'vcontent'}
        >
          {children}
        </div>
      </div>
    </Ctx.Provider>
  );
}
