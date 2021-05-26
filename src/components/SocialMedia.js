import React from 'react'
import fb from '../assets/fb.png'
import insta from '../assets/instagram.png'

const SocialMedia = () => {
    return (
        <div>
            <a style={{ display: 'table-cell' }} href='https://www.facebook.com/octopusytattoos' target="_blank"
                rel="noopener noreferrer">
                <img src={fb} style={{ width: '64px', heigth: '64px' }} />
            </a>

            <a style={{ display: 'table-cell' }} href="https://www.instagram.com/octopusytattoos/" target="_blank"
                rel="noopener noreferrer">
                <img src={insta} style={{ width: '64px', heigth: '64px' }} />
            </a>
        </div>
    )
}

export default SocialMedia