import React, { Component } from 'react'
import axios from 'axios'

export default class InteriorFeatures extends Component {
    constructor(){
        super()
        this.state = {
            interior_features: []
        }
    }

    componentDidMount(){
        this.getInteriorFeatures()
    }

    getInteriorFeatures = () => {
        axios.get('/api/auth/listing/intfeature')
        .then(interior_features => {
            this.setState({
                interior_features: interior_features.data
            })
        })
    }
    render() {
        const mappedInt = this.state.interior_features.map((intfeature, i) => {
            return (
                <div intfeature={intfeature} key={i}>
                    <label>{intfeature.name}</label>
                    <input type='checkbox' />
                </div>
            )
        })
        return (
            <div>
                <h1>Interior Features</h1>
                {mappedInt}
            </div>
        )
    }
}