import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const LocationInputs = ({ source, setSource, destination, setDestination }) => {
  const [sourceInput, setSourceInput] = useState('');
  const [destinationInput, setDestinationInput] = useState('');

  const geocode = async (place) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
    );
    const data = await response.json();
    if (data[0]) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    }
    return null;
  };

  const handleSearch = async () => {
    const srcCoords = await geocode(sourceInput);
    const destCoords = await geocode(destinationInput);
    if (srcCoords) setSource(srcCoords);
    if (destCoords) setDestination(destCoords);
  };

  const handleSwap = () => {
    const temp = source;
    setSource(destination);
    setDestination(temp);
    setSourceInput(destinationInput);
    setDestinationInput(sourceInput);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <InputGroup className="mb-2">
        <FormControl
          placeholder="Enter Source Location"
          value={sourceInput}
          onChange={(e) => setSourceInput(e.target.value)}
        />
      </InputGroup>

      <Button variant="secondary" className="mb-2" onClick={handleSwap}>
        ⇅
      </Button>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter Destination Location"
          value={destinationInput}
          onChange={(e) => setDestinationInput(e.target.value)}
        />
      </InputGroup>

      <Button variant="primary" onClick={handleSearch}>
        Search Route
      </Button>
    </div>
  );
};

export default LocationInputs;