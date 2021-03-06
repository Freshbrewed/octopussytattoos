import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from './SocialMedia'

const AppBar = ({ isClicked, setClicked }) => {
    return (
        <div className='appBarContainer'>
            <div className='appBarContent'>
                <Link className='link' to={'/'}> Home </Link>
                <Link className='link' to={'/gallery'}> Gallery </Link>
                <Link className='link' to={'/'} onClick={() => setClicked(!isClicked)}> Contact us </Link>
                <Link className='link' to={'/info'}> Useful information </Link>
                <SocialMedia width={21} height={21} />
            </div>
        </div>
    )
}

export default AppBar