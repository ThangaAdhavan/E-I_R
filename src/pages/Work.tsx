import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Filter, Layers, Cpu, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS, BRAND, ALL_NUMBERED_IMAGES, ALL_CONCEPT_IMAGES } from '../data/site';
import Reveal from '../components/Reveal';
import Lines from '../components/Lines';
import PageOpeningSVG from '../components/PageOpeningSVG';
import Footer from '../components/Footer';
import TiltImage from '../components/TiltImage';

const CATEGORIES = ['ALL', 'WEB DESIGN', 'FASHION', 'PRODUCT', 'PHOTOGRAPHY', 'EXPERIMENTAL'];

const ROW_BG = [
  'bg-beige text-[#0d0d0d]',
  'bg-graphite text-white',
  'bg-powder text-[#0d0d0d]',
  'bg-[#1a1a1a] text-white',
  'bg-olive text-[#0d0d0d]',
];

const ROW_SHADE = ['txt-shade', 'txt-shade-light', 'txt-shade', 'txt-shade-light', 'txt-shade'];

export default function Work() {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState('ALL');

  useEffect(() => {
    document.title = `Work — ${BRAND.name}`;
  }, []);

  const filteredProjects = selectedCat === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toUpperCase().includes(selectedCat));

  return (
    <div className="w-full bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      {/* 1. Same Signature Opening SVG across all tabs */}
      <div className="bg-black pt-[4.8rem] md:pt-[5.2rem]">
        <PageOpeningSVG
          tabName="Work"
          tabIndex="02"
          theme="dark"
          subtitle="SELECTED ARCHIVE · MOTION & EDITORIAL"
        />
      </div>

      {/* 2. Upward Scrolling Hero Banner */}
      <section className="w-full bg-black py-[6vh] border-b border-white/10">
        <div className="wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <Lines
              className="t-super txt-shade-light font-display font-light uppercase"
              lines={[
                <span key="a" className="block">Projects</span>,
                <span key="b" className="block">
                  that <span className="em-serif tracking-normal">redefine</span>
                </span>,
                <span key="c" className="block pl-[10vw]">the extraordinary</span>,
              ]}
            />
          </div>
          <div className="md:col-span-4 pb-2">
            <Reveal delay={0.25}>
              <p className="p-sm font-grot text-white/80 leading-relaxed">
                Five signature case studies and an expansive living archive of visual experiments engineered from {BRAND.location}.
                Scroll upward through each project to explore the craftsmanship, typography, and motion systems.
              </p>
              <div className="mt-4 flex items-center gap-3 font-grot text-[0.72rem] uppercase tracking-[0.24em] text-emerald-400">
                <Sparkles size={14} />
                <span>Upward Interactive View · 60FPS</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Interactive Category Filter Bar */}
      <section className="w-full bg-[#141414] py-4 border-b border-white/10 sticky top-[70px] z-30 backdrop-blur-md bg-[#141414]/90">
        <div className="wrapper flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-grot text-[0.72rem] uppercase tracking-[0.2em] text-white/60">
            <Filter size={14} />
            <span>Filter Archives:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-full font-grot text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-300 ${
                  selectedCat === cat
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Upward Scrolling Project Cards Cascade */}
      <section className="w-full divide-y divide-white/10">
        {filteredProjects.map((p, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              className={`w-full py-[8vh] md:py-[12vh] ${ROW_BG[i % ROW_BG.length]}`}
            >
              <div className="wrapper grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Main Media with 3D Tilt Image & Hover Glare */}
                <div
                  className={`w-full md:col-span-7 cursor-pointer ${isEven ? '' : 'md:order-2'}`}
                  data-cursor="Explore"
                  onClick={() => navigate(`/work/${p.slug}`)}
                >
                  <div className="relative group overflow-hidden rounded-xl shadow-2xl">
                    <TiltImage
                      src={p.img}
                      alt={p.name}
                      ratio="16 / 10"
                      className="w-full"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                      <span className="btn-pill btn-pill--white font-edit font-light">
                        <span>Open Case Study</span>
                      </span>
                    </div>
                  </div>

                  {/* Additional Mini Thumbnails Strip */}
                  {p.gallery && p.gallery.length > 0 && (
                    <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                      {p.gallery.map((gImg, gIdx) => (
                        <img
                          key={gIdx}
                          src={gImg}
                          alt={`${p.name} gallery ${gIdx + 1}`}
                          className="h-16 w-24 object-cover rounded border border-current/20 opacity-80 hover:opacity-100 transition-opacity duration-300 flex-none shadow-sm"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Metadata & Content */}
                <div className={`w-full md:col-span-5 flex flex-col justify-between gap-6 ${isEven ? '' : 'md:order-1'}`}>
                  <div>
                    <div className="flex items-center justify-between border-b border-current/15 pb-3">
                      <span className="p-l font-edit font-semibold">({p.year})</span>
                      <span className="font-grot text-[0.75rem] uppercase tracking-[0.24em] font-semibold">
                        {p.index} / 05
                      </span>
                    </div>

                    <h3 className={`t-2xl font-display font-light uppercase mt-4 ${ROW_SHADE[i % ROW_SHADE.length]}`}>
                      {p.name}
                    </h3>

                    <p className="p-sm font-grot mt-3 opacity-90 leading-relaxed">
                      {p.tagline}
                    </p>

                    <div className="mt-5 space-y-1.5 font-grot text-[0.72rem] uppercase tracking-[0.2em] opacity-75">
                      <div><span className="opacity-50">Category:</span> {p.category}</div>
                      <div><span className="opacity-50">Client:</span> {p.client}</div>
                      <div><span className="opacity-50">Role:</span> {p.role}</div>
                      <div><span className="opacity-50">Tech:</span> {p.tech.join(' · ')}</div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to={`/work/${p.slug}`}
                      className="btn-pill font-edit font-light group inline-flex items-center gap-3"
                      data-cursor="Open"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 5. Extended Architecture & Engineering Specifications */}
      <section className="w-full bg-[#111111] py-[10vh] border-y border-white/10 text-white">
        <div className="wrapper">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-edit text-[1.15rem] font-light italic text-white/70">
              (Creative Engineering)
            </span>
            <h3 className="t-super txt-shade-light font-display font-light uppercase mt-1">
              Architecture & Benchmarks
            </h3>
            <p className="p-sm font-grot mt-2 text-white/70">
              Every digital experience is built with hardware-accelerated rendering, spring-damped motion physics, and clean structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <span className="p-l font-edit font-light">01 / Engine</span>
                <Cpu size={20} className="text-emerald-400" />
              </div>
              <h4 className="t-l font-display font-light uppercase">60FPS Hardware Acceleration</h4>
              <p className="p-sm font-grot text-white/75 leading-relaxed">
                Bespoke Lenis momentum scrolling combined with GPU-rendered compositor layers guarantees ultra-fluid 60fps refresh across desktops and mobile touchscreens.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <span className="p-l font-edit font-light">02 / Typography</span>
                <Layers size={20} className="text-emerald-400" />
              </div>
              <h4 className="t-l font-display font-light uppercase">Liquid Type Elasticity</h4>
              <p className="p-sm font-grot text-white/75 leading-relaxed">
                Dynamic scroll-velocity elongation and variable-font interpolation allow typefaces to react physically to user gestures with spring damping.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <span className="p-l font-edit font-light">03 / Provenance</span>
                <Compass size={20} className="text-emerald-400" />
              </div>
              <h4 className="t-l font-display font-light uppercase">{BRAND.location} Studio</h4>
              <p className="p-sm font-grot text-white/75 leading-relaxed">
                Conceived and crafted from {BRAND.location}, serving global ateliers, fashion houses, architectural studios, and independent cultural institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Complete Visual Assets Exhibition Grid (Using all 14 images & 11 concept artworks) */}
      <section className="w-full bg-[#0d0d0d] py-[10vh] border-t border-white/10 text-white">
        <div className="wrapper">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-edit text-[1.1rem] font-light italic text-white/70">(Visual Asset Archive)</span>
              <h2 className="t-super txt-shade-light font-display font-light uppercase mt-1">
                Complete Collection
              </h2>
            </div>
            <p className="p-sm max-w-[40ch] font-grot text-white/70">
              All 25+ high-fidelity visuals, artworks, and concept explorations captured across the project archives.
            </p>
          </div>

          {/* Numbered visual assets 01 - 14 */}
          <div className="mb-8">
            <h4 className="font-grot text-[0.75rem] uppercase tracking-[0.25em] text-white/60 mb-4">
              Numbered Keyframes (01 — 14)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {ALL_NUMBERED_IMAGES.map((img, idx) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded bg-white/5 border border-white/10"
                >
                  <img
                    src={img}
                    alt={`Archive Asset ${idx + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 flex items-end justify-between">
                    <span className="font-grot text-[0.65rem] uppercase tracking-wider text-white">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Concept artworks 01 - 11 */}
          <div>
            <h4 className="font-grot text-[0.75rem] uppercase tracking-[0.25em] text-white/60 mb-4">
              Concept Explorations (01 — 11)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {ALL_CONCEPT_IMAGES.map((img, idx) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded bg-white/5 border border-white/10"
                >
                  <img
                    src={img}
                    alt={`Concept Asset ${idx + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 flex items-end justify-between">
                    <span className="font-grot text-[0.65rem] uppercase tracking-wider text-white">
                      Concept #{idx + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Editorial Philosophy */}
      <section className="w-full bg-black py-[12vh] border-t border-white/10 text-white">
        <div className="wrapper max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="font-edit text-[1.2rem] font-light italic text-white/70">
              (Editorial Manifesto)
            </span>
            <p className="p-xl font-grot mt-4 leading-relaxed text-white/90">
              For years, under the name EXACTIV is RighT, I have explored textures, finishes and
              combinations to achieve striking, harmonious effects. That experience is reflected in
              websites that behave like beloved, well-cared places: landscapes of typography with an
              artisanal soul, where motion, sobriety and warmth evoke the refuge everyone needs.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer bg="bg-black" dark />
    </div>
  );
}
