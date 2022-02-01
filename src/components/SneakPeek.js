import React from 'react'
import { Link } from 'react-router-dom'

const SneakPeek = ({ media }) => {
    if (media === null) return <div>Loading . . .</div>

    return (
        <div>
            <div className='contactTitle checkGallery'>Check out our</div>
            <div className='contactTitle'>
                <Link to={'/gallery'} className='clickGallery'>Gallery</Link>
            </div>
            <div className='frontPictures'>
                <div className='image-grid image-grid2'>
                    <img className='image imageSide' src={media[7].media_url} />
                    <img className='image image2' src={media[2].media_url} />
                    <img className='image image2' src={media[1].media_url} />
                    <img className='image imageSide1' src={media[3].media_url} />
                </div>
                <div className='image-grid image-grid3'>
                    <img className='image image2' src={media[4].media_url} />
                    <img className='image image2' src={media[8].media_url} />
                    <img className='image image2' src={media[10].media_url} />
                    <img className='image image2' src={media[0].media_url} />
                </div>
                <div className='image-grid image-grid4'>
                    <img className='image imageSide2' src={media[5].media_url} />
                    <img className='image image2' src={media[9].media_url} />
                    <img className='image image2' src={media[11].media_url} />
                    <img className='image imageSide3' src={media[6].media_url} />
                </div>
            </div>
        </div>
    )
}

export default SneakPeek