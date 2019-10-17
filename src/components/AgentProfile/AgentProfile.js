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
                <div className="logout">
                <Link to='/portal'>
                    <button onClick={this.logout} className='btns logout'>Logout</button>
                </Link>
                </div>
                <div className="info-box">
                <h1>Welcome Back, {this.props.first_name} {this.props.last_name}!</h1>
                <Link to='/profile/agent/listing/create'>Create A Listing</Link>
                </div>
                <AgentListings />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, {logoutUser})(AgentProfile)