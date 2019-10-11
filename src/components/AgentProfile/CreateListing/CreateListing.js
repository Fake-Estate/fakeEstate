import React, {Component} from 'react'
// import axios from 'axios'

export default class CreateListing extends Component {
    constructor(){
        super()

        this.state = {
            mls: '',
            address: '',
            city: '',
            state: '',
            square_footage: '',
            bedrooms: '',
            bathrooms: '',
            price: '',
            description: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className='createListing'>
                <div className='box'>
                    <h1>Create A Listing</h1>
                    <input type='text'
                        placeholder='MLS'
                        name='mls'
                        onChange={this.handleChange}
                        value={this.state.mls}
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
                    <input type='text'
                        placeholder='Description'
                        name='description'
                        onChange={this.handleChange}
                        value={this.state.description}
                        className='description input'
                        />
                    <button>Continue</button>
                </div>
            </div>
        )
    }
}
