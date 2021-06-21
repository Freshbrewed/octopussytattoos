import React, { useEffect, useState } from 'react'
import logo from '../assets/logo_transparent.png'

const Entry = () => {
    const [played, setIsPlayed] = useState(false)

    useEffect(() => {
        const entry = document.getElementById('entry')
        if (entry && !played) {
            try {
                setTimeout(() => {
                    if (entry.parentNode) {
                        entry.parentNode.removeChild(entry)
                        setIsPlayed(true)
                    }
                }, 3650)
            }
            catch (error) {
                console.log(error)
            }
        }
    }, [])

    if (played === true) return <div />
    return (
        <div className='entryAnimation' id='entry'>
            <img src={logo} className='entryLogo' />
        </div>
    )
}

export default Entry