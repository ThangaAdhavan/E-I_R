import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Reveal from '../components/Reveal';
import PageOpeningSVG from '../components/PageOpeningSVG';
import { BRAND } from '../data/site';

const DOCS: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: 'Privacy policy',
    body: [
      `Personal data provided through the contact form on this website will be processed by ${BRAND.name} for the sole purpose of handling your enquiry and keeping you informed about ongoing work.`,
      'The legal basis for this processing is your express consent. Data will not be passed on to third parties except where legally required.',
      `You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to ${BRAND.email}.`,
      'We will keep your data only for as long as necessary to handle your enquiry, or for as long as you maintain your consent.',
    ],
  },
  cookies: {
    title: 'Cookie policy',
    body: [
      'This website uses its own and third-party cookies to guarantee its correct operation, analyse browsing behaviour and display multimedia content.',
      'Technical cookies are essential for browsing and do not require consent. Analytics and customisation cookies are only installed if you expressly accept them.',
      'You can configure or reject the use of cookies from the consent banner, and delete them at any time from your browser settings.',
      `For any questions about the use of cookies, write to us at ${BRAND.email}.`,
    ],
  },
};

export default function Legal({ doc }: { doc: string }) {
  const d = DOCS[doc] ?? DOCS['privacy'];

  useEffect(() => {
    document.title = `${d.title} — ${BRAND.name}`;
  }, [d]);

  return (
    <div className="w-full bg-white text-[#0d0d0d]">
      <div className="pt-[4.8rem] md:pt-[5.2rem] border-b border-black/10">
        <PageOpeningSVG
          tabName="Legal"
          tabIndex="05"
          theme="light"
          subtitle="TERMS · POLICIES · COMPLIANCE"
        />
      </div>

      <section className="w-full py-[10vh]">
        <div className="wrapper grid w-full gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="p-l font-edit font-light">(Legal Document)</div>
            <h1 className="t-super txt-shade mt-4 font-display font-light uppercase">{d.title}</h1>
            <div className="mt-[6vh] hidden md:block">
              <Link to="/" aria-label={`${BRAND.name} — index`}>
                <Logo style={{ fontSize: 'clamp(2.4rem, min(9vw, 12vh), 9rem)' }} />
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              {d.body.map((p, i) => (
                <p key={i} className="p-l mb-5 font-edit font-light leading-[1.55]">
                  {p}
                </p>
              ))}
              <p className="p-sm mt-6 font-grot uppercase tracking-[0.2em] text-[#0d0d0d]/55">
                {BRAND.name} · {BRAND.location} · © {BRAND.year}
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer bg="bg-beige" />
    </div>
  );
}
