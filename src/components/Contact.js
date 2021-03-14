import React from 'react'

const ContactInfo = () => {
    //Proper linking to be added
    const style = {
        display: 'flex',
        flexDirection: 'column',
        padding: '5%'
    }

    return (
        <div style={style}>
            <p className='contactInfoText'>
                Address: Helsinginkatu 34-32, 00510 Helsinki
            </p>
            <p>Tel number</p>
            <p className='contactInfoText'>
                E-mail: octotattoos@gmail.com
            </p>
            <p className='contactInfoText'>
                Instagram: octopusytattoos
            </p>
            <p>Maps link</p>
            <p>Public transports?</p>
        </div>
    )
}

export default ContactInfo