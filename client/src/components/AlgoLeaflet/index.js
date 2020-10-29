/* packages à installer: yarn add leaflet react-leaflet algolia-places-react'
Tests OK, fonctionnel */
import React, { useState, useEffect } from 'react';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
import AlgoliaPlaces from 'algolia-places-react';
import PropTypes from 'prop-types';
import { appId, apiKey, mapBoxToken } from 'src/config';
import './style.scss';

const AlgoLeaflet = ({
  isMapRequired, isAdressInputRequired, setLocationData, mapPositionToDisplay,
}) => {
  const [currentPosition, setPosition] = useState([mapPositionToDisplay.x, mapPositionToDisplay.y]);
  // useEffect(() => {
  //   console.log('changement de position');
  //   // insertMarker(currentPosition);
  // }, [currentPosition]);

  return (
    <div className="algolia-container">
      {(isAdressInputRequired) ? (
        <AlgoliaPlaces
          className="inputalgolia"
          placeholder="Saisissez le lieu"
          options={{
            appId, // Token Algolia Application id
            apiKey, // Token Algolia API key
            useDeviceLocation: false,

          }}
          onChange={({ suggestion }) => {
            console.log(suggestion);
            // setlocationData({ accomodationLatLng: suggestion.latlng });
            setLocationData({
              city: suggestion.city,
              latLong: suggestion.latlng,
            });
          }}
          onClear={() => setPosition(null)}
        />
      ) : null}

      {(isMapRequired) ? ( // affiche la carte en cas de valeur à true, sinon ne l'affiche pas
        <Map
          className="map"
          center={currentPosition}
          zoom={13}
          maxZoom={20}
          style={{ height: '332px', width: '332px' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapBoxToken}`}
            id="mapbox/streets-v11"
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <Marker position={currentPosition} draggable>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
        </Map>
      ) : null}

    </div>
  );
};

AlgoLeaflet.defaultProps = {
  mapPositionToDisplay: {
    x: 0,
    y: 0,
  },
};

AlgoLeaflet.propTypes = {
  isMapRequired: PropTypes.bool.isRequired,
  isAdressInputRequired: PropTypes.bool.isRequired,
  setLocationData: PropTypes.func.isRequired,
  mapPositionToDisplay: PropTypes.object,
};

export default AlgoLeaflet;
