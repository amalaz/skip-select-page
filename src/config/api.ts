export const API_CONFIG = {
  BASE_URL: 'https://app.wewantwaste.co.uk/api',
  ENDPOINTS: {
    SKIPS: '/skips/by-location',
  },
  DEFAULT_PARAMS: {
    postcode: 'NR32',
    area: 'Lowestoft',
  },
} as const;

export const getSkipsUrl = () => {
  const params = new URLSearchParams(API_CONFIG.DEFAULT_PARAMS);
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SKIPS}?${params.toString()}`;
}; 