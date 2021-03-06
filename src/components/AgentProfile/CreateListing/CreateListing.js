import React, {Component} from 'react'
import axios from 'axios'
import { realtorInfo } from '../../../redux/reducers/reducer'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import './CreateListing.css'


class CreateListing extends Component {
    constructor(){
        super()

        this.state = {
            mls: null,
            address: '',
            city: '',
            state: '',
            zip: '',
            latitude: '',
            longitude: '',
            acreage: '',
            square_footage: '',
            bedrooms: '',
            bathrooms: '',
            price: '',
            description: '',
            style_description: '',
            type_description: '',
            int_description: '',
            ext_description: '',
            other_description: '',
            inclusions_description: '',
            hoa_description: '',
            rooms_description: '',
            img: '',
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

    createListing = () => {
        console.log('hit', this.props)
        const {mls, address, city, state, zip, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description,  style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description, img} = this.state

        const body = {mls, address, city, state, zip, latitude, longitude, acreage, square_footage, bedrooms, bathrooms, price, description, style_description, type_description, int_description, ext_description, other_description, inclusions_description, hoa_description, rooms_description, img}
        axios.post(`/api/realtor/listing/create`, body)
            .then((res) => {
            this.setState = ({
                mls: null,
                address: null,
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
                img: ''
            })
            this.props.history.push('/profile/agent')
        }).catch(err => console.log(err))
    }

    render(){
        return(
            <div className='createListing'>
                <div className='box'>
                    <h1 className='h1-txt'>Create A Listing</h1>
                        <div className='create-inputs'>
                            <input type='text'
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
                            <input type='text'
                                placeholder='Zip Code'
                                name='zip'
                                onChange={this.handleChange}
                                value={this.state.zip}
                                className='input'
                            />
                            <input type='text'
                                placeholder='Latitute'
                                name='latitude'
                                onChange={this.handleChange}
                                value={this.state.latitude}
                                className='input'
                            />
                            <input type='text'
                                placeholder='Longitude'
                                name='longitude'
                                onChange={this.handleChange}
                                value={this.state.longitude}
                                className='input'
                            />
                            <input type='text'
                                placeholder='Acreage'
                                name='acreage'
                                onChange={this.handleChange}
                                value={this.state.acreage}
                                className='input'
                            />
                            <input type='text'
                                placeholder='Square Footage'
                                name='square_footage'
                                onChange={this.handleChange}
                                value={this.state.square_footage}
                                className='input'
                            />
                            <input type='text'
                                placeholder='Bedrooms'
                                name='bedrooms'
                                onChange={this.handleChange}
                                value={this.state.bedrooms}
                                className='input'
                            />
                            <input type='text'
                                placeholder='Bathrooms'
                                name='bathrooms'
                                onChange={this.handleChange}
                                value={this.state.bathrooms}
                                className='input'
                            />
                            <input type='text'
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
                                placeholder='Upload Photo'
                                name='img'
                                onChange={this.handleChange}
                                // value={this.state.img}
                                className='description input'
                            />
                            <button onClick={() => this.createListing()}>Create Listing</button>
                            <Link exact to='/profile/agent'><button className='cancel'>Cancel</button></Link>
                        </div>
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
