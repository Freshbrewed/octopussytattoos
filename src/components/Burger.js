import React from 'react'

const Burger = ({ open, setOpen }) => {

    const firstChild = (open) => ({
        transform: open ? 'rotate(45deg)' : 'rotate(0)'
    })

    const secondChild = (open) => ({
        opacity: open ? '0' : '1',
        transform: open ? 'translateX(20px)' : 'translateX(0)'
    })

    const thirdChild = (open) => ({
        transform: open ? 'rotate(-45deg)' : 'rotate(0)'
    })

    return (
        <button className='burger' onClick={() => setOpen(!open)}>
            <div style={firstChild(open)}/>
            <div style={secondChild(open)}/>
            <div style={thirdChild(open)}/>
        </button>

    )
}

export default Burger