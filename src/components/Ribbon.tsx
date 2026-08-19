export default function Ribbon() {
  return (
    <div
      aria-label="AI Perfection"
      className="fixed right-0 top-1/2 z-[60] hidden -translate-y-1/2 select-none md:block"
    >
      <div className="flex flex-col items-center bg-[#E73C37] text-white py-4 px-2.5 rounded-l-md shadow-2xl transition-transform duration-300 hover:scale-105">
        <span className="font-grot text-[0.72rem] font-bold tracking-wider mb-2">AI</span>
        <span className="[writing-mode:vertical-rl] rotate-180 font-grot text-[0.62rem] uppercase tracking-[0.24em] font-semibold">
          AI Perfection
        </span>
      </div>
    </div>
  );
}
