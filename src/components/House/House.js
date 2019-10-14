import React, { Component } from 'react'

export default class House extends Component {
    render() {
        return (
            <div>
                 <div className='listing-dashboard'>
                    <div className='listing-details'>
                        <div className='listing-title'>
                            {pointOfInterest.title}
                        </div>
                        <div className='pin-location'>
                            {pointOfInterest.city}, {pointOfInterest.state}
                        </div>
                    </div>
                    <div className='pin-image'>
                        <img src={pointOfInterest.image} width={100} height={100} alt='point of interest' />
                    </div>
                </div>
            </div>
        )
    }
}
