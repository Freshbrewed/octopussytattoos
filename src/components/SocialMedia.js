import React from 'react'
import fb from '../assets/fb.png'
import insta from '../assets/instagram.png'

const SocialMedia = ({ width, height }) => {
    return (
        <div>
            <a style={{ display: 'table-cell' }} href='https://www.facebook.com/octopusytattoos' target="_blank"
                rel="noopener noreferrer">
                <img src={fb} style={{ width: width, height: height, paddingRight: '1rem' }} />
            </a>

            <a style={{ display: 'table-cell' }} href="https://www.instagram.com/octopusytattoos/" target="_blank"
                rel="noopener noreferrer">
                <img src={insta} style={{ width: width, height: height }} />
            </a>
        </div>
    )
}

export default SocialMedia