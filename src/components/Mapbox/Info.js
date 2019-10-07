import React, { PureComponent } from 'react'

// Stylesheet


export default class Info extends PureComponent {
    render() {
        const {info} = this.props
        const displayName = `${info.title}`
        return (
            <div className='info-container'>
                <div>
                    <div className='info-title'>
                        <p className='info-displayname'>{displayName}</p> | {' '}
                        <a
                            className='info-website'
                            target="_new"
                            href={info.website}
                        >
                            Website
                        </a>
                    </div>
                </div>
                <div className='info-image'>
                    <img height={150} width={200} src={info.image} alt='info' />
                </div>
            </div>
        )
    }
}