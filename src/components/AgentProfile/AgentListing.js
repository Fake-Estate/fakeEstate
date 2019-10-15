import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



export default class AgentListing extends Component { 
    constructor(){
        super()
        this.state = {
            editStatus: false,
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
            rooms_description: '',
        }
    }

    componentDidMount(){
        this.setState({
            mls: this.props.listing.mls,
            address: this.props.listing.address,
            city: this.props.listing.city,
            state: this.props.listing.state,
            zip: this.props.listing.zip,
            latitude: this.props.listing.latitude,
            longitude: this.props.listing.longitutde,
            acreage: this.props.listing.acreage,
            square_footage: this.props.listing.square_footage,
            bedrooms: this.props.listing.bedrooms,
            bathrooms: this.props.listing.bathrooms,
            price: this.props.listing.proce,
            description: this.props.listing.description,
            style_description: this.props.listing.style_description,
            type_description: this.props.listing.type_description,
            int_description: this.props.listing.int_description,
            ext_description: this.props.listing.ext_description,
            other_description: this.props.listing.other_description,
            inclusions_description: this.props.listing.inclusions_description,
            hoa_description: this.props.listing.hoa_description,
            rooms_description: this.props.listing.rooms_description,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUpdateToggle = () => {
        this.setState({
            editStatus: !this.state.editStatus
        })
    }

    deleteListing = (id) => {
        axios.delete(`/api/realtor/listing/delete/${id}`)
            .then(res => {
                this.props.getRealtorListing()
            }).catch(error => {
                console.log(error)
            })
    }

    updateListing = (id) => {
        const {mls, address, city, state, zip, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description} = this.state

        const body = {mls, address, city, state, zip, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description}

        axios.put(`/api/realtor/listing/edit/${id}`, body)
            .then(res => {
                this.props.handleUpdateToggle()
                this.props.getRealtorListing()
            }).catch(error => {
                console.log(error, 'error!!!!!!')
            })
        
    }

     render(){
        const {listing} = this.props
        console.log(this.props)
        return (
           <div>
               {!this.state.editStatus
               ?
                (<div>
                   <Link><div>
                        <span>{listing.address}</span>
                        <span>{listing.city} {listing.state}, {listing.zip}</span>
                        <span>{listing.square_footage}</span>
                        <span>{listing.bedrooms} {listing.bathrooms}</span>
                        <span>{listing.price}</span>
                        <span>{listing.acreage}</span>
                        <span>{listing.description}</span>
                        <span>{listing.style_description}</span>
                        <span>{listing.type_description}</span>
                        <span>{listing.int_description}</span>
                        <span>{listing.ext_description}</span>
                        <span>{listing.other_description}</span>
                        <span>{listing.inclusions_description}</span>
                        <span>{listing.hoa_description}</span>
                        <span>{listing.rooms_description}</span>
                        <button onClick={this.handleUpdateToggle}>Edit</button>
                        <button onClick={this.deleteListing(listing.id)}>Delete</button>
                    </div></Link>
                    </div>)
                :
                    (<div>
                <div className='box'>
                    <h1>Update Listing</h1>
                    <input type='text'
                        placeholder=''
                        name='address'
                        onChange={this.handleChange}
                        value={this.state.address}
                        className='input'
                    />
                    <input type='text'
                        placeholder='Address'
                        name='address'
                        onChange={this.handleChange}
                        value={this.state.address}
                        className='input'
                    />
                    <input type='text'
                        placeholder='City'
                        name='city'
                        onChange={this.handleChange}
                        value={this.state.city}
                        className='input'
                    />
                    <input type='text'
                        placeholder='State'
                        name='state'
                        onChange={this.handleChange}
                        value={this.state.state}
                        className='input'
                    />
                    <input type='integer'
                        placeholder='Zip Code'
                        name='zip'
                        onChange={this.handleChange}
                        value={this.state.zip}
                        className='input'
                    />
                    <input type='integer'
                        placeholder='Latitute'
                        name='latitude'
                        onChange={this.handleChange}
                        value={this.state.latitude}
                        className='input'
                    />
                    <input type='integer'
                        placeholder='Longitude'
                        name='longitude'
                        onChange={this.handleChange}
                        value={this.state.longitude}
                        className='input'
                    />
                    <input type='integer'
                        placeholder='Acreage'
                        name='acreage'
                        onChange={this.handleChange}
                        value={this.state.acreage}
                        className='input'
                    />
                    <input type='integer'
                        placeholder='Square Footage'
                        name='square_footage'
                        onChange={this.handleChange}
                        value={this.state.square_footage}
                        className='input'
                    />
                    <input type='integer'
                        placeholder='Bedrooms'
                        name='bedrooms'
                        onChange={this.handleChange}
                        value={this.state.bedrooms}
                        className='input'
                    />
                    <input type='integer'
                        placeholder='Bathrooms'
                        name='bathrooms'
                        onChange={this.handleChange}
                        value={this.state.bathrooms}
                        className='input'
                    />
                    <input type='integer'
                        placeholder='Price'
                        name='price'
                        onChange={this.handleChange}
                        value={this.state.price}
                        className='input'
                    />
                    <textarea type='text'
                        placeholder='Description of Home'
                        name='description'
                        onChange={this.handleChange}
                        value={this.state.description}
                        className='description input'
                    />
                    <textarea 
                        type='text'
                        placeholder='Home Style Info'
                        name='style_description'
                        onChange={this.handleChange}
                        value={this.state.style_description}
                        className='description input'
                    />
                    <textarea 
                        type='text'
                        placeholder='Home Type Info'
                        name='type_description'
                        onChange={this.handleChange}
                        value={this.state.type_description}
                        className='description input'
                    />
                    <textarea 
                        type='text'
                        placeholder='Interior Features Info'
                        name='int_description'
                        onChange={this.handleChange}
                        value={this.state.int_description}
                        className='description input'
                    />
                    <textarea 
                        type='text'
                        placeholder='Exterior Features Info'
                        name='ext_description'
                        onChange={this.handleChange}
                        value={this.state.ext_description}
                        className='description input'
                    />
                    <textarea 
                        type='text'
                        placeholder='Home Inclusions Info'
                        name='inclusions_description'
                        onChange={this.handleChange}
                        value={this.state.inclusions_description}
                        className='description input'
                    />
                    <textarea 
                        type='text'
                        placeholder='HOA Info'
                        name='hoa_description'
                        onChange={this.handleChange}
                        value={this.state.hoa_description}
                        className='description input'
                    />
                    <textarea 
                        type='text'
                        placeholder='Rooms Features Info'
                        name='rooms_description'
                        onChange={this.handleChange}
                        value={this.state.rooms_description}
                        className='description input'
                    />
                    <button onClick={() => this.updateListing(this.props.listing.id)}>Update</button>
                    <button onClick={this.handleUpdateToggle}>Cancel</button>
                </div>
                </div>)
            
               }
               </div>
            
        )
    }
}
