import React, { useState } from 'react'

const ContactForm = ({ setNotification }) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ telNumber, setTelNumber ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ date, setDate ] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, email, telNumber, date, message)
        setName('')
        setEmail('')
        setTelNumber('')
        setMessage('')
        setDate('')
        setNotification('Thank you, we got your message!')
        setTimeout(() => {
            setNotification(null)
        }, 3000)
    }

    const adjustArea = (props) => {
        props.style.height = '20px'
        props.style.height = (props.scrollHeight) + 'px'
    }

    return (
        <form className='contactForm' onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label> Name* </label>
                    <input type='text' name='name' maxLength='50' value={name} onChange={({ target }) => setName(target.value)} required />
                    <span>Enter your full name here</span>
                </li>
                <li>
                    <label> E-Mail* </label>
                    <input type='email' name='email' maxLength='50' value={email} onChange={({ target }) => setEmail(target.value)} required />
                    <span>Enter a valid email address</span>
                </li>
                <li>
                    <label> Phone* </label>
                    <input type='text' name='number' maxLength='15' value={telNumber} onChange={({ target }) => setTelNumber(target.value)} required />
                    <span>Enter a valid telephone number</span>
                </li>
                <li>
                    <label> Preferred date </label>
                    <input type='text' name='date' maxLength='12' value={date} onChange={({ target }) => setDate(target.value)} />
                    <span>DD  .  MM  .  YYYY (Optional)</span>
                </li>
                <li>
                    <label> Message* </label>
                    <textarea name='msg' onKeyUp={(e) => adjustArea(e.target)} value={message} onChange={({ target }) => setMessage(target.value)} required />
                    <span> Say anything! </span>
                </li>
                <li>
                    <input type='submit' value='Send' />
                </li>
            </ul>
        </form>
    )
}

export default ContactForm