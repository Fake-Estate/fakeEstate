import React, { Component } from 'react'
import axios from 'axios'

export default class RoomsIncluded extends Component {
    constructor(){
        super()

        this.state = {
            rooms_included: []
        }
    }

    componentDidMount(){
        this.getRoomsIncluded()
    }

    getRoomsIncluded = () => {
        axios.get('/api/auth/listing/roomsinc')
        .then(rooms_included => {
            this.setState({
                rooms_included: rooms_included.data
            })
        })
    }
    render() {
        const mappedRooms = this.state.rooms_included.map((roomsinc, i) => {
            return (
                <div roomsinc={roomsinc} key={i}>
                    <label>{roomsinc.name}</label>
                    <input type='checkbox' />
                </div>
            )
        })
        return (
            <div>
                <h1>Rooms Included</h1>
                {mappedRooms}
            </div>
        )
    }
}
