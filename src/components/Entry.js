import React, { useEffect } from 'react'
import logo from '../assets/logo_transparent.png'

const Entry = ({ isPlayed, setIsPlayed }) => {

    useEffect(() => {
        const entry = document.getElementById('entry')
        if (entry && !isPlayed) {
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

    if (isPlayed === true) return <div />
    return (
        <div className='entryAnimation' id='entry'>
            <img src={logo} className='entryLogo' />
        </div>
    )
}

export default Entry