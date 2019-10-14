import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Mapbox from '../Mapbox/Mapbox'

import Listing from '../Listing/Listing'

// React Redux
import { connect } from 'react-redux'

// Stylesheets
import './Results.css'

class Results extends Component {
    constructor(){
        super()
        this.state = {
            listings:[]
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
            this.setState({
                listings:res.data
            })
        })
    }
    render() {
        console.log(this.state.listings)
        const mappedListings = this.state.listings.map((e,i) => {
            return(
                <Link key={i} to={`/details/${e.id}`} className='pin-link'>
                    <Listing pointOfInterest={e}/>
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
                        <Mapbox/>
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