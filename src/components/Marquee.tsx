type Props = { text: string; className?: string; reverse?: boolean };

/**
 * Infinite marquee — text + spinning asterisk, repeated three times in a
 * track that loops leftward. When `reverse` is set, the track travels
 * rightward instead, so two stacked marquees read in opposite directions
 * like the editorial front-matter of a print magazine.
 */
export default function Marquee({ text, className = '', reverse = false }: Props) {
  const chunk = (
    <span className="flex shrink-0 items-center">
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} className="flex items-center">
          <span className="t-super txt-shade-ghost font-display uppercase leading-none">{text}</span>
          <span className="mx-[0.45em] select-none text-[0.65em] font-light opacity-50" aria-hidden>
            —
          </span>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden>
      <div className={`marquee-track ${reverse ? 'marquee-track--reverse' : ''}`}>
        {chunk}
        {chunk}
      </div>
    </div>
  );
}
