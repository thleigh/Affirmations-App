import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';



const REACT_APP_MAP_TOKEN = process.env.REACT_APP_MAP_TOKEN
mapboxgl.accessToken = REACT_APP_MAP_TOKEN
// let match = response.body.features[0]



class Mapbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: props.lng,
        lat: props.lat,
        zoom: 2
        };
        this.renderMap = this.renderMap.bind();
    }
    componentDidMount() {
        this.renderMap()
    }
    componentDidUpdate(preprops) {
        if (this.props.lat !== preprops.lat || this.props.lng !== preprops.lng ){
            this.renderMap();
        }
    }
    renderMap() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.props.lng, this.props.lat],
        zoom: this.state.zoom
        });
    }

    render() {
        return (
            <div>
            <div ref={el => this.mapContainer = el} className="mapContainer" />
            </div>
            )
            
    }
}

export default Mapbox;