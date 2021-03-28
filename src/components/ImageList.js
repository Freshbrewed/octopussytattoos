import React from 'react'
import ImageContainer from './ImageContainer'

const ImageList = ({ media, loaded }) => {
    if (media === null) return <div>Loading . . .</div>
    return (
        <div className='image-grid'>
            {loaded ?
                media.map(image => {
                    return (
                        <div key={image.id} className='image'>
                            <ImageContainer data={image} />
                        </div>
                    )
                }) : <div>Loading . . .</div>}
        </div>
    )
}

export default ImageList