import React, { Component } from 'react'
import axios from 'axios'

import './AgentAuth.css'

export default class AgentAuth extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            license: '',
            register: false,
            login: false
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }  

    handleRegisterToggle = () => {
        this.setState({
            register: !this.state.register
        })
    }

    handleLoginToggle = () => {
        this.setState({
            login: !this.state.login
        })
    }

    registerAgent = () => {
        const {firstName, lastName, email, password, license} = this.state
        const body = {
            firstName,
            lastName,
            email,
            password,
            license

        }
        axios.post('/api/realtor/create', body)
            .then(res => {
                this.props.history.push('/profile/agent')
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    license: ''
                })
                
            }).catch(error => {
                console.log(error)
            })
    }

    loginAgent = () => {
        const {email, password} = this.state
        const body = {
            email,
            password
        }

        axios.post('/api/realtor/login', body)
            .then(res => {
                this.setState({
                    email: '',
                    password: ''
                })
                this.props.history.push('/profile/agent')
            }).catch(error => {
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                <div>
                    <button onClick={this.handleRegisterToggle}>Register</button>
                    <button onClick={this.handleLoginToggle}>Login</button>
                </div>
                
                    <div className = {!this.state.register ? 'dont-display' : 'display-register'}>
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
                            placeholder='License #'
                            type='text'
                            name='license'
                            onChange={this.handleChange}
                            value={this.state.license}
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
                            <button onClick={this.registerAgent}>Register</button>
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
                        <button onClick={this.loginAgent}>Login</button>
                    </div>
            </div>
        )
    }
}
