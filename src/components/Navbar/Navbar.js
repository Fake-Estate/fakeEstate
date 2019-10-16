import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as Icon from 'react-feather'
import burger from './Hamburgaler.svg'
import realEstateLogo from './GrowingIndustry_IconSet_RealEstate.svg'
import { slideNav } from '../../redux/reducers/reducer'
import { connect } from 'react-redux'

import './Navbar.css'

class Navbar extends Component {
    slideOut = () => {
        const { slide } = this.props
        this.props.slideNav(slide)
    }

    render() {
        return (
            <div className='navbar-container'>
                <div className='hamburglar'>
                    <div className='fakeEstate-logo'>
                        <Link to='/' className='logo-link'>
                            <img 
                                src = {realEstateLogo}
                                alt='logo'
                                className='logo'
                            />
                            <p>
                                REU
                            </p>
                            </Link>
                    </div>
                    <img 
                        src = {burger}
                        alt='menu' 
                        onClick={this.slideOut} 
                        className="burger-menu"
                    />
                </div>
                <div className={this.props.slide ? "nav-menu slide-out" : "nav-menu"}>
                    <div className='empty-space' onClick={this.slideOut}></div>
                    <div className='inner-nav'>
                        <div className='close-btn'>
                        <Icon.X className='closer' onClick={this.slideOut}/>
                        </div>
                        <div className='realtor-container'>
                            <Link to='/portal' className='realtor-portal' onClick={this.slideOut}>Realtor Portal</Link>
                        </div>
                        <div className='realtor-container'>
                            <Link to='/map' className='realtor-portal' onClick={this.slideOut}>Map</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        slide: state.slide
    }
}

export default connect(mapStateToProps,{slideNav})(Navbar)