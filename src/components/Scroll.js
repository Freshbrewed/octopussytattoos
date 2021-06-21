import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Scroll = (props) => {
    const { children } = props

    const location = useLocation()

    /* useEffect(() => {
         window.scrollTo({
             top: props.top,
             behavior: 'smooth'
         })
     }, [location]) */

    useEffect(() => {
        const body = document.getElementById(props.id)
        if (body) {
            body.scrollIntoView({
                behavior: 'smooth'
            }, 500)
        }
    }, [location])

    return <main>{children}</main>
}

export default Scroll