import * as React from "react";
import { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import Pin from '../Elements/Pin';

const MAPBOX_TOKEN = `pk.eyJ1Ijoia2luc2h1a2dvZWwiLCJhIjoiY2tkdHV5ZXMwMzk0YTJ0cm84MmVpeW9jdyJ9.KOMXjo5z5SxLE5RwUJysDg`;
const navStyle = {
  position: "absolute",
  top: 2,
  left: 0,
  padding: "10px"
};
function Map(props) {
  const { data } = props;
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 2,
  });

  return (
    <div style={{width:"100%",height:"700px"}}>
    <ReactMapGL
      {...viewport}
      // width="100%"
      // height="100%"
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Pin data={data || []} />
      <div style={navStyle}>
        <NavigationControl />
      </div>

    </ReactMapGL>
    </div>
  
  );
}

export default Map;
