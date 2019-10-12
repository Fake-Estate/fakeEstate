import React, { Component } from 'react'
import axios from 'axios'

export default class OtherFeatures extends Component {
    constructor(){
        super()

        this.state = {
            other_features: []
        }
    }

    componentDidMount(){
        this.getOtherFeatures()
    }

    getOtherFeatures = () => {
        axios.get('/api/auth/listing/otherfeatures')
        .then(other_features => {
            this.setState({
                other_features: other_features.data
            })
        })
    }
    render() {
        const mappedOther = this.state.other_features.map((othfeat, i) => {
            return (
                <div othfeat={othfeat} key={i}>
                    <label>{othfeat.name}</label>
                    <input type='checkbox' />
                </div>
            )
        })
        return (
            <div>
                <h1>Other Feature</h1>
                {mappedOther}
            </div>
        )
    }
}
