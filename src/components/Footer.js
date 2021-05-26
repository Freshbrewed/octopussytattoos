import React from 'react'

const Footer = () => {
    const date = new Date()
    return (
        <div className='footer' >
            <div>© Octopussy Tattoos {date.getFullYear()}</div>
        </div>
    )
}

export default Footer