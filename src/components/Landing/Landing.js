import React, { Component } from 'react'
import axios from 'axios'


export default class Landing extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
     this.setState({
         [event.target.name]: event.target.value
     })
 }   
 
    registerUser = () => {
        const {firstName, lastName, email, password}
        const body = {
            firstName,
            lastName,
            email,
            password
        }
        axios.post('/api/profile/create')

    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}