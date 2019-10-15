import React, { Component } from 'react'
import axios from 'axios'

export default class Type extends Component {
    constructor(){
        super()
        this.state = {
            type: []
        }
    }

    componentDidMount(){
        this.getType()
    }

    getType = () => {
        axios.get('/api/auth/listing/type')
        .then(type => {
            this.setState({
                type: type.data
            })
        })
    }
    render() {
        const mappedType = this.state.Type.map((type, i) => {
            return (
                <div type={type} key={i}>
                    <label>{type.name}</label>
                    <input type='checkbox' />
                </div>
            )
        })
        return (
            <div>
                <h1>Type</h1>
                {mappedType}
            </div>
        )
    }
}
