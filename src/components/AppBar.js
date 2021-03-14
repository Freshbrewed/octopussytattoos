import React from 'react'
import { Link } from 'react-router-dom'

const AppBar = () => {

    const style = {
        paddingTop: '1%',
        paddingLeft: '1%'
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={style}>
                <Link to='/'>Main page</Link>
            </div>
            <div style={style}>
                <Link to='/about'>About us</Link>
            </div>
            <div style={style}>
                <Link to='/contact'>Contact us</Link>
            </div>
            <div style={style}>
                <Link to='/authorize'>Authorize</Link>
            </div>
        </div>
    )
}

export default AppBar