import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {logoutUser} from './../../redux/reducers/reducer'

import AgentListings from './AgentListings'


class AgentProfile extends Component {

    logout = () => {
        axios.get('/api/realtor/logout')
        .then(() => {
            this.props.logoutUser()
        })
    }
    render() {
        return (
            <div>
                <h1>{this.props.first_name} {this.props.last_name}</h1>
                <Link to='/profile/agent/listing/create'>Create A Listing</Link>
                <AgentListings />

                <Link to='/portal'>
                    <button onClick={this.logout}>Logout</button>
                </Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, {logoutUser})(AgentProfile)