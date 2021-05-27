import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from './SocialMedia'

const AppBar = () => {
    return (
        <div className='appBarContainer'>
            <div className='appBarContent'>
                <Link className='link' to={'/'}> Home </Link>
                <Link className='link' to={'/about'}> The Studio </Link>
                <a href='/#contact' className='link'> Contact us </a>
                <Link className='link' to={'/info'}> Useful information </Link>
                <SocialMedia width={21} height={21} />
            </div>
        </div>
    )
}

export default AppBar