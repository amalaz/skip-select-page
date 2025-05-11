import { useState, useCallback } from 'react';

export function useSkipSelection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectSkip = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  const deselectSkip = useCallback(() => {
    setSelectedId(null);
  }, []);

  return {
    selectedId,
    selectSkip,
    deselectSkip,
    isSelected: (id: number) => selectedId === id,
  };
} 