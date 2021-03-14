import React from 'react'
import banner from '../assets/banner.png'

const Header = () => {

    const style = {
        display: 'flex',
        width: '100%',
        height: '45vh'

    }
    return (
        <img src={banner} style={style} />
    )
}

export default Header