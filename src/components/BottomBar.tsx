import React from 'react';
import { useSkipSelection } from '@/hooks/useSkipSelection';
import { useSkips } from '@/hooks/useSkips';
import { ArrowRightIcon, CalendarIcon } from '@heroicons/react/24/outline';

const BottomBar: React.FC = () => {
  const { selectedId } = useSkipSelection();
  const { data: skips } = useSkips();
  const selectedSkip = skips?.find((skip) => skip.id === selectedId);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#181A20] border-t border-[#23262F] z-50">
      <div className="mx-auto max-w-md sm:max-w-7xl flex flex-col sm:flex-row items-center justify-between px-2 sm:px-5 py-2 sm:py-4 gap-2 sm:gap-0 min-w-0">
        <div className="flex items-center gap-x-2 sm:gap-x-3 w-full sm:w-auto justify-center sm:justify-start min-w-0">
          {selectedSkip ? (
            <>
              <span className="font-extrabold text-white text-lg sm:text-2xl">{selectedSkip.size} Yard Skip</span>
              <span className="inline-flex items-center bg-blue-600 text-white font-bold text-base sm:text-xl rounded-full px-3 py-0.5 shadow-sm">£{selectedSkip.price_before_vat + selectedSkip.vat}</span>
              <span className="flex items-center text-gray-400 text-sm sm:text-lg font-medium">
                <CalendarIcon className="w-4 h-4 mr-1" />
                {selectedSkip.hire_period_days} day hire
              </span>
            </>
          ) : (
            <span className="text-gray-400">No skip selected</span>
          )}
        </div>
        <div className="flex w-full sm:w-auto flex-col sm:flex-row items-center gap-1 sm:gap-3 min-w-0">
          <button
            className="bg-[#23262F] text-white w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#23262F]/80 transition"
            type="button"
          >
            Back
          </button>
          <button
            className="bg-blue-600 text-white w-full sm:w-auto px-5 sm:px-7 py-2 rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
            type="button"
            disabled={!selectedSkip}
          >
            Continue <ArrowRightIcon className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar; 