import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const AppBar = () => {

    const style = {
        paddingTop: '1%',
        paddingLeft: '1%'
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={style}>
                <Logo width={12} height={70} />
                <Link to='/'>Main page</Link>
                <Logo width={12} height={70} />
            </div>
            <div style={style}>
                <Logo width={12} height={70} />
                <Link to='/about'>The Studio</Link>
                <Logo width={12} height={70} />
            </div>
            <div style={style}>
                <Logo width={12} height={70} />
                <Link to='/contact'>Contact us</Link>
                <Logo width={12} height={70} />
            </div>
            <div style={style}>
                <Logo width={12} height={70} />
                <Link to='/info'>Useful information</Link>
                <Logo width={12} height={70} />
            </div>
            <div style={style}>
                <Logo width={12} height={70} />
                <Link to='/authorize'>Authorize</Link>
                <Logo width={12} height={70} />
            </div>
        </div>
    )
}

export default AppBar