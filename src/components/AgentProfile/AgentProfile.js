import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {logoutUser} from './../../redux/reducers/reducer'

import AgentListings from './AgentListings'
import './AgentProfile.css'

class AgentProfile extends Component {

  
    render() {
        return (
            <div className='agent-profile'>
                <div>
                
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