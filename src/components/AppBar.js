import React from 'react'
import { Link } from 'react-router-dom'

const AppBar = () => {
    return (
        <div className='appBar'>
            <Link className='link' to={'/'}> Main page </Link>
            <Link className='link' to={'/about'}> The Studio </Link>
            <Link className='link' to={'/contact'}> Contact us </Link>
            <Link className='link' to={'/info'}> Useful information </Link>
        </div>
    )
}

export default AppBar