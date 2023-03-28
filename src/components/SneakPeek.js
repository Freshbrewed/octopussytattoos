import React from 'react'
import { Link } from 'react-router-dom'

const SneakPeek = ({ media }) => {
    if (media === null) return <div>Loading . . .</div>

    const images = media.filter(element => element.media_type !== 'VIDEO')

    return (
        <div>
            <div className='contactTitle checkGallery'>Check out our</div>
            <div className='contactTitle'>
                <Link to={'/gallery'} className='clickGallery'>Gallery</Link>
            </div>
            <div className='frontPictures'>
                <div className='image-grid image-grid2'>
                    <img className='image imageSide' src={images[10].media_url} />
                    <img className='image image2' src={images[9].media_url} />
                    <img className='image image2' src={images[1].media_url} />
                    <img className='image imageSide1' src={images[2].media_url} />
                </div>
                <div className='image-grid image-grid3'>
                    <img className='image image2' src={images[3].media_url} />
                    <img className='image image2' src={images[16].media_url} />
                    <img className='image image2' src={images[6].media_url} />
                    <img className='image image2' src={images[12].media_url} />
                </div>
                <div className='image-grid image-grid4'>
                    <img className='image imageSide2' src={images[19].media_url} />
                    <img className='image image2' src={images[4].media_url} />
                    <img className='image image2' src={images[0].media_url} />
                    <img className='image imageSide3' src={images[17].media_url} />
                </div>
            </div>
        </div>
    )
}

export default SneakPeek