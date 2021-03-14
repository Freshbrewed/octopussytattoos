import React from 'react'

const Footer = () => {

    const style = {
        paddingLeft: '25%'
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }} >
            <p style={style}>Helsinginkatu 34-32, 00510 Helsinki</p>
            <p style={style}>Puh. 040 354 2314</p>
        </div>
    )
}

export default Footer