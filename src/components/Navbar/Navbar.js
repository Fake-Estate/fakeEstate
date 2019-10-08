import React, { Component } from 'react'
import axios from 'axios'

import './Navbar.css'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            userRegister: false,
            agentRegister: false,
            login: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }  
 
    handleRegisterToggle = () => {
        this.setState({
            userRegister: !this.state.userRegister
         })
    } 
    
    handleLoginToggle = () => {
        this.setState({
            login: !this.state.login
         })
    } 
 
    registerUser = () => {
        const {firstName, lastName, email, password} = this.state
        const body = {
            firstName,
            lastName,
            email,
            password

        }
        axios.post('/api/profile/create', body)
            .then(res => {
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                })
                this.handleRegisterToggle()
            }).catch(error => {
                console.log(error)
            })
    }

    login = () => {
        const {email, password} = this.state
        const body = {
            email,
            password
        }

        axios.post('/api/profile/login', body)
            .then(res => {
                this.setState({
                    email: '',
                    password: ''
                })
                this.handleLoginToggle()
            }).catch(error => {
                console.log(error)
            })
    }


    
    render() {
        return (
            <div>
                <div >
                    <button onClick={this.handleRegisterToggle}>Register</button>
                    <button onClick={this.handleLoginToggle}>Login</button>
                </div>
                
                    <div className = {!this.state.userRegister ? 'dont-display' : 'display-register'}>
                            <input 
                            placeholder='First Name'
                            type='text'
                            name='firstName'
                            onChange={this.handleChange}
                            value={this.state.firstName}
                            />
                            <input 
                            placeholder='Last Name'
                            type='text'
                            name='lastName'
                            onChange={this.handleChange}
                            value={this.state.lastName}
                            />
                            <input 
                            placeholder='Email'
                            type='text'
                            name='email'
                            onChange={this.handleChange}
                            value={this.state.email}
                            />
                            <input 
                            placeholder='Password'
                            type='password'
                            name='password'
                            onChange={this.handleChange}
                            value={this.state.password}
                            />
                            <button onClick={this.registerUser}>Register</button>
                            <button>Real Estate Agent?</button>
                    </div>
                    <div className= {!this.state.login ? 'dont-display' : 'display-login'}>
                        <input 
                        placeholder='Email'
                        type='text'
                        name='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        />
                        <input 
                        placeholder='Password'
                        type='password'
                        name='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        />
                        <button onClick={this.login}>Login</button>
                    </div>
            </div>
        )
    }
}
