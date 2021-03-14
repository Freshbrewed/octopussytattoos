import React from 'react'
import logo from '../assets/logoTrimmed.png'

const Logo = ( { width, height } ) => {
    const style = {
        width: `${width}%`,
        height: `${height}%`
    }
    return (
        <img src={logo} style={style} />
    )
}

export default Logo