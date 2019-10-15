import React, { Component } from 'react'
import axios from 'axios'

export default class Hoa extends Component {
    constructor(){
        super()
        this.state = {
            hoa: []
        }
    }

    componentDidMount(){
        this.getHoa()
    }

    getHoa = () => {
        axios.get('/api/auth/listing/hoa')
        .then(exterior_features => {
            this.setState({
                hoa: hoa.data
            })
        })
    }
    render() {
        const mappedHoa = this.state.hoa.map((hoa, i) => {
            return (
                <div hoa={hoa} key={i}>
                    <label>{hoa.name}</label>
                    <input type='checkbox' />
                </div>
            )
        })
        return (
            <div>
                <h1>Hoa Amenities</h1>
                {mappedHoa}
            </div>
        )
    }
}
