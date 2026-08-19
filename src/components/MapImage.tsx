import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollerRef } from '../lib/scroller';

/**
 * Full-screen media panel with internal zoom + drift driven by horizontal
 * travel — the horizontal equivalent of the original's "pinned" look.
 */
export default function PanImage({
  src,
  alt = '',
  video = false,
  w = 'w-screen',
  children,
}: {
  src: string;
  alt?: string;
  video?: boolean;
  w?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const container = useScrollerRef();
  const { scrollXProgress } = useScroll({
    container,
    target: ref,
    axis: 'x',
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [1.16, 1, 1.16]);
  const x = useTransform(scrollXProgress, [0, 1], ['-5%', '5%']);

  return (
    <section ref={ref} className={`panel overflow-hidden ${w}`}>
      <motion.div className="absolute -inset-x-[6%] inset-y-0" style={{ scale, x }}>
        {video ? (
          <video className="img-fill" src={src} autoPlay loop muted playsInline />
        ) : (
          <img className="img-fill" src={src} alt={alt} loading="lazy" />
        )}
      </motion.div>
      {children}
    </section>
  );
}
