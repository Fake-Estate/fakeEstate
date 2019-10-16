import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'

// Stylesheet
import './Info.css';

export default class Info extends PureComponent {
    render() {
        const {info} = this.props
        const displayName = `${info.address}`
        const { city, state } = info
        return (
            <Link to={`/listing/${info.id}`}>
                <div className='info-container'>
                    <div>
                        <div className='info-title'>
                            <p className='info-displayname'>{displayName}</p>
                            <p>{city}, {state}</p>
                        </div>
                    </div>
                    <div className='info-image'>
                        <img height={150} width={200} src={info.img} alt='info' />
                    </div>
                </div>
            </Link>
        )
    }
}