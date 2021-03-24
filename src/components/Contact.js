import React, { useState } from 'react'
import ContactForm from './ContactForm'
import Notification from './Notification'
import Gmaps from './GoogleMaps'

const Contact = () => {
    const [notification, setNotification] = useState(null)

    if (notification) return (
        <div className='contactContainer'>
            <h3 style={{ textAlign: 'center' }}>Contact us!</h3>
            <div className='contactContent'>
                <div className='contactText'>
                    Should you have any questions regarding
                    the tattoo, our studio or anything else, just shoot away.
                    We&apos;ll be happy answering your questions to
                    ensure you&apos;ll have a rock smooth and
                    unforgettable experience with us!
                    <br /><br />
                    Use the contact form to
                    either book yourself a time or ask away whatever you have in your mind.
                </div>
                <Notification notification={notification} />
                <Gmaps />
            </div>
        </div>

    )
    return (
        <div className='contactContainer'>
            <div className='contactTitle'> Contact us! </div>
            <div className='contactContent'>
                <div className='contactText'>
                    Should you have any questions regarding
                    the tattoo, our studio or anything else, just shoot away.
                    We&apos;ll be happy answering your questions to
                    ensure you&apos;ll have a rock smooth and
                    unforgettable experience with us!
                    <br /><br />
                    Use the contact form to
                    either book yourself a time or ask away whatever you have in your mind.
                </div>
                <ContactForm setNotification={setNotification} />
                <Gmaps />
            </div>
        </div>

    )
}

export default Contact