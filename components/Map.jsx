import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
   
  }));

  const center = getCenter(coordinates);


  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude ,
    zoom: 9 ,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/echaimi/clpkpars100tc01o90ezw45lx"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-12}
            offsetTop={-10}
          >
            <a
              onClick={() => {
                setSelectedLocation(result);
              }}
            >
              <p
                role="img"
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="red"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                
                </svg>
              </p>
            </a>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              <strong>{result.title}</strong>
              <img src={result.img} alt={result.title} style={{ width: 'fill', height: '200px' }} />
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
