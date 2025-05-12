'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface SkipSelectionContextType {
  selectedId: number | null;
  selectSkip: (id: number) => void;
  deselectSkip: () => void;
  isSelected: (id: number) => boolean;
}

const SkipSelectionContext = createContext<SkipSelectionContextType | undefined>(undefined);

export const SkipSelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectSkip = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  const deselectSkip = useCallback(() => {
    setSelectedId(null);
  }, []);

  const isSelected = useCallback((id: number) => selectedId === id, [selectedId]);

  return (
    <SkipSelectionContext.Provider value={{ selectedId, selectSkip, deselectSkip, isSelected }}>
      {children}
    </SkipSelectionContext.Provider>
  );
};

export function useSkipSelection() {
  const context = useContext(SkipSelectionContext);
  if (!context) {
    throw new Error('useSkipSelection must be used within a SkipSelectionProvider');
  }
  return context;
} 