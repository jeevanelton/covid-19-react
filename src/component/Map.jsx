import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./css/map.css";
import { showDataOnMap } from "../utils/util";

const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy;<a href="http://osm.org/copyright">OpenStreetMap</a>contributions'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
};

export default Map;
