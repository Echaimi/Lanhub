import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const SingleMap = ({ long, lat, title, img }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Initial viewport setup
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: lat,
    longitude: long,
    zoom: 13,
  });

  console.log(long)
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/echaimi/clpkpars100tc01o90ezw45lx"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker
        latitude={lat}
        longitude={long}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <a
          onClick={() => setSelectedLocation({ long, lat, title, img })}
          aria-label="marker"
        >
          {/* Marker Icon here */}
        </a>
      </Marker>

      {selectedLocation && (
        <Popup
          onClose={() => setSelectedLocation(null)}
          closeOnClick={true}
          latitude={lat}
          longitude={long}
        >
          <div>
            <strong>{title}</strong>
            {img && <img src={img} alt={title} style={{ width: '100%', height: '200px' }} />}
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default SingleMap;
