import React, { Component } from 'react'
import axios from 'axios'

import './Landing.css'
// import Results from '../Results/Results'
// import MasterForm from '../AgentProfile/CreateListing/MasterForm'


export default class Landing extends Component { 
    constructor(){
        super()
        this.state = {
            searchBar: '',
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
        console.log('hit3', this.state.searchBar)
        
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
                <input 
                    placeholder='Search by city, zip code, or MLS #'
                    type='text'
                    name='searchBar'
                    onChange={this.handleChange}
                    value={this.state.searchBar}
                />
                <button onClick={this.getBySearch}>Search</button>

                <div>
                    <label>Results</label>
                    {mappedResults}
                </div>
                {this.state.showResults
                ?
                    (<div>
                        {/* <Results searchResults={searchResults} /> */}
                    </div>)
                :
                (<div>

                </div>)
                }
                {/* <MasterForm />                 */}
            </div>
        )
    }
}
