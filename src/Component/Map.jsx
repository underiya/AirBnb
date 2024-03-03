import React, { useEffect, useRef } from 'react';

const Map = ({ lat, long }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat, lng: long },
      zoom: 15,
    });

    new window.google.maps.Marker({
      position: { lat, lng: long },
      map,
    });
  }, [lat, long]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
