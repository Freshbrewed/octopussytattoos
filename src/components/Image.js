import React from 'react'

const Image = ({ image, LaunchGallery, idx, changeCurrentIndex, changeGalOpen }) => {
    if (image.type === 'VIDEO') return
    <div className='imgContainer'>
        <img className="image img-nohover" src={image.thumb} alt={image.title}
            onClick={() => LaunchGallery(idx, changeCurrentIndex, changeGalOpen)} />
    </div>

    return <div className='imgContainer'>
        <img className="image img-nohover" src={image.url} alt={image.title}
            onClick={() => LaunchGallery(idx, changeCurrentIndex, changeGalOpen)} />
    </div>
}

export default Image