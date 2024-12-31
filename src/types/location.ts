export interface Location {
  lat: number;
  lng: number;
}

export interface Address {
  id: string;
  type: 'home' | 'office' | 'other';
  formattedAddress: string;
  location: Location;
  details: {
    houseNumber?: string;
    apartment?: string;
    landmark?: string;
  };
  isFavorite: boolean;
}