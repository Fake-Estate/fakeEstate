import React, { Component } from 'react'
import axios from 'axios';

import './Listing.css'

export default class Listing extends Component {
    constructor(){
        super()
        this.state = {
            listing: {}
        }
    }
    componentDidMount(){
        axios.get(`/api/listing/${this.props.match.params.id}`).then(res => {
            this.setState({
                listing: res.data[0]
            })
        })
    }
    render() {
        return (
            <div className="listing-id-main">
                <div className ="listing-id-container">
                    <div className='listing-id-img'>
                        <img src = {this.state.listing.img} className='house'/>
                    </div>
                    <div className="listing-id-flex">
                        <p className='listing-id-address'>{this.state.listing.address}</p>
                        <p className='listing-id-city'>{this.state.listing.city},</p>
                    </div>
                    <div className='listing-id-info'>
                        <p className='listing-id-state'>{this.state.listing.state}</p>
                        <p className='listing-id-zip'>{this.state.listing.zip}</p>
                        <p>MLS: #{this.state.listing.mls}</p>
                    </div>
                    <div className='listing-id-rooms'>
                        <p>{this.state.listing.bedrooms}beds,</p>
                        <p>{this.state.listing.bathrooms} baths</p>
                    </div>
                    <div>
                        <p className='listing-id-money'>$ {this.state.listing.price}</p>
                    </div>
                    <div>
                        <p>{}</p>
                    </div>
                    <div>
                        <h1 className='description'>Description:</h1>
                        <p className='listing-id-description'>{this.state.listing.description}</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}
