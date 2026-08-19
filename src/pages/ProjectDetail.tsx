import { useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECT_DETAILS } from '../data/site';
import { scrollToTarget } from '../lib/scroll';
import Lines from '../components/Lines';
import Reveal from '../components/Reveal';
import Flip from '../components/Flip';
import PanImage from '../components/MapImage';
import Footer from '../components/Footer';
import PageOpeningSVG from '../components/PageOpeningSVG';

const BG: Record<string, string> = {
  beige: 'bg-beige text-[#0d0d0d]',
  graphite: 'bg-graphite text-white',
  powder: 'bg-powder text-[#0d0d0d]',
  coral: 'bg-coral text-[#0d0d0d]',
  olive: 'bg-olive text-[#0d0d0d]',
};

export default function ProjectDetail({ slug }: { slug: string }) {
  const d = PROJECT_DETAILS[slug];
  const location = useLocation();

  useEffect(() => {
    if (d) document.title = `${d.name} — EXACTIV is RighT`;
  }, [d]);

  useEffect(() => {
    if (location.hash === '#meta') {
      const t = setTimeout(() => scrollToTarget('#meta'), 500);
      return () => clearTimeout(t);
    }
  }, [location.hash, slug]);

  if (!d) return <Navigate to="/work" replace />;
  const bg = BG[d.bg] || 'bg-beige text-[#0d0d0d]';
  const isDark = d.bg === 'graphite';
  const shade = isDark ? 'txt-shade-light' : 'txt-shade';

  return (
    <div className={`w-full ${bg} selection:bg-black selection:text-white`}>
      {/* 1. Same Signature Opening SVG across all tabs */}
      <div className="pt-[4.8rem] md:pt-[5.2rem] border-b border-current/15">
        <PageOpeningSVG
          tabName={d.name}
          tabIndex={d.index}
          theme={isDark ? 'dark' : 'light'}
          subtitle={d.category}
        />
      </div>

      {/* 2. Hero Presentation */}
      <section className="w-full py-[6vh] md:py-[10vh] border-b border-current/15">
        <div className="wrapper">
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-grot text-[0.75rem] uppercase tracking-[0.2em] opacity-75 hover:opacity-100 transition-opacity"
            >
              <ArrowLeft size={16} />
              <span>Back to all work</span>
            </Link>
            <span className="font-edit text-[1.1rem] font-light italic opacity-75">
              ({d.year}) · Case Study {d.index}
            </span>
          </div>

          <div className="text-center my-6">
            <Reveal x={0} y={30}>
              <h1 className="em-serif txt-shade-red text-[clamp(3.4rem,min(12vw,16vh),11rem)] leading-[0.9] tracking-[-0.03em]">
                {d.name}
              </h1>
            </Reveal>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-current/15">
              <img
                src={d.heroImg}
                alt={d.name}
                className="w-full h-auto object-cover max-h-[65vh]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quote & Introduction */}
      <section className="w-full py-[10vh] border-b border-current/15">
        <div className="wrapper max-w-5xl mx-auto">
          <Lines
            className={`t-super font-display font-light uppercase ${shade}`}
            lines={d.quoteLines.map((l, i) => (
              <span key={i} className={`block ${i === 2 ? 'md:text-right' : ''}`}>
                {l}
              </span>
            ))}
          />
          <div className="mt-8 grid md:grid-cols-12">
            <div className="md:col-span-8 md:col-start-5">
              <Reveal>
                <p className="font-edit text-[clamp(1.2rem,min(2vw,3.4vh),1.85rem)] font-light leading-[1.45]">
                  {d.intro}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fullscreen Video Intermission */}
      <section className="w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <PanImage src="/vid/warrior-hero.mp4" video />
      </section>

      {/* 5. Chapter Breakdown & Meta Specifications */}
      <section id="meta" className="w-full py-[10vh] border-y border-current/15">
        <div className="wrapper max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-edit text-[1.15rem] font-light italic">{d.chapterTag}</span>
            <h2 className="t-xl font-display font-light uppercase mt-1">{d.chapterName}</h2>
          </div>

          <Lines
            className={`t-super-xl text-center font-display font-light uppercase ${shade} mb-8`}
            lines={d.chapterTitle.split('|').map((l, i) => (
              <span key={i} className="block">{l}</span>
            ))}
          />

          <div className="p-6 md:p-8 rounded-xl border border-current/15 bg-black/5 mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {d.meta.map((m) => (
                <div key={m.label}>
                  <h4 className="font-grot text-[0.7rem] uppercase tracking-[0.2em] opacity-60">{m.label}</h4>
                  <p className="font-grot text-[0.85rem] font-medium mt-1">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <Reveal>
                <h3 className="t-l font-display font-light uppercase">Protective instinct</h3>
                <p className="p-sm mt-3 font-grot leading-relaxed opacity-90">{d.chapterText}</p>
              </Reveal>
            </div>
            <div className="md:col-span-6">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Flip imgA={d.mediaA} imgB={d.mediaB} ratio="4 / 3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Multi-Image Project Gallery Showcase */}
      {d.gallery && d.gallery.length > 0 && (
        <section className="w-full py-[10vh] bg-black/10 border-b border-current/15">
          <div className="wrapper">
            <div className="mb-8">
              <span className="font-edit text-[1.1rem] font-light italic opacity-75">(Project Imagery Archive)</span>
              <h3 className={`t-super font-display font-light uppercase ${shade} mt-1`}>
                Visual Artifacts & Perspectives
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {d.gallery.map((imgSrc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-current/15 group"
                >
                  <img
                    src={imgSrc}
                    alt={`${d.name} visual ${idx + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Soul Lines & Second Video */}
      <section className="w-full py-[10vh]">
        <div className="wrapper max-w-4xl mx-auto text-center">
          <Lines
            className={`t-super font-display font-light uppercase ${shade}`}
            lines={d.soulLines.map((l, i) => (
              <span key={i} className="block">{l}</span>
            ))}
          />
          <p className="font-edit text-[clamp(1.1rem,min(1.8vw,3vh),1.65rem)] font-light leading-[1.45] mt-6 max-w-2xl mx-auto">
            {d.soulText}
          </p>
        </div>
      </section>

      <section className="w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <PanImage src="/vid/warrior-city.mp4" video />
      </section>

      {/* 8. Live Site & Next Project Navigation */}
      <section className="w-full border-t border-current/15 py-[6vh]">
        <div className="wrapper flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href={`https://${d.url}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 text-left"
            data-cursor="Visit"
          >
            <div>
              <span className="p-l font-edit font-light">Launch live domain</span>
              <div className={`t-xl font-display font-light uppercase ${shade}`}>{d.url}</div>
            </div>
            <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>

          {d.next ? (
            <Link
              to={`/work/${d.next.slug}`}
              className="group flex items-center gap-4 text-right"
              data-cursor="Next"
            >
              <div>
                <span className="p-l font-edit font-light">Next Project</span>
                <div className={`t-xl font-display font-light uppercase ${shade}`}>{d.next.name}</div>
              </div>
              <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          ) : (
            <Link
              to="/work"
              className="btn-pill font-edit font-light"
            >
              <span>Back to all projects</span>
            </Link>
          )}
        </div>
      </section>

      <Footer bg={d.bg === 'graphite' ? 'bg-graphite' : 'bg-beige'} dark={isDark} />
    </div>
  );
}
