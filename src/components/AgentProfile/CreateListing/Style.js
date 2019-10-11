import React, { Component } from 'react'
import axios from 'axios';

export default class Style extends Component {
    constructor(){
        super()
        this.state = {
            styles: []
        }
    }

    componentDidMount(){
        this.getStyles()
    }

    getStyles = () => {
        axios.get('/api/auth/listing/style')
            .then(styles => {
                console.log('hit1', styles)
                this.setState({
                    styles: styles.data
                })
            })
    }
    
    render() {
        const mappedStyles = this.state.styles.map((style, i) => {
            return (
                <div style={style} key={i} >
                    <label>{style.name}</label>
                    <input type='checkbox' />
                </div>
            )
        })
        return (
            <div>
                <h1>Styles</h1>
                {mappedStyles}
            </div>
        )
    }
}
