import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

/** Fade-in that enters travelling from the right — matches horizontal flow. */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 0,
  x = 60,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-8% -4%' }}
      transition={{ duration: 0.9, delay, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  );
}
