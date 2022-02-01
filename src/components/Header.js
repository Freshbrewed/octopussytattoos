import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../assets/banner.png'

const Header = () => {
    return (
        <Link className='link' to={'/'}>
            <img src={banner} className='header'/>
        </Link>
    )
}

export default Header