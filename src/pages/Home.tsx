import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ArrowDown } from 'lucide-react';
import { PROJECTS, CAPABILITIES, BRAND } from '../data/site';
import Flip from '../components/Flip';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import Panel from '../components/Panel';
import Footer from '../components/Footer';
import TiltImage from '../components/TiltImage';
import { BrandBadge } from '../components/LogoArt';
import { scrollToTarget } from '../lib/scroll';

/* ------------------------------------------------------------------ Hero styled matching reference image */

function ImageMatchedHero() {
  return (
    <Panel w="w-screen min-w-[100vw]" className="relative flex flex-col md:flex-row h-full bg-[#f6f2ec] text-[#0d0d0d] select-none overflow-hidden">
      {/* Left main compositional area (75% width on desktop) with architectural backdrop */}
      <div className="relative flex-1 flex flex-col justify-between p-6 md:p-10 z-10">
        {/* Subtle background image texture */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply overflow-hidden">
          <img
            src="/img/1.png"
            alt="Architectural space"
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6f2ec] via-[#f6f2ec]/80 to-transparent" />
        </div>

        {/* Top bar: E X A C T I V on left, 'is RighT' in italic serif on right */}
        <div className="relative z-10 flex items-start justify-between w-full">
          <div className="flex flex-col gap-4">
            <span className="font-grot text-[1.1rem] md:text-[1.25rem] font-bold uppercase tracking-[0.35em] text-[#0d0d0d]">
              E X A C T I V
            </span>

            {/* Left sub-navigation with lines and dots */}
            <div className="hidden sm:flex flex-col gap-2.5 mt-2 font-grot text-[0.72rem] uppercase tracking-[0.22em] text-[#0d0d0d]/80 font-medium">
              <Link to="/about" className="flex items-center gap-2.5 group hover:text-black transition-colors">
                <span className="w-16">ABOUT</span>
                <span className="w-12 h-[1px] bg-black/30 group-hover:w-16 group-hover:bg-black transition-all" />
                <span className="h-1.5 w-1.5 rounded-full bg-black flex-none" />
              </Link>
              <Link to="/work" className="flex items-center gap-2.5 group hover:text-black transition-colors">
                <span className="w-16">WORK</span>
                <span className="w-16 h-[1px] bg-black/30 group-hover:w-20 group-hover:bg-black transition-all" />
                <span className="h-1.5 w-1.5 rounded-full bg-black flex-none" />
              </Link>
              <Link to="/contact" className="flex items-center gap-2.5 group hover:text-black transition-colors">
                <span className="w-16">CONTACT</span>
                <span className="w-10 h-[1px] bg-black/30 group-hover:w-14 group-hover:bg-black transition-all" />
                <span className="h-1.5 w-1.5 rounded-full bg-black flex-none" />
              </Link>
            </div>
          </div>

          <div className="font-edit italic font-light text-[1.2rem] md:text-[1.35rem] text-[#0d0d0d]/85">
            is RighT
          </div>
        </div>

        {/* Center Main Typographic Composition */}
        <div className="relative z-10 my-auto py-6 md:py-2">
          <div className="font-grot text-[clamp(3.8rem,min(11vw,14vh),11rem)] font-bold tracking-tight text-[#0d0d0d] leading-[0.88]">
            <div className="block">EXACTIV</div>
            <div className="flex items-baseline flex-wrap gap-y-2">
              <span className="font-edit italic font-normal text-[1.08em] tracking-normal -mt-2">is</span>
              <div className="ml-[14vw] md:ml-[14vw] flex flex-col">
                <span className="text-[0.48em] font-bold leading-none">RighT</span>
                <span className="font-edit italic font-normal text-[0.42em] text-[#0d0d0d]/75 leading-none mt-1">— and</span>
              </div>
              <div className="ml-[10vw] md:ml-[8vw] flex flex-col">
                <span className="font-edit italic font-normal text-[0.42em] text-[#0d0d0d] leading-none">ready</span>
                <span className="text-[0.42em] font-bold leading-none text-[#0d0d0d] mt-1">to begin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: Explore Work button on left, inverted upside-down logo on right */}
        <div className="relative z-10 flex items-end justify-between w-full pt-4">
          <div className="flex flex-col gap-3">
            <Link
              to="/work"
              className="inline-flex items-center gap-3 border border-black/30 bg-white/60 backdrop-blur-md px-6 py-3 rounded-md text-[0.75rem] font-grot font-bold uppercase tracking-[0.24em] text-[#0d0d0d] hover:bg-black hover:text-white transition-all shadow-sm"
              data-cursor="Explore"
            >
              <span>EXPLORE WORK</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Inverted upside-down logo */}
          <div className="flex flex-col items-end leading-none font-grot select-none">
            <span className="font-edit text-[clamp(2.4rem,4.5vw,4.2rem)] font-light italic leading-[0.6] text-[#0d0d0d]">
              is
            </span>
            <span
              className="font-display font-medium text-[clamp(3rem,min(7.5vw,10vh),7.5rem)] uppercase tracking-wider text-[#0d0d0d] inline-block"
              style={{ transform: 'scale(-1, -1)' }}
            >
              RighT<span className="text-[0.4em] align-top">®</span>
            </span>
          </div>
        </div>
      </div>

      {/* Right column (sidebar panel ~25% width on desktop) on warm cream beige background */}
      <div className="relative w-full md:w-[26vw] min-w-[300px] flex-none bg-[#ece4da] border-t md:border-t-0 md:border-l border-black/10 p-6 md:p-8 flex flex-col justify-between z-10">
        {/* Top navigation row */}
        <div>
          <nav className="flex items-center justify-between font-grot text-[0.72rem] uppercase tracking-[0.22em] font-semibold text-[#0d0d0d]">
            <Link to="/" className="border-b-2 border-black pb-0.5 font-bold">
              INDEX
            </Link>
            <Link to="/work" className="text-[#0d0d0d]/70 hover:text-black transition-colors">
              WORK
            </Link>
            <Link to="/about" className="text-[#0d0d0d]/70 hover:text-black transition-colors">
              ABOUT
            </Link>
            <Link to="/contact" className="text-[#0d0d0d]/70 hover:text-black transition-colors">
              CONTACT
            </Link>
          </nav>
          <div className="font-grot text-[0.65rem] uppercase tracking-[0.22em] text-[#0d0d0d]/60 mt-3 text-right">
            EXACTIV IS RIGHT ©{BRAND.year}
          </div>
        </div>

        {/* Center: Spinning Circular Brand Badge */}
        <div className="my-auto py-8 flex flex-col items-center text-center">
          <div className="mb-6">
            <BrandBadge className="h-28 w-28 text-[#0d0d0d]" />
          </div>

          <p className="font-grot text-[clamp(0.75rem,0.92vw,0.85rem)] font-medium leading-relaxed text-[#0d0d0d]/85 max-w-[28ch]">
            I make websites that refuse to be quiet — experimental, editorial, and built to feel like moving through an exhibition rather than browsing a page. Scroll right to enter.
          </p>

          {/* Downward / forward scroll helper */}
          <button
            type="button"
            onClick={() => scrollToTarget(window.innerWidth * 0.95)}
            className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform duration-300 hover:scale-110"
            aria-label="Scroll forward"
            data-cursor="Scroll"
          >
            <ArrowDown size={18} />
          </button>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center justify-between font-grot text-[0.68rem] uppercase tracking-[0.2em] text-[#0d0d0d]/60 border-t border-black/10 pt-3">
          <span>{BRAND.location}</span>
          <span>SCROLL →</span>
        </div>
      </div>
    </Panel>
  );
}

/* -------------------------------------------------------- video loop hero */

function HomeVideoHero() {
  return (
    <Panel w="w-screen md:w-[130vw]" className="relative flex flex-col justify-between bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover opacity-90"
          src="/vid/warrior-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/60" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      <div className="wrapper relative z-10 pt-[5.4rem] md:pt-[6rem]">
        <span className="p-l font-edit text-white/90 italic">(Cinematic Loop)</span>
        <h2 className="t-super txt-shade-light mt-1 font-display font-light uppercase text-white">
          Presence & Power in Motion
        </h2>
      </div>

      <div className="wrapper relative z-10 pb-[4vh]">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="p-sm max-w-[48ch] font-grot text-white/90">
              Living visual motion — moving cloth, polished armor, and sweeping horizons designed to command attention.
            </p>
          </Reveal>
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-grot text-[0.72rem] uppercase tracking-[0.25em] text-white/80">
              HD Seamless Loop Active
            </span>
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* -------------------------------------------------------- image clusters with 3D tilt */

function HeroImages() {
  return (
    <Panel w="w-screen md:w-[125vw]" className="bg-white">
      <div className="wrapper flex h-full items-center gap-[3vw]">
        <Reveal x={90} className="flex-none">
          <div className="h-[56vh] md:h-[72vh] w-auto shadow-2xl rounded overflow-hidden">
            <TiltImage
              src="/img/1.png"
              alt="EXACTIV is RighT — Visual Asset 01"
              ratio="3 / 4"
              className="h-full w-full"
            />
          </div>
        </Reveal>
        <div className="w-[54vw] flex-none md:mt-[16vh] md:w-[30vw]">
          <Flip imgA="/img/2.png" imgB="/img/concept-1.png" ratio="3 / 4" />
        </div>
      </div>
    </Panel>
  );
}

/* --------------------------------------------------------------- Middle Page Manifesto (Clean typography, no elongation) */

function Manifesto() {
  return (
    <Panel w="w-screen md:w-[108vw]" className="flex flex-col justify-center bg-white text-[#0d0d0d]">
      <div className="wrapper w-full">
        <div className="p-l font-edit font-light flex items-center justify-between">
          <span>(Manifesto)</span>
          <span className="font-grot text-[0.68rem] uppercase tracking-[0.24em] text-[#0d0d0d]/60">
            {BRAND.location} Studio
          </span>
        </div>

        <div className="mt-[3vh] grid md:grid-cols-12 gap-6">
          <div className="t-super txt-shade font-display font-light uppercase md:col-span-12 leading-[1]">
            <span className="block">I make websites</span>
            <span className="block">
              that <span className="em-serif tracking-normal">refuse</span>
            </span>
            <span className="block">to be quiet</span>
            <span className="block text-right md:pr-[4vw] font-edit italic lowercase text-[1.1em] text-[#0d0d0d]/90">
              — and neither do I
            </span>
          </div>

          <div className="mt-[3.5vh] md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="p-sm font-grot leading-relaxed text-[#0d0d0d]/90">
                I am a creative developer working at the seam between editorial design and motion
                engineering. Every project is built like a magazine, behaves like an exhibition,
                and refuses to apologise for taking up space. No centred heroes, no card grids, no
                generic SaaS chrome — only typography that means what it says, and motion that earns
                its pixels.
              </p>
              <div className="mt-[3vh] flex flex-wrap gap-x-6 gap-y-2 font-grot text-[0.7rem] uppercase tracking-[0.22em] text-[#0d0d0d]/70">
                <span>Award-aspirational</span>
                <span aria-hidden>·</span>
                <span>{BRAND.location}</span>
                <span aria-hidden>·</span>
                <span>Independent</span>
                <span aria-hidden>·</span>
                <span>2014 → {BRAND.year}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Panel>
  );
}

/* --------------------------------------------------------------- marquee */

function MarqueePanel() {
  return (
    <Panel className="flex items-center bg-black text-white">
      <div className="w-full">
        <Marquee text="DESIGN — DEVELOPMENT — DIRECTION — MOTION" />
      </div>
    </Panel>
  );
}

function BrandMarquee() {
  return (
    <Panel w="w-screen md:w-[88vw]" className="flex items-center bg-beige text-[#0d0d0d]">
      <div className="w-full">
        <Marquee text="EXACTIV is RighT" reverse />
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------ capabilities */

function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const section = ref.current;
    const box = imgRef.current;
    if (!section || !box) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      pos.current.tx = e.clientX - r.left;
      pos.current.ty = e.clientY - r.top;
    };
    const loop = () => {
      const p = pos.current;
      p.x += (p.tx - p.x) * 0.12;
      p.y += (p.ty - p.y) * 0.12;
      box.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    section.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      section.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Panel
      w="w-screen md:w-[115vw]"
      className="flex flex-col justify-center bg-powder text-[#0d0d0d]"
    >
      <section
        ref={ref as never}
        className="relative"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <div
          ref={imgRef}
          className="pointer-events-none absolute left-0 top-0 z-[2] hidden w-[min(22vw,330px)] transition-opacity duration-500 md:block"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded shadow-xl">
            {CAPABILITIES.map((c, i) => (
              <img
                key={c.n}
                src={c.img}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  active === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

        {CAPABILITIES.map((c, i) => (
          <div
            key={c.n}
            className="wrapper grid items-center gap-3 py-[2.6vh] md:grid-cols-12"
            onMouseEnter={() => setActive(i)}
          >
            <p
              className={`p-sm order-2 max-w-[38ch] font-grot transition-opacity duration-500 md:order-1 md:col-span-4 ${
                active === i ? 'opacity-100' : 'opacity-45'
              }`}
            >
              {c.text}
            </p>
            <div className="order-1 flex items-baseline gap-[2vw] md:order-2 md:col-span-8">
              <span className="p-l font-edit font-light">{c.n}</span>
              <h3
                className={`t-super-l uppercase leading-[0.95] transition-all duration-500 ${
                  ['font-edit', 'font-display font-light', 'font-grot'][i % 3]
                } ${active === i ? 'translate-x-3 opacity-100 txt-shade-red' : 'opacity-70 txt-shade'}`}
              >
                {c.title}
              </h3>
            </div>
          </div>
        ))}
      </section>
    </Panel>
  );
}

/* ------------------------------------------------------------ projects */

const CARD_STYLES = [
  { bg: 'bg-beige', text: 'text-[#0d0d0d]', btn: '', shade: 'txt-shade' },
  { bg: 'bg-graphite', text: 'text-white', btn: 'btn-pill--white', shade: 'txt-shade-light' },
  { bg: 'bg-powder', text: 'text-[#0d0d0d]', btn: '', shade: 'txt-shade' },
  { bg: 'bg-olive', text: 'text-[#0d0d0d]', btn: '', shade: 'txt-shade' },
  { bg: 'bg-graphite', text: 'text-white', btn: 'btn-pill--white', shade: 'txt-shade-light' },
];

function ProjectCard({ i }: { i: number }) {
  const p = PROJECTS[i];
  const s = CARD_STYLES[i];
  const inner = (
    <div className="wrapper grid h-full grid-cols-1 content-center gap-4 pt-[9vh] md:grid-cols-12 md:gap-6 md:pt-[12vh]">
      <div
        className="relative overflow-hidden self-center md:col-span-7"
        data-cursor="Open"
      >
        <TiltImage
          src={p.img}
          alt={p.name}
          className="h-[38vh] w-full md:h-[64vh] rounded shadow-xl"
          ratio="16 / 10"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 md:col-span-5 md:gap-6 md:pb-[6vh]">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-8">
          <span className="p-l font-edit font-light">{p.year}</span>
          <span className="p-l font-grot uppercase">{p.category.split('/')[0].trim()}</span>
          <span className="p-sm font-grot">{p.index}</span>
          <span className="btn-pill p-l font-edit font-light">
            <span>Open project</span>
          </span>
        </div>
        <h3 className={`t-2xl font-display font-light uppercase ${s.shade}`}>{p.name}</h3>
      </div>
    </div>
  );

  const card = (
    <section
      className={`panel sticky left-0 h-full w-screen border-l border-black/10 ${s.bg} ${s.text}`}
      style={{ zIndex: i + 1 }}
    >
      {inner}
    </section>
  );

  return (
    <Link key={p.slug} to={`/work/${p.slug}`} className="contents">
      {card}
    </Link>
  );
}

function LastProjectExtras() {
  return (
    <Panel w="w-screen md:w-[150vw]" className="z-[6] border-l border-white/10 bg-graphite text-white">
      <div className="wrapper flex h-full items-center gap-[5vw]">
        {/* mini carousel + view all */}
        <div className="flex flex-none items-end gap-4 md:gap-5">
          <img src="/img/12.png" alt="Project extra" loading="lazy" className="h-[24vh] w-auto object-cover rounded md:h-[34vh]" />
          <img src="/img/13.png" alt="Project extra" loading="lazy" className="h-[24vh] w-auto object-cover rounded md:h-[34vh]" />
          <Link
            to="/work"
            className="btn-circle group flex-col gap-2 self-center transition-transform duration-500 hover:scale-105"
            style={{ background: '#C7D7E9', color: '#0d0d0d' }}
            data-cursor="All"
          >
            <ArrowUpRight size={22} strokeWidth={1.4} className="transition-transform duration-500 group-hover:rotate-45" />
            <span className="t-l font-grot uppercase">View all</span>
          </Link>
        </div>

        {/* closing statement */}
        <div className="w-[64vw] flex-none md:w-[52vw]">
          <div className="p-sm mb-4 font-edit font-light">Selected work</div>
          <div className="t-2xl txt-shade-light font-display font-light uppercase">
            <span>Who said that pleasure cannot be functional</span>
          </div>
          <Reveal className="mt-5 max-w-[46ch]">
            <p className="p-sm font-grot">
              These five projects are the work I am willing to put my name on this year. The rest is
              practice. Scroll right to enter any of them, or use the Work index in the header to
              see the full list.
            </p>
          </Reveal>
        </div>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------- numerical editorial */

function NumericalEditorial() {
  return (
    <Panel w="w-screen md:w-[80vw]" className="flex flex-col items-center justify-center bg-coral text-[#0d0d0d]">
      <Reveal x={0} y={20}>
        <div className="font-edit text-[clamp(1rem,2vw,1.4rem)] font-light italic">
          (Selected projects to date)
        </div>
      </Reveal>
      <div className="mt-[1vh] flex items-baseline gap-[0.15em] font-display font-light leading-none tabular-nums">
        <span className="text-[clamp(8rem,min(38vw,46vh),32rem)] txt-shade-red">05</span>
        <span className="text-[clamp(2rem,min(8vw,9vh),6rem)] text-[#0d0d0d]/45">/ 24</span>
      </div>
      <Reveal delay={0.3}>
        <p className="mt-[1vh] max-w-[40ch] text-center font-grot text-[0.78rem] uppercase tracking-[0.22em] text-[#0d0d0d]/70">
          Five made public · Nineteen under NDA · One ongoing · {BRAND.location}
        </p>
      </Reveal>
    </Panel>
  );
}

/* -------------------------------------------------------------- contact teaser */

function ContactTeaser() {
  return (
    <>
      <Panel className="flex flex-col items-center justify-center bg-beige text-[#0d0d0d]">
        <Reveal x={0} y={20}>
          <div className="t-md text-center font-edit font-light">(Get in touch)</div>
        </Reveal>
        <div className="t-super-xl txt-shade-red-soft mt-[1vh] text-center font-display font-light uppercase">
          <span>Let&apos;s make something strange.</span>
        </div>
      </Panel>

      <Panel w="w-screen md:w-[132vw]" className="bg-beige text-[#0d0d0d]">
        <div className="wrapper flex h-full items-center gap-[5vw]">
          <div className="h-[50vh] w-[42vw] flex-none md:h-[72vh] md:w-[33vw]">
            <Flip imgA="/img/concept-4.png" imgB="/img/concept-5.png" ratio="4 / 5" />
          </div>
          <div className="h-[40vh] w-[34vw] flex-none md:h-[54vh] md:w-[26vw] md:self-end md:pb-[7vh]">
            <Flip imgA="/img/concept-6.png" imgB="/img/concept-7.png" dir="vertical" ratio="3 / 4" />
          </div>
        </div>
      </Panel>

      <Panel w="w-screen md:w-[118vw]" className="flex flex-col justify-center bg-beige text-[#0d0d0d]">
        <div className="wrapper w-full">
          <div className="t-super txt-shade font-display font-light uppercase">
            <span>Exclusivity taken to its fullest</span>
          </div>
          <div className="mt-[3.5vh] grid md:grid-cols-12">
            <div className="md:col-span-6 md:col-start-7">
              <Reveal>
                <p className="font-edit text-[clamp(1.15rem,min(1.9vw,3.4vh),1.8rem)] font-light leading-[1.4]">
                  I take on one new project each quarter. If you have something strange, beautiful,
                  and impossible, write to me. I read every email and answer within forty-eight
                  hours, usually with a question rather than a quote.
                </p>
                <p className="p-l mt-4 font-grot font-medium">{BRAND.email}</p>
                <p className="font-grot text-[0.75rem] uppercase tracking-[0.2em] text-[#0d0d0d]/60 mt-1">
                  Studio located in {BRAND.location}
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal className="mt-[3.5vh] text-center" x={0}>
            <Link to="/contact" className="btn-pill btn-pill--xl font-edit font-light" data-cursor="Write">
              <span>Start a conversation</span>
            </Link>
          </Reveal>
        </div>
      </Panel>
    </>
  );
}

/* ----------------------------------------------------------------- page */

export default function Home() {
  useEffect(() => {
    document.title = `${BRAND.name} — ${BRAND.tagline}`;
  }, []);

  return (
    <>
      <ImageMatchedHero />
      <HomeVideoHero />
      <HeroImages />
      <Manifesto />
      <BlackBlock />
      <MarqueePanel />
      <BrandMarquee />
      <CityVideoLoop />
      <Capabilities />

      {/* projects intro */}
      <Panel w="w-screen md:w-[58vw]" className="flex flex-col justify-center bg-white text-[#0d0d0d]">
        <div className="wrapper w-full">
          <div className="p-l font-edit font-semibold text-[#0d0d0d]">(Selected work)</div>
          <Reveal className="mt-[2.5vh]">
            <p className="p-sm max-w-[46ch] font-grot font-medium text-[#0d0d0d]/90">
              Five projects, each made for a different reason. None of them look like a portfolio —
              they look like the work of someone who refuses to make the same website twice.
            </p>
          </Reveal>
        </div>
      </Panel>

      {/* horizontal sticky stack of the five projects */}
      <div className="relative flex h-full flex-none">
        {PROJECTS.map((_, i) => (
          <ProjectCard key={i} i={i} />
        ))}
        <LastProjectExtras />
      </div>

      {/* coral numerical editorial */}
      <NumericalEditorial />

      {/* closing image strip */}
      <Panel className="flex items-center justify-center bg-coral text-[#0d0d0d]">
        <div className="h-[48vh] w-[80vw] md:h-[66vh] md:w-[56vw]">
          <Flip imgA="/img/concept-8.png" imgB="/img/concept-9.png" ratio="4 / 3" />
        </div>
      </Panel>

      <ContactTeaser />
      <Footer bg="bg-beige" />
    </>
  );
}

/* ----------------------------------------------------------- black block */

function BlackBlock() {
  return (
    <Panel w="w-screen md:w-[168vw]" className="bg-black text-white">
      <div className="wrapper flex h-full items-center gap-[4vw]">
        <div className="h-[62vh] w-[46vw] flex-none md:h-[72vh] md:w-[32vw]">
          <Flip imgA="/img/3.png" imgB="/img/concept-2.png" dir="vertical" ratio="4 / 5" />
        </div>
        <div className="h-[46vh] w-[38vw] flex-none md:w-[24vw] md:self-end md:pb-[6vh]">
          <Flip imgA="/img/4.png" imgB="/img/concept-3.png" ratio="4 / 5" />
        </div>
        <div className="w-[56vw] flex-none self-end pb-[8vh] md:w-[36vw]">
          <Reveal>
            <p className="p-xl font-grot leading-relaxed text-white/95">
              At EXACTIV is RighT® the work is the manifesto — every project is a small
              argument against ordinary web design, made of typography, motion, and refusal. I am
              not interested in templates, trends, or whatever the algorithm currently rewards. I
              am interested in websites that visitors remember a week later, in the way one
              remembers a film.
            </p>
          </Reveal>
        </div>
      </div>
    </Panel>
  );
}

/* --------------------------------------------------------- city video loop */

function CityVideoLoop() {
  return (
    <Panel w="w-screen md:w-[110vw]" className="relative flex flex-col justify-between bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover opacity-90"
          src="/vid/warrior-city.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50" />
      </div>

      <div className="wrapper relative z-10 pt-[5.4rem] md:pt-[6rem]">
        <span className="p-l font-edit text-white/90 italic">(Visionary Realm)</span>
        <h2 className="t-super txt-shade-light mt-1 font-display font-light uppercase text-white">
          Overlooking the Metropolis of Light
        </h2>
      </div>

      <div className="wrapper relative z-10 pb-[4vh]">
        <span className="font-grot text-[0.72rem] uppercase tracking-[0.25em] text-white/80">
          Infinite Cinematic Atmosphere · Continuous Playback · {BRAND.location}
        </span>
      </div>
    </Panel>
  );
}
