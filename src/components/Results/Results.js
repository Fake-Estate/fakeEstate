import React, { Component } from 'react'
import axios from 'axios'
import MobileMap from '../MobileMap/MobileMap'
import { Link } from 'react-router-dom'

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
        console.log(this.props.searchString)
        this.getListings()
    }

    componentDidUpdate(prevProps){
        if(this.props.searchString !== prevProps.searchString){
            this.getListings()
        }
    }

    getListings = () => {
        axios.get(`/api/listings?search=${this.props.searchString}`).then((res) => {
            console.log(res.data)
            this.setState({
                listings: res.data
            })
        })
    }


    clearPopupInfo = () => {
        this.setState({popupInfo:null})
    }

    // goToListing = (listing) => {
    //     this.props.history.push(`api/listing/${id}`)
    // }

    render() {
        const mappedListings = this.state.listings.map(listing => {
            
            return(
                <div className="listing-tile-container">
                     <Link to={`/listing/${listing.id}`}>
                        <div className="listing-tile">
                            <img className='house-image' src={listing.img} alt='Houses'/>
                            <div className="text-info-container">
                                <div className="text-info1">
                                    <h2 className="h2-txt">Address</h2>
                                    <p className="p-txt">{listing.city}, {listing.state}</p>
                                </div>
                                {/* <div className="text-info1">
                                    <h2 className="h2-txt">Description</h2>
                                    <p className="p-txt">{listing.description}</p>
                                </div> */}
                            </div>
                        </div>
                     </Link>
                    </div>
               
            )
        })
        return (
            <div>
                <div className="space-header"/>
                <div className='dashboard-container'>
                    {mappedListings}
                </div>

                <MobileMap />
                {/* map box for the future */}
                {/* <div className='main-part'>
                    <div className='box-map'>
                        <Mapbox popupInfo={this.state.popupInfo} pins = {this.state.listings} clearPopupInfo={this.clearPopupInfo} renderCityMarker={this.renderCityMarker}/>
                    </div>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Results)