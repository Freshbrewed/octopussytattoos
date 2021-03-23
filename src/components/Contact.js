import React, { useState } from 'react'
import ContactForm from './ContactForm'
import Notification from './Notification'

const Contact = () => {
    const [notification, setNotification] = useState(null)

    if (notification) return (
        <div className='contactContainer'>
            <div className='contactText'>
                Book your time. Should you have any questions regarding
                the tattoo, our studio or anything else, just shoot away.
                We&apos;ll be happy answering your questions to
                ensure you&apos;ll have a rock smooth and
                unforgettable experience with us!
            </div>
            <Notification notification={notification} />
        </div>

    )
    return (
        <div className='contactContainer'>

            <div className='contactText'>
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

export default Contact