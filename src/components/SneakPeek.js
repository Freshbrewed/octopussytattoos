import React from 'react'
import { Link } from 'react-router-dom'

const SneakPeek = ({ media }) => {
    if (media === null) return <div>Loading . . .</div>
    //Hard coded URLs are going to get signature expired. Must be filtered from the fresh list of queried media.
    const dog = media.filter(picture => picture.id.includes('17853723223110052'))[0].media_url
    const cactus = media.filter(picture => picture.id.includes('17915617936366292'))[0].media_url
    const woman = media.filter(picture => picture.id.includes('17863820668195919'))[0].media_url
    const dragon = media.filter(picture => picture.id.includes('17960715370018923'))[0].media_url
    const flower = media.filter(picture => picture.id.includes('17894853508144840'))[0].media_url
    const abstract = media.filter(picture => picture.id.includes('17861158891050945'))[0].media_url
    const skull2 = media.filter(picture => picture.id.includes('17841808627070175'))[0].media_url
    const fly = media.filter(picture => picture.id.includes('18199949659014185'))[0].media_url
    const scorpion = media.filter(picture => picture.id.includes('17858666932035535'))[0].media_url
    const lotus = media.filter(picture => picture.id.includes('17970896263210577'))[0].media_url
    const skull = media.filter(picture => picture.id.includes('17930028691066409'))[0].media_url
    const flower3 = media.filter(picture => picture.id.includes('17877207322082243'))[0].media_url
    return (
        <div>
            <div className='contactTitle checkGallery'>Check out our</div>
            <div className='contactTitle'>
                <Link to={'/gallery'} className='clickGallery'>Gallery</Link>
            </div>
            <div className='image-grid image-grid2'>
                <img className='image imageSide' src={scorpion} />
                <img className='image image2' src={flower3} />
                <img className='image image2' src={skull2} />
                <img className='image imageSide1' src={lotus} />
            </div>
            <div className='image-grid image-grid3'>
                <img className='image image2' src={dog} />
                <img className='image image2' src={woman} />
                <img className='image image2' src={cactus} />
                <img className='image image2' src={dragon} />
            </div>
            <div className='image-grid image-grid4'>
                <img className='image imageSide2' src={abstract} />
                <img className='image image2' src={skull} />
                <img className='image image2' src={flower} />
                <img className='image imageSide3' src={fly} />
            </div>
        </div>


    )
}

export default SneakPeek