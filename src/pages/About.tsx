import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Award, ShieldCheck } from 'lucide-react';
import Lines from '../components/Lines';
import Reveal from '../components/Reveal';
import Flip from '../components/Flip';
import PanImage from '../components/MapImage';
import Footer from '../components/Footer';
import PageOpeningSVG from '../components/PageOpeningSVG';
import TiltImage from '../components/TiltImage';
import { BRAND, CAPABILITIES, ALL_NUMBERED_IMAGES, ALL_CONCEPT_IMAGES } from '../data/site';

const SKILLS = [
  'React · Next.js · Vite',
  'TypeScript · Tailwind',
  'Framer Motion · Lenis · GSAP',
  'WebGL · GLSL · Three.js',
  'Web Audio · Canvas',
  'Editorial typography systems',
];

const TIMELINE = [
  { year: '2014', text: 'First commercial site — a single static page, written by hand, never deployed.' },
  { year: '2017', text: 'Began creative-direction work for digital studios and architectural ateliers.' },
  { year: '2020', text: 'Built the first horizontal-scroll portfolio. Decided never to look back.' },
  { year: '2024', text: `Founded EXACTIV is RighT as an independent design laboratory in ${BRAND.location}.` },
  { year: BRAND.year, text: 'Currently: one project per quarter, uncompromising creative rigor.' },
];

const PRINCIPLES = [
  {
    title: 'Structure Precedes Ornament',
    desc: 'The grid is a load-bearing wall. Typography is structural material. We never decorate an empty idea.',
    icon: <ShieldCheck size={20} className="text-emerald-500" />,
  },
  {
    title: 'Kinetic Intention',
    desc: 'Nothing bounces gratuitously. Every spring physics curve and transition is calibrated to feel intentional.',
    icon: <Sparkles size={20} className="text-emerald-500" />,
  },
  {
    title: 'Singular Focus',
    desc: 'One project per quarter. Direct principal engagement without intermediaries or diluted vision.',
    icon: <Award size={20} className="text-emerald-500" />,
  },
];

export default function About() {
  useEffect(() => {
    document.title = `About — ${BRAND.name}`;
  }, []);

  return (
    <div className="w-full bg-white text-[#0d0d0d] selection:bg-[#0d0d0d] selection:text-white">
      {/* 1. Same Signature Opening SVG across all tabs */}
      <div className="bg-white pt-[4.8rem] md:pt-[5.2rem] border-b border-black/10">
        <PageOpeningSVG
          tabName="About"
          tabIndex="03"
          theme="light"
          subtitle="ART DIRECTION & CREATIVE DEVELOPMENT"
        />
      </div>

      {/* 2. Upward Scrolling Hero Headline & Bio */}
      <section className="w-full bg-white py-[8vh] border-b border-black/10">
        <div className="wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <Lines
              className="t-super txt-shade font-display font-bold uppercase text-[#0d0d0d]"
              lines={[
                <span key="a" className="block">I make</span>,
                <span key="b" className="block">
                  <span className="em-serif font-normal tracking-normal">websites</span>
                </span>,
                <span key="c" className="block pl-[10vw]">that refuse</span>,
                <span key="d" className="block">to be quiet.</span>,
              ]}
            />
          </div>
          <div className="md:col-span-4">
            <TiltImage
              src="/img/1.png"
              alt="Studio portrait asset"
              ratio="4 / 5"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 3. Studio Philosophy & Approach */}
      <section className="w-full bg-beige py-[10vh] border-b border-black/10">
        <div className="wrapper grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[3/4] w-full rounded-lg overflow-hidden shadow-xl">
              <Flip imgA="/img/2.png" imgB="/img/concept-2.png" dir="vertical" ratio="3 / 4" />
            </div>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-2 font-edit text-[1.2rem] font-light italic text-[#0d0d0d]/70">
                <Compass size={18} />
                <span>Studio Origin & Philosophy · {BRAND.location}</span>
              </div>
              <p className="font-edit text-[clamp(1.2rem,min(2vw,3.5vh),1.95rem)] font-normal leading-[1.45] text-[#0d0d0d] mt-3">
                I am a creative developer based in {BRAND.location}. I make websites that behave
                like places — editorial, cinematic, occasionally strange, always built with
                intention. My work sits between art direction and motion engineering: I do not
                separate design from code, and I do not ship anything I would not show my favourite teacher.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 font-grot text-[0.75rem] uppercase tracking-[0.22em] text-[#0d0d0d]/70">
                <span className="px-3.5 py-1.5 rounded-full border border-black/20 bg-white/60">One project per quarter</span>
                <span className="px-3.5 py-1.5 rounded-full border border-black/20 bg-white/60">Custom typography</span>
                <span className="px-3.5 py-1.5 rounded-full border border-black/20 bg-white/60">Tactile motion</span>
                <span className="px-3.5 py-1.5 rounded-full border border-black/20 bg-white/60">Rooted in {BRAND.location}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Full-width Pan Image */}
      <section className="w-full h-[65vh] md:h-[80vh] overflow-hidden">
        <PanImage src="/img/3.png" alt="EXACTIV is RighT — Visual Realm" />
      </section>

      {/* 5. Studio Guiding Principles (Extended Section) */}
      <section className="w-full bg-[#f8f7f4] py-[10vh] border-b border-black/10">
        <div className="wrapper">
          <div className="max-w-2xl mb-10">
            <span className="font-edit text-[1.15rem] font-light italic text-[#0d0d0d]/70">
              (Studio Principles)
            </span>
            <h3 className="t-super txt-shade font-display font-light uppercase mt-1">
              The Non-Negotiables
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRINCIPLES.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-xl border border-black/10 bg-white shadow-sm flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-edit text-[1.1rem] font-light">0{idx + 1}</span>
                    {p.icon}
                  </div>
                  <h4 className="t-l font-display font-light uppercase mt-4">{p.title}</h4>
                </div>
                <p className="p-sm font-grot text-[#0d0d0d]/80 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Skills & Capabilities Upward Grid */}
      <section className="w-full bg-white py-[10vh] border-b border-black/10">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <span className="font-edit text-[1.1rem] font-light italic text-[#0d0d0d]/70">(Technical Craft)</span>
              <h3 className="t-l txt-shade-red-soft font-display font-light uppercase mt-1">
                Skills & Disciplines
              </h3>
              <p className="p-sm mt-3 font-grot max-w-[44ch] text-[#0d0d0d]/80 leading-relaxed">
                The stack is intentional. I focus on engineering tools that enable fluid 60fps animations, WebGL shaders,
                and bespoke typography architectures.
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-grot text-[0.85rem] uppercase tracking-[0.18em]">
                {SKILLS.map((s, idx) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded border border-black/15 bg-beige/30 flex items-center gap-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#0d0d0d]" />
                    <span>{s}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Capabilities List */}
          <div className="border-t border-black/10 pt-10">
            <span className="font-edit text-[1.1rem] font-light italic text-[#0d0d0d]/70">(Core Capabilities)</span>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((c, i) => (
                <motion.div
                  key={c.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-6 rounded-lg border border-black/10 bg-powder/20 flex flex-col justify-between gap-4 group hover:border-black/30 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-edit text-[1.2rem] font-light">{c.n}</span>
                      <img src={c.img} alt="" className="h-10 w-10 object-cover rounded-full border border-black/10" />
                    </div>
                    <h4 className="t-l font-display font-light uppercase mt-3 txt-shade">
                      {c.title}
                    </h4>
                  </div>
                  <p className="p-sm font-grot text-[#0d0d0d]/80">
                    {c.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Timeline Section */}
      <section className="w-full bg-[#121212] text-white py-[10vh]">
        <div className="wrapper max-w-5xl mx-auto">
          <span className="font-edit text-[1.1rem] font-light italic text-white/70">(Trajectory)</span>
          <h3 className="t-super txt-shade-light font-display font-light uppercase mt-1 mb-8">
            Experience Timeline
          </h3>
          <div className="divide-y divide-white/15">
            {TIMELINE.map((t, idx) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="grid grid-cols-12 items-baseline py-6 gap-4"
              >
                <span className="col-span-3 font-edit text-[1.8rem] font-light tabular-nums text-white/90">
                  {t.year}
                </span>
                <span className="col-span-9 p-sm font-grot text-white/80 leading-relaxed">
                  {t.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Comprehensive Gallery Exhibition (Using all numbered 01-14 and concept artworks with 3D Tilt) */}
      <section className="w-full bg-coral py-[10vh] text-[#0d0d0d]">
        <div className="wrapper">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-edit text-[1.15rem] font-light italic">(Visual Gallery)</span>
            <h2 className="t-super txt-shade font-display font-light uppercase mt-1">
              Inspiration & Form
            </h2>
            <p className="p-sm font-grot mt-2 opacity-85">
              An uninhibited survey of digital sculpture, armor textures, and atmospheric imagery.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[...ALL_NUMBERED_IMAGES, ...ALL_CONCEPT_IMAGES].slice(0, 16).map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.05 }}
                className="rounded overflow-hidden shadow-lg border border-black/10 bg-black/10 group"
              >
                <TiltImage
                  src={src}
                  alt={`Artwork ${idx + 1}`}
                  ratio="4 / 5"
                  className="h-full w-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Closing CTA */}
      <section className="w-full bg-beige py-[10vh] text-center">
        <div className="wrapper max-w-3xl mx-auto">
          <span className="font-edit text-[1.2rem] font-light italic text-[#0d0d0d]/75">
            (One project per quarter — write early)
          </span>
          <h2 className="t-super txt-shade font-display font-light uppercase mt-2 mb-6">
            Ready to Begin?
          </h2>
          <Link
            to="/contact"
            className="btn-pill btn-pill--xl font-edit font-light"
            data-cursor="Write"
          >
            <span>Start a conversation</span>
          </Link>
        </div>
      </section>

      <Footer bg="bg-beige" />
    </div>
  );
}
