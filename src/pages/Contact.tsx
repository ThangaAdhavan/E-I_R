import { useEffect, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Sparkles, HelpCircle, ChevronDown } from 'lucide-react';
import Lines from '../components/Lines';
import Reveal from '../components/Reveal';
import Footer from '../components/Footer';
import PageOpeningSVG from '../components/PageOpeningSVG';
import TiltImage from '../components/TiltImage';
import { BRAND, ALL_CONCEPT_IMAGES } from '../data/site';

const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

const PROJECT_TYPES = [
  'Website (editorial / portfolio)',
  'Brand system & visual identity',
  'Interactive 3D / WebGL experience',
  'Creative development & motion engineering',
  'Other / something strange & ambitious',
];

const FAQS = [
  {
    q: 'How does the one-project-per-quarter model work?',
    a: 'By dedicating full focus to a single client at a time, there are no competing deadlines or account managers. You work directly with me from concept ideation to deployment.',
  },
  {
    q: 'What is the typical project timeline?',
    a: 'Most editorial websites and interactive brand platforms require 6 to 10 weeks from architectural wireframes to final WebGL motion tuning.',
  },
  {
    q: 'Where is the studio located?',
    a: `EXACTIV is RighT operates from ${BRAND.location}, collaborating with visionaries, ateliers, and architectural studios worldwide.`,
  },
  {
    q: 'What technologies are utilized?',
    a: 'React, Next.js, Vite, Three.js, GLSL shaders, GSAP, and custom Lenis spring physics for 60fps kinetic interaction.',
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = `Contact — ${BRAND.name}`;
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="w-full bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      {/* 1. Same Signature Opening SVG across all tabs */}
      <div className="bg-black pt-[4.8rem] md:pt-[5.2rem] border-b border-white/10">
        <PageOpeningSVG
          tabName="Contact"
          tabIndex="04"
          theme="dark"
          subtitle="COMMISSIONS · COLLABORATIONS · INQUIRIES"
        />
      </div>

      {/* 2. Upward Scrolling Hero */}
      <section className="w-full bg-black py-[6vh] md:py-[8vh] border-b border-white/10">
        <div className="wrapper relative">
          <Reveal x={0} y={20}>
            <div className="font-edit text-[clamp(1.1rem,1.8vw,1.6rem)] font-light italic text-white/70">
              (Direct Line · {BRAND.location})
            </div>
          </Reveal>

          <Lines
            className="t-super-xl txt-shade-milk mt-[1.5vh] font-display font-light uppercase"
            lines={[
              <span key="a" className="block">Let&apos;s make</span>,
              <span key="b" className="block">
                <span className="em-serif tracking-normal">something</span>
              </span>,
              <span key="c" className="block pl-[12vw]">strange.</span>,
            ]}
          />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-4">
            <a
              href={`mailto:${BRAND.email}`}
              className="lnk font-edit text-[clamp(1.2rem,2vw,1.8rem)] font-light italic text-emerald-300"
            >
              {BRAND.email}
            </a>
            <span className="font-grot text-[0.72rem] uppercase tracking-[0.25em] text-white/60">
              {BRAND.location} · Replies within 48h
            </span>
          </div>
        </div>
      </section>

      {/* 3. Upward Scrolling Form & Rules Section */}
      <section className="w-full bg-beige py-[10vh] text-[#0d0d0d]">
        <div className="wrapper max-w-6xl mx-auto">
          <div className="grid gap-x-[5vw] gap-y-12 md:grid-cols-12">
            {/* Left Instructions */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <Reveal>
                  <span className="font-edit text-[1.15rem] font-light italic text-[#0d0d0d]/70">
                    (How I Work)
                  </span>
                  <p className="font-edit text-[clamp(1.15rem,min(1.8vw,3.2vh),1.7rem)] font-light leading-[1.45] mt-2">
                    I take on one new project each quarter. If you have something strange, beautiful,
                    and impossible, write to me at <strong className="font-semibold">{BRAND.email}</strong>. I read every email and answer within forty-eight
                    hours, usually with a question rather than a quote.
                  </p>

                  <div className="mt-8 space-y-2.5 font-grot text-[0.78rem] uppercase tracking-[0.22em] text-[#0d0d0d]/75">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0d0d0d]" />
                      <span>One project per quarter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0d0d0d]" />
                      <span>Direct principal engineering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0d0d0d]" />
                      <span>No generic templates or themes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0d0d0d]" />
                      <span>{BRAND.location} Studio</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Social Channels */}
              <div className="pt-8 border-t border-black/10 mt-8">
                <span className="font-grot text-[0.68rem] uppercase tracking-[0.25em] text-[#0d0d0d]/60 block mb-3">
                  Direct Channels
                </span>
                <div className="flex flex-wrap gap-4">
                  {BRAND.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="lnk font-grot text-[0.8rem] uppercase tracking-[0.2em] font-medium"
                    >
                      {s.label} →
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="md:col-span-7 bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-black/10">
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.55, ease: EASE }}
                      className="flex flex-col items-start gap-4 py-8"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d0d0d] text-white">
                          <Check size={20} strokeWidth={1.6} />
                        </span>
                        <span className="t-xl font-display font-light uppercase">
                          Message dispatched.
                        </span>
                      </div>
                      <p className="p-l font-edit font-light italic leading-relaxed text-[#0d0d0d]/85">
                        Thank you for reaching out to {BRAND.email}. I&apos;ll reply within forty-eight hours —
                        usually with a thoughtful question, occasionally with a calendar link, never with a generic template.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSent(false)}
                        className="btn-pill btn-pill--ghost font-grot text-[0.85rem] mt-4"
                      >
                        <span>Send another enquiry</span>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col gap-6"
                    >
                      {/* Name */}
                      <label className="block">
                        <span className="font-grot text-[0.7rem] uppercase tracking-[0.25em] text-[#0d0d0d]/60 font-semibold">
                          01 — Your Name / Studio
                        </span>
                        <input
                          required
                          name="name"
                          autoComplete="name"
                          placeholder="Your full name"
                          className="field mt-1"
                        />
                      </label>

                      {/* Email */}
                      <label className="block">
                        <span className="font-grot text-[0.7rem] uppercase tracking-[0.25em] text-[#0d0d0d]/60 font-semibold">
                          02 — Contact Email
                        </span>
                        <input
                          required
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="you@domain.com"
                          className="field mt-1"
                        />
                      </label>

                      {/* Project Type */}
                      <div>
                        <span className="font-grot text-[0.7rem] uppercase tracking-[0.25em] text-[#0d0d0d]/60 font-semibold">
                          03 — Project Classification
                        </span>
                        <div className="mt-3 flex flex-col gap-2">
                          {PROJECT_TYPES.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setProjectType(t)}
                              className="group flex items-center gap-3 py-1 text-left font-edit text-[1.1rem] font-light italic"
                            >
                              <span
                                className={`flex h-4 w-4 flex-none items-center justify-center rounded-full border transition-all ${
                                  projectType === t
                                    ? 'border-[#0d0d0d] bg-[#0d0d0d]'
                                    : 'border-[#0d0d0d]/30'
                                }`}
                              >
                                {projectType === t && (
                                  <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                                )}
                              </span>
                              <span
                                className={`transition-colors ${
                                  projectType === t ? 'text-[#0d0d0d] font-normal' : 'text-[#0d0d0d]/60'
                                }`}
                              >
                                {t}
                              </span>
                            </button>
                          ))}
                        </div>
                        <input type="hidden" name="project" value={projectType} />
                      </div>

                      {/* Message */}
                      <label className="block">
                        <span className="font-grot text-[0.7rem] uppercase tracking-[0.25em] text-[#0d0d0d]/60 font-semibold">
                          04 — Brief & Vision
                        </span>
                        <textarea
                          required
                          name="message"
                          rows={3}
                          placeholder="Tell me what you're trying to create, timeline, and what makes it extraordinary."
                          className="field mt-1 resize-none"
                        />
                      </label>

                      {/* Consent & Submit */}
                      <label className="flex cursor-pointer items-start gap-3 p-sm font-grot text-[#0d0d0d]/75">
                        <input required type="checkbox" className="mt-1 accent-[#0d0d0d]" />
                        I have read and accept the privacy policy.
                      </label>

                      <button
                        type="submit"
                        className="btn-pill btn-pill--xl group self-start font-edit font-light"
                        data-cursor="Send"
                      >
                        <span className="transition-transform duration-500 group-hover:translate-x-1 inline-block">
                          Dispatch to {BRAND.email}
                        </span>
                        <ArrowRight
                          size={18}
                          strokeWidth={1.5}
                          className="transition-transform duration-500 group-hover:translate-x-1.5"
                        />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Extended FAQ Section */}
      <section className="w-full bg-[#111111] py-[10vh] border-y border-white/10 text-white">
        <div className="wrapper max-w-4xl mx-auto">
          <div className="flex items-center gap-2 font-edit text-[1.2rem] font-light italic text-white/70 mb-2">
            <HelpCircle size={18} className="text-emerald-400" />
            <span>(Engagement Questions)</span>
          </div>
          <h3 className="t-super txt-shade-light font-display font-light uppercase mb-8">
            Frequently Asked
          </h3>

          <div className="divide-y divide-white/15">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="t-l font-display font-light uppercase group-hover:text-emerald-300 transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-emerald-400' : 'text-white/50'}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="p-sm font-grot text-white/75 mt-3 leading-relaxed max-w-3xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Visual Inspiration Showcase Strip with 3D Tilt */}
      <section className="w-full bg-black py-[8vh]">
        <div className="wrapper">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 font-grot text-[0.75rem] uppercase tracking-[0.25em] text-white/70">
              <Sparkles size={14} className="text-emerald-400" />
              <span>Studio Visual Stream · {BRAND.location}</span>
            </div>
            <span className="font-edit text-[0.95rem] font-light italic text-white/50">
              Selected Concept Works
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {ALL_CONCEPT_IMAGES.slice(0, 6).map((img, idx) => (
              <div key={idx} className="rounded overflow-hidden border border-white/10 bg-white/5 group">
                <TiltImage
                  src={img}
                  alt={`Moodboard Concept ${idx + 1}`}
                  ratio="4 / 5"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer bg="bg-black" dark />
    </div>
  );
}
