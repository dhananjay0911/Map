import React, { useState, useEffect } from 'react';
import MapView from './components/MapView';
import LocationInputs from './components/LocationInputs';

const App = () => {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setSource([latitude, longitude]);
      },
      (error) => console.error('Geolocation error:', error)
    );
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Smart Leaflet Navigation Map</h2>
      <LocationInputs
        source={source}
        setSource={setSource}
        destination={destination}
        setDestination={setDestination}
      />
      <MapView source={source} destination={destination} />
    </div>
  );
};

export default App;