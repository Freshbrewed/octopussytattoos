import React, { useRef, useState } from 'react'
import IntersectionObserver from '../hooks/IntersectionObserver'
import Image from './Image'

const ImageContainer = ({ image, LaunchGallery, changeCurrentIndex, changeGalOpen, idx }) => {
    const ref = useRef()
    const [isVisible, setIsVisible] = useState(false)

    /* Lazy load for images */
    IntersectionObserver({
        target: ref, onIntersect: ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                setIsVisible(true)
                observerElement.unobserve(ref.current)
            }
        }
    })

    return (
        <div ref={ref} >
            {isVisible && (
                <Image data={image} LaunchGallery={LaunchGallery} changeCurrentIndex={changeCurrentIndex} changeGalOpen={changeGalOpen} idx={idx} />
            )}
        </div>
    )
}

export default ImageContainer