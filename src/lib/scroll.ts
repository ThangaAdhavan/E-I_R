import Lenis from 'lenis';

let lenis: Lenis | null = null;
let scroller: HTMLElement | null = null;
let unlocked = false;
let currentOrientation: 'horizontal' | 'vertical' = 'horizontal';
let rafId: number | null = null;

export function initLenis(
  wrapper: HTMLElement,
  content: HTMLElement,
  orientation: 'horizontal' | 'vertical' = 'horizontal'
): Lenis {
  return configureLenis(wrapper, content, orientation);
}

export function configureLenis(
  wrapper: HTMLElement,
  content: HTMLElement,
  orientation: 'horizontal' | 'vertical' = 'horizontal'
): Lenis {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  scroller = wrapper;
  currentOrientation = orientation;

  if (orientation === 'horizontal') {
    wrapper.classList.remove('vscroll');
    wrapper.classList.add('hscroll');
    content.classList.remove('vcontent');
    content.classList.add('hcontent');
    wrapper.style.overflowX = 'auto';
    wrapper.style.overflowY = 'hidden';
  } else {
    wrapper.classList.remove('hscroll');
    wrapper.classList.add('vscroll');
    content.classList.remove('hcontent');
    content.classList.add('vcontent');
    wrapper.style.overflowX = 'hidden';
    wrapper.style.overflowY = 'auto';
  }

  lenis = new Lenis({
    wrapper,
    content,
    orientation,
    gestureOrientation: orientation === 'horizontal' ? 'both' : 'vertical',
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 1.05,
    touchMultiplier: 1.4,
    autoResize: true,
  });

  if (!unlocked) {
    lenis.stop();
  } else {
    lenis.start();
  }

  function raf(time: number) {
    if (lenis) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
  }
  rafId = requestAnimationFrame(raf);
  return lenis;
}

export function getLenis(): Lenis | null {
  return lenis;
}

export function getScroller(): HTMLElement | null {
  return scroller;
}

export function getScrollOrientation(): 'horizontal' | 'vertical' {
  return currentOrientation;
}

/** Hard-locks native scrolling on the wrapper (used during the preloader). */
export function setNativeLock(lock: boolean) {
  if (!scroller) return;
  if (currentOrientation === 'horizontal') {
    scroller.style.overflowX = lock ? 'hidden' : 'auto';
  } else {
    scroller.style.overflowY = lock ? 'hidden' : 'auto';
  }
}

/** Called once the preloader releases the page. */
export function unlockScroll() {
  unlocked = true;
  setNativeLock(false);
  lenis?.start();
}

export function stopScroll() {
  if (!unlocked) return;
  lenis?.stop();
}

export function startScroll() {
  if (!unlocked) return;
  lenis?.start();
}

/** Instantly jumps back to the top/left edge (used on route change). */
export function resetScroll() {
  if (scroller) {
    scroller.scrollLeft = 0;
    scroller.scrollTop = 0;
  }
  lenis?.scrollTo(0, { immediate: true, force: true });
}

export function scrollToTarget(target: string | HTMLElement | number, immediate = false) {
  if (!scroller) return;
  let offset = 0;
  if (typeof target === 'number') {
    offset = target;
  } else {
    const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
    if (!el) return;
    if (currentOrientation === 'horizontal') {
      offset = el.getBoundingClientRect().left + scroller.scrollLeft;
    } else {
      offset = el.getBoundingClientRect().top + scroller.scrollTop;
    }
  }
  if (lenis) {
    lenis.scrollTo(offset, { immediate, duration: immediate ? 0 : 1.4 });
  } else {
    if (currentOrientation === 'horizontal') {
      scroller.scrollTo({ left: offset, behavior: immediate ? 'auto' : 'smooth' });
    } else {
      scroller.scrollTo({ top: offset, behavior: immediate ? 'auto' : 'smooth' });
    }
  }
}
