import React from 'react';
import { MapPin, Search } from 'lucide-react';

interface LocationPermissionModalProps {
  onEnableLocation: () => void;
  onSearchManually: () => void;
}

export const LocationPermissionModal: React.FC<LocationPermissionModalProps> = ({
  onEnableLocation,
  onSearchManually,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="text-center">
          <MapPin className="w-16 h-16 mx-auto text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Enable Location Services</h2>
          <p className="text-gray-600 mb-6">
            To provide you with the best delivery experience, we need access to your location.
          </p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={onEnableLocation}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Enable Location
          </button>
          
          <button
            onClick={onSearchManually}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Search Manually
          </button>
        </div>
      </div>
    </div>
  );
};