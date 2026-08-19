import type { CSSProperties, ReactNode } from 'react';

/** One screen of the horizontal strip. Height-locked, width in vw units. */
export default function Panel({
  children,
  className = '',
  w = 'w-screen',
  style,
  id,
}: {
  children: ReactNode;
  className?: string;
  w?: string;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <section id={id} className={`panel ${w} ${className}`} style={style}>
      {children}
    </section>
  );
}
