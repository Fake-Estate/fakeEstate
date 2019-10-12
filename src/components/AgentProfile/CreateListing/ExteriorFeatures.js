import React, { Component } from 'react'
import axios from 'axios'

export default class ExteriorFeatures extends Component {
    constructor(){
        super()

        this.state = {
            exterior_features: []
        }
    }

    componentDidMount(){
        this.getExteriorFeatures()
    }

    getExteriorFeatures = () => {
        axios.get('/api/auth/listing/extfeature')
        .then(exterior_features => {
            this.setState({
                exterior_features: exterior_features.data
            })
        })
    }
    render() {
        const mappedExt = this.state.exterior_features.map((extfeature, i) => {
            return (
                <div extfeature={extfeature} key={i}>
                    <label>{extfeature.name}</label>
                    <input type='checkbox' />
                </div>
            )
        })
        return (
            <div>
                <h1>Exterior Features</h1>
                {mappedExt}
            </div>
        )
    }
}
