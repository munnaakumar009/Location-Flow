import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

interface MapProps {
  center: google.maps.LatLngLiteral;
  onMarkerDragEnd: (e: google.maps.MapMouseEvent) => void;
}

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export const Map: React.FC<MapProps> = ({ center, onMarkerDragEnd }) => {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
      options={options}
    >
      <Marker
        position={center}
        draggable={true}
        onDragEnd={onMarkerDragEnd}
      />
    </GoogleMap>
  );
};