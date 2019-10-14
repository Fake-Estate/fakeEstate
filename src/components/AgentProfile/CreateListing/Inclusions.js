import React, { Component } from 'react'
import axios from 'axios'

export default class Interior extends Component {
    constructor(){
        super()
        this.state = {
            inclusions: []
        }
    }

    componentDidMount(){
        this.getInclusions()
    }

    getInclusions = () => {
        axios.get('/api/auth/listing/inclusions')
        .then(inclusions => {
            this.setState({
                inclusions: inclusions.data
            })
        })
    }
    render() {
        const mappedInclusions = this.state.inclusions.map((inclusion, i) => {
            return (
                <div inclusion={inclusion} key={i}>
                    <label>{inclusion.name}</label>
                    <input type='checkbox' />
                </div>
            )
        })
        return (
            <div>
                <h1>Inclusions</h1>
                {mappedInclusions}
            </div>
        )
    }
}
