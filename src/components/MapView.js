// src/components/MapView.js
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';

const customIcon = (iconUrl) =>
  new L.Icon({
    iconUrl,
    iconSize: [35, 35],
    iconAnchor: [17, 34],
  });

const Routing = ({ source, destination }) => {
  const map = useMap();
  const routingRef = useRef(null);

  useEffect(() => {
    if (!map || !source || !destination) return;

    // Clean up previous routing if it exists
    if (routingRef.current) {
      routingRef.current.getPlan().setWaypoints([]);
      map.removeControl(routingRef.current);
      routingRef.current = null;
    }

    const newRouting = L.Routing.control({
      waypoints: [
        L.latLng(source[0], source[1]),
        L.latLng(destination[0], destination[1]),
      ],
      lineOptions: { styles: [{ color: 'blue', weight: 5 }] },
      show: false,
      addWaypoints: false,
      createMarker: (i, wp) => {
        const iconUrl =
          i === 0
            ? 'https://cdn-icons-png.flaticon.com/512/684/684908.png'
            : 'https://cdn-icons-png.flaticon.com/512/252/252025.png';
        return L.marker(wp.latLng, { icon: customIcon(iconUrl) }).bindPopup(
          i === 0 ? 'Source' : 'Destination'
        );
      },
    });

    routingRef.current = newRouting;
    routingRef.current.addTo(map);

    return () => {
      if (routingRef.current) {
        try {
          routingRef.current.getPlan().setWaypoints([]);
          map.removeControl(routingRef.current);
        } catch (err) {
          console.warn('Cleanup failed:', err);
        }
        routingRef.current = null;
      }
    };
  }, [source, destination, map]);

  return null;
};

// ⬇️ Make sure MapView is **outside** of Routing component
const MapView = ({ source, destination }) => {
  const defaultCenter = source || [20.5937, 78.9629]; // fallback to India center

  return (
    <MapContainer
      center={defaultCenter}
      zoom={13}
      scrollWheelZoom
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {source && destination && (
        <Routing source={source} destination={destination} />
      )}
    </MapContainer>
  );
};

export default MapView;
