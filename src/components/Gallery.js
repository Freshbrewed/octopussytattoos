import React, { useState } from 'react'
import Lightbox from 'react-awesome-lightbox'
import 'react-awesome-lightbox/build/style.css'

const Gallery = ({ media }) => {
    if (media === null) return <div>Loading . . .</div>

    const [galopen, changeGalOpen] = useState(false)
    const [currentIndex, changeCurrentIndex] = useState(0)
    const mapped = media.map(({ media_url, caption }) => ({ url: media_url, title: caption }))

    const LaunchGallery = (_i, changeCurrentIndex, changeGalOpen) => {
        changeCurrentIndex(_i)
        changeGalOpen(true)
    }
    return (
        <div className="image-grid">
            {galopen ?
                <Lightbox startIndex={currentIndex} images={mapped} onClose={() => changeGalOpen(false)} />
                : null}
            {mapped.map((_im, idx) => <img key={_im.url} className='image' src={_im.url} alt={_im.title} onClick={() => LaunchGallery(idx, changeCurrentIndex, changeGalOpen)} />)}
        </div>
        /*<Lightbox images={mapped} zoomStep={0.45} onClose={() => changeGalOpen(false)} doubleClickZoom='2' showTitle='true' />*/
    )
}

export default Gallery