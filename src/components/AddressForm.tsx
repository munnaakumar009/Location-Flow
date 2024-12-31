import React, { useState } from 'react';
import { Home, Building2, Users, Star } from 'lucide-react';
import { Address } from '../types/location';
import { useAddressStore } from '../store/useAddressStore';

interface AddressFormProps {
  initialLocation: google.maps.LatLngLiteral;
  formattedAddress: string;
  onSave: () => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  initialLocation,
  formattedAddress,
  onSave,
}) => {
  const addAddress = useAddressStore((state) => state.addAddress);
  const [type, setType] = useState<'home' | 'office' | 'other'>('home');
  const [details, setDetails] = useState({
    houseNumber: '',
    apartment: '',
    landmark: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newAddress: Address = {
      id: Date.now().toString(),
      type,
      formattedAddress,
      location: initialLocation,
      details,
      isFavorite: false,
    };
    
    addAddress(newAddress);
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Save Address</h2>
        <p className="text-gray-600 mb-4">{formattedAddress}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            House/Flat/Block No.
          </label>
          <input
            type="text"
            value={details.houseNumber}
            onChange={(e) =>
              setDetails({ ...details, houseNumber: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Apartment/Road/Area
          </label>
          <input
            type="text"
            value={details.apartment}
            onChange={(e) =>
              setDetails({ ...details, apartment: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Landmark (Optional)
          </label>
          <input
            type="text"
            value={details.landmark}
            onChange={(e) =>
              setDetails({ ...details, landmark: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Save as
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setType('home')}
            className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
              type === 'home'
                ? 'bg-blue-500 text-white'
                : 'border border-gray-300'
            }`}
          >
            <Home className="w-5 h-5" />
            Home
          </button>
          <button
            type="button"
            onClick={() => setType('office')}
            className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
              type === 'office'
                ? 'bg-blue-500 text-white'
                : 'border border-gray-300'
            }`}
          >
            <Building2 className="w-5 h-5" />
            Office
          </button>
          <button
            type="button"
            onClick={() => setType('other')}
            className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
              type === 'other'
                ? 'bg-blue-500 text-white'
                : 'border border-gray-300'
            }`}
          >
            <Users className="w-5 h-5" />
            Other
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Save Address
      </button>
    </form>
  );
};