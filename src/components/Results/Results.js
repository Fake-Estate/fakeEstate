import React, { Component } from 'react'
import Mapbox from '../Mapbox/Mapbox'

// Stylesheets
import './Results.css'

export default class Results extends Component {
    render() {
        return (
            <div>
                <div className='main-part'>
                    <div className='box-map'>
                        <Mapbox/>
                    </div>
                </div>
                
                
            </div>
        )
    }
}
