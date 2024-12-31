// Google Maps configuration
export const GOOGLE_MAPS_CONFIG = {
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  libraries: ["places", "geometry"] as const,
  defaultCenter: {
    lat: 37.7749, // Default to San Francisco
    lng: -122.4194,
  },
  defaultZoom: 15,
};

// Validate Google Maps API key
export const isValidGoogleMapsKey = () => {
  const key = GOOGLE_MAPS_CONFIG.apiKey;
  return typeof key === 'string' && key.length > 0 && key !== 'your_google_maps_api_key_here';
};