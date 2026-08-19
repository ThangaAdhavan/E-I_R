import { motion } from 'framer-motion';
import { WordmarkDraw, BrandBadge } from './LogoArt';
import { BRAND } from '../data/site';

type PageOpeningSVGProps = {
  tabName: string;
  tabIndex?: string;
  subtitle?: string;
  theme?: 'light' | 'dark' | 'beige' | 'coral' | 'powder' | 'olive';
  className?: string;
};

export default function PageOpeningSVG({
  tabName,
  tabIndex = '01',
  subtitle = 'DESIGNED TO DEFY THE ORDINARY.',
  theme = 'light',
  className = '',
}: PageOpeningSVGProps) {
  const isDark = theme === 'dark' || theme === 'graphite' as never;
  const textColor = isDark ? 'text-white' : 'text-[#0d0d0d]';
  const strokeColor = isDark ? 'rgba(255,255,255,0.92)' : 'rgba(13,13,13,0.92)';
  const borderCol = isDark ? 'border-white/15' : 'border-black/10';
  const mutedText = isDark ? 'text-white/60' : 'text-[#0d0d0d]/60';

  return (
    <div className={`w-full flex flex-col ${textColor} ${className}`}>
      {/* Top micro metadata bar */}
      <div className={`wrapper grid grid-cols-6 items-center py-3 border-b ${borderCol} font-grot text-[0.72rem] uppercase tracking-[0.22em] font-semibold md:grid-cols-12`}>
        <div className="col-span-3 flex items-center gap-3 md:col-span-4">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>TAB · {tabIndex}</span>
        </div>
        <div className="col-span-1 text-center font-edit text-[1.05rem] font-light italic capitalize md:col-span-4">
          {tabName}
        </div>
        <div className={`col-span-2 text-right ${mutedText} md:col-span-4`}>
          {BRAND.shortName} ©{BRAND.year}
        </div>
      </div>

      {/* Signature Animated SVG Wordmark Hero */}
      <div className="wrapper py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="w-full flex-1 max-w-[860px]"
        >
          <WordmarkDraw
            stroke={strokeColor}
            className="w-full h-auto drop-shadow-sm"
          />
        </motion.div>

        <div className="hidden md:flex flex-col items-end gap-3 flex-none">
          <BrandBadge className="h-20 w-20 text-current opacity-85" />
          <span className={`font-grot text-[0.65rem] uppercase tracking-[0.25em] ${mutedText} text-right max-w-[24ch]`}>
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}
