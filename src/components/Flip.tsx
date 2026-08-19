import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollerRef } from '../lib/scroller';

type Props = {
  imgA: string;
  imgB: string;
  dir?: 'vertical' | 'horizontal';
  className?: string;
  ratio?: string;
  alt?: string;
};

/**
 * Two stacked images. As the block travels from right to left through the
 * viewport, the top image peels away (clip-path) revealing the second one —
 * the original site's `flipMedia` interaction, driven by horizontal scroll.
 */
export default function Flip({ imgA, imgB, dir = 'horizontal', className = '', ratio = '4 / 5', alt = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const container = useScrollerRef();
  const { scrollXProgress } = useScroll({
    container,
    target: ref,
    axis: 'x',
    offset: ['start 95%', 'end 20%'],
  });
  const p = useTransform(scrollXProgress, [0, 1], [0, 100]);
  const clip = useTransform(p, (v) =>
    dir === 'vertical' ? `inset(${v}% 0% 0% 0%)` : `inset(0% 0% 0% ${v}%)`
  );

  return (
    <div ref={ref} className={`flip ${className}`} style={{ aspectRatio: ratio }}>
      <div className="flip__media">
        <img src={imgB} alt={alt} loading="lazy" />
      </div>
      <motion.div className="flip__media" style={{ clipPath: clip }}>
        <img src={imgA} alt={alt} loading="lazy" />
      </motion.div>
    </div>
  );
}
