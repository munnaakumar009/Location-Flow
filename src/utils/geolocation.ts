export const GeolocationErrors = {
  PERMISSION_DENIED: 1,
  POSITION_UNAVAILABLE: 2,
  TIMEOUT: 3,
} as const;

export const getGeolocationErrorMessage = (error: GeolocationPositionError) => {
  switch (error.code) {
    case GeolocationErrors.PERMISSION_DENIED:
      return "Location permission was denied. Please enable location access in your browser settings.";
    case GeolocationErrors.POSITION_UNAVAILABLE:
      return "Unable to determine your location. Please check your device's location settings or try again.";
    case GeolocationErrors.TIMEOUT:
      return "Location request timed out. Please try again.";
    default:
      return "An error occurred while getting your location. Please try again.";
  }
};