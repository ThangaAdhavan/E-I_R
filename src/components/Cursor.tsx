import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const dot = dotRef.current;
    if (!dot) return;

    let x = -100;
    let y = -100;
    let tx = -100;
    let ty = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest?.('[data-cursor]') as HTMLElement | null;
      if (t) {
        setLabel(t.dataset.cursor || '');
        setGrown(true);
        return;
      }
      setLabel(null);
      const interactive = (e.target as HTMLElement)?.closest?.('a, button, .unit-row, input, textarea, select, label');
      setGrown(!!interactive);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  const size = label ? 110 : grown ? 44 : 12;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden [@media(hover:hover)]:block"
      aria-hidden
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          label ? 'bg-[#0d0d0d] text-white' : 'bg-white mix-blend-difference'
        }`}
        style={{ width: size, height: size }}
      >
        <span
          className={`whitespace-nowrap px-2 text-center font-edit text-[1rem] font-light uppercase leading-[1.05] tracking-wide transition-opacity duration-200 ${
            label ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
