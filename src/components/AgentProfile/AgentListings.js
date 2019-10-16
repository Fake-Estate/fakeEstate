import React, { Component } from 'react'
import axios from 'axios';
import { realtorInfo } from '../../redux/reducers/reducer'
import { connect } from 'react-redux'
import AgentListing from './AgentListing'

// const {mls, address, city, state, zip, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description} = this.props.listing

class AgentListings extends Component {
    constructor(){
        super()
        this.state = {
            listings: [],
            
        }
    }

    componentDidMount(){
        this.getRealtorListings()
    }

   

    

    getRealtorListings = () => {
        const id = this.props.id
        
        axios.get(`/api/realtor/${id}/listing`)
            .then(listing => {
                this.setState({
                    listings: listing.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

  
    
    
    render() {
        console.log(this.state)
        const mappedListing = this.state.listings.map((listing) => {
            return(
                <AgentListing listing={listing} key={listing.id} getRealtorListings={this.getRealtorListings} />
            )
        })
        return (
            <div>
               <div>{mappedListing}</div> 
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        id: state.id
    }
}

export default connect(mapStateToProps, {realtorInfo})(AgentListings)