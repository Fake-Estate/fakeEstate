import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Landing from '../components/Landing/Landing'
import Results from '../components/Results/Results';
import AgentAuth from '../components/AgentAuth/AgentAuth'
import AgentProfile from '../components/AgentProfile/AgentProfile'
import CreateListing from './../components/AgentProfile/CreateListing/CreateListing'
import ExteriorFeatures from './../components/AgentProfile/CreateListing/ExteriorFeatures'
import OtherFeatures from './../components/AgentProfile/CreateListing/OtherFeatures'
import RoomsIncluded from './../components/AgentProfile/CreateListing/RoomsIncluded'



export default(
        <Switch>
            <Route exact path = '/' component = {Landing} />
            <Route path = '/results' component = {Results} />
            <Route path = '/portal' component = {AgentAuth} />
            <Route exact path = '/profile/agent' component = {AgentProfile} />
            <Route path = '/profile/agent/listing/create' component = {CreateListing} />
            <Route path = '/profile/agent/listing/extfeature' component = {ExteriorFeatures} />
            <Route path = '/profile/agent/listing/othfeatures' component = {OtherFeatures} />
            <Route path = '/profile/agent/listing/roomsinc' component = {RoomsIncluded} />
        </Switch>
)