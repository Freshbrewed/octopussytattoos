import React from 'react'
import ContactForm from './ContactForm'

const ContactInfo = ({ setNotification }) => {
    return (

        <div className='contactInfoContainer'>
            <div className='contactInfoText'>
                Book your time. Should you have any questions regarding
                the tattoo, our studio or anything else, just shoot away.
                We&apos;ll be happy answering your questions to
                ensure you&apos;ll have a rock smooth and
                unforgettable experience with us!
            </div>
            <ContactForm setNotification={setNotification} />
        </div>


    )
}

export default ContactInfo