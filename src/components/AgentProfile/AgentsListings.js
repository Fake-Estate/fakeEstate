import React, { Component } from 'react'
import UpdateListing from './UpdateListing/UpdateListing'

export default class AgentsListings extends Component {
    constructor(){
        super()
        this.state = {
            listings: [],
            editStatus: false
        }
    }

    handleUpdateToggle = () => {
        this.setState({
            editStatus: !this.state.editStatus
        })
    }
    
    getRealtorListings = () => {
        const id = this.props.match.params.id
        
        axios.get(`/api/realtor/${id}/listings`)
            .then(listing => {
                this.setState({
                    listings: listings.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    
    render() {
        const mappedListings = this.state.listings.map((listing, i) => {
            return(
                <div>
                {!this.state.editStatus
                    ?
                    (<div key={i} listing={listing}> 
                    {listing.address}
                    {listing.price}
                    </div>)
                    :
                    (<div>
                        <UpdateListing listing={listing} />    
                    </div>)
                }
                </div>
                
            )
        })
        return (
           
                <div>
                    {mappedListings}
                    <button></button>
                </div>
           
        )
    }
}
