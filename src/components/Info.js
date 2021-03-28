import React, { useState } from 'react'
import text from '../data'
import Logomize from './Logomize'

const Info = () => {
    const [language, setLanguage] = useState('FIN')
    const [display, setDisplay] = useState(text.infoEng)

    const handleClick = () => {
        language === 'ENG' ? (
            setLanguage('FIN'), setDisplay(text.infoEng)
        ) :
            (
                setLanguage('ENG'), setDisplay(text.infoFin)
            )
    }

    return (
        <div className='info'>
            <button onClick={handleClick} id='languageButton'>{language}</button>
            {display.map((content, index) =>
                <Logomize text={content} key={index} />
            )}
        </div>
    )
}

export default Info