import React from 'react'

const Image = ({ image, LaunchGallery, idx, changeCurrentIndex, changeGalOpen }) => {
    if (image.type === 'VIDEO') return <img className="image img-nohover" src={image.thumb} alt={image.title}
        onClick={() => LaunchGallery(idx, changeCurrentIndex, changeGalOpen)}/>

    return <img className="image img-nohover" src={image.url} alt={image.title}
        onClick={() => LaunchGallery(idx, changeCurrentIndex, changeGalOpen)}/>
}

export default Image