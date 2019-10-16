import React, { Component } from 'react'
import axios from 'axios'
import './Landing.css'

// React Redux
import { connect } from 'react-redux'

import {searchByString} from '../../redux/reducers/reducer'

class Landing extends Component { 
    constructor(){
        super()
        this.state = {
            searchText: '',
            showResults: false,
            searchResults: []
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    getBySearch = () => {
        console.log('hit3', this.state.searchText)
        
        const {results} = this.props.match.params
        axios.get(`/api/search?results=${results}`)
        
            .then(res => {
                console.log('hit4', this.props)
                console.log('hit2', res)
                this.setState({
                    searchResults: res.data,
                    searchBar: ''
                })
            }).catch(error => {
                console.log('Oops, nothing here!', error)
            })
    }

    updateReduxSearchString = () => {
        this.props.searchByString(this.state.searchText)
        this.props.history.push('/results')
    }

    render() {
        const mappedResults = this.state.searchResults.map((result, i) => {
            return (
                <div result={result} key={i} >
                    <div>{result}</div>
                    
                </div>
            )
        })
        return (
            <div className='landing-container'>
                <div className='title-container'>
                <h1 className=''>Real Estate of Utah</h1>
                </div>
                <div className="search-container">
                        <input 
                            placeholder='Search by city or zip code'
                            className="middle-input"
                            type='text'
                            name='searchText'
                            onChange={this.handleChange}
                            value={this.state.searchText}
                        />
                        <button className="middle-input search-btn" onClick={this.updateReduxSearchString}>Search</button>
                    </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {searchByString})(Landing)
