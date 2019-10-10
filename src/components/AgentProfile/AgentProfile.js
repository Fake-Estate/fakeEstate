import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class AgentProfile extends Component {
    render() {
        return (
            <div>
                <Link to='/profile/agent/create'>Style Mapped</Link>
            </div>
        )
    }
}
