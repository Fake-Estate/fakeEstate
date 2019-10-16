import React, { Component } from 'react';
import axios from 'axios';

import Mapbox from '../Mapbox/Mapbox';
import {Marker} from 'react-map-gl';
import Pin from '../Mapbox/Pin/Pin';

// Stylesheets
import './MobileMap.css';

export default class MobileMap extends Component {
    constructor(){
        super()
        this.state = {
            pins: [],
            popupInfo: null
        }
    }

    componentDidMount(){
        this.getPins()
    }

    getPins = () => {
        axios.get('/api/map/listings').then((res) => {
            console.log(res.data)
            this.setState({
                pins: res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    _renderCityMarker = (poi, index) => {
        let parsedLong = +poi.longitude
        let parsedLat = +poi.latitude
        return(
            <Marker
                key={`marker-${index}`}
                longitude={parsedLong}
                latitude={parsedLat}
            >
                <Pin size={20} onClick={() => this.setState({popupInfo: poi})}/>
            </Marker>
        )
    }

    clearPopupInfo = () => {
        this.setState({
            popupInfo: null
        })
    }

    render() {
        console.log(this.state.pins)
        return (
            <div className='mobile-map-container'>
                <div className='mobile-map-margin' />
                <div className='mobile-mapbox-container'>
                    <Mapbox popupInfo={this.state.popupInfo} pins={this.state.pins} renderCityMarker={this._renderCityMarker} clearPopupInfo={this.clearPopupInfo} />
                </div>
            </div>
        )
    }
}