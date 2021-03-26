import { init } from 'emailjs-com'
init('user_LnvdMbCmAJ2FBwIpN2Ozy')
import * as emailjs from 'emailjs-com'

const templateID = 'template_j148qlm'

const sendMail = (name, email, telNumber, date, message) => {
    emailjs
        .send(
            'default_service',
            templateID,
            {
                name,
                email,
                telNumber,
                date,
                message
            }
        )
        .then(res => {
            if (res.status === 200) {
                console.log('Message sent succesfully!')
            }
        })
        .catch(err => console.error('Failed to send a message. Error: ', err))
}

export default { sendMail }