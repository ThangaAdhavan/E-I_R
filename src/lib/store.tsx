import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

type UIState = {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  modalOpen: boolean;
  modalPreset: string;
  openModal: (preset?: string) => void;
  closeModal: () => void;
  ready: boolean;
  setReady: (v: boolean) => void;
};

const Ctx = createContext<UIState | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPreset, setModalPreset] = useState('');
  const [ready, setReady] = useState(false);

  const openModal = useCallback((preset = '') => {
    setModalPreset(preset);
    setModalOpen(true);
  }, []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const value = useMemo(
    () => ({ menuOpen, setMenuOpen, modalOpen, modalPreset, openModal, closeModal, ready, setReady }),
    [menuOpen, modalOpen, modalPreset, openModal, closeModal, ready]
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useUI(): UIState {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useUI must be used inside UIProvider');
  return ctx;
}
