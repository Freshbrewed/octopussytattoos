import React, { useState } from 'react'

const ContactForm = ({ setNotification }) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ telNumber, setTelNumber ] = useState('')
    const [ message, setMessage ] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, email, telNumber, message)
        setName('')
        setEmail('')
        setTelNumber('')
        setMessage('')
        setNotification('Thank you, we got your message!')
        setTimeout(() => {
            setNotification(null)
        }, 3000)
    }
    return (
        <form className='contactForm' onSubmit={handleSubmit}>
            <div>TODO STYLING</div>
            <div>
                Name:
                <input id='name' value={name} onChange={({ target }) => setName(target.value)}  />
            </div>
            <div>
                E-mail
                <input id='email' value={email} onChange={({ target }) => setEmail(target.value)}  />
            </div>
            <div>
                Telephone number
                <input id='telNumber' value={telNumber} onChange={({ target }) => setTelNumber(target.value)}  />
            </div>
            <div>
                Message
                <input id='message' value={message} onChange={({ target }) => setMessage(target.value)}  />
            </div>
            <button style={{ width: 'fit-content' }} id='submit' type='submit'>Send</button>
        </form>
    )
}

export default ContactForm