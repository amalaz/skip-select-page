import React from 'react';
import { MapPinIcon, TrashIcon, TruckIcon, ShieldCheckIcon, CalendarIcon, CreditCardIcon } from '@heroicons/react/24/outline';

const steps = [
  { label: 'Postcode', icon: MapPinIcon },
  { label: 'Waste Type', icon: TrashIcon },
  { label: 'Select Skip', icon: TruckIcon },
  { label: 'Permit Check', icon: ShieldCheckIcon },
  { label: 'Choose Date', icon: CalendarIcon },
  { label: 'Payment', icon: CreditCardIcon },
];

const activeStep = 2; // 0-based index, e.g. 2 means 'Select Skip' is active

const Stepper: React.FC = () => {
  return (
    <nav className="sticky top-0 z-30 flex items-center justify-center w-full py-3 sm:py-6 bg-[#181A20] border-b border-[#23262F] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
      <ol className="flex items-center space-x-0 min-w-max px-1 sm:px-2">
        {steps.map((step, idx) => {
          const isCompleted = idx < activeStep;
          const isActive = idx === activeStep;
          const isUpcoming = idx > activeStep;
          const iconBg = isActive
            ? 'bg-blue-600 text-white'
            : isCompleted
            ? 'bg-blue-100 text-blue-600'
            : 'bg-gray-800 text-gray-400';
          const labelColor = isActive
            ? 'text-blue-600 font-bold'
            : isCompleted
            ? 'text-blue-600'
            : 'text-gray-400';
          const connectorColor = isCompleted || isActive ? 'bg-blue-600' : 'bg-gray-700';
          return (
            <React.Fragment key={step.label}>
              <li className="flex flex-col items-center min-w-[40px]">
                <span className={`flex items-center justify-center rounded-full w-6 h-6 sm:w-7 sm:h-7 ${iconBg} transition-colors duration-200`}>
                  <step.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <span className={`mt-0.5 text-xs sm:text-sm ${labelColor} text-center whitespace-nowrap transition-colors duration-200 hidden sm:inline`}>
                  {step.label}
                </span>
              </li>
              {idx < steps.length - 1 && (
                <li className="flex items-center">
                  <span className={`mx-0.5 sm:mx-1 w-5 sm:w-8 h-0.5 rounded-full block ${connectorColor} transition-colors duration-200`}></span>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Stepper; 