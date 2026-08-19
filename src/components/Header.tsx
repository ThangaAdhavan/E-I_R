import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BRAND } from '../data/site';

const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

/**
 * Highly visible floating luxury header:
 * - Floating glassmorphism capsule with solid contrast on any background
 * - Distinct brand typography with clear hierarchy
 * - Interactive navigation pills with visible active states
 */
export default function Header() {
  const { pathname } = useLocation();

  const navItems = [
    { label: 'Index', to: '/' },
    { label: 'Work', to: '/work' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] px-3 pt-3 md:px-6 md:pt-4"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: EASE, delay: 0.15 }}
    >
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-[#0d0d0d]/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl md:px-7 md:py-3.5">
        {/* left — EXACTIV wordmark (click home) */}
        <Link
          to="/"
          aria-label={`${BRAND.name} — Index`}
          className="group flex items-baseline gap-2 text-white transition-opacity hover:opacity-85"
        >
          <span className="font-grot text-[0.82rem] font-bold uppercase tracking-[0.24em] transition-all duration-300 md:text-[0.95rem]">
            EXACTIV
          </span>
          <span className="hidden font-edit text-[0.95rem] font-light italic text-white/70 sm:inline md:text-[1.05rem]">
            is RighT
          </span>
        </Link>

        {/* right — Navigation items */}
        <nav className="flex items-center gap-1 font-grot text-[0.72rem] uppercase tracking-[0.18em] text-white sm:gap-2 md:gap-3 md:text-[0.8rem]">
          {navItems.map((item) => {
            const active = pathname === item.to || (item.to !== '/' && pathname.startsWith(item.to));
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`relative rounded-full px-2.5 py-1 transition-all duration-300 md:px-4 md:py-1.5 ${
                  active
                    ? 'bg-white/20 font-semibold text-white shadow-inner'
                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {active && (
                  <motion.span
                    layoutId="header-active-indicator"
                    className="absolute inset-0 rounded-full border border-white/30 bg-white/15"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}

