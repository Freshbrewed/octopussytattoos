import React, { useState } from 'react'
import Lightbox from 'react-awesome-lightbox'
import 'react-awesome-lightbox/build/style.css'
import Image from './Image'

const Gallery = ({ media, loaded }) => {
    if (media === null) return <div>Loading . . .</div>

    const [galOpen, changeGalOpen] = useState(false)
    const [currentIndex, changeCurrentIndex] = useState(0)

    const images = media.filter(element => element.media_type !== 'VIDEO')
        .map((image) =>
            ({ id: image.id, url:image.media_url, title: image.caption, type: image.media_type }))

    const LaunchGallery = (_i, changeCurrentIndex, changeGalOpen) => {
        changeCurrentIndex(_i)
        changeGalOpen(true)
    }
    return (
        <div >
            <div id='grid-scroll' />
            <div className="image-grid image-grid-gallery">
                {galOpen ?
                    <Lightbox startIndex={currentIndex} images={images} doubleClickZoom='0' onClose={() => changeGalOpen(false)} />
                    : null}
                {loaded ?
                    images.map((image, idx) => {
                        return (
                            <Image key={image.id} image={image} LaunchGallery={LaunchGallery} changeCurrentIndex={changeCurrentIndex} changeGalOpen={changeGalOpen} idx={idx} />
                        )
                    }) : <div>Loading . . .</div>}
            </div>
        </div>
    )
}

export default Gallery