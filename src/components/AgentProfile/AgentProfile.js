import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import AgentListings from './AgentListings'


class AgentProfile extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Agent Profile
                <Link to='/profile/agent/listing/create'>Create A Listing</Link>
                <AgentListings />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps)(AgentProfile)