import React from 'react'
import { Link } from 'react-router-dom'

const AppBar = () => {
    const style = {
        color: 'orange',
        textDecoration: 'inherit',
        fontSize: '1.5rem'
    }

    return (
        <div className='appBar'>
            <Link style={style} to={'/'}> Main page </Link>
            <Link style={style} to={'/about'}> The Studio </Link>
            <Link style={style} to={'/contact'}> Contact us </Link>
            <Link style={style} to={'/info'}> Useful information </Link>
        </div>
    )
}

export default AppBar