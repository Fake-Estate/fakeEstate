import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import * as Icon from 'react-feather'
import burger from './Hamburgaler.svg'
import { slideNav } from '../../redux/reducers/reducer'
import { connect } from 'react-redux'
import {realtorInfo, logoutUser} from './../../redux/reducers/adminReducer'

import './Navbar.css'

class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            userRegister: false,
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

    slideOut = () => {
        const { slide } = this.props
        this.props.slideNav(slide)
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
                <div className='hamburglar'>
                     <img src = {burger}
                      alt='menu' 
                      onClick={this.slideOut} 
                      className="burger-menu"/>
                </div>
                <div className={this.props.slide ? "nav-menu slide-out" : "nav-menu"}>
                    <div className='empty-space' onClick={this.slideOut}></div>
                    <div className='inner-nav'>
                        <div className='close-btn'>
                        <Icon.X className='closer' onClick={this.slideOut}/>
                        </div>
                        <div className='realtor-container'>
                            <Link to='/portal' className='realtor-portal'>Realtor Portal</Link>
                        </div>
                        <div className='register-container'>
                            <button className='register-btn' onClick={this.handleRegisterToggle}>Register</button>
                        </div>
                        <div className='login-container'>
                            <button className='login-btn' onClick={this.handleLoginToggle}>Login</button>
                        </div>
                
                        <div className = {!this.state.userRegister ?'dont-display' : 'display-register'}>
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
                </div>
                    <div>
                        <h1>{this.props.first_name}</h1>
                        <h1>{this.props.last_name}</h1>
                    </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        first_name: state.first_name,
        last_name: state.last_name,
        email: state.email,
        is_admin: state.is_admin,
        slide: state.slide
    }
}

export default connect(mapStateToProps,{slideNav, realtorInfo, logoutUser})(Navbar)