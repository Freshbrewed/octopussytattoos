import React from 'react'
import logo from '../assets/logoTrimmed.png'

const Logomize = ({ text }) => {
    return (
        <div className='infoItem'>
            <img src={logo} className='logo' />
            &nbsp;
            <div style={{ paddingTop: '0.3rem' }}>{text}</div>
        </div>
    )
}

export default Logomize