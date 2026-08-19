import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export type Align = 'left' | 'right' | 'center';

/**
 * Staggered display lines that slide up on view. Each line can be
 * independently aligned — the signature editorial rhythm of the site.
 *
 * Uses `animate` (rather than `whileInView`) so the reveal always fires
 * on mount — this avoids a subtle IntersectionObserver edge-case where
 * a line starting at `y: 110%` inside an `overflow-hidden` wrapper can
 * be reported as "not intersecting" on direct-route navigations, which
 * would leave the headline permanently hidden below its mask.
 */
export default function Lines({
  lines,
  className = '',
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
}) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, delay: delay + i * 0.11, ease: [0.65, 0, 0.35, 1] }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
