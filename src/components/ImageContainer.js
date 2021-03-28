import React, { useRef, useState } from 'react'
import IntersectionObserver from '../hooks/IntersectionObserver'
import Image from './Image'

const ImageContainer = ({ data }) => {

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
                <Image data={data} />
            )}
        </div>
    )
}

export default ImageContainer