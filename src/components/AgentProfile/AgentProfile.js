import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class AgentProfile extends Component {
    render() {
        return (
            <div>
                Agent Profile
                <Link to='/profile/agent/listing/create'>Create A Listing</Link>
            </div>
        )
    }
}
