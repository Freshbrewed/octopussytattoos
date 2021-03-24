import React from 'react'
import logo from '../assets/logoTrimmed.png'

const Logomize = ({ width, height, text }) => {
    const style = {
        width: `${width}%`,
        height: `${height}%`
    }
    return (
        <div className='infoItem'>
            <img src={logo} style={style} />
            &nbsp;
            <div>{text}</div>
        </div>
    )
}

export default Logomize