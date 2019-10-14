import React, { Component } from 'react'

import ReactMapGL, { Popup, NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';
import GeoCoder from 'react-map-gl-geocoder';

// Components
import Info from './Info'

// stylesheets
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamFrZXNtaXRoIiwiYSI6ImNrMWduN2M5bzE2ZnEzaXMxbXVmeGxkbWoifQ.pPUfadIhUul08K-qr81Xmw'

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
    padding: '10px',
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
                height: '90vh',
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
                   <Info/> 
                </Popup>
            )
        )
    }

    render() {
            const { viewport } = this.state
            return (
                <div className='mapbox-container'>
                    <ReactMapGL
                        ref={this.mapRef}
                        {...viewport}
                        mapStyle="mapbox://styles/mapbox/light-v9"
                        onViewportChange={this._onViewportChange}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                    >
                        <GeoCoder 
                            mapRef={this.mapRef}
                            onViewportChange={this._onGeocoderViewportChange}
                            mapboxApiAccessToken={MAPBOX_TOKEN}
                        />
                        
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
