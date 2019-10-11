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
                        onchange={this.handleChange}
                        value={this.state.mls}
                        className='input'
                        />
                </div>
            </div>
        )
    }
}
