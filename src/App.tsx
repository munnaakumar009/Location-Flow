import React from 'react';
import { LocationFlow } from './components/LocationFlow';
import { ErrorMessage } from './components/ErrorMessage';
import { isValidGoogleMapsKey } from './config/maps';

export default function App() {
  if (!isValidGoogleMapsKey()) {
    return (
      <ErrorMessage 
        message="Invalid Google Maps API key. Please check your environment configuration." 
      />
    );
  }

  return <LocationFlow />;
}