import React from 'react'
import { Link } from 'react-router-dom'

const AppBar = () => {

    return (
        <div className='appBarContainer'>
            <div className='appBarText'>
                <Link to='/'>Main page</Link>
            </div>
            <div className='appBarText'>
                <Link to='/about'>About us</Link>
            </div>
            <div className='appBarText'>
                <Link to='/contact'>Contact us</Link>
            </div>
            <div className='appBarText'>
                <Link to='/authorize'>Authorize</Link>
            </div>
        </div>
    )
}

export default AppBar