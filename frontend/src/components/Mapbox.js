import React, { useEffect, useRef } from 'react';
// import ReactDOM, { render } from 'react-dom';
import mapboxgl from 'mapbox-gl';


const REACT_APP_MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN
mapboxgl.accessToken = REACT_APP_MAP_TOKEN
// let match = response.body.features[0]


const Mapbox = ({lat, lng}) => {
  let mapContainer = useRef(null);

  function renderMap() {
      const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 12
      });
  }

  useEffect(() => {
      renderMap()
  }, [lat, lng])
  
  return (
      <div>
       <div ref={el => mapContainer = el} className="mapContainer" />
      </div>
  )         

}


export default Mapbox;