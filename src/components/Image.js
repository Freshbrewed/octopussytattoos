import React from 'react'

const Image = ({ data }) => {

    const style = {
        display: 'flex',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }

    if (data.media_type === 'VIDEO')
        return (
            <img style={style} src={data.thumbnail_url} />
        )
    return (
        <img style={style} src={data.media_url} />
    )
}

export default Image