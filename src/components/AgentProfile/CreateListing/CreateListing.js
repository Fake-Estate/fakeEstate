import React, {Component} from 'react'
import axios from 'axios'
import { realtorInfo } from '../../../redux/reducers/reducer'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

// const STYLES = ["artDeco", "capeCod", "countryFrench", "colonial", "contemporary", "cottage", "craftsman", "dutchColonial", "farmhouse", "federal", "frenchProvincial", "georgianColonial", "greekRevival", "italianate", "log", "mediterranean", "midCenturyModern", "modern", "neoclassical", "prairie", "pueblo", "shingle", "southwest", "traditional", "ranch", "tudor", "victorian"]

class CreateListing extends Component {
    constructor(){
        super()

        this.state = {
            mls: 0,
            address: '',
            city: '',
            state: '',
            zip: 0,
            latitude: 0,
            longitude: 0,
            acreage: 0,
            square_footage: 0,
            bedrooms: 0,
            bathrooms: 0,
            price: 0,
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
    
    componentDidMount(){
        this.props.realtorInfo(this.props.first_name, this.props.last_name, this.props.email, this.props.is_admin, this.props.id)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createListing = (id) => {
        console.log('hit', this.props)
        const {mls, address, city, state, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, zip, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description} = this.state

        const body = {mls, address, city, state, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, zip, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description}
        axios.post(`/api/realtor/${id}/listing/create`, body)
            .then((res) => {
                console.log(this.res)
            this.setState = ({
                mls: 0,
                address: '',
                city: '',
                state: '',
                zip: 0,
                latitude: 0,
                longitude: 0,
                square_footage: 0,
                acreage: 0,
                bedrooms: 0,
                bathrooms: 0,
                price: 0,
                description: '',
                style_description: '',
                type_description: '',
                int_description: '',
                ext_description: '',
                other_description: '',
                inclusions_description: '',
                hoa_description: '',
                rooms_description: ''
            })
        }).catch(err => console.log(err))
    }

    render(){
        console.log(this.props)
        return(
            <div className='createListing'>
                <div className='box'>
                    <h1>Create A Listing</h1>
                    <input
                        placeholder='MLS'
                        name='mls'
                        onChange={this.handleChange}
                        value={this.state.mls}
                        className='input'
                    />
                    <input 
                        placeholder='Address'
                        name='address'
                        onChange={this.handleChange}
                        value={this.state.address}
                        className='input'
                    />
                    <input 
                        placeholder='City'
                        name='city'
                        onChange={this.handleChange}
                        value={this.state.city}
                        className='input'
                    />
                    <input 
                        placeholder='State'
                        name='state'
                        onChange={this.handleChange}
                        value={this.state.state}
                        className='input'
                    />
                    <input 
                        placeholder='Zip Code'
                        name='zip'
                        onChange={this.handleChange}
                        value={this.state.zip}
                        className='input'
                    />
                    <input 
                        placeholder='Latitute'
                        name='latitude'
                        onChange={this.handleChange}
                        value={this.state.latitude}
                        className='input'
                    />
                    <input 
                        placeholder='Longitude'
                        name='longitude'
                        onChange={this.handleChange}
                        value={this.state.longitude}
                        className='input'
                    />
                    <input 
                        placeholder='Acreage'
                        name='acreage'
                        onChange={this.handleChange}
                        value={this.state.acreage}
                        className='input'
                    />
                    <input 
                        placeholder='Square Footage'
                        name='square_footage'
                        onChange={this.handleChange}
                        value={this.state.square_footage}
                        className='input'
                    />
                    <input 
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
                    <button onClick={() => this.createListing(this.props.id)}>Create Listing</button>
                    <Link to='/profile/agent'><button>Cancel</button></Link>

                        

                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        id: state.id
    }
}

export default connect(mapStateToProps, {realtorInfo})(CreateListing)
