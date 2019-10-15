import React, { Component } from 'react'

export default class UpdateListing extends Component {
    constructor(){
        super()
        this.state = {
            mls: null,
            address: '',
            city: '',
            state: '',
            zip: null,
            latitude: null,
            longitude: null,
            acreage: null,
            square_footage: null,
            bedrooms: null,
            bathrooms: null,
            price: null,
            description: '',
            style_description: '',
            type_description: '',
            int_description: '',
            ext_description: '',
            other_description: '',
            inclusions_description: '',
            hoa_description: '',
            rooms_description: ''
        }
    }
    
    
    render() {
        const {mls, address, city, state, zip, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description} = this.props.listing
        return (
            <div>
                
            </div>
        )
    }
}
