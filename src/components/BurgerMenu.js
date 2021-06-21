import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from './SocialMedia'

const BurgerMenu = ({ open, setOpen, isClicked, setClicked }) => {
    const hide = (open) => ({
        transform: open ? 'translateX(0)' : 'translateX(-100%)'
    })

    const handleClick = () => {
        setOpen(!open)
        setClicked(!isClicked)
    }

    return (
        <nav className='burgerMenu' style={hide(open)}>
            <Link className='link' to={'/'} onClick={() => setOpen(!open)}>Home</Link>
            <Link className='link' to={'/gallery'} onClick={() => setOpen(!open)}>Gallery</Link>
            <Link className='link' to={'/'} onClick={() => handleClick()}>Contact us</Link>
            <Link className='link' to={'/info'} onClick={() => setOpen(!open)}> Useful information </Link>
            <SocialMedia width={40} height={40}/>
        </nav>
    )
}

export default BurgerMenu