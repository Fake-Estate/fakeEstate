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
            <div>
                <div className='listing-margin' />
                <p>{this.state.listing.address}</p>
                <p>{this.state.listing.city}</p>
                <p>{this.state.listing.state}</p>
            </div>
        )
    }
}
