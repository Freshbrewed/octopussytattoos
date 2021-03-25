import React from 'react'
import { Link } from 'react-router-dom'

const AppBar = () => {
    return (
        <div className='appBarContainer'>
            <div className='appBarContent'>
                <a href='/#home' className='link'> Home </a>
                <Link className='link' to={'/about'}> The Studio </Link>
                <a href='/#contact' className='link'> Contact us </a>
                <Link className='link' to={'/info'}> Useful information </Link>
            </div>
        </div>
    )
}

export default AppBar