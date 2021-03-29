import React from 'react'
import banner from '../assets/banner.png'

const Header = () => {
    return (
        <a href='/#home' className='link'>
            <img src={banner} className='header' id='home' />
        </a>
    )
}

export default Header