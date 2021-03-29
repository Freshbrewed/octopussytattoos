import React from 'react'
import { Link } from 'react-router-dom'

const BurgerMenu = ({ open }) => {

    const hide = (open) => ({
        transform: open ? 'translateX(0)' : 'translateX(-100%)'
    })

    return (
        <nav className='burgerMenu' style={hide(open)} open={open}>
            <a href='/#home' className='link'> Home </a>
            <Link className='link' to={'/about'}> The Studio </Link>
            <a href='/#contact' className='link'> Contact us </a>
            <Link className='link' to={'/info'}> Useful information </Link>
        </nav>
    )
}

export default BurgerMenu