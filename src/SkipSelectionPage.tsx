import React, { useEffect, useState } from 'react';
import SkipCard from './SkipCard';

export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

const SkipSelectionPage: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setSkips(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load skips');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading skips...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Choose Your Skip Size</h1>
      <p>Select the skip size that best suits your needs</p>
      <div className="skip-grid">
        {skips.map(skip => (
          <SkipCard key={skip.id} skip={skip} />
        ))}
      </div>
    </div>
  );
};

export default SkipSelectionPage;