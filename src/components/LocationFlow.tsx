import React, { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { LocationPermissionModal } from './LocationPermissionModal';
import { Map } from './Map';
import { AddressForm } from './AddressForm';
import { MapPin, Search } from 'lucide-react';
import { GOOGLE_MAPS_CONFIG } from '../config/maps';
import { useLocation } from '../hooks/useLocation';
import { ErrorMessage } from './ErrorMessage';

export function LocationFlow() {
  const [showPermissionModal, setShowPermissionModal] = useState(true);
  const [showAddressForm, setShowAddressForm] = useState(false);
  
  const {
    currentLocation,
    formattedAddress,
    error,
    handleLocationUpdate,
    getAddressFromCoordinates
  } = useLocation();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_CONFIG.apiKey,
    libraries: GOOGLE_MAPS_CONFIG.libraries,
  });

  if (loadError) {
    return <ErrorMessage message="Error loading Google Maps" />;
  }

  if (!isLoaded) {
    return <div>Loading maps...</div>;
  }

  const handleEnableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          handleLocationUpdate(location);
          getAddressFromCoordinates(location);
          setShowPermissionModal(false);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  const handleSearchManually = () => {
    setShowPermissionModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {error && <ErrorMessage message={error} />}
      
      {showPermissionModal && (
        <LocationPermissionModal
          onEnableLocation={handleEnableLocation}
          onSearchManually={handleSearchManually}
        />
      )}

      {!showPermissionModal && !showAddressForm && (
        <div className="max-w-2xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Map 
              center={currentLocation} 
              onMarkerDragEnd={(e) => {
                if (e.latLng) {
                  const newLocation = {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng(),
                  };
                  handleLocationUpdate(newLocation);
                  getAddressFromCoordinates(newLocation);
                }
              }} 
            />
            <div className="p-4">
              <p className="text-gray-600 mb-4">{formattedAddress}</p>
              <div className="space-y-3">
                <button
                  onClick={handleEnableLocation}
                  className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Locate Me
                </button>
                <button
                  onClick={() => setShowAddressForm(true)}
                  className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Search className="w-5 h-5" />
                  Enter Complete Address
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddressForm && (
        <div className="max-w-2xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-md">
            <AddressForm
              initialLocation={currentLocation}
              formattedAddress={formattedAddress}
              onSave={() => setShowAddressForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}