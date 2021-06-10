import React, { useState } from 'react'
import Lightbox from 'react-awesome-lightbox'
import 'react-awesome-lightbox/build/style.css'
import Image from './Image'

const Gallery = ({ media, loaded }) => {
    if (media === null) return <div>Loading . . .</div>

    const [galOpen, changeGalOpen] = useState(false)
    const [currentIndex, changeCurrentIndex] = useState(0)
    const mapped = media.map(({ media_url, caption, media_type, thumbnail_url }) =>
        ({ url: media_url, title: caption, type: media_type, thumb: thumbnail_url }))

    const LaunchGallery = (_i, changeCurrentIndex, changeGalOpen) => {
        changeCurrentIndex(_i)
        changeGalOpen(true)
    }

    return (
        <div className="image-grid">
            {galOpen ?
                <Lightbox startIndex={currentIndex} images={mapped} doubleClickZoom='0' onClose={() => changeGalOpen(false)} />
                : null}
            {loaded ?
                mapped.map((image, idx) => {
                    return (
                        <Image key={image.url} image={image} LaunchGallery={LaunchGallery} changeCurrentIndex={changeCurrentIndex} changeGalOpen={changeGalOpen} idx={idx} />
                    )
                }) : <div>Loading . . .</div>}
        </div>
    )
}

export default Gallery