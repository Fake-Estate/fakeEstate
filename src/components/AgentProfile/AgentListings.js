import React, { Component } from 'react'
import axios from 'axios';
import { realtorInfo } from '../../redux/reducers/reducer'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import AgentListing from './AgentListing'

import './AgentListings.css'

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

   
    logout = () => {
        axios.get('/api/realtor/logout')
        .then(() => {
            this.props.logoutUser()
        })
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
            <div className='mapped-listings'>
                <div>
                    <Link to='/portal'>
                        <button onClick={this.logout}>Logout</button>
                    </Link>
                    <h1>Welcome Back, {this.props.first_name} {this.props.last_name}!</h1>
                    <Link to='/profile/agent/listing/create'>Create A Listing</Link>
                </div>
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