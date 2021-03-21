import React from 'react'

const Image = ({ data }) => {
    if (data.media_type === 'VIDEO')
        return (
            <img className='image' src={data.thumbnail_url} />
        )
    return (
        <img className='image' src={data.media_url} />
    )
}

export default Image