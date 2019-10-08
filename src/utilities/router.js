import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Landing from '../components/Mapbox/Mapbox'
import Results from '../components/Results/Results';


export default(
    <Switch>
        <Route exact path = '/' component = {Landing} />
        <Route path = '/results' component = {Results} />
    </Switch>
)