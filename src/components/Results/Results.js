import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Mapbox from '../Mapbox/Mapbox'
import Marker from 'react-map-gl'
import Pin from '../Mapbox/Pin'

// React Redux
import { connect } from 'react-redux'

// Stylesheets
import './Results.css'

class Results extends Component {
    constructor(){
        super()
        this.state = {
            listings:[],
            popupInfo:null
        }
    }

    componentDidMount(){
        this.getListings()
    }

    componentDidUpdate(prevProps){
        if(this.props.searchString !== prevProps.searchString){
            this.getListings()
        }
    }

    getListings = () => {
        axios.get(`/api/listings?search=${this.props.searchString}`).then((res) => {
            const syracuseNephi = [res.data[14], res.data[15]]
            console.log(res.data)
            this.setState({
                listings: syracuseNephi
            })
        })
    }

    renderCityMarker = (listing, index) => {
        let parsedLat = +listing.latitude
        let parsedLong = +listing.longitude
        return(
            <Marker
            key={`marker-${index}`}
            latitude = {parsedLat}
            longitude = {parsedLong}
            >
                <Pin size = {20} onClick ={ () => this.setState({popupInfo: listing})} />
            </Marker>
        )
    }

    clearPopupInfo = () => {
        this.setState({popupInfo:null})
    }

    render() {
        console.log(this.state.listings)
        const mappedListings = this.state.listings.map((e,i) => {
            return(
                <Link key={i} to={`/details/${e.id}`} className='pin-link'>
                    <p>{e.state}{e.city}</p>
                </Link>
            )
        })
        return (
            <div>
                <div className='dashboard-container'>
                <div className='dashboard-margin' />
                {mappedListings}
                </div>
                <div className='main-part'>
                    <div className='box-map'>
                        <Mapbox popupInfo={this.state.popupInfo} pins = {this.state.listings} clearPopupInfo={this.clearPopupInfo} renderCityMarker={this.renderCityMarker}/>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Results)