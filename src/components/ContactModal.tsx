import { useEffect, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useUI } from '../lib/store';
import { startScroll, stopScroll } from '../lib/scroll';

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function ContactModal() {
  const { modalOpen, closeModal, modalPreset } = useUI();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (modalOpen) stopScroll();
    else startScroll();
    if (!modalOpen) setTimeout(() => setSent(false), 500);
  }, [modalOpen]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          key="cmodal"
          className="fixed inset-0 z-[120] flex items-end justify-center md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={closeModal} />
          <motion.div
            className="relative max-h-[92vh] w-full max-w-[620px] overflow-y-auto bg-white px-6 py-10 md:px-12 md:py-12"
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            data-lenis-prevent
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/20 transition-colors hover:bg-black hover:text-white"
            >
              <X size={16} strokeWidth={1.5} />
            </button>

            <div className="font-edit text-[1rem] font-light">(Contact)</div>
            <h3 className="mt-2 text-center font-display text-[clamp(2rem,4.5vw,3rem)] font-light uppercase leading-[1.05] tracking-[-0.02em]">
              Unlock
              <br />
              your dream
            </h3>

            {sent ? (
              <div className="mt-10 text-center">
                <p className="font-edit text-[1.5rem] font-light italic">Thank you for reaching out.</p>
                <p className="mx-auto mt-4 max-w-[38ch] p-l font-grot">
                  We've received your enquiry. Our team will get back to you within 24 business hours.
                </p>
                <button onClick={() => setSent(false)} className="btn-pill mt-8 font-grot text-[0.85rem]">
                  <span>Send another enquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-6">
                {modalPreset && (
                  <p className="p-sm font-grot uppercase tracking-wide text-black/60">
                    Enquiry about: <span className="text-black">{modalPreset}</span>
                  </p>
                )}
                <input required name="name" placeholder="Full name *" className="field" autoComplete="name" />
                <input required type="email" name="email" placeholder="Email *" className="field" autoComplete="email" />
                <input name="phone" placeholder="Phone" className="field" autoComplete="tel" />
                <textarea name="message" placeholder="Tell us what you're looking for…" rows={3} className="field resize-none" />
                <label className="flex cursor-pointer items-start gap-3 p-sm font-grot text-black/70">
                  <input required type="checkbox" className="mt-1 accent-black" />
                  I have read and accept the privacy policy.
                </label>
                <button type="submit" className="btn-pill btn-pill--xl mx-auto mt-2 font-edit font-light">
                  <span>Request information</span>
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
