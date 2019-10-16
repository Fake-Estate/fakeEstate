import React, { Component } from 'react';

// Mapbox
import ReactMapGL, { Popup, NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';
import GeoCoder from 'react-map-gl-geocoder';

// Components
import Info from './Info';

// Stylesheet
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam1naW5vIiwiYSI6ImNrMHh4d3c1YTA0OGozY3FlMXhxeGx0NXkifQ.3O6KjeqmPLIBVJm4S04hOA';

const fullscreenControlStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
}

const navStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
}

const geolocateStyle = {
    position: 'absolute',
    top: 60,
    right: 0,
    margin: 10
}

export default class Mapbox extends Component {
    constructor(){
        super()
        this.state = {
            viewport: {
                height: '100vh',
                width: '100%',
                latitude: 39.419220,
                longitude: -111.950684,
                zoom: 4,
                bearing: 0,
                pitch: 0
            },
            marker: {
                latitude: 40.7608,
                longitude: -111.8910
            },
            popupInfo: null,
            markers: []
        }
    }

    mapRef = React.createRef()

    _onViewportChange = viewport => this.setState({viewport})

    _onGeocoderViewportChange = viewport => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 }

        return this._onViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        })
    }

    _onMarkerDragEnd = event => {
        this._logDragEvent('onDragEnd', event)
        this.setState({
            marker: {
                longitude: event.lngLat[0],
                latitude: event.lngLat[1]
            }
        })
    }

    _renderPopup(popup){
        const {popupInfo} = this.props
        return(
            popupInfo && (
                <Popup
                    tipSize={5}
                    anchor='top'
                    longitude={+popup.longitude}
                    latitude={+popup.latitude}
                    closeOnClick={false}
                    onClose={this.props.clearPopupInfo}
                >
                    <Info info={popupInfo} />
                </Popup>
            )
        )
    }

    render() {
        const { viewport } = this.state
        const { pins, renderCityMarker } = this.props
        return (
            <div className='mapbox-container'>
                <ReactMapGL
                    ref={this.mapRef}
                    {...viewport}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    onViewportChange={this._onViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                >
                    <GeoCoder 
                        mapRef={this.mapRef}
                        onViewportChange={this._onGeocoderViewportChange}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                    />

                    {pins.map(renderCityMarker)}

                    {this.props.popupInfo && this._renderPopup(this.props.popupInfo)}
                    
                    <GeolocateControl 
                        style={geolocateStyle}
                        positionOptions={{enableHighAccuracy: true}}
                        trackUserLocation={true}
                    />

                    <div className='fullscreen' style={fullscreenControlStyle}>
                        <FullscreenControl />
                    </div>

                    <div className='nav' style={navStyle}>
                        <NavigationControl />
                    </div>

                </ReactMapGL>
            </div>
        )
    }
}