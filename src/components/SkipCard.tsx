'use client';

import React from 'react';
import Image from 'next/image';
import { Skip } from '@/types/skip';

interface SkipCardProps {
  skip: Skip;
  selected: boolean;
  onSelect: () => void;
  onDeselect: () => void;
}

const getSkipImageUrl = (size: number) =>
  `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`;

const SkipCard: React.FC<SkipCardProps> = ({ skip, selected, onSelect, onDeselect }) => {
  const totalPrice = skip.price_before_vat + skip.vat;
  const imageUrl = getSkipImageUrl(skip.size);

  return (
    <div
      className={`bg-[#181A20] rounded-2xl overflow-hidden shadow-lg flex flex-col w-full max-w-[340px] min-w-[260px] border transition-all duration-200 group relative
        ${selected ? 'border-2 border-blue-500 ring-2 ring-blue-500' : 'border-[#23262F]'}
      `}
    >
      <div className="relative w-full aspect-[3/2] bg-[#23262F] rounded-t-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${skip.size} Yard Skip`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={skip.size <= 4}
          placeholder="blur"
          blurDataURL="/images/placeholder-skip.jpg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder-skip.jpg';
          }}
        />
        <span className="absolute top-3 right-3 bg-blue-600 text-xs text-white px-3 py-1 rounded-full font-semibold shadow">
          {skip.size} Yards
        </span>
        {!skip.allowed_on_road && (
          <span className="absolute bottom-3 left-3 flex items-center bg-black/90 text-yellow-400 px-3 py-1 rounded-md font-medium text-xs shadow gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="16" height="16" className="inline-block mr-1"><circle cx="8" cy="8" r="8" fill="#FACC15"/><path d="M8 4v4" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11" r="1" fill="#000"/></svg>
            Not Allowed On The Road
          </span>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (selected) {
              onDeselect();
            } else {
              onSelect();
            }
          }}
          className={`md:hidden absolute top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg transition-all duration-200
            ${selected ? 'bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}`}
          aria-label={selected ? "Deselect skip" : "Select skip"}
        >
          {selected ? '×' : '+'}
        </button>
      </div>
      <div className="flex-1 flex flex-col p-4 pb-0">
        <div className="text-white text-lg font-bold mb-1">{skip.size} Yard Skip</div>
        <div className="text-gray-400 text-sm mb-2">{skip.hire_period_days} day hire period</div>
      </div>
      <div className="relative h-14 mt-auto">
        <div
          className={`absolute left-0 right-0 bottom-0 flex items-center justify-center h-14 transition-all duration-300
            ${selected ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0 group-hover:opacity-0 group-hover:translate-y-2'}
          `}
        >
          <span className="text-blue-500 text-2xl font-bold">£{totalPrice}</span>
        </div>
        <button
          className={`absolute left-0 right-0 bottom-0 flex items-center justify-between h-14 w-full px-6 font-semibold text-base rounded-b-2xl transition-all duration-300
            ${selected ? 'bg-blue-600 text-white border-2 border-blue-400 opacity-100 translate-y-0' : 'bg-blue-600 text-white border-2 border-blue-600 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'}
            shadow-lg z-10
          `}
          style={{ minHeight: '56px' }}
          onClick={e => {
            e.stopPropagation();
            if (selected) {
              onDeselect();
              e.currentTarget.blur();
            } else {
              onSelect();
            }
          }}
          aria-pressed={selected}
        >
          <span className="flex items-center">{selected ? 'Selected' : 'Skip'}<span className="ml-1">→</span></span>
          <span className="text-white text-xl font-bold ml-4">£{totalPrice}</span>
        </button>
      </div>
    </div>
  );
};

export default SkipCard; 