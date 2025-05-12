'use client';

import React from 'react';
import SkipCard from '@/components/SkipCard';
import { useSkips } from '@/hooks/useSkips';
import { useSkipSelection } from '@/hooks/useSkipSelection';
import Stepper from '@/components/Stepper';
import BottomBar from '@/components/BottomBar';
import { SkipSelectionProvider } from '@/context/SkipSelectionContext';

const SkipSelectionPageContent: React.FC = () => {
  const { data: skips, isLoading, isError } = useSkips();
  const { selectedId, selectSkip, deselectSkip, isSelected } = useSkipSelection();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#141416]">
        <div className="text-xl text-gray-400">Loading skips...</div>
      </div>
    );
  }

  if (isError || !skips) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#141416]">
        <div className="text-xl text-red-600">Failed to load skips</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141416]">
      <Stepper />
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Choose Your Skip Size</h1>
            <p className="text-gray-400">Select the skip size that best suits your needs</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              selected={isSelected(skip.id)}
              onSelect={() => selectSkip(skip.id)}
              onDeselect={deselectSkip}
            />
          ))}
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

const SkipSelectionPage: React.FC = () => {
  return (
    <SkipSelectionProvider>
      <SkipSelectionPageContent />
    </SkipSelectionProvider>
  );
};

export default SkipSelectionPage; 