import { useState } from 'react';
import { GOOGLE_MAPS_CONFIG } from '../config/maps';
import { getGeolocationErrorMessage } from '../utils/geolocation';

export function useLocation() {
  const [currentLocation, setCurrentLocation] = useState<google.maps.LatLngLiteral>(
    GOOGLE_MAPS_CONFIG.defaultCenter
  );
  const [formattedAddress, setFormattedAddress] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLocationUpdate = (location: google.maps.LatLngLiteral) => {
    setCurrentLocation(location);
    setError(null);
  };

  const getAddressFromCoordinates = async (location: google.maps.LatLngLiteral) => {
    try {
      const geocoder = new google.maps.Geocoder();
      const result = await geocoder.geocode({ location });
      if (result.results[0]) {
        setFormattedAddress(result.results[0].formatted_address);
      }
    } catch (error) {
      console.error('Error getting address:', error);
      setError('Failed to get address from location');
    }
  };

  return {
    currentLocation,
    formattedAddress,
    error,
    handleLocationUpdate,
    getAddressFromCoordinates,
  };
}