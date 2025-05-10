import React from 'react';
import type { Skip } from './SkipSelectionPage';
import './SkipCard.css';

interface SkipCardProps {
  skip: Skip;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip }) => {
  const totalPrice = skip.price_before_vat + skip.vat;
  return (
    <div className={`skip-card${!skip.allowed_on_road ? ' not-allowed' : ''}`}>
      <div className="skip-card-image">
        <img src="/vite.svg" alt={`${skip.size} Yard Skip`} />
        <span className="skip-size-badge">{skip.size} Yards</span>
      </div>
      <div className="skip-card-content">
        <h2>{skip.size} Yard Skip</h2>
        <p>{skip.hire_period_days} day hire period</p>
        <p className="skip-card-price">£{totalPrice}</p>
        {!skip.allowed_on_road && (
          <div className="skip-card-warning">⚠️ Not Allowed On The Road</div>
        )}
        <button className="skip-card-select">Select This Skip →</button>
      </div>
    </div>
  );
};

export default SkipCard; 