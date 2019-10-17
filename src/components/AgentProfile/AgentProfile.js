import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {logoutUser} from './../../redux/reducers/reducer'

import AgentListings from './AgentListings'
import './AgentProfile.css'

class AgentProfile extends Component {

    logout = () => {
        axios.get('/api/realtor/logout')
        .then(() => {
            this.props.logoutUser()
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className='agent-profile'>
                <div>
                <Link to='/portal'>
                    <button onClick={this.logout}>Logout</button>
                </Link>
                </div>
                <div>
                <h1>Welcome Back, {this.props.first_name} {this.props.last_name}!</h1>
                <Link to='/profile/agent/listing/create'>Create A Listing</Link>
                <AgentListings />
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, {logoutUser})(AgentProfile)