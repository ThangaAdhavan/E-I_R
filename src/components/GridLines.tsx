export default function GridLines() {
  return (
    <div className="wrapper vertical-lines pointer-events-none fixed inset-0 z-[5]" aria-hidden>
      <div className="grid h-full grid-cols-6 md:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={i > 5 ? 'hidden md:block' : ''} />
        ))}
      </div>
    </div>
  );
}
