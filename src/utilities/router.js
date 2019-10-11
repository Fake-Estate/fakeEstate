import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Landing from '../components/Landing/Landing'
import Results from '../components/Results/Results';
import AgentAuth from '../components/AgentAuth/AgentAuth'
import AgentProfile from '../components/AgentProfile/AgentProfile'
import CreateListing from './../components/AgentProfile/CreateListing/CreateListing'



export default(
        <Switch>
            <Route exact path = '/' component = {Landing} />
            <Route path = '/results' component = {Results} />
            <Route path = '/portal' component = {AgentAuth} />
            <Route exact path = '/profile/agent' component = {AgentProfile} />
            <Route path = '/profile/agent/listing/create' component = {CreateListing} />
        </Switch>
)