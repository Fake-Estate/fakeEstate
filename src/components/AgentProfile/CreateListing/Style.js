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
            }).catch(error => {
                console.log('Oops, nothing here!')
            })
    }
    
    render() {
        const mappedStyles = this.state.styles.map((style) => {
            return (
                <div style={style} key={style.id} >
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
