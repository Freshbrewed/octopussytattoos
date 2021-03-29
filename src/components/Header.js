import React from 'react'
import banner from '../assets/banner.png'

const Header = () => {

    const handleClick = () => {
        //redirect
    }
    return (
        <img src={banner} className='header' id='home' onClick={handleClick} />
    )
}

export default Header